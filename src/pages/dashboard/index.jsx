import { useLoaderData } from "react-router-dom"
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from "react";
import { Oval } from "react-loader-spinner"
import CardDashboard from "../../components/CardDashboard"
import axios from "axios";



export default function DashBoard() {

    const [loading, setLoading] = useState(false)

    const dataDefault = useLoaderData()

    const [data, setData] = useState(dataDefault)

    function filterData(id) {
        const filterData = data.filter(item => item._id !== id)
        return setData(filterData)
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

            axios.get(`https://expreessxmongo-db.vercel.app/products/search?q=${value}`)
                .then((res) => {
                    setLoading(false)
                    setData(res.data)
                }).catch((err) => {
                    console.log(err)
                }).finally(() => {
                    setLoading(false)
                })
            // const filteredData = dataDefault.filter((item) => item.title.toLowerCase().includes(value.toLowerCase()) || item.description.toLowerCase().includes(value.toLowerCase()))
            // setLoading(false)
            // setData(filteredData)
        }, 1000)
    }

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className=" bg-gray-300 py-14 px-3 mx-auto w-full sm:pl-80">
            <h1 className="text-4xl font-bold text-center my-10">Data products</h1>
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
                <div className="grid gap-7 lg:grid-cols-3 md:grid-cols-2 ">
                    {data.map((item, index) => {
                        return (
                            <CardDashboard key={item._id} index={index} filterData={filterData}  {...item} />
                        )
                    })}
                </div>
            }
        </div>
    )
}