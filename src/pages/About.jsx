import React from 'react';
import Banner from '../components/Banner';
import AboutCompany from '../components/ForAbout/AboutCompany';
import Feature from '../components/Feature';
import MainTeams from '../components/ForAbout/MainTeams';
import Testimonials from "../components/ForAbout/Testimonials";
import AboutFeature from '../components/ForAbout/AboutFeature';
import GetStart from '../components/GetStart';

const About = () => {
  return (
    <>
     <Banner title="About Us" />
     <AboutCompany />
     <AboutFeature />
     {/* <Feature /> */}
     <MainTeams />
     <Testimonials />
     <GetStart /> 
    </>
  )
}

export default About