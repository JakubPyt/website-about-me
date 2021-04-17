import React from "react";
import "./hardSkills.css";
//Import icons
import { Button } from "react-bootstrap";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { FiDatabase } from "react-icons/fi";
import { DiGitBranch } from "react-icons/di";
import { GiSpiderWeb } from "react-icons/gi";
import { BsClipboardData } from "react-icons/bs";
import { HardSkillsCertificates } from "./hardSkills-certificates";
import { HardSkillsChallenges } from "./hardSkills-challenges";

class HardSkills extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            //Is display containers with certificates
            openPython: false,
            openCsharp: false,
            openDB: false,
            openGit: false,
            openWebDev: false,
            openDataScience: false,
        };
    }
    //Called func change state right state element for true or false  
    toggleContainerPython() {
        this.setState({ openPython: !this.state.openPython });
    }
    toggleContainerCsharp() {
        this.setState({ openCsharp: !this.state.openCsharp });
    }
    toggleContainerDB() {
        this.setState({ openDB: !this.state.openDB });
    }
    toggleContainerGit() {
        this.setState({ openGit: !this.state.openGit });
    }
    toggleContainerWebDev() {
        this.setState({ openWebDev: !this.state.openWebDev });
    }
    toggleContainerDataScience() {
        this.setState({ openDataScience: !this.state.openDataScience });
    }
    //Called func display achivements by type
    renderContainer(typeContainer) {
        return (
            <div className="placeForAchivements">
            </div>
        )
    }

    render() {
        return (
            <div className="hardSkillsDiv">
                <h1>Umiejętności twarde</h1>
                <Button onClick={this.toggleContainerPython.bind(this)} variant="success"> Python <FaPython /> </Button>
                <Button onClick={this.toggleContainerCsharp.bind(this)} variant="success"> C# <SiCsharp /> </Button>
                <Button onClick={this.toggleContainerDB.bind(this)} variant="success"> Bazy danych <FiDatabase /> </Button>
                <Button onClick={this.toggleContainerGit.bind(this)} variant="success"> Git <DiGitBranch /> </Button>
                <Button onClick={this.toggleContainerWebDev.bind(this)}variant="success"> Web Development <GiSpiderWeb /> </Button>
                <Button onClick={this.toggleContainerDataScience.bind(this)} variant="success"> Data Science <BsClipboardData /> </Button>
            </div>
        );
    }
}

export { HardSkills };
