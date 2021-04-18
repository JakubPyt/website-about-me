import React from "react";
import '../components/contact.css';
import {AiFillLinkedin, AiFillGithub, AiOutlineSlack} from 'react-icons/ai';
import {SiCodewars, SiHackerrank} from 'react-icons/si';
import {FaFreeCodeCamp} from 'react-icons/fa';

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contactDiv">
                <h1>Kontakt</h1>
                <p>Zapraszam do kontaktu na profilu LinkedIn</p>
                <div className="divForContactIcons">
                    <div className="singleProfile">
                        <a href="https://www.linkedin.com/in/jakub-pyt-9449b4204/">
                            <div className="circleForIcons">
                                <AiFillLinkedin className="icon"/>
                            </div>
                        </a>
                        LinkedIn
                    </div>
                    <div className="singleProfile">
                        <a href="https://github.com/JakubPyt">
                            <div className="circleForIcons">
                                <AiFillGithub className="icon"/>
                            </div>
                        </a>
                        GitHub
                    </div>
                    <div className="singleProfile">
                        <a href="https://www.sololearn.com/profile/16942149">
                            <div className="circleForIcons">
                                <AiOutlineSlack className="icon"/>
                            </div>
                        </a>
                        SoloLearn
                    </div>
                    <div className="singleProfile">
                        <a href="https://www.freecodecamp.org/jakubpyt">
                            <div className="circleForIcons">
                                <FaFreeCodeCamp className="icon"/>
                            </div>
                        </a>
                        freeCodeCamp
                    </div>
                    <div className="singleProfile">
                        <a href="https://www.hackerrank.com/pyt_jakub?hr_r=1">
                            <div className="circleForIcons">
                                <SiHackerrank className="icon"/>
                            </div>
                        </a>
                        HackerRank
                    </div>
                    <div className="singleProfile">
                        <a href="https://www.codewars.com/users/pyt_jakub">
                            <div className="circleForIcons">
                                <SiCodewars className="icon"/>
                            </div>
                        </a>
                        Codewars
                    </div>
                </div>
            </div>
        );
    }
}

export { Contact };