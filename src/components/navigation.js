import React from "react";
import { Link } from "react-scroll";
import "./navigation.css";
import { AiOutlineFork } from 'react-icons/ai';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heightHeader: 0, //Height of header image
      heightNavbar: 0,
      opacity: 0,
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  /* Background of navbar is dynamically displayed. How it works?
        In componentDidMount:
            There is a clientHeight, which gets height of header image and height of navbar div(without backgorund)
            Then height is save to state
            Also there is event listener, which call handleScroll func
        In handleScroll:
            There is dynamically calculated opacity 
            Then, opacity is save to state
        In render:
            Div with className navbarBackground have dynamically assigned opacity
            navbarBackground should been dislayed when it is in half of header image
             */
  handleScroll() {
    const opacity = (window.pageYOffset - this.state.heightHeader * 5) / 100;
    this.setState({ opacity });
  }
  componentDidMount() {
    if(window.innerWidth > 760){
      window.addEventListener("scroll", this.handleScroll);
      const heightHeader = document.getElementById("header").clientHeight;
      const heightNavbar = document.getElementById("navbar").clientHeight;
      this.setState({ heightHeader, heightNavbar });
    }
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }
  notMobile(){
    return(
          
        
          <div className="navbarItems">
            {/* Other items of navbar */}
            <Link
              to="aboutMe"
              className="navbarItem"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <p>O mnie</p>
            </Link>
            <Link
              to="softSkills"
              className="navbarItem"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <p>Kompetencje miękkie</p>
            </Link>
            <Link
              to="hardSkills"
              className="navbarItem"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <p>Kompetencje twarde</p>
            </Link>
            <Link
              to="projects"
              className="navbarItem"
              smooth={true}
              duration={500}
              offset={-100}
            >
              <p>Moje projekty</p>
            </Link>
            <Link
              to="contact"
              className="navbarItem"
              smooth={true}
              duration={500}
              offset={-50}
            >
              <p>Kontakt</p>
            </Link>
          </div>
    )
  }
  render() {
    return (
      <div>
        {/* navbarBackground has dynamically calculated opacity */}
        <div
          className="navbarBackground"
          style={{
            height: this.state.heightNavbar,
            opacity: this.state.opacity,
          }}
        ></div>
        {/* Main part of navbar 
                All links has smooth scroll to name elements of components
        */}
        <div className="navbar" id="navbar">

          {/* Navbar brand */}
          <Link 
            to="home" 
            smooth={true} 
            duration={500}
          >
            <div className="navbarBrand">
              <h1 style={{fontWeight:'bold'}}>
                P<AiOutlineFork/>T
              </h1>
            </div>
          </Link>
          {/* Tabs are not displayed on small screens  */}
          {window.innerWidth > 760 ? this.notMobile() : null}

        </div>
      </div>
    );
  }
}

export { Navigation };
