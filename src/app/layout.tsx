import React from 'react'
import { MainLayout } from '@components/layouts/main-layout'
import '../global.css'

export const metadata = {
  title: 'GymBeam',
  description: 'Boost your performance with proper nutrition',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body className={'absolute top-0 left-0 right-0 bottom-0 bg-base-100 dark:bg-gray-800 overflow-hidden'}>
        <MainLayout>{children}</MainLayout>
        {['production', 'staging'].includes(process.env.NODE_ENV) && <>{/* google tag, monitoring, etc... */}</>}
      </body>
    </html>
  )
}
