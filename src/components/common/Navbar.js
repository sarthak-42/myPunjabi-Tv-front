import React from 'react';
import logo from '../../assets/images/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate  } from 'react-router-dom';
import { useRef } from 'react';
// import PropTypes from 'prop-types'
import { useLanguage } from '../../utils/LanguageContext';
const Navbar = ({ changeLanguage, currentLanguage }) => {
    const { translate } = useLanguage();
    const navigate = useNavigate()
    const liveSectionRef = useRef(null); // Create a ref for the Live section

    const toggleLanguage = () => {
      if (currentLanguage === 'en') {
        changeLanguage('pu');
      } else {
        changeLanguage('en');
      }
    };
    // useEffect(() => {
    //   // This will get the hash value from the URL after navigation
    //   const hashValue = window.location.hash;
  
    //   // Check if the hash value matches the target section ID
    //   if (hashValue === '#live-news-section') {
    //     const liveNewsSection = document.getElementById('live-news-section');
    //     if (liveNewsSection) {
    //       window.scrollTo({
    //         top: liveNewsSection.offsetTop,
    //         behavior: 'smooth'
    //       });
    //     }
    //   }
    // }, []); // Empty dependency array ensures this effect runs only once after the initial render
  
    // const handleLiveNewsClick = () => {
    //   // Redirect to the homepage with a query parameter
    //   navigate('/?scrollTo=live-news-section');
    // };
    const handleLiveNewsClick = () => {
      // Scroll to the Live section
      if (liveSectionRef.current) {
        window.scrollTo({
          top: liveSectionRef.current.offsetTop,
          behavior: 'smooth'
        });
      }
      // Update the URL without redirecting
      navigate(`/?scrollTo=live-news-section`);
    };
    
  return (
    <div>
        
      <header>
   <div className="top-bar d-flex align-items-center justify-content-between">
     <nav class="navbar navbar-expand-lg w-100 py-0">
       <div class="container-fluid px-0">
         <div id="logo">
           <Link className="navbar-brand" to="/">
             <img src={logo} className="img-fluid" alt="" />
           </Link>
         </div>
         <button
           class="navbar-toggler"
           type="button"
           data-bs-toggle="collapse"
           data-bs-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent"
           aria-expanded="false"
           aria-label="Toggle navigation"
   
         >
           <span class="navbar-toggler-icon"></span>
         </button>
         <div class="collapse navbar-collapse" id="navbarSupportedContent">
           <ul class="navbar-nav main-menu me-auto mb-2 mb-lg-0">
             <li class="nav-item">
             <Link to='/'> {translate('navHome')} </Link>
             </li>
             <li class="nav-item">
             <Link to="/news">{translate('navNews')}</Link>
             </li>
             <li class="nav-item">
             <Link to={'/shows'}>{translate('navShows')}</Link>
             </li>
             <li class="nav-item">
             <Link to={'/videos'}>{translate('navVideos')}</Link>
             </li>
             <li class="nav-item">
             <Link to={'/contact-us'}>{translate("navContact")}</Link>
             </li>
             {/* <li class="nav-item">
               <a class="nav-link" href="#">
                 Contact
               </a>
             </li> */}
           </ul>
           <div className="d-flex">
             <button
               type="button"
               className={`languagebtn-style  mx-4 btn btn-${
                 currentLanguage === "en" ? "secondary" : "primary"
               }`}
               onClick={toggleLanguage}
             >
               {currentLanguage === "en" ? "ਪੰਜਾਬੀ ਵਿੱਚ ਬਦਲੋ": " Convert to English"}
             </button>
             <button
              type='button'                
               className="d-block text-nowrap"
               id="live-tv-btn"
               onClick={handleLiveNewsClick}
             >
               <i className="fa fa-tv me-3"></i>
               {translate("liveNewsBtn")}
             </button>
           </div>
         </div>
       </div>
     </nav>
   </div>
 </header>
    </div>
  )
}

export default Navbar
