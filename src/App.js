import React from 'react'
import './style.css'
import Navbbar from './components/Navbar';
import Hero from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Skills from './components/Skills';
import Work from './components/Work';
import Contact from './components/Contact';

const App=() => {
  return (
    <>
    
    <div className="container">
      <Navbbar/>
      
    
    
    <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
    
    </>
  )
}

export default App