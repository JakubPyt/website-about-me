import React from "react";
import "./hardSkills.css";
//Import icons for buttons
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
            //Vars to define openness the containers with achivements
            openPython: false,
            openCsharp: false,
            openDB: false,
            openGit: false,
            openWebDev: false,
            openDataScience: false,
        };
    }
    //Called func change state element for true or false
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

    //Func return div with components certificates and challenges
    //TypeContainer is string about type of achivements eg. "Python" and others
    renderContainer(typeContainer) {
        return (
            <div className="placeForAchivements">
                <HardSkillsCertificates type = {typeContainer} />
                <HardSkillsChallenges type = {typeContainer} />
            </div>
        )
    }

    render() {
        return (
            <div 
                className="hardSkillsDiv" 
                name="hardSkills" //Anchor point for navigation 
            >
                <h1 className="hardSkillsHeader">Umiejętności twarde</h1>
                <p className="hardSkillsExplanation">Kliknij w zakładkę, aby zobaczyć certyfikaty i ukończone wyzwania programistyczne</p>

                {/* For each type there is button, which call func toggleContainer for change value on true or false */}
                <button onClick={this.toggleContainerPython.bind(this)} className="hardSkilsButton" > Python <FaPython /> </button>
                {/* If var in state for type is true, then call func render container for type */}
                {this.state.openPython === true ? this.renderContainer("Python") : null} 
                
                <button onClick={this.toggleContainerDB.bind(this)} className="hardSkilsButton" > Bazy danych <FiDatabase /> </button>
                {this.state.openDB === true ? this.renderContainer("Databases")  : null}
                
                <button onClick={this.toggleContainerDataScience.bind(this)} className="hardSkilsButton" > Data Science <BsClipboardData /> </button>
                {this.state.openDataScience === true ? this.renderContainer("DataScience")  : null}
                
                <button onClick={this.toggleContainerWebDev.bind(this)} className="hardSkilsButton" > Web Development <GiSpiderWeb /> </button>
                {this.state.openWebDev === true ? this.renderContainer("WebDev")  : null}
                
                <button onClick={this.toggleContainerCsharp.bind(this)} className="hardSkilsButton" > C# <SiCsharp /> </button>
                {this.state.openCsharp === true ? this.renderContainer("Csharp") : null}

                <button onClick={this.toggleContainerGit.bind(this)} className="hardSkilsButton" > Git <DiGitBranch /> </button>
                {this.state.openGit === true ? this.renderContainer("Git")  : null}
            </div>
        );
    }
}

export { HardSkills };
