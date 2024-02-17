import { MENU_URL } from "../utils/constants";
import { useState,useEffect } from "react";
const useRestaurantMenu = (resId) => {
        const [resInfo, setresInfo] = useState(null);
        useEffect(() => {
                fetchMenu();
        }, []);
  console.log(MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER");
  const fetchMenu = async () => {
    const data = await fetch(
      MENU_URL + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setresInfo(json?.data);
  };
  console.log(resInfo)
  return resInfo;
};
export default useRestaurantMenu;
