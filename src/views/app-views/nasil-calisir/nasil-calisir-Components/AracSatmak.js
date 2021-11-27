import React, { useEffect, useState } from "react";
import { Steps } from "antd";
const { Step } = Steps;

const AracSatmak = () => {
  const [resim, setResim] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/nasilsatarim")
      .then((response) => response.json())
      .then((response) => setResim(response));
  }, []);

  return (
    <div>
      <div className="mt-8">
        <span className="text-2xl font-semibold">Araç Satmak İstiyorum</span>
      </div>
      <div className="mt-6">
        <span>
          {" "}
          Acil paraya mı ihtiyacınız var? Ya da tanımadığınız onlarca kişiyle
          muhatap olmak mı istemiyorsunuz? Aracınızı Oto.fyt'a satmak,
          geleneksel yollardan çok daha hızlı ve güvenli!
        </span>
      </div>
      <div className="mt-24">
        <div className="flex justify-center ">
          <Steps direction="vertical">
            {resim.map((item) => (
              <Step
                status="process"
                key={item.id}
                description={
                  <div dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                }
              />
            ))}
          </Steps>
        </div>
        <div className="mb-8 mt-8"></div>
      </div>
    </div>
  );
};

export default AracSatmak;
