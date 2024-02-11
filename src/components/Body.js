import FoodCard from "./FoodCard";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import {useState, useEffect} from "react";
const Body = () =>{
    const [listofrestaurants,setlistofrestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");
    const [filteredrestaurants,setfilteredrestaurants] = useState([]);
    useEffect(()=>{
        fetchData();
    }, [])

        const fetchData= async()=>{
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
            setlistofrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setfilteredrestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        }
        if(listofrestaurants.length==0){
            return(
                <Shimmer />
            )
        }
    return(
        <div className="body">
            <div className="filter">
                <div className="search-container">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button className="search-btn" onClick={()=>{
                        const searchedList = listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredrestaurants(searchedList);
                    }}> Search</button>
                </div>
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listofrestaurants.filter((res)=>res.info.avgRating>4);
                    setfilteredrestaurants(filteredList);
                }}
                >Top rated restaurants</button>
            </div>
            <div className="restaurants_container">
                {
                filteredrestaurants.map(restaurnart => <FoodCard key = {restaurnart.info.id} resData ={restaurnart}/>)
                }
            </div>
        </div>
    )
};

export default Body;