import React, { useRef } from "react";
import Slider from "@ant-design/react-slick";

const OtomobilAlirken = () => {
  const sliderRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    easing: "linear",
    arrows: false,
  };
  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        <div className="">
          <div className="grid grid-cols-3">
            <div className="mt-6 text-center flex flex-col ">
              <div className="justify-center flex">
                <img
                  className=""
                  src="https://i.hizliresim.com/2085742.jpg"
                ></img>
              </div>

              <div className="mt-2">
                <span className="font-medium text-xl">
                  #EvdeKal Aracını Evden Al
                </span>
              </div>
              <div className="mt-2">
                <span>
                  Noter işlemleri için evinizden çıkmadan, aracınızı kapınıza
                  kadar teslim edelim.
                </span>
              </div>
            </div>
            <div className="gridbg mt-6 flex flex-col">
              <div className="justify-center flex">
                <img src="https://i.hizliresim.com/pgnxst7.jpg"></img>
              </div>
              <div className="mt-2 text-center">
                <span className="font-medium text-xl">Zamandan Tasarruf</span>
              </div>
              <div className="text-center mt-2">
                <span>
                  Araç alırken günlerce gezmek, ekspertize göstermek durumunda
                  kalmazsınız. Oto.fyt'taki ekspertiz garantili araçları
                  oturduğunuz yerden satın alırsınız.
                </span>
              </div>
            </div>
            <div className=" mt-6 flex flex-col">
              <div className="justify-center flex">
                <img src="https://i.hizliresim.com/4md8laj.jpg"></img>
              </div>
              <div className="mt-2 text-center">
                <span className="font-medium text-xl">14 Gün İade</span>
              </div>
              <div className="mt-2 text-center ">
                <span className="">
                  Aldığınız aracı 14 Gün içerisinde, 1000 KM'yi aşmamak kaydıyla
                  ve satın alındığındaki ile aynı ekspertiz / hasar durumuna
                  sahip olmak koşuluyla iade edebilirsiniz.
                </span>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OtomobilAlirken;
