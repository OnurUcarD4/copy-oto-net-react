import React from "react";

const NavStories = () => {
  return (
    <div className="navstories relative shadow-md z-10">
      <div className="justify-center text-center flex">
        <div className="p-4 mr-10">
          <div className="font-medium text-base pt-1">
            Aracını Hemen Satan
            <div className="font-bold text-base musteri">
              Müşterilerimizin Hikayeleri
            </div>
          </div>
        </div>
        <div className="justify-center mt-3">
          <img
            className=" w-14 borderver"
            src="https://cdn.oto.net/img/u/st/b9/ba/5b/hikaye-694-b9ba5b44-ea91-4d31-b6f0-44d885c1b1dd_120x120.jpg"
          ></img>
        </div>
        <div className="justify-center mt-3 ml-2">
          <img
            className=" w-14 borderver"
            src="https://cdn.oto.net/img/u/st/ca/38/3a/hikaye-682-ca383a0b-b04f-45f0-a988-0fd8c04223d3_120x120.jpg"
          ></img>
        </div>
        <div className="justify-center mt-3 ml-2">
          <img
            className=" w-14 borderver"
            src="https://cdn.oto.net/img/u/st/7b/80/3e/hikaye-676-7b803e36-9411-4290-bd82-de05b5e73260_120x120.jpg"
          ></img>
        </div>
        <div className="justify-center mt-3 ml-2">
          <img
            className=" w-14 borderver"
            src="https://cdn.oto.net/img/u/st/1a/32/fe/hikaye-679-1a32fee7-8f99-4355-a3f5-4607e739162f_120x120.jpg"
          ></img>
        </div>
        <div className="justify-center mt-3 ml-2">
          <img
            className=" w-14 borderver"
            src="https://cdn.oto.net/img/u/st/a5/2d/ea/hikaye-677-a52dea22-7c46-42aa-b7a1-b06a4d2878f7_120x120.jpg"
          ></img>
        </div>
        <div className="justify-center mt-3 ml-2">
          <img
            className=" w-14 borderver"
            src="https://cdn.oto.net/img/u/st/79/18/c8/hikaye-675-7918c876-9b6a-4863-8e4e-cc6d51b3bc9d_120x120.jpg"
          ></img>
        </div>
        <div className=" mt-3 ml-2 ">
          <img
            className=" w-14 opak"
            src="https://cdn.oto.net/img/u/st/6c/2c/8d/hikaye-668-6c2c8d41-c040-4613-b77e-3908679872d8_120x120.jpg"
          ></img>
        </div>
        <div className="flex hizalanvst">
          <div className="mt-5 relative">
            <label className="ml-20 text-base">Siz de aracınızı seçin,</label>
            <div className="">
              <label className="ml-20 text-base font-bold text-yellow-500">
                hemen teklifimizi yapalım
              </label>
              <div className="absolute arrow ">
                <img src="https://cdn.oto.net/assets-1635328126377/img/curved-arrow-transparent.png"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavStories;
