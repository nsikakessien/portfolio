import React from "react";
import "./about.css";
import CV from "../../assets/CV.pdf";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as ReactIcon } from "../../assets/rn.svg";
import { ReactComponent as Rn } from "../../assets/rn1.svg";
import { ReactComponent as StyleC } from "../../assets/sc.svg";
import { ReactComponent as Tail } from "../../assets/tcss.svg";
import { ReactComponent as Javascript } from "../../assets/js.svg";
import { ReactComponent as Typescript } from "../../assets/ts.svg";
import { ReactComponent as Git } from "../../assets/git.svg";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__wrapper">
        <div className="left__side">
          <h2>About Me</h2>
          <p>
            Hi there, i am Nsikak Imeh-Essien, a Front-end developer with a
            passion for responsive website design. i am learning new skills and
            having a little fun on my way to Full stack development.
          </p>
          <a href={CV} download className="btn">
            Download CV
          </a>
        </div>
        <div className="right__side">
          <h2>Skills</h2>
          <div className="skills">
            <Html />
            <Css />
            <Javascript />
            <ReactIcon />
            <StyleC />
            <Tail />
            <Rn />
            <Typescript />
            <Git />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
