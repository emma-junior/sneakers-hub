import React,{useState} from 'react'
import { useSelector } from "react-redux";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";



const DetailsPics = () => {
    const productDetails = useSelector((state) => state.currentItem);
    const images = [
      productDetails.images.imageOne,
      productDetails.images.imageTwo,
      productDetails.images.imageThree,
      productDetails.images.imageFour,
    ];
    const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className=" relative ">
      {/* for mobile view */}
      <div className="lg:hidden w-76 block">
        <img
          className="lg:rounded-lg"
          src={images[currentImage]}
          alt="currentImage"
        />
      </div>
      <p
        onClick={() => {
          currentImage < images.length - 1 && setCurrentImage(currentImage + 1);
        }}
        className="absolute top-32 left-[245px] lg:top-28 lg:left-56 rounded-full md:top-72 md:left-[650px] block lg:hidden"
      >
        <h2 className="text-3xl text-white">
          <BsFillArrowRightCircleFill />
        </h2>
      </p>
      <p
        onClick={() => {
          currentImage > 0 && setCurrentImage(currentImage - 1);
        }}
        className="absolute top-32 left-3 rounded-full block md:top-72 md:left-7 md:p-2 lg:hidden"
      >
        <h2 className="text-3xl text-white">
          <BsFillArrowLeftCircleFill />
        </h2>
      </p>

      {/* for laptop view */}
      <div className=" hidden lg:block">
        <img
          className="lg:rounded-lg lg:h-72 lg:w-80"
          src={images[currentImage]}
          alt="currentImage"
        />
      </div>
      <div className="lg:flex ml-2 mt-4 hidden ">
        {currentImage === 0 ? (
          <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[60px] mr-4">
            <img
              className="w-[60px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(0)}
              src={images[0]}
              alt="imageOne"
            />
          </div>
        ) : (
          <img
            className="w-[60px] mr-4 rounded-lg cursor-pointer "
            onClick={() => setCurrentImage(0)}
            src={images[0]}
            alt="imageOne"
          />
        )}
        {currentImage === 1 ? (
          <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[60px] mr-4">
            <img
              className="w-[60px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(1)}
              src={images[1]}
              alt="imageTwo"
            />
          </div>
        ) : (
          <img
            className="w-[60px] mr-4 rounded-lg cursor-pointer "
            onClick={() => setCurrentImage(1)}
            src={images[1]}
            alt="imageTwo"
          />
        )}
        {currentImage === 2 ? (
          <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[60px] mr-4">
            <img
              className="w-[60px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(2)}
              src={images[2]}
              alt="imageThree"
            />
          </div>
        ) : (
          <img
            className="w-[60px] mr-4 rounded-lg cursor-pointer "
            onClick={() => setCurrentImage(2)}
            src={images[2]}
            alt="imageThree"
          />
        )}
        {currentImage === 3 ? (
          <div className="bg-indigo-500 opacity-25 relative z-10 rounded-lg w-[60px] mr-4">
            <img
              className="w-[60px] mr-4 rounded-lg cursor-pointer "
              onClick={() => setCurrentImage(3)}
              src={images[3]}
              alt="imageFour"
            />
          </div>
        ) : (
          <img
            className="w-[60px] mr-4 rounded-lg cursor-pointer "
            onClick={() => setCurrentImage(3)}
            src={images[3]}
            alt="imageFour"
          />
        )}
      </div>
    </div>
  );
}

export default DetailsPics