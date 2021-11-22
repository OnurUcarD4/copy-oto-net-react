import React, { useEffect, useState } from "react";
import InfComp from "./InfComp";

const ThrFooter = () => {
  const [inf, setInf] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/inf")
      .then((response) => response.json())
      .then((response) => setInf(response));
  }, []);
  return (
    <div>
      <div className="backgroundoto w-full h-96">
        <div className="justify-center text-center">
          <div className="pt-7">
            <span className="text-white text-3xl">
              Rakamlarla <span className="font-bold">Oto.fyt</span>
            </span>
          </div>
        </div>
        <div className="mt-12 gap-32 justify-center items-center flex">
          {inf.map((x) => {
            return (
              <div key={x.id}>
                <InfComp data={x} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ThrFooter;
