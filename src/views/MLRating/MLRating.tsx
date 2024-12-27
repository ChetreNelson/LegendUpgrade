import { GiHamburgerMenu } from "react-icons/gi";
import MLRatingBoost from "./RatingBigCard/MLRatingBoost";
const MLRating = () => {
  return (
    <div className="flex flex-col p-2">
      <div className="flex justify-end">
        <GiHamburgerMenu className="hover:cursor-pointer" />
      </div>
      <MLRatingBoost />
    </div>
  );
};

export default MLRating;
