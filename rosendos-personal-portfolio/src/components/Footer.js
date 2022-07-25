import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "../styles/Footer.css";
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://github.com/rvasquez25/personal-projects" target="blank">
            <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/rosendo-vasquez-ii-0b271519b" target="blank">
            <FontAwesomeIcon icon={faLinkedin} />
        </a>
        {/* <a href="rosendovasquez915@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
      </div>
      <p> &copy; 2022 rosendo.com</p>
    </div>
  );
}

export default Footer;