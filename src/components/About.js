import React from "react";
import { image } from "../data/data";

function About() {
  return <div id="about">
    <h2>About Me</h2>
    <p>All you need to know is I am actively working on being part of the builders of the next industries which I am certain 
      are going to be digital. Watch this space.
    </p>
    <img src={image} alt="I made this"/>
  </div>;
}

export default About;
