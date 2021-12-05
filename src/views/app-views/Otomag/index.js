import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import CardOtomag from "./Otomag-Components/CardOtomag";
import PopulerHaberler from "./Otomag-Components/PopulerHaberler";
import SliderItems from "./Otomag-Components/SliderItems";

const Otomag = () => {
  const [items, setItems] = useState([]);
  const [otomag, setOtomag] = useState([]);
  const [populer, setPopuler] = useState([]);
  const [galeri, setGaleri] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/slideritems")
      .then((response) => response.json())
      .then((response) => setItems(response));
    fetch("http://localhost:3000/otomagitems")
      .then((response2) => response2.json())
      .then((response2) => setOtomag(response2));
    fetch("http://localhost:3000/populerhaberler")
      .then((response3) => response3.json())
      .then((response3) => setPopuler(response3));
    fetch("http://localhost:3000/fotogaleri")
      .then((response4) => response4.json())
      .then((response4) => setGaleri(response4));
  }, []);
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="">
      <div className="">
        <button
          className="bg-white shadow-md absolute top-72 left-5 text-xl pr-6 pl-6 p-4 rounded-full z-20 slidebuttoneffect"
          onClick={() => {
            sliderRef.current.slickPrev();
          }}
        >
          <i class="fas fa-chevron-left"></i>
        </button>
        <button
          className="bg-white shadow-md absolute top-72 right-5  text-xl pr-6 pl-6 p-4 rounded-full z-10 slidebuttoneffect"
          onClick={() => {
            sliderRef.current.slickNext();
          }}
        >
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>

      <Slider ref={sliderRef} {...settings}>
        {items.map((x) => {
          return <SliderItems data={x} key={x.id} />;
        })}
      </Slider>
      <div className="w-full items-center flex flex-col">
        <div className="w-2/3">
          <div className="grid grid-cols-3 ">
            <div className="col-span-2">
              {otomag.map((d) => {
                return <CardOtomag data2={d} key={d.id} />;
              })}
              <div className="justify-center flex mt-20 mb-10">
                <button className="px-10 py-3 border-2 text-lg rounded-xl hover:bg-red-600 hover:text-white font-semibold transition ease duration-300">
                  Daha Fazla Yükle
                </button>
              </div>
            </div>
            <div className="mt-8">
              <span className="text-2xl font-semibold">Popüler Haberler</span>
              <div className="mt-6 flex gap-4 flex-col">
                {populer.map((g) => {
                  return <PopulerHaberler data={g} key={g.id} />;
                })}
              </div>
              <div className="w-96">
                <div className="mt-4 w-96 ">
                  <h1 className="text-2xl font-semibold">Foto Galeri</h1>
                  <div className="grid grid-cols-2 gap-2 mr-20 border p-4">
                    {galeri.map((w) => {
                      return (
                        <img
                          className="cursor-pointer"
                          key={w.id}
                          src={w.resim}
                        ></img>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otomag;
