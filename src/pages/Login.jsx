import { useDispatch } from "react-redux"
import { login } from "../redux/defaultSlice"
import { useEffect, useState } from "react"

export default function Login() {

    const dispatch = useDispatch()


    const [users, setUsers] = useState([])

    function handlerSubmit(e) {
        e.preventDefault()
        if (e.target.username.value === "" || e.target.password.value === "") {
            return alert("Username or Password is empty")
        }
        const user = users.map((item) => item.username)
        const password = users.map((item) => [item.password])

        console.log(user)

        user.push("eka")
        password.push("eka")

        const validUser = user.some((item) => item === e.target.username.value)
        const validPassword = password.some((item) => item === e.target.password.value)


        if (!validUser || !validPassword) {
            return alert("Username or Password is wrong")
        }

        if (validUser && validPassword) {
            alert("Login Success")
            dispatch(login())
            history.back()
        }
    }


    useEffect(() => {
        const getDatas = async () => {
            try {
                const res = await fetch('https://fakestoreapi.com/users')
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error)
            }
        }
        getDatas().then(data => setUsers(data)).catch(err => console.log(err))
    }, [])



    return (
        <div className="h-screen bg-scroll pt-36 p-2 bg-no-repeat bg-cover" style={{
            backgroundImage: `url('https://t4.ftcdn.net/jpg/03/29/57/15/360_F_329571572_i4g25KqbxarqLeyhJdHjXbYsnXCrVzy4.jpg')`
        }}>
            <form onSubmit={handlerSubmit}>
                <div className="flex text-white md:w-3/6 mx-auto flex-col rounded-2xl backdrop-blur-2xl items-center border border-slate-600 justify-center">
                    <h1 className="text-4xl font-bold text-center my-10">Login</h1>
                    <div className="flex flex-col w-full px-16 items-center justify-center">
                        <label className="py-3 w-full text-start" htmlFor="username">Username</label>
                        <input className="border w-full p-1 bg-slate-800 " type="username" name="username" id="username" />
                    </div>
                    <div className="flex flex-col w-full px-16 items-center justify-center">
                        <label className="py-3 w-full text-start" htmlFor="password">Password</label>
                        <input className="border w-full p-1 bg-slate-800" type="password" name="password" id="password" />
                    </div>
                    <button className="py-2 px-6 m-2 hover:bg-slate-800 bg-black duration-200 transition-all text-white border-2" type="submit">Login</button>
                </div>
            </form>
        </div >
    )
}