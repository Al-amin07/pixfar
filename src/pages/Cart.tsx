import { useSelector } from "react-redux";
import { RootState } from '../store/store'
import CartProduct from "../components/CartProduct";

const Cart = () => {
    const { items: products, totalPrice } = useSelector((state: RootState) => state.cart);

    return (
        <div className="max-w-7xl mx-auto pt-20 flex flex-col lg:flex-row gap-4 justify-between ">
            <div className=" flex-1 space-y-6">
                {
                    products?.map((product) => <CartProduct  key={product?.id} product={product} />)
                }
            </div>
            <div className="border rounded-lg p-6 space-y-3 w-[400px] min-h-[350px] flex flex-col justify-center  h-72 mx-auto">
                <h2 className=" text-lg font-medium">Sub Total : ${totalPrice.toFixed(2)}</h2>
                <h2 className=" text-slate-700 text-lg font-medium">Shipping Charge : $0</h2>
                <h2 className=" text-slate-700 text-lg font-medium">Tax : $0</h2>
                <h2 className=" text-slate-700 text-lg font-medium">Discount : $0</h2>
                <h2 className=" text-2xl font-bold">Total : ${totalPrice.toFixed(2)}</h2>
                <button className=" py-3 inline-block mt-8 w-full bg-cyan-600 text-white hover:bg-cyan-700 font-bold transition-colors duration-500">Check Out</button>
            </div>
        </div>
    );
};

export default Cart;