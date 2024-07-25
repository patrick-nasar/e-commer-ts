import { useDispatch, useSelector } from "react-redux"
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Tooltip } from "@mui/material";
import { addquantityProduct, deleteitem, removequantityProduct } from "../redux/DataSlice";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

type Tproduct = {
  category: string,
  id: number,
  image: string,
  price: number,
  rating: { count: number, rate: number },
  title: string,
  description: string,
  quantity: number,
}

export default function Cart() {
  const Products = useSelector((state: any) => state.products)
  const Quantity = useSelector((state: any) => state.quantity)
  const dispatch = useDispatch()

  const handleAddQuantity = (index: number) => {
    dispatch(addquantityProduct(index))
  }

  const handleRemoveQuantity = (index: number) => {
    dispatch(removequantityProduct(index))
  }

  const handleRemoveProduct = (id: number) => {
    let filteredArray: Tproduct[] = []
    Products.map((prod: any) => {
      if (prod.id != id) {
        filteredArray.push(prod)
      }
    })
    dispatch(deleteitem(filteredArray))
  }

  const Subtotal = (): number => {
    let sum = 0

    Products.map((prod: Tproduct) => {
      let prodSum = prod.quantity * prod.price
      sum += prodSum
    })

    return sum
  }

  const Delivery = (): number => {
    let sum = Quantity * 10

    return sum
  }


  return (
    <div className="px-2 md:px-12 space-y-12 py-12">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 justify-evenly items-start space-x-5 '>
        {Products.length != 0 ?
          <div className='col-span-2 flex justify-start items-center '>
            <table>
              <thead>
                <tr className="text-xl text-left font-bold">
                  <th className="px-2 md:px-4 py-2 bg-slate-200"></th>
                  <th className="px-2 md:px-4 py-2 bg-slate-200 ">Product</th>
                  <th className="px-2 md:px-4 py-2 bg-slate-200 ">Price</th>
                  <th className="px-2 md:px-4 py-2 bg-slate-200">Quantity</th>
                  <th className="py-2 bg-slate-200"></th>
                </tr>
              </thead>
              <tbody className="divide-y-2">
                {Products.map((product: Tproduct, index: number) => (
                  <tr key={product.id} className="">
                    <td className="py-7"><img src={product.image} className="w-24" /></td>
                    <td className="px-2 md:px-4 py-7 text-ellipsis overflow-x-hidden max-w-80">{product.title}</td>
                    <td className="px-2 md:px-4 py-7">€ {(product.price * product.quantity).toFixed(2)}</td>
                    <td className="px-2 md:px-4 py-7">
                      <div className="flex justify-center items-center border divide-x">
                        <button
                          onClick={() => {
                            if (product.quantity === 1) {

                            } else {
                              handleRemoveQuantity(index)
                            }
                          }}
                          className="p-1 w-full h-full hover:bg-slate-800 hover:text-white transform duration-500"><RemoveIcon /></button>
                        <p className="px-2 py-1">{product.quantity}</p>
                        <button
                          onClick={() => {
                            handleAddQuantity(index)
                          }}
                          className="p-1 w-full h-full hover:bg-slate-800 hover:text-white transform duration-500"><AddIcon /></button>
                      </div>
                    </td>
                    <td className="px-1 py-7">
                      <button onClick={() => handleRemoveProduct(product.id)}>
                        <Tooltip title='Remove Product' placement="top">
                          <RemoveIcon color="error" className="hover:bg-slate-300 rounded-full" />
                        </Tooltip>
                      </button>
                    </td>
                  </tr>
                ))
                }
              </tbody>
            </table>
          </div>
          :
          <h3 className="text-xl font-medium">No items in the cart yet</h3>
        }

        <div className='sticky top-24 space-y-7 px-5 py-4 border bg-slate-200'>
          <h2 className='md:text-xl font-semibold'>Total Cart</h2>
          <div className="grid grid-cols-2 space-x-10 text-slate-600 font-medium ">
            <p>Subtotal</p>
            <p>€ {Subtotal().toFixed(2)}</p>
          </div>
          <div className="grid grid-cols-2 space-x-10 text-slate-600 font-medium ">
            <div className="flex  justify-start items-end space-x-2">
              <p>
                Delivery
              </p>
              <Tooltip title='For every unique product € 10' placement="top">
                <InfoOutlinedIcon fontSize="small" />
              </Tooltip>
            </div>
            <p>€ {Delivery()}</p>
          </div>
          <div className="grid grid-cols-2 space-x-10 text-slate-600 font-medium ">
            <p>Total</p>
            <p>€ {parseFloat(Subtotal().toFixed(2)) + Delivery()}</p>
          </div>

          <button className="w-full bg-slate-800 text-white py-5 text-xl font-semibold">Checkout</button>
        </div>
      </div >
    </div >
  )
}
