'use client'

import React, { FC, useState } from 'react'
import { ProductsFilters } from './products-filters'
import { ProductFilterConfig } from '@t/product-types'

interface ProductsHeaderProps {
  filters: ProductFilterConfig[]
}

export const ProductsHeader: FC<ProductsHeaderProps> = (props) => {
  const { filters } = props
  const [expanded, setExpanded] = useState(false)

  const toggleExpanded = () => {
    setExpanded(!expanded)
  }

  return (
    <div className="flex flex-col pb-4 border-b-2">
      <div className={'flex flex-1 my-6 items-center justify-between pr-8'}>
        <h2 className={'text-3xl lg:text-6xl font-bold'}>Products</h2>
        <button onClick={toggleExpanded} className={'btn'}>
          {expanded ? 'Hide' : 'Show'} filters
        </button>
      </div>
      {expanded && <ProductsFilters availableFilters={filters} />}
    </div>
  )
}
