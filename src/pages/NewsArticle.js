import React, { useEffect , useState } from 'react'
import Navbar from '../components/common/Navbar'
import '../style/style.css'
import axios from 'axios';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
// import LinkedIn from '@mui/icons-material/LinkedIn';
import 'bootstrap/dist/css/bootstrap.min.css';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { Link } from 'react-router-dom';
// import img from '../../assets/images/latest-news.png'
import add from '../assets/images/add1.png'
import { useParams } from 'react-router-dom';
import { useLanguage } from '../utils/LanguageContext'
import add2 from '../assets/images/news_card.png'
import Footer from '../components/common/Footer';
import author from '../assets/images/user.png'
const NewsArticle = () => {
   window.scroll(0,0)
    const {id} = useParams();
    console.log(id)
    const { changeLanguage, language, translate } = useLanguage();
    const [article , setArticle]= useState(null);
    const getNewsById = async (lang, id) => {
        try {
         
          const response = await axios.get(`https://mypunjabitv-server.onrender.com/api/news/getnews/${lang}/${id}`);
          console.log("News by ID >>", response.data);
          // Handle the fetched news data as needed, maybe set it to state or return it
            setArticle(response.data)
        } catch (error) {
          console.log("Error fetching news by ID:", error);
        ; // You can handle this error in the component where you call this function
        }
      };
      useEffect(() => {
        // eslint-disable-next-line 
       getNewsById(language, id);
        
   }, [language, id]);

   const formatDate = (dateString) => {
      const [year, month, day] = dateString.split('-');
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      return `${monthNames[parseInt(month) - 1]}-${day}-${year}`;
    };
  return (
    <div>
    <Navbar changeLanguage={changeLanguage} currentLanguage={language}/>
    <section>
         <div className="live-news features latest-news blog">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-9">
                    <div className="blog-card"> 
                    {article?   <div className="post-date-ribbon">
                        <div className="corner"></div>
                        {formatDate(article.createdAt)}
                        </div> : 'January-1-2024' }
                                        
                       <div className="about-right">
                          <div className="about-img">
                            {article?  <img src={article.img}     style={{ maxWidth: '100%', height: 'auto', width: '100%', maxHeight: '500px' }}  alt={article.title}/> : <h3>Loading...</h3> }
                            </div>
                          </div>
                          <div className="section-tittle text-start">
                          {article ? <h3>{article.title}</h3> : <h3>Loading...</h3>}
                          </div>
                        {  article?  <p className="about-pera1 text-start"> {article.description}</p> : <p className="about-pera1"> Loading...</p>}

                        <div className="social-medialinks text-start">
                           <h5>Follow Us:</h5>
                           <ul className="my-3">
                              <li><Link to="https://www.facebook.com/tvmypunjabi" target='_blank'><FacebookIcon/></Link></li>
                              <li><Link to="https://www.instagram.com/mypunjabitv" target='_blank'><InstagramIcon/></Link></li>
                              <li><Link to="https://twitter.com/mypunjabitv" target='_blank'><TwitterIcon/></Link></li>
                              <li><Link to="https://www.youtube.com/@MYPunjabiTV" target='_blank'><YouTubeIcon/></Link></li>
                              <li><Link to="https://in.pinterest.com/mypunjabitv" target='_blank'> <PinterestIcon/> </Link></li>
                           </ul>
                        </div>
                        <div className="row">
                       <div className="col-md-2">
                       <div className="about-author">
                           <div className="media text-end">
                              <img className="align-self-start mr-3 w-20" src={author} alt="" />
                           </div>
                        </div> 
                        </div>
                        <div className="col-md-10">
                        <div className="media-body text-start">
                                 <h6><strong>{translate('newsAuthorName')}</strong></h6>
                                 <Link to="https://www.linkedin.com/in/sarthak-418873228/" target='_blank' className="text-decoration-none py-2">Santosh</Link>
                                 <p>I am Santosh Thakur a Senior Web Designer at vp broadband. I have 4 years of experience 
                                    developing online solutions for brands like Web Applications,  UI/UX etc... I am here 
                                    to share my knowledge and answer some of the most asked questions about enterprise solutions on the internet.</p>
                                 </div>
                        </div>
                       </div>
                       </div>
                       

                             {/* <p className="about-pera1">Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.</p>
                             <p className="about-pera1">
                                My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from.
                                the refractor telescope uses a convex lens to focus the light on the eyepiece.
                                The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see.
                                Collimation is a term for how well tuned the telescope is to give you a good clear image of what you are looking at. You want your telescope to have good collimation so you are not getting a false image of the celestial body.
                                Aperture is a fancy word for how big the lens of your telescope is. But it’s an important word because the aperture of the lens is the key to how powerful your telescope is. Magnification has nothing to do with it, its all in the aperture.
                                Focuser is the housing that keeps the eyepiece of the telescope, or what you will look through, in place. The focuser has to be stable and in good repair for you to have an image you can rely on.
                                Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount.
                                Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                             </p> */}
                          {/* <div className="section-tittle">
                             <h3>Unordered list style?</h3>
                          </div> */}
                             {/* <p className="about-pera1">The refractor telescope uses a convex lens to focus the light on the eyepiece.
                                The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see.
                             </p>
                             <p className="about-pera1">Collimation is a term for how well tuned the telescope is to give you a good clear image of what you are looking at. You want your telescope to have good collimation so you are not getting a false image of the celestial body.</p>
                             <p className="about-pera1">
                                My hero when I was a kid was my mom. Same for everyone I knew. Moms are untouchable. They’re elegant, smart, beautiful, kind…everything we want to be. At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top, makes me so proud of how far I’ve come, and so thankful for where I come from.
                                the refractor telescope uses a convex lens to focus the light on the eyepiece.
                                The reflector telescope has a concave lens which means it bends in. It uses mirrors to focus the image that you eventually see.
                                Collimation is a term fo
                                Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                             </p>
                             <p className="about-pera1">
                                Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount.
                                Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                             </p>
                             <p className="about-pera1">
                                Mount and Wedge. Both of these terms refer to the tripod your telescope sits on. The mount is the actual tripod and the wedge is the device that lets you attach the telescope to the mount.
                                Moms are like…buttons? Moms are like glue. Moms are like pizza crusts. Moms are the ones who make sure things happen—from birth to school lunch.
                             </p> */}
                       </div>
                   
                    <div className="col-lg-3">
                     <div className="blog-card">

                    
                       <div className="news-poster d-none d-lg-block fixed">
                          <img src={add2} alt=""/>
                          <img className="mt-5" src={add} alt=""/>
                       </div>
                       </div>
                    </div>
                 </div>
            </div>
            </div>
      </section>
      <Footer/>
        </div>
      
  )
}

export default NewsArticle
