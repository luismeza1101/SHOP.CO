"use client";

import Image from "next/image";
import { Type_Product_Cart } from "../types";
import {  useEffect, useState } from "react";

interface Props {
  product: Type_Product_Cart;
  setListProducts: (newList: Type_Product_Cart[]) => void
  listProducts: Type_Product_Cart[]
}

const ElementCartShop: React.FC<Props> = ({
  product,
  setListProducts,
  listProducts
}) => {
  const [currentCant, setCurrentCant] = useState(product.cant_product);


  const addCantProduct = () => {
    if (currentCant < 5) {
      setCurrentCant((prev) => prev + 1);
      const newListProducts = listProducts.map(pro => pro.id === product.id ? {...pro, cant_product: pro.cant_product + 1} : pro)
      setListProducts(newListProducts)
    }
  };
  
  const reduceCantProduct = () => {
    if (currentCant > 1) {
      setCurrentCant((prev) => prev - 1);
      const newListProducts = listProducts.map(pro => pro.id === product.id ? {...pro, cant_product: pro.cant_product - 1} : pro)
      setListProducts(newListProducts)
    }
  };

  const deleteProduct = () => {
    const newListProducts = listProducts.filter(pro => pro.id != product.id)
    setListProducts(newListProducts)
  }

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(listProducts))
  },[listProducts])


  return (
    <article className="flex gap-2 w-[95%] mx-auto relative">
      <Image
        src={product.image}
        alt={product.name}
        height={100}
        width={100}
        className="rounded-lg h-auto w-auto"
      />
      <div className="w-full">
        <h3 className="font-bold">{product.name}</h3>
        <p className="text-sm text-ligth">Size: {product.size}</p>
        <div className="flex gap-2">
          <p className="text-sm text-ligth">Color:</p>
          <div
            className="w-5 h-5 rounded-full"
            style={{ backgroundColor: product.color }}
          ></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xl">${product.price}</span>
          <div className="button-secondary grid grid-cols-3 py-2 px-4">
            <button
              aria-label="Decrease quantity"
              className="grid place-content-center"
              onClick={reduceCantProduct}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-minus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 12l14 0" />
              </svg>
            </button>
            <span className="grid place-content-center">{currentCant}</span>
            <button
              aria-label="Increase quantity"
              className="grid place-content-center"
              onClick={addCantProduct}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icon-tabler-plus"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 5l0 14" />
                <path d="M5 12l14 0" />
              </svg>
            </button>
          </div>
        </div>
        <button aria-label="Remove product" className="absolute top-0 right-0" onClick={deleteProduct}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff0000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icon-tabler-trash"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 7l16 0" />
            <path d="M10 11l0 6" />
            <path d="M14 11l0 6" />
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
          </svg>
        </button>
      </div>
    </article>
  );
};

export default ElementCartShop;
