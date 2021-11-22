import React from "react";

const SatComp2 = (props) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center text-center">
        <img className="w-32" src={props.data2.resim}></img>
        <div className="mt-4">
          <span className="font-bold text-lg">{props.data2.title}</span>
        </div>
        <div className="w-96 mt-4">
          <span className="text-base">{props.data2.desc}</span>
        </div>
      </div>
    </div>
  );
};

export default SatComp2;
