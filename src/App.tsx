import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Categories from './pages/Categories'
import Products from './pages/Products'
import Product from './pages/Product'
import Cart from './pages/Cart'
import NavigationBar from './compoents/NavigationBar'
import CategoryProducts from './pages/CategoryProducts'
import Footer from './compoents/Footer'

function App() {

  return (
    <div className='relative'>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Categories' element={<Categories />} />
        <Route path='/Category/:CategoryName' element={<CategoryProducts />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Product/:ProcductId' element={<Product />} />
        <Route path='/Cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
