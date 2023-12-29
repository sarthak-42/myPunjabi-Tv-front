import React from 'react';
import logo from '../../assets/images/logo.png'
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from 'prop-types'
import { useLanguage } from '../../utils/LanguageContext';
const Navbar = ({ changeLanguage, currentLanguage }) => {
    const { translate } = useLanguage();
    const toggleLanguage = () => {
      if (currentLanguage === 'en') {
        changeLanguage('pu');
      } else {
        changeLanguage('en');
      }
    };

  return (
    <div>
        <header>
         <div className="top-bar d-flex align-items-center justify-content-between">
            <div className="d-flex">
               <div className="d-flex">
                  <a href="" className="d-lg-none mobile-menu d-flex h-100 justify-content-center align-items-center">
                     <div className="text-center"><i className="d-block mb-2 fa fa-bars"></i>{translate('')}</div>
                  </a>
                  <div id="logo">
                     <a href=""><img src={logo} className="img-fluid" alt=""/></a>
                  </div>
               </div>
               <div className="main-menu align-items-center d-none d-inline-flex d-xl-flex">
                  <ul id="menu-header-menu-1" className="list-unstyled d-flex p-0 m-0">
                     <li className="menu-item"><a href="">{translate('navHome')} </a></li>
                     <li className="menu-item"><a href="">{translate('navNews')}</a></li>
                     {/* <li className="menu-item"><a href="">Videos</a></li> */}
                     <li className="menu-item"><a href="">{translate('navShows')}</a></li>
                     <li className="menu-item"><a href="">{translate('navVideos')}</a></li>
                     <li className="menu-item"><a href="">{translate("navContact")}</a></li>
                     {/* <button type="button" className="btn" data-bs-toggle="button">Toggle button</button> */}

                  </ul>
               </div>       
            </div>
            <div className="d-flex">
            <button 
        type="button" 
        className={`languagebtn-style  mx-4 btn btn-${currentLanguage === 'en' ? 'secondary' : 'primary'}`} 
        onClick={toggleLanguage}
      >
        {currentLanguage === 'en' ? 'English' : 'ਪੰਜਾਬੀ'}
      </button>
               <a target="_blank" href="" className="d-block" id="live-tv-btn"><i className="fa fa-tv me-3"></i>{translate('liveNewsBtn')}</a></div>
         </div>
      </header>
    </div>
  )
}

export default Navbar