import React from "react";
//Import header image
import mainImage from "../images/main.jpg";

//Create Header component
const Header = function () {
  //Below are all styles for component, so there is no .css file for component
  const imageStyle = {
    width: "100%",
  };
  return (
    <div 
      name="home" //Anchor point for navigation 
      id="header" //Navbar gets height of this div by id
    >
      <img
        src={mainImage}
        style={imageStyle}
        alt="Coś z obrazkiem poszło nie tak. W każdym razie tu jestem ja na tle gór ;)"
      />
    </div>
  );
};

export { Header };
