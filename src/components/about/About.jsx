import React from "react";
import "./about.css";
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
            Hi, I'm Nsikak Essien — a frontend developer passionate about
            building responsive, user-friendly web interfaces. I specialize in
            React, TypeScript, and modern UI libraries to create clean,
            accessible, and scalable web applications.
          </p>
          <a
            href="https://drive.google.com/file/d/1D_LH1jjVq_yjb5A0en0msMMp1M-SpR1L/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
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
