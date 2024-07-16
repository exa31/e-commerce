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
        <Animated animationIn="fadeIn" animationInDelay={200 * index} animationOut="fadeOutRight" isVisible={true}>
            <div className="grid rounded-s-xl rounded-e-full  bg-white text-center grid-cols-3 gap-6 p-6 justify-center items-center">
                <div className='flex flex-col items-center gap-8'>
                    <img className="object-contain md:h-48 md:w-96 h-20 w-40" src={image} alt={title} />
                    <div className='flex gap-2 items-center'>
                        <h5 className='font-bold text-blue-500'>{qty}</h5>
                    </div>
                </div>
                <div>
                    <h3>{title}</h3>
                    <h5 className="font-bold">Rp{price.toFixed(3)}</h5>
                </div>
                <h5 className='text-center font-bold'>Rp{total.toFixed(3)}</h5>
                <h5 className='text-center col-span-3'>{time}</h5>
            </div >
        </Animated>
    )
}