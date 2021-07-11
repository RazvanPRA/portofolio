import React, { useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/content/Content";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [currentScreen, setCurrentScreen] = useState("Home");
  const screens = [
    "Home",
    "About Me",
    "CV-online",
    "Hobbies",
    "Tehnical Skill (mini project)",
  ];
  return (
    <div className="body">
      <Header
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
        screens={screens}
      />
      <Content
        currentScreen={currentScreen}
        setCurrentScreen={setCurrentScreen}
      ></Content>
      <div>
        <Footer />
        <Footer />
      </div>
    </div>
  );
}

export default App;
