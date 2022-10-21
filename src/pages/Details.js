import React from 'react'
import DetailsPics from '../components/DetailsPics'
import DetailsInfo from '../components/DetailsInfo'
import Navbar from '../components/Navbar';
// import { useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';


const Details = () => { 
  // const shop = useSelector((state) => state.currentItem);
  // const {slug} = useParams()

  // const singleSneaker = shop.find((item) => item.slug === slug);
  return (
    <div className="lg:bg-[#E5E5E5] h-[700px]">
      <div className='top-0'>
        <Navbar />
      </div>
      <div className='absolute top-28'>
        <div className="lg:p-10 p-1 lg:flex bg-white shadow-lg shadow-black-500/50 lg:w-4/5 w-5/5 py-5   px-8 lg:px-16 mx-auto">
            <div className="mt-1 lg:w-1/2">
            <DetailsPics />
            </div>
            <div className="lg:w-1/2 -mt-2 ">
            <DetailsInfo />
            </div>
        </div>
      </div> 
    </div>
  );
}

export default Details