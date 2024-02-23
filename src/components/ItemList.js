import { CDN_URL } from "../utils/constants";
const ItemList = ({ items }) => {
//   console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} className=" m-4 bg-white rounded-xl flex justify-between p-4 shadow-inner">
          <div className="w-[75%] px-4 text-left">
            <span className="font-semibold text-lg">{item.card.info.name}</span>
            <p className="text-sm text-gray-700 pt-2">{item.card.info.description}</p>
          </div>
          <div className="w-[20%] px-4">
            <img className="rounded-xl bg-cover h-24 w-full" src={CDN_URL + item.card.info.imageId} />
            <span className="text-lg pt-3">Rs.{item.card.info.price/100}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
