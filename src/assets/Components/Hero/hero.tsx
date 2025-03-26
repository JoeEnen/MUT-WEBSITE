import React from "react";
import "../Hero/hero.css";

const Hero: React.FC = () => {
  return (
   
    <div className="heroSection">
        <video autoPlay loop muted className="heroVideo">
        <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
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
