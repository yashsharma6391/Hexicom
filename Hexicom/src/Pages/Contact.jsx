import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "../Component/Sidebar/Sidebar";
import { contactItems } from "./ContactData";


const Contact = ({ sidebar, setSidebarfunc }) => {
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
    <div className="contact_page">
     
      <Sidebar sidebar={sidebar} />
      <div className="contact" data-aos="fade-up">
        <h1>CONTACT INFORMATION</h1>
        <div className="contactdiv">
          {contactItems.map((item, ind)=>(
            <div className="Contact_info" key={ind}>
            <div className="info_icon">
             < item.icon className={item.iconClass}/>
            </div>
            <div className="info_name">{item.title}</div>
            <div className="details">{item.detailstitle}<a href={item.link}>{item.detailslink}</a></div>
          </div>
          ))}
      
        </div>
      </div>
    </div>
 
  );
};

export default Contact;
