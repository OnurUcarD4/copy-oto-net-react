import React, { useEffect, useState } from "react";
import { Steps } from "antd";
const { Step } = Steps;

const TakasYapmak = () => {
  const [resim, setResim] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/nasiltakas")
      .then((response) => response.json())
      .then((response) => setResim(response));
  }, []);
  return (
    <div>
      <div className="mt-8">
        <span className="text-2xl font-semibold">Takas Yapmak İstiyorum</span>
      </div>
      <div className="mt-6">
        <span>
          {" "}
          Oto.fyt'ın avantajlarından yararlanarak hem eski aracınızın takasını
          gerçekleştirin hem de 2.000 TL'ye kadar ekstra takas desteğinden
          yararlanın.
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
      </div>
      <div className="mb-10"></div>
    </div>
  );
};

export default TakasYapmak;
