import React from "react";
import HireMeButton from "./hire_mebutton";
import img from "../assets/rishabh.jpg"

function ProfileCard5() {
  return <div className="profile_card5" ><h2>Name: Maya Kapoor</h2>
          <img src={img} alt="rishabh" className="profile-img" ></img>
         <h2>Role: Designer</h2>
         <HireMeButton/>
         <h3>Location: Channei, India</h3>
</div> 
};

export default ProfileCard5;