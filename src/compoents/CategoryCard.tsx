import { Link } from "react-router-dom";

type TCategoryCard = {
    image: string,
    title: string,
    keyI: number
}

export default function CategoryCard({ image, title, keyI }: TCategoryCard) {
    return (
        <div key={keyI} className="relative h-80 w-full flex" style={{ backgroundImage: `url(${image})`, backgroundSize: 'cover' }}>
            <Link to={`/Category/${title}`} className="group relative text-2xl font-medium w-full h-full hover:bg-purple-200 hover:bg-opacity-60 pl-6 pt-6 transform duration-300">
                <p className="group-hover:opacity-100 group-hover:scale-105 group-hover:translate-x-5 group-hover:translate-y-2 transform duration-300 capitalize">{title}</p>
                <p className="absolute bottom-10 opacity-0 underline text-2xl scale-0 group-hover:opacity-100 group-hover:scale-105 group-hover:translate-x-5 group-hover:-translate-y-2 transform duration-700">Shop now</p>
            </Link>
        </div>
    )
}
