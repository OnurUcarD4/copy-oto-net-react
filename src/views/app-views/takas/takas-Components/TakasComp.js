import React from "react";

const TakasComp = (props) => {
  return (
    <div className="justify-center w-60 items-center flex flex-col mb-32">
      <div className="">
        <img src={props.data.resim} />
      </div>
      <div className="mt-3">
        <span className="font-bold text-gray-700 text-base">
          {props.data.title}
        </span>
      </div>
      <div className="mt-2">
        <span className="text-base font-thin">{props.data.desc}</span>
      </div>
    </div>
  );
};

export default TakasComp;
