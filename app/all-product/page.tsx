"use client";

import Filter from "@components/Filter";
import Product from "@components/Product";
import { all_products } from "@data/all_products";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const PageProducts = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleShowFilter = () => {
    setShowFilter(true);
    document.body.classList.add("overflow-hidden");
  };

  const handleHiddenFilter = () => {
    setShowFilter(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <main className="w-[90%] mx-auto mt-10 md:flex gap-5">
        <section className="hidden w-[40%] md:flex desktop:w-[30%]">
          <Filter />
        </section>
        <section className="w-full md:flex-1">
          <div className="flex items-center justify-between mb-5">
            <div className="flex items-end gap-2 md:justify-between md:w-full">
              <h5 className="font-bold text-3xl">Casual</h5>
              <span className="text-ligth text-sm">
                Showing 1-10 of 100 products
              </span>
            </div>
            <button
              className="button-secondary p-3 md:hidden"
              onClick={handleShowFilter}
            >
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M6 4v4" />
                <path d="M6 12v8" />
                <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M12 4v10" />
                <path d="M12 18v2" />
                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M18 4v1" />
                <path d="M18 9v11" />
              </svg>
            </button>
          </div>
          <div className="hidden md:grid grid-cols-1 px-10 gap-5 desktop:grid-cols-2 lg:grid-cols-3">
            {all_products.slice(0, 9).map(pro => (
              <Product
                key={pro.id}
                id={pro.id}
                image={pro.image}
                name={pro.name}
                price={pro.price}
                discount={pro.discount}
                initial_price={pro.initial_price}
              />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-5 md:hidden">
            {all_products.slice(0, 6).map(pro => (
              <Product
                key={pro.id}
                id={pro.id}
                image={pro.image}
                name={pro.name}
                price={pro.price}
                discount={pro.discount}
                initial_price={pro.initial_price}
              />
            ))}
          </div>
          <div className="flex justify-between my-8">
            <button className="py-3 px-6 flex gap-2 border-2 rounded-xl">
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-left"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M5 12l6 6" />
                <path d="M5 12l6 -6" />
              </svg>
              Previous
            </button>
            <button className="py-3 px-6 flex gap-2 border-2 rounded-xl">
              Next{" "}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-right"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
                <path d="M13 18l6 -6" />
                <path d="M13 6l6 6" />
              </svg>
            </button>
          </div>
        </section>
      </main>
      <AnimatePresence>
        {showFilter && (
          <motion.div
            className="absolute top-0 left-0 z-50"
            initial={{ y: window.innerHeight }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: window.innerHeight }}
            transition={{ duration: 0.5 }}
          >
            <div
              className="bg-black opacity-30 w-screen h-screen"
              onClick={handleHiddenFilter}
            ></div>
            <div className="absolute bottom-0 bg-white px-5 pt-10 pb-2 rounded-t-2xl">
              <Filter handleHiddenFilter={handleHiddenFilter} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PageProducts;
