import FoodCard from "./FoodCard";
import resList from "../utils/mockdata";
import {useState} from "react";
const Body = () =>{
    const [listofrestaurants,setlistofrestaurants] = useState(resList);
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listofrestaurants.filter((res)=>res.data.avgRating>4);
                    setlistofrestaurants(filteredList);
                }}
                >Top rated restaurants</button>
            </div>
            <div className="restaurants_container">
                {
                listofrestaurants.map(restaurnart => <FoodCard key = {restaurnart.data.id} resData ={restaurnart}/>)
                }
            </div>
        </div>
    )
};

export default Body;