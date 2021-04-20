import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
//Import components
import {Navigation} from './components/navigation';
import {Header} from './components/header'; 
import {AboutMe} from './components/aboutMe';
import {SoftSkills} from './components/softSkills';
import {HardSkills} from './components/hardSkills';
import {Contact} from './components/contact';
import {Projects} from './components/projects';

function App() {
  return (
      <div className="App">
        {/* Display all components */}
        <Navigation/>
        <Header/>
        <AboutMe/>
        <SoftSkills/>
        <HardSkills/>
        <Projects/>
        <Contact/>
      </div>
  );
}

export default App;
