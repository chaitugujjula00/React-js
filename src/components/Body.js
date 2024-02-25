import FoodCard,{withPromotedlabel}from "./FoodCard";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import useOnlineStatus from "./useOnlineStatus";
const Body = () =>{
    const [listofrestaurants,setlistofrestaurants] = useState([]);
    const [searchText,setsearchText] = useState("");
    const [filteredrestaurants,setfilteredrestaurants] = useState([]);
    const RestaurantCardPromoted =withPromotedlabel(FoodCard);
    useEffect(()=>{
        fetchData();
    }, []);
    const OnlineStatus=useOnlineStatus();

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
        

        if(OnlineStatus==false){
                return(
                        <h1>HOO.. Use are OFFLINE</h1>
                )
        }
    return(
        <div className="body">
            <div className="m-4 flex items-center">
                <div className="m-4 flex ">
                    <input type="text" className="m-4 p-2 border border-solid border-black rounded-lg" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button className="px-4 m-4 bg-green-300 border border-solid border-black rounded-lg" onClick={()=>{
                        const searchedList = listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredrestaurants(searchedList);
                    }}> Search</button>
                </div>
                <button className="px-4 py-2 bg-green-300 border border-solid border-black rounded-lg" onClick={()=>{
                    const filteredList = listofrestaurants.filter((res)=>res.info.avgRating>4);
                    setfilteredrestaurants(filteredList);
                }}
                >Top rated restaurants</button>
            </div>
            <div className="mx-[10%] flex flex-wrap justify-between">
                {
                filteredrestaurants.map(restaurnart => 
                <Link className="m-4 w-[20%] rounded-xl bg-pink-100 hover:shadow-xl hover:bg-red-200" 
                key = {restaurnart.info.id} to={'/restuarants/'+restaurnart.info.id}>
                        {restaurnart.info.isOpen ? (<RestaurantCardPromoted resData={restaurnart} />):
                        (<div>
                                <label className="absolute y-0 ml-3 text-white bg-red-500 p-2 rounded-b-xl">Closed</label>
                                <FoodCard  resData ={restaurnart}/>
                        </div>)}
                        </Link>)
                }
            </div>
        </div>
    )
};

export default Body;