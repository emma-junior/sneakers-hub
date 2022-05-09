import React from 'react'
import Navbar from '../components/Navbar'
import sneaker from '../images/homepic.webp'
import Products from '../components/Products';
import About from '../components/About';
import Footer from '../components/Footer';


const Home = () => {
  // console.log(shop)
  return (
    <div className="bg-[#F5F5F5] lg:h-full">
      <Navbar />
      <div className="">
        <img
          className="lg:h-[800px] h-[90vh] lg:w-[80%] w-[100%] mx-auto "
          src={sneaker}
          alt="sneaker"
        />
        <h2 className="text-center text-2xl lg:text-5xl font-bold text-indigo-700 lg:w-3/5 w-4/5 absolute top-60 lg:left-72 left-12">
          YOUR NO.1 STORE TO GET THE BEST SNEAKERS AT AN AFFORDABLE PRICE.
        </h2>
      </div>
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default Home