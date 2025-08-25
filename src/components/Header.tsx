// components/Header.tsx
'use client';
import { useState } from 'react';

// Define the shape of a navigation item
interface NavItem {
  title: string;
  items?: string[];
}

// Reusable Dropdown component
const Dropdown: React.FC<NavItem> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  // If there are no dropdown items, render a simple link
  if (!items) {
    return (
      <a
        href='#'
        className='font-medium text-gray-600 hover:text-gray-900 transition-colors'
      >
        {title}
      </a>
    );
  }

  // If there are items, render the dropdown menu
  return (
    <div className='relative'>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className='flex items-center text-gray-600 hover:text-gray-900 focus:outline-none transition-colors'
      >
        {title}
        <svg
          className={`w-4 h-4 ml-1 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M19 9l-7 7-7-7'
          ></path>
        </svg>
      </button>

      {isOpen && (
        <div className='absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'>
          <div className='py-1'>
            {items.map((item, index) => (
              <a
                key={index}
                href='#'
                className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors'
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Main Header component
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems: NavItem[] = [
    { title: 'Drop down' },
    {
      title: 'Products',
      items: [
        'Temporary Works',
        'Asset Management',
        'Logistics',
        'Access Control',
        'Document Management',
        'Planning',
      ],
    },
    {
      title: 'Resources',
      items: ['Case Studies', 'Blog', 'Webinars'],
    },
    { title: 'About' },
  ];

  return (
    <header className='fixed top-0 left-0 w-full z-50 bg-white shadow-md'>
      <div className='container mx-auto px-6 py-4 flex items-center justify-between'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
          {/* Logo from the image */}
          <span className='text-2xl font-bold text-gray-800'>CO</span>
          <span className='text-2xl font-bold text-gray-800'>CoorDeck</span>
          <span className='text-lg font-normal text-gray-500'>
            Technologies
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className='hidden md:flex items-center space-x-8'>
          {navItems.map((item, index) => (
            <Dropdown key={index} {...item} />
          ))}
          <a
            href='#'
            className='px-4 py-2 text-gray-600 font-medium rounded-md hover:text-gray-900 transition-colors'
          >
            Sign in
          </a>
          <button className='px-6 py-2 font-bold text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors'>
            Book a Demo
          </button>
        </nav>

        {/* Mobile menu button (Hamburger) */}
        <div className='md:hidden'>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              className='w-6 h-6 text-gray-800'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16m-7 6h7'
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (conditionally rendered) */}
      {isMobileMenuOpen && (
        <div className='md:hidden bg-white shadow-lg p-4 transition-all duration-300'>
          <div className='flex flex-col space-y-4'>
            {navItems.map((item, index) => (
              <Dropdown key={index} {...item} />
            ))}
            <hr className='my-2' />
            <a
              href='#'
              className='font-medium text-gray-600 hover:text-gray-900'
            >
              Sign in
            </a>
            <button className='w-full px-6 py-2 font-bold text-white bg-gray-900 rounded-md hover:bg-gray-700 transition-colors'>
              Book a Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
