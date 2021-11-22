import React, { useState } from "react";
import OtomobilSatarken from "./OtomobilSatarken";
import OtomobilAlirken from "./OtomobilAlirken";

const FirstFooter = () => {
  const [otomobil, setOtomobil] = useState(true);
  function myFunction() {
    var element = document.getElementById("sell2");
    element.classList.add("sellbutton2");
    document.getElementById("buy2").classList.remove("buybutton2");
    setOtomobil(true);
  }
  function myFunction2() {
    var element = document.getElementById("buy2");
    element.classList.add("buybutton2");
    document.getElementById("sell2").classList.remove("sellbutton2");
    setOtomobil(false);
  }

  return (
    <div className="">
      <div className="backgroundgray w-full h-80">
        <div className="flex  justify-center relative">
          <div className=" w-64 h-80 mt-9 ">
            <span className="text-3xl">
              Neden <span className="font-bold">Oto.fyt?</span>
            </span>
            <div className="">
              <button
                onClick={myFunction}
                id="sell2"
                className="sellbutton2 sellbutton mt-5 p-5 text-xl "
              >
                Otomobil Satarken
              </button>
            </div>
            <div className="">
              <button
                id="buy2"
                onClick={myFunction2}
                className="buybutton p-5 text-xl"
              >
                Otomobil Alırken
              </button>
            </div>
          </div>
          <div className="bg-white w-2/4 h-80 footerdiv">
            {otomobil ? <OtomobilSatarken /> : <OtomobilAlirken />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstFooter;
