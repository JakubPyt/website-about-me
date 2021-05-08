import React from "react";
import "../components/contact.css";
//Import icons
import { AiFillLinkedin, AiFillGithub, AiOutlineSlack } from "react-icons/ai";
import { SiCodewars, SiHackerrank } from "react-icons/si";
import { FaFreeCodeCamp } from "react-icons/fa";
import { IconContext } from "react-icons";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    // In state are all my profiles
    // If you want add profile, import icon and add dict{website, link, icon} to state
    // The func createProfilesIcons will do the rest
    this.state = {
      profiles: [
        {
          website: "LinkedId",
          link: "https://www.linkedin.com/in/jakub-pyt/",
          icon: <AiFillLinkedin />,
        },
        {
          website: "GitHub",
          link: "https://github.com/JakubPyt",
          icon: <AiFillGithub />,
        },
        {
          website: "SoloLearn",
          link: "https://www.sololearn.com/profile/16942149",
          icon: <AiOutlineSlack />,
        },
        {
          website: "freeCodeCamp",
          link: "https://www.freecodecamp.org/jakubpyt",
          icon: <FaFreeCodeCamp />,
        },
        {
          website: "HackerRank",
          link: "https://www.hackerrank.com/pyt_jakub?hr_r=1",
          icon: <SiHackerrank />,
        },
        {
          website: "Codewars",
          link: "https://www.codewars.com/users/pyt_jakub",
          icon: <SiCodewars />,
        },
      ],
    };
  }
  // Func generate div inside which are circles for every profile
  // Func gets profiles from state
  createProfilesIcons(profiles) {
    return (
      // Div inside which are circles for every profile
      <div className="divForContactIcons">
        {/* Provider is only for change size of icons */}
        <IconContext.Provider value={{ size: "50%" }}>
          {profiles.map((profile) => (
            // Div singleProfile is for arrangement of circle and name of website
            <div key={profile.website} className="singleProfile">
              {/* a tag is outer circle */}
              <a className="aOuterCircle" href={profile.link}>
                {/* div is inner circle inside which is icon */}
                <div className="innerCircle">{profile.icon}</div>
              </a>
              <p>{profile.website}</p>
            </div>
          ))}
        </IconContext.Provider>
      </div>
    );
  }
  render() {
    return (
      <div 
        className="contactDiv" 
        name="contact" //Anchor point for navigation 
    >
        <h1 className="contactDivHeader">Kontakt</h1>
        <p>Zapraszam do kontaktu przez profil na LinkedIn</p>
        {this.createProfilesIcons(this.state.profiles)}
      </div>
    );
  }
}

export { Contact };
