// normally react-query (or similar) would be used for this,
// but it would be overkill for this example

import type { Product, ProductFilterConfig } from '@t/product-types'
import { Product as ProductParser } from '@t/product-types'

interface ProductClientResult {
  error: unknown | null // without api spec, I can only guess what the error object looks like
  data: Product[] | null
  filters: ProductFilterConfig[]
}

const baseUrl = 'https://gymbeam.sk/rest/V1/gb/catalog'

export const getProducts = async (searchParams: Record<string, string>): Promise<ProductClientResult> => {
  try {
    const urlWithFilterParams = new URL(`${baseUrl}/products`)
    Object.entries(searchParams).forEach(([key, value]) => {
      urlWithFilterParams.searchParams.append(key, value)
    })

    console.log('Fetching products from: ', urlWithFilterParams.toString())
    const response = await fetch(urlWithFilterParams.toString())
    const raw = await response.json()

    if (!Array.isArray(raw.items)) {
      throw new Error('Invalid response')
    }

    const data = raw.items.filter((item: unknown) => {
      const { success } = ProductParser.safeParse(item)
      return success
    })

    const filters = raw.filters as ProductClientResult['filters']

    return {
      error: null,
      data,
      filters,
    }
  } catch (error) {
    return { error, data: null, filters: [] }
  }
}
