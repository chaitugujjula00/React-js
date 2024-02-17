import  {CDN_URL}  from "../utils/constants";
const FoodCard = (props) =>{
    const {resData}= props;
    const{cloudinaryImageId, name, cuisines, avgRating, sla} = resData?.info
      return(
          <div className="FoodCard">
              <img className="rounded-se-xl rounded-ss-xl" src={
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
export default FoodCard;  