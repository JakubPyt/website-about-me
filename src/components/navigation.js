import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav>
            <Navbar.Brand href="#homeID">
              <AiOutlineDoubleLeft />
              PYT
              <AiOutlineDoubleRight />
            </Navbar.Brand>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export { Navigation };
