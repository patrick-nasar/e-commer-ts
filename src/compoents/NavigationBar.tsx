import { Link } from 'react-router-dom'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PNlogo from '../assets/pn black.svg'
import { Badge } from '@mui/material';
import { useSelector } from 'react-redux';

export default function NavigationBar() {
  const ProductsQuantity = useSelector((state: any) => state.quantity)

    return (
        <nav className='sticky top-0 left-0 flex justify-between items-center h-12 md:h-[70px] w-full md:text-lg px-3 py-3 md:px-12 md:py-8 shadow-md bg-white z-20'>
            <Link to='/' className='basis-1/3 flex justify-start items-center tracking-wider'>
                <img src={PNlogo} className='w-12 h-12' />
                 <p className='sr-only'>Patrick Nassar Store</p> 
            </Link>
            <ul className='basis-1/3 flex justify-center items-center space-x-5'>
                <li><Link to="/" className="">Home</Link></li>
                <li><Link to="/Categories" className="">Categories</Link></li>
                <li><Link to="/Products" className="">Products</Link></li>
            </ul>
            <Link to="/Cart" className="basis-1/3 flex justify-end items-center">
                <Badge badgeContent={ProductsQuantity} color="secondary">
                    <ShoppingCartOutlinedIcon />
                </Badge>
            </Link>
        </nav>
    )
}
