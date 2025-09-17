import React, { useRef, useState } from "react";
import React from "react";
import { useEffect } from "react";
import "./Service.css";
import Sidebar from "../Component/Sidebar/Sidebar";
import AOS from "aos";
import "aos/dist/aos.css";
import { ServicesData } from "./ServicesData";

const Service = ({ sidebar, setSidebarfunc }) => {
  const refs = useRef([]);
  const [visible, setVisible] = useState([]);
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // run animation only once
    });
  }, []);
  useEffect(() => {
    setSidebarfunc(false);
  }, []);
    useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.dataset.index);
            setVisible((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
            observer.unobserve(entry.target); 
          }
        });
      },
      { threshold: 0.2 }
    );

    refs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
    <div className="services_page">
      <Sidebar sidebar={sidebar} />
      <div className="services_container" data-aos="fade-up">
        <div className="service_content">
          <h1>OUR SERVICES</h1>
          <div className="service_para">
            <p>
              At H£XICOM, we provide end-to-end, future-ready solutions across
              technology, infrastructure, energy, and manpower. Acting as your
              single-window partner, we take complete responsibility — from
              concept and design to execution, operations, and maintenance. Our
              diverse portfolio empowers businesses and institutions with
              integrated, turnkey solutions that drive efficiency, reliability,
              and sustainable growth
            </p>
          </div>
          <div className="service_grid">
            {ServicesData.map((category, ind) => (
              <div    className={`single_service_card ${
                  visible.includes(ind) ? "in-view" : ""
                }`}
                key={ind}
                data-index={ind}
                ref={(el) => (refs.current[ind] = el)}>
                <div className="service_logo">
                  <img src={category.Image} alt="" />
                </div>
                <div className="service_name">{category.ServiceName}</div>
                <div className="service_type">
                 {category.ServiceType}
                </div>
                <div className="services_details">
                  <h3>Services:</h3>
                  <div className="service_detail_list">
                    <ul>
                      {category.ServivceDetails.map((list, i)=>(
                        <li key={i}>
                        {list}
                      </li>
                      ))}
                      
                    </ul>
                  </div>
                </div>
              </div>
            ))}

           
          </div>
          <div className="why_choose_hexicom">
            <h1>Why Choose H£XICOM</h1>
            <div className="points">
              <ul>
                <li>One Partner – All Solutions: Technology, infrastructure & manpower under one roof</li>
                <li>End-to-End Expertise: From concept to commissioning, operations & O&M</li>
                <li>Future-Ready Focus: Strong presence in e-mobility, renewables & smart infrastructure</li>
                <li>Trusted Delivery: Proven track record with complex, large-scale projects</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;


