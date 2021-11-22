import React from "react";

const SatComp = (props) => {
  console.log(props);
  return (
    <div>
      <div className="justify-center flex flex-col items-center mt-8">
        <img src={props.data.resim}></img>
        <div className="w-52 mt-3">
          <span className="font-semibold text-lg">{props.data.title}</span>
          <div className=" mt-2 text-center">
            <span>{props.data.desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SatComp;
