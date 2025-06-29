import React from 'react';
import { MdOutlineChevronRight } from "react-icons/md";

const Breadcrumb = () => {
  const items = ['Home', 'Tops', 'T-Shirts'];

  return (
    <nav className="bg-[#f8f9fb] py-3 px-4">
      <ol className="w-[1280px] mx-auto flex items-center space-x-1 text-sm text-gray-500">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <MdOutlineChevronRight />
            )}
            <span
              className={`${
                index === items.length - 1 ? 'text-gray-800' : 'hover:underline cursor-pointer'
              }`}
            >
              {item}
            </span>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;