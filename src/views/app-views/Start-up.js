import { Modal } from "antd";
import React from "react";
import { useHistory } from "react-router";

const StartUp = () => {
  const history = useHistory();
  return (
    <div>
      <Modal
        visible={true}
        okText="Tamam"
        cancelText="Vazgeç"
        centered
        title="Önemli Bilgi!"
        onOk={() => {
          history.push("/home");
        }}
      >
        <p>
          Merhaba,projeme hoşgeldiniz. Projemin düzgün çalışabilmesi için
          "Tamam" tuşuna basmadan önce yeni bir terminal penceresine
          "json-server --watch db.json" komutunu yazarak dataları görmesini
          sağlayınız.
        </p>
      </Modal>
    </div>
  );
};

export default StartUp;
