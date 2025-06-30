import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa6";

const AddSubComponent = ({quantity, setQuantity}) => {
  return (
    <div className="w-[195px] flex p-1 items-center justify-between border rounded-[50px] border-[#E2E8F0]">
        <button 
            onClick={() => setQuantity(quantity - 1)} 
            className="w-8 h-8 rounded-full bg-[#F1F5F9] cursor-pointer"
        ><FaMinus className='mx-auto'/></button>

        <p className="text-base text-[#252B42] font-medium">{quantity}</p>

        <button 
            onClick={() => setQuantity(quantity + 1)} 
            className="w-8 h-8 rounded-full bg-[#F1F5F9] cursor-pointer"
        ><FaPlus className='mx-auto'/></button>
    </div>
  )
}

export default AddSubComponent