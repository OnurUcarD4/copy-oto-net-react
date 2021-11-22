import React from "react";

const SlideCredits2 = () => {
  return (
    <div>
      <div className="absolute z-10 top-32 left-1/3">
        <span className="text-4xl text-white">
          Aracını Oto.fyt'a <b>Güvenle Satın,</b>
        </span>
        <br />
        <span className="text-white text-4xl">
          Paranızı <b>Anında Alın!</b>
        </span>
        <div className="mt-2">
          <span className="text-white">
            Oto.fyt'ta ikinci el arabanız,<b>ücretsiz ekspertizin</b> ardından
            hemen
          </span>
          <br />
          <span className="text-white">
            {" "}
            fiyatlanır. Siz de arabanızı kolayca satar, paranızı anında nakit
            alırsınız.
          </span>
        </div>
        <div className="">
          <button className="text-black font-bold mt-7 rounded-xl p-3 pl-11 pr-11 bg-white hover:bg-black hover:text-white">
            Hemen Sat
          </button>
        </div>
      </div>
    </div>
  );
};

export default SlideCredits2;
