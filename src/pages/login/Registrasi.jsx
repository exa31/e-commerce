import { useDispatch } from "react-redux"
import { addUser } from "../../redux/defaultSlice"
import { Link, useNavigate } from "react-router-dom"

export default function Registrasi() {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    function handlerSubmit(e) {
        e.preventDefault()
        if (e.target.username.value === "" || e.target.password.value === "") {
            return alert("Username or Password is empty")
        }

        if (e.target.password.value !== e.target.Repassword.value) {
            e.target.password.value = ""
            e.target.Repassword.value = ""
            return alert("Password is not match")
        }


        dispatch(addUser({ username: e.target.username.value, password: e.target.password.value }))
        navigate("/login")
        alert("Registrasi Success")

    }

    return (
        <div className="h-screen bg-scroll pt-36 p-2 bg-no-repeat bg-cover" style={{
            backgroundImage: `url('https://t4.ftcdn.net/jpg/03/29/57/15/360_F_329571572_i4g25KqbxarqLeyhJdHjXbYsnXCrVzy4.jpg')`
        }}>
            <form onSubmit={handlerSubmit}>
                <div className="flex text-white md:w-3/6 mx-auto flex-col rounded-2xl backdrop-blur-2xl items-center border border-slate-600 justify-center">
                    <h1 className="text-4xl font-bold text-center my-10">Registrasi</h1>
                    <div className="flex flex-col w-full px-16 items-center justify-center">
                        <label className="py-3 w-full text-start" htmlFor="username">Username</label>
                        <input className="border w-full p-1 bg-slate-800 " type="username" name="username" id="username" />
                    </div>
                    <div className="flex flex-col w-full px-16 items-center justify-center">
                        <label className="py-3 w-full text-start" htmlFor="password">Password</label>
                        <input className="border w-full p-1 bg-slate-800" type="password" name="password" id="password" />
                    </div>
                    <div className="flex flex-col w-full px-16 items-center justify-center">
                        <label className="py-3 w-full text-start" htmlFor="Repassword">Re-enter Password</label>
                        <input className="border w-full p-1 bg-slate-800" type="password" name="Repassword" id="Repassword" />
                    </div>
                    <div className="flex justify-between">
                        <Link to={"/login"} className="py-2 px-6 m-2 hover:bg-slate-800 bg-black duration-200 transition-all text-white border-2">Back</Link>
                        <button className="py-2 px-6 m-2 hover:bg-slate-800 bg-black duration-200 transition-all text-white border-2" type="submit">Create Account</button>
                    </div>
                </div>
            </form>
        </div >
    )
}