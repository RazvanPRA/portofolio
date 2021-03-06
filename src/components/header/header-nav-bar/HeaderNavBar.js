import React from "react";
import "./HeaderNavBar.css";

function HeaderNavBar({ title, currentScreen, setCurrentScreen }) {
  return (
    <div>
      <button
        className="button"
        onClick={() => {
          setCurrentScreen(title);
        }}
      >
        {title}
      </button>
      {currentScreen === title ? <div className={"underline"}></div> : null}
    </div>
  );
}

export default HeaderNavBar;
