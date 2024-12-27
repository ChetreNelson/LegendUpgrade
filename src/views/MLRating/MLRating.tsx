import { GiHamburgerMenu } from "react-icons/gi";
import MLRatingBoost from "./MLRatingBoost";
const MLRating = () => {
  return (
    <div className="flex flex-col ">
      <div className="flex justify-end">
        <GiHamburgerMenu className="hover:cursor-pointer" />
      </div>
      <MLRatingBoost />
    </div>
  );
};

export default MLRating;
