import { Link } from "react-router-dom";

export default function ErrorPage() {

    return (
        <div className="bg-gray-300 h-full py-24 px-4">
            <h1 className="text-4xl font-bold text-center">Error 404</h1>
            <h1 className="text-2xl font-bold text-center mt-10 col-span-5">Page not found</h1>
            <div className="flex justify-center">

                <Link to={"/"} className="bg-cyan-400 py-2 px-6 mt-9 text-2xl hover:bg-cyan-300 duration-200 font-bold rounded-md my-3">Back to Home</Link>
            </div>
        </div>
    )
}