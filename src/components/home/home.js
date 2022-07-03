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
        <h1> TO DO: embed figma designs, Make sure everything reads nice, refrence correctly, Introduction, Conclusion, Deoply to GitHub</h1>
        <h1> Login Form</h1>
        <ol className="list">
          <li className="item">
            <h2> Research</h2>
            <span>
              The login form component aims to offer a design solution to the regular mouse hovering technique by adding a gradient color animation to each section of the login form so that the user can see where they are in a simple, unique and design-friendly way.
              When designing the component, I focused on simplicity. Originally, I wanted to design a component that would incorporate the feature of telling the user if their account details were correct/incorrect.
              A modern design of this is the apple login feature which in where your avatar will shake its head if your details are wrong.
              With this feature in mind, I decided that the login screen will show an animated cross if wrong or tick if correct. In practice I found that this design choice didn’t work well and was more confusing to a user than a solution to help fix the problem of webpage space.
            </span>
          </li>
          <li className="item">
            <h2>Figma Design</h2>
            <span>
              Link to Figma Design.
              https://www.figma.com/developers/embed
            </span>
          </li>
          <li className="item">
            <h2>Prototype</h2>
            <span>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KOx20-xrq-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
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
              The Checkbox component is a simple react component that uses states to control the current method it is in.
              By controlling the state through code by using the “useState” hook that React offers, each state can offer a value. For example, I have used the useState hook to represent a Light and Dark theme option which will change the CSS values.
              The light and dark theme option is becoming more popular as a standard for every product/ website within the industry as it gives users a more comfortable feel.
              Something that must be considered when using light/dark mode is if its relevant to the app/website.
              The problem with adding a different view feature is that it requires more work in design and for elements such as reading text black text on a white background is more readable.
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
            <span>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KOx20-xrq-Q?start=27" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
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
              The Image Slider or Carousel component showcases how this element can be a useful method to save space on a webpage as well as highlight key features.
              https://vwo.com/blog/image-slider-alternatives/
              VWO demonstrates how image sliders can be used correctly and state that using an image slider to promote offers on your homepage is a good way to boost traffic and sales to your website.
              “Put your best foot forward. Let your most relevant offer catch the attention of your visitors.”
              When designing the image slider component, I focused on simplicity and added a text element to highlight the title of the image.
              A feature I discovered when designing the component was that if you use high-quality images, it can make the loading of the image take longer on the website, therefore the component example I have created uses simple block colors to showcase how it works.
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
            <span>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KOx20-xrq-Q?start=37" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
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
              The Modal or Popup component was achieved with simplicity in mind. When designing the component, I researched the method of how the component should be displayed.
              For example, standard popup messages that are shown when a website is loaded are widely considered disruptive to the user and can drive traffic away from the site.
              Drip supports this claim and suggests possible solutions, the one that caught my eye for design was to use popup messages which the user can click on and then they appear.
              For example, having a Modal at the bottom right of the screen as an Icon typically away from where the content is will give the option to the user if they want to see it or not.
              Another feature that I found interesting was to have a modal appear if the user has been on the website for a certain time or scrolled down to a specific section of the page.
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
            <span>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KOx20-xrq-Q?start=44" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
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
              When designing the Navigation of this website I first considered multiple designs. Since I wanted to keep consistency throughout the components, I thought about using a color theme and a design layout in which the navigation could uniquely showcase each component. The original design was meant to focus on being able to use the website without a need for a scroll or search method. In practice, I found it was challenging to design as a lot of the information on the website would have to be broken down into sections which would become challenging to keep track of.
              After testing the design in Figma I decided to produce the mechanic in a more traditional manner and just have the navigation at the top of the website which would be responsive to the size of the screen.
              It does this by using the hamburger method, which is the method of turning the list of items into one clickable item which can be selected to show each item on the list. This is showcased in the video below.
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
            <span>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/KOx20-xrq-Q?start=55" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
