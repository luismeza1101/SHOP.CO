import Image from "next/image";

const Styles = () => {
  return (
    <section className="bg-gray-main w-[90%] mx-auto my-10 rounded-2xl text-center py-10">
      <h2 className="subtitle">
        BROWSE BY <hr className="desktop:hidden"/> DRESS STYLE
      </h2>
      <div className="w-[90%] mx-auto mt-7 grid grid-rows-4 gap-4 desktop:grid-cols-5 desktop:grid-rows-2">
        <div className="style-card desktop:col-span-2">
          <Image
            src="/dress_styles/casual.png"
            alt="casual"
            fill
            className="rounded-2xl object-cover object-top"
            loading="lazy"
          />
          <span className="absolute top-5 left-8 font-bold text-2xl">
            Casual
          </span>
        </div>
        <div className="style-card desktop:col-span-3">
          <Image
            src="/dress_styles/formal.png"
            alt="formal"
            fill
            className="h-full rounded-2xl object-cover object-top"
            loading="lazy"
          />
          <span className="absolute top-5 left-8 font-bold text-2xl">
            Formal
          </span>
        </div>
        <div className="style-card desktop:col-span-3">
          <Image
            src="/dress_styles/party.png"
            alt="party"
            fill
            className="h-full rounded-2xl object-cover object-top"
            loading="lazy"
          />
          <span className="absolute top-5 left-8 font-bold text-2xl">
            Party
          </span>
        </div>
        <div className="style-card desktop:col-span-2">
          <Image
            src="/dress_styles/gym.png"
            alt="gym"
            fill
            className="rounded-2xl object-cover object-top"
            loading="lazy"
          />
          <span className="absolute top-5 left-8 font-bold text-2xl">Gym</span>
        </div>
      </div>
    </section>
  );
};

export default Styles;
