import React from "react";

const LastFooter = () => {
  return (
    <div>
      <div className="w-full h-24 justify-center flex bg-black text-center">
        <div className="w-2/3">
          <div className="justify-center flex text-center float-left">
            <span className="text-white text-xs mt-10">
              © 2021 Oto.fyt, Tüm Hakları Saklıdır
            </span>
          </div>
          <div className="float-right">
            <i class="fab fa-facebook-f mt-8 text-2xl font-bold text-white"></i>{" "}
            <i class="fab fa-twitter text-white mt-8 text-2xl font-bold ml-5"></i>
            <i class="fab fa-instagram text-white mt-8 text-2xl font-bold ml-5"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastFooter;
