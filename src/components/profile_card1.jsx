import React from "react";
import HireMeButton from "./hire_mebutton";
import img from "../assets/purva.jpg"

function ProfileCard() {
  return <div className="profile_card"> <h2>Name: Purva Maheshwari</h2>
    <img src={img} alt="poorva maheshwari" className="profile-img"/>
    <h2>Role: Frontend Developer</h2>
    <h3>Location: Jaora, India</h3>
    <HireMeButton />
  </div>
}

export default ProfileCard;