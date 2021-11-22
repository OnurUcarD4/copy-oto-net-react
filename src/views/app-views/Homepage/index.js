import FirstFooter from "Components/FirstFooter";
import FourthFooter from "Components/FourthFooter";
import MainFooter from "Components/MainFooter";
import NavStories from "Components/NavStories";
import SecFooter from "Components/SecFooter";
import SlideGaleri from "Components/SlideGaleri";
import ThrFooter from "Components/ThrFooter";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Homepage() {
  useEffect(() => {
    document.title =
      "İkinci El Satılık Araba, Araç Alım - Satım ve Takas - Oto.fyt";
  }, []);

  return (
    <div className="">
      <NavStories />
      <SlideGaleri />
      <FirstFooter />
      <SecFooter />
      <ThrFooter />
      <FourthFooter />
    </div>
  );
}

export default Homepage;
