import React, { useEffect } from 'react'
import './About.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from '../Component/Sidebar/Sidebar';
const About = ({sidebar, setSidebarfunc}) => {
     useEffect(()=>{
            setSidebarfunc(false);
          },[])
           useEffect(() => {
              AOS.init({
                duration: 1000, // animation duration in ms
                once: true, // run animation only once
              });
            }, []);
  return (
    <div className='About'>
        <Sidebar sidebar={sidebar}/>
        <div className="AboutCompany" data-aos="fade-up">
            <h1>ABOUT US</h1>
            <div className="profile_grid">
                <div className="profile_detail1">Group Business Name</div>
                <div className="profile_detail2">HEXICOM INFRASTRUCTURES INDIA PVT. LTD.</div>
                <div className="profile_detail3">Year of Establishment</div>
                <div className="profile_detail4">2025</div>
                <div className="profile_detail5">Legal Entity Status</div>
                <div className="profile_detail6">Private Limited – Company Limited by shares.</div>

                <div className="profile_detail7">Main Area of Activities of Business</div>
                <div className="profile_detail8">Nationwide Regions including Union Territories</div>
                <div className="profile_detail9">Company Business Industry Type</div>
                <div className="profile_detail10">Services of - IT-Telcom | Electrical & Automation | FTTH - GPON Infra | Solar EPC | Civil Infrastructure | Satcom Services | CCTV & Surveillance | Manpower Outsourcing | Facility Management  </div>
                <div className="profile_detail11">Registered Office Address </div>
                <div className="profile_detail12">Plot No 59, Upadhyay, Khair, Aligarh- 202138, Uttar Pradesh</div>
                <div className="profile_detail13">Corporate Office Address </div>
                <div className="profile_detail14">A-6 / 2209 Hebitech Panchtatva, Tech Zone IV, Amrapali Dream Valley, Greater Noida west Gautam Buddha Nagar, Uttar Pradesh 201009</div>
            </div>
        </div>
    </div>
  )
}

export default About
