import React, { useState, useEffect } from 'react';
import './Carousel.css'; // Import your custom CSS for styling
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Carousel = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === images.length - 1 ? 0 : prevSlide + 1
      );
    }, 3000); // Slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="carousel-wrapper">
      <div className="relative carousel-container z-[-1]">
        <div className="flex justify-start justify-between p-6 items-start carousel-overlay">
          <div className="md:text-6xl font-bold text-xl mt-[10%]">
            <h2 className='text-gray-200'>Curiosity.</h2>
            <h2 className='font-semibold text-white'>Efficiency.</h2>
            <h2 className='text-gray-200'>Supremacy.</h2>
            {/* Add any stable text you want to overlay on the carousel */}
          </div>
          <div className='md:text-[30px] text-white mt-[10%]'>
            <div className='md:py-2 py-1'><FaTwitter /></div>
            <div className='md:py-2 py-1'><RiInstagramFill /></div>
            <div className='md:py-2 py-1'><FaFacebook /></div>
            <div className='md:py-2 py-1'><IoLogoWhatsapp /></div>
          </div>
        </div>
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />

          </div>
        ))}


      </div>

    </div>
  );
};

export default Carousel;
