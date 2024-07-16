import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import proptype from 'prop-types';
import { useDispatch } from 'react-redux';
import { addCart, reduceCart, removeCart } from '../redux/defaultSlice';
import { Animated } from "react-animated-css";
import { useState } from 'react';


CardCart.propTypes = {
    title: proptype.string,
    price: proptype.number,
    image: proptype.string,
    qty: proptype.number,
    data: proptype.array,
    id: proptype.number,
    index: proptype.number
}

export default function CardCart({ title, id, data, price, index, image, qty }) {
    const total = price * qty

    const dispatch = useDispatch()

    const [out, setOut] = useState(true)

    function handleAddCart(id) {
        const product = data.filter((item) => item.id === id)
        dispatch(addCart(product[0]))
    }

    function handleReduceCart(id) {
        const product = data.filter((item) => item.id === id)

        if (qty === 1) {
            setOut(false)
            setTimeout(() => {

                dispatch(reduceCart(product[0]))
            }, 700)
            return
        }

        dispatch(reduceCart(product[0]))
    }

    function handleRemoveCart(id) {
        const product = data.filter((item) => item.id === id)

        setOut(false)

        setTimeout(() => {

            dispatch(removeCart(product[0]))
        }, 700)
    }

    return (
        <>
            <Animated animationIn="fadeIn" animationInDelay={200 * index} animationOut="fadeOutRight" isVisible={out}>
                <div className="grid rounded-s-xl rounded-e-full  bg-white text-center grid-cols-3 gap-6 p-6 justify-center items-center">
                    <div className='flex flex-col items-center gap-8'>
                        <img className="object-contain md:h-48 md:w-96 h-20 w-40" src={image} alt={title} />
                        <div className='flex gap-2 items-center'>
                            <div className='gap-3 flex flex-col'>
                                <button onClick={() => handleAddCart(id)} className='py-1 px-2 font-bold hover:bg-slate-800 bg-black duration-200 transition-all text-white'>➕</button>
                                <button onClick={() => handleReduceCart(id)} className='py-1 px-2 font-bold hover:bg-slate-800 bg-black duration-200 transition-all text-white '>➖</button>
                            </div>
                            <h5 className='font-boldd'>{qty}</h5>
                            <button onClick={() => handleRemoveCart(id)} className='px-2 py-1 font-bold h-min hover:bg-slate-800 bg-black duration-200 transition-all text-white '><FontAwesomeIcon className='text-xs' icon={faTrash} /></button>
                        </div>
                    </div>
                    <div>
                        <h3>{title}</h3>
                        <h5 className="font-bold">Rp{price.toFixed(3)}</h5>
                    </div>
                    <h5 className='text-center font-bold'>Rp{total.toFixed(3)}</h5>
                </div >
            </Animated>
        </>
    )
}