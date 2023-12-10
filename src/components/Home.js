import React from "react";
import { name, city } from "../data/data.js";

const firebrickColor = "#B22222"

const divStyle = {
  backgroundColor: firebrickColor,
}

function Home() {
  // update the JSX being returned!
  return <div id="home">
    <h1 style={divStyle}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
