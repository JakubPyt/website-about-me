import React from "react";
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
              <img 
              className="memImage" 
              src='https://lh3.googleusercontent.com/Y7oOemC7V9lPlJwp1pvWdAZq_mLkLZ_aT5sSc6aVoOZq1CpGSFjLYpOLzGoNWN4U-KWYLXsHt1zxh18S8THJOG3eqEX8XyK1b6b1_9V39cDe0m4gmIttPdXfkLHhasGSrwiNyw5UlA=w2400' 
              alt="Mem zestawiający wymagania rynkowe z tym, czego uczymy się w szkołach"/>
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
                  <li>Jestem Jakub.</li>
                  <li>
                    Jestem studentem w Warszawskiej Wyższej Szkole Informatyki,
                    na kierunku Data Science (i to ta dziedzina informatyki interesuje mnie najbardziej).
                  </li>
                  <li>
                    Jestem absolwentem technikum informatycznego ze zdobytymi
                    kwalifikacjami E12 (budowa komputerów), E13 (budowa sieci),
                    E14 (budowa i administrowanie stronami internetowymi i bazami
                    danych).
                  </li>
                  <li>
                    Będąc świadomym że w widocznym obrazku, kryje się sporo prawdy, postanowiłem zostać samoukiem.
                    I jak postanowiłem, tak też zrobiłem - co można zobaczyć w umiejętnościach twardych oraz w projektach.
                  </li>
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
