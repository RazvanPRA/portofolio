import React from "react";
import Home from "./home/Home";
import AboutMe from "./about-me/AboutMe";
import CVOnline from "./cv-online/CVOnline";
import Hobbies from "./hobbies/Hobbies";
import TehnicalSkill from "./tehnical-skill/TehnicalSkill";

function Content({ currentScreen, setCurrentScreen }) {
  return (
    <div className="content">
      {currentScreen === "Home" ? (
        <Home setCurrentScreen={setCurrentScreen} />
      ) : null}
      {currentScreen === "About Me" ? <AboutMe /> : null}
      {currentScreen === "CV-online" ? <CVOnline /> : null}
      {currentScreen === "Hobbies" ? <Hobbies /> : null}
      {currentScreen === "Tehnical Skill (mini project)" ? (
        <TehnicalSkill />
      ) : null}
    </div>
  );
}

export default Content;
