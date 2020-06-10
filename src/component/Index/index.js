import React from "react";
import Header from "../Header/";
import About from "../About";
import Info from "../Info";
import Team from "../Team";
import News from "../News";
import Contest from "../Contests";
import Pricing from "../Pricing";
import RoadMap from "../Map";
import Contact from "../Contact";
import Footer from "../Footer";
import Pay from "../Pay";
import Find from "../Find";
function Index() {
  return (
    <>
      <Header />
      <About />
      <Info />
      <Team />
      <News />
      <Contest />
      <Pay />
      <Find />
      <Pricing />
      <RoadMap />
      <Contact />
      <Footer />
    </>
  );
}

export default Index;
