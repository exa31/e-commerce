import proptype from 'prop-types';
import { Animated } from "react-animated-css";


CardHistory.propTypes = {
    title: proptype.string,
    price: proptype.number,
    image: proptype.string,
    qty: proptype.number,
    data: proptype.array,
    id: proptype.number,
    index: proptype.number,
    time: proptype.string
}

export default function CardHistory({ title, price, index, image, qty, time }) {

    const total = price * qty

    console.log(time)
    return (
        <Animated animationIn="fadeIn" animationInDelay={200 * index} isVisible={true}>
            <div className="grid rounded-s-xl rounded-e-full  bg-white text-center grid-cols-5 gap-6 p-6 justify-center items-center">
                <h3 className='font-bold text-xl'>Image</h3>
                <h3 className='font-bold text-xl'>Title</h3>
                <h3 className='font-bold text-xl'>Price</h3>
                <h3 className='font-bold text-xl'>Qty</h3>
                <h3 className='font-bold text-xl'>Total</h3>
                <img className="object-contain h-48 w-96" src={image} alt={title} />
                <h3>{title}</h3>
                <h5 className="font-bold">Rp{price}</h5>
                <h5 className='font-boldd'>{qty}</h5>
                <h5 className='text-center'>Rp{total}</h5>
                <h5 className='text-center'>{time}</h5>
            </div >

        </Animated>
    )
}