import React, { FC, useMemo } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Bars3Icon, ShoppingCartIcon } from '@heroicons/react/24/solid'
import { LinkItem } from '@t/common-types'
import { route } from "../../routes/routes";

interface NavbarProps {
  items: LinkItem[]
}

export const Navbar: FC<NavbarProps> = (props) => {
  const { items } = props

  const menuItems = useMemo(
    () =>
      items.map((item, index) => (
        <li key={index}>
          <Link href={item.href}>{item.label}</Link>
        </li>
      )),
    [items],
  )

  return (
    <div className="navbar rounded-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <Bars3Icon className={'h-6 w-6'} />
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {menuItems}
          </ul>
        </div>
        <Link href={route('home')}>
          <Image className={'dark:invert h-10 w-auto'} alt={'gymbeam logo'} width={700} height={200} src="/logo.webp" />
        </Link>
      </div>
      <div className="navbar-end px-4 space-x-2">
        <ul className="menu menu-horizontal hidden lg:flex px-1">{menuItems}</ul>
        <button className={'btn btn-ghost btn-circle'}>
          <ShoppingCartIcon className={' h-6 w-6'} />
        </button>
        <div className="btn btn-circle avatar">
          <div className="w-8 rounded-full">
            <Image alt={'avatar'} width={100} height={100} src="https://robohash.org/gymbeam" />
          </div>
        </div>
      </div>
    </div>
  )
}
