import React from "react";
import "./softSkills.css";
import { Card, Col, Row } from "react-bootstrap";
import { AiFillInstagram } from "react-icons/ai";

const SoftSkills = function(){
    return (
        <div 
            className="softSkillsDiv" 
            name="softSkills" //Anchor point for navigation 
        >
        {/* There is card with header and information, and also my photo */}
        {/* Row and cols create grid for pretty display */}
          <Row>
            <Col sm={8}>
              <Card className="softSkillsCard" text="light">
                <Card.Header className="softSkillsCardHeader">
                  <h1>Kompetencje miękkie</h1>
                </Card.Header>
                <Card.Body>
                  <p>
                    Jak to programista, mam skłonności do introwertyzmu, ale
                    potrafię odnaleźć się w każdej sytuacji. Niech potwierdzeniem
                    moich kompetencji miękkich będą poniższe rezultaty:
                  </p>
                  <ul>
                    <li>
                      Kierowanie organizacją dwutygodniowego obozu dla 150 osób
                    </li>
                    <li>
                      Kierowanie organizacją wydarzenia jednodniowego dla 180 osób
                    </li>
                    <li>Praca w McDonald’s</li>
                    <li>
                      Dowodzenie około 20 osobową grupą młodzieżową przez okres 3
                      lat (2015-2018)
                    </li>
                    <li>
                      Dowodzenie 16 osobową grupą młodzieżową od 2018 roku, razem
                      z którą przeprowadzaliśmy kilka znaczących projektów, takich
                      jak remont domu dla starszej, ubogiej pani czy dostarczanie paczek 
                      kombatantom na święta. Tą grupą wciąż dowodzę, a o naszych przedsięwzięciach 
                      można doczytać na naszym instagramie: 
                    </li>
                  </ul>
                  <div className="softSkillsInstagram">
                    <a href="https://www.instagram.com/druzyny_z_pradoliny/">
                      <AiFillInstagram className="softSkillsInstagramIcon" />
                    </a>
                    <p>#druzyny_z_pradoliny</p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={3}>
              <img 
                className="meImage" 
                src='https://lh3.googleusercontent.com/JdCIAR09KGKMrt8gIvgl7MGru1IASgsLYXiuiVraLhUvOiQKoo6gPJwNAnQWwdxalSb1Na2IpM6JzqEYxUe1DmqTrJ6n6EXD5A-WldDRAk7wKG68ZbJl2bRg7tIHtulDAtm5MtP1mg=w2400' 
                alt="Problem ze zdjęciem..."
              />
            </Col>
          </Row>
        </div>
      );
}


export { SoftSkills };
