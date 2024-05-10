import React from "react";
import Navbars from "../NavBars/Navbars";
import Header from "../Headers/Header";
import MidSection from "../MidSection/MidSection";
import ImageRoot from "../MidSection/ImageRoot";
import CardsTab from "../MidSection/CardsTab";
import NavTaber from "../MidSection/NavTaber";
import CardsSection from "../MidSection/CardsSection";
import Footer from "../Footers/Footer";
import MobileNav from "../NavBars/MobileNav";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Navbars />
      <Header />
      <MidSection />
      <CardsTab />
      <NavTaber />
      <ImageRoot />
      <CardsSection />
      <Footer />
    </div>
  );
};

export default Home;
