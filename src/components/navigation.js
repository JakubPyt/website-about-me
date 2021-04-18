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
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Item>
                <Nav.Link href="#aboutMeID">O mnie</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#softSkillsID">Umiejętności miękkie</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#hardSkillsID">Umiejętności twarde</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#contactID">Kontakt</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export { Navigation };
