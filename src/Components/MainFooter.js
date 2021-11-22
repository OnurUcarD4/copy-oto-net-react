import React from "react";

const MainFooter = () => {
  return (
    <div>
      <div className="justify-center flex border-t-2 ">
        <div className="w-2/3 h-80 grid-cols-4 flex">
          <div className="mt-2 w-72 ml-3">
            <img src="https://i.hizliresim.com/nef87ve.png"></img>
            <p className="mt-3">
              Arabamı nasıl satarım, arabam kaç para diye düşünmeyin. Ücretsiz
              ekspertiz sonrası, <b className="text-gray-600">Oto.fyt</b>{" "}
              güvencesi ile anında paranız hesabınızda!
            </p>
            <button className="pl-2 p-1 pr-2 font-bold text-xs text-gray-700 hover:text-white hover:bg-gray-800 duration-300 ease rounded-xl bg-gray-300">
              HEMEN SAT
            </button>
          </div>
          <div className="">
            <div className="mt-7 ml-7">
              <span className="font-semibold text-base">Hakkımızda</span>
              <div className="">
                <ul className="mt-6">
                  <li className="mb-1">Biz Kimiz?</li>
                  <li className="mb-1">Ekspertiz Merkezlerimiz</li>
                  <li className="mb-1">Hikayeler</li>
                  <li className="mb-1">İletişim</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-7 ml-7">
              <span className="font-semibold text-base">Kurumsal</span>
              <div className="">
                <ul className="mt-6">
                  <li className="mb-1">Kurumsal Üye Girişi</li>
                  <li className="mb-1">Kurumsal Araç Satışı</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-7 ml-7">
              <span className="font-semibold text-base">Yardım</span>
              <div className="">
                <ul className="mt-6">
                  <li className="mb-1">Aracımı Satmak İstiyorum</li>
                  <li className="mb-1">Sıkça Sorulan Sorular</li>
                  <li className="mb-1">Canlı Yardım</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="">
            <div className="mt-7 ml-7">
              <span className="font-semibold text-base">Oto.fyt</span>
              <div className="">
                <ul className="mt-6">
                  <li className="mb-1">Nasıl Çalışır?</li>
                  <li className="mb-1">Satış Sözleşmesi</li>
                  <li className="mb-1">Gizlilik Sözleşmesi</li>
                  <li className="mb-1">Genel İşlem Koşulları</li>
                  <li className="mb-1">Kişisel Verilerin Korunması</li>
                  <li className="mb-1">Çerez Politikası</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainFooter;
