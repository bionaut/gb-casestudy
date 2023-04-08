import { z } from 'zod'
import React, { FC } from 'react'
import { Product, ProductFilterConfig } from '@t/product-types'
import { ProductItem } from '@components/products/product-item'
import { ProductsHeader } from '@components/products/products-header'

interface ProductsSectionProps {
  filters: ProductFilterConfig[]
  products: Array<z.infer<typeof Product>>
}

export const ProductsSection: FC<ProductsSectionProps> = (props) => {
  const { filters, products } = props

  return (
    <section className="flex flex-1 flex-col px-4 md:px-0 space-y-4">
      <ProductsHeader filters={filters} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products?.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
