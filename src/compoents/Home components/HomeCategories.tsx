import mansuit from '../../assets/man-suit.jpg'
import womandress from '../../assets/woman-dress.jpg'
import jewelery from '../../assets/jewelery-image.jpg'
import electronics from '../../assets/technology-image.jpg'
import CategoryCard from '../CategoryCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function HomeCategories() {

  const [Categories, setCategories] = useState<string[] | null>(null)

  useEffect(() => {

    const getCategories = async () => {
      await axios.get('https://fakestoreapi.com/products/categories')
        .then(function (response) {
          // handle success
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
    <>
      <h2 className="sr-only hidden">Categories</h2>
      <div className="flex flex-wrap lg:flex-nowrap justify-between items-center lg:space-x-5 space-y-5 lg:space-y-0 px-2 md:px-12 ">
        {Categories?.map((category, index) => (
          <div key={index} className='size-full'>
            {category === 'jewelery' && <CategoryCard image={jewelery} title={category} keyI={index} />}
            {category === 'electronics' && <CategoryCard image={electronics} title={category} keyI={index} />}
            {category === "men's clothing" && <CategoryCard image={mansuit} title={category} keyI={index} />}
            {category === "women's clothing" && <CategoryCard image={womandress} title={category} keyI={index} />}
          </div>
        ))}
      </div>
    </>
  )
}
