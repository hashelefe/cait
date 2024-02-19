"use client";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import { navLinks } from '@/constants'
import { usePathname } from "next/navigation"
import { SignedIn, UserButton } from "@clerk/nextjs"
import classNames from "classnames"
import Image from "next/image"
import Link from "next/link"
  

const MobileNav = () => {
  const pathname = usePathname();
  return (
    <header className="header">
        <Link href="/" className="flex items-center gap-2 md:py-2">
            <Image src="/assets/images/logo-color.svg" alt="logo" width={125} height={25}/>
        </Link>

        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/"/>
                <Sheet>
                    <SheetTrigger>
                        <Image 
                            src="/assets/icons/menu.svg"
                            alt="menu"
                            width={32}
                            height={32}
                            className="cursor-pointer"
                        />
                    </SheetTrigger>
                    <SheetContent className="sheet-content sm:w-64">
                        <>
                            <Image
                                src="/assets/images/logo-color.svg"
                                alt="logo"
                                width={125}
                                height={25}
                                className="mb-4"
                            />
                        </>
                        <ul>
                            {navLinks.map((link) => {
                            const isActive = link.route === pathname
                            return (
                                <li key={link.route} className={classNames(`flex transition ease-in-out whitespace-nowrap p-18`, 
                                    {
                                        'text-[#00C9FF]': isActive,
                                        'text-gray-700': !isActive,
                                    })}>
                                    <Link className="sidebar-link" href={link.route}>
                                        <Image 
                                            src={link.icon}
                                            alt="logo"
                                            width={24}
                                            height={24}
                                            />
                                            {link.label}
                                    </Link>
                                </li> 
                            )
                            })}
                            <li className='cursor-pointer p-4'>
                                <UserButton afterSignOutUrl='/' showName/>
                            </li>
                        </ul>
                    </SheetContent>
                </Sheet>
            </SignedIn>
        </nav>
    </header>
  )
}

export default MobileNav