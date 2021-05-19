import React from "react";
import "./projects.css";
import { Card } from "react-bootstrap";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  // The function generates a field with cards with information from state
  createProjectsCards(projects) {
    return (
      </div>
    );
  }
  render() {
    return (
      <div 
        className="projectsDiv" //For style
        name="projects" // For navigation
        >

        <h1 className="projectsHeader">Moje projekty</h1>

        {/* Function below generates whole content */}
        {this.createProjectsCards(this.state.projects)}
      </div>
    );
  }
}

export { Projects };
