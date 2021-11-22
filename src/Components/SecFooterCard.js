import axios from "axios";
import React, { useEffect, useState } from "react";

const SecFooterCard = (props) => {
  return (
    <div className="justify-center flex mt-3 flex-col border border-gray-200 rounded-sm">
      <div className="">
        <img className="objectfit2" src={props.data.resim}></img>
      </div>
      <div className="relative abscard">
        <div className="absolute">
          <span className=" font-bold text-xs textdeco float-right mt-4">
            {props.data.eskifiyat}TL
          </span>
          <br />
          <span className=" font-bold text-xl text-red-600">
            {props.data.yenifiyat}TL
          </span>
        </div>
      </div>
      <div className="mt-2">
        <span className="text-base font-medium p-2">{props.data.aracismi}</span>
      </div>
      <div className=" p-2">
        <span className="text-xs">{props.data.aracmodeli}</span>
      </div>

      <div className="w-full grid grid-cols-2">
        <div className="mt-1 ml-2 w-60 flex flex-col">
          <div className="border-b-2 ">
            <span className="text-xs">
              <i class="far fa-calendar text-gray-500"></i>{" "}
              {props.data.aracyili}
            </span>
          </div>
          <div className="border-b-2">
            <span className="text-xs mt-4">
              <i class="fas fa-gas-pump text-gray-500"></i>{" "}
              {props.data.aracyakit}
            </span>
          </div>
        </div>
        <div className="mt-1 ml-2 w-60">
          <div className="border-b-2">
            <span className="text-xs">
              <i class="fas fa-gas-pump text-gray-500"></i> {props.data.arackm}
              KM
            </span>
          </div>
          <div className="border-b-2 mb-2">
            <span className="text-xs">
              <i class="fas fa-cog text-gray-500"></i>
              {props.data.aracvites}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecFooterCard;
