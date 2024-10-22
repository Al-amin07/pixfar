
import { useSelector } from "react-redux";
import { IoCartSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { RootState } from "../store/store";
export default function NavbarAvatar() {

  const { items, totalItems, totalPrice } = useSelector((state: RootState) => state.cart);
  console.log(items, totalPrice, totalItems)


  return (
    <div className="shadow-lg fixed z-40 w-full bg-white  ">
      <div className="navbar max-w-7xl mx-auto ">
        <div className="flex-1">
          <Link to={'/'} className="text-black text-xl lg:text-3xl hover:scale-105 transition-transform duration-300">Wal<span className=" text-cyan-500 font-bold">Mart</span></Link>
        </div>
        <div className="flex-none space-x-3 md:space-x-6">

          <h2 className="text-lg md:text-2xl font-bold ">Total Price : ${totalPrice.toFixed(2)}</h2>
          <Link to={'/cart'} className="relative hover:scale-105 transition-transform duration-300 cursor-pointer dropdown dropdown-end">
            <IoCartSharp className="" size={38}>
            </IoCartSharp>
            <span className="absolute -top-2 -right-2 bg-red-600 w-6 h-6 text-white text-center font-bold rounded-full">{totalItems}</span>



          </Link>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}