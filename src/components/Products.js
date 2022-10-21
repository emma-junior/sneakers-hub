import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { FaSearch } from 'react-icons/fa'
import ProductCard from './ProductCard';
import Aos from "aos";
import "aos/dist/aos.css";

const Products = () => {
  const shop = useSelector((state) => state.product);
  const [input, setInput] = useState("");

  useEffect(() => {
    Aos.init({duration: 2000})
  },[])

  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 6;
  const pagesVisited = pageNumber * usersPerPage;

  const search =  shop.filter( (item) => item.title.toLowerCase().includes(input));

  const displayUsers = search
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((shopProduct) => <ProductCard shopProduct={shopProduct} />);

  const pageCount = Math.ceil(shop.length / usersPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div data-aos="fade-up">
      <div className="mt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold">Available Products</h2>
          <div className="h-1 my-2 bg-indigo-700 w-[90px] mx-auto"></div>
        </div>
        <div className="w-full justify-center my-16 flex ">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="lg:w-1/3 w-4/5 h-10 border-solid border-2 border-indigo-700 pl-3 "
          />
          <h2 className='bg-indigo-700 my-auto text-2xl p-2 text-white'><FaSearch /></h2>
        </div>
        <div className="mt-5 lg:grid lg:grid-cols-3 lg:gap-6 w-[300px] lg:w-[80%] mx-auto">
          {displayUsers}
        </div>
        <div className='flex w-full justify-center'>
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