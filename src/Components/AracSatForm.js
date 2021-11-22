import React, { useState } from "react";
import AracSat from "./AracSat";
import AracAl from "./AracAl";

const AracSatForm = () => {
  const [satVisible, setsatVisible] = useState(true);
  function myFunction() {
    var element = document.getElementById("sat");
    element.classList.add("butonsat");
    document.getElementById("al").classList.remove("butonal");
    setsatVisible(true);
  }
  function myFunction2() {
    var element = document.getElementById("al");
    element.classList.add("butonal");
    document.getElementById("sat").classList.remove("butonsat");
    setsatVisible(false);
  }

  const years = [
    2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
    2009, 2008, 2007, 2006, 2005, 2004, 2003, 2002, 2001, 2000,
  ];
  const marka = [
    {
      Id: 1,
      Marka: "Alfa Romeo",
      Modeller: ["147", "156"],
    },
    {
      Id: 2,
      Marka: "Audi",
      Modeller: ["A3", "A4", "A5"],
    },
    {
      Id: 3,
      Marka: "BMW",
      Modeller: ["116i", "118i", "316i", "320d", "520d"],
    },
    {
      Id: 4,
      Marka: "Chevrolet",
      Modeller: ["CAPTIVA", "LACETTI", "SPARK", "AVEO"],
    },
    {
      Id: 5,
      Marka: "Citroen",
      Modeller: ["C1", "C2", "C3", "C4", "C5"],
    },
    {
      Id: 6,
      Marka: "Dacia",
      Modeller: ["LOGAN", "SANDERO", "DUSTER"],
    },
    {
      Id: 7,
      Marka: "Fiat",
      Modeller: ["EGEA", "LINEA", "DOBLO", "PALIO", "PUNTO"],
    },
    {
      Id: 8,
      Marka: "Ford",
      Modeller: ["FOCUS", "FIESTA", "FUSION", "MONDEO"],
    },
    {
      Id: 9,
      Marka: "Honda",
      Modeller: ["ACCORD", "CITY", "CIVIC", "CR-V"],
    },
    {
      Id: 10,
      Marka: "Hyundai",
      Modeller: ["GETZ", "SANTA", "TUCSON"],
    },
    {
      Id: 11,
      Marka: "Jeep",
      Modeller: ["COMPASS", "PATRIOT"],
    },
    {
      Id: 12,
      Marka: "Kia",
      Modeller: ["RIO", "SPORTAGE", "PICANTO", "CERATO"],
    },
    {
      Id: 13,
      Marka: "Mercedes",
      Modeller: ["C180", "E200", "GT-R"],
    },
    {
      Id: 14,
      Marka: "Nissan",
      Modeller: ["ALMERA", "MICRA", "NOTE", "QASHQAI", "X-TRAIL"],
    },
    {
      Id: 15,
      Marka: "OPEL",
      Modeller: ["ASTRA", "CORSA", "INSIGNIA", "MERIVA", "VECTRA"],
    },
    {
      Id: 16,
      Marka: "Renault",
      Modeller: ["CLIO", "KANGOO", "LAGUNA", "MEGANE", "MODUS", "SCENIC"],
    },
    {
      Id: 17,
      Marka: "Seat",
      Modeller: ["IBIZA", "LEON", "TOLEDO", "CORDOBA"],
    },
    {
      Id: 18,
      Marka: "Skoda",
      Modeller: ["FABIA", "OCTAVIA", "ROOMSTER", "SUPERB"],
    },
    {
      Id: 19,
      Marka: "Volkswagen",
      Modeller: ["GOLF", "JETTA", "PASSAT", "POLO"],
    },
    {
      Id: 20,
      Marka: "VOLVO",
      Modeller: ["XC-90", "S40", "S60", "S90"],
    },
  ];
  return (
    <div className="absolute zledim">
      <div className="gri w-92 h-96  mt-6 rounded-xl shadow-lg">
        <div className="flex">
          <button
            onClick={myFunction2}
            id="al"
            className=" p-4 pl-16 pr-20  text-2xl rounded  font-bold "
          >
            AL
          </button>
          <button
            onClick={myFunction}
            id="sat"
            className="butonsat p-4 pl-16 pr-16 text-2xl rounded-xl  font-bold rounded-b-none"
          >
            SAT
          </button>
        </div>
        <div className="">
          {satVisible ? (
            <AracSat data={years} data2={marka} />
          ) : (
            <AracAl data={years} data2={marka} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AracSatForm;
