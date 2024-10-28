import { all_reviews } from "@data/reviews";
import Comment from "@components/Comment";

const Reviews = () => {
  return (
    <section className="w-[90%] mx-auto mt-10">
      {/* Section Filter and Add Review */}
      <div className="flex justify-between min-h-10 mb-8">
        {/* Text Reviews */}
        <div className="flex gap-2 items-end">
          <h5 className="font-bold text-2xl opacity-100">All Reviews</h5>
          <span className="text-ligth">(344)</span>
        </div>
        {/* Buttons Options */}
        <div className="flex items-center gap-2">
          <button className="button-secondary h-full w-10 grid place-content-center">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M6 4v4" />
              <path d="M6 12v8" />
              <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M12 4v10" />
              <path d="M12 18v2" />
              <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
              <path d="M18 4v1" />
              <path d="M18 9v11" />
            </svg>
          </button>
          <button className="button-main h-full px-3 text-sm">
            Write a Review
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-10">
        <div className="flex flex-col gap-5 md:hidden">
          {all_reviews.slice(0, 3).map((review, index) => (
            <Comment
              key={index}
              comment={review.comment}
              name={review.name}
              stars={review.stars}
              date={review.date}
            />
          ))}
        </div>
        <div className="hidden md:grid grid-cols-2 gap-4">
          {all_reviews.map((review, index) => (
            <Comment
              key={index}
              comment={review.comment}
              name={review.name}
              stars={review.stars}
              date={review.date}
            />
          ))}
        </div>
        <button className="border-2 rounded-full w-[195px] h-12">
          Load More Reviews
        </button>
      </div>
    </section>
  );
};

export default Reviews;
