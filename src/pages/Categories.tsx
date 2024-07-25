import mansuit from '../assets/man-suit.jpg'
import womandress from '../assets/woman-dress.jpg'
import technology from '../assets/technology-image.jpg'
import jewelery from '../assets/jewelery-image.jpg'
import { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from '../compoents/CategoryCard';

export default function Categories() {
  const [Categories, setCategories] = useState<string[] | null>(null)

  useEffect(() => {

    const getCategories = async () => {
      await axios.get('https://fakestoreapi.com/products/categories')
        .then(function (response) {
          // handle success
          console.log(response.data);
          setCategories(response.data)
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
    }
    getCategories()
  }, [])
  return (
    <div className='space-y-16 px-3 md:px-12 py-12'>
      <h1 className=' text-2xl font-semibold'>All Categories</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2  gap-10 md:px-12 ">
        {Categories?.map((category, index) => (
          <div key={index}>
            {category === 'electronics' && <CategoryCard image={technology} title={category} keyI={index} />}
            {category === 'jewelery' && <CategoryCard image={jewelery} title={category} keyI={index} />}
            {category === "men's clothing" && <CategoryCard image={mansuit} title={category} keyI={index} />}
            {category === "women's clothing" && <CategoryCard image={womandress} title={category} keyI={index} />}
          </div>
        ))}
      </div>
    </div>
  )
}
