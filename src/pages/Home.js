import React from 'react'
import { useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useState } from 'react'
import { useLanguage } from '../utils/LanguageContext'
import Live from '../components/homePageComponents/Live'
import LatestNews from '../components/homePageComponents/LatestNews'
import Navbar from '../components/common/Navbar'
import Logos from '../components/homePageComponents/Logos'
// import SimpleSlider from '../components/homePageComponents/SimpleSlider'
import Footer from '../components/common/Footer'
import BreakingNews from '../components/homePageComponents/BreakingNews'
import HeroSection from '../components/homePageComponents/HeroSection'
import NewsVideos from '../components/homePageComponents/NewsVideos'
// import ExclusiveNews from '../components/homePageComponents/ExclusiveNews'
import { useLocation } from 'react-router-dom'
const Home = () => {
  window.scroll(0,0)
  // const [displayLive, setDisplayLive] = useState(false);
  const { changeLanguage, language } = useLanguage();
  const location = useLocation()
  // const navigate = useNavigate();
  useEffect(() => {
    // Parse the query string from the location object
    const params = new URLSearchParams(location.search);
    // Check if the 'scrollTo' parameter is set to 'live-news-section'
    if (params.get('scrollTo') === 'live-news-section') {
      // Scroll to the Live News section
      const liveNewsSection = document.getElementById('live-news-section');
      if (liveNewsSection) {
        window.scrollTo({
          top: liveNewsSection.offsetTop,
          behavior: 'smooth'
        });
        // const newSearch = location.search.replace('?scrollTo=live-new-btn', '');
        // navigate({
        //   ...location,
        //   search: newSearch
        // });
      }
    }
  }, [location.search]);
  return (
    <>
    
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
        {/* <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pu')}>Punjabi</button> */}
    <div>
      <BreakingNews/>
      <HeroSection/>
      <div id='live-news-section'>
      <Live />
      </div>

        
      <LatestNews/>
      <NewsVideos/>
      {/* <ExclusiveNews/> */}
      <Logos/>
      {/* <SimpleSlider/> */}
      <Footer/>
    </div>
 
    </>
  )
}

export default Home
