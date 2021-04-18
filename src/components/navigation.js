import React from "react";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export { Navigation };
