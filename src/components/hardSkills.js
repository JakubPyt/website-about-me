import React from "react";
import "./hardSkills.css";

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

    render() {
        return (
            <div className="hardSkillsDiv">
                <h1>Umiejętności twarde</h1>
            </div>
        );
    }
}

export { HardSkills };
