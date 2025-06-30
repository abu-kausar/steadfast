"use client"
import AddSubComponent from '@/components/AddSubComponent';
import Button from '@/components/Button'
import { FiTrash2 } from "react-icons/fi";
import React, { useState } from 'react'
import Image from 'next/image';

const CartPage = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [selectAll, setSelectAll] = useState(false);
    const [cartItems, setCartItems] = useState([
        {
        id: 1,
        selected: false,
        storeName: "BD FASHION HOUSE",
        productName: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
        color: "red",
        size: "M",
        price: 1139,
        originalPrice: 1539,
        quantity: 2,
        image: "/api/placeholder/80/80"
        },
        {
        id: 2,
        selected: false,
        storeName: "BD FASHION HOUSE",
        productName: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
        color: "red",
        size: "M",
        price: 1139,
        originalPrice: 1539,
        quantity: 2,
        image: "/api/placeholder/80/80"
        },
        {
        id: 3,
        selected: false,
        storeName: "",
        productName: "Bestway Brand Air Inflatable 5 In 1 semi Double Sofa",
        color: "red",
        size: "M",
        price: 1139,
        originalPrice: 1539,
        quantity: 2,
        image: "/api/placeholder/80/80"
        }
    ]);

    const handleSelectAll = () => {
        const newSelectAll = !selectAll;
        setSelectAll(newSelectAll);
        setCartItems(items => items.map(item => ({ ...item, selected: newSelectAll })));
    };

    const handleSelectItem = (id) => {
        setCartItems(items => {
        const newItems = items.map(item => 
            item.id === id ? { ...item, selected: !item.selected } : item
        );
        const allSelected = newItems.every(item => item.selected);
        setSelectAll(allSelected);
        return newItems;
        });
    };

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems(items => items.map(item => 
            item.id === id 
                ? { ...item, quantity: Math.max(1, newQuantity) }
                : item
        ));
    };

    const clearAll = () => {
        setCartItems([]);
        setSelectAll(false);
    };
  return (
    <div className='bg-[#f8f9fb] pb-20'>
        <div className='w-[1280px] p-3 mx-auto flex gap-3'>
            {/* <div className='w-6/10 h-20 bg-white'>
            
            </div> */}

            <div className='w-full max-w-4xl bg-white py-6 pl-6 rounded-lg'>
                {/* Header */}
                <div className="flex items-center justify-between mr-6 mb-6">
                    <h2 className="text-2xl font-semibold text-gray-900">My Cart (3)</h2>
                    <div className="flex items-center space-x-4">
                    <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-600">Select All</span>
                    </label>
                    <button 
                        onClick={clearAll}
                        className="text-sm text-gray-600 cursor-pointer"
                    >
                        Clear All
                    </button>
                    </div>
                </div>

                {/* Cart Items */}
                <div className="space-y-4">
                    {cartItems.map((item, index) => (
                    <div key={item.id} className="">
                        {/* Store Header */}
                        {item.storeName && (
                        <div className="bg-[#f8f9fb] h-10 flex items-center mb-3 pl-2 py-2">
                            <input
                            type="checkbox"
                            checked={item.selected}
                            onChange={() => handleSelectItem(item.id)}
                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mr-3"
                            />
                            <div className="flex items-center text-sm text-gray-600">
                                <Image
                                    src="/store.png"
                                    alt='store logo'
                                    width={20}
                                    height={20}
                                    className='object-contain mr-2'
                                />
                                <span>{item.storeName}</span>
                                <svg className="w-4 h-4 ml-1 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                        )}

                        {/* Product Row */}
                        <div className="flex items-start space-x-4 pr-6">
                        {/* Checkbox - only show if no store header */}
                        <input
                            type="checkbox"
                            checked={item.selected}
                            onChange={() => handleSelectItem(item.id)}
                            className="w-4 h-4 ml-2 text-white border-gray-300 rounded focus:ring-[#00B795] mt-2"
                        />

                        {/* Product Image */}
                        <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                            <div className="w-12 h-8 bg-blue-800 rounded transform -skew-x-12"></div>
                            </div>
                        </div>

                        {/* Product Details */}
                        <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                                {item.productName}
                            </h3>
                            <p className="text-sm text-gray-500 mb-2">
                                Color: {item.color}; Size: {item.size}
                            </p>

                            {/* Quantity and Price Row */}
                            <div className="flex items-center gap-2">
                                {/* Quantity Controls */}
                                <AddSubComponent 
                                    quantity={item.quantity} 
                                    setQuantity={(quantity) => handleQuantityChange(item.id, quantity)}
                                />

                                {/* Delete Button */}
                                <button className="p-1 text-gray-400 hover:text-red-500 transition-colors ml-2">
                                    <FiTrash2 className="w-4 h-4"/>
                                </button>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="flex">
                            <div className="text-lg font-semibold text-gray-900">৳{item.price}</div>
                            <div className="text-sm text-gray-500 line-through">৳{item.originalPrice}</div>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>

            <div className='w-4/10 flex flex-col gap-3'>
                <div className='flex flex-col gap-2 bg-white rounded-lg p-6'>
                    <p className='text-2xl text-[#475569] font-medium'>Order summary</p>
                    <div className='flex justify-between items-center'>
                        <p className='text-base text-[#475569] font-medium flex gap-1'>Price <span>(3 items)</span></p>
                        <p className='text-base text-[#475569] font-medium'>৳ 00</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-base text-[#475569] font-medium flex gap-1'>Shipping fee</p>
                        <p className='text-[14px] text-[#3B82F6] font-medium'>To be added</p>
                    </div>

                    <div className="flex my-3 bg-white w-full h-10 border border-[#CBD5E1] overflow-hidden rounded-sm">
                        <input
                            type="text"
                            placeholder="Store / Falcon coupon"
                            className="flex-1 px-2 text-black placeholder-[#475569] focus:outline-none"
                        />
                        <button className="flex items-center justify-center text-white bg-[#00B795] px-4 hover:bg-teal-600 transition-colors cursor-pointer">
                            Apply
                        </button>
                    </div>

                    <hr className='text-[#E2E8F0] border border-dotted'/>

                    <div className='flex justify-between items-center'>
                        <p className='text-lg text-[#334155] font-medium'>Sub Total</p>
                        <p className='text-xl text-[#171717] font-medium'>৳ 00</p>
                    </div>

                    <Button width='full' text='Proceed to Checkout'/>
                </div>

                <div className='flex gap-1'>
                    <label className="flex items-start space-x-3 cursor-pointer select-none">
                        <input
                        type="checkbox"
                        className="sr-only"
                        checked={isChecked}
                        onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors flex-shrink-0 mt-0.5 ${
                        isChecked 
                            ? 'bg-[#00B795] border-[#00B795]' 
                            : 'border-gray-400'
                        }`}>
                        <svg
                            className={`w-[18px] h-[18px] text-white transition-opacity ${
                            isChecked ? 'opacity-100' : 'opacity-0'
                            }`}
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="3"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        </div>
                        <span className="text-base text-[#475569] leading-relaxed">
                        I have read and agree to the Terms and Conditions, Privacy Policy and Refund and Return Policy
                        </span>
                    </label>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CartPage