import React, { useRef, useState } from "react";
import ArrowRight from "../../assets/right.png";
import ArrowLeft from "../../assets/left.png";
import {
  DSC02061,
  DSC02067,
  DSC02138,
  DSC02143,
  DSC02130,
  DSC02132,
  DSC02120,
  DSC02126,
  DSC02165,
  DSC02171,
  DSC02082,
  DSC02085,
  DSC02179,
  DSC02177,
  DSC02102,
  DSC02104,
} from "../../assets/index.jsx";
import { Link } from "react-router-dom";

const Section2 = () => {
  const scrollRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // To track hovered image
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [isAtStart, setIsAtStart] = useState(true); // Track the start position

  const images = [
    DSC02061,
    DSC02138,
    DSC02130,
    DSC02120,
    DSC02165,
    DSC02082,
    DSC02177,
    DSC02102,
   
  ];

  const hoveredImages = [
    DSC02067,
    DSC02143,
    DSC02132,
    DSC02126,
    DSC02171,
    DSC02085,
    DSC02179,
    DSC02104,
  ];

  const handleScroll = () => {
    const scrollLeft = scrollRef.current.scrollLeft;
    const maxScrollLeft =
      scrollRef.current.scrollWidth - scrollRef.current.clientWidth;

    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft + 1 >= maxScrollLeft);
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: "smooth" });
    handleScroll();
  };

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: "smooth" });
    handleScroll();
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="relative ">
      <div className="mx-20 my-7 flex-col">
        <div className="ml-[20px] text-center flex-col justify-center items-center ">
          <h1
            className="xl:text-4xl md:text-3xl lg:text-2xl sm:text-xl 
          font-sans "
          >
            Exceptional Quality
          </h1>
          <p
            className="xl:font-thin xl:text-[16px] xl:mt-2 md:text-[12px] 
          md:mt-2 md:font-thin lg:text-[12px] lg:mt-2 lg:font-thin sm:font-thin sm:text-[12px] sm:mt-2"
          >
            Soon-to-be staples in your rotation
          </p>
        </div>
      </div>
      <div
        className="relative w-full flex justify-center items-center p-12 sm:p-4 sm:w-[810px] md:w-[810px] md:p-4 
      lg:w-[139%] lg:p-1 xl:w-full xl:p-4"
      >
        {!isAtStart && (
          <button
            onClick={scrollLeft}
            className="absolute left-4 z-10 p-2 bg-gray-800 rounded-full"
          >
            <img src={ArrowLeft} alt="Left Arrow" className="w-7 h-7" />
          </button>
        )}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto space-x-6 hide-scrollbar sm:space-x-0 sm:overflow-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="relative h-[500px] flex-shrink-0 border-2 rounded-lg object-cover"
              style={{
                width: "30%", // Default width for larger screens
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={hoveredIndex === index ? hoveredImages[index] : img}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-300 sm:w-[100vw]" // Full width on small screens
              />
              {hoveredIndex === index && (
                <Link to = "/" className="absolute bottom-0 w-full z-50 bg-black bg-opacity-50 text-white text-center py-2 opacity-90 transition-opacity cursor-pointer">
                  Know More
                </Link>
              )}
            </div>
          ))}
        </div>
        {!isAtEnd && (
          <button
            onClick={scrollRight}
            className="absolute right-4 z-10 p-2 bg-gray-800 rounded-full"
          >
            <img src={ArrowRight} alt="Right Arrow" className="w-7 h-7" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Section2;