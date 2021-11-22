import React, { useRef } from "react";
import Slider from "@ant-design/react-slick";

const OtomobilSatarken = () => {
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
            <div className="justify-center text-center flex flex-col mt-6">
              <div className="justify-center flex">
                <img
                  className=""
                  src="https://i.hizliresim.com/9w24d4e.jpg"
                ></img>
              </div>

              <div className="mt-2">
                <span className="font-medium text-xl">Anında Nakit</span>
              </div>
              <div className="mt-2">
                <span>
                  Oto.fyt'ta araç satışı ile anında paranız hesabınıza geçer.
                </span>
              </div>
            </div>
            <div className="gridbg mt-6 flex flex-col">
              <div className="justify-center flex">
                <img src="https://i.hizliresim.com/b3rskm8.jpg"></img>
              </div>
              <div className="mt-2 text-center">
                <span className="font-medium text-xl">
                  Ücretsiz Oto.fyt Ekspertizi
                </span>
              </div>
              <div className="text-center mt-2">
                <span>
                  Oto.fyt araç uzmanları, aracınıza ücretsiz ekspertiz yapar.
                </span>
              </div>
            </div>
            <div className=" mt-6 flex flex-col">
              <div className="justify-center flex">
                <img src="https://i.hizliresim.com/ndp90cu.jpg"></img>
              </div>
              <div className="mt-2 text-center">
                <span className="font-medium text-xl">Değerinde Satış</span>
              </div>
              <div className="mt-2 text-center ">
                <span>
                  Oto.fyt'ta aracınızın değeri pazarlıklarla düşmez, değerinde
                  satın alınır.
                </span>
              </div>
            </div>
          </div>
          <div className=" justify-center flex">
            <button
              className="bg-white border mt-8 hover:border-white  text-xl pr-4 pl-4 p-2 rounded-full z-10 slidebuttoneffect"
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Diğer Taraf */}

        <div className="">
          <div className="grid grid-cols-3">
            <div className="justify-center text-center flex flex-col mt-6 gridbg">
              <div className="justify-center flex">
                <img
                  className=""
                  src="https://i.hizliresim.com/bxb9v5n.jpg"
                ></img>
              </div>

              <div className="mt-2">
                <span className="font-medium text-xl">
                  Kolay & Güvenilir Süreç
                </span>
              </div>
              <div className="mt-2">
                <span>
                  Oto.fyt kurumsal bir işletmedir, bütün işlemlerinizi gönül
                  rahatlığıyla yapabilirsiniz.
                </span>
              </div>
            </div>
            <div className=" mt-6 flex flex-col">
              <div className="justify-center flex">
                <img src="https://i.hizliresim.com/qiryi0t.jpg"></img>
              </div>
              <div className="mt-2 text-center">
                <span className="font-medium text-xl">Zamandan Tasarruf</span>
              </div>
              <div className="text-center mt-2">
                <span>
                  Aracınızı Oto.fyt'a güvenle ve hızlıca satabilir, zamanınız
                  size kalır.
                </span>
              </div>
            </div>
            <div className=" mt-6 flex flex-col gridbg">
              <div className="justify-center flex">
                <img src="https://i.hizliresim.com/18revjf.jpg"></img>
              </div>
              <div className="mt-2 text-center">
                <span className="font-medium text-xl">
                  Anında Fiyat Teklifi
                </span>
              </div>
              <div className="mt-2 text-center ">
                <span>
                  Aracınız için oturduğunuz yerden ön fiyat teklifi alın.
                </span>
              </div>
            </div>
          </div>
          <div className=" justify-center flex">
            <button
              className="bg-white border mt-8 hover:border-white  text-xl pr-4 pl-4 p-2 rounded-full z-10 slidebuttoneffect"
              onClick={() => {
                sliderRef.current.slickNext();
              }}
            >
              <i class="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default OtomobilSatarken;
