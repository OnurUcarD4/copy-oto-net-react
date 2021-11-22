import React, { useEffect, useState, useRef } from "react";
import Slider from "@ant-design/react-slick";
import SecFooterCard from "./SecFooterCard";

const SecFooter = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
  };
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/cars")
      .then((response) => response.json())
      .then((response) => setCars(response));
  }, []);
  const sliderRef = useRef();
  return (
    <div className=" grid grid-cols-5 ">
      <div className="ml-8   h-96">
        <div className="mt-10 ml-12">
          <span className="font-bold text-3xl text-gray-800">
            Güvenle Araç{" "}
          </span>
          <div className="">
            <span className="font-bold text-3xl text-gray-800">Al</span>
          </div>
          <div className="">
            <button className="p-4 mt-4 pl-10 pr-10 font-bold  rounded-full border-gray-300 border hover:text-white hover:bg-red-600 ease duration-300">
              Tümünü Gör
            </button>
          </div>
          <div className="mt-7">
            <button
              className="bg-white shadow-md text-xl pr-6 pl-6 p-4 rounded-full z-10 slidebuttoneffect"
              onClick={() => {
                sliderRef.current.slickPrev();
              }}
            >
              <i class="fas fa-chevron-left"></i>
            </button>
            <button
              className="bg-white shadow-md  text-xl pr-6 pl-6 p-4 rounded-full z-10 slidebuttoneffect ml-5"
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>

      <Slider ref={sliderRef} {...settings} className="col-span-4 h-full ">
        {cars.map((x) => {
          return (
            <div key={x.id}>
              <SecFooterCard data={x} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SecFooter;
