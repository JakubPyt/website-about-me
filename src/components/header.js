import React from 'react';

class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <h1>Hello World from header!</h1>
            </div>
        )
    }
}

export {Header}