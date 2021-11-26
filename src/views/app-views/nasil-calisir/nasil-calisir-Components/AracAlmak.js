import React, { useEffect, useState } from "react";
import { Steps } from "antd";
const { Step } = Steps;

const AracAlmak = () => {
  const [resim, setResim] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/nasilsatarimresim")
      .then((response) => response.json())
      .then((response) => setResim(response));
  }, []);
  return (
    <div>
      <div className="mt-8">
        <span className="text-2xl font-semibold">Araç Almak İstiyorum</span>
      </div>
      <div className="mt-6">
        <span>
          {" "}
          Aracınızı Oto.fyt'tan almak hem hızlı, hem de güvenlidir. Ekspertizden
          geçirilmiş, sıfıra yakın garantili araçları oturduğunuz yerden bir
          tıkla alırsınız.
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
        <div className="text-center flex justify-center mb-8 mt-8">
          <span className="font-thin italic">
            * Bireysel müşteriden satın alınan araçlara verilmektedir.
          </span>
        </div>
      </div>
    </div>
  );
};

export default AracAlmak;
