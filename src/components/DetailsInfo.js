import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import cart from "../images/icon-cart.svg";
import { addToCart } from '../redux/actions';

const DetailsInfo = () => {
    const productDetails = useSelector((state) => state.currentItem);

    const dispatch = useDispatch()
  return (
    <div className=" mt-5">
      <h2 className="text-indigo-400 text-sm">SNEAKERS HUB</h2>
      <h2 className="font-bold text-3xl my-5">{productDetails.title}</h2>
      <p>{productDetails.description}</p>
      <div className="flex mt-2">
        <h2 className="mr-5 text-xl font-bold">${productDetails.price}</h2>
        <h2 className="text-xs text-orange-500 h-5 w-8 mt-1 bg-orange-200 rounded-md">
          <p className="font-bold pl-1">50%</p>
        </h2>
      </div>
      <h2 className="text-[#777] line-through mb-3">$250.00</h2>
      <div className="lg:flex block">
        <button
          onClick={() => dispatch(addToCart(productDetails.id))}
          className="bg-indigo-700 py-3 lg:pt-2 lg:px-12 text-white lg:h-10 rounded-lg flex w-full lg:w-52"
        >
          <div className="flex mx-auto lg:ml-0">
            <img
              className="h-4 mr-3 text-white mt-1 "
              src={cart}
              alt="cartIcon"
            />
            <p>Add to cart</p>
          </div>
        </button>
      </div>
    </div>
  );
}

export default DetailsInfo