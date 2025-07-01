"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import Cart from './Cart'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import useCategories from '@/hooks/useCategories'
import Loader from './Loader'

const Header = () => {
  const { cartItem } = useCart();
  const { categories, loading } = useCategories();
  const [showCategories, setShowCategories] = useState(false);

  return (
    <div className='relative z-50'>
      {/* Top Header */}
      <div className='bg-[#0F172A] custom-shadow'>
        <div className='w-[1280px] mx-auto py-3 flex items-center justify-between'>
          <a href="/" className='flex items-center gap-3'>
            <Image src="/footer/logo.png" alt="logo" width={24} height={24} className='object-contain' />
            <p className='text-2xl font-bold text-white'>FALCON</p>
          </a>

          <div className="flex bg-white w-full max-w-xl overflow-hidden rounded-sm">
            <input
              type="text"
              placeholder="Search for anything...."
              className="flex-1 px-4 py-3 text-black placeholder-[#475569] focus:outline-none"
            />
            <button className="flex items-center justify-center bg-[#00B795] px-4 hover:bg-teal-600 transition-colors">
              <Image src="/header/search.png" alt="search" width={28} height={28} className='object-contain' />
            </button>
          </div>

          <div className='flex items-center gap-4'>
            <Link href="/cart">
              <Cart count={cartItem.quantity}/>
            </Link>
            <Image src="/header/profile.png" alt="profile" width={32} height={32} className='object-contain' />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="bg-white relative">
        <div className="w-[1280px] mx-auto py-3 flex justify-between items-center">
          {/* Left Links */}
          <div className="flex items-center gap-6 relative"
            onMouseEnter={() => setShowCategories(true)}
            onMouseLeave={() => setShowCategories(false)}
          >
            {/* Categories Button */}
            <button className="flex items-center gap-2 font-medium text-slate-800 cursor-pointer">
              <svg className="w-5 h-5 text-teal-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              Categories
            </button>

            {/* Hover Panel */}
            {showCategories && (
              <div className="absolute top-full left-0 w-[1280px] bg-white shadow-lg border border-gray-100 p-6 z-40">
                {loading ? (
                  <Loader loadingText="categories"/>
                ) : (
                  <div className="grid grid-cols-6 gap-4">
                    {categories.map((category, index) => (
                      <div key={index} className="flex flex-col items-center justify-between text-center p-3 hover:bg-gray-100 rounded cursor-pointer">
                        { category.image ? (
                          <Image
                            src={category.image}
                            alt={category.name}
                            width={60}
                            height={60}
                            className="rounded-full object-contain"
                          />
                        ) : (
                          <div className="w-[60px] h-[60px] rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-500">
                            No Image
                          </div>
                        )}
                        <p className="mt-2 text-sm text-slate-700">{category.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Static Nav */}
            <nav className="border-l border-[#E2E8F0] pl-5 flex items-center gap-6">
              <a href="#" className="text-slate-700 hover:text-teal-600">Electronics</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Home Appliances</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Mother &amp; Baby</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Automotive</a>
              <a href="#" className="text-slate-700 hover:text-teal-600">Sports Gear</a>
            </nav>
          </div>

          {/* Right Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="flex items-center gap-1 text-slate-700 hover:text-teal-600">
              <Image src="/header/track.png" alt="track" width={16} height={16} className='object-contain' />
              <span className="text-sm">Track Order</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-slate-700 hover:text-teal-600">
              <Image src="/header/helpline.png" alt="help" width={16} height={16} className='object-contain' />
              <span className="text-sm">Help Center</span>
            </a>
            <a href="#" className="flex items-center gap-1 text-slate-700 hover:text-teal-600">
              <Image src="/header/shop.png" alt="sell" width={16} height={16} className='object-contain' />
              <span className="text-sm">SELL WITH US</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;