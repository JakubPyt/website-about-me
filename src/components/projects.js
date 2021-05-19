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
      // It generates field
      <div className="placeForProjects">
        {
          // This map get all projects from state
          projects.map((project) => (
            // The whole card
            <Card key={project.name} className="projectCard">
              {/* Header */}
              <Card.Header className="projectCardHeader">
                {project.title}
              </Card.Header>

              <Card.Body className="projectCardBody">
                {/* mainTech */}
                Technologia przewodnia:{" "}
                <p className="projectCardMainTech"> {project.mainTech} </p>
                {/* tools */}
                {/* Not displayed if empty */}
                {project.tools.length == [] ? null : (
                  <div>
                    <p className="projectCardListHeader">Narzędzia:</p>
                    <div className="projectCardList">
                      {project.tools.map((tool) => (
                        <p className="projectCardListElement"># {tool}</p>
                      ))}
                    </div>
                  </div>
                )}
                {/* modules */}
                {/* Not displayed if empty */}
                {project.modules.length == [] ? null : (
                  <div>
                    <p className="projectCardList_p">Dodatkowe moduły:</p>
                    <div className="projectCardList">
                      {project.modules.map((module) => (
                        <p className="projectCardList_p_element"># {module}</p>
                      ))}
                    </div>
                  </div>
                )}
                {/* description */}
                Opis:{" "}
                <div className="projectCardDesc">{project.description}</div>
                {/* buttons */}
                <div className="projectCardButtonsSection">
                  {/* Run button */}
                  {/* Not displayed if empty */}
                  {project.link_run == "" ? null : (
                    <a href={project.link_run}>
                      <button className="projectCardButton">Uruchom</button>
                    </a>
                  )}

                  {/* Git button */}
                  <a href={project.link_git}>
                    <button className="projectCardButton">
                      Zobacz na GitHubie
                    </button>
                  </a>
                </div>
              </Card.Body>
              {/* type */}
              <div className="projectType">{project.type}</div>
            </Card>
          ))
        }
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
