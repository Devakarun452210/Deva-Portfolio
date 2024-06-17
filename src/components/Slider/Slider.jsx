// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Slider.css";
import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import img1 from "../../assets/Banner-1.png";
import img2 from "../../assets/Banner-2.png";

// Assuming you have multiple resolutions of the images

const Slider = () => {
  return (
    <div className="sliderContainer">
      <div className="textOverlay">{/* <h1>PRODUCT DESIGN</h1> */}</div>
      <div className="slider">
        <ReactCompareSlider
          className="ReactSlider"
          itemOne={
            <ReactCompareSliderImage
              src={img1}
              // srcSet={img1SrcSet}
              alt="Image one"
            />
          }
          itemTwo={
            <ReactCompareSliderImage
              src={img2}
              // srcSet={img2SrcSet}
              alt="Image two"
            />
          }
        />
      </div>
    </div>
  );
};

export default Slider;
