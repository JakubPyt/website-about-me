import React from 'react';
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
                    </Col>
                </Row>
            </div>
        )
    }
}

export {SoftSkills}