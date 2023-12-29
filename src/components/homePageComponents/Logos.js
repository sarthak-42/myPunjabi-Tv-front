import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import '../../style/style.css'
// import Slider from "react-slick";
import { useLanguage } from "../../utils/LanguageContext";
import SimpleSlider from "./SimpleSlider";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import log1 from "../../assets/images/logo1.jpg";
// import log2 from "../../assets/images/logo2.jpg";
// import log3 from "../../assets/images/logo3.jpg";
// import log4 from "../../assets/images/logo4.jpg";
// import '../../slick/slick'

// const slickSettings = {
//     slidesToShow: 5,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 1000,
//     speed: 2000,
//     dots: false,
//     arrows: false,
//     responsive: [
//       {
//         breakpoint: 1199,
//         settings: {
//           slidesToShow: 5,
//         },
//       },
//       {
//         breakpoint: 991,
//         settings: {
//           slidesToShow: 4,
//         },
//       },
//       {
//         breakpoint: 767,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 400,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//     ],
//   };
//   prevArrow: <i className="slick-prev fa fa-angle-left"></i>,
//   nextArrow: <i className="slick-next fa fa-angle-right"></i>,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 3,
//       },
//     },
//     {
//       breakpoint: 520,
//       settings: {
//         slidesToShow: 2,
//       },
//     },
//   ],
// };

// const settings = {
//     dots: false,
//     infinite: true,
//     autoplay: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };
const Logos = () => {
  const { translate } = useLanguage();
  return (
    <>
      <section className="slider-sections trigger section gutter-horizontal bg-gray gutter-vertical--m gutter-horizontal">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <div className="section-title text-center">
                <h3>{translate('logoSectionHeading')}</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit sed
                  eiusmod tempor incididunt labore dolore magna aliqua.enim
                  dolore magna aliqua.
                  <br />
                  ad minim veniam.quis
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="customer-logos ">
                <SimpleSlider/>
              {/* <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel"> */}
  {/* <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={log1} class="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={log2} class="d-block " alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={log3} class="d-block " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button> */}
{/* </div> */}
                {/* <Slider {...slickSettings}>
                  
                  <div>
                    <img src={log1} alt="logo1" />
                  </div>
                  <div>
                    <img src={log2} alt="logo2" />
                  </div>
                  <div>
                    <img src={log3} alt="logo2" />
                  </div>
                  <div>
                    <img src={log4} alt="logo2" />
                  </div>
        
                </Slider> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Logos;
