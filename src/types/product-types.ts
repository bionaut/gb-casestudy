import { z } from 'zod'

export type Product = z.infer<typeof Product>
export const Product = z.object({
  id: z.number(),
  name: z.string(),
  formatted_price: z.string(),
  product_url: z.string(),
  image: z.string(),
  small_image: z.string(),
  thumbnail: z.string(),
  reviews_count: z.number(),
  rating_summary: z.number(),
  saleable: z.boolean(),
})

export interface ProductFilterConfig {
  name: string
  code: string
  global_name: string
  display_mode: string
  position: string
  options: {
    name: string
    slug: string
    value: string
    count: number
  }[]
}
