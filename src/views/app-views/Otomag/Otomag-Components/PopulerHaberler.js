import React from "react";

const PopulerHaberler = (props) => {
  return (
    <div className="pt-4 py-4 border pl-5 cursor-pointer">
      <div className="flex">
        <div className="w-52 h-32 relative object-cover">
          <img className="absolute w-full h-full" src={props.data.resim} />
        </div>
        <div className="mt-1 ml-4 relative">
          <span className="px-4 py-1  text-white font-semibold text-xs bg-red-600">
            {props.data.category}
          </span>
          <div className="mt-3 w-40">
            <span className="font-bold ">{props.data.title}</span>
          </div>

          <span className="text-gray-400 absolute bottom-0  italic mt-3 w-40  text-xs">
            {props.data.date}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PopulerHaberler;
