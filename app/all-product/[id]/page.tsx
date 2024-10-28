

import InfoProduct from "@components/InfoProduct";
import { also_like } from "@data/also_like";
import Reviews from "@components/Reviews";
import ProductsHero from "@components/ProductsSlider";


const ProductPage = async ({ params }: { params: { id: string } }) => {
  const {id} = await params
  return (
    <>
      <main className="mt-10">
        <InfoProduct product_id={id} />
      </main>
      <Reviews />
      <section className="w-[90%] mx-auto text-center my-10">
        <h2 className="subtitle">
          YOU MIGTH <br />
          ALSO LIKE
        </h2>
        <ProductsHero array={also_like} />
      </section>
    </>
  );
};

export default ProductPage;
