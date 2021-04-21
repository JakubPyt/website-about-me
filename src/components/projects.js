import React from 'react';
import './projects.css';

class Projects extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="projectsDiv" name="projects">
                <h1 className="projectsHeader">Moje projekty</h1>
            </div>
        )
    }
}

export {Projects};