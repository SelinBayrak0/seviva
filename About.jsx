import React from "react";

function About() {
  return (
    <div className="about">
      <div className="about-hero">
        <h1>SEVIVA</h1>
        <p>Timeless Jewelry for Modern Elegance</p>
      </div>

      <div className="about-content">
        <p>
          SEVIVA is a jewelry brand created for those who value elegance,
          simplicity, and individuality. Each piece is thoughtfully designed to
          complement modern lifestyles while maintaining a timeless appeal.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>✨ Modern Design</h3>
            <p>
              Clean lines and minimal aesthetics inspired by contemporary
              fashion.
            </p>
          </div>

          <div className="about-card">
            <h3>💎 Quality Materials</h3>
            <p>
              Carefully selected materials to ensure durability and refined
              beauty.
            </p>
          </div>

          <div className="about-card">
            <h3>🤍 Timeless Style</h3>
            <p>
              Jewelry designed to stay elegant beyond trends and seasons.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
