import React, { Component } from "react";
import Navbar from "./Navbar";
import '../styles/About.css';
import team from '../images/undraw_engineering_team_a7n2.svg'

function About() {
  return (
    <>
      <Navbar />
      <div className="about-section">
      <p><h1>About me</h1></p>
      <img src={team}></img>
      </div>
    </>
  );
}

export default About;
