import React from "react";
import PropTypes from "prop-types";

export const Profile = (props) => {
   // const handleName = (name) =>{
     //   alert(`Hello,${name}`);
 // props.handleName(`I m  ${props.fullName} `);
  return (
    <>
      <img src={props.src} alt="" />
      {props.children}
      <h2>{props.fullName}

      </h2>
      <h5>{props.profession}</h5>
      <p> {props.bio}</p>
      
    </>
  );
};

Profile.defaultProps = {
  fullName: "Sara Elarbi",
  profession: "Etudiante",
  bio:
    "Etudiante en Business Intelligence",
};

Profile.propTypes = {
  fullName: PropTypes.string.isRequired,
  profession: PropTypes.string,
  bio: PropTypes.string,
  src: PropTypes.string,
};

