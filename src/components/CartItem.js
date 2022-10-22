import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import CartItemCard from './CartItemCard';

const CartItem = () => {
    const yourCart = useSelector((state) => state.cart);

    const [totalItem, setTotalItem] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    useEffect(() => {
        let items = 0;
        let amount = 0;
        yourCart.forEach((item) => {
            items += item.qty
            amount += item.qty * item.price
        })
        setTotalItem(items)
        setTotalAmount(amount)
    },[yourCart, totalItem, totalAmount, setTotalItem, setTotalAmount])

  return (
    <div>
        {yourCart.length < 1 && (
          <h2 className="font-meduim text-3xl flex h-screen w-full items-center justify-center">
            There are no items in cart
          </h2>
        )}
      {yourCart.length > 0 && <div className="lg:w-1/2 w-11/12 mx-auto bg-white shadow-lg shadow-slate-300 rounded-lg p-4 lg:p-8">
        <h2 className='text-center text-3xl font-medium my-5'>Your cart items</h2>
        {yourCart.map((cartItems) => {
            return (
              <div className='py-3'>
                <CartItemCard cartItems={cartItems} />
              </div>
            );
        })}
        <hr className='my-7' />
        <div className='flex w-full justify-between'>
          <p className='text-xl text-slate-600 font-normal'>Total</p>
          <p className='text-xl font-medium'>({totalItem} item)</p>
        </div>
        <div className='flex w-full justify-between my-2'>
          <p className='text-xl text-slate-600 font-normal'>Subtotal</p>
          <p className='text-xl font-bold'>${totalAmount}</p>
        </div>
        <button className='w-full h-10 bg-indigo-700 hover:bg-indigo-500 my-4 rounded-lg text-white font-medium'>Place order</button>
      </div>}
    </div>
  );
}

export default CartItem