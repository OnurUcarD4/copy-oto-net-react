import React, { useEffect, useState } from "react";
import { Input, Select } from "antd";

const AracAl = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  const [data3, setData3] = useState({ Modeller: [] });
  function HandleChange(value) {
    const myList = props.data2.find((x) => x.Id === value);
    setData3(myList);
  }
  return (
    <div>
      <div className="justify-center text-center bg-white p-6 shadow-sm">
        <div className="mt-1">
          <span>Aradığınız aracın özelliklerini girin,</span>
        </div>
        <div className="mb-4">
          <span>size en uygun aracı bulalım.</span>
        </div>
        <div className="sata mt-2">
          <Select
            style={{ width: 300 }}
            size="large"
            listItemHeight={10}
            listHeight={90}
            defaultValue="Tüm Model Yılları"
          >
            {props.data.map((x, index) => {
              return (
                <Select.Option key={index} value={x}>
                  {x}
                </Select.Option>
              );
            })}
          </Select>
        </div>
        <div className="sata mt-2 gap-5 justify-center flex">
          <Select
            onChange={HandleChange}
            style={{ width: 140 }}
            size="large"
            listItemHeight={10}
            listHeight={90}
            defaultValue="Marka"
          >
            {props.data2.map((x, index) => {
              return (
                <Select.Option key={index} value={x.Id}>
                  {x.Marka}
                </Select.Option>
              );
            })}
          </Select>
          <Select
            style={{ width: 140 }}
            size="large"
            listItemHeight={10}
            listHeight={90}
            defaultValue="Model"
          >
            {data3.Modeller.map((x, index) => {
              return (
                <Select.Option key={index} value={x}>
                  {x}
                </Select.Option>
              );
            })}
          </Select>
        </div>
        <div className="mt-6">
          <button className="p-4 rounded-lg font-bold text-xl  satarkaplan paddng">
            Araçları Göster
          </button>
        </div>
      </div>

      <div className="comparkaplangri mt-1">
        <i className="fa fa-car comparkaplangri2 ml-3 text-yellow-600"></i>
        Son 30 günde <b>74.896 kişi</b> aracına teklif aldı.
      </div>
    </div>
  );
};

export default AracAl;
