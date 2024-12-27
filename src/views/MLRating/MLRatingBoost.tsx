import BoostListCard from "components/RatingBoost/BoostListCard";
import { FaGreaterThan } from "react-icons/fa";
const MLRatingBoost = () => {
  return (
    <div className="h-full flex-1 flex flex-col">
      <h1>Mobile Legends Rating Boost</h1>
      <div className="bg-black">
        <BoostListCard />
        <div>
          <FaGreaterThan size={40} className="rotate-90 sm:rotate-0" />
        </div>
        <BoostListCard />
        <div className="flex w-full">
          <div className="flex w-1/2 flex-col">
            <span>
              <input id="faster" type="checkbox" />
              <label htmlFor="faster">30% faster</label>
            </span>
            <span>
              <input id="faster" type="checkbox" />
              <label htmlFor="faster">30% faster</label>
            </span>
            <span>
              <input id="faster" type="checkbox" />
              <label htmlFor="faster">30% faster</label>
            </span>
            <span>
              <input id="faster" type="checkbox" />
              <label htmlFor="faster">30% faster</label>
            </span>
          </div>
          <div className="flex flex-col w-1/2">
            <span>
              <input id="faster" type="checkbox" />
              <label htmlFor="faster">30% faster</label>
            </span>
            <span>
              <input id="faster" type="checkbox" />
              <label htmlFor="faster">30% faster</label>
            </span>
            <span>
              <input id="faster" type="checkbox" />
              <label htmlFor="faster">30% faster</label>
            </span>
          </div>
        </div>
        <div className="w-full flex flex-col items-center gap-2">
          <span>amount</span>
          <p>
            Estimated time for boost:
            <span className="text-yellow-500">5 hours</span>
          </p>
          <div className="flex gap-2">
            <button className="border border-white p-2 rounded-lg w-32">
              ADD TO CART
            </button>
            <button className="bg-purple-900 p-2 rounded-lg w-32">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MLRatingBoost;
