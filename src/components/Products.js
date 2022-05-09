import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, loadCurrentItem } from '../redux/actions';
import { Link } from "react-router-dom";
import ReactPaginate from 'react-paginate';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa'

const Products = () => {
  const shop = useSelector((state) => state.product);
  const [input, setInput] = useState("");

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const search =  shop.filter( (item) => item.title.toLowerCase().includes(input));

  const displayUsers = search
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((shopProduct) => {
      return (
        <div className='pb-6' key={shopProduct.id}>
          <motion.div whileHover={{ scale: 1.1 }}>
            <Link to={`/details`}>
              <img
                onClick={() => dispatch(loadCurrentItem(shopProduct))}
                className="w-72 cursor-pointer"
                src={shopProduct.images.imageOne}
                alt=""
              />
            </Link>
          </motion.div>
          <div className="py-5 bg-white w-72 px-2 shadow-lg shadow-black-500/50">
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
      );
    });
  const pageCount = Math.ceil(shop.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const dispatch = useDispatch();
  return (
    <div>
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold">Available Products</h2>
          <div className="h-1 my-2 bg-indigo-700 w-[90px] mx-auto"></div>
        </div>
        <div className="lg:ml-[450px] ml-7 my-16 flex ">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="lg:w-1/3 w-4/5 h-10 border-solid border-2 border-indigo-700 pl-3 "
          />
          <h2 className='bg-indigo-700 my-auto text-2xl p-2 text-white'><FaSearch /></h2>
        </div>
        <div className="mt-5 lg:grid lg:grid-cols-3 lg:gap-6 w-[80%] mx-auto">
          {displayUsers}
        </div>
        <div className='ml-12 lg:ml-24'>
          <ReactPaginate
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassname={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </div>
      </div>
    </div>
  );
}

export default Products