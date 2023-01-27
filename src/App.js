import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Mid from './components/Mid';
import React from 'react';
import About from './components/About';
import { Work } from './components/Work';
import Project from './components/Projects';
import Other from './components/Other';
import Projects from './components/Projects';
import Hire from './components/Hire';
// import { Audio } from  'react-loader-spinner'

// import {Sugar} from 'react-preloaders';
function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Mid/>
      <About/>
      {/* <Sugar/> */}
      <Work/>
      <Projects/>
      <Other/>
      <Hire/>
    </div>
  );
}

export default App;
