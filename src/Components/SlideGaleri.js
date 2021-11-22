import React, { useState, useRef } from "react";
import Slider from "react-slick";
import AracSatForm from "./AracSatForm";
import SlideCredits1 from "./SlideCredits";
import SlideCredits2 from "./SlideCredits2";

const SlideGaleri = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 0,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    easing: "linear",
    arrows: false,
  };
  const [slide, setSlide] = useState(true);

  return (
    <div className="relative">
      <AracSatForm />

      <Slider ref={sliderRef} {...settings}>
        {slide ? (
          <div id="div1" className="image">
            <SlideCredits1 />
            <img
              className="w-full"
              src="https://cdn.oto.net/assets-1635328126377/img/slider-bg-credit.jpg"
            ></img>
            <div className="top-3/4 right absolute ev">
              <button
                className="bg-white shadow-md absolute text-xl pr-6 pl-6 p-4 rounded-full z-10 slidebuttoneffect"
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="top-3/4 left absolute">
              <button
                className="bg-white shadow-md absolute text-xl pr-6 pl-6 p-4 rounded-full z-10 slidebuttoneffect"
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                <i class="fas fa-chevron-left"></i>
              </button>
            </div>
          </div>
        ) : null}

        {slide ? (
          <div id="div2" className="image">
            <SlideCredits2 />
            <img
              className="w-full"
              src="https://cdn.oto.net/assets-1636530283052/img/slider-bg-happy-female.jpg"
            ></img>
            <div className="top-3/4 right absolute">
              <button
                className="bg-white shadow-md absolute text-xl pr-6 pl-6 p-4 rounded-full z-10 slidebuttoneffect"
                onClick={() => {
                  sliderRef.current.slickNext();
                }}
              >
                <i class="fas fa-chevron-right"></i>
              </button>
            </div>
            <div className="top-3/4 left absolute">
              <button
                className="bg-white shadow-md absolute text-xl pr-6 pl-6 p-4 rounded-full z-10 slidebuttoneffect"
                onClick={() => {
                  sliderRef.current.slickPrev();
                }}
              >
                <i class="fas fa-chevron-left"></i>
              </button>
            </div>
          </div>
        ) : null}
      </Slider>
    </div>
  );
};

export default SlideGaleri;
