import React from 'react';
import './softSkills.css';
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
                        <Card className="softSkillsCard" bg="dark" text="light">
                        <Card.Header className="cardHeader">Umiejętności miękkie</Card.Header>
                        <Card.Body className="cardBody">
                            <p>Jak to programista, mam skłonności do introwertyzmu, ale potrafię odnaleźć się w każdej sytuacji. Niech potwierdzeniem moich umiejętności miękkich będą poniższe rezultaty:</p>
                            <ul>
                                <li>Kierowanie organizacją dwutygodniowego obozu dla 150 osób</li>
                                <li>Kierowanie organizacją wydarzenia jednodniowego dla 180 osób</li>
                                <li>Praca w McDonald’s</li>
                                <li>Dowodzenie około 20 osobową grupą młodzieżową przez okres 3 lat(2015-2018)</li>
                                <li>Dowodzenie 16 osobową grupą młodzieżową od 2018 roku, razem z którą przeprowadzaliśmy kilka znaczących projektów, takich jak remont domu dla starszej, ubogiej pani, akcje dostarczania paczek kombatantom w naszych okolicach. Tą grupą wciąż dowodzę, a o naszych przedsięwzięciach można doczytać na naszym instagramie:</li>
                            </ul>
                        </Card.Body>
                        </Card>
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