import axios from "axios"
import { useEffect, useState } from "react"
import ProductCard from "../ProductCard"
import { Link } from "react-router-dom"

type Tproducts = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

export default function HomeProducts() {
  const [products, setProducts] = useState<Tproducts[] | null>(null)
  useEffect(() => {

    const fetchData = async () => {
      await axios.get('https://fakestoreapi.com/products?limit=3')
        .then(function (response) {
          // handle success
          setProducts(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }

    fetchData()
  }, [])

  return (
    <div className="px-12 space-y-12">
      <h2 className="text-4xl font-semibold">PRODUCT OVERVIEW</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-4 gap-y-20">
        {products != null && products.map((prod) => (
          <ProductCard key={prod.id} id={prod.id} image={prod.image} title={prod.title} price={prod.price} />
        ))}
      </div>
      <div className="w-full text-center pb-12">
        <Link to='/Products' className="text-center px-5 py-3 bg-slate-800 text-white">View more</Link>
      </div>
    </div>
  )
}
