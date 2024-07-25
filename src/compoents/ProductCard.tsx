import { Link } from "react-router-dom"

type TProductCard = {
    id: number,
    image: string,
    title: string,
    price: string
}

export default function ProductCard({ id, image, title, price }: TProductCard) {
    return (
        <Link to={`/Product/${id}`} key={id} className="flex flex-col justify-between items-center space-y-4 ">
            <div className="h-full flex items-center justify-center">
                <img src={image} className="w-56 hover:scale-110 transform duration-1000" />
            </div>
            <div className="">
                <div className="space-y-2 max-w-72 text-ellipsis whitespace-nowrap overflow-x-hidden">
                    <h3 className="text-lg font-medium opacity-60 hover:text-purple-500 hover:opacity-100">{title}</h3>
                </div>
                <p className="text-lg font-medium opacity-60">€ {price}</p>
            </div>
        </Link>
    )
}
