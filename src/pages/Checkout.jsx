import { useDispatch, useSelector } from "react-redux"
import CardCart from "../components/CardCart"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { addHistory, clearCart } from "../redux/defaultSlice";
import { Link } from "react-router-dom";

export default function Checkout() {

    const data = useSelector((state) => state.defaultSlice.cart)
    const history = useSelector((state) => state.defaultSlice.history)
    const user = useSelector((state) => state.defaultSlice.login)


    const total = data.reduce((total, item) => {
        return total + item.price * item.qty
    }, 0)

    const dispatch = useDispatch()

    function handleChekout() {
        const products = [...history, ...data]
        const product = products.map((item) => {
            return { ...item, time: new Date().toLocaleString(), rating: { count: item.rating.count + item.qty } }
        })
        dispatch(addHistory(product))
        return dispatch(clearCart())
    }

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <div className=" bg-gray-300 h-full py-24 px-4">
            <h1 className="text-4xl font-bold text-center">Checkout</h1>
            {!user ? <h1 className="text-2xl text-red-500 text-center font-bold mt-10">Please login first</h1> : data.length === 0 ? <h1 className="text-2xl font-bold text-center mt-10 col-span-5">Cart is Empty, <span className="text-red-600">Come on, enter the items you need</span></h1> :

                <div className="flex gap-10 flex-col my-6 ">
                    {data.map((item, index) => {
                        return (
                            <div data-aos="fade-left"
                                data-aos-anchor="#example-anchor"
                                data-aos-offset="500"
                                data-aos-delay={5 * index}
                                data-aos-duration="500" key={item._id} >
                                <CardCart index={index} data={data} id={item._id} title={item.title} price={item.price} image={item.image} qty={item.qty} />
                            </div>
                        )
                    })}
                    {data.length !== 0 &&
                        <div className="bg-white font-bold text-xl flex px-10 rounded-e-full ">
                            <span className="me-auto">Total cart</span>
                            <div>
                                <h3 className=" text-end "> Rp{total.toFixed(3)}</h3>
                                <button className="bg-cyan-400 py-2 px-4 text-sm sm:text-2xl hover:bg-cyan-300 duration-200 font-bold rounded-md my-3 "><Link to={"/history"} onClick={() => handleChekout()}>Check out</Link></button>
                            </div>
                        </div>}
                </div>
            }
        </div>
    )
}