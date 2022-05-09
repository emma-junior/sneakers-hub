import React,{useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeAllItem } from '../redux/actions';

const CartSummary = ({setAlert}) => {
    const Cart = useSelector((state) => state.cart);
    const [totalItem, setTotalItem] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    // console.log(totalItem)
    useEffect(() => {
        let items = 0;
        let amount = 0;
        Cart.forEach((item) => {
            items += item.qty
            amount += item.qty * item.price
        })
        setTotalItem(items)
        setTotalAmount(amount)
    },[Cart, totalItem, totalAmount, setTotalItem, setTotalAmount])

    const dispatch = useDispatch();
  return (
    <div>
      {Cart.length > 0 && (
        <div className="bg-white shadow-lg shadow-black-500/50 py-9 lg:px-10 px-16 rounded-md">
          <h2 className="font-bold text-2xl mb-5">Cart summary</h2>
          <div className="flex mb-8">
            <h2 className="mr-5">Total: ({totalItem} item)</h2>
            <h2 className="font-bold">$ {totalAmount}</h2>
          </div>
          <button
            onClick={() => {
              setAlert(true)
              dispatch(removeAllItem())}}
            className="bg-indigo-700 py-3 px-5 text-white rounded-md"
          >
            Proceed to checkout
          </button>
        </div>
      )}
    </div>
  );
}

export default CartSummary