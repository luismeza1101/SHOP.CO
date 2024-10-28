"use client";

import { our_customers } from "@data/customers";
import { motion } from "framer-motion";
import { useState } from "react";
import Comment from '@components/Comment'

const CarrouselWithArrow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemCount = our_customers.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  };
  return (
    <div className="w-full pt-5 relative md:hidden">
      <div className=" overflow-hidden">
        <motion.div
          className="flex"
          initial={{ x: 0 }}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ duration: 0.5 }}
        >
          {our_customers.map((item, index) => (
            <div className="w-full shrink-0" key={index}>
              <Comment comment={item.comment} name={item.name} stars={item.stars}/>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="absolute bottom-full right-0 flex gap-1 ">
        <button className="p-2" onClick={handlePrev}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M5 12l6 6" />
            <path d="M5 12l6 -6" />
          </svg>
        </button>
        <button className="p-2" onClick={handleNext}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M5 12l14 0" />
            <path d="M13 18l6 -6" />
            <path d="M13 6l6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CarrouselWithArrow;
