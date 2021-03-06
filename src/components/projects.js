import React from "react";
import "./projects.css";
import { ProjectsCards } from "./projects-cards";
import { AiFillStar } from "react-icons/ai";
class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // This elements of state switch displayed card with projects
      openProjects_MachineLearning: true,
      openProjects_ComputerApps: false,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: false,
    };
  }

  // Next four functions switch displayed card
  toggleContainerCA() { // Analytical Apps
    this.setState({
      openProjects_ComputerApps: true,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: false,
      openProjects_MachineLearning: false,
    });
  }
  toggleContainerDA() { // Data Analysis
    this.setState({
      openProjects_ComputerApps: false,
      openProjects_DataAnalysis: true,
      openProjects_WebDev: false,
      openProjects_MachineLearning: false,
    });
  }
  toggleContainerWD() { // Web Dev
    this.setState({
      openProjects_ComputerApps: false,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: true,
      openProjects_MachineLearning: false,
    });
  }
  toggleContainerML() { // Machine Learning Projects
    this.setState({
      openProjects_ComputerApps: false,
      openProjects_DataAnalysis: false,
      openProjects_WebDev: false,
      openProjects_MachineLearning: true,
    });
  }

  // This function is called when element from state has value 'true'
  // This function call projects-cards component,
  // which return place for cards with cards from chosen category
  renderContainer(typeContainer) {
    return (
      <div>
        <ProjectsCards type={typeContainer} />
      </div>
    );
  }

  render() {
    return (
      <div
        className="projectsDiv" //For style
        name="projects" // For navigation
      >
        {/* Header with buttons to switch displayed projects category 
            Buttons call toggle container function for them category
            Toggle container function change state for category to true, and for other categories to false
        */}
        <h1 className="projectsHeader">Moje projekty</h1>
        <p className="project-comment">
          Projekty z <AiFillStar /> to te projekty, z kt??rych jestem najbardziej dumny.
        </p>
        <div className="switchButtons">
          {/* Button with category, which has value true in state gets class 'active' */}
          <button
            onClick={this.toggleContainerML.bind(this)}
            className={`switchButton ${this.state.openProjects_MachineLearning ? 
              "switchButtonActive" : "" } `}
          >
            Machine Learning
          </button>
          <button
            onClick={this.toggleContainerDA.bind(this)}
            className={`switchButton ${this.state.openProjects_DataAnalysis ? 
              "switchButtonActive" : "" } `}
          >
            Analiza danych i wizualizacja
          </button>
          <button
            onClick={this.toggleContainerCA.bind(this)}
            className={`switchButton ${this.state.openProjects_ComputerApps ? 
              "switchButtonActive" : "" } `}
          >
            Aplikacje na komputer
          </button>
          <button
            onClick={this.toggleContainerWD.bind(this)}
            className={`switchButton ${this.state.openProjects_WebDev 
              ? "switchButtonActive" : ""} `}
          >
            Web development
          </button>
        </div>

        {/* When value of state element is true, ternary operators below call render container function with them category.
            Next - from render container function is returned place for cards with cards from specific category.  
        */}
        {this.state.openProjects_ComputerApps === true
          ? this.renderContainer("CA")
          : null}

        {this.state.openProjects_DataAnalysis === true
          ? this.renderContainer("DA")
          : null}

        {this.state.openProjects_WebDev === true
          ? this.renderContainer("WD")
          : null}

        {this.state.openProjects_MachineLearning === true
          ? this.renderContainer("ML")
          : null}
      </div>
    );
  }
}

export { Projects };
