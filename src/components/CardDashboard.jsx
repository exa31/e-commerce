import axios from "axios"
import proptypes from "prop-types"
import { Link } from "react-router-dom"
import { Animated } from 'react-animated-css'
import { useState } from "react"


CardDashboard.propTypes = {
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
    handleCart: proptypes.func,
    index: proptypes.number,
    filterData: proptypes.func
}

export default function CardDashboard({ filterData, index, title, _id, description, price, image, }) {

    const [visible, setVisible] = useState(true)

    function handleDelete() {
        setVisible(false)
        setTimeout(() => {
            filterData(_id)
        }, 700);
        axios.delete(`https://expreessxmongo-db.vercel.app/product/${_id}`)
            .then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
    }

    return (
        <div data-aos="fade-up" data-aos-delay={5 * index} data-aos-anchor-placement="top-bottom">
            <Animated animationIn="fadeIn" animationInDelay={50 * index} animationOut="fadeOut" isVisible={visible}>
                <div className=" rounded-lg p-2 bg-white flex h-card flex-col">
                    <img className="object-contain mx-auto h-48 w-64" src={image} alt={title} />
                    <div className="flex flex-col justify-between h-full">
                        <div>
                            <div className="flex justify-between">
                                <p className="font-semibold">Rp{price.toFixed(3)}</p>
                            </div>
                            <h1 className="text-2xl line-clamp-2 font-bold">{title}</h1>
                            <p className='line-clamp-3'>{description}</p>
                        </div>
                        <div className="mt-auto flex justify-between">
                            <Link to={`/dashboard/products/edit/${_id}`} className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 font-bold rounded-md my-3 " > Edit</Link >
                            <button onClick={handleDelete} className="bg-rose-500 py-2 px-6 hover:bg-rose-300 duration-200 font-bold rounded-md my-3 " >Delete</button>
                        </div>
                    </div>
                </div >
            </Animated>
        </div>
    )
}