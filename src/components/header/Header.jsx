import React from "react";
import "./header.css";
import MyPicture from "../../assets/graph.jpg";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IconContext } from "react-icons";

const Header = () => {
  return (
    <header id="header">
      <div className="header__container">
        <div className="message">
          <div className="text__cover">
            <h3 className="intro">Hi, I am</h3>
            <h1 className="name">Nsikak Essien</h1>
            <h3 className="job">and i am a Front-end Developer</h3>
            <a
              href="https://drive.google.com/file/d/1D_LH1jjVq_yjb5A0en0msMMp1M-SpR1L/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              View Resume
            </a>
          </div>
          <p>Let's Talk:</p>
          <div className="contact">
            <a
              href="https://www.linkedin.com/in/nsikak-imeh-essien-1ba609193/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider
                value={{ size: "20px", className: "icon", color: "#9a85fc" }}
              >
                <BsLinkedin />
              </IconContext.Provider>
            </a>
            <a
              href="https://github.com/nsikakessien"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider
                value={{ size: "20px", className: "icon", color: "#9a85fc" }}
              >
                <FaGithub />
              </IconContext.Provider>
            </a>
            <a href="mailto: nsikakessien66@gmail.com">
              <IconContext.Provider value={{ size: "20px", color: "#9a85fc" }}>
                <AiOutlineMail />
              </IconContext.Provider>
            </a>
          </div>
        </div>
        <div className="image__div">
          <div className="image__wrapper">
            <img src={MyPicture} alt="" />
          </div>
          {/* <div className="box"></div> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
