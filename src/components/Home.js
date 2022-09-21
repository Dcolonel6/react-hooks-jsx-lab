import React from "react";
import { name, city } from "../data/data.js";

function Home() {
  // update the JSX being returned!
  const styleObj = {
    color : "firebrick"
  };
  
  return ( 
    <div id="home" style={styleObj}>
      <h1>
        {`${name} is a Web Developer from ${city}`}
      </h1>
    </div>
    );
}

export default Home;
