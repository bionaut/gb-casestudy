'use client'

import React, { FC, useState } from 'react'
import type { ProductFilterConfig } from '@t/product-types'

interface ProductFilterProps {
  filter: ProductFilterConfig
  isSelected: (filterCode: string, optionCode: string) => boolean
  onToggle: (filterCode: string, optionCode: string) => void
}

export const ProductMultiselectFilter: FC<ProductFilterProps> = (props) => {
  const { filter, isSelected, onToggle } = props
  const [showMore, setShowMore] = useState(false)

  const first6Options = filter.options?.slice(0, 6)
  const hasMoreOptions = filter.options?.length > 6
  const moreOptions = filter.options?.slice(6)
  const allOptions = showMore ? [...first6Options, ...moreOptions] : first6Options

  return (
    <div className={'flex flex-col space-y-2'}>
      <div key={filter.code} className={'flex space-x-2 items-center'}>
        <span className={'text-lg font-bold underline'}>{filter.name}</span>
      </div>
      <div className={'flex flex-wrap gap-2'}>
        {allOptions?.map((option) => {
          const { count, name, value } = option
          const classes = isSelected(filter.code, value) ? 'btn btn-primary' : 'btn'
          return (
            <button onClick={() => onToggle(filter.code, value)} className={classes} key={value}>
              {name} ({count})
            </button>
          )
        })}
        {hasMoreOptions && !showMore && (
          <button onClick={() => setShowMore(true)} className={'btn btn-outline'}>
            Show more
          </button>
        )}
      </div>
    </div>
  )
}
