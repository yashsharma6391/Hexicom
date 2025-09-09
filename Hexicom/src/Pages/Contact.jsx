import React, { useEffect } from 'react'
import './Contact.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Sidebar from '../Component/Sidebar/Sidebar';
const Contact = ({sidebar, setSidebarfunc}) => {
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
    <div className='Contact'>
        <Sidebar sidebar={sidebar}/>
        <div className="contact_info" data-aos="fade-up">
            {/* <h1>CONTACT INFORMATION</h1> */}
            
             <h1>CONTACT INFORMATION</h1>
             <div className="contact_info_grid">
                <div className="contact_details">Phone</div>
                <div className="contact_details">+91-1204177091</div>
                <div className="contact_details">Business enquiry email </div>
                <div className="contact_details"><a href="">business@hexicom.in</a></div>
                <div className="contact_details">Website</div>
                <div className="contact_details"> <a href="">www.hexicom.in</a></div>
                <div className="contact_details">Contact Parson Directorate </div>
                <div className="contact_details">Mr. Dheeraj Sharma | Mob 9990393219 | <a href="">Dheeraj@hexicom.in</a></div>
                <div className="contact_details">Contact Parson Directorate alternate</div>
                <div className="contact_details">Mrs. Neetu Sharma | 9694430025 |  <a href="">Neetu@hexicom.in</a></div>
             </div>
            
        </div>

    </div>
  )
}

export default Contact