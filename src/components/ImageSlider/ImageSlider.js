import React from "react";
import './ImageSlider.css'
import Carousel from "./Carousel";

const ImageSlider = () => {
  return (
    <div className="App">
      <header><h1 id="title">Interaction Design Components</h1> <h2 id="subTitle">Image Slider</h2></header>
      <Carousel />
    </div>
  );
}

export default ImageSlider;
