import React from 'react'
import { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import MenuIcon from '@mui/icons-material/Menu';
import rightIcon from '../assets/images/right-icon01.png'
import leftIcon from '../assets/images/left-icon01.png'
import thumb1 from '../assets/images/youtube-banner.png'
import thumb2 from '../assets/images/news11.avif'
import '../style/style.css'


 
const Videos = () => {
   const sliderRef1 = useRef(null);
  const sliderRef2 = useRef(null);
  const handleNext = () => {
   if (sliderRef1.current && sliderRef2.current) {
     sliderRef1.current.slickNext(); // Go to next slide for sliderRef1
     sliderRef2.current.slickNext(); // Go to next slide for sliderRef2
   }
 };
 

 const handlePrev = () => {
   if (sliderRef1.current && sliderRef2.current) {
     sliderRef1.current.slickPrev(); // Go to previous slide for sliderRef1
     sliderRef2.current.slickPrev(); // Go to previous slide for sliderRef2
   }
 };
    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
      
    };
  return (
    <div>
   <section>
         <div className="live-news features Our-Show">
            <div className="container">
               <div className="row">
                  <div className="col-sm-12">
                     <ul className="p-0">
                        <li><MenuIcon style={{ color: 'red' , marginRight:'10px' , marginBottom: "2px"}}/> <strong style={{fontSize : '18px', textTransform: 'uppercase'}}>  Our Show </strong> </li>
                     </ul>
                     <div className="row">
                        <div className="col-sm-12">
                           <div className="youtube-video-slider position-relative">
                           <Slider ref={sliderRef1} {...settings}>
                              <div>

                              <img className="w-100" src={thumb1} alt=""/>
                              </div>
                              <div>

                              <img className="w-100" src={thumb1} alt=""/>
                              </div>
                              </Slider>
                              <div className="next-pre-btn">
                                 <img src={rightIcon} alt="" onClick={() => handleNext(sliderRef1)}/>
                                 <img src={leftIcon} alt=""  onClick={() => handlePrev(sliderRef1)}/>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-sm-6">
                           <div className="bottom-caption">
                              <h2>Welcome To The Best Model Winner Contest At Look of the year</h2>
                              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit. Lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod ipsum dolor sit lorem ipsum dolor sit.</p>
                          </div>
                        </div>
                        <div className="col-sm-6" style={{textAlign: "right"}}>
                           <ul className="youtube-videos">
                           <Slider ref={sliderRef2} {...settings}>
                              <li>
                            
                                 <img className="w-100" src={thumb2} alt=""/>
                                 <p>Welcotme To The Best Model Winner Contest</p>
                               
                              </li>
                              <li>
                              
                                 <img className="w-100" src={thumb2} alt=""/>
                                 <p>Welcotme To The Best Model Winner Contest</p>
                  
                              </li>
                              <li>
                            
                                 <img className="w-100" src={thumb2} alt=""/>
                                 <p>Welcotme To The Best Model Winner Contest</p>
                           
                              </li>
                              </Slider>
                              <li>
                              {/* <Slider ref={sliderRef2} {...settings}> */}
                                 {/* <img className="w-100" src={thumb2} alt=""/>
                                 <p>Welcotme To The Best Model Winner Contest</p> */}
                                 {/* </Slider> */}
                              </li>
                           </ul>
                        </div>
                     </div><br/>
                         <div className="row">
                            <div className="col-sm-6">
                              <span className="cursor-pointer-div">
                                 <video className="rounded" width="100%" height="" autoplay="" muted="">
                                 <source src="img/our-show-video.mp4" type="video/mp4"/>
                               </video>
                                <h4 className="py-2">What to stream this week: ‘Society of the Snow,’ ‘Night Court,’ ‘Good Grief’`</h4>
                                <p className="py-2">This week’s new streaming entertainment releases include Dan Levy’s directorial debut, the return of NBC’s rebooted “Night Court” for its second season and new game shows on Fox.  rebooted “Night Court” for its second season and new game shows on Fox.</p>
                              </span>
                                <span className="latest-news mb-4">Updated 10:32 AM, December 22, 2023</span>
                            </div>
                            <div className="col-sm-6">
                               <div className="row">
                                <div className="col-sm-6">
                                 <span className="cursor-pointer-div"><video className="rounded" width="100%" height="" autoplay="" muted="">
                                        <source src="img/news.mp4" type="video/mp4"/>
                                      </video>
                                    <h5 className="py-3 mb-1">What’s streaming now: Bradley Cooper conducts, Lidia Bastianich cooks and Percy Jackson quests</h5></span>
                                    <span className="latest-news mb-4">Updated 10:32 AM, December 22, 2023</span>
                                </div>
                                <div className="col-sm-6">
                                 <span className="cursor-pointer-div"><video className="rounded" width="100%" height="" autoplay="" muted="">
                                        <source src="img/news.mp4" type="video/mp4"/>
                                      </video>
                                    <h5 className="py-3 mb-1">What’s streaming now: Bradley Cooper conducts, Lidia Bastianich cooks and Percy Jackson quests</h5></span>
                                    <span className="latest-news mb-4">Updated 10:32 AM, December 22, 2023</span>
                                </div>
                                <div className="col-sm-6">
                                 <span className="cursor-pointer-div"><video className="rounded" width="100%" height="" autoplay="" muted="">
                                     <source src="img/news.mp4" type="video/mp4"/>
                                   </video>
                                 <h5 className="py-3 mb-1">What’s streaming now: Bradley Cooper conducts, Lidia Bastianich cooks and Percy Jackson quests</h5></span>
                                 <span className="latest-news mb-4">Updated 10:32 AM, December 22, 2023</span>
                             </div>
                             <div className="col-sm-6">
                                 <span className="cursor-pointer-div"><video className="rounded" width="100%" height="" autoplay="" muted="">
                                     <source src="img/news.mp4" type="video/mp4"/>
                                   </video>
                                 <h5 className="py-3 mb-1">What’s streaming now: Bradley Cooper conducts, Lidia Bastianich cooks and Percy Jackson quests</h5></span>
                                 <span className="latest-news mb-4">Updated 10:32 AM, December 22, 2023</span>
                             </div>
                               </div>
                            </div>
                         </div><br/>
                         <div className="news-blog mt-5">
                           <div className="row">
                              <div className="col-md-4">
                                 <img src="img/latest-video1.jpg" alt=""/>
                              </div>
                              <div className="col-md-8">
                                 <h3>Bhagwant Mann lashes out at Centre for rejecting Punjab's tableau for Republic Day</h3>
                                 <p>In the State of Punjab, Hon’ble  Justice Ravi Shanker Jha, Chief Justice of Punjab & Haryana High Court & Patron-in-Chief of
                                     Punjab State Legal Services Authority, today virtually inaugurated the offices of “Legal Aid Defense Counsel 
                                     System” in 14 District Legal Services Authorities of Punjab.</p>
                              </div> 
                           </div><br/>
                           <div className="row">
                              <div className="col-md-4">
                                 <img src="img/latest-video3.jpg" alt=""/>
                              </div>
                              <div className="col-md-8">
                                 <h3>Bhagwant Mann lashes out at Centre for rejecting Punjab's tableau for Republic Day</h3>
                                 <p>In the State of Punjab, Hon’ble  Justice Ravi Shanker Jha, Chief Justice of Punjab & Haryana High Court & Patron-in-Chief of
                                     Punjab State Legal Services Authority, today virtually inaugurated the offices of “Legal Aid Defense Counsel 
                                     System” in 14 District Legal Services Authorities of Punjab.</p>
                              </div> 
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
      </section>
    </div>
  )
}

export default Videos
