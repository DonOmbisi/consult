import React from "react";
import Hero from "../components/ForLanding/Hero";
import GetStart from "../components/GetStart";
import Service from "../components/ForLanding/Service";
import Feature from "../components/ForLanding/Feature";
import TeamsComp from "../components/TeamsComp";
import Leading from "../components/ForLanding/Leading";
import AboutComp from "../components/AboutComp";

const Landing = () => {
  return (
    <>
      <Hero />
      <Feature />
      <Service />
      <AboutComp />
      <Leading />
      <TeamsComp />
      <GetStart />
    </>
  );
};

export default Landing;
