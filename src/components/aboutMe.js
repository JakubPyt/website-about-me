import React from 'react';
import memImage from "../images/mem.jpg";
import './aboutMe.css';

class AboutMe extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img src={memImage}/>
            <div className="aboutMeDiv" >
            </div>
        )
    }
}

export {AboutMe}