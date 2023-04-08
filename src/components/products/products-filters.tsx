'use client'

import React, { FC, useMemo } from 'react'
import { ProductFilterConfig } from '@t/product-types'
import { useSyncQS } from '@hooks/use-sync-qs'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ProductMultiselectFilter } from './product-filter'

interface ProductsFilterProps {
  availableFilters: ProductFilterConfig[]
}

export const ProductsFilters: FC<ProductsFilterProps> = (props) => {
  const { availableFilters } = props
  const [state, toggle, reset] = useSyncQS()

  const transformedFilters = useMemo(() => {
    return availableFilters.map((filter) => ({
      ...filter,
      // this, I guess is some kind of Magento specific thing for multiselect filters
      code: `${filter.code}[]`,
    }))
  }, [availableFilters])

  const hasActiveFilters = useMemo(() => {
    return Object.keys(state).length > 0
  }, [state])

  const isSelected = (filterCode: string, optionCode: string) => {
    const selectedOptions = state[filterCode] ? state[filterCode].split(',') : []
    return selectedOptions.includes(optionCode)
  }

  const multiselectFilters = useMemo(() => {
    return transformedFilters.filter((filter) => filter.display_mode === '0')
  }, [transformedFilters])

  const booleanFilters = useMemo(() => {
    return transformedFilters.filter((filter) => filter.display_mode === '1')
  }, [transformedFilters])

  return (
    <div className={'flex flex-col space-y-6'}>
      {hasActiveFilters && (
        <button onClick={() => reset()} className={'btn btn-error max-w-fit space-x-2 '}>
          <XCircleIcon className={'h-6 w-6'} />
          <span>Reset filters</span>
        </button>
      )}
      {multiselectFilters.map((filter) => (
        <ProductMultiselectFilter key={filter.code} filter={filter} isSelected={isSelected} onToggle={toggle} />
      ))}
      <span className={'text-lg font-bold underline'}>Miscellaneous</span>
      <div className={'grid grid-cols-2 lg:grid-cols-4 gap-2'}>
        {booleanFilters.map((filter) => {
          const optionCode = filter.options?.[0].value
          const classes = isSelected(filter.code, optionCode) ? 'btn btn-primary' : 'btn'
          return (
            <button onClick={() => toggle(filter.code, optionCode)} key={filter.code} className={classes}>
              {filter.name} ({filter.options?.[0]?.count})
            </button>
          )
        })}
      </div>
    </div>
  )
}
