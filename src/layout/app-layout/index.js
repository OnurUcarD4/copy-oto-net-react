import React from "react";
import Header from "Components/Navbar.js";
import Footer from "Components/LastFooter.js";
import Content from "views/app-views";
import MainFooter from "Components/MainFooter";
const index = () => {
  return (
    <div className="   min-h-screen ">
      <div className="">
        <Header />
      </div>
      <div style={{ minHeight: "80.65vh" }}>
        <Content />
      </div>
      <div className="">
        <MainFooter />
        <Footer />
      </div>
    </div>
  );
};

export default index;
