import React from "react";
import memImage from "../images/mem.jpg";
import "./aboutMe.css";
import { Container, Row, Col, Card } from "react-bootstrap";

//Create AboutMe component
const AboutMe = function () {
  return (
    <div 
        name="aboutMe" //Anchor point for navigation 
    >
    {/* In container there are image(meme) and card with information about me*/}
    {/* Row and cols in container create grid for pretty display */}
      <Container>
        <Row>
          <Col sm={4}>
            {/* Onclick meme redirects to website where i found meme */}
            <a href="https://i.redd.it/l5pwx2lmfsj61.jpg">
              <img className="memImage" src={memImage} alt="Mem zestawiający wymagania rynkowe z tym, czego uczymy się w szkołach"/>
            </a>
          </Col>
          <Col sm={8}>
            <Card className="aboutMeCard">
              <Card.Header className="aboutMeCardHeader">
                <h1>O mnie</h1>
              </Card.Header>
              <Card.Title className="aboutMeCardTitle">Hello World!</Card.Title>
              <Card.Body>
                <ul>
                  <li>Jestem Jakub, maniak programowania.</li>
                  <li>Mocno wziąłem sobie do serca tego mema.</li>
                  <li>
                    Jestem studentem w Warszawskiej Wyższej Szkole Informatyki,
                    na kierunku Data Science.
                  </li>
                  <li>
                    Jestem absolwentem technikum informatycznego ze zdobytymi
                    kwalifikacjami E12(budowa komputerów), E13(budowa sieci),
                    E14(budowa i administrowanie stronami internetowymi i bazami
                    danych).
                  </li>
                  <li>Jestem samoukiem w pozostałych polach informatyki.</li>
                  <li>
                    Jestem też instruktorem harcerskim, dzięki czemu umiejętności miękkie u
                    mnie nie leżą ;)
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { AboutMe };
