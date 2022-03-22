import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";



const Slider = () => {
  return (
    <Carousel className="main-slide">
      <div>
        <img src="../images/jordan12.webp" />
      </div>
      <div>
        <img src="../images/jordan11.webp" />
      </div>
      <div>
        <img src="../images/jordan2.jpeg" />
      </div>
    </Carousel>
  );
};

export default Slider;
