'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
    const [open,setOpen] = useState(false)
  return (
    // ເພີ່ມ sticky top-0 ແລະ backdrop-blur ເພື່ອໃຫ້ Navbar ໃສ ແລະ ເຫັນ Background ເວລາເລື່ອນ
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        {/* 1. Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="relative w-10 h-10 overflow-hidden rounded-full border border-sky-100 shadow-sm">
            <Image 
              src='/images/logo.jpg'
              alt="Logo" 
              fill 
              className="object-cover group-hover:scale-110 transition-transform duration-300" 
            />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-800 bg-clip-text text-transparent">
            junior.DEV
          </span>
        </Link>
        {/* Desktop menu */}
        {/* <nav className='hidden md:block'>
            <ul className='flex items-center gap-8 text-sm font-meduim text-gray-600'>
              <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <li><Link href="/" className="hover:text-sky-600 transition-all">Home</Link></li>
            <li><Link href="/about" className="hover:text-sky-600 transition-all">About</Link></li>
            <li><Link href="/contact" className="hover:text-sky-600 transition-all">Contact</Link></li>
            <li><Link href="/blog" className="hover:text-sky-600 transition-all">Blog</Link></li>
          </ul>
            </ul>
        </nav> */}
        {/* Right Section: Search & Mobile Toggle */}
        {/* <div className="flex items-center gap-4">
            <div className="hidden lg:block relative">
                <input type="text" placeholder=''/>
            </div>
        </div> */}

        {/* 2. Menu Section */}
        <nav>
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <li>
              <Link href="/" className="hover:text-sky-600 transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-sky-600 hover:after:w-full after:transition-all">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-sky-600 transition-colors">About</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-sky-600 transition-colors">Contact</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-sky-600 transition-colors">Blog</Link>
            </li>
          </ul>
        </nav>

        {/* 3. Search & Action Section */}
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="ຄົ້ນຫາ..." 
              className="border-none rounded-full px-5 py-2 text-sm w-48 focus:w-64 focus:ring-2 focus:ring-sky-600 transition-all outline-none "
            />
          </div>
          <button className="bg-sky-600 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-sky-700 hover:shadow-lg transition-all active:scale-95">
            Login
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;