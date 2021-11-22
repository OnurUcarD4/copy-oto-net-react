import React, { useState } from "react";
import { Input, Select } from "antd";

const AracSat = (props) => {
  const { Option } = Select;

  const [filterlidata, setFilterlidata] = useState([]);
  function handleChange(value) {
    const data2 = props.data2.filter((x) => x.Marka === value);
    setFilterlidata(data2[0].Modeller);
  }

  return (
    <div className="">
      <div className="justify-center text-center bg-white p-6">
        Araç bilgilerinizi girin, hemen satın.
      </div>
      <div className="justify-center text-center sata bg-white">
        <Select
          defaultValue=""
          style={{ width: 300 }}
          size="large"
          listItemHeight={10}
          listHeight={90}
          defaultValue="Model Yılı"
        >
          {props.data.map((year, index) => (
            <Option key={index} value={year}>
              {year}
            </Option>
          ))}
        </Select>
        <div className="mt-3 flex justify-center sata gap-5">
          <Select
            defaultValue=""
            style={{ width: 140 }}
            size="large"
            listItemHeight={10}
            listHeight={90}
            defaultValue="Marka"
            onChange={handleChange}
          >
            {props.data2.map((marka) => (
              <Option key={marka.Id} value={marka.Marka}>
                {marka.Marka}
              </Option>
            ))}
          </Select>
          <Select
            defaultValue=""
            style={{ width: 140 }}
            size="large"
            listItemHeight={10}
            listHeight={90}
            defaultValue="Model"
            onChange=""
          >
            {filterlidata.map((model, index) => {
              return (
                <Option key={index} value={model}>
                  {model}
                </Option>
              );
            })}
          </Select>
        </div>
        <div className="justify-center text-center mt-6">
          <button className="p-4 pl-24 rounded-lg font-bold text-xl pr-24 satarkaplan">
            Hemen Sat
          </button>
        </div>
        <div className="mt-1 aracbulamama pb-3 shadow-md">
          <a className="">Aracımı yukarda bulamıyorum</a>
        </div>
        <div className="comparkaplangri mt-1 ">
          <i className="fa fa-car mr-2 text-yellow-600"></i>Son 30 günde{" "}
          <b>74.896 kişi</b> aracına teklif aldı.
        </div>
      </div>
    </div>
  );
};

export default AracSat;
