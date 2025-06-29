"use client"
import SpecificationCard from "@/components/SpecificationCard";

export default function Home() {
  return (
    <div>
      <div className="bg-white h-50">
        <div className="w-[1280px] mx-auto flex flex-col gap-3">
          
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
