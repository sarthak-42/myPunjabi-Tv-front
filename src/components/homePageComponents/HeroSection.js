import React from 'react'
// import { useLanguage } from '../../utils/LanguageContext'
import youTubeLogo from '../../assets/images/youtube.png'
import { useLanguage } from '../../utils/LanguageContext'
import { Link } from 'react-router-dom';
const HeroSection = () => {
    const { translate } = useLanguage();
  return (
    <div>
          <section className="masthead">
         <div className="container position-relative"  style={{ zIndex: 999 }}>
            <div className="row justify-content-center">
               <div className="col-xl-7"  style={{ backgroundColor: '#00000080' }}>
                  <div className="text-center text-white">
                     {/* <!-- Page heading--> */}
                     <h1 className="mb-4">{translate('welcomeText')}</h1>
                     <div className="Banner-sec">
                        {/* <!-- Email address input--> */}
                        <div className="row">
                           <div className="col-sm-12">
                              <h4 className="pb-3">The word Lorem Ipsum is derived from the Latin word which means “pain itself”. It is a kind of a text filler tool that is used by the webmaster on the website. The word Lorem Ipsum is derived from</h4>
                              <div className="cstm-btn pb-3">
                                 <Link to ="https://www.youtube.com/@MYPunjabiTV" target='_blank'><img src={youTubeLogo} alt=""/><span>Youtube</span></Link>
                              </div>
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

export default HeroSection
