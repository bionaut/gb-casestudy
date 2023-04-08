import { useState } from 'react'
import { useRouter, useSearchParams, usePathname } from 'next/navigation'

export const useSyncQS = () => {
  const pathname = usePathname()
  const search = useSearchParams()
  const router = useRouter()

  const qs = Object.fromEntries(search.entries())

  // This state is only used to trigger a re-render. Normally qs would be used directly
  const [state, setState] = useState(qs)

  const toggle = (filterCode: string, optionCode: string) => {
    const searchParams = new URLSearchParams(search)

    if (state[filterCode]) {
      const filterCodes = state[filterCode].split(',')
      const index = filterCodes.indexOf(optionCode)

      if (index === -1) {
        filterCodes.push(optionCode)
      } else {
        filterCodes.splice(index, 1)
      }

      if (filterCodes.length) {
        searchParams.set(filterCode, filterCodes.join(','))
      } else {
        searchParams.delete(filterCode)
      }
    } else {
      searchParams.set(filterCode, optionCode)
    }

    // this handles data re-fetching and url update
    const url = `${pathname}?${searchParams.toString()}`
    // until NextJs 13 fix is released, this is needed for reliable url update
    window.history.pushState({}, '', url)
    // this updates the url as well but because it is re-fetching data, it doesn't handle rapid clicks well
    router.replace(url)

    setState(Object.fromEntries(searchParams.entries()))
  }

  const reset = () => {
    router.replace(pathname)
    setState({})
  }

  return [state, toggle, reset] as const
}
