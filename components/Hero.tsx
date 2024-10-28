import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main className="bg-gray-main w-full desktop:grid grid-cols-2 grid-rows-[1fr_122px]">
      <div className="px-5 pt-10 desktop:flex flex-col justify-evenly xl:p-20">
        <div>
          <h1 className="font-extrabold text-5xl lg:text-6xl">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-ligth my-4 desktop:text-lg">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
        </div>
        <Link href="/all-product" className="flex justify-center items-center button-main w-[90%] mx-auto h-11 desktop:w-[210px] desktop:ml-0">
          Shop Now
        </Link>
        <div className="flex flex-wrap justify-center gap-10 mt-7 lg:justify-around">
          <div>
            <h3 className="font-semibold text-3xl">200+</h3>
            <span className="text-ligth text-sm">International Brands</span>
          </div>
          <div>
            <h3 className="font-semibold text-3xl">2,000+</h3>
            <span className="text-ligth text-sm">High-Quality Products</span>
          </div>
          <div>
            <h3 className="font-semibold text-3xl">30,000+</h3>
            <span className="text-ligth text-sm">Happy Customers</span>
          </div>
        </div>
      </div>
      <div className="w-full relative desktop:h-full desktop:w-auto">
        <Image
          src="/hero/principal.png"
          alt="Image principal"
          height={1000}
          width={1000}
          className="w-full h-auto"
        />
        <picture>
          <Image
            src="/hero/star.svg"
            alt="start"
            height={76}
            width={76}
            className="absolute top-10 right-10 lg:hidden"
          />
          <Image
            src="/hero/star.svg"
            alt="start"
            height={104}
            width={104}
            className="absolute top-10 right-10 hidden lg:block"
          />
        </picture>
        <picture>
          <Image
            src="/hero/star.svg"
            alt="start"
            height={44}
            width={44}
            className="absolute top-[30%] left-8 lg:hidden"
          />
          <Image
            src="/hero/star.svg"
            alt="start"
            height={56}
            width={56}
            className="absolute top-[30%] left-8 hidden lg:block"
          />
        </picture>
      </div>
      <div className="bg-black flex flex-wrap items-center justify-center gap-10 py-10 desktop:justify-evenly col-span-2 row-start-2">
        {["versace", "zara", "gucci", "prada", "calvin-klein"].map(
          (name, index) => (
            <Image
              src={`/hero/${name}.png`}
              alt={name}
              height={60}
              width={60}
              key={index}
              className="h-[25px] w-auto"
            />
          )
        )}
      </div>
    </main>
  );
};

export default Hero;
