import React, { useEffect, useState } from "react";
import { Tabs } from "antd";
import AracAlmak from "./nasil-calisir-Components/AracAlmak";
import AracSatmak from "./nasil-calisir-Components/AracSatmak";
import TakasYapmak from "./nasil-calisir-Components/TakasYapmak";
import SikcaSorulan from "./nasil-calisir-Components/SikcaSorulan";
import { Collapse } from "antd";
import AracSat from "Components/AracSat";
import AracSatNasil from "./nasil-calisir-Components/AracSatNasil";

const { Panel } = Collapse;
const { TabPane } = Tabs;

const NasilCalisir = () => {
  const [state, setState] = useState("1");
  const [sikca, setSikca] = useState([]);
  const [arac, setArac] = useState([]);
  const [yil, setYil] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/sikcasorulansorular")
      .then((response) => response.json())
      .then((response) => setSikca(response));
    fetch("http://localhost:3000/araclar")
      .then((response2) => response2.json())
      .then((response2) => setArac(response2));
    fetch("http://localhost:3000/yillar")
      .then((response3) => response3.json())
      .then((response3) => setYil(response3));
  }, []);

  return (
    <div>
      <div className="bg-white w-full h-20 pt-5 border-t-2">
        <span className="text-3xl font-semibold ml-96">Nasıl Çalışır?</span>
      </div>
      <div className="how-it-works">
        <div className="justify-center flex">
          <span className="mt-20 w-2/5 text-lg font-thin text-center">
            Oto.fyt'ta araç almak da, satmak da, takas yapmak da sandığınızdan
            çok daha kolay! Geleneksel yollardan çok daha kısa sürede, daha
            güvenli bir şekilde ve daha pek çok avantajlarıyla işlemlerinizi
            tamamlayın.
          </span>
        </div>
        <div className="justify-center flex">
          <button
            onClick={() => setState("1")}
            className="how-it-works-buttons px-16 py-3 rounded-xl font-bold text-white mt-6"
          >
            Araç Alırken
          </button>

          <button
            onClick={() => setState("2")}
            className="e how-it-works-buttons px-16 py-3 rounded-xl font-bold text-white mt-6 ml-5"
          >
            Araç Satarken
          </button>
          <button
            onClick={() => setState("3")}
            className="how-it-works-buttons px-16 py-3  rounded-xl font-bold text-white mt-6 ml-5"
          >
            Takas Yaparken
          </button>
        </div>
      </div>
      <div className="justify-center flex text-center">
        <Tabs
          tabBarGutter="200px"
          size="large"
          animated={{ inkBar: true, tabPane: false }}
          className="text-black p-2"
          defaultActiveKey="1"
          onChange={(e) => setState(e)}
          activeKey={state}
        >
          <TabPane
            className="hover:text-black "
            style={{ maxWidth: "50vw" }}
            tab="Araç Almak İstiyorum"
            key="1"
          >
            <AracAlmak />
          </TabPane>
          <TabPane
            style={{ maxWidth: "50vw" }}
            className="hover:text-black   "
            tab="Araç Satmak İstiyorum"
            key="2"
          >
            <AracSatmak />
          </TabPane>
          <TabPane
            style={{ maxWidth: "50vw" }}
            className="hover:text-black "
            tab="Takas Yapmak İstiyorum"
            key="3"
          >
            <TakasYapmak />
          </TabPane>
        </Tabs>
      </div>
      <div className="sikcabg justify-center  pt-16 w-full flex">
        <div className="w-2/4 h-full">
          <div className="text-center mt-14 mb-16">
            <span className="font-semibold text-gray-800 text-3xl">
              Sıkça Sorulan Sorular
            </span>
          </div>
          <div className="mb-24">
            {sikca.map((x) => {
              return <SikcaSorulan data={x} key={x.id} />;
            })}
          </div>
        </div>
      </div>
      <div className="bgimage justify-center flex flex-col items-center w-full">
        <div className="text-center pt-28">
          <span className="text-white text-3xl">
            Aracınızı <strong>hemen satın.</strong>
          </span>
          <div className="mt-4">
            <span className="text-white">
              Aracınızı hemen en doğru fiyata satın
            </span>
          </div>
        </div>
        <div className="bg-white w-2/5 justify-center  h-32 mt-10 mb-20">
          <div className="">
            {console.log("a", arac, "d2", yil)}
            {arac.length > 0 && yil.length > 0 ? (
              <AracSatNasil data={arac} data2={yil} />
            ) : (
              console.log("HATA YEDİN")
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NasilCalisir;
