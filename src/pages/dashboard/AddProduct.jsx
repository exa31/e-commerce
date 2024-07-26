import axios from "axios"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export default function AddProduct() {

    const [image, setImage] = useState('')
    const [submit, setSubmit] = useState(false)

    const navigate = useNavigate()

    function onSubmit(e) {
        e.preventDefault()
        setSubmit(!submit)
        const title = e.target.title.value
        const category = e.target.category.value
        const price = e.target.price.value
        const description = e.target.description.value
        const image = e.target.image.value
        axios.post(`https://expreessxmongo-db.vercel.app/products`,
            {
                title,
                category,
                price,
                description,
                image
            }
        ).then(() => {
            alert('Success')
            navigate('/dashboard/products')
        }).catch((err) => {
            console.log(err)
        }).finally(() => {
            setSubmit(!submit)
        })
    }

    return (
        <div className="bg-gray-300 py-14 px-3 mx-auto w-full sm:pl-80" >
            <h1 className="text-4xl font-bold text-center my-10">Edit</h1>
            <form onSubmit={onSubmit} action="">
                <div className="flex flex-col gap-3 my-6">
                    <label htmlFor="title">Title</label>
                    <input className="mx-auto block w-full my-5 p-3 rounded-ss-2xl rounded-ee-2xl " type="text" name="title" id="title" />
                </div>
                <div className="flex flex-col gap-3 my-6">
                    <label htmlFor="category">category</label>
                    <input className="mx-auto block w-full my-5 p-3 rounded-ss-2xl rounded-ee-2xl " type="text" name="category" id="category" />
                </div>
                <div className="flex flex-col gap-3 my-6">
                    <label htmlFor="price">Price</label>
                    <input className="mx-auto block w-full my-5 p-3 rounded-ss-2xl rounded-ee-2xl " type="number" name="price" id="price" />
                </div>
                <div className="flex flex-col gap-3 my-6">
                    <label htmlFor="description">Description</label>
                    <textarea className="mx-auto block w-full my-5 p-3 rounded-ss-2xl rounded-ee-2xl " name="description" id="description" rows="6"></textarea>
                </div>
                <div className="flex flex-col gap-3 my-6">
                    <label htmlFor="image">Image</label>
                    <input onChange={(e) => setImage(e.target.value)} className="w-full h-min block  my-5 p-3 rounded-ss-2xl rounded-ee-2xl " type="url" name="image" id="image" />
                    <img className="object-contain  h-48 w-64" src={image} alt="image preview" />
                </div>
                <div className="flex gap-8">
                    <Link to={'/dashboard'} className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 font-bold rounded-md my-3" type="button" >Back</Link>
                    <button className="bg-cyan-400 py-2 px-6 hover:bg-cyan-300 duration-200 font-bold rounded-md my-3 " disabled={submit} type="submit">Submit</button>
                </div>
            </form >
        </div >
    )
}


