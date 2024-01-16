'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'


export default function Links() {
    const pathname = usePathname()
    return(
      <div className='header py-4'>
          
        <div className='container mx-auto'>
          <div className='columns-3 gap-8'>
          <nav>
            <ul className='flex justify-evenly text-xl font-bold'>
              <li>
                <Link className={`link ${pathname === '/' ? 'active' : ''}`} href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className={`link ${pathname === '/about' ? 'active' : ''}`}
                  href="/about"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
          </div>
      </div>
     </div>
    )
}