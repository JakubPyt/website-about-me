import React from "react";
import { ListGroupItem, ListGroup } from "react-bootstrap";
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
        }
    render(){
        return(
            <div>
            </div>
        )
    }
}

export {HardSkillsChallenges};