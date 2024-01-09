import React from "react";
import { useLanguage } from "../utils/LanguageContext";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
// import news from '../assets/images/news-banner.avif'
// import news2 from '../assets/images/news11.avif'
import '../style/style.css'
import { Link } from "react-router-dom";
import vid from "../assets/images/Modern Breaking News Intro Opener for After Effects.mp4";
const iframeStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
};
const containerStyle = {
  position: "relative",
  paddingBottom: "56.25%", // 16:9 Aspect Ratio
  paddingTop: "30px",
  height: 0,
  overflow: "hidden",
  width: "100%",
};
const NewsPage = () => {
  window.scroll(0,0)
  const [latestNews, setLatestNews] = useState([]);
  const { changeLanguage, language } = useLanguage();
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
    // eslint-disable-next-line
    getLatestNews(language);
  }, [language]);
  return (
    <div>
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
      <section className="top-news-sec">
        <div className="live-news features latest-news" >
        <div className="container">
        {/* <div className="row" style={{ backgroundColor: "#006" }}>
            <div className="col-md-8 m-0 p-0">
              <img className="w-100" src={news}/>
            </div>
            <div className="col-md-4 m-0 p-0">
              <ul className="top-news-list">
                <li><p className="vid-title">PM Modi Takes Dig At Opposition During BJP Parliamentary Meeting Over Security B</p>
              <img src={news2}/></li>
              <li><p className="vid-title">PM Modi Takes Dig At Opposition During BJP Parliamentary Meeting Over Security B</p>
              <img src={news2}/></li>
              <li><p className="vid-title">PM Modi Takes Dig At Opposition During BJP Parliamentary Meeting Over Security B</p>
              <img src={news2}/></li>
              <li><p className="vid-title">PM Modi Takes Dig At Opposition During BJP Parliamentary Meeting Over Security B</p>
              <img src={news2}/></li>
              <li><p className="vid-title">PM Modi Takes Dig At Opposition During BJP Parliamentary Meeting Over Security B</p>
              <img src={news2}/></li>
              </ul>
            </div>
        </div> <br /> */}
          <div className="row">
            {latestNews.map(
              (newsItem, index) =>
                index < 1 && (
                  <div className="col-md-5" key={newsItem.id}>
                    <div className="on-going-news">
                    <Link to={`/news/${newsItem._id}`} style={{textDecoration:'none' , color:'black'}}>
                      <h2 className="mb-2 text-start">{newsItem.title}</h2>

                        <div className="truncate-text text-start">{newsItem.description}</div>
                  </Link>
                      {/* <div className="Watch-more">
                        <h4 className="mt-3">Watch More</h4>
                        <span>
                          <a href="#">
                            Ayodhya: Ram Lalla's idol to be chosen today ahead
                            of temple consecration
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            Telangana | 7.46 lakhs applications received on the
                            first day of Praja Palana
                          </a>
                        </span>
                        <span>
                          <a href="#">
                            Who is Narayana Gowda, the activist behind
                            pro-Kannada protest in Bengaluru?
                          </a>
                        </span>
                      </div> */}
                    </div>
                  </div>
                )
            )}
            <div className="col-md-7">
              <div className="on-going-video">
                {/* <video width="100%" height="" controls>
                        <source src="img/news.mp4" type="video/mp4"/>
                        Your browser does not support the video tag.
                      </video> */}
                <div style={containerStyle}>
                  <iframe
                    src={vid}
                    style={iframeStyle}
                    title="YouTube video player"
                    //   frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="news-blog mt-5">
            <div className="row">
               {latestNews.map((newsItem,index)=>
              index >= 1 && index < 5 &&
               (
                  <>
              <div className="col-md-4 py-3" key={newsItem.id}>

                 <Link to={`/news/${newsItem._id}`} style={{textDecoration:'none' , color:'black'}}>
              <img 
          src={newsItem.img} 
          alt="" 
          className="img-fluid rounded" 
          style={{ width: '500px', height: '250px', objectFit: 'cover' }} 
        />
        </Link>
              </div>
              <div className="col-md-8 py-3" key={newsItem.id}>
              <Link to={`/news/${newsItem._id}`} style={{textDecoration:'none' , color:'black'}}>
                <h3 className="text-start">
                 {newsItem.title}
                </h3>
                <p className="truncate-text-list text-start">
                  {newsItem.description}
                </p>
                </Link>
              </div>
               </>

               ))}
            </div>
         
          </div>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
