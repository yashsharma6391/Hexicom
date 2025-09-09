import React, { useEffect } from "react";
import './Address.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from "../Component/Sidebar/Sidebar";

const Address = ({ sidebar, setSidebarfunc }) => {
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
    <div className="Address">
      <Sidebar sidebar={sidebar} />
      
      Address
    </div>
  );
};

export default Address;
