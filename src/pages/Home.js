import React from 'react'
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

const Home = () => {
  // const [displayLive, setDisplayLive] = useState(false);
  const { changeLanguage, language } = useLanguage();
  return (
    <>
    
      <Navbar changeLanguage={changeLanguage} currentLanguage={language} />
        {/* <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('pu')}>Punjabi</button> */}
    <div>
      <BreakingNews/>
      <HeroSection/>
      <Live/>
        
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
