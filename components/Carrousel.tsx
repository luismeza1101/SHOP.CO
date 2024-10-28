"use client";

import { useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import Product from "@components/Product";
import { Type_Product } from "../types";

const SPRING_OPTIONS = {
  type: "spring",
  mass: 5,
  stiffness: 400,
  damping: 50,
};

interface Props {
  array: Type_Product[];
}

export const SwipeCarousel: React.FC<Props> = ({ array }) => {
  const [itemProduct, setItemProduct] = useState(0);
  const DRAG_BUFFER = 40;

  const dragX = useMotionValue(0);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && itemProduct < array.length - 1) {
      setItemProduct((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && itemProduct > 0) {
      setItemProduct((pv) => pv - 1);
    }
  };

  return (
    <div className="relative overflow-hidden my-5 md:hidden">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${itemProduct * 50}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className="flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images itemProduct={itemProduct} array={array}/>
      </motion.div>
    </div>
  );
};

interface PropsImage{
    itemProduct: number
    array: Type_Product[]
}

const Images: React.FC<PropsImage> = ({array, itemProduct}) => {
  return (
    <>
      {array.map((arrival, index) => {
        return (
          <motion.div
            key={index}
            animate={{
              scale: itemProduct === index ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="w-[60%] shrink-0"
          >
            <Product
              id={arrival.id}
              image={arrival.image}
              name={arrival.name}
              price={arrival.price}
              discount={arrival.discount}
              initial_price={arrival.initial_price}
            />
          </motion.div>
        );
      })}
    </>
  );
};

export default SwipeCarousel;
