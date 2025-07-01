import Image from 'next/image'
import React from 'react'

const reviews = [{title: "Ship on Time", value: 100}, {title: "Chat Response", value: 96},{title: "Shop Rating", value: 99.8}];

const SellerReviewCard = ({sellerName}) => {
  return (
    <div className='flex flex-col gap-3 px-4 py-3 border border-[#E2E8F0] rounded-xl'>
        <p className='text-xs text-[#475569] font-normal'>Sold by</p>

        <div className='flex items-center gap-2'>
            <Image
                src="/company.png"
                alt="logo"
                width={40}
                height={40}
                className='object-contain'
            />

            <div className='flex flex-col gap-1'>
                <p className='text-[14px] text-[#475569] font-normal flex gap-1 uppercase'>{sellerName} <span><img src="/verified-tick.png" alt="" className='h-5 w-5'/></span></p>
                <Image
                    src="/rising-star.png"
                    alt="rising star"
                    width={138}
                    height={20}
                    className='object-contain'
                />
            </div>
        </div>

        <hr className='text-[#E2E8F0]'/>

        <div className='flex justify-between text-xs text-[#475569] font-medium gap-3'>
            {
                reviews.map((review, index) => (
                    <div key={index} className='flex flex-col gap-1'>
                        <p>{review.title}</p>
                        <p className='text-center text-[28px] text-[#64748B] font-normal'>{review.value}%</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default SellerReviewCard