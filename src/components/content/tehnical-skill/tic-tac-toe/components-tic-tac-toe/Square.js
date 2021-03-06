import React from "react";

function Square({
  setGameOver,
  squareValue,
  playerTurn,
  setPlayerTurn,
  setTableValues,
  tableValues,
  index,
}) {
  return (
    <div
      onClick={() => {
        if (setGameOver === true) {
          return;
        } else {
          let newTableValues = [...tableValues];
          newTableValues[index] = playerTurn;
          setTableValues(newTableValues);
          setPlayerTurn(playerTurn === "X" ? "0" : "X");
        }
      }}
      // cand un jucator castiga, functia onClick trebuie sa fie anulata
      className="squareContainer"
    >
      <span className="squareValue">{squareValue}</span>
    </div>
  );
}

export default Square;
