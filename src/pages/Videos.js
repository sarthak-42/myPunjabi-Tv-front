import React from "react";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuIcon from "@mui/icons-material/Menu";
import rightIcon from "../assets/images/right-icon01.png";
import leftIcon from "../assets/images/left-icon01.png";
import thumb1 from "../assets/images/youtube-banner.png";
import thumb2 from "../assets/images/news11.avif";
import "../style/style.css";

const styles = {
   videoItem: {
     width: '25%', // Adjust based on the number of videos you want to display per row
     padding: '0 15px', // Add some padding if necessary
     boxSizing: 'border-box' // Ensure padding doesn't increase item width
   }
 };
 

const Videos = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);
  //   const handleNext = () => {
  //    if (sliderRef1.current && sliderRef2.current) {
  //      sliderRef1.current.slickNext(); // Go to next slide for sliderRef1
  //      sliderRef2.current.slickNext(); // Go to next slide for sliderRef2
  //    }
  //  };
  const handleNext = () => {
    if (nav1 && nav2 && nav3) {
      nav1.slickNext(); // Go to next slide for nav1
      nav2.slickNext(); // Go to next slide for nav2
      nav3.slickNext(); // Go to next slide for nav3
    }
  };

  const handlePrev = () => {
    if (nav1 && nav2 && nav3 ) {
      nav1.slickPrev(); // Go to previous slide for nav1
      nav2.slickPrev(); // Go to previous slide for nav2
      nav3.slickPrev(); // Go to previous slide for nav3
    }
  };

  //  const handlePrev = () => {
  //    if (sliderRef1.current && sliderRef2.current) {
  //      sliderRef1.current.slickPrev(); // Go to previous slide for sliderRef1
  //      sliderRef2.current.slickPrev(); // Go to previous slide for sliderRef2
  //    }
  //  };
  //  const settings = {
  //    dots: false,
  //    arrows: false,
  //    infinite: true,
  //    speed: 500,
  //    slidesToShow: 1,
  //    slidesToScroll: 1

  //  };
  useEffect(() => {
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
    setNav3(slider3Ref.current);
  }, []);
  return (
    <div>
      <section>
        <div className="live-news features Our-Show">
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <ul className="p-0">
                  <li>
                    <MenuIcon
                      style={{
                        color: "red",
                        marginRight: "10px",
                        marginBottom: "2px",
                      }}
                    />{" "}
                    <strong
                      style={{ fontSize: "18px", textTransform: "uppercase" }}
                    >
                      {" "}
                      Our Show{" "}
                    </strong>{" "}
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="youtube-video-slider position-relative">
                      {/* <Slider ref={sliderRef1} {...settings}> */}
                      <Slider asNavFor={nav2} ref={slider1Ref} arrows={false}>
                        {[...Array(6)].map((_, index) => (
                         <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', overflow: 'hidden' }}>


                            <iframe
                              // width=""
                              // height="315"
                              src="https://www.youtube.com/embed/tiYeQTkurME?si=PXKaHZz-9bm6KSr4"
                              title="YouTube video player"
                              frameborder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowfullscreen
                               width= '100%'
                                height= '480px' 
                              ></iframe>
                            {/* <img className="w-100" src={thumb1} alt="" /> */}
                          </div>
                        ))}
                      </Slider>
                      {/* <div>
                       
                      </div> */}
                      {/* <div>
                        <img className="w-100" src={thumb1} alt="" />
                      </div> */}
                      {/* </Slider> */}
                      <div className="next-pre-btn">
                        <img src={rightIcon} alt="" onClick={handleNext} />
                        <img src={leftIcon} alt="" onClick={handlePrev} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                  <Slider asNavFor={nav1} ref={slider3Ref} arrows={false}>
                  {[...Array(6)].map((_, index) => (
                    <div className="bottom-caption">
                     
                      <h2>
                        Welcome To The Best Model Winner Contest At Look of the
                        year
                      </h2>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        sed do eiusmod ipsum dolor sit. Lorem ipsum dolor sit
                        amet consectetur adipisicing elit sed do eiusmod ipsum
                        dolor sit. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit sed do eiusmod ipsum dolor sit lorem
                        ipsum dolor sit.
                      </p>
                    </div>
                          ))}
                          </Slider>
                  </div>

                  <div className="col-sm-6" style={{ textAlign: "right" }}>
                    <ul className="youtube-videos">
                      {/* <Slider ref={sliderRef2} {...settings}> */}
                      <Slider
                        arrows={false}
                        asNavFor={nav1}
                        ref={slider2Ref}
                        slidesToShow={4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                      >
                        {[...Array(6)].map((_, index) => (
                          <div key={index} style={styles.videoItem}>
                            {/* <h3>{index + 1}</h3> */}
                            <li>
        <div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
          <iframe
            src="https://www.youtube.com/embed/tiYeQTkurME?si=PXKaHZz-9bm6KSr4"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
        <p>Welcotme To The Best Model Winner Contest </p>
      </li>
                          </div>
                        ))}
                      </Slider>
                      {/* </Slider> */}
                      {/* <li>
                        <img className="w-100" src={thumb2} alt="" />
                        <p>Welcotme To The Best Model Winner Contest 2</p>
                      </li>
                      <li>
                        <img className="w-100" src={thumb2} alt="" />
                        <p>Welcotme To The Best Model Winner Contest 3</p>
                      </li> */}
                      {/* </Slider> */}
                      <li>
                        {/* <Slider ref={sliderRef2} {...settings}> */}
                        {/* <img className="w-100" src={thumb2} alt=""/>
                                 <p>Welcotme To The Best Model Winner Contest</p> */}
                        {/* </Slider> */}
                      </li>
                    </ul>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-sm-6">
                    <span className="cursor-pointer-div">
                      <video
                        className="rounded"
                        width="100%"
                        height=""
                        autoplay=""
                        muted=""
                      >
                        <source src="img/our-show-video.mp4" type="video/mp4" />
                      </video>
                      <h4 className="py-2">
                        What to stream this week: ‘Society of the Snow,’ ‘Night
                        Court,’ ‘Good Grief’`
                      </h4>
                      <p className="py-2">
                        This week’s new streaming entertainment releases include
                        Dan Levy’s directorial debut, the return of NBC’s
                        rebooted “Night Court” for its second season and new
                        game shows on Fox. rebooted “Night Court” for its second
                        season and new game shows on Fox.
                      </p>
                    </span>
                    <span className="latest-news mb-4">
                      Updated 10:32 AM, December 22, 2023
                    </span>
                  </div>
                  <div className="col-sm-6">
                    <div className="row">
                      <div className="col-sm-6">
                        <span className="cursor-pointer-div">
                          <video
                            className="rounded"
                            width="100%"
                            height=""
                            autoplay=""
                            muted=""
                          >
                            <source src="img/news.mp4" type="video/mp4" />
                          </video>
                          <h5 className="py-3 mb-1">
                            What’s streaming now: Bradley Cooper conducts, Lidia
                            Bastianich cooks and Percy Jackson quests
                          </h5>
                        </span>
                        <span className="latest-news mb-4">
                          Updated 10:32 AM, December 22, 2023
                        </span>
                      </div>
                      <div className="col-sm-6">
                        <span className="cursor-pointer-div">
                          <video
                            className="rounded"
                            width="100%"
                            height=""
                            autoplay=""
                            muted=""
                          >
                            <source src="img/news.mp4" type="video/mp4" />
                          </video>
                          <h5 className="py-3 mb-1">
                            What’s streaming now: Bradley Cooper conducts, Lidia
                            Bastianich cooks and Percy Jackson quests
                          </h5>
                        </span>
                        <span className="latest-news mb-4">
                          Updated 10:32 AM, December 22, 2023
                        </span>
                      </div>
                      <div className="col-sm-6">
                        <span className="cursor-pointer-div">
                          <video
                            className="rounded"
                            width="100%"
                            height=""
                            autoplay=""
                            muted=""
                          >
                            <source src="img/news.mp4" type="video/mp4" />
                          </video>
                          <h5 className="py-3 mb-1">
                            What’s streaming now: Bradley Cooper conducts, Lidia
                            Bastianich cooks and Percy Jackson quests
                          </h5>
                        </span>
                        <span className="latest-news mb-4">
                          Updated 10:32 AM, December 22, 2023
                        </span>
                      </div>
                      <div className="col-sm-6">
                        <span className="cursor-pointer-div">
                          <video
                            className="rounded"
                            width="100%"
                            height=""
                            autoplay=""
                            muted=""
                          >
                            <source src="img/news.mp4" type="video/mp4" />
                          </video>
                          <h5 className="py-3 mb-1">
                            What’s streaming now: Bradley Cooper conducts, Lidia
                            Bastianich cooks and Percy Jackson quests
                          </h5>
                        </span>
                        <span className="latest-news mb-4">
                          Updated 10:32 AM, December 22, 2023
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="news-blog mt-5">
                  <div className="row">
                    <div className="col-md-4">
                      <img src="img/latest-video1.jpg" alt="" />
                    </div>
                    <div className="col-md-8">
                      <h3>
                        Bhagwant Mann lashes out at Centre for rejecting
                        Punjab's tableau for Republic Day
                      </h3>
                      <p>
                        In the State of Punjab, Hon’ble Justice Ravi Shanker
                        Jha, Chief Justice of Punjab & Haryana High Court &
                        Patron-in-Chief of Punjab State Legal Services
                        Authority, today virtually inaugurated the offices of
                        “Legal Aid Defense Counsel System” in 14 District Legal
                        Services Authorities of Punjab.
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="col-md-4">
                      <img src="img/latest-video3.jpg" alt="" />
                    </div>
                    <div className="col-md-8">
                      <h3>
                        Bhagwant Mann lashes out at Centre for rejecting
                        Punjab's tableau for Republic Day
                      </h3>
                      <p>
                        In the State of Punjab, Hon’ble Justice Ravi Shanker
                        Jha, Chief Justice of Punjab & Haryana High Court &
                        Patron-in-Chief of Punjab State Legal Services
                        Authority, today virtually inaugurated the offices of
                        “Legal Aid Defense Counsel System” in 14 District Legal
                        Services Authorities of Punjab.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Videos;
