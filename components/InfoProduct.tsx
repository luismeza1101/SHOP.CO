"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { all_products } from "@data/all_products";
import { Color_Product, Type_Product, Type_Product_Cart } from "../types";
import Loader from "@components/Loader";

interface Props {
  product_id: string;
}

const InfoProduct: React.FC<Props> = ({ product_id }) => {
  const [infoProduct, setInfoProduct] = useState<Type_Product>();
  const [cantProduct, setCantProduct] = useState(0);
  const [currentSize, setCurrentSize] = useState<string | null>(null);
  const [currentColor, setCurrentColor] = useState<Color_Product | null>(null);

  useEffect(() => {
    const getInfoProduct = () => {
      const information = all_products.find(
        (product) => product.id === product_id
      );
      if (information) {
        setInfoProduct(information);
      }
    };
    getInfoProduct();
  }, [product_id]);

  const addCantProduct = () => {
    if (cantProduct < 5) {
      setCantProduct((prev) => prev + 1);
    }
  };

  const reduceCantProduct = () => {
    if (cantProduct > 0) {
      setCantProduct((prev) => prev - 1);
    }
  };

  const addProductCart = () => {
    if (!infoProduct || !currentColor || !currentSize) {
      alert("You must select all options.");
      return;
    } else if (cantProduct == 0) {
      alert("The quantity cannot be 0");
      return;
    }
    const productToAdd: Type_Product_Cart = {
      id: crypto.randomUUID(),
      cant_product: cantProduct,
      color: currentColor,
      size: currentSize,
      image: infoProduct.image,
      name: infoProduct.name,
      price: infoProduct.price,
    };

    const currentCart: Type_Product_Cart[] = JSON.parse(
      localStorage.getItem("cart") || "[]"
    );

    const existingProductIndex = currentCart.findIndex(
      (item) =>
        item.id === productToAdd.id &&
        item.color === productToAdd.color &&
        item.size === productToAdd.size
    );

    if (existingProductIndex !== -1) {
      if(currentCart[existingProductIndex].cant_product + cantProduct > 5){
        currentCart[existingProductIndex].cant_product = 5
      } else {
        currentCart[existingProductIndex].cant_product += cantProduct;
      }
    } else {
      currentCart.push(productToAdd);
    }

    localStorage.setItem("cart", JSON.stringify(currentCart));
    alert("Added product");
    setCantProduct(0);
    setCurrentColor(null);
    setCurrentSize(null);
  };

  return (
    <>
      {infoProduct ? (
        <section className="w-[90%] mx-auto flex flex-col gap-5 md:flex-row">
          {/* Section Image */}
          <div className="w-full flex items-center justify-center bg-gray-main md:w-[40%]">
            <Image
              src={infoProduct.image}
              alt={infoProduct.name}
              width={500}
              height={500}
              priority
              className="rounded-xl max-h-[530px] max-w-[444px]"
            />
          </div>
          {/* Section Info Product */}
          <div className="flex flex-col gap-3 md:w-[60%]">
            <h4 className="font-extrabold text-3xl">{infoProduct.name}</h4>
            {/* Price */}
            <div className="flex gap-4">
              <p className="text-2xl font-bold">${infoProduct.price}</p>
              {infoProduct.initial_price && (
                <span className="initial-price">
                  ${infoProduct.initial_price}
                </span>
              )}
              {infoProduct.discount && (
                <span className="discount">-{infoProduct.discount}%</span>
              )}
            </div>
            <p className="text-ligth">{infoProduct.description}</p>
            <hr className="bg-gray-main" />
            {/* Section Colors */}
            <div className="mb-5">
              <span className="options-product">Select Colors</span>
              <div className="flex gap-3 mt-3">
                {infoProduct.colors &&
                  infoProduct.colors.map((color, index) => (
                    <button
                      key={index}
                      style={{ backgroundColor: color }}
                      className="w-10 h-10 rounded-full grid place-content-center"
                      onClick={() => setCurrentColor(color)}
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
                        className={`icon icon-tabler icons-tabler-outline icon-tabler-check ${
                          currentColor == color ? "" : "hidden"
                        }`}
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M5 12l5 5l10 -10" />
                      </svg>
                    </button>
                  ))}
              </div>
            </div>
            <hr className="bg-gray-main" />
            {/* Section Sizes */}
            <div className="mb-5">
              <span className="options-product">Chose Size</span>
              <div className="flex gap-3 mt-3">
                {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
                  <button
                    key={index}
                    className={`${
                      currentSize == size ? "button-main" : "button-secondary"
                    } py-2 px-4`}
                    onClick={() => setCurrentSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <hr className="bg-gray-main" />
            {/* Section Add Cart */}
            <div className="flex gap-5 w-full min-h-11">
              <div className="button-secondary grid grid-cols-3 w-[30%]">
                <button
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-minus"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                  </svg>
                </button>
                <span className="grid place-content-center">{cantProduct}</span>
                <button
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M12 5l0 14" />
                    <path d="M5 12l14 0" />
                  </svg>
                </button>
              </div>
              <button className="button-main flex-1" onClick={addProductCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex w-full items-center justify-center">
          <Loader />
        </div>
      )}
    </>
  );
};

export default InfoProduct;
