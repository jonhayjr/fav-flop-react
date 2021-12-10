import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

/*Import Components*/
import Header from './Header/Header';
import Flops from './Flops/Flops';
import About from './About/About';
import Footer from './Footer/Footer';

const  App = () => {
  return (
    <div>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Flops/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
