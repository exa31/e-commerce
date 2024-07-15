import proptypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { useDispatch, useSelector } from "react-redux"
import { addCart, removeFavoriteProduct } from "../redux/defaultSlice"
import { Animated } from "react-animated-css"
import { useState } from "react"

CardFav.propTypes = {
    data: proptypes.array,
    title: proptypes.string,
    description: proptypes.string,
    price: proptypes.number,
    image: proptypes.string,
    rating: proptypes.object,
    rate: proptypes.number,
    count: proptypes.number,
    id: proptypes.number,
    handleFavorit: proptypes.func,
    index: proptypes.number
}

export default function CardFav({ title, id, description, index, price, image, rating: { rate, count } }) {
    const favoriteProducts = useSelector((state) => state.defaultSlice.favoriteProducts)

    const [out, setOut] = useState(true)
    function handleFavorit(id) {
        setOut(!out)
        setTimeout(() =>
            dispatch(removeFavoriteProduct(id))
            , 700)

    }
    const dispatch = useDispatch()

    function handleCart(id) {
        const product = favoriteProducts.filter((item) => item.id === id)
        return dispatch(addCart(product[0]))
    }

    const favoriteProduct = favoriteProducts.some((item) => item.id === id)

    return (
        <Animated animationIn="fadeIn" animationInDelay={200 * index} animationOut="fadeOutDown" isVisible={out}>

            <div className="h-full rounded-lg p-4 bg-white flex flex-col">
                <img className="object-contain mx-auto h-48 w-96" src={image} alt={title} />
                <div className="flex justify-between">
                    <p className="font-semibold">Rp{price.toFixed(3)}</p>
                    <FontAwesomeIcon onClick={() => handleFavorit(id)} className={
                        favoriteProduct ? "text-red-500 hover:cursor-pointer" : "text-gray-500 hover:cursor-pointer"
                    } icon={faHeart} />
                </div>
                <h1 className="text-2xl font-bold" >{title}</h1>
                <p >{description}</p>
                <p>⭐{rate}</p>
                <p>{count} sold</p>
                <div className="mt-auto">
                    <button onClick={() => handleCart(id)} className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 font-bold rounded-md my-3 "><FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </Animated>
    )
}