import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";
import "./hardSkills-challenges.css";

class HardSkillsChallenges extends React.Component {
  constructor(props) {
    super(props);
    //Data about solved challenges
    //To add new type of solved challenges you should add data into state, and change renderSwitch func
    this.state = {
      challengesPython: [
        {
          website: "SoloLearn",
          solvedChallenges: 31,
        },
        {
          website: "HackerRank",
          type: 'Python',
          solvedChallenges: 11,
        },
        {
          website: "HackerRank",
          type: 'Problem Solving',
          solvedChallenges: 6,
        },
      ],
      challengesCsharp: [
        {
          website: "SoloLearn",
          solvedChallenges: 11,
        },
        {
          website: "HackerRank",
          solvedChallenges: 4,
        },
        {
          website: "Code Wars",
          solvedChallenges: 3,
        },
      ],
      challengesDB: [
        {
          website: "Kaggle",
          type: "BigQuery",
          solvedChallenges: 22,
        },
        {
          website: "HackerRank",
          type: "Ogólnie bazy danych",
          solvedChallenges: 16,
        },
        {
          website: "HackerRank",
          type: "MS SQL",
          solvedChallenges: 9,
        },
        {
          website: "Code Wars",
          type: "PostgreSQL",
          solvedChallenges: 6,
        },
        {
          website: "SoloLearn",
          type: "MySQL",
          solvedChallenges: 4,
        },
      ],
      challengesDataScience: [
        {
          website: "SoloLearn",
          solvedChallenges: 15,
        },
        {
          website: "HackerRank",
          type: 'Statistics',
          solvedChallenges: 7,
        },
        {
          website: "HackerRank",
          type: 'Artificial Intelligence',
          solvedChallenges: 1,
        },
      ],
    };
  }
  //Func generate card with data about solved challenges by type
  createChallengesCard(challengesAbout) {
    return (
      <ListGroup className="cardAboutChallenges">
        <ListGroupItem className="titleCardAboutChallenges">
          <h5>Rozwiązane wyzwania programistyczne na stronach:</h5>{" "}
        </ListGroupItem>
        <ListGroupItem className="websitesCardAboutChallenges">
          <ul>
            {challengesAbout.map((challenges) => (
              <li key={challenges.name}>
                <b>{challenges.website}</b>: {challenges.solvedChallenges}{" "}
                
                {challenges.type != null ? `- `+ challenges.type : null}
              </li>
            ))}
          </ul>
        </ListGroupItem>
      </ListGroup>
    );
  }

  //Func call createChallengesCard func by type, to display it
  renderSwitch(type) {
    switch (type) {
      case "Python":
        return this.createChallengesCard(this.state.challengesPython);
      case "Csharp":
        return this.createChallengesCard(this.state.challengesCsharp);
      case "Databases":
        return this.createChallengesCard(this.state.challengesDB);
      case "DataScience":
        return this.createChallengesCard(this.state.challengesDataScience);
      default:
        return null;
    }
  }
  render() {
    return (
      <div>
        {/* Type of solved challenges is download from hardSkils, then renderSwitch chooses 
                right function, createChallengesCard generate card and then, card is display in hardSkills Component
                */}
        {this.renderSwitch(this.props.type)}
      </div>
    );
  }
}

export { HardSkillsChallenges };