import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import footerLogo from '../../assets/images/footer-logo.png'
import { useLanguage } from '../../utils/LanguageContext'
import "bootstrap/dist/css/bootstrap.min.css";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom'
const Footer = () => {
   const {language, translate } = useLanguage();
   const [latestNews, setLatestNews] = useState([]);
   const [category, setCategory] = useState([]);

   const getCategory = async(lang)=>{
      try {
         const categoryResponse = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/getCategory/${lang}`)
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
         const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/news/getNews/${lang}`, config)
         console.log("News>>" , response.data) 
         setLatestNews(response.data)
      } catch (error) {
         console.log("Error fetching latest news", error)
      }
   }
   useEffect(() => {
       
      getLatestNews(language);
      getCategory(language)// eslint-disable-next-line 
  }, [language]  );

  return (
    <div>
         <footer>
         <div className="footer-top">
            <div className="container">
               <div className="row">
                  <div className="col-sm-5">
                     <Link to="/">
                     <img src={footerLogo}className="footer-logo pt-4" alt=""/>
                     </Link>
                     <h5 className="font-weight-normal text-start mt-4 mb-5">
                       {translate('footerText')}
                     </h5>
                     <ul className="social-media mb-3" style={{ display: 'flex', padding: 0 }}>
                        <li>
                           <Link to="https://www.facebook.com/tvmypunjabi" target='_black'  style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out', borderRadius: '100%', overflow: 'hidden' }}>
                              <FacebookIcon/>
                           {/* <FontAwesomeIcon icon="fa-brands fa-facebook" /> */}
                           </Link>
                        </li>
                        <li>
                          <Link to="https://www.instagram.com/mypunjabitv/" target='_blank' style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out', borderRadius: '100%', overflow: 'hidden' }}>
                          <InstagramIcon/>
                          </Link>
                       </li>
                        <li>
                           <Link to="https://www.youtube.com/@MYPunjabiTV" target='_blank' style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out', borderRadius: '100%', overflow: 'hidden' }}>
                          <YouTubeIcon/>
                           </Link>
                        </li>
                        <li>
                           <Link to="https://twitter.com/mypunjabitv" style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out', borderRadius: '100%', overflow: 'hidden' }}>
                           <TwitterIcon/>
                           </Link>
                        </li>
                        <li>
                          <Link to="https://in.pinterest.com/mypunjabitv/" target='_blank' style={{ display: 'inline-block', transition: 'transform 0.3s ease-in-out', borderRadius: '100%', overflow: 'hidden' }}>
                          <PinterestIcon/>
                          </Link>
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
                              <Link to={`/news/${newsItem._id}`} style={{textDecoration:'none' , color:'#fff'}}>
                              <div className="row">
                                 <div className="col-3" >
                                    <img src={newsItem.img}alt="thumb" className="img-fluid"/>
                                 </div>
                                 <div className="col-9">
                                    <h5 className='text-start'>
                                      {newsItem.title}
                                    </h5>
                                 </div>
                              </div>
                             </Link>
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
      <div className="main-footer">
         <div className="container">
           <div className="row">
             <div className="col-md-6">
               <p className="text-start">Copyright © My Punjabi Tv 2024 </p>
             </div>
             <div className="col-md-6">
                  <ul className="footer-menu text-end">                             
                     <li><Link to={'/terms&conditions'}> Terms of use</Link></li>
                     <li>Privacy Policy</li>
                     <li><Link to={'/contact-us'}>Contact</Link></li>
                 </ul>
             </div>
           </div>
         </div>
       </div>
    </div>
  )
}

export default Footer
