import React, { useEffect, useState } from "react";
import { Select } from "antd";

const AlMenu = (props) => {
  const {
    Marka,
    onFinish,
    handleChange,
    handleChange2,
    Filtre,
    VehicleType,
    Form,
    form,
  } = props;
  const { Option } = Select;

  return (
    <div>
      <div className="">
        <div className="  ">
          <div className=" ml-16">
            <Form form={form} name="control-hooks" onFinish={onFinish}>
              <div className="bg-white w-72 shadow-lg border">
                <div className="">
                  <span className="font-semibold text-lg p-2">Marka</span>

                  <div className="p-2">
                    <div className="">
                      <Form.Item name="Marka" className="border">
                        <select
                          style={{ width: 270, height: 140 }}
                          className="text-lg "
                          id="cars"
                          onChange={handleChange}
                          multiple
                        >
                          {Marka.map((x) => {
                            return (
                              <option key={x.Id} value={x.Id}>
                                {x.Marka}
                              </option>
                            );
                          })}
                        </select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="border-t">
                    <span className="font-semibold text-lg p-2">Model</span>
                    <div className="p-2">
                      <Form.Item name="Model">
                        <Select
                          onChange={handleChange2}
                          placeholder="Tümü"
                          size="large"
                          style={{ width: 256 }}
                        >
                          {Filtre.map((e, i) => (
                            <Option key={i} value={e.Key}>
                              {e.Name}
                            </Option>
                          ))}
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="border-t">
                    <span className="font-semibold text-lg p-2">Araç Tipi</span>
                    <div className="p-2">
                      <Form.Item name="VehicleType">
                        <Select
                          placeholder="Tümü"
                          size="large"
                          style={{ width: 256 }}
                        >
                          {VehicleType.map((h) => {
                            return (
                              <Option key={h.TypeId} value={h.TypeId}>
                                {h.Name}
                              </Option>
                            );
                          })}
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="border-t">
                    <span className="font-semibold text-lg p-2">Fiyat</span>
                    <div className="p-2">
                      <div className="flex">
                        <Form.Item name="MinPrice">
                          <input
                            placeholder="Min"
                            className="w-28 h-10 border-2 p-2 rounded-md"
                            type="number"
                          />
                        </Form.Item>
                        <span className="font-bold ml-2 mr-2">-</span>
                        <Form.Item name="MaxPrice">
                          <input
                            placeholder="Max"
                            className="w-28 h-10 border-2 p-2 rounded-md"
                            type="number"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="border-t">
                    <span className="font-semibold text-lg p-2">Yıl</span>
                    <div className="p-2">
                      <div className="flex ">
                        <Form.Item name="MinYear">
                          <input
                            placeholder="Min"
                            className="w-28 h-10 border-2 p-2 rounded-md"
                            type="number"
                          />
                        </Form.Item>
                        <span className="font-bold ml-2 mr-2">-</span>
                        <Form.Item name="MaxYear">
                          <input
                            placeholder="Max"
                            className="w-28 h-10 border-2 p-2 rounded-md"
                            type="number"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>
                  <div className="border-t">
                    <span className="font-semibold text-lg p-2">Kilometre</span>
                    <div className="p-2">
                      <div className="flex">
                        <Form.Item name="MinKm">
                          <input
                            placeholder="Min"
                            className="w-28 h-10 border-2 p-2 rounded-md"
                            type="number"
                          />
                        </Form.Item>
                        <span className="font-bold ml-2 mr-2">-</span>
                        <Form.Item name="MaxKm">
                          <input
                            placeholder="Max"
                            className="w-28 h-10 border-2 p-2 rounded-md"
                            type="number"
                          />
                        </Form.Item>
                      </div>
                    </div>
                  </div>

                  <div className="border-t">
                    <span className="font-semibold text-lg p-2">
                      Yakıt Türü
                    </span>
                    <div className="p-2">
                      <Form.Item name="FuelType">
                        <Select
                          size="large"
                          className="w-64"
                          defaultValue="Tümü"
                        >
                          <Option value="Tümü">Tümü</Option>
                          <Option value="Benzin">Benzin</Option>
                          <Option value="Dizel">Dizel</Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="border-t">
                    <span className="font-semibold text-lg p-2">
                      Vites Türü
                    </span>
                    <div className="p-2">
                      <Form.Item name="GearType">
                        <Select
                          size="large"
                          className="w-64"
                          defaultValue="Tümü"
                        >
                          <Option value="Tümü">Tümü</Option>
                          <Option value="Manuel">Manuel</Option>
                          <Option value="Otomatik">Otomatik</Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <div className="border-t flex justify-center">
                    <Form.Item>
                      <button
                        type="submit"
                        className="font-semibold mt-2  px-28 mb-1 py-3 text-white text-base bg-yellow-600 rounded-lg"
                      >
                        Filtrele
                      </button>
                    </Form.Item>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlMenu;
