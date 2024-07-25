export default function data() {
    const getData = async () => {
        try {
            const response = await fetch("https://expreessxmongo-db.vercel.app/products")
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }
    return getData()
}

export function getSingleData({ params }) {
    const getData = async () => {
        try {
            const response = await fetch(`https://expreessxmongo-db.vercel.app/product/${params.id}`)
            const data = await response.json()
            return data
        } catch (error) {
            console.log(error)
        }
    }
    return getData()
}