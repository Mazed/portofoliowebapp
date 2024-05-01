import React from "react";
import "./MobileNav.css";
import { Link } from "react-scroll";

const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div className={'mobile-menu ' + (isOpen ? 'active' : '')} onClick={() => toggleMenu()}>
        <div className="mobile-menu-container">
          <img className="logo" src="./assets/images/logo.png" alt="" />

          <ul>
          <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-item"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-item"
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="workexperience"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-item"
              >
                Work Experience
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="menu-item"
              >
                Contact Me
              </Link>
            </li>
            <button className="contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
