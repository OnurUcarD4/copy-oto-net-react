import React from "react";

const InfComp = (props) => {
  return (
    <div key={props.data.id}>
      <div className="justify-center items-center flex flex-col">
        <div className="">
          <div className="beyazarka flex justify-center  ">
            <img src={props.data.resim}></img>
          </div>
        </div>
        <div className="justify-center text-center mt-2">
          <span className="text-white text-lg font-bold">
            {props.data.title}
          </span>
          <div className="">
            <span className="text-white text-lg">{props.data.desc}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfComp;
