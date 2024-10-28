import { new_arrivals } from "@data/arrivals";
import ProductsSlider from "./ProductsSlider";
import Link from "next/link";

const Arrivals = () => {
  return (
    <section className="w-[90%] mx-auto py-12 text-center border-b-2">
      <h2 className="subtitle">NEW ARRIVALS</h2>
      <ProductsSlider array={new_arrivals}/>
      <Link href='/all-product' className="flex items-center justify-center border-2 w-[90%] mx-auto h-14 rounded-full desktop:w-[252px]">View All</Link>
    </section>
  );
};

export default Arrivals;
