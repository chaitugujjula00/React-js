import  CDN_URL  from "../utils/constants";
const FoodCard = (props) =>{
    const {resData}= props;
    const{cloudinaryImageId, name, cuisines, avgRating, deliveryTime} = resData?.data
      return(
          <div className="foodCard">
              <img src={
                CDN_URL
                +cloudinaryImageId
               }/>
              <h2>{name}</h2>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRating} stars</h4>
              <h5>{deliveryTime} minutes</h5>
          </div>
      )
  };
export default FoodCard;  