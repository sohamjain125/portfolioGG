import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="bg-sky-900 text-xs text-center p-5">
      <Link to="hero" smooth spy offset={-80} className="cursor-pointer">
        Soham Jain | Portfolio
      </Link>
    </div>
  );
};

export default Footer;
