import React from "react";
import Links from "./Links";

function About({bio,links}) {

  function aboutBio() {
    if(!bio || bio === "") {
      return null
    } else {
      return <p className="biolink"> {bio}</p>
    }
  }


  return (
    <div id="about">
      <h2>About Me</h2>
      {aboutBio()}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={links.github}  linkedin={links.linkedin} />

    </div>
  );
}


export default About;
