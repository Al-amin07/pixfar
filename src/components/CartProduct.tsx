
import { RiDeleteBin6Fill } from "react-icons/ri";
import { FaMinus } from "react-icons/fa6";

import { FiPlus } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart, CartItem, removeFromCart, removeQuantity } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

  interface CartProductProps {
    product: CartItem;
  }

const CartProduct = ({ product}: CartProductProps) => {
    const dispatch = useDispatch();
    const handleIncrement = () => {
        dispatch(addToCart(product))
    }
    const handleDecrement = () => {

        dispatch(removeQuantity(product))
        if (product?.quantity === 1) {

            toast.error('Item removed from cart due to 0 quantity.')

        }
    }
    const handleDelete = () => {
        dispatch(removeFromCart(product?.id))
    }
    return (
        <div className=" flex justify-between items-center  hover:shadow-xl p-4 border rounded-lg ">
            <div className=" flex gap-2 md:gap-6 ">
                <div className=" rounded-lg p-4 bg-base-200 ">
                    <img src={product?.image} className="bg-transparent mix-blend-multiply h-24 w-24 object-cover" alt="" />
                </div>
                <div>
                    <h2 className=" text-sm md:text-lg font-medium">{product?.title}</h2>
                    <h2 className=" text-base md:text-xl font-bold">$ {product?.price}</h2>
                </div>
            </div>
            <div className=" flex gap-6 items-center">
                <div className=" flex  items-center gap-3">
                    <button onClick={handleDecrement} className="bg-base-200 p-2"><FaMinus className="  text-black" size={20} />
                    </button>
                    <h2>{product?.quantity}</h2>
                    <button onClick={handleIncrement} className="bg-base-200 p-2"><FiPlus className="  text-black" size={20} />
                    </button>

                </div>
                <button onClick={handleDelete} className="hover:bg-base-200 p-2"><RiDeleteBin6Fill className="  text-black" size={20} />
                </button>

            </div>
        </div>
    );
};

export default CartProduct;