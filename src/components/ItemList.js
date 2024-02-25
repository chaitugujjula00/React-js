import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import {addItem} from "../utils/cardSlice";
const ItemList = ({ items }) => {
//   console.log(items);
const dispatch =useDispatch();
const handleAddItem = (item) =>{
        dispatch(addItem(item));
}
  return (
    <div>
      {items.map((item) => (
        <div key={item.card.info.id} >
                <button className="absolute  mt-24 right-[88px] text-black bg-gray-300 border border-red-600 py-2 px-3 rounded-xl"
                onClick={()=>handleAddItem(item)}>ADD+</button>
          <div className=" m-4 bg-white rounded-xl flex justify-between p-4 shadow-inner">
                <div className="w-[75%] px-4 text-left">
                        <span className="font-semibold text-lg">{item.card.info.name}</span>
                        <p className="text-sm text-gray-700 pt-2">{item.card.info.description}</p>
                </div>
                <div className="w-[20%] px-4">
                        <img className="rounded-xl bg-cover h-24 w-full" src={CDN_URL + item.card.info.imageId} />
                        <div className="text-lg mt-6">Rs.{item.card.info.price/100}</div>
                </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
