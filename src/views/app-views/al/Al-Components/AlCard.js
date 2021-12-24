import React from "react";

const AlCard = (props) => {
  const { z } = props;
  return (
    <div className="flex">
      <div className="">
        <div className="w-72 border bg-white border-gray-300">
          <div className="flex">
            <div className="flex flex-col">
              <img src={z.Image} alt="" />

              <div className=" flex flex-col p-2">
                <div className="relative">
                  <div className="">
                    <div className="absolute right-2 top-3">
                      <span className="line-through text-gray-700 text-xs font-semibold">
                        {z.Price}TL
                      </span>
                    </div>
                    <div className="absolute right-1 top-7">
                      <span className="text-red-600 text-base font-semibold">
                        {z.Discounted}TL
                      </span>
                    </div>
                  </div>
                </div>
                <span className="font-semibold text-base w-40 mt-2">
                  {z.Title}
                </span>
                <span className="font-semibold mt-8">
                  {z.Year}{" "}
                  <span className="text-gray-600 font-light text-xs">
                    {z.Name}
                  </span>
                </span>
              </div>

              <div className="border-t">
                <span className="text-xs ml-2">
                  <i class="fas fa-gas-pump mr-1 opacity-70"></i>
                  {z.Gear}
                </span>
                <span className="text-xs ml-2">
                  <i class="fas fa-cogs mr-1 opacity-70"></i>
                  {z.Fuel}
                </span>
                <span className="text-xs ml-2">
                  <i class="fas fa-tachometer-alt mr-1 opacity-70"></i>
                  {z.Km} KM
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlCard;
