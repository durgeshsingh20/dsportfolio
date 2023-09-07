import React, { useState } from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from "../../assets/menu.png";


const Navbar = () => {
  const [showMenu, setshowMenu] = useState(false);
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="imagelogo" />
      <div className="desktopMenu">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-59}
          duration={500}
          className="desktopMenuListItem"
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contactpage"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="desktopMenuListItem"
        >
          Contact Me
        </Link>

        <a href="https://drive.google.com/file/d/1ZvM6YdQbuSPvM-PbpM1iff1jhcbKPI6I/view?usp=sharing" className="desktopMenuListItem">Resume</a>

        
      </div>

{/* botton */}
      {/* <button
        className="desktopMenuBtn"
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <img src={contactImg} alt="" className="desktopMenuImg" />
        contact Me
      </button> */}

      


      {/* burger menu */}

      

      <img src={menu} alt="menu" className="mobmenu" onClick={() => setshowMenu(!showMenu)} />
      <div className="navMenu" style={{display : showMenu?'flex':'none'}}>
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="ListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-59}
          duration={500}
          className="ListItem"
        >
          About Us
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
        >
          Skills
        </Link>
        <Link
          activeClass="active"
          to="contactpage"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="ListItem"
        >
          Contact Me
        </Link>

        <a href="https://drive.google.com/file/d/1ZvM6YdQbuSPvM-PbpM1iff1jhcbKPI6I/view?usp=sharing" className="ListItem">Resume</a>

        
      </div>
    </nav>
  );
};

export default Navbar;
