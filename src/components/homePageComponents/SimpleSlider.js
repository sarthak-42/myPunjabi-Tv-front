import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import log1 from "../../assets/images/logo1.jpg";
import log2 from "../../assets/images/logo2.jpg";
import log3 from "../../assets/images/logo3.jpg";
import log4 from "../../assets/images/logo4.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
const SimpleSlider = () => {
  const slickSettings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 2000,
    dots: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className=" container">
          <div className="row">
      <div className="col-sm-12">
        <Slider {...slickSettings}>
          <img src={log1} alt="img" className="px-2"/>
          <img src={log2} alt="img" className="px-2"/>
          <img src={log3} alt="img" className="px-2"/>
          <img src={log4} alt="img" className="px-2"/>
          <img src={log3} alt="img" className="px-2"/>
          <img src={log2} alt="img" className="px-2"/>
          <img src={log1} alt="img" className="px-2"/>
        </Slider>
      </div>

          </div>
    </div>
  );
};

export default SimpleSlider;
