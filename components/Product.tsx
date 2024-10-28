import Image from "next/image";
import { Type_Product } from "../types";
import Link from "next/link";


const Product: React.FC<Type_Product> = ({
  id,
  image,
  name,
  price,
  discount,
  initial_price,
}) => {

  return (
    <Link className="flex flex-col items-start" href={`/all-product/${id}`}>
      <Image
        src={image}
        alt={name}
        width={400}
        height={400}
        className="w-full rounded-lg"
        loading="lazy"
      />
      <span className="font-bold">{name}</span>
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl">${price}</span>
        {initial_price && (
        <span className="initial-price">
          {`$${initial_price}`}
        </span>
        )}
        {discount && (
        <span className="discount">
          {`-${discount}%`}
        </span>
        )}
      </div>
    </Link>
  );
};

export default Product;
