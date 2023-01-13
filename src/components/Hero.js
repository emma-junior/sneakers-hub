import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="lg:h-[100vh] w-[90%] lg:w-[90%] mx-auto lg:flex items-center justify-between pt-24 lg:pt-2">
      <div data-aos="slide-up" className="lg:w-[45%] ">
        <h2 className="lg:text-5xl text-4xl font-bold text-black ">
          SHOP YOUR SNEAKERS AT THE BEST RATE
        </h2>
        <p className="lg:w-[420px] w-full my-4">
          Dedicated since 1989 to giving you the best sneakers anywhere in the
          world at the best rate
        </p>
        <button className="bg-indigo-700 hover:bg-indigo-500 py-3 px-8 rounded-full text-white font-bold">
          SHOP NOW
        </button>
      </div>
      <div className="mt-5 lg:w-[45%] lg:mt-0 relative">
        {/* <img className='w-[450px]  animate-bounce' src='/assets/hero-shopping.png' alt='' /> */}
        <div
          data-aos="fade-right"
          className="w-[350px] h-[200px] absolute left-0 top-5 z-10"
        >
          <img
            className=" w-full max-w-full h-full object-cover "
            src="/assets/usama-akram-two.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down-left"
          className="w-[400px] h-[250px] absolute left-28 -top-36"
        >
          <img
            className="w-full max-w-full h-full  object-cover "
            src="/assets/usama-akram-one.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
