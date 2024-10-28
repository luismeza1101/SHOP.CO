import { Type_Comment } from "../types";
import StarRating from "./StarRating";

const Comment: React.FC<Type_Comment> = ({comment,name, stars, date}) => {
  return (
    <div className="border-2 rounded-2xl px-4 py-6 flex flex-col gap-2 ">
      <div>
        <StarRating rating={stars}/>
      </div>
      <span className="font-bold text-lg flex gap-2">
        {name}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="#01ab31"
          className="icon icon-tabler icons-tabler-filled icon-tabler-circle-check"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" />
        </svg>
      </span>
      <p className="text-ligth">{comment}</p>
      {date && (
        <span className="text-ligth">Posted on {date}</span>
      )}
    </div>
  );
};

export default Comment;
