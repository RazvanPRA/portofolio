import React from "react";
import HeaderNavBar from "./header-nav-bar/HeaderNavBar";
import "./Header.css";

function Header({ currentScreen, setCurrentScreen, screens }) {
  return (
    <div className="shadowHeader">
      <div className="flexDivH">
        <div className="flexTextH">
          <p>Razvan Gheorghe Prajanu</p> <p>- A PERSONAL BLOG THEME -</p>
        </div>
      </div>
      <hr></hr>
      <div className="flexDivH">
        <div className="flexHeaderNB">
          {screens.map((item, index) => {
            return (
              <HeaderNavBar
                key={index}
                title={item}
                currentScreen={currentScreen}
                setCurrentScreen={setCurrentScreen}
              ></HeaderNavBar>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Header;
