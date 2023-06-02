import Link from 'next/link'
import { ReactNode } from 'react'
import '../global.css'


export const metadata = {
  title: 'Dashboard',
  description: 'Dashboard',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
{/*       <header>
        <h1>Home</h1>
        Insine nav className, will be the navigation bar styles
        <nav className='bg-gray-200 shadow shadow-gray-300 w-100 px-8 md:px-auto'>
          <ul className=''>
            <Link href="/dashboard">Dashboard</Link>
          </ul>
        </nav>
      </header> */}
      <body>{children}</body>
    </html>
  )
}
