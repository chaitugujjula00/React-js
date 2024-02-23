import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
import RestaurantCategory from "./RestaurantCategory";
const RestuarantMenu = () => {
  const [restaurantInfo, setrestaurantInfo] = useState([]);
  const [catergoriesInfo, setcatergoriesInfo] = useState([]);
  const {resId}=useParams();
  const [showIndex,setshowIndex] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER');
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER');
    const json = await data.json();
        // console.log(json);
    setrestaurantInfo(json?.data?.cards[2]?.card?.card?.info);
    setcatergoriesInfo(
        json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
                (c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
          )
    );
//     const categories = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//         (c)=>c.card?.card?.["@type"]=="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//   );
//   console.log(categories);
  };
//     console.log(catergoriesInfo);
  const { name, locality, costForTwoMessage, avgRating } = restaurantInfo;
  return (
    <div className="text-center mx-60">
      <h2 className="text-2xl font-bold mx-auto my-6">{name}</h2>
      <div className="flex justify-around my-4">
      <h3 className="text-lg font-semibold ">Location : {locality}</h3>
      <h3 className="text-lg font-semibold ">Avg. Rating : {avgRating}</h3>
      </div>
      {catergoriesInfo ? catergoriesInfo.map((catergories,index) => 
        <RestaurantCategory key={catergories?.card?.card?.title} data={catergories?.card?.card} 
        showItems={index == showIndex ? true : false}
        showIndex={index}
        setshowIndex={(i) => setshowIndex(i)}
        />
      ) :null}
    </div>
  );
};

export default RestuarantMenu;
