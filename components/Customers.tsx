import { our_customers } from "@data/customers";
import CarrouselWithArrow from "./CarrouselWithArrow";
import Comment from "@components/Comment";

const Customers = () => {
  return (
    <section className="w-[90%] mx-auto pb-10">
      <h2 className="subtitle">
        OUR HAPPY <br className="md:hidden" />
        CUSTOMERS
      </h2>
      <CarrouselWithArrow />
      <div className="hidden md:flex flex-wrap justify-center gap-4 mt-10">
        {our_customers.map((comment, index) => (
          <div className="max-w-[400px]">
            <Comment
              key={index}
              comment={comment.comment}
              name={comment.name}
              stars={comment.stars}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Customers;
