import { FC, PropsWithChildren } from 'react'
import { LinkItem } from '@t/common-types'

import { Navbar } from '../navigation/navbar'
import { Footer } from '../footer'

const navItems: LinkItem[] = [
  // noting to see here, but feel free to add your own links using the route() helper
  // { label: 'Home', href: route('home') },
]

export const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={'overflow-hidden overflow-y-auto h-full'}>
      <MainLayoutNavbar />
      <div className="flex flex-grow flex-col container mx-auto sm:pt-4 z-0 mb-32">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </div>
  )
}

function MainLayoutNavbar() {
  return (
    <div className={'sticky top-0 w-full z-20 bg-base-100'}>
      <div className={'container mx-auto'}>
        <Navbar items={navItems} />
      </div>
    </div>
  )
}
