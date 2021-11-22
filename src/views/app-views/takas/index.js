import AracSatForm from "Components/AracSatForm";
import React, { useEffect, useState } from "react";
import TakasComp from "./takas-Components/TakasComp";
import TakasNeden from "./takas-Components/TakasNeden";

const TakasNasilCalisir = () => {
  const [takas, setTakas] = useState([]);
  const [nedenTakas, setnedenTakas] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/takasnasilcalisir")
      .then((response) => response.json())
      .then((response) => setTakas(response));
    fetch("http://localhost:3000/takasnedensatmaliyim")
      .then((response2) => response2.json())
      .then((response2) => setnedenTakas(response2));
  }, []);
  return (
    <div>
      <div
        className="image2"
        style={{
          backgroundImage: `url("https://cdn.oto.net/assets-1637056571448/img/slider-bg-4.jpg")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <AracSatForm />
        </div>
        <div className="absolute  z-10 konumlandir">
          <div className="">
            <span className="text-white ">
              Eski aracınızı yenisiyle hızlıca{" "}
              <b className="underline">Takas Edin,</b>
              <br />
              Oto.fyt takas desteğinden yararlanın.
            </span>
          </div>
          <div className="">
            <span className="text-white text-sm absolute">
              Satmak istediğiniz aracınıza <b>2.000 TL</b>'ye kadar ekstra takas
              desteği Oto.fyt'ta!
            </span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 text-center justify-center">
        <div className="pt-20">
          <span className="font-semibold text-3xl text-gray-700">
            Nasıl Çalışır?
          </span>
        </div>
        <div className="flex justify-center gap-24 mt-8">
          {takas.map((a) => {
            return <TakasComp key={a.id} data={a} />;
          })}
        </div>
      </div>
      <div className="flex justify-center p-8">
        <span className="font-semibold text-3xl text-gray-700">
          Aracımı Neden Oto.fyt ile Takas Yapmalıyım?
        </span>
      </div>
      <div className="grid grid-cols-3 mb-20">
        {nedenTakas.map((d) => {
          return <TakasNeden id={d} data2={d} />;
        })}
      </div>
    </div>
  );
};

export default TakasNasilCalisir;
