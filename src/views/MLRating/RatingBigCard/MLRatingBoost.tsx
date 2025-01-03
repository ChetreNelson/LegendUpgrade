import AdditionalChargeList from "../AdditionalChargeList";
import FirstSection from "./FirstSection";
const MLRatingBoost = () => {
  const totalAmount = 6;
  return (
    <div className="h-full flex-1 w-full ">
      <h1>Mobile Legends Rating Boost</h1>
      <div className="bg-black flex flex-col items-center  ">
        <FirstSection />
        <AdditionalChargeList />
        <div className="w-full flex flex-col items-center gap-2">
          <span className="flex">
            {`${totalAmount}`}
            <p className="text-yellow-500">$</p>
          </span>
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
