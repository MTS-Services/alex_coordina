'use client';

import React, { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { SiAppstore, SiGoogleplay } from 'react-icons/si';
import Image from 'next/image';
// =================code by shakil munshi==============
// ---------- Types ----------
// ====================================================
type LinkItem = { label: string; href: string };
type SectionDef = { title: string; items: LinkItem[]; aria?: string };

// ---------- Data ----------
const PRODUCT_LINKS: LinkItem[] = [
  { label: 'Temporary Works', href: '/products/temporary-works' },
  { label: 'Asset Management', href: '/products/asset-management' },
  { label: 'Logistics', href: '/products/logistics' },
  { label: 'Access Control', href: '/products/access-control' },
  { label: 'Document Management', href: '/products/document-management' },
  { label: 'Planning', href: '/products/planning' },
];

const RESOURCE_LINKS: LinkItem[] = [
  { label: 'FAQ', href: '/faq' },
  { label: 'Blog', href: '/blog' },
  { label: 'Book Demo', href: '/bookdemo' },
];

const ABOUT_LINKS: LinkItem[] = [
  { label: 'About us', href: '/about' },
  { label: 'Contacts', href: '/contact' },
];

const SECTIONS: SectionDef[] = [
  { title: 'Products', items: PRODUCT_LINKS, aria: 'Products' },
  { title: 'Resources', items: RESOURCE_LINKS, aria: 'Resources' },
  { title: 'About', items: ABOUT_LINKS, aria: 'About' },
];

// ---------- UI primitives ----------
// =================code by shakil munshi==============
function SocialIcon({
  label,
  href = '#',
  children,
}: {
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target='_blank'
      rel='noopener noreferrer'
      className='inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-slate-200/90 hover:text-white hover:border-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition'
    >
      {children}
    </a>
  );
}

function Section({
  title,
  items,
  ariaLabel,
}: {
  title: string;
  items: LinkItem[];
  ariaLabel?: string;
}) {
  const id = useId().replace(':', '');
  const [open, setOpen] = useState(false);
  // =================code by shakil munshi==============

  // Close dropdown with Escape key (mobile)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav aria-label={ariaLabel || title} className='md:space-y-3'>
      {/* Desktop title */}
      <h4 className='hidden md:block text-sm font-semibold text-white tracking-wide'>
        {title}
      </h4>

      {/* Mobile dropdown header */}
      <button
        className='md:hidden w-full flex items-center justify-between py-3 border-t border-white/10 text-[15px] font-medium text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60'
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={`${id}-list`}
      >
        {title}
        <svg
          className={`h-4 w-4 transition-transform ${
            open ? 'rotate-180' : 'rotate-0'
          }`}
          viewBox='0 0 20 20'
          fill='currentColor'
          aria-hidden
        >
          <path d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z' />
        </svg>
      </button>

      {/* Links */}
      <div
        className={`md:block ${open ? 'block' : 'hidden'}`}
        id={`${id}-list`}
      >
        <ul className='space-y-3 text-[14px] text-slate-300/90'>
          {items.map((it) => (
            <li key={it.href}>
              {it.href.startsWith('/') ? (
                <Link
                  href={it.href}
                  className='hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition'
                >
                  {it.label}
                </Link>
              ) : (
                <a
                  href={it.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition'
                >
                  {it.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

// ---------- Footer ----------
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className=' bg-[#0F1A1B] text-slate-200'>
      <div className='mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Top grid */}
        <div className='grid grid-cols-1 gap-10 py-10 md:grid-cols-12'>
          {/* Brand & about */}
          <div className='md:col-span-5 lg:col-span-5'>
            <Link
              href='/'
              className='flex items-center gap-2'
              aria-label='CoorDeck Technologies'
            >
              <div className='  items-center justify-center '>
                <Image
                  src='/images/Group 1000008350 (1).png'
                  alt='CoorDeck Logo'
                  width={180}
                  height={40}
                  className='object-contain'
                  priority
                />
              </div>
            </Link>
            <p className='mt-5 max-w-md text-[14px] leading-relaxed text-slate-300/90'>
              CoorDeck is a B2B construction project management software
              tailored for managers, contractors, and workers.
            </p>

            <div className='mt-6 flex items-center gap-3'>
              <SocialIcon label='LinkedIn' href='#'>
                <FaLinkedinIn className='h-4 w-4' />
              </SocialIcon>
              <SocialIcon label='Instagram' href='#'>
                <FaInstagram className='h-4 w-4' />
              </SocialIcon>
              <SocialIcon label='Facebook' href='#'>
                <FaFacebookF className='h-4 w-4' />
              </SocialIcon>
            </div>
          </div>

          {/* Links (three columns) */}
          <div className='md:col-span-7 lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-8'>
            {SECTIONS.map((s) => (
              <Section
                key={s.title}
                title={s.title}
                items={s.items}
                ariaLabel={s.aria}
              />
            ))}
          </div>
        </div>
        {/* Divider */}
        <div className='border-t border-white/10' />

        {/* Download app row */}
        <div className='flex flex-col items-start justify-between gap-4 py-6 md:flex-row md:items-center'>
          <p className='text-[14px] text-slate-300/90'>Download CoorDeck app</p>
          <div className='flex items-center gap-3'>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition'
            >
              <SiAppstore className='h-5 w-5' />
              <span>App Store</span>
            </a>
            <a
              href='#'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-flex items-center gap-2 rounded-md border border-white/15 px-3 py-2 text-sm text-white hover:border-white/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 transition'
            >
              <SiGoogleplay className='h-5 w-5' />
              <span>Google Play</span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className='py-4 text-[12px] text-slate-400/80 border-t border-white/10'>
          <p>© {year} CoorDeck Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
