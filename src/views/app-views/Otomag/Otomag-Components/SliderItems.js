import React, { useEffect, useState } from "react";

const SliderItems = (props) => {
  return (
    <div className="wrapper">
      <div className={props.data.resim}>
        <div className="overlay-4"></div>
        <div className="relative top-36 left-96">
          <span className="text-white font-bold bg-red-600 px-3 py-1 text-xs">
            {props.data.category}
          </span>
          <div className="mt-10">
            <span className="text-white text-md ">{props.data.date}</span>
          </div>

          <div className="mt-5 w-5/12">
            <span className="text-white font-base text-5xl">
              {props.data.title}
            </span>
          </div>
          <div className="text-2xl text-white mt-3">
            <i class="fab fa-facebook-f mr-6"></i>
            <i class="fab fa-twitter"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderItems;
