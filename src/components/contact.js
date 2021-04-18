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
            </div>
        );
    }
}

export { Contact };