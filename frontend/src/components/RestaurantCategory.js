import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantCategory= ({data, showItems,showIndex,setshowIndex}) =>{
        // const Category={props}
        // console.log(data);
        // const [showItems,setshowItems] = useState(false);
        const handleClick =()=>{
                // showItems==false ? setshowItems(true) : setshowItems(false);
                showItems==false ? setshowIndex(showIndex) : setshowIndex(null);
        }
        return(
                <div className="my-8 p-3 border-1 rounded-lg bg-gray-300 drop-shadow-xl" >
                        <div className=" flex justify-between cursor-pointer" onClick={handleClick}>
                                <span className="text-xl font-semibold ">{data?.title} ({data.itemCards.length})</span>
                        <span className="text-lg font-semibold">⏬</span>
                        </div>
                        {showItems && <ItemList items={data.itemCards} />}
                </div>
        )
}
export default RestaurantCategory