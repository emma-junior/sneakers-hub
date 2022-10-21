import React,{useState} from 'react'
import CartSummary from '../components/CartSummary';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import CartItemsMap from '../components/CartItemsMap';
import Alert from '../components/Alert';


const Cart = () => {
    const [alert, setAlert] = useState(false);

  return (
    <div className="bg-[#E5E5E5] h-full">
        <Navbar />
      <div className='lg:w-[90%] mx-auto'>
        <div className="pt-24">
          <CartItemsMap />
        </div>
        <div className="lg:absolute lg:right-10 lg:top-48 mx-3">
          <CartSummary alert={alert} setAlert={setAlert} />
        </div>
        <div className='absolute lg:top-52 lg:left-[500px] left-16 '>
          <Alert alert={alert} setAlert={setAlert} />
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>    
    </div>
  );
}

export default Cart