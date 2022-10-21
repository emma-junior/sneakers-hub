import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
    useEffect(() => {
        Aos.init({duration: 2000})
    },[])

  return (
    <section className='lg:h-[100vh] w-[90%] lg:w-[95%] mx-auto lg:flex items-center justify-center pt-24 lg:pt-2'>
        <div data-aos="fade-right" className='lg:w-[45%] '> 
            <h2 className='lg:text-5xl text-4xl font-bold text-black '>SHOP YOUR SNEAKERS AT THE BEST RATE</h2>
            <p className='lg:w-[420px] w-full my-4'>Dedicated since 1989 to giving you the best sneakers anywhere in the world at the best rate</p>
            <button className='bg-indigo-700 hover:bg-indigo-500 py-3 px-8 rounded-full text-white font-bold'>SHOP NOW</button>
        </div>
        <div data-aos="fade-left" className=''>
            {/* <img className='w-[400px] rounded-full h-[400px] bg-cover bg-center motion-reduce:animate-bounce' src='/assets/hero-pic.jpg' alt='' /> */}
            <img className='w-[450px]  animate-bounce' src='/assets/hero-shopping.png' alt='' />
        </div>
    </section>
  )
}

export default Hero