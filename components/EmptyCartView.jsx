import React from 'react'
import Button from './Button'
import { BsCartXFill } from "react-icons/bs"

const EmptyCartView = () => {
  return (
    <div className="mx-auto h-[70vh] flex flex-col items-center justify-center text-center gap-4">
        <BsCartXFill className='w-[120px] h-[120px]'/>
        <h2 className="text-xl text-gray-600">Your cart is empty</h2>
        <p className="text-gray-500">Looks like you haven’t added anything yet.</p>
        <Button
            text="Go to Product Page"
            width="w-[220px]"
            onClick={() => window.location.href = "/"}
        />
    </div>
  )
}

export default EmptyCartView