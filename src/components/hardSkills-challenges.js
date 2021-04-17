import React from "react";
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
    render(){
        return(
            <div>
            </div>
        )
    }
}

export {HardSkillsChallenges};