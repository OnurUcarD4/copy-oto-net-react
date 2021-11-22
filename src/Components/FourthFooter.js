import React, { useEffect, useState } from "react";
import FourthCard from "./FourthCard";

const FourthFooter = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/blog")
      .then((response) => response.json())
      .then((response) => setCard(response));
  }, []);
  return (
    <div>
      <div className="">
        <div className="flex justify-center bg-gray-200 w-full heightmag">
          <div className="flex mt-8 absolute">
            <span className="text-3xl font-bold">Otomag</span>
          </div>
          <div className=" mt-24  ">
            <div className="flex justify-center gap-12 items-center">
              {card.map((x) => {
                return (
                  <div key={x.id}>
                    <FourthCard data={x} />
                  </div>
                );
              })}
            </div>
            <div className="flex justify-center items-center">
              <div className="justify-center mt-6 ">
                <button className="pr-6 mt-2 pl-6 p-3 bg-gray-200 text-black font-bold border border-gray-300 rounded-md hover:bg-black hover:text-white ease duration-200 ">
                  Tümünü Gör
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourthFooter;
