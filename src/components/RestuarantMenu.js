import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";
const RestuarantMenu = () => {
  const [restaurantInfo, setrestaurantInfo] = useState([]);
  const [itemsInfo, setitemsInfo] = useState([]);
  const {resId}=useParams();
  useEffect(() => {
    fetchMenu();
  }, []);
  console.log(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER');
  const fetchMenu = async () => {
    const data = await fetch(MENU_URL+resId+'&catalog_qa=undefined&submitAction=ENTER');
    const json = await data.json();
        console.log(json);
    setrestaurantInfo(json?.data?.cards[0]?.card?.card?.info);
    setitemsInfo(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  };
    console.log(restaurantInfo);
  const { name, locality, costForTwoMessage, avgRating } = restaurantInfo;
  return (
    <div>
      <h2>Name of the restuarant :{name}</h2>
      <h3>Locality : {locality}</h3>
      <h3>cost for two :{costForTwoMessage}</h3>
      <h3>Rating : {avgRating}</h3>

      {itemsInfo.map((items) => (
        <div key={items.card.info.id}>
          <h5>{items.card.info.name}</h5>
        </div>
      ))}
    </div>
  );
};

export default RestuarantMenu;
