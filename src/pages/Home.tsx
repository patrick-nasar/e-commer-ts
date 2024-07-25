import Banner from '../compoents/Home components/Banner'
import HomeProducts from '../compoents/Home components/HomeProducts'
import HomeCategories from '../compoents/Home components/HomeCategories'

export default function Home() {
  return (
    <div className='w-full space-y-20'>
      <Banner />
      <HomeCategories />
      <HomeProducts />
    </div>
  )
}
