import React from 'react';
import memImage from "../images/mem.jpg";
import './aboutMe.css';
import {Container, Row, Col, Card} from 'react-bootstrap';

class AboutMe extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img src={memImage}/>
            <div className="aboutMeDiv" >
                    <Container>
                        <Row>
                            <Col sm={4} >
                                <img className="memImage" src={memImage} />
                            </Col>
                            <Col sm={8}>
                            </Col>
                        </Row>
                    </Container>
                
            </div>
        )
    }
}

export {AboutMe}