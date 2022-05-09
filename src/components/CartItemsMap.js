import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from './CartItem'

const CartItemsMap = () => {
    const yourCart = useSelector((state) => state.cart);
  return (
    <div>
        {yourCart.length > 0 ? (
          <h2 className="my-5 font-bold text-3xl ml-7">Your cart Items</h2>
        ) : (
          <h2 className="my-5 font-bold text-3xl text-center">
            There are no items in cart
          </h2>
        )}
      <div className="lg:grid lg:grid-cols-2 lg:gap-1 lg:w-3/5 ">
        {yourCart.map((cartItems) => {
            return (
              <div>
                <CartItem cartItems={cartItems} />
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default CartItemsMap