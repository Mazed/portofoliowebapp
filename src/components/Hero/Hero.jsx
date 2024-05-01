import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section  id="home" className="hero-container">
      <div className="hero-content">
        <h2>Hi, I'm Omen</h2>
        <p>
          The href attribute requires a valid value to be accessible. Provide a
          valid, navigable address as the href value. If you cannot provide a
          valid href, but still need the element to resemble a link, use a
          button and change it with appropriate styles.
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img01.svg" alt="" />
          </div>
          <img src="./assets/images/img12.png" alt="" />
        </div>
        <div>
          <div className="tech-icon">
            <img src="./assets/images/img02.svg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img03.svg" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/img04.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
