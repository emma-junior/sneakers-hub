import React from 'react'
import Navbar from '../components/Navbar'
import Products from '../components/Products';
import About from '../components/About';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


const Home = () => {
  // console.log(shop)
  return (
    <div className="bg-[#F5F5F5] lg:h-full">
      <Navbar />
      <Hero />
      <Products />
      <About />
      <Footer />
    </div>
  );
}

export default Home