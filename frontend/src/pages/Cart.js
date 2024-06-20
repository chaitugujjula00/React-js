import ItemList from "../components/ItemList";
import {clearCart} from "../utils/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = ({user}) =>{
        const navigate = useNavigate()
        const items=useSelector((store)=>store.cart.items)
        console.log(items);
        const dispatch = useDispatch();
        const handleClearCart =()=>{
                dispatch(clearCart());
        }
        const order = () =>{
                if(user==null) {
                        navigate('/login')
                }
        }
        return(
                <div className="flex flex-col justify-center">{user!=null && user.userName}
                        <div className="my-8 p-3 border-1 rounded-lg bg-gray-300 drop-shadow-xl mx-auto w-[65%]" >
                                <button className="bg-white rounded-3xl py-2 px-4" onClick={handleClearCart}>Clear Cart</button>
                                <ItemList items={items} />
                        </div>
                        <button className=" px-4 py-2  mb-36 mx-auto text-lg font-semibold rounded-2xl bg-red-100 hover:bg-red-300" onClick={order} >Order Now</button>
                </div>
        )
}
export default Cart;