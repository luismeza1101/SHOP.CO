"use client";

import Link from "next/link";
import { useState } from "react";
import SearchMobile from "./SearchMobile";
import { motion, AnimatePresence } from "framer-motion";
import SearchBar from "./SearchBar";

const Header = () => {
  const [showOffer, setShowOffer] = useState(true);
  const [showSearchBar, setShowSearchBar] = useState(false);

  return (
    <header className="sticky top-0 z-10 bg-white border-b-2">
      <AnimatePresence>
        {showOffer && (
          <motion.div
            className="text-white text-sm bg-black h-8 flex items-center justify-center gap-1 w-full relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            Sign Up and get 20% off to your firts order.
            <Link href="#" className="underline"> 
              Sign Up Now
            </Link>
            <button
              className="absolute hidden md:inline right-[10%]"
              onClick={() => setShowOffer(false)}
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
                className="icon icon-tabler icons-tabler-outline icon-tabler-x"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
      <nav className="w-4/5 mx-auto flex justify-between items-center py-3 relative md:gap-10">
        <SearchMobile
          showSearchBar={showSearchBar}
          setShowSearchBar={setShowSearchBar}
        />
        <Link href='/' className="font-extrabold text-3xl">SHOP.CO</Link>
        <div className="flex gap-3 items-center justify-end flex-1">
          <button onClick={() => setShowSearchBar(true)} className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-search "
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
              <path d="M21 21l-6 -6" />
            </svg>
          </button>
          <div className="hidden md:flex flex-1 max-w-[577px]">
            <SearchBar/>
          </div>
          <Link href="/cart-shop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
              <path d="M17 17h-11v-14h-2" />
              <path d="M6 5l14 1l-1 7h-13" />
            </svg>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-user-circle cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
          </svg>
        </div>
      </nav>
    </header>
  );
};

export default Header;
