import React from "react";
import "./projects.css";
import { Card } from "react-bootstrap";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // This elements of state switch displayed card with projects
      openProjects_MachineLearning: true,
      openProjects_AnalyticalApps: false,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: false,
    };
  }
  // Next four functions switch displayed card
  toggleContainerAA() { // Analytical Apps
    this.setState({
      openProjects_AnalyticalApps: true,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: false,
      openProjects_MachineLearning: false,
    });
  }
  toggleContainerDA() { // Data Analysis
    this.setState({ 
      openProjects_AnalyticalApps: false,
      openProjects_DataAnalysis: true,
      openProjects_WebDev: false,
      openProjects_MachineLearning: false,
    });
  }
  toggleContainerWD() { // Web Dev
    this.setState({ 
      openProjects_AnalyticalApps: false,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: true,
      openProjects_MachineLearning: false,
    });
  }
  toggleContainerML() { // Machine Learning Projects
    this.setState({
      openProjects_AnalyticalApps: false,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: false,
      openProjects_MachineLearning: true,
    })
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
