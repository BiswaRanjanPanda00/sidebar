import './App.css';
import Navbar from './components/Navbar';
import { HiMenu } from 'react-icons/hi'
import { useState } from 'react'
import {BrowserRouter as Router ,  Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {

  const [showNav , SetshowNav] = useState(false)

  return (
    <>
      <Router>
      
        <header>
          <HiMenu onClick={() => SetshowNav(!showNav)}/>
        </header>

        <Navbar show={showNav}/>

        <div className="main">
          <Routes>
            <Route path="/" exact element={<Home />}></Route>
            <Route path="/about" exact element={<About />}></Route>
            <Route path="/contact" exact element={<Contact />}></Route>
          </Routes>
        </div>
      
      </Router>
      
    </>
  );
}

export default App;
