import proptypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faHeart } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"



Card.propTypes = {
    data: proptypes.array,
    title: proptypes.string,
    description: proptypes.string,
    price: proptypes.number,
    image: proptypes.string,
    rating: proptypes.object,
    rate: proptypes.number,
    _id: proptypes.string,
    handleFavorit: proptypes.func,
    favoriteProducts: proptypes.array,
    handleCart: proptypes.func
}

export default function Card({ title, favoriteProducts, handleCart, handleFavorit, _id, description, price, image, rating: { rate } }) {

    const favoriteProduct = favoriteProducts.some((item) => item._id === _id)
    return (

        <div className=" rounded-lg p-2 bg-white flex h-card flex-col">
            <img className="object-contain mx-auto h-48 w-64" src={image} alt={title} />
            <div className="flex flex-col justify-between h-full">
                <div>
                    <div className="flex justify-between">
                        <p className="font-semibold">Rp{price.toFixed(3)}</p>
                        <FontAwesomeIcon onClick={() => handleFavorit(_id)} className={
                            favoriteProduct ? "text-red-500 hover:cursor-pointer" : "text-gray-500 hover:cursor-pointer"
                        } icon={faHeart} />
                    </div>
                    <h1 className="text-2xl line-clamp-2 font-bold">{title}</h1>
                    <p className='line-clamp-3'>{description}</p>
                    <p>⭐{rate}</p>
                </div>
                <div className="mt-auto flex justify-between">
                    <Link to={`/shop/${_id}`} className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 font-bold rounded-md my-3 " > Detail</Link >
                    <button onClick={() => handleCart(_id)} className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 font-bold rounded-md my-3 "><FontAwesomeIcon icon={faCartPlus} /></button>
                </div>
            </div>
        </div >
    )
}