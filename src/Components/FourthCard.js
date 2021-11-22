import React from "react";

const FourthCard = (props) => {
  return (
    <div>
      <div className="justify-center items-center flex">
        <div className="bg-white shadow-lg w-full heightcard ">
          <div className="flex justify-center">
            <img className="w-96" src={props.data.resim}></img>
          </div>
          <div className="relative left-72 mt-4">
            <div className="absolute tarihyer">
              <span className="text-xs text-gray-300">{props.data.tarih}</span>
            </div>
          </div>

          <div className="mt-10 ml-4 w-64">
            <span className="font-bold text-xl ">{props.data.title}</span>
          </div>
          <div className="w-64 ml-4 mt-5">
            <span className="text-gray-500">{props.data.desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthCard;
