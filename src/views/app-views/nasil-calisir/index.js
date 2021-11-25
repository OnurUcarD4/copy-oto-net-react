import React from "react";
import { Tabs } from "antd";
const { TabPane } = Tabs;

const NasilCalisir = () => {
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
          <button className="how-it-works-buttons px-16 py-3 rounded-xl font-bold text-white mt-6">
            Araç Alırken
          </button>

          <button className="e how-it-works-buttons px-16 py-3 rounded-xl font-bold text-white mt-6 ml-5">
            Araç Satarken
          </button>
          <button className="how-it-works-buttons px-16 py-3  rounded-xl font-bold text-white mt-6 ml-5">
            Takas Yaparken
          </button>
        </div>
      </div>
      <div className="justify-center flex text-center">
        <Tabs
          tabBarGutter="200px"
          size="large"
          animated={{ inkBar: false, tabPane: false }}
          className="text-black p-2"
          defaultActiveKey="1"
        >
          <TabPane
            className="hover:text-black text-sm"
            tab="Araç Almak İstiyorum"
            key="1"
          >
            <div className="text-black">Content of Tab Pane 1</div>
          </TabPane>
          <TabPane
            className="hover:text-black text-sm"
            tab="Araç Satmak İstiyorum"
            key="2"
          >
            <div id="aracsatarken" className="">
              dsd
            </div>
          </TabPane>
          <TabPane
            className="hover:text-black text-sm"
            tab="Takas Yapmak İstiyorum"
            key="3"
          >
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default NasilCalisir;
