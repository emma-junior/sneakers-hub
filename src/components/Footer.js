import React from 'react'
import {FaFacebookSquare, FaTwitter, FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="lg:px-32 px-8 py-10 lg:py-24 bg-[#000] text-white lg:flex">
      <div className="lg:w-1/2 lg:mr-32">
        <div className="flex mb-6">
          <h2 className="text-xl font-extrabold">SNEAKERS</h2>
          <span className="font-extrabold text-indigo-700 text-4xl -mt-2">
            HUB
          </span>
        </div>
        <div className="text-xl">
          <p>
            Sneakers Hub is an all in one stop to fulfill your sneakers need. We
            are a team that ensures you look good with our quality, comfortable
            and pocket friendly sneakers.
          </p>
          <p className="mb-3">We deliver every order after 24hrs.</p>
          <p>Copyright 2022. All Rights Reserved</p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <div className="flex lg:mt-24 mt-5">
          <h2 className="text-indigo-700 text-4xl lg:text-6xl pr-6  cursor-pointer">
            <FaFacebookSquare />
          </h2>
          <h2 className="text-indigo-700 text-4xl lg:text-6xl pr-6 cursor-pointer">
            <FaTwitter />
          </h2>
          <h2 className="text-indigo-700 text-4xl lg:text-6xl pr-6 cursor-pointer">
            <FaInstagram />
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer