import ItemList from "./ItemList";
import {clearCart} from "../utils/cardSlice";
import { useDispatch, useSelector } from "react-redux";

const Cart = () =>{
        const items=useSelector((store)=>store.cart.items)
        console.log(items);
        const dispatch = useDispatch();
        const handleClearCart =()=>{
                dispatch(clearCart());
        }
        return(
                <div className="my-8 p-3 border-1 rounded-lg bg-gray-300 drop-shadow-xl" >
                        <button onClick={handleClearCart}>Clear Cart</button>
                        <ItemList items={items} />
                </div>
        )
}
export default Cart;