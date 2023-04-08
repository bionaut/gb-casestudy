import Image from 'next/image'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

import React, { FC } from 'react'
import { ProductRating } from './product-rating'
import type { Product } from '@t/product-types'

interface ProductItemProps {
  product: Product
}

export const ProductItem: FC<ProductItemProps> = (props) => {
  const { product } = props

  return (
    <div className="card w-full lg:w-96 bg-base-100 dark:bg-base-100 shadow-xl">
      <figure>
        <Image className={'w-full'} width={200} height={250} src={product.thumbnail} alt={product.name} />
      </figure>
      <div className="card-body">
        <div className={'flex space-x-2'}>
          <ProductRating rating={product.rating_summary} />
          <span>({product.reviews_count})</span>
        </div>
        <a href={product.product_url} target={'_blank'}>
          <h3 className="card-title link">{product.name}</h3>
        </a>
        <p className={'text-xl font-bold text-red-700 dark:text-red-400'}>{product.formatted_price}</p>
        <div className="card-actions justify-end">
          <button className="btn space-x-2">
            <span>Add to cart</span>
            <ShoppingCartIcon className={'w-6 h-6'} />
          </button>
        </div>
      </div>
    </div>
  )
}
