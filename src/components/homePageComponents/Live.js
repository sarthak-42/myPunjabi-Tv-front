import React from "react";
import "../../style/style.css";
import add3 from "../../assets/images/add3.png";
import add1 from "../../assets/images/add1.png";
// import livebg from "../../assets/images/live.png";
// import icon from "../../assets/images/togle-img.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { useLanguage } from "../../utils/LanguageContext";
import MenuIcon from "@mui/icons-material/Menu";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
const Live = () => {
  const { translate } = useLanguage();

  return (
    <div>
      <section>
        <div className="live-news features">
          <div className="container">
            <div className="row">
              <div className="col-sm-9">
                <ul className="p-0">
                  <li>
                  
                      <MenuIcon style={{ color: "red", marginRight: "10px" , marginBottom: '2px'}} />
                      <strong style={{fontSize : '18px', textTransform: 'uppercase'}}>
                      {translate("liveHeading")}
                      </strong>
                      
                
                  </li>
                </ul>
                <div className="row">
                  <div className="col-sm-12">
                    <div className="box">
                      <div className="responsive-iframe-container">
                        <iframe
                          src="https://www.youtube.com/embed/eB3pe90TZlc?si=PBrbOh9vjj7m0jil"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowfullscreen
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-3">
                <ul className="p-0">
                  <li></li>
                </ul>
                <ul className="add-section p-0">
                  <li>
                    <a href="/">
                      <img src={add1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={add1} alt="" />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src={add3} alt="" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Live;
