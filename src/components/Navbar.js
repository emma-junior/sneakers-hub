import React, {useState, useEffect} from 'react'
import cart from '../images/icon-cart.svg'
import { useSelector } from 'react-redux';

import { Link } from "react-router-dom";

const Navbar = () => {
  const yourCart = useSelector((state) => state.cart);

  const [cartCount, setCartCount] = useState(0);
  //console.log(cart)
  useEffect(() => {
    let count = 0;
    yourCart.forEach((cart) => {
      count += cart.qty;
    });
    setCartCount(count);
  }, [yourCart, cartCount]);
  return (
    <div className="bg-[#222] text-white p-5 flex fixed w-full z-20">
      <Link to="/">
      <div className="flex lg:pl-7 lg:mr-10 mr-3">
          <h2 className="lg:text-xl font-extrabold">SNEAKERS</h2>
          <span className="font-extrabold text-indigo-700 text-2xl lg:text-4xl -mt-1 lg:-mt-2">
            HUB
          </span>
      </div>
      </Link>
      <div className="flex relative cursor-pointer">
      <Link to='/cart'>
        <img className="lg:w-10 w-8 " src={cart} alt="cart" />
        {cartCount > 0 && (
          <span className="bg-indigo-700 p-1 rounded-full text-xs h-8 w-8  pt-2 font-bold absolute -top-3 left-6 ">
            <h2 className="text-center">{cartCount}</h2>
          </span>
        )}
      </Link>
      </div>
    </div>
  );
}

export default Navbar