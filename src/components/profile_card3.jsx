import React from "react";
import HireMeButton from "./hire_mebutton";
import img from "../assets/maya.jpg"

function ProfileCard3() {
  return <div className="profile_card3" ><h2>Name: Maya Kapoor</h2>
          <img src={img} alt="maya" className="profile-img" ></img>
         <h2>Role: Business Devlopment Traine</h2>
         <HireMeButton/>
         <h3>Location: Bhopal, India</h3>
</div> 
};

export default ProfileCard3;