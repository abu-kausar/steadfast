import React, { useState } from 'react';
import { IoChevronUpOutline, IoChevronDownOutline } from "react-icons/io5";

const SpecificationCard = ({description}) => {
  const [expanded, setExpanded] = useState(false);

  const items = [
    'GMP Cosmetic Good Manufacturing Practice',
    'Cruelty Free',
    'No Animal Testing',
    'Zenpia Global Standard',
    'Comply with Global Standard'
  ];

  const visibleItems = expanded ? items : items.slice(0, 4);

  return (
    <div className="bg-white p-6 rounded-sm shadow-sm w-[955px]">
      <h2 className="text-2xl font-semibold mb-2">{description ? "Description" : "Specification"}</h2>
      {!description ? <>
        <h3 className="text-md font-semibold mb-4">Sharp FP-J30E-B Air Purifier</h3>
        <ul className="list-disc list-inside space-y-1 text-gray-700">
            {visibleItems.map((item, index) => (
            <li
                key={index}
                className={`${item === 'Comply with Global Standard' && !expanded ? 'text-gray-300' : ''}`}
            >
                {item}
            </li>
            ))}
        </ul>
        </> : 
        <p className={`text-gray-700 transition-all duration-300 ${expanded ? '' : 'line-clamp-3'}`}>
            Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays.
            Advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything.
        </p>
        }
        <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-sm font-medium text-gray-800 cursor-pointer hover:underline flex items-center space-x-1"
        >
            <span>{expanded ? 'See Less' : 'See More'}</span>
            {expanded ? (
            <IoChevronUpOutline className="w-4 h-4" />
            ) : (
            <IoChevronDownOutline  className="w-4 h-4" />
            )}
        </button>
    </div>
  );
};

export default SpecificationCard;