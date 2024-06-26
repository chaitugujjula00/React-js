import FoodCard,{withPromotedlabel}from "../components/FoodCard";
import resList from "../utils/mockdata";
import Shimmer from "../components/Shimmer";
import { Link } from "react-router-dom";
import {useState, useEffect} from "react";
import useOnlineStatus from "../components/useOnlineStatus";
const Body = (user) =>{
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
        // console.log(user.user.email)

        if(OnlineStatus==false){
                return(
                        <h1>HOO.. Use are OFFLINE</h1>
                )
        }
    return(
        <div className="body">
            <div>{user.user.email}</div>
            <div className="m-4 flex items-center">
                <div className="m-4 flex ">
                    <input type="text" className="m-4 p-2 border border-solid border-black rounded-lg" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);
                    }}/>
                    <button className="px-4 m-4 bg-red-100 hover:bg-red-300 border border-solid border-black rounded-lg" onClick={()=>{
                        const searchedList = listofrestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setfilteredrestaurants(searchedList);
                    }}> Search</button>
                </div>
                <button className="px-4 py-2 m-4 bg-red-100 hover:bg-red-300 border border-solid border-black rounded-lg" onClick={()=>{
                    const filteredList = listofrestaurants.filter((res)=>res.info.avgRating>=4.5);
                    setfilteredrestaurants(filteredList);
                }}
                >Top rated restaurants</button>
                <button className="px-4 py-2 m-4 bg-red-100 hover:bg-red-300 border border-solid border-black rounded-lg" onClick={()=>{
                    const filteredList = listofrestaurants.filter((res)=>res.info.sla.deliveryTime<30);
                    setfilteredrestaurants(filteredList);
                }}
                >Delivery less than 30 mins</button>
            </div>
            <div className="mx-[10%] flex flex-wrap justify-left">
                {
                filteredrestaurants.map(restaurnart => 
                <Link className="my-4 mx-7 w-[20%] rounded-xl bg-pink-100 hover:shadow-xl hover:bg-red-200" 
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