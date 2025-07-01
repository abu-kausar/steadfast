"use client"
import AddSubComponent from "@/components/AddSubComponent";
import DelivaryCard from "@/components/DelivaryCard";
import SellerReviewCard from "@/components/SellerReviewCard";
import SpecificationCard from "@/components/SpecificationCard";
import useProductDetails from "@/hooks/useProductDetails";
import Image from "next/image";
import { useEffect, useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";
import toast from 'react-hot-toast';
import { useCart } from "@/context/CartContext";
import Loader from "@/components/Loader";
import Button from "@/components/Button";

export default function Home() {
  const { addToCart } = useCart();
  const { data, loading, error } = useProductDetails();
  const [selectedVariation, setSelectedVariation] = useState(null);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    if (data?.variations?.length > 0) {
      setSelectedVariation(data.variations[0]);
    }
  }, [data]);

  if (loading) return <Loader loadingText={"product details"} />;
  if (error) return <p>Error: {error.message}</p>;

  console.log(
    data
  );

  const imageUrl =
  selectedVariation?.image && selectedVariation?.image !== ""
    ? selectedVariation.image
    : data.thumbnail;

  const handleAddToCart = () => {
    if (quantity < 1) {
      toast.error("Please select at least 1 quantity");
      return;
    }

    const cartItem = {
      productName: data?.name || "",
      quantity: quantity,
      discount_price: selectedVariation?.discount_price || 0,
      regular_price: selectedVariation?.regular_price || 0,
      color:
        selectedVariation?.variation_attributes?.[1]?.attribute_option?.attribute_value || "",
      ramSize:
        selectedVariation?.variation_attributes?.[0]?.attribute_option?.attribute_value || "",
      imageUrl: imageUrl,
      sellerName: data?.merchant?.shop_name || "",
      shippingCost: selectedVariation?.id_delivery_fee || 0
    };

    addToCart(cartItem);

    toast.success("Product added to cart successfully!");
  };

  return (
    <div>
      <div className="bg-white">
        <div className="w-[1280px] mx-auto py-5 flex gap-3">
          <div className="flex w-3/4 gap-5">
            <div className="w-45/100 flex flex-col gap-2">
              <Image
                src={imageUrl}
                alt="product"
                width={380}
                height={380}
                className='object-contain rounded-[5px]'
              />

              <div className="w-[380px] flex cursor-pointer justify-between">
                {
                  data?.variations?.map((variant, index) => (
                    <Image
                      onClick={() => setSelectedVariation(variant)}
                      key={index}
                      src={variant.image}
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
              <p className="text-xl text-[#0F172A] font-medium capitalize">{data?.name}</p>
              
              <div className="flex justify-between items-center">
                <div className="flex gap-2">
                  <p>{data?.rating_avg}</p>
                  <Image
                    src="/rating.png"
                    alt="product"
                    width={68}
                    height={68}
                    className='object-contain rounded-[5px]'
                  />
                  <p>{data?.rating_count}</p>
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

              <p className="flex gap-2 text-2xl text-[#00A788] font-semibold">৳{selectedVariation?.discount_price}
                <span className="text-base font-normal text-[#94A3B8] line-through">৳{selectedVariation?.regular_price}</span>
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
                <p>Color:</p>

                  <div className="flex items-center gap-1">
                    <div className="flex items-center gap-2">
                    {selectedVariation?.variation_attributes?.[1] && 
                      <span
                        className="flex items-center justify-center cursor-pointer px-2 py-1 border border-[#00B795] rounded-sm"
                      >
                        {selectedVariation?.variation_attributes?.[1]?.attribute_option?.attribute_value}
                      </span>
                    }
                  </div>
                </div>
              </div>

              <div className="flex gap-1 flex-col">
                <p>RAM:</p>

                <div className="flex items-center gap-2">
                  {selectedVariation?.variation_attributes?.[0] && 
                    <span
                      className="flex items-center justify-center cursor-pointer px-2 py-1 border border-[#00B795] rounded-sm"
                    >
                      {selectedVariation?.variation_attributes?.[0]?.attribute_option?.attribute_value}
                    </span>
                  }
                </div>
              </div>

              <div className="flex flex-col gap-1">
                  <p className="text-base font-medium text-[#171717]">Quantity</p>
                  <AddSubComponent quantity={quantity} setQuantity={setQuantity}/>
              </div>

              <Button onClick={handleAddToCart} width='full' text='Add to Cart'/>
            </div>
          </div>

          <div className="w-1/4 flex flex-col gap-2">
            <DelivaryCard/>
            <SellerReviewCard sellerName={data?.merchant.shop_name}/>
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
