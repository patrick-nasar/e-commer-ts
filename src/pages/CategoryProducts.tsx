import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ProductCard from "../compoents/ProductCard"



type Tproducts = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

export default function CategoryProducts() {

  const CategoryName = useParams()
  const [ProductsinCategory, setProductsinCategory] = useState<Tproducts[] | null>(null)


  useEffect(() => {

    const getCategories = async () => {
      await axios.get(`https://fakestoreapi.com/products/category/${CategoryName.CategoryName}`)
        .then(function (response) {
          // handle success
          console.log(response.data);
          setProductsinCategory(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    getCategories()
  }, [])

  return (
    <div>
      <div className="px-3 md:px-12 space-y-12 py-12">
        <h1 className="text-2xl font-semibold capitalize">{CategoryName.CategoryName} Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-4 gap-y-20">
          {ProductsinCategory != null && ProductsinCategory.map((prod) => (
            <ProductCard key={prod.id} id={prod.id} image={prod.image} title={prod.title} price={prod.price} />
          ))}
        </div>
      </div>
    </div>
  )
}
