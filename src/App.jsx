import React from "react";
import "./App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Log_In from "./pages/Log_In";


import MyComponent from "./components/MyComponent";
import Second_component from "./components/Second_Component";
import Third_component from "./components/Third_component";
import ProfileCard from "./components/profile_card1";
import ProfileCard2 from "./components/profile_card2";
import HireMeButton from "./components/hire_mebutton";
import ProfileCard3 from "./components/profile_card3";
import ProfileCard4 from "./components/profile_card4";
import ProfileCard5 from "./components/profile_card5";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Show LogIn Page at Root */}
        <Route path="/" element={<Log_In />} />

        {/* Home path for our other components */}
        <Route path="/home" element={
          <>
            <div className="MyComponent"><MyComponent /></div>
            <div className="third_component"><Third_component /></div>
            <div className="profile_card"><ProfileCard /></div>
            <div className="profile_card3"> <ProfileCard3></ProfileCard3> </div>
            <div className="profile_card2"> <ProfileCard2 /></div>
            <div className="profile_card4"> <ProfileCard4 /></div>
            <div className="profile_card5"> <ProfileCard5 /></div>

          </>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;