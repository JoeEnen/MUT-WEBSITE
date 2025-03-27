import React from "react";
import "../Hero/hero.css";
import herovid from "../../images/herovid.mp4"

const Hero: React.FC = () => {
  return (
   
    <div className="heroSection">
      <video autoPlay loop muted className="heroVideo">
        <source src={herovid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    <div className="heroOverlay">
      <h1>Welcome to MUTC</h1>
      <p>Empowering the next generation of tech leaders</p>
    </div>
  </div>
    );
};

export default Hero;
