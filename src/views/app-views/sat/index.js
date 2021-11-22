import AracSatForm from "Components/AracSatForm";
import React, { useEffect, useState } from "react";
import SatComp from "./sat-Components/SatComp";
import SatComp2 from "./sat-Components/SatComp2";
import { Collapse } from "antd";
import SikcaSorulan from "./sat-Components/SikcaSorulan";
import Hikayeler from "./sat-Components/Hikayeler";

const AracimiNasilSatarim = () => {
  const [nekadar, setNekadar] = useState([]);
  const [nedenSatmaliyim, setNedenSatmaliyim] = useState([]);
  const [sikcaSorulan, setSikcaSorulan] = useState([]);
  const [hikaye, setHikaye] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/nekadareder")
      .then((response) => response.json())
      .then((response) => setNekadar(response));
    fetch("http://localhost:3000/nedensatmaliyim")
      .then((response2) => response2.json())
      .then((response2) => setNedenSatmaliyim(response2));
    fetch("http://localhost:3000/sikcasorulansorular")
      .then((response3) => response3.json())
      .then((response3) => setSikcaSorulan(response3));
    fetch("http://localhost:3000/hikayeler")
      .then((response4) => response4.json())
      .then((response4) => setHikaye(response4));
    document.title = "Arabam Ne Kadar Eder? - Oto.Fyt";
  }, []);
  const { Panel } = Collapse;

  return (
    <div>
      <div
        className="image2"
        style={{
          backgroundImage: `url("https://cdn.oto.net/assets-1637056571448/img/slider-bg-3.jpg")`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="">
          <AracSatForm />
        </div>
        <div className="absolute  z-10 konumlandir">
          <div className="">
            <span className="text-white ">
              Aracını Oto.fyt'a <b className="underline">Hemen Sat!</b>
            </span>
          </div>
          <div className="">
            <span className="text-white font-bold text-sm absolute">
              Arabam ne kadar eder diye merak ediyor musunuz?
            </span>
          </div>
          <div className="">
            <span className="text-white text-sm absolute mt-6">
              Oto.fyt'ta aracınız, ücretsiz ekspertizin ardından gerçek
              değerinde fiyatlanır.
              <br />
              Siz de aracınızı anında satar, paranızı hemen nakit alırsınız.
            </span>
          </div>
        </div>
      </div>
      <div className="w-full pb-24   bg-gray-100">
        <div className="flex justify-center text-center">
          <span className="font-semibold text-gray-700 mt-16 text-3xl">
            Nasıl Çalışır?
          </span>
        </div>
        <div className="gap-32 flex justify-center text-center">
          {nekadar.map((x) => {
            return <SatComp key={x.id} data={x} />;
          })}
        </div>
      </div>
      <div className="w-full justify-center items-center flex">
        <div className="w-4/5">
          <div className="text-center mt-12">
            <span className="font-semibold text-3xl text-gray-700">
              Aracımı Neden Oto.fyt'a Satmalıyım?
            </span>
          </div>
          <div className="grid  grid-cols-3 mt-10 mb-20 gap-4">
            {nedenSatmaliyim.map((d) => {
              return <SatComp2 key={d.id} data2={d}></SatComp2>;
            })}
          </div>
        </div>
      </div>
      <div className="sikcabg justify-center flex w-full">
        <div className=" w-2/4 h-full">
          <div className="text-center mt-14 mb-16">
            <span className="font-semibold text-3xl">
              Sıkça Sorulan Sorular
            </span>
          </div>
          <div className="mb-24">
            {sikcaSorulan.map((e) => {
              return <SikcaSorulan key={e.id} data3={e} />;
            })}
          </div>
        </div>
      </div>
      <div className="text-center mt-14 mb-16">
        <span className="font-semibold text-3xl">Hikayeler</span>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 gap-10">
          {hikaye.map((l) => {
            return <Hikayeler key={l.id} data4={l} />;
          })}
        </div>
      </div>
      <div className="justify-center text-center items-center mb-10">
        <button className="border-2 p-4 pl-14 pr-14 rounded-xl hover:bg-red-600 text-base hover:text-white ease duration-200 font-semibold">
          Tümünü Gör
        </button>
      </div>
    </div>
  );
};

export default AracimiNasilSatarim;
