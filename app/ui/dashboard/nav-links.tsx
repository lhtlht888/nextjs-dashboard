
'use client'
import { UserGroupIcon,  HomeIcon,  DocumentDuplicateIcon, WrenchIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'  //add for Link
import { usePathname } from 'next/navigation'
import clsx from 'clsx'

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: 'Home',        href: '/dashboard',             icon: HomeIcon },
  { name: 'Invoices',    href: '/dashboard/invoices',    icon: DocumentDuplicateIcon },
  { name: 'Customers',   href: '/dashboard/customers',   icon: UserGroupIcon }, 
  { name: 'work-config', href: '/dashboard/work-config', icon: WrenchIcon  }, 
]

export default function NavLinks() {
  const pathname = usePathname()
  //console.log(pathname)
  return (
    <>
      {links.map((link_element) => {
        const LinkIcon = link_element.icon;
        return (
          <Link   //<a 改為 <Link
            key={link_element.name}
            href={link_element.href}
            // className="flex h-[48px] grow  items-center  justify-center  gap-2  rounded-md
            //  bg-gray-50 p-3 text-sm font-medium
            //  hover:bg-sky-100 hover:text-blue-600 
            //  md:flex-none md:justify-start  md:p-2 md:px-3"
             className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md",
              "bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100",
              "hover:text-blue-600 md:flex-none md:justify-start  md:p-2 md:px-3",
             { 
              "bg-sky-200 text-blue-500" : pathname === link_element.href,
             }
            )}            
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link_element.name}</p>
          </Link>  //</a>
        )
      })}
    </>
  )
}
