import React from "react";
import Square from "./Square";

function Table({
  setGameOver,
  tableValues,
  setTableValues,
  playerTurn,
  setPlayerTurn,
}) {
  return (
    <div className="tableContainer">
      {tableValues.map((item, index) => (
        <Square
          setGameOver={setGameOver}
          key={index}
          tableValues={tableValues}
          setTableValues={setTableValues}
          playerTurn={playerTurn}
          setPlayerTurn={setPlayerTurn}
          squareValue={item}
          index={index}
        ></Square>
      ))}
    </div>
  );
}

export default Table;
