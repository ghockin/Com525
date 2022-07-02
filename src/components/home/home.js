/* Copyright 2022, Gabriel Hockin, All rights reserved. */

import React from "react";
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="about">
        <h2> Interaction Design</h2>
        <br />
        <br />
        <h2> Gabe Hockin</h2>
      </div>

      {/* Login form */}
      <div className="skills">
        <h1> Login Form</h1>
        <ol className="list">
          <li className="item">
            <h2> Research</h2>
            <span>
              Research into Component
            </span>
          </li>
          <li className="item">
            <h2>Design</h2>
            <span>
              Figma Design
            </span>
          </li>
          <li className="item">
            <h2>Prototype</h2>
            <span>Completed Component</span>
          </li>
        </ol>
      </div>

      {/* Checkbox */}
      <div className="skills">
        <h1> Checkbox</h1>
        <ol className="list">
          <li className="item">
            <h2> Research</h2>
            <span>
              Research into Component
            </span>
          </li>
          <li className="item">
            <h2>Design</h2>
            <span>
              Figma Design
            </span>
          </li>
          <li className="item">
            <h2>Prototype</h2>
            <span>Completed Component</span>
          </li>
        </ol>
      </div>

      {/* Image Slider */}
      <div className="skills">
        <h1> Image Slider</h1>
        <ol className="list">
          <li className="item">
            <h2> Research</h2>
            <span>
              Research into Component
            </span>
          </li>
          <li className="item">
            <h2>Design</h2>
            <span>
              Figma Design
            </span>
          </li>
          <li className="item">
            <h2>Prototype</h2>
            <span>Completed Component</span>
          </li>
        </ol>
      </div>

      {/* Modal */}
      <div className="skills">
        <h1> Modal</h1>
        <ol className="list">
          <li className="item">
            <h2> Research</h2>
            <span>
              Research into Component
            </span>
          </li>
          <li className="item">
            <h2>Design</h2>
            <span>
              Figma Design
            </span>
          </li>
          <li className="item">
            <h2>Prototype</h2>
            <span>Completed Component</span>
          </li>
        </ol>
      </div>

      {/* NavBar */}
      <div className="skills">
        <h1> Navigation Bar</h1>
        <ol className="list">
          <li className="item">
            <h2> Research</h2>
            <span>
              Research into Component
            </span>
          </li>
          <li className="item">
            <h2>Design</h2>
            <span>
              Figma Design
            </span>
          </li>
          <li className="item">
            <h2>Prototype</h2>
            <span>Completed Component</span>
          </li>
        </ol>
      </div>

    </div>
  );
}

export default Home;
