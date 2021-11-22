import React, { useEffect, useState } from "react";

const Hikayeler = (props) => {
  return (
    <div>
      <div className="w-80 h-80 relative bg-white border shadow-md mb-10 cursor-pointer">
        <div className="container2 ">
          <div
            style={{
              backgroundImage: `url(${props.data4.resim})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className=" w-full h-40"
          ></div>
          <div className="overlay2 flex items-center justify-center">
            <button className="py-2 px-10 font-semibold text-black text-base bg-white rounded-3xl">
              Hikayeye Git
            </button>
          </div>
        </div>

        <div className="mt-2 bg-white p-2 flex-1">
          <span className="text-base font-semibold  ">{props.data4.title}</span>
        </div>
        <div className="absolute bottom-10 mt-2 ml-2 flex-1 flex-col flex">
          <span className="text-xs font-semibold text-gray-600">
            {props.data4.desc}
          </span>
          <span className="text-xs italic">{props.data4.job}</span>
        </div>
      </div>
    </div>
  );
};

export default Hikayeler;
