"use client";

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import classNames from 'classnames';
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

const Sidebar = () => {
    const pathname = usePathname();
    
  return (
    <aside className='sidebar'>
       <div className="flex size-full flex-col gap-4">
        <Link href="/" className='sidebar-logo'>
            <Image src="/assets/images/logo-color.svg" alt="logo" width={125} height={25}/>
        </Link>

        <nav className='sidebar-nav'>
            <SignedIn>
                <ul className='sidebar-nav_elements'>
                    {navLinks.slice(0,6).map((link) => {
                        const isActive = link.route === pathname
                        return (
                            <li key={link.route} className={classNames(`sidebar-nav_element group transition ease-in-out`, 
                            {
                                'bg-[#00C9FF] text-white hover:bg-sky-500': isActive,
                                'text-gray-700': !isActive,
                            })}>
                              <Link className="sidebar-link" href={link.route}>
                                <Image 
                                  src={link.icon}
                                  alt="logo"
                                  width={24}
                                  height={24}
                                  className={`${isActive && 'brightness-200'}`}
                                />
                                {link.label}
                              </Link>
                            </li> 
                          )
                        })}
                        </ul>

                        <ul>
                            {navLinks.slice(6).map((link) => {
                            const isActive = link.route === pathname
                            return (
                                <li key={link.route} className={classNames(`sidebar-nav_element group transition ease-in-out`, 
                                    {
                                        'bg-[#00C9FF] text-white hover:bg-sky-500': isActive,
                                        'text-gray-700': !isActive,
                                    })}>
                                    <Link className="sidebar-link" href={link.route}>
                                        <Image 
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                            className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                    </Link>
                                </li> 
                            )
                            })}
                            <li className='flex-center cursor-pointer gap-2 p-4'>
                                <UserButton afterSignOutUrl='/' showName/>
                            </li>
                        </ul>
            </SignedIn>

            <SignedOut>
               <Button asChild className='button bg-[#00C9FF] text-white hover:bg-sky-500'>
                    <Link href="/sign-in">Login</Link>
               </Button>
            </SignedOut>
        </nav>
       </div>
    </aside>
    
  )
}

export default Sidebar