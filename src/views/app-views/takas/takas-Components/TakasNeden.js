import React from "react";

const TakasNeden = (props) => {
  return (
    <div className="justify-center flex text-center flex-col items-center">
      <div className="mt-4">
        <img src={props.data2.resim} />
      </div>
      <div className="mt-4">
        <span className="font-semibold text-lg">{props.data2.title}</span>
      </div>
      <div className="w-72">
        <span className="text-base">{props.data2.desc}</span>
      </div>
    </div>
  );
};

export default TakasNeden;
