import React from "react";
import Hero from "../components/ForLanding/Hero";
import GetStart from "../components/GetStart";
import Service from "../components/ForLanding/Service";
import Feature from "../components/ForLanding/Feature";
import OurProjects from "../components/ForLanding/OurProjects";
import WhyChooseUs from "../components/ForLanding/WhyChooseUs";
import AboutComp from "../components/AboutComp";
import CEOMessage from "../components/ForLanding/CEOMessage";
import Testimonials from "../components/ForLanding/Testimonials";

const Landing = () => {
  return (
    <>
      <Hero />
      <Feature />
      <AboutComp />
      <CEOMessage />
      <Service />
      <OurProjects />
      <WhyChooseUs />
      <Testimonials />
      <GetStart />
    </>
  );
};

export default Landing;
