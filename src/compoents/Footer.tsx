import logo from '../assets/pn white.svg'


export default function Footer() {


    return (
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-5 p-2 bg-slate-800 text-white">
            <div className="flex justify-center items-center">
                <img src={logo} className='w-28 h-2w-28'/>
            </div>
            <div className="space-y-5 py-4">
                <h3 className="text-xl font-semibold underline">Help</h3>
                <div className="space-y-3 text-lg">
                    <a className='block cursor-cell'>Shipping</a>
                    <a className='block cursor-cell'>Returns</a>
                    <a className='block cursor-cell'>Where is my order !?</a>
                </div>
            </div>
            <div className="space-y-5 py-4">
                <h3 className="text-xl font-semibold underline">Get in touch</h3>
                <div className="space-y-3 text-lg">
                    <a href='mailto:patriknasar@gmail.com' className='block cursor-pointer'>E-mail :)</a>
                    <a className='block cursor-cell'>Phone number</a>
                    <a className='block cursor-cell'>Address</a>
                </div>
            </div>
            <div className="space-y-5 py-4">
                <h3 className="text-xl font-semibold underline">Social media</h3>
                <div className="space-y-3 text-lg">
                    <a className='block cursor-cell'>Facebook</a>
                    <a className='block cursor-cell'>Instgram</a>
                    <a className='block cursor-cell'>X</a>
                </div>
            </div>
        </div>
    )
}
