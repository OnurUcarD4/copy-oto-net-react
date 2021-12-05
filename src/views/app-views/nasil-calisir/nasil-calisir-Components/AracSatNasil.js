import React, { useEffect, useState } from "react";
import { Select } from "antd";
const { Option } = Select;

const AracSatNasil = (props) => {
  const [filtre, setFiltre] = useState([]);
  function handleChange(value) {
    const filtredata = props.data.filter((x) => x.Marka === value);
    setFiltre(filtredata[0].Modeller);
  }
  useEffect(() => {
    console.log("props", props);
  }, []);

  return (
    <div>
      <div className="justify-center items-center flex mt-11 gap-2">
        <Select
          className="sata"
          size="large"
          defaultValue="Yıl"
          style={{ width: 190 }}
        >
          {props.data2.map((x, index) => (
            <Option key={index} value={x}>
              {x}
            </Option>
          ))}
        </Select>
        <Select
          className="sata"
          size="large"
          defaultValue="Marka"
          onChange={handleChange}
          style={{ width: 190 }}
        >
          {props.data.map((x, i) => (
            <Option key={i} value={x.Marka}>
              {x.Marka}
            </Option>
          ))}
        </Select>
        <Select
          className="sata"
          size="large"
          defaultValue="Modeller"
          style={{ width: 190 }}
        >
          {filtre.map((x, i) => (
            <Option key={i} value={x}>
              {x}
            </Option>
          ))}
        </Select>

        <button className="px-8 py-2.5 bg-yellow-500 text-white rounded-lg font-bold">
          Hemen Sat
        </button>
      </div>
    </div>
  );
};

export default AracSatNasil;
