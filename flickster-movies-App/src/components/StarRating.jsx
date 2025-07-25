import { useState } from "react";
import { FaStar } from "react-icons/fa";

export default function StarRating({ totalStars = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={starValue}
              className="hidden"
              onClick={() => setRating(starValue)}
            />
            <FaStar
              size={24}
              className={
                starValue <= (hover || rating)
                  ? "text-yellow-400 cursor-pointer"
                  : "text-gray-300 cursor-pointer"
              }
              onMouseEnter={() => setHover(starValue)}
              onMouseLeave={() => setHover(null)}
            />
          </label>
        );
      })}
      <span className="ml-2 text-sm text-gray-700 dark:text-white">
        {rating ? `You rated: ${rating}` : "Rate this movie"}
      </span>
    </div>
  );
}
