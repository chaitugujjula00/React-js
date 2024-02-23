import  {CDN_URL}  from "../utils/constants";
const FoodCard = (props) =>{
    const {resData}= props;
    const{cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info
      return(
          <div className="FoodCard">
              <img className="rounded-se-xl rounded-ss-xl bg-cover w-full h-40" src={
                CDN_URL
                +cloudinaryImageId
               }/>
              <div className="p-3">
                <h2 className="font-bold">{name}</h2>
                <h4>{cuisines.join(" | ")}</h4>
                <h4>{avgRating} stars</h4>
                <h5>{sla.deliveryTime} minutes</h5>
              </div>
          </div>
      )
  };

  //higher order component
  export const withPromotedlabel =(FoodCard) =>{
        return(props)=>{
                return(
                        <div>
                                <label className="absolute y-0 ml-3 text-white bg-gray-500 p-2 rounded-b-xl">Open</label>
                                <FoodCard {...props}/>
                        </div>
                )
        }
  }
export default FoodCard;  