import React from "react";
import HireMeButton from "./hire_mebutton";
import img from "../assets/neeraj.jpg"

function ProfileCard2 () {
  return <div className="profile_card2"> <h2>Name: Niraj Mehra</h2>
    <img src={img} alt="neeraj" className="profile-img" />
    <h2>Role: Backend Developer</h2>
    <h3>Location: Mandsaur, India</h3>
    <HireMeButton/>
  </div>

  
}

export default ProfileCard2;