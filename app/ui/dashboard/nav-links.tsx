'use client';

import { UserGroupIcon, HomeIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Define navigation links
const links = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Invoices', href: '/dashboard/invoices', icon: DocumentDuplicateIcon },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];

export default function NavLinks() {
  const pathname = usePathname(); // Get current route

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        const isActive = pathname.startsWith(link.href); // Highlight parent routes too

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'flex h-12 grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium transition-all md:flex-none md:justify-start md:p-2 md:px-3',
              isActive ? 'bg-blue-500 text-white' : 'bg-gray-50 hover:bg-sky-100 hover:text-blue-600'
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
