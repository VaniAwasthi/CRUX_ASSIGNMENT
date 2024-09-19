import React from "react";
import Navbar from "./navBar";
import HeroSection from "./sections/HeroSection";
import Footer from "./footer";
import BoostBusinessSection from "./sections/faq's/growth";
import LogoBanner from "./sections/logoBanner";
import Marketing from "./sections/marketing";
import Growth from "./sections/growthSection";
import SocialMedia from "./sections/socialMedia";
import BusinessNeed from "./sections/businessNeed";
import Portfolio from "./sections/Portfolio";

const MainPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <LogoBanner />
      <Marketing />
      <Growth />
      <SocialMedia />
      <BusinessNeed />
      <Portfolio />
      <BoostBusinessSection />
      <Footer />
    </>
  );
};

export default MainPage;
