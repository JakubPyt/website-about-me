import React from "react";
import '../components/contact.css';

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