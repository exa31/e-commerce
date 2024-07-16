import proptypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Link, useLoaderData } from 'react-router-dom';
import { addCart } from '../../redux/defaultSlice';

Product.propTypes = {
    data: proptypes.array,
    title: proptypes.string,
    description: proptypes.string,
    price: proptypes.number,
    image: proptypes.string,
    rating: proptypes.object,
    rate: proptypes.number,
    count: proptypes.number,
    id: proptypes.number,
    handleFavorit: proptypes.func
}

export default function Product() {

    const data = useLoaderData()

    const dispatch = useDispatch()

    function handleCart() {
        return dispatch(addCart(data))
    }

    return (
        <div className="h-screen container m-auto my-14 bg-white ">
            <div className='grid grid-cols-2 h-full gap-10 px-6 justify-center items-center'>
                <div>
                    <img className='object-contain h-56 sm:h-auto' src={data.image} alt={data.title} />
                </div>
                <div>
                    <h1 className="text-lg sm:text-4xl font-bold" >{data.title}</h1>
                    <p className="font-semibold text-2xl py-4">Rp{data.price.toFixed(3)}</p>
                </div>
                <div className='col-span-2'>
                    <p >{data.description}</p>
                    <p className='font-semibold my-4'>⭐{data.rating.rate}</p>
                    <p className='my-4 font-semibold'>{data.rating.count} sold</p>
                </div>
                <div className='col-span-2'>
                    <Link to={`/shop`} className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 rounded-md font-bold" >Close</Link >
                    <button onClick={() => handleCart()} className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 rounded-md mx-10 font-bold" >Add to cart</button>
                </div>
            </div>
        </div >
    )
}