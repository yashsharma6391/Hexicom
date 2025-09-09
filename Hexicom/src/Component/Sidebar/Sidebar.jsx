import React from 'react'
import './Sidebar.css';
import { Link } from 'react-router-dom';
const Sidebar = ({sidebar}) => {

      const NavMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Address", path: "/address" },
    { name: "Services", path: "/services" },
    //  {name: "Home"},
    //  {name: "Home"},
  ];
  return (
    <div className={sidebar ? "Sidebar" : "sidebar_close"}>
        <div className="sidebar_items">
           {NavMenu.map((item, ind)=>(
            <Link className="sidebar_item" key={ind} to={item.path}>{item.name}</Link>
           ))} 
        </div>
    </div>
  )
}

export default Sidebar