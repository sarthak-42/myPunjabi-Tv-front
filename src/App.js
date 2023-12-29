// import logo from './logo.svg';
import './App.css';
// import { LanguageProvider } from './utils/LanguageContext';
import { LanguageProvider } from '../src/utils/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {Route, BrowserRouter as Router , Routes} from 'react-router-dom'
import Home from './pages/Home';
function App() {
  return (
    <LanguageProvider>
    <div className="App">
      
      <Router>
        <Routes>
        <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
    </div>
    </LanguageProvider>
  );
}

export default App;
