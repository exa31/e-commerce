import { useLoaderData } from "react-router-dom"
import Card from "../../components/Card"
import { useDispatch, useSelector } from "react-redux"
import { addCart, addFavoriteProduct, removeFavoriteProduct } from "../../redux/defaultSlice"
import { Animated } from 'react-animated-css'
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner"



export default function Shop() {

    const [loading, setLoading] = useState(false)

    const dataDefault = useLoaderData()

    const [data, setData] = useState(dataDefault)

    const favoriteProducts = useSelector((state) => state.defaultSlice.favoriteProducts)

    const dispatch = useDispatch()

    function handleCart(id) {
        const product = data.filter((item) => item._id === id)
        return dispatch(addCart(product[0]))
    }

    function handleSearch(e) {
        setLoading(true)
        const value = e.target.value

        setTimeout(() => {
            if (value === "") {
                setData(dataDefault)
                setLoading(false)
                return
            }

            const filteredData = dataDefault.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase()))
            setLoading(false)
            setData(filteredData)
        }, 1000)
    }

    function handleFavorit(id) {
        const isExist = favoriteProducts.some((item) => item._id === id)
        if (isExist) {
            dispatch(removeFavoriteProduct(id))
            return
        } else {
            const product = data.filter((item) => item._id === id)
            dispatch(addFavoriteProduct(product[0]))
        }
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (

        <div className=" bg-gray-300 py-14 px-6">
            <h1 className="text-4xl font-bold text-center my-10">Happy Shopping</h1>
            <input className="mx-auto block w-4/6 my-5 p-3 rounded-ss-2xl rounded-ee-2xl " onChange={handleSearch} type="text" />
            {loading ? <div className="flex justify-center">
                <Oval
                    visible={true}
                    height="80"
                    width="80"
                    color="blue"
                    ariaLabel="oval-loading"
                    wrapperStyle={{}}
                />
            </div>
                :
                <div className="grid gap-7 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">


                    {data.map((item, index) => {
                        return (
                            <div data-aos="fade-up" data-aos-delay={5 * index} key={item._id} data-aos-anchor-placement="top-bottom">
                                <Animated animationIn="fadeIn" animationInDelay={50 * index} animationOut="fadeOut" isVisible={true}>
                                    <Card favoriteProducts={favoriteProducts} handleCart={handleCart} handleFavorit={handleFavorit} {...item} />
                                </Animated>
                            </div>
                        )
                    })}
                </div>
            }
        </div>

    )
}