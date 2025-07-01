"use client"
import Image from 'next/image'
import React from 'react'
import Cart from './Cart'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'

const Header = () => {
  const { cartItem } = useCart();

  return (
    <div className='flex flex-col custom-shadow'>
      <div className='bg-[#0F172A]'>
        <div className='w-[1280px] mx-auto py-3 flex items-center justify-between'>
          <a href="/" className='flex items-center gap-3'>
            <Image
                src="/footer/logo.png"
                alt="logo"
                width={24}
                height={24}
                className='object-contain'
            />
            <p className='text-2xl font-bold text-white'>
              FALCON
            </p>
          </a>

          <div className="flex bg-white w-full max-w-xl overflow-hidden rounded-sm">
            <input
              type="text"
              placeholder="Search for anything...."
              className="flex-1 px-4 py-3 text-black placeholder-[#475569] focus:outline-none"
            />
            <button className="flex items-center justify-center bg-[#00B795] px-4 hover:bg-teal-600 transition-colors">
              <Image
                src="/header/search.png"
                alt="logo"
                width={28}
                height={28}
                className='object-contain'
            />
            </button>
          </div>

          <div className='flex items-center gap-4'>
            <Link href="/cart">
              <Cart count={cartItem.quantity}/>
            </Link>

            <Image
              src="/header/profile.png"
              alt="logo"
              width={32}
              height={32}
              className='object-contain'
            />
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="w-[1280px] mx-auto py-3 flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center gap-6">
            {/* Categories */}
            <button className="flex items-center gap-2 font-medium text-slate-800 cursor-pointer">
              <svg
                className="w-5 h-5 text-teal-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Categories
            </button>

            <nav className="border-l border-[#E2E8F0] pl-5 flex items-center gap-6">
              <a href="#" className="text-slate-700 hover:text-teal-600">Electronics</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Home Appliances</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Mother &amp; Baby</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Automotive</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Sports Gear</a>
            </nav>
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1 text-slate-700 hover:text-teal-600">
              <Image
                src="/header/track.png"
                alt="track"
                width={16}
                height={16}
                className='object-contain'
              />
              <span className="text-sm">Track Order</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-slate-700 hover:text-teal-600">
              <Image
                src="/header/helpline.png"
                alt="helpline"
                width={16}
                height={16}
                className='object-contain'
              />
              <span className="text-sm">Help Center</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-slate-700 hover:text-teal-600">
              <Image
                src="/header/shop.png"
                alt="track"
                width={16}
                height={16}
                className='object-contain'
              />
              <span className="text-sm">SELL WITH US</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header