import React from "react";
import "./portfolio.css";
import { list } from "./list";
import Item from "./Item";

const Portfolio = () => {
  return (
    <div className="portfolio__section" id="portfolio">
      <div className="portfolio__container">
        <h2>My Work</h2>
        <div className="flex">
          {list.map((item) => (
            <Item key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
