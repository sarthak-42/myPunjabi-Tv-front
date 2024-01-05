// import logo from './logo.svg';
import './App.css';
// import { LanguageProvider } from './utils/LanguageContext';
import { LanguageProvider } from '../src/utils/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Route, BrowserRouter as Router , Routes} from 'react-router-dom'
import Home from './pages/Home';
import NewsArticle from './pages/NewsArticle';
import NewsPage from './pages/NewsPage';
import Contact from './pages/Contact';
import TermsPage from './pages/TermsPage';
// import Videos from './pages/Videos';
function App() {
  return (
    <LanguageProvider>
    <div className="App">
      
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/news/:id' element={<NewsArticle/>}/>
        <Route path='/news'element= {<NewsPage/>}/>
        <Route path='/contact-us'element= {<Contact/>}/>
        <Route path='/terms&conditions'element= {<TermsPage/>}/>
        {/* <Route path='/videos'element= {<Videos/>}/> */}
        </Routes>
      </Router>
    </div>
    </LanguageProvider>
  );
}

export default App;
