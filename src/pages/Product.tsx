import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { additems } from '../redux/DataSlice';
import { SnackbarComp } from '../compoents/snackbar';

type Tproduct = {
  category: string,
  id: number,
  image: string,
  price: number,
  rating: { count: number, rate: number },
  title: string,
  description: string
}

export default function Product() {
  const ProductId = useParams()
  const dispatch = useDispatch()
  const AllProducts = useSelector((state: any) => state.products)
  const [Product, setProduct] = useState<Tproduct | null>(null)

  //snackbar

  const [open, setOpen] = useState<boolean>(false)
  const [barType, setbarType] = useState<'error' | 'success' | 'info'>('success')
  const [massege, setmassege] = useState('')


  const handleAddtocart = () => {
    if (AllProducts.length === 0) {
      dispatch(additems(Product))
      setbarType('success')
      setmassege('Product has been added to the cart successfuly')
      setOpen(true)
    }
    else {
      let checkisfounded = false
      AllProducts.map((prod: any) => {
        if (prod.id === Product?.id) {
          checkisfounded = true
        }
      })
      if (!checkisfounded) {
        dispatch(additems(Product))
        setbarType('success')
        setmassege('Product has been added to the cart successfuly')
        setOpen(true)
      }
      else {
        setbarType('info')
        setmassege('Product is already in the cart')
        setOpen(true)
      }
    }

  }

  useEffect(() => {
    const getCategories = async () => {
      await axios.get(`https://fakestoreapi.com/products/${ProductId.ProcductId}`)
        .then(function (response) {
          // handle success
          setProduct(response.data)
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
      <div className='min-h-[80dvh] grid grid-cols-1 lg:grid-cols-2 justify-center items-center py-5 px-3'>
        <div className='basis-1/2 flex justify-center items-center  '>
          <img src={Product?.image} className='w-1/3 h-1/3 ' />
        </div>
        <div className='basis-1/2 space-y-7 pr-14 py-5'>
          <h1 className='text-lg md:text-2xl font-semibold'>{Product?.title}</h1>
          <p className='md:text-lg'><span className='font-medium'>Price: </span>€ {Product?.price}</p>
          <p className='md:text-lg'><span className='font-medium'>Category: </span> {Product?.category}</p>
          <p className='md:text-lg'><span className='font-medium'>Description: </span> {Product?.description}</p>
          <p className='md:text-lg'><span className='font-medium'>Rating: </span> {Product?.rating.rate}/5 Rated by {Product?.rating.count} users</p>
          <button
            className='group flex justify-center items-stretch space-x-3 md:text-xl px-5 py-3 bg-slate-800 text-white font-medium transform duration-500'
            onClick={handleAddtocart}
          >
            <div className='group-hover:translate-x-52 transform duration-1000'>
              <ShoppingCartOutlinedIcon />
            </div>
            <p className='group-hover:opacity-0 transform duration-200'>Add to cart</p>
          </button>
        </div>
      </div>
      <SnackbarComp open={open} setOpen={setOpen} barType={barType} massege={massege} />
    </>
  )
}
