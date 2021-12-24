import React, { useEffect, useState } from "react";
import { Form, Input } from "antd";

import AlCard from "./Al-Components/AlCard";
import AlMenu from "./Al-Components/AlMenu";

const AlPage = () => {
  const [Marka, setMarka] = useState([]);
  const [marka2, setMarka2] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/araclar")
      .then((response) => response.json())
      .then((response) => setMarka(response));
  }, []);
  const [form] = Form.useForm();
  const [Filtre, setFiltre] = useState([]);
  const [VehicleType, setVehicleType] = useState([]);

  function handleChange(value) {
    const val = value.target.value;
    const filtredata = Marka.find((d) => d.Id === parseInt(val));
    console.log(val, Marka);
    setFiltre(filtredata.Modeller);
    setVehicleType(filtredata.Modeller[0].Type);
    console.log(
      "key=",
      filtredata.Modeller[0].Key,
      "type=",
      filtredata.Modeller[0].Type[0].TypeId,
      "data",
      Marka,
      "filt",
      Filtre
    );
    form.setFieldsValue({
      Model: filtredata.Modeller[0].Key,
      VehicleType: filtredata.Modeller[0].Type[0].TypeId,
    });
  }
  const handleChange2 = (value) => {
    const filtremodel = Filtre.find((e) => e.Key === value);
    console.log(filtremodel.Type[0].TypeId);
    setVehicleType(filtremodel.Type);
    form.setFieldsValue({
      VehicleType: filtremodel.Type[0].TypeId,
    });
  };

  const onFinish = (val) => {
    console.log(val, Marka);
    const marka = Marka.find((x) => x.Id === parseInt(val.Marka));
    const marka2 = marka.Cars.filter((e) => e.TypeId == val.VehicleType);
    console.log(marka, "es", marka2);
    setMarka2(marka2);
  };

  return (
    <div className="bg-white justify-center flex flex-col">
      <div className="justify-center items flex h-20">
        <div className=" w-full h-20 items-center justify-center flex  ">
          <span className="text-3xl pl-5 text-center flex-1">
            Oto.Fyt <span className="font-semibold">Araçları</span>{" "}
          </span>
          <Input className="flex-1 opacity-0 cursor-default" readOnly />
        </div>
      </div>
      <div className="grid grid-cols-2 w-full pt-4 bg-gray-200">
        <div className="">
          <div className="">
            <div className="justify-center flex">
              <AlMenu
                handleChange={handleChange}
                handleChange2={handleChange2}
                onFinish={onFinish}
                Marka={Marka}
                Filtre={Filtre}
                VehicleType={VehicleType}
                Form={Form}
                form={form}
              />
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-3">
            {marka2.map((z) => {
              return <AlCard z={z} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlPage;
