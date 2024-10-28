"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import ElementCartShop from "@components/ElementCartShop";
import { Type_Product_Cart } from "../../types";
import { codes_discounts } from "@data/discounts";

const PageCart = () => {
  const [subTotal, setSubTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const PRICE_DELIVERY = 12;
  const [total, setTotal] = useState(0);
  const [listProducts, setListProducts] = useState<Type_Product_Cart[]>([])
  const refCodeDiscount = useRef<HTMLInputElement | null>(null)

  const calcSubTotal = useCallback(() => {
    return listProducts.reduce((acc, product) => acc + product.price * product.cant_product, 0);
  }, [listProducts]);

  const validateDiscount = () => {
    if(codes_discounts.includes(refCodeDiscount.current!.value)){
      setDiscount(100)
    }
    if(refCodeDiscount.current?.value){refCodeDiscount.current.value = ''}
  }

  useEffect(() => {
    const cartProducts: Type_Product_Cart[] = JSON.parse(localStorage.getItem('cart') || '[]')
    setListProducts(cartProducts)
  },[])
  
  useEffect(() => {
    const calculatePay = () => {
      const resultSubTotal = calcSubTotal()
      const newTotal = resultSubTotal - discount + PRICE_DELIVERY;
      setSubTotal(resultSubTotal)
      setTotal(newTotal)
    }
    calculatePay()
  },[listProducts, discount, PRICE_DELIVERY, calcSubTotal])


  return (
    <main className="w-[90%] mx-auto mt-8">
      <h2 className="subtitle">Your Cart</h2>
      <section className="py-6 grid gap-6 desktop:grid-cols-2 xl:w-[80%] mx-auto">
        <ul className="border-2 rounded-xl grid gap-4 py-4 desktop:gap-8">
          {listProducts.map((product, index) => (
            <li key={index}>
              <ElementCartShop product={product} setListProducts={setListProducts} listProducts={listProducts}/>
            </li>
          ))}
        </ul>
        <aside className="border-2 rounded-xl py-3 px-2 grid gap-3 max-h-[500px]">
          <h5 className="font-bold text-xl">Order Summary</h5>
          <div className="flex justify-between items-center px-5">
            <span className="text-ligth">SubTotal: </span>
            <span className="font-bold">${subTotal}</span>
          </div>
          <div className="flex justify-between items-center px-5">
            <span className="text-ligth">Discount: </span>
            <span className="font-bold text-red-500">-${discount}</span>
          </div>
          <div className="flex justify-between items-center px-5">
            <span className="text-ligth">Delivery: </span>
            <span className="font-bold">${PRICE_DELIVERY}</span>
          </div>
          <hr className="bg-gray-300" />
          <div className="flex justify-between items-center px-5">
            <span className="text-lg">Total</span>
            <span className="font-bold text-xl">${total}</span>
          </div>
          <div className="flex justify-between items-center gap-3 h-12">
            <div className="flex items-center gap-2 bg-gray-main px-4 rounded-full text-gray-400 flex-1 h-full" >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="icon icon-tabler icon-tabler-tag"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.172 2a3 3 0 0 1 2.121 .879l7.71 7.71a3.41 3.41 0 0 1 0 4.822l-5.592 5.592a3.41 3.41 0 0 1 -4.822 0l-7.71 -7.71a3 3 0 0 1 -.879 -2.121v-5.172a4 4 0 0 1 4 -4zm-3.672 3.5a2 2 0 0 0 -1.995 1.85l-.005 .15a2 2 0 1 0 2 -2" />
              </svg>
              <input
                type="text"
                placeholder="Enter discount code"
                className="bg-transparent outline-none"
                ref={refCodeDiscount}
              />
            </div>
            <button className="button-main w-[30%] h-full" onClick={validateDiscount}>Apply</button>
          </div>
          <button className="button-main h-14 mt-4">Go To Checkout</button>
        </aside>
      </section>
    </main>
  );
};

export default PageCart;
