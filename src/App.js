import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Header} from './components/header'; 
import {AboutMe} from './components/aboutMe';
import {SoftSkills} from './components/softSkills';
import {HardSkills} from './components/hardSkills';
import {Contact} from './components/contact';

function App() {
  return (
    <div className="">
      <Header/>
      <AboutMe/>
      <SoftSkills/>
      <HardSkills/>
      <Contact/>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
