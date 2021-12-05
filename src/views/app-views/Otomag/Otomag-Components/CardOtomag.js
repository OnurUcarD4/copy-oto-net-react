import React from "react";

const CardOtomag = (props) => {
  return (
    <div>
      <div className="shadow-xl mb-4 border widthv flex mt-4 cursor-pointer">
        <div className="">
          <img className="w-96" src={props.data2.resim} />
        </div>
        <div className="contentlist">
          <div className="top">
            <div className="mt-6">
              <span className="ml-5 mr-10 bg-red-600 px-2 text-xs font-semibold py-1 text-white">
                OTOMOTİV
              </span>
              <span className="date2 ml-28">{props.data2.date}</span>
            </div>
            <div className="mt-2 w-72 ml-5">
              <span className="font-semibold text-xl">{props.data2.title}</span>
            </div>
            <div className="w-72 mt-2 ml-5">
              <span className="fontv text-xs">{props.data2.desc}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardOtomag;
