import { useSelector } from "react-redux"
import CardHistory from "../../components/CardHis"

export default function History() {

    const data = useSelector((state) => state.defaultSlice.history)

    return (
        <div className=" bg-gray-300 h-full py-24 px-4">
            <h1 className="text-4xl font-bold text-center">History</h1>
            <div className="flex gap-14 flex-col my-6">
                {data.length === 0 && <h1 className="text-2xl font-bold text-center mt-10 col-span-5">Cart is Empty, <span className="text-red-600">Come on, Checkout your product</span></h1>}
                {data.map((item, index) => {
                    return (
                        <div data-aos="fade-left"
                            data-aos-anchor="#example-anchor"
                            data-aos-offset="500"
                            data-aos-delay={5 * index}
                            data-aos-duration="500" key={index} >
                            <CardHistory key={item._id} time={item.time} index={index} data={data} id={item._id} title={item.title} price={item.price} image={item.image} qty={item.qty} />
                        </div>
                    )
                })}

            </div>
        </div>
    )
}