import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../api/productsApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import toast from "react-hot-toast";



const ProductDetails = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();
    const { data: product, isLoading, error } = useGetProductByIdQuery(parseInt(id || '0', 10));
    console.log(product)

    if (isLoading) return <div className=" min-h-screen w-full flex items-center justify-center">
        <p className=" text-xl ">Loading...</p>
    </div>;
    if (error) return <p className="pt-28 text-center">Error loading product details.</p>;

    const handleCart = () => {
        dispatch(addToCart(product))
        toast.success('Item added to cart!!!')
    };

    return (
        <div className="container mx-auto pt-28 px-4">
            <div className="flex mx-8 items-center flex-col lg:flex-row gap-8">

                <div className="flex-1 rounded-md shadow-lg bg-base-200 w-full  p-6">
                    <img
                        src={product?.image}
                        alt={product?.title}
                        className="w-full h-[300px] lg:h-[500px] mix-blend-multiply  "
                    />
                </div>


                <div className="flex-1 flex flex-col gap-4 pr-12">
                    <h1 className="md:text-3xl text-2xl lg:text-4xl font-bold text-slate-800">{product?.title}</h1>

                    <p className="text-base text-slate-800">{product?.description}</p>
                    <p className="text-2xl font-semibold text-green-600">${product?.price}</p>
                    <button
                        onClick={handleCart}
                        className="mt-4 py-2 px-6 bg-black text-white hover:bg-slate-900 transition-colors rounded-md"
                    >
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
};




export default ProductDetails;
