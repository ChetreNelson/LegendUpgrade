import { additionalChargeRate } from "constants/ratingPage";

interface AdditionalChargeListProps {}
const AdditionalChargeList = () => {
  return (
    <div className="flex flex-col w-full">
      {additionalChargeRate.map((item) => (
        <ul className="w-full " key={item.id}>
          <li className="flex  items-center gap-2">
            <input id={item.name} type="checkbox" />
            <label htmlFor={item.name}>{item.name}</label>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default AdditionalChargeList;
