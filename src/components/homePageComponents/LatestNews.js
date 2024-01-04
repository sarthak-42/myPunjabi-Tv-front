import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useLanguage } from '../../utils/LanguageContext'
// import icon from '../../assets/images/togle-img.png'
// import newsImage from '../../assets/images/breaking-news.webp'
import { Link } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
// import { useCallback } from 'react';

const LatestNews = () => {
  
   const {language, translate } = useLanguage();
   const [latestNews, setLatestNews] = useState([]);
   const [category, setCategory] = useState([]);


   const getCategory = async(lang)=>{
        try {
           const categoryResponse = await axios.get(`https://mypunjabitv-server.onrender.com/api/news/getCategory/${lang}`)
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
         const response = await axios.get(`https://mypunjabitv-server.onrender.com/api/news/getNews/${lang}`, config)
         console.log("News>>" , response.data)
         setLatestNews(response.data)
      } catch (error) {
         console.log("Error fetching latest news", error)
      }
   }
   useEffect(() => {
       // eslint-disable-next-line 
      getLatestNews(language);
      getCategory(language)  // eslint-disable-next-line 
  }, [language]);
  
  return (
    <div>
        <section>
         <div className="features">
            <div className="container">
               <div className="row">
                  <div className="col-sm-9">
                     <ul className="p-0">
                        <li><a href='/'> <MenuIcon style={{ color: 'red' , marginRight:'10px' }}/>{translate('latestNewsHeading')}</a></li>
                     </ul>
                     <div className="row" >
                           {latestNews.map((newsItem, index)=>(
                                index < 4 && (
                        <div className="col-sm-6" key={newsItem._id}>

                           <div className="box">
                                <Link to={`/news/${newsItem._id}`}>
                                 <img src={newsItem.img} style={{ width: '500px', height: '250px' }} alt=""/>                                
                                 <p className='text-start col-12 text-truncate'>{newsItem.title}</p>
                                 {/* <span className="latest-news">November 2, 2023</span> */}
                           
                                </Link>
                           </div>
                        </div>
                                )
                           ))}
                       
                     </div>
                  </div>
                  <div className="col-sm-3">
                     <ul className="p-0">
                        <li><a href='/'><MenuIcon style={{ color: 'red' , marginRight:'10px' }}/>{translate('categoryHeading')}</a></li>
                     </ul>
                     <ul className="vertical-menu">
                        {/* <li><a href="/">Jobs</a></li>
                        <li><a href="/">Technology</a></li>
                        <li><a href="/">Media</a></li>
                        <li><a href="/">Politics</a></li>
                        <li><a href="/">Kids</a></li>
                        <li><a href="/">Health care</a></li>
                        <li><a href="/">Life Style</a></li>
                        <li><a href="/">Sports</a></li> */}
                        
                       
                        {Array.isArray(category) && category.map((item, index) => (
    <li key={index}><a href="/">{item.category}</a></li>
))}



                     </ul>
                     {/* <ul className="latestNews p-0">
                        <li>
                           <a href="/">
                              <img src="img/img0.jpg" alt=""/>
                              <p>Parliament Winter Session 2023: Don't show your frustration of defeat</p>
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <img src="img/img02.jpg" alt=""/>
                              <p>Aaj Ki Baat: What do today's exit polls say?</p>
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <img src="img/img0.jpg" alt=""/>
                              <p>Parliament Winter Session 2023: Don't show your frustration of defeat</p>
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <img src="img/img03.jpg" alt=""/>
                              <p>Mizoram election results: State Congress president Lalsawta trails in Aizawl..</p>
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <img src="img/img02.jpg" alt=""/>
                              <p>Aaj Ki Baat: What do today's exit polls say?</p>
                           </a>
                        </li>
                        <li>
                           <a href="/">
                              <img src="img/img01.jpg" alt=""/>
                              <p>Vijay Hazare Trophy: Deepak Hooda's Rajasthan, Haryana reach quarters; Mumbai</p>
                           </a>
                        </li>
                     </ul> */}
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  )
}

export default LatestNews
