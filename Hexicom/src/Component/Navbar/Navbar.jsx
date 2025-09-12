import React from "react";
import "./Navbar.css";
import NavbarLogo from "./NavbarLogo";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";
import { FiX } from "react-icons/fi";
import Sidebar from "../Sidebar/Sidebar";
import NavLogo from "./NavLogo";

const Navbar = ({setSidebarfunc, sidebar}) => {
  const NavMenu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    // { name: "Address", path: "/address" },
    // { name: "Services", path: "/services" },
    //  {name: "Home"},
    //  {name: "Home"},
  ];
  const sidebarfunc = () => {
    setSidebarfunc(!sidebar)
  };
  return (
    <div className="navbar">
      <div className="nav_logo">
        {/*<NavbarLogo />*/}
        <NavLogo/>
      </div>
      <div className="nav_menu">
        {NavMenu.map((item, index) => {
          return (
            <Link className="nav_menu_item" key={index} to={item.path}>
              {item.name}
            </Link>
          );
        })}
      </div>
      {/* -------mobile menu----- */}
      <div className="mobile_menu">
       {!sidebar&& <div className="mobile_menu_open" onClick={sidebarfunc}>
          <TfiMenu  />
        </div>}
        {sidebar && <div className="mobile_menu_close" onClick={sidebarfunc}>
          <FiX />
        </div>}
        
      </div>
    </div>
  );
};

export default Navbar;
