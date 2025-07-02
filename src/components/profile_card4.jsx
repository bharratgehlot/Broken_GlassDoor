import React from "react";
import HireMeButton from "./hire_mebutton";
import img from "../assets/Ritika.png"

function ProfileCard4() {
  return <div className="profile_card4" ><h2>Name: Ritika Baghi</h2>
          <img src={img} alt="Ritika" className="profile-img" ></img>
         <h2>Role: Business Devlopment Traine</h2>
         <HireMeButton/>
         <h3>Location: Pune, India</h3>
</div> 
};

export default ProfileCard4;