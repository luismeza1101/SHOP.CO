import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-main w-full pt-10">
      <article className="w-[90%] max-w-[1240px] mx-auto bg-black rounded-2xl p-10 mb-10 desktop:flex items-center justify-between">
        <h6 className="text-white text-3xl font-extrabold md:text-4xl desktop:text-5xl">
          STAY UPTO DATE ABOUT <br className="hidden desktop:inline" /> OUR
          LATEST OFFERS
        </h6>
        <form className="flex flex-col gap-4 mt-5 desktop:min-w-[350px]">
          <div className="w-full bg-white flex items-center gap-4 h-11 text-gray-400 px-4 rounded-full">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-mail"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
            <input
              type="email"
              placeholder="Enter your email address"
              className="h-full w-full text-lg"
            />
          </div>
          <button
            type="submit"
            className="bg-white h-11 font-medium rounded-full"
          >
            Suscribe to Newsletter
          </button>
        </form>
      </article>
      <section className="w-[90%] pb-5 mx-auto grid grid-cols-2 grid-rows-4 gap-4 desktop:grid-cols-6 desktop:grid-rows-[2fr_1fr]">
        <div className="col-span-2 grid gap-3 desktop:row-start-1 desktop:col-span-2">
          <h2 className="font-extrabold text-3xl">SHOP.CO</h2>
          <p className="text-ligth">
            We have clothes that suits your style and which you&apos;re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3">
            {["twitter", "facebook", "instagram", "github"].map(
              (rrss, index) => (
                <Link
                  href="#"
                  className="bg-white w-10 h-10 flex items-center justify-center border-2 border-gray-300  rounded-full"
                  key={index}
                >
                  <Image
                    src={`/rrss/${rrss}.svg`}
                    alt={rrss}
                    width={20}
                    height={20}
                  />
                </Link>
              )
            )}
          </div>
        </div>
        <div className="row-start-2 desktop:row-start-1">
          <h6 className="section-footer">COMPANY</h6>
          <ul className="list-footer">
            <li className="item-list-footer">About</li>
            <li className="item-list-footer">Features</li>
            <li className="item-list-footer">Works</li>
            <li className="item-list-footer">Career</li>
          </ul>
        </div>
        <div className="row-start-2 desktop:row-start-1">
          <h6 className="section-footer">HELP</h6>
          <ul className="list-footer">
            <li className="item-list-footer">Customer Support</li>
            <li className="item-list-footer">Delivery Details</li>
            <li className="item-list-footer">Terms & Conditions</li>
            <li className="item-list-footer">Privacy Policy</li>
          </ul>
        </div>
        <div className="row-start-3 desktop:row-start-1">
          <h6 className="section-footer">FAQ</h6>
          <ul className="list-footer">
            <li className="item-list-footer">Account</li>
            <li className="item-list-footer">Manage Deliveries</li>
            <li className="item-list-footer">Orders</li>
            <li className="item-list-footer">Payment</li>
          </ul>
        </div>
        <div className="row-start-3 desktop:row-start-1">
          <h6 className="section-footer">RESOURCES</h6>
          <ul className="list-footer">
            <li className="item-list-footer">Free eBook</li>
            <li className="item-list-footer">Development Tutorial</li>
            <li className="item-list-footer">How to - Blog</li>
            <li className="item-list-footer">Youtube Playlist</li>
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center col-span-2 row-start-4 border-t-2 border-opacity-10 pt-5 desktop:col-span-6 desktop:row-start-2">
          <p className="text-ligth">
            Shop.co &copy; 2000-2021, All rights reserved
          </p>
          <div className="flex justify-center gap-4 mt-4">
            {["visa", "mastercard", "paypal", "applepay", "googlepay"].map(
              (method, index) => (
                <div
                  className="bg-white h-8 w-12 flex items-center justify-center rounded-xl relative"
                  key={index}
                >
                  <Image
                    src={`/pay/${method}.png`}
                    alt={method}  
                    fill
                    sizes="(max-width: 640px) 50px, (max-width: 768px) 50px, 100px"
                    className="object-contain"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
