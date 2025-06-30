import React from 'react'

const Button = ({text, width}) => {
  return (
    <button className={`mt-4 bg-[#00B795] text-white cursor-pointer p-[10px] h-[48px] rounded-sm w-[${width}]`}>
        {text}
    </button>
  )
}

export default Button