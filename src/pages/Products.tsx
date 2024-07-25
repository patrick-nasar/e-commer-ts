import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../compoents/ProductCard";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


type Tproducts = {
  id: number,
  title: string,
  price: string,
  category: string,
  description: string,
  image: string
}

export default function Products() {

  const [products, setProducts] = useState<Tproducts[] | null>(null)
  const [sortType, setSortType] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setSortType(event.target.value as string);

    if (event.target.value === 'desc') {
      DescendingfetchData()
    }
    else {
      AscendingfetchData()
    }
  };

  const AscendingfetchData = async () => {
    await axios.get('https://fakestoreapi.com/products?sort=asc')
      .then(function (response) {
        // handle success
        setProducts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const DescendingfetchData = async () => {
    await axios.get('https://fakestoreapi.com/products?sort=desc')
      .then(function (response) {
        // handle success
        setProducts(response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  useEffect(() => {

    const fetchData = async () => {
      await axios.get('https://fakestoreapi.com/products')
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
    <div>
      <div className="px-3 md:px-12 space-y-12 py-12">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">All Products</h1>
          <Box sx={{ minWidth: 100 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortType}
                label="Sort"
                onChange={handleChange}
              >
                <MenuItem value={'asc'}>Ascending</MenuItem>
                <MenuItem value={'desc'}>Descending</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-stretch gap-x-4 gap-y-20">
          {products != null && products.map((prod) => (
            <ProductCard key={prod.id} id={prod.id} image={prod.image} title={prod.title} price={prod.price} />
          ))}
        </div>
      </div>
    </div>
  )
}
