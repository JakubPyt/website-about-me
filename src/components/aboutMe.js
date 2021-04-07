import React from 'react';
import memImage from "../images/mem.jpg";

class AboutMe extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img src={memImage}/>
        )
    }
}

export {AboutMe}