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
                <div className="flex flex-col justify-center">
                        <div className="my-8 p-3 border-1 rounded-lg bg-gray-300 drop-shadow-xl mx-auto w-[65%]" >
                                <button className="bg-white rounded-3xl py-2 px-4" onClick={handleClearCart}>Clear Cart</button>
                                <ItemList items={items} />
                        </div>
                        <button className=" px-4 py-2  mb-36 mx-auto text-lg font-semibold rounded-2xl bg-red-100 hover:bg-red-300">Order Now</button>
                </div>
        )
}
export default Cart;