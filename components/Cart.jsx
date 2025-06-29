"use client";
import React from "react";
import Image from "next/image";

const Cart = ({ count }) => {
  return (
    <div className="relative w-7 h-7 cursor-pointer">
      <Image
        src="/header/cart.png"
        alt="cart"
        fill
        className="object-contain"
      />
      {count > 0 && (
        <span className="absolute -top-1 -right-1 flex h-5 min-w-[12px] items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-semibold text-white">
          {count}
        </span>
      )}
    </div>
  );
};

export default Cart;