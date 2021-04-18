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
            <div className="aboutMeDiv" >
                    <Container>
                        <Row>
                            <Col sm={4} >
                                <img className="memImage" src={memImage} />
                            </Col>
                            <Col sm={8}>
                                <Card className="aboutMeCard" bg="dark" text="light">
                                    <Card.Header className="cardHeader">O mnie</Card.Header>
                                    <Card.Title className="cardTitle">Hello World!</Card.Title>
                                    <Card.Body>
                                        <ul>
                                            <li>Jestem Jakub, maniak programowania.</li>
                                            <li>Mocno wziąłem sobie do serca tego <a href="https://i.redd.it/l5pwx2lmfsj61.jpg">mema</a>.</li>
                                            <li>Jestem studentem w Warszawskiej Wyższej Szkole Informatyki, na kierunku Data Science.</li>
                                            <li>Jestem absolwentem technikum informatycznego ze zdobytymi kwalifikacjami E12(budowa komputerów), E13(budowa sieci), E14(budowa i administrowanie stronami internetowymi i bazami danych).</li>
                                            <li>Jestem samoukiem w pozostałych polach informatyki.</li>
                                            <li>Jestem też harcerzem, dzięki czemu umiejętności miękkie u mnie nie leżą ;)</li>
                                        </ul>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                
            </div>
        )
    }
}

export {AboutMe}