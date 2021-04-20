import React from "react";
import { Link } from "react-scroll";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import "./navigation.css";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
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
              <h1>
                <AiOutlineDoubleLeft />
                PYT
                <AiOutlineDoubleRight />
              </h1>
            </div>
          </Link>

          {/* Other items of navbar */}
          <div className="navbarItems">
            <Link
              to="aboutMe"
              className="navbarItem"
              smooth={true}
              duration={500}
            >
              <p>O mnie</p>
            </Link>
            <Link
              to="softSkills"
              className="navbarItem"
              smooth={true}
              duration={500}
            >
              <p>Umiejętności miękkie</p>
            </Link>
            <Link
              to="hardSkills"
              className="navbarItem"
              smooth={true}
              duration={500}
            >
              <p>Umiejętności twarde</p>
            </Link>
            <Link
              to="contact"
              className="navbarItem"
              smooth={true}
              duration={500}
            >
              <p>Kontakt</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export { Navigation };
