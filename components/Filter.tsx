"use client";

import { useState } from "react";

interface Props {
  handleHiddenFilter?: () => void;
}
const Filter: React.FC<Props> = ({ handleHiddenFilter }) => {
  const [currentSize, setCurrentSize] = useState<string | null>(null);

  const handleSizeClick = (size: string) => {
    if (currentSize === size) {
      setCurrentSize(null);
    } else {
      setCurrentSize(size);
    }
  };

  return (
    <section className="bg-white relative">
      <h6 className="font-bold text-2xl">Filter</h6>
      <hr className="bg-gray-300 my-6" />
      <ul>
        {["T-shirts", "Shorts", "Shirts", "Hoodies", "Jeans"].map(
          (cat, index) => (
            <li
              key={index}
              className="flex justify-between items-center text-ligth py-2 cursor-pointer hover:bg-gray-200"
            >
              <span>{cat}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-badge-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" />
              </svg>
            </li>
          )
        )}
      </ul>
      <hr className="bg-gray-300 my-6" />
      <div>
        <h5 className="font-bold text-2xl">Sizes</h5>
        <div className="flex flex-wrap gap-4 mt-5">
          {[
            "XX-Small",
            "X-Small",
            "Small",
            "Medium",
            "Large",
            "X-Large",
            "XX-Large",
            "3X-Large",
            "4X-Large",
          ].map((size, index) => (
            <button
              key={index}
              className={`${
                currentSize == size ? "button-main" : "button-secondary"
              } py-2 px-4`}
              onClick={() => handleSizeClick(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
      <button className="button-main w-full py-3 mt-10">Apply Filter</button>
      <button className="absolute top-2 right-2 md:hidden" onClick={handleHiddenFilter}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-x"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M18 6l-12 12" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </section>
  );
};

export default Filter;
