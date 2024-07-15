import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Logout from "../pages/Logout";
import { useState } from "react";
import { clearAll, logout } from "../redux/defaultSlice";


export default function Navbar() {

    const user = useSelector((state) => state.defaultSlice.login)
    const cart = useSelector((state) => state.defaultSlice.cart)
    const favoriteProducts = useSelector((state) => state.defaultSlice.favoriteProducts)


    const qtyTotal = cart.reduce((total, item) => {
        return total + item.qty
    }, 0)

    function handleClick() {
        setIsLogout(!isLogout)
    }

    const dispatch = useDispatch()

    function handleLogout() {
        dispatch(logout())
        dispatch(clearAll())
        setIsLogout(!isLogout)
    }

    const [isLogout, setIsLogout] = useState(false)

    return (
        <>
            <div className="flex fixed top-0 z-10 w-full p-2 bg-black justify-between items-center text-center text-lg font-bold">
                <div>
                    <h1 className="text-white text-4xl">Exa</h1>
                </div>
                <div>
                    <NavLink className={({ isActive, isPending }) =>
                        isActive
                            ? "active m-4 duration-200 text-white hover:cursor-default"
                            : isPending
                                ? "active m-4 duration-200 text-white hover:cursor-default"
                                : "m-4 duration-200 text-white hover:opacity-70"
                    } to="/">Home</NavLink>
                    <NavLink className={({ isActive, isPending }) =>
                        isActive
                            ? "active m-4 duration-200 text-white hover:cursor-default"
                            : isPending
                                ? "active m-4 duration-200 text-white hover:cursor-default"
                                : "m-4 duration-200 text-white hover:opacity-70"
                    } to="/favorite">Favorite<span className=" m-1 text-xs align-top text-cyan-400 rounded-full text-center ">{favoriteProducts.length === 0 || favoriteProducts.length}</span></NavLink>
                    <NavLink className={({ isActive, isPending }) =>
                        isActive
                            ? "active m-4 duration-200 text-white hover:cursor-default"
                            : isPending
                                ? "active m-4 duration-200 text-white hover:cursor-default"
                                : "m-4 duration-200 text-white hover:opacity-70"
                    } to={user ? "/Shop" : "/login"}>Shop </NavLink>
                    <NavLink className={({ isActive, isPending }) =>
                        isActive
                            ? "active m-4 duration-200 text-white hover:cursor-default"
                            : isPending
                                ? "active m-4 duration-200 text-white hover:cursor-default"
                                : "m-4 duration-200 text-white hover:opacity-70"
                    } to="/check-out">Checkout<span className=" m-1 text-xs align-top text-cyan-400 rounded-full text-center ">{qtyTotal === 0 || qtyTotal}</span></NavLink>
                    <NavLink className={({ isActive, isPending }) =>
                        isActive
                            ? "active m-4 duration-200 text-white  hover:cursor-default" : isPending
                                ? "active m-4 duration-200 text-white hover:cursor-default"
                                : "m-4 duration-200 text-white hover:opacity-70"
                    } to={user ? "/history" : "/login"}>History</NavLink>
                </div>
                <div>
                    {user ?
                        <button onClick={handleClick} to="/logout" className="py-2 px-6 m-2 hover:bg-slate-800 bg-black duration-200 transition-all text-white border-2">Logout</button>
                        :
                        <>
                            <NavLink className="py-2 px-6 m-2 hover:bg-slate-800 bg-black duration-200 transition-all text-white border-2" to="/login">Login</NavLink>
                        </>
                    }
                </div>
            </div >
            {isLogout && <Logout handleLogout={handleLogout} handleClick={handleClick} />}
            <Outlet />
        </>
    )
}