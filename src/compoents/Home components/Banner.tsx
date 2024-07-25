import { useEffect, useState } from "react"
import bannerFast from '../../assets/bannerFast.jpg'
import bannerSafe from '../../assets/bannerSafe.jpg'
import bannerEase from '../../assets/bannerEase.jpg'
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

export default function Banner() {
  const [showBanner, setshowBanner] = useState(0)

  const handleClickBack = () => {
    setshowBanner((prev) => (prev === 0 ? 2 : prev - 1))
  }

  const handleClickNext = () => {
    setshowBanner((prev) => (prev === 2 ? 0 : prev + 1))
  }


  useEffect(() => {
    const interval = setInterval(() => {
      handleClickNext()
    }, 3000);

    return () => clearInterval(interval);
  }, [])


  return (
    <>
      <div className='relative min-w-full min-h-[30vh] lg:min-h-[90vh] flex justify-start items-center  overflow-hidden'>
        <button className="absolute flex justify-center items-center top-auto left-2 md:left-5 z-10 rounded-full bg-slate-500 text-white opacity-35 hover:opacity-100 transform duration-150 p-1 md:p-2"
          onClick={handleClickBack}>
          <ArrowBackIosNewOutlinedIcon fontSize="small" />
          <p className="sr-only">Back</p>
        </button>

        <div className={`absolute w-screen min-h-[30vh] lg:h-[99vh] transform duration-500 ${showBanner === 0 ? '' : 'opacity-0'}`}>
          <img src={bannerFast} className="w-screen h-52 md:h-[99vh]" />
        </div>

        <div className={`absolute w-screen h-52 md:h-[99vh] transform duration-500 ${showBanner === 1 ? '' : 'opacity-0'} `}>
          <img src={bannerSafe} className="w-screen h-52 md:h-[99vh]" />
        </div>

        <div className={`absolute w-screen h-52 md:h-[99vh] transform duration-500 ${showBanner === 2 ? '' : 'opacity-0'}`}>
          <img src={bannerEase} className="w-screen h-52 md:h-[99vh]" />
        </div>

        <div className="absolute w-full flex justify-center bottom-7 space-x-3">
          <button className={`h-[5px] w-5 bg-white rounded transform duration-500 ${showBanner === 0 ? 'scale-125' : 'opacity-50'}`} onClick={() => setshowBanner(0)} />
          <button className={`h-[5px] w-5 bg-white rounded transform duration-500 ${showBanner === 1 ? 'scale-125' : 'opacity-50'}`} onClick={() => setshowBanner(1)} />
          <button className={`h-[5px] w-5 bg-white rounded transform duration-500 ${showBanner === 2 ? 'scale-125' : 'opacity-50'}`} onClick={() => setshowBanner(2)} />
        </div>

        <button className="absolute flex justify-center items-center top-auto right-2 md:right-5 z-10 rounded-full bg-slate-500 text-white opacity-35 hover:opacity-100 transform duration-150 p-1 md:p-2 rotate-180"
          onClick={handleClickNext}>
          <ArrowBackIosNewOutlinedIcon fontSize="small" />
          <p className="sr-only">Next</p>
        </button>
      </div>
    </>
  )
}
