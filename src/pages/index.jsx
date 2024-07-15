import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export default function LandingPage() {

    const user = useSelector((state) => state.defaultSlice.login)

    const navigate = useNavigate()

    return (
        <div className="h-screen bg-scroll bg-left-bottom bg-no-repeat bg-cover" style={{
            backgroundImage: `url('https://st.depositphotos.com/2097531/2144/i/450/depositphotos_21440313-stock-photo-attractive-man-dressed-casual-wearing.jpg')`
        }}>
            <div className="flex bg-black opacity-80 justify-center items-center h-full">
                <div className="text-center text-white">
                    <h1 className="text-5xl font-bold">Welcome to Exa</h1>
                    <p className="text-xl">The best place to shop</p>
                    <button onClick={() => navigate(user ? "/Shop" : "/login")} className="  py-3 px-6 bg-white opacity-85 rounded-md text-black font-bold my-12 hover:opacity-40 duration-200 ">Go shop</button>
                </div>
            </div>
        </div >

    )
}