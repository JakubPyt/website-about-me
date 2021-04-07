import React from 'react';
import meImage from '../images/me.jpg';
import {Card, Col, Row} from 'react-bootstrap';
class SoftSkills extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="softSkillsDiv">
                <Row>
                    <Col sm={8}>
                    </Col>
                    <Col sm={3} >
                        <img className="meImage" src={meImage} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export {SoftSkills}