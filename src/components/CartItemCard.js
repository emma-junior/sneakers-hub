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
            {/* <div className="lg:m-5 m-7 " key={cartItems.id}>
              <div>
                <img
                  className="bg-cover h-72 w-[300px] lg:w-[300px] rounded-md p-2"
                  src={cartItems.images.imageOne}
                  alt=""
                ></img>
              </div>
              <div className=" w-[283px] px-2 p-4 shadow-lg shadow-black-500/50 mt-0 ml-2">
                <h2 className="font-bold pb-3">{cartItems.title}</h2>
                <h2 className="font-bold pb-7">$ {cartItems.price}</h2>
                <div className="flex">
                  <>
                    <label for="quantity" className="font-bold">
                      Qty:
                    </label>
                    <input
                      className="ml-2 border-solid border-2 border-[#666] rounded-full p-1"
                      type="number"
                      value={input}
                      id="quantity"
                      name="quantity"
                      onChange={(e) => {
                        dispatch(adjustQty(cartItems.id, e.target.value));
                        setInput(e.target.value)
                      }}
                      min="1"
                      max="5"
                    ></input>
                  </>
                  <button
                    className="text-2xl lg:ml-7 ml-28"
                    onClick={() => dispatch(removeFromCart(cartItems.id))}
                  >
                    <MdDelete />
                  </button>
                </div>
              </div>
            </div>      */}
    </section>
  );
}

export default CartItemCard