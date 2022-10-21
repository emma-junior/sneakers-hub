import React from 'react'
import { addToCart, loadCurrentItem } from '../redux/actions';
import { Link } from "react-router-dom";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';

const ProductCard = ({shopProduct}) => {
    const dispatch = useDispatch();
  return (
    <div className='pb-6' key={shopProduct.id}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={`/details`}>
              <img
                onClick={() => dispatch(loadCurrentItem(shopProduct))}
                className="w-76 lg:w-80 cursor-pointer"
                src={shopProduct.images.imageOne}
                alt=""
              />
            </Link>
          </motion.div>
          <div className="py-5 bg-white lg:w-80 w-76 px-2 shadow-lg shadow-black-500/50">
            <h2 className="font-bold">{shopProduct.title}</h2>
            <h2 className="font-semibold pt-2">${shopProduct.price}</h2>
            <div className="my-3">
              <Link to="/details">
                <button
                  onClick={() => dispatch(loadCurrentItem(shopProduct))}
                  className="bg-[#000] text-white p-2 lg:p-1 rounded-md mr-2"
                >
                  View details
                </button>
              </Link>
              <button
                onClick={() => dispatch(addToCart(shopProduct.id))}
                className="bg-indigo-700 text-white p-2 lg:p-1 rounded-md"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
  )
}

export default ProductCard