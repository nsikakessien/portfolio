import React from "react";
import "./portfolio.css";

const Item = ({ data }) => {
  return (
    <div className="content">
      <div className="image__cover">
        <img src={data.img} alt="site screenshot" />
      </div>
      <h5>{data.name}</h5>
      <h6>{data.description}</h6>
      <div className="button__wrapper">
        <a href={data.link} className="btn" target="_blank" rel="noreferrer">
          Live Demo
        </a>
        <a href={data.github} className="btn" target="_blank" rel="noreferrer">
          Github
        </a>
      </div>
    </div>
  );
};

export default Item;
