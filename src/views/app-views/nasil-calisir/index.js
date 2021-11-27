import React, { useState } from "react";
import { Tabs } from "antd";
import AracAlmak from "./nasil-calisir-Components/AracAlmak";
import AracSatmak from "./nasil-calisir-Components/AracSatmak";
import TakasYapmak from "./nasil-calisir-Components/TakasYapmak";
const { TabPane } = Tabs;

const NasilCalisir = () => {
  const [state, setState] = useState("1");
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
    </div>
  );
};

export default NasilCalisir;
