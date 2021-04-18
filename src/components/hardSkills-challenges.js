import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";
import './hardSkills-challenges.css';

class HardSkillsChallenges extends React.Component {
    constructor(props){
        super(props);
        //Data about solved challenges
        this.state = {
            challengesPython: [
                {
                    website: "SoloLearn",
                    solvedChallenges: 31
                },
                {
                    website: "HackerRank",
                    solvedChallenges: 3
                }
            ],
            challengesCsharp: [
                {
                    website: "SoloLearn",
                    solvedChallenges: 11
                },
                {
                    website: "HackerRank",
                    solvedChallenges: 4
                },
                {
                    website: "Code Wars",
                    solvedChallenges: 3
                }],
            challengesDB: [
                {
                    website: "Hacker Rank",
                    type: "Ogólnie bazy danych",
                    solvedChallenges: 16
                },
                {
                    website: "Hacker Rank",
                    type: "MS SQL",
                    solvedChallenges: 9
                },
                {
                    website: "Code Wars",
                    type: "PostgreSQL",
                    solvedChallenges: 6
                },{
                    website: "SoloLearn",
                    type: "MySQL",
                    solvedChallenges: 4
                },
            ]
        }
    }
    //Func generate card with data about solved challenges by type
    createChallengesCard(challengesAbout){
        return (
            <ListGroup className="listChallenges" >
                <ListGroupItem className="titleListGroup"><h5>Rozwiązane wyzwania programistyczne na stronach:</h5> </ListGroupItem>
                {challengesAbout.map((challenges) => (
                    <ListGroupItem variant="dark"><b>{challenges.website}</b>: {challenges.solvedChallenges}
                        {challenges.type != null ? <p className="pType">({challenges.type})</p>  : null}
                    </ListGroupItem>
                ))}
            </ListGroup>
        )
    }
    //Func call right func by type, to display it
    renderSwitch(type){
        switch(type){
            case "Python":
                return this.createChallengesCard(this.state.challengesPython);
            case "Csharp":
                return this.createChallengesCard(this.state.challengesCsharp);
            case "Databases":
                return this.createChallengesCard(this.state.challengesDB);
            default:
                return null;
        }
    }
    render(){
        return(
            <div>
                {/* Type of solved challenges is download from hardSkils, then renderSwitch chooses 
                right function, createChallengesCard generate card and then, card is display in hardSkills Component
                */}
                {this.renderSwitch(this.props.type)}
            </div>
        )
    }
}

export {HardSkillsChallenges};