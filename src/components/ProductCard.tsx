import { useDispatch } from "react-redux";
import { addToCart, CartItem } from "../features/cart/cartSlice";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
interface ProductProps {
    product: CartItem,
    ind: number;
}

const ProductCard = ({ product, ind } : ProductProps) => {
    const dispatch = useDispatch();
    const handleCart = () => {
        toast.success('Item Added to cart!!!')
        dispatch(addToCart(product))
    }
    // console.log(ind)
    return (
        // <Link to={`/products/${product?.id}`}  className="overflow-hidden group rounded bg-white text-slate-500 shadow-md shadow-slate-200">

        //     <figure className={` ${ind % 2 === 0 ? 'bg-base-200' : 'bg-slate-200'} p-4 `}>
        //         <img
        //             src={product?.image}
        //             alt="card image"
        //             className="aspect-video h-[300px] mix-blend-multiply group-hover:scale-105 transition-transform duration-500  w-full"
        //         />
        //     </figure>

        //     <div className="px-3 flex justify-between flex-col py-4">
        //         <header className="">
        //             <h3 className="text-lg line-clamp-2 font-medium text-slate-700">
        //                 {product?.title}
        //             </h3>
        //             <p className="text-xl font-bold  text-black "> ${product?.price}</p>
        //         </header>
        //             <button onClick={(e) => {
        //                 e.stopPropagation();
        //                 handleCart();
        //             }} className="py-2 px-5 mt-3 hover:bg-slate-900  bg-black text-white w-full">Add To Cart</button>
        //     </div>
        // </Link>
        <div className="overflow-hidden flex flex-col justify-between group rounded bg-white text-slate-500 shadow-md shadow-slate-200">
            <Link to={`/products/${product?.id}`} className="">
                <figure className={` ${ind % 2 === 0 ? 'bg-base-200' : 'bg-slate-200'} p-4 `}>
                    <img
                        src={product?.image}
                        alt="card image"
                        className="aspect-video h-[300px] mix-blend-multiply group-hover:scale-105 transition-transform duration-500  w-full"
                    />
                </figure>
                <div className="px-3 pt-4">
                    <header>
                        <h3 className="text-lg line-clamp-2 font-medium text-slate-700">
                            {product?.title}
                        </h3>
                        <p className="text-lg font-bold text-black ">${product?.price}</p>
                    </header>
                </div>
            </Link>

            <div className="px-3 pb-4 pt-2">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        handleCart();
                    }}
                    className="py-2 px-5  hover:bg-slate-900 bg-black text-white w-full"
                >
                    Add To Cart
                </button>
            </div>
        </div>

    );
};

export default ProductCard;
