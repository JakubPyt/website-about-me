import React from 'react';
import mainImage from "../images/main.jpg";
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const imageStyle = {
            width: '100%'
        } 
        return(
            <div id="homeID">
                <img src={mainImage} style={imageStyle}/>
            </div>
        )
    }
}

export {Header}