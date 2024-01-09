import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import axios from "axios";
import { useEffect, useState } from "react";
import { useLanguage } from "../../utils/LanguageContext";
import { Link } from "react-router-dom";
// import { TaskRounded } from "@mui/icons-material";
const NewsVideos = () => {
  const { language, translate } = useLanguage();
  const [latestNews, setLatestNews] = useState([]);
  // const [category, setCategory] = useState([]);
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
  useEffect(() => {
    getLatestNews(language);
  }, [language]);
  return (
    <div>
      <section className="latest-video features p-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-lg-12">
                      <ul className="p-0">
                        <li>
                        
                           
                            <MenuIcon
                              style={{ color: "red", marginRight: "10px" , marginBottom:'2px'}}
                            />
                            <strong style={{fontSize : '18px', textTransform: 'uppercase'}}>
                            {translate("newsVideosHeadings")}
                            </strong>
                            
            
                        </li>
                      </ul>
                      <div className="row">
                      {latestNews.map((newsItem, index)=>(
                                index < 6 && (
                        <div className="col-sm-4 grid-margin" key={newsItem._id}>
                          <div className="position-relative responsive-iframe-container"  >
                            {/* <div className="rotate-img"> */}
                              <a href="/">
                                <iframe
                                
                                  src={newsItem.videoUrl}
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                  allowfullscreen
                                ></iframe>
                                {/* <img
                                  src="img/latest-video1.jpg#"
                                  alt="thumb"
                                  className="img-fluid"
                                /> */}
                              </a>
                            {/* </div>   */}
                            {/* <div className="badge-positioned w-90">
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="badge badge-danger font-weight-bold">
                                  Lifestyle
                                </span>
                                <div className="video-icon">
                                  <a href="/">
                                    <i className="fa fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </div> */}
                          </div>
                        </div>
                                    )
                                    ))}
                        {/* <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <a href="/">
                                <img
                                  src="img/latest-video2.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                            <div className="badge-positioned w-90">
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="badge badge-danger font-weight-bold">
                                  National News
                                </span>
                                <div className="video-icon">
                                  <a href="/">
                                    <i className="fa fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                        {/* <div className="col-sm-4 grid-margin">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <a href="/">
                                <img
                                  src="img/latest-video2.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                            <div className="badge-positioned w-90">
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="badge badge-danger font-weight-bold">
                                  National News
                                </span>
                                <div className="video-icon">
                                  <a href="/">
                                    <i className="fa fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div> */}
                      </div>
                      {/* <div className="row">
                        <div className="col-sm-4">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <a href="/">
                                <img
                                  src="img/latest-video3.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                            <div className="badge-positioned w-90">
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="badge badge-danger font-weight-bold">
                                  Lifestyle
                                </span>
                                <div className="video-icon">
                                  <a href="/">
                                    <i className="fa fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <a href="/">
                                <img
                                  src="img/latest-video4.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                            <div className="badge-positioned w-90">
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="badge badge-danger font-weight-bold">
                                  National News
                                </span>
                                <div className="video-icon">
                                  <a href="/">
                                    <i className="fa fa-play"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="position-relative">
                            <div className="rotate-img">
                              <a href="/">
                                <img
                                  src="img/latest-video4.jpg"
                                  alt="thumb"
                                  className="img-fluid"
                                />
                              </a>
                            </div>
                            <div className="badge-positioned w-90">
                              <div className="d-flex justify-content-between align-items-center">
                                <span className="badge badge-danger font-weight-bold">
                                  National News
                                </span>
                                <div className="video-icon">
                                  <a href="/">
                                    <a href="/">
                                      <i className="fa fa-play"></i>
                                    </a>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="read-more py-3">
              <Link to="/videos">View More</Link>
            </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsVideos;
