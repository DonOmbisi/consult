import React from "react";
import Banner from "../components/Banner";
import Team from "../data/teams.json";
import { LiaFacebookF } from "react-icons/lia";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import GetStart from "../components/GetStart";

const Teams = () => {
  return (
    <>
      <Banner title="QUALITY ASSURANCE LABORATORY LTD." />

      <div>
        <div className="text-center py-20 px-4 md:px-0">
          <h3 className="text-sm font-bold uppercase">Meet our Partner</h3>
          <h2 className="text-4xl font-bold pt-3 pb-5">People next to Us</h2>
          <p className="md:w-[40%] mx-auto">
            State-of-the-art Non destructive testing and geotechnical soils investigation.
          </p>
          {/* Added link here */}
          <a 
            href="https://drive.google.com/file/d/16wcQaDH2l-VVGH81z4qAN4iVN-Hjg2aY/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            PDF Document
          </a>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-3 gap-7 pb-24 px-4 md:px-0">
          {Team.map((items, index) => (
            <div key={index}>
              <img src={items.image} alt={items.name} className="aspect-[2/2] w-full object-cover object-top rounded-lg" />

              <div className="md:flex items-center justify-between py-4 px-1 space-y-3 md:space-y-0">
                <div>
                  <h2 className="text-xl font-bold pb-px">{items.name}</h2>
                  <p className="uppercase text-sm">{items.jobTitle}</p>
                </div>

                <div>
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <GetStart />
    </>
  );
};

export default Teams;