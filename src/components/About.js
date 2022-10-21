import React, {useEffect} from 'react'
import Aos from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='lg:flex lg:mx-32 mx-8 mt-28 mb-20'>
        <div data-aos="fade-right" className='lg:w-1/2 lg:mr-12 mt-12'>
            <h2 className='text-2xl font-bold mb-5'>BRINGING YOU QUALITY SNEAKERS ALWAYS.</h2>
            <p className='mb-2'>Located in almost every state in Nigeria, SNEAKERS HUB is committed to always delivering quality sneakers and also at an affordable price Nation wide.</p>
            <p>Sneakers hub is more than just Sneakers, Our aim is also to bring out the best in you by making you look confident and then be confident.</p>
        </div>
        <div data-aos="fade-left" className='lg:w-1/2 mt-3'>
            <img src='/assets/about-img.jpg' alt='' />
        </div>
    </div>
  )
}

export default About