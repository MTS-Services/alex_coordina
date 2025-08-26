'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MdOutlineArrowDropDown } from 'react-icons/md';

type DropItem = { label: string; href: string };

const PRODUCTS: DropItem[] = [
  { label: 'Temporary Works', href: '/products/temporary-works' },
  { label: 'Asset Management', href: '/products/asset-management' },
  { label: 'Logistics', href: '/products/logistics' },
  { label: 'Access Control', href: '/products/access-control' },
  { label: 'Document Management', href: '/products/document-management' },
  { label: 'Planning', href: '/products/planning' },
];

function cls(...a: Array<string | false | undefined>) {
  return a.filter(Boolean).join(' ');
}

export default function Header() {
  const [openProducts, setOpenProducts] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // =================code by shakil munshi==============
  // outside-click to close dropdown
  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target as Node)) setOpenProducts(false);
    };
    document.addEventListener('mousedown', onDoc);
    return () => document.removeEventListener('mousedown', onDoc);
  }, []);

  // =================code by shakil munshi==============
  // Esc to close dropdown
  useEffect(() => {
    const onEsc = (e: KeyboardEvent) =>
      e.key === 'Escape' && setOpenProducts(false);
    window.addEventListener('keydown', onEsc);
    return () => window.removeEventListener('keydown', onEsc);
  }, []);

  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-white shadow-sm'>
      <div className='mx-auto max-w-7xl px-4 py-2 sm:px-6 lg:px-8'>
        {/* LEFT logo | RIGHT: (nav + CTAs) group */}
        <div className='flex h-16 items-center justify-between'>
          <Link
            href='/'
            className='flex items-center gap-2'
            aria-label='CoorDeck Technologies'
          >
            <div className='  items-center justify-center '>
              <Image
                src='/images/logo.png'
                alt='CoorDeck Logo'
                width={180}
                height={40}
                className='object-contain'
                priority
              />
            </div>
          </Link>

          {/* Right group (desktop) */}
          <div className='hidden md:flex items-center gap-6'>
            {/* Nav (desktop) */}
            <nav className='relative flex items-center gap-8' ref={menuRef}>
              {/* Products dropdown */}
              <div
                className='relative'
                onMouseEnter={() => setOpenProducts(true)}
                onMouseLeave={() => setOpenProducts(false)}
              >
                <button
                  type='button'
                  className={cls(
                    'group inline-flex items-center gap-1 text-[#222222] font-[600] text-[16px] ',
                    openProducts
                      ? 'text-gray-900'
                      : 'text-[#222222]  hover:text-gray-900'
                  )}
                  aria-haspopup='menu'
                  aria-expanded={openProducts}
                  onClick={() => setOpenProducts((v) => !v)}
                >
                  Products
                  <MdOutlineArrowDropDown
                    className={cls(
                      'transition-transform duration-200 font-[600]',
                      openProducts && 'rotate-180'
                    )}
                    aria-hidden
                  />
                </button>

                {openProducts && (
                  <div
                    className='absolute left-1/2 z-50 mt-3 w-72 -translate-x-1/2 rounded-xl border border-black/5 bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5'
                    role='menu'
                  >
                    <ul className='py-2'>
                      {PRODUCTS.map((it) => (
                        <li key={it.href}>
                          <Link
                            href={it.href}
                            className='block px-4 py-2.5 text-[16px] font-[500] text-sm text-[#222222] hover:bg-gray-100'
                            role='menuitem'
                            onClick={() => setOpenProducts(false)}
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Simple links with chevrons (no dropdown content as per mock) */}
              <Link
                href='/resources'
                className='inline-flex items-center gap-1 text-[16px]  text-[#222222] font-[600] hover:text-gray-900'
              >
                Resources <MdOutlineArrowDropDown className='opacity-60' />
              </Link>
              <Link
                href='/about'
                className='inline-flex items-center gap-1 text-[16px] text-[#222222] font-[600] hover:text-gray-900'
              >
                About <MdOutlineArrowDropDown className='opacity-60' />
              </Link>
            </nav>

            {/* CTAs */}
            <div className='flex items-center gap-3'>
              <Link
                href='/signin'
                className='inline-flex items-center rounded-full border border-gray-300 px-4 py-2 text-sm  text-[#222] font-[600] hover:bg-gray-50'
              >
                Sign in
              </Link>
              <Link
                href='/book-demo'
                className='inline-flex items-center rounded-full bg-gray-900 px-4 py-[10px] text-sm font-[600] text-white hover:bg-gray-800'
              >
                Book a Demo
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className='md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md  text-[#222222] font-bold '
            aria-label='Toggle menu'
            onClick={() => setMobileOpen((v) => !v)}
          >
            <svg
              width='30'
              height='30'
              color='#000000'
              viewBox='0 0 24 24'
              aria-hidden
            >
              <path
                d='M4 6h16M4 12h16M4 18h16'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div className='md:hidden border-t border-gray-200 bg-white'>
          <div className='mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8'>
            <details className='group'>
              <summary className='flex text-[#222222] font-[600] text-[16px] cursor-pointer list-none items-center justify-between py-2 text-sm '>
                <span>Products</span>
                <FiChevronDown className='transition-transform group-open:rotate-180' />
              </summary>
              <ul className='pb-2'>
                {PRODUCTS.map((it) => (
                  <li key={it.href}>
                    <Link
                      href={it.href}
                      className='block rounded-md px-3 py-2 text-sm text-gray-700 hover:bg-gray-100'
                      onClick={() => setMobileOpen(false)}
                    >
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </details>

            <Link
              href='/resources'
              className='block py-2 text-[#222222] font-[600] text-[16px]'
              onClick={() => setMobileOpen(false)}
            >
              Resources
            </Link>
            <Link
              href='/about'
              className='block py-2 text-[#222222] font-[600] text-[16px] '
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <hr className='my-3' />

            <div className='flex items-center gap-3'>
              <Link
                href='/signin'
                className='inline-flex flex-1 items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
                onClick={() => setMobileOpen(false)}
              >
                Sign in
              </Link>
              <Link
                href='/book-demo'
                className='inline-flex flex-1 items-center justify-center rounded-full bg-gray-900 px-4 py-2 text-sm font-bold text-white hover:bg-gray-800'
                onClick={() => setMobileOpen(false)}
              >
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
