import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="bg-white shadow-2xl  pb-1 z-40">
        <div className="justify-center text-center flex">
          <div className="mt-2">
            <Link to="/home">
              <img src="https://i.hizliresim.com/ejqwg6o.png" />
            </Link>
          </div>
          <Link className="text-black linkler" to="/al">
            <div className="p-6 text-base font-normal mt-2">Al</div>
          </Link>
          <Link className="text-black linkler  " to="/aracimi-nasil-satarim">
            <div className="p-6 text-base font-normal mt-2">Sat</div>
          </Link>
          <Link className="text-black linkler" to="/takas">
            <div className="p-6 text-base font-normal mt-2">Takas</div>
          </Link>
          <Link className="text-black linkler" to="/nasil-calisir">
            <div className="p-6 text-base font-normal mt-2">Nasıl Çalışır</div>
          </Link>
          <Link className="text-black linkler" to="/hakkimizda">
            <div className="p-6 text-base font-normal mt-2">Hakkımızda</div>
          </Link>
          <div className="text-lg ml-32 mt-1 relative inline-block text-left">
            <div class="dropdown">
              <button className="dropbtn p-2 pl-3 pr-3 mt-3 rounded-lg shadow-md">
                Kurumsal Üye <i class="fas fa-chevron-down"></i>
              </button>
              <div className="dropdown-content">
                <div className="">
                  <a className="text-xs link1" href="#">
                    Kurumsal Üye Girişi{" "}
                  </a>
                  <i className="fas fa-chevron-right font-bold absolute right-4 top-3  text-xs"></i>
                  <hr />
                </div>
                <div className="relative">
                  <a className="text-xs link2" href="#">
                    Kurumsal Üye Girişi{" "}
                  </a>
                  <i className="fas fa-chevron-right font-bold absolute right-4 top-3  text-xs"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="text-lg mt-2">
            <button className="dropbtn2 p-2 pl-9 pr-9 mt-2 rounded-lg shadow-md ml-2">
              Üye Ol / Giriş Yap
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
