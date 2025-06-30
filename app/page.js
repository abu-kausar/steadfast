"use client"
import AddSubComponent from "@/components/AddSubComponent";
import DelivaryCard from "@/components/DelivaryCard";
import SellerReviewCard from "@/components/SellerReviewCard";
import SpecificationCard from "@/components/SpecificationCard";
import Image from "next/image";
import { useState } from "react";
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

const productDetails = {
  title: "Men's Stylish & Fashionable Trendy Good Looking Long Sleeve Casual Shirt.",
  ratings: {
    rating: 4.7,
    numberOfRatings: 2254
  },
  price: {
    currentPrice: "৳1,139.33",
    previosPrice: "৳1500"
  },
  availableSizes: [
    "XL", "XS", "S", "M","L"
  ]
}

export default function Home() {
  const [selectedSize, setSelectedSize] = useState(productDetails.availableSizes[1]);
  const [quantity, setQuantity] = useState(0);

  return (
    <div>
      <div className="bg-white">
        <div className="w-[1280px] mx-auto py-5 flex gap-3">
          <div className="flex w-3/4 gap-5">
            <div className="w-45/100 flex flex-col gap-2">
              <Image
                src="/product.png"
                alt="product"
                width={380}
                height={380}
                className='object-contain rounded-[5px]'
              />

              <div className="w-[380px] flex justify-between">
                {
                  Array(5).fill().map((variant, index) => (
                    <Image
                      key={index}
                      src="/product.png"
                      alt="product"
                      width={68}
                      height={68}
                      className='object-contain rounded-[5px]'
                    />
                  ))
                }
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl text-[#0F172A] font-medium">{productDetails.title}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <p>{productDetails.ratings.rating}</p>
                  <Image
                    src="/rating.png"
                    alt="product"
                    width={68}
                    height={68}
                    className='object-contain rounded-[5px]'
                  />
                  <p>{productDetails.ratings.numberOfRatings}</p>
                  <IoChevronDownOutline  className="w-4 h-4" />
                </div>

                <div className="flex gap-2">
                  <Image
                    src="/love.png"
                    alt="product"
                    width={48}
                    height={48}
                    className='object-contain rounded-[5px]'
                  />

                  <Image
                    src="/share.png"
                    alt="product"
                    width={48}
                    height={48}
                    className='object-contain rounded-[5px]'
                  />
                </div>
              </div>

              <p className="flex gap-2 text-2xl text-[#00A788] font-semibold">{productDetails.price.currentPrice}
                <span className="text-base font-normal text-[#94A3B8]">{productDetails.price.previosPrice}</span>
              </p>

              <p className="flex items-center gap-2">Promotion 
                <Image
                  src="/promotion.png"
                  alt="product"
                  width={200}
                  height={25}
                  className='object-contain rounded-[5px]'
                />
              </p>

              <div className="flex gap-1 flex-col">
                <p>Available Color: Navy Blue</p>

                <div className="flex items-center gap-1">
                  {
                    Array(4).fill().map((vairant, index) => (
                      <Image
                      key={index}
                      src="/product.png"
                      alt="product"
                      width={56}
                      height={56}
                      className='object-contain cursor-pointer'
                    />
                    ))
                  }
                </div>
              </div>

              <div className="flex gap-1 flex-col">
                <p>Select Size: XS</p>

                <div className="flex items-center gap-2">
                  {
                    productDetails.availableSizes.map((size, index) => (
                      <span 
                        key={index} 
                        onClick={() => setSelectedSize(size)}
                        className={`flex items-center justify-center cursor-pointer w-10 h-10 border ${selectedSize===size ? "border-[#00B795]" : "border-[#E2E8F0]"} rounded-sm`}
                      >
                        {size}
                      </span>
                    ))
                  }
                </div>
              </div>

              <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-[#171717]">Quantity</p>
                  <AddSubComponent quantity={quantity} setQuantity={setQuantity}/>
              </div>

              <button className="mt-4 bg-[#00A788] text-white cursor-pointer p-[10px] w-[412px] h-[48px] rounded-sm">
                Add to Cart
              </button>
            </div>
          </div>

          <div className="w-1/4 flex flex-col gap-2">
            <DelivaryCard/>
            <SellerReviewCard/>
          </div>
        </div>
      </div>

      <div className="bg-[#f8f9fb] pt-5 pb-20">
        <div className="w-[1280px] mx-auto flex flex-col gap-3">
          <SpecificationCard description={true}/>
          <SpecificationCard/>
        </div>
      </div>
    </div>
  );
}
