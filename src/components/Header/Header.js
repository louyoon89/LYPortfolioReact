import React from "react";
import "./Header.css";
import CvURL from "./istockphoto-1226588286-612x612.jpg";

function Header() {
  return (
    <header className="mainpagepic" title="mainpagepic">
      <button className="cv-btn" id="piccap"><a href={CvURL} target="_blank" rel="noreferrer">
              Resume
            </a></button>
    </header>
  );
}

export default Header;