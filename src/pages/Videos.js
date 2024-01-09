import React from "react";
import { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MenuIcon from "@mui/icons-material/Menu";
import rightIcon from "../assets/images/right-icon01.png";
import leftIcon from "../assets/images/left-icon01.png";
import axios from "axios";
import { useLanguage } from "../utils/LanguageContext";
import { Link } from "react-router-dom";

import "../style/style.css";

const styles = {
  videoItem: {
    width: "25%", // Adjust based on the number of videos you want to display per row
    padding: "0 15px", // Add some padding if necessary
    boxSizing: "border-box", // Ensure padding doesn't increase item width
  },
};

const Videos = () => {
  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const slider3Ref = useRef(null);

  const { language } = useLanguage();
  const [latestNews, setLatestNews] = useState([]);
  //   const [category, setCategory] = useState([]);

  const getLatestNews = async (lang) => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/api/news/getNews/${lang}`,
        config
      );
      console.log("News>>", response.data);
      setLatestNews(response.data);
    } catch (error) {
      console.log("Error fetching latest news", error);
    }
  };

  const handleNext = () => {
    if (nav1 && nav2 && nav3) {
      nav1.slickNext(); // Go to next slide for nav1
      nav2.slickNext(); // Go to next slide for nav2
      nav3.slickNext(); // Go to next slide for nav3
    }
  };

  const handlePrev = () => {
    if (nav1 && nav2 && nav3) {
      nav1.slickPrev(); // Go to previous slide for nav1
      nav2.slickPrev(); // Go to previous slide for nav2
      nav3.slickPrev(); // Go to previous slide for nav3
    }
  };

  useEffect(() => {
    getLatestNews(language);
    setNav1(slider1Ref.current);
    setNav2(slider2Ref.current);
    setNav3(slider3Ref.current);
  }, [language]);
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
                    />
                    <strong
                      style={{ fontSize: "18px", textTransform: "uppercase" }}
                    >
                      Our Show
                    </strong>
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="youtube-video-slider position-relative">
                      {/* <Slider ref={sliderRef1} {...settings}> */}
                      <Slider asNavFor={nav3} ref={slider1Ref} arrows={false}>
                        {latestNews.map(
                          (newsItem, index) =>
                            index < 6 && (
                              <div
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  paddingBottom: "56.25%",
                                  overflow: "hidden",
                                }}
                                key={newsItem._id}
                              >
                                <iframe
                                  // width=""
                                  // height="315"
                                  src={newsItem.videoUrl}
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen
                                  width="100%"
                                  height="480px"
                                ></iframe>
                                {/* <img className="w-100" src={thumb1} alt="" /> */}
                              </div>
                            )
                        )}
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
                    <Slider asNavFor={nav2} ref={slider3Ref} arrows={false}>
                      {latestNews.map(
                        (newsItem, index) =>
                          index < 6 && (
                            <div className="bottom-caption" key={newsItem._id}>
                              <Link
                                to={`/news/${newsItem._id}`}
                                style={{
                                  textDecoration: "none",
                                  color: "black",
                                }}
                              >
                                <h2>{newsItem.title}</h2>
                              </Link>

                              <p className="text-start">
          {newsItem.description.substring(0, 500)} {/* Truncate to 100 characters as an example */}
          {/* Display 'Read More' link to navigate to the full news article */}
          <Link 
            to={`/news/${newsItem._id}`} 
            style={{
              color: 'grey', 
              textDecoration: 'none',  // Remove underline
              cursor: 'pointer',
              marginLeft: '10px',  // Adding some space between the truncated text and the "Read More" link
              transition: 'color 0.3s',  // Smooth color transition on hover
            }}
            onMouseOver={(e) => { e.target.style.color = 'orange' }}  // Change color on hover
            onMouseOut={(e) => { e.target.style.color = 'grey' }}     // Change color back to grey on mouse out
          >
            Read More...
          </Link>
        </p>
                            </div>
                          )
                      )}
                    </Slider>
                  </div>

                  <div
                    className="col-sm-6 section-to-hide"
                    style={{ textAlign: "right" }}
                  >
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
                        {latestNews.map((newsItem, index) => (
                           index < 6 && (

                       
                          <div key={newsItem._id} style={styles.videoItem}>
                            {/* <h3>{index + 1}</h3> */}
                            <li>
                              <div
                                style={{
                                  position: "relative",
                                  width: "100%",
                                  paddingBottom: "56.25%",
                                  height: 0,
                                  overflow: "hidden",
                                }}
                              >
                                <iframe
                                  src={newsItem.videoUrl}
                                  title="YouTube video player"
                                  frameBorder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowFullScreen
                                  style={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    width: "100%",
                                    height: "100%",
                                  }}
                                ></iframe>
                              </div>
                              <p > {newsItem.title.substring(0,40)}...</p>
                            </li>
                          </div>
                           ) ))}
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
