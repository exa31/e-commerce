import CardFav from "../components/CardFav";
import { Animated } from "react-animated-css";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Favorite = () => {

    const favoriteProducts = useSelector(state => state.defaultSlice.favoriteProducts);

    const user = useSelector((state) => state.defaultSlice.login)

    useEffect(() => {
        AOS.init()
    }, [])

    return (
        <div className="bg-gray-300 text-center py-24 px-4">
            <h1 className="text-4xl font-bold">Favorite Products</h1>
            <div className={favoriteProducts.length !== 0 && "grid lg:grid-cols-3 sm:grid-cols-2 2xl:grid-cols-4 gap-10 my-6"}>
                {!user ? <h1 className="text-2xl text-red-500 text-center font-bold mt-10">Please login first</h1> : favoriteProducts.length === 0 ? <h1 className="text-2xl text-red-500 text-center font-bold mt-10">No favorite products, please add your favorite product</h1>
                    :
                    favoriteProducts.map((item, index) => {
                        return (
                            <div data-aos={"fade-up"} data-aos-delay={50 * index} key={item.id} data-aos-anchor-placement={"top-bottom"}>
                                <Animated key={item.id} index={index} animationIn="fadeIn" animationInDelay={100 * index} animationOut="fadeOut" isVisible={true}>
                                    <CardFav key={item.id}  {...item} />
                                </Animated>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}

export default Favorite;