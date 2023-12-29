import React from 'react'
import { useLanguage } from '../../utils/LanguageContext'
import { useEffect, useState } from 'react'
import axios from 'axios'
const BreakingNews = () => {
    const {language, translate } = useLanguage();
    const [latestNews, setLatestNews] = useState([]);
    const getLatestNews = async (lang)=>{
      
        try {
           const config = {
              headers: {
                "Content-type": "application/json",
              },
            };
           const response = await axios.get(`http://localhost:8080/api/news/getNews/${lang}`, config)
        //    console.log("News>>" , response.data)
           setLatestNews(response.data)
        } catch (error) {
           console.log("Error fetching latest news", error)
        }
     }
     useEffect(() => {
        getLatestNews(language);
      
    }, [language] , );
  return (
    <div>
      <div className="trending-section">
         <div className="container-fluid px-0" style={{ overflow: 'hidden' }}>
         <div className="row">
    <div className="col-sm-2 breaking-news-heading">
        <p className="trending-btn">{translate('breakingNewsHeading')} -</p>
    </div>
    <div className="col-sm-10 breaking-news-container align-middle">
        <div className=" align-middle breaking-news-content">
            {latestNews.map((newsItem, index) => (
                <span key={newsItem._id} className="align-middle breaking-news-item ">
                    {newsItem.title}
                </span>
            ))}
            {/* Repeat the news titles for a smooth loop */}
            {latestNews.map((newsItem, index) => (
                <span key={index + newsItem._id} className="breaking-news-item">
                    {newsItem.title}
                </span>
            ))}
        </div>
    </div>
</div>

         </div>
      </div>
    </div>
  )
}

export default BreakingNews
