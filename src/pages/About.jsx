import React from 'react';
import Banner from '../components/Banner';
import AboutCompany from '../components/ForAbout/AboutCompany';
// import Feature from '../components/Feature';
import MainTeams from '../components/ForAbout/MainTeams';
import Testimonials from "../components/ForAbout/Testimonials";
import Steps from '../components/ForAbout/Steps';
import GetStart from '../components/GetStart';
import OurValue from '../components/ForAbout/OurValue';

const About = () => {
  return (
    <>
     <Banner title="About Us" />
     <AboutCompany />
     <OurValue />
     <MainTeams />
     <Steps />
     {/* <Feature /> */}
     <Testimonials />
     <GetStart /> 
    </>
  )
}

export default About