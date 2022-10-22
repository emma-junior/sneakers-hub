import React, { useState } from 'react'
import { useDispatch } from "react-redux";
import {removeFromCart, adjustQty } from "../redux/actions";
import { MdDelete } from "react-icons/md";

const CartItemCard = ({cartItems}) => {
  const [input, setInput] = useState(cartItems.qty)          
  const dispatch = useDispatch();

  return (
    <section className='flex w-full justify-between'>
      <div className='flex'>
        <img className='lg:w-28 w-24 border-solid border-2 border-slate-300 rounded-md' src={cartItems.images.imageOne} alt='' />
        <div className='my-auto ml-5'>
          <h2 className='font-meduim text-base lg:text-2xl'>{cartItems.title}</h2>
          <div className='flex h-12 items-center'>
            <input className=" mr-2 border-solid border-2 border-[#666] rounded-full lg:p-1" type="number" value={input} id="quantity" name="quantity" min="1" max="5" onChange={(e) => {dispatch(adjustQty(cartItems.id, e.target.value)); setInput(e.target.value)}} />
            <p className='text-2xl cursor-pointer' onClick={() => dispatch(removeFromCart(cartItems.id))}><MdDelete /></p>
          </div>
        </div>
      </div>
      <p className='font-medium text-xl my-auto'>${cartItems.price}</p>
    </section>
  );
}

export default CartItemCard