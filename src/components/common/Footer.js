import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLanguage } from '../../utils/LanguageContext'
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
   const {language, translate } = useLanguage();
   const [latestNews, setLatestNews] = useState([]);
   const [category, setCategory] = useState([]);

   const getCategory = async(lang)=>{
      try {
         const categoryResponse = await axios.get(`http://localhost:8080/api/news/getCategory/${lang}`)
         console.log("Fetched Categories:", categoryResponse.data);
         setCategory(categoryResponse.data.categories)
         console.log("State Categories:", category);
      } catch (error) {
         console.log("Error fetching categories", error)
      }
   }
   const getLatestNews = async (lang)=>{
      
      try {
         const config = {
            headers: {
              "Content-type": "application/json",
            },
          };
         const response = await axios.get(`http://localhost:8080/api/news/getNews/${lang}`, config)
         console.log("News>>" , response.data)
         setLatestNews(response.data)
      } catch (error) {
         console.log("Error fetching latest news", error)
      }
   }
   useEffect(() => {
      getLatestNews(language);
      getCategory(language)
  }, [language]  );

  return (
    <div>
         <footer>
         <div className="footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-sm-5">
                     <img src="img/footer-logo.png" className="footer-logo pt-4" alt=""/>
                     <h5 className="font-weight-normal text-start mt-4 mb-5">
                       {translate('footerText')}
                     </h5>
                     <ul className="social-media mb-3">
                        <li>
                           <a href="/">
                              <FacebookIcon/>
                           {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                           </a>
                        </li>
                        <li>
                          <a href="/">
                          <InstagramIcon/>
                          </a>
                       </li>
                        <li>
                           <a href="/">
                          <YouTubeIcon/>
                           </a>
                        </li>
                        <li>
                           <a href="/">
                           <TwitterIcon/>
                           </a>
                        </li>
                        <li>
                          <a href="/">
                          <LinkedInIcon/>
                          </a>
                       </li>
                     </ul>
                  </div>
                  <div className="col-sm-4">
                     <h3 className="font-weight-bold mb-3">{translate('footerPostHeading')}</h3>
                     <div className="row">
                        {latestNews.map((newsItem, index)=>(
                           index < 3 &&(
                        <div className="col-sm-12" key={newsItem._id}>
                           <div className="footer-border-bottom pb-2">
                              <div className="row">
                                 <div className="col-3">
                                    <img src={newsItem.img}alt="thumb" className="img-fluid"/>
                                 </div>
                                 <div className="col-9">
                                    <h5 className='text-start'>
                                      {newsItem.title}
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        </div>

                           )
                        ))}
                     </div>
                     {/* <div className="row">
                        <div className="col-sm-12">
                           <div className="footer-border-bottom pb-2 pt-2">
                              <div className="row">
                                 <div className="col-3">
                                    <img src="img/footer-img1.jpg" alt="thumb" className="img-fluid"/>
                                 </div>
                                 <div className="col-9">
                                    <h5 className="">
                                       Cotton import from USA to soar was American traders
                                       predict
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-12">
                           <div>
                              <div className="row">
                                 <div className="col-3">
                                    <img src="img/footer-img1.jpg" alt="thumb" className="img-fluid"/>
                                 </div>
                                 <div className="col-9">
                                    <h5 className=" mb-3">
                                       Cotton import from USA to soar was American traders
                                       predict
                                    </h5>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div> */}
                  </div>
                  <div className="col-sm-3">
                     <h3 className="font-weight-bold mb-3">{translate('footerCategory')}</h3>
                      {Array.isArray(category) && category.map((item, index) => (
                        <div className="footer-border-bottom pb-2" key={index}>
                           <div className="d-flex justify-content-between align-items-center">
                              <h5 className="mb-0 ">{item.category}</h5>
                              <div className="count">1</div>
                           </div>
                        </div>
 
))}
                     {/* <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="mb-0 ">Technology</h5>
                           <div className="count">1</div>
                        </div>
                     </div>
                     <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="mb-0 ">Media</h5>
                           <div className="count">1</div>
                        </div>
                     </div>
                     <div className="footer-border-bottom pb-2 pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="mb-0 ">Health care</h5>
                           <div className="count">1</div>
                        </div>
                     </div>
                     <div className="pt-2">
                        <div className="d-flex justify-content-between align-items-center">
                           <h5 className="mb-0 ">Sports</h5>
                           <div className="count">1</div>
                        </div>
                     </div> */}
                  </div>
               </div>
            </div>
         </div>
      </footer>
    </div>
  )
}

export default Footer
