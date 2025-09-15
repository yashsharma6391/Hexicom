// src/data/contactData.js
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsGlobe } from "react-icons/bs";
import { IoPersonSharp } from "react-icons/io5";

export const contactItems = [
  {
    icon: FaPhoneAlt,
    title: "Phone",
    detailstitle: "+91-1204177091",
  },
  {
    icon: MdEmail,
    title: "Business enquiry email",
    detailstitle: "",
    detailslink:"business@hexicom.in",
    link: "",
  },
  {
    icon: BsGlobe,
    iconClass: "Globe",
    title: "Website",
    detailstitle: "",
    detailslink:"www.hexicom.in",
    link: "",
  },
  {
    icon: IoPersonSharp,
    title: "Contact Person Directorate",
    detailstitle: "Mr. Dheeraj Sharma | Mob 9990393219",
    detailslink:"Dheeraj@hexicom.in",
    link: "",
  },
  {
    icon: IoPersonSharp,
    title: "Contact Person Directorate alternate",
    detailstitle: "Mrs. Neetu Sharma | 9694430025",
    detailslink:"Neetu@hexicom.in",
    link: "",
  },
];
