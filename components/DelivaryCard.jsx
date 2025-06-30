import Image from 'next/image'
import React from 'react'

const DelivaryCard = () => {
  return (
    <div className='flex flex-col gap-3 px-4 py-3 border border-[#E2E8F0] rounded-xl'>
        <p className='text-lg text-[#475569] font-medium'>Delivery Options</p>

        <div className='flex gap-2'>
            <Image
                src="/package.png"
                alt="package"
                width={24}
                height={24}
                className='object-contain'
            />

            <div className='flex flex-col gap-2'>
                <p className='text-base text-[#334155] font-medium'>Regular</p>
                <p className='text-xs text-[#475569] font-normal'>Delivery within 2-3 days</p>
            </div>
        </div>

        <div className='flex gap-2'>
            <Image
                src="/package-white.png"
                alt="package"
                width={24}
                height={24}
                className='object-contain'
            />

            <div className='flex flex-col gap-2'>
                <p className='text-base text-[#334155] font-medium'>Express <span className='text-[10px] text-[#F87171] font-semibold'>Not Available</span></p>
                <p className='text-xs text-[#475569] font-normal'>Delivery within 24 hours</p>
            </div>
        </div>
    </div>
  )
}

export default DelivaryCard