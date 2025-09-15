import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "../Component/Sidebar/Sidebar";
import { AboutData } from "../AboutData";
const About = ({ sidebar, setSidebarfunc }) => {
  useEffect(() => {
    setSidebarfunc(false);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // run animation only once
    });
  }, []);
  return (
    <div className="About">
      <Sidebar sidebar={sidebar} />
      <div className="AboutCompany" data-aos="fade-up">
        <h1>ABOUT US</h1>

        <div className="profile_grid">
          {AboutData.map((item, ind) => (
            <div className="profile_detail" key={ind}>
              <div className="profile_logo">
                <img src={item.logo} alt="" />
              </div>
              <div className="profile_name">{item.profileName}</div>
              <div className="profile_details">{item.profileDetail}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
