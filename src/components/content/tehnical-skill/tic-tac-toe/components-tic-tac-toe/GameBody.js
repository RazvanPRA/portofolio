import React from "react";
import Title from "./Title";
import Table from "./Table";
import Button from "./Button";

function GameBody({
  setGameOver,
  setSetGameOver,
  tableValues,
  setTableValues,
  playerTurn,
  setPlayerTurn,
}) {
  return (
    <div className="gameBodyContainer">
      <Title></Title>
      <Table
        setGameOver={setGameOver}
        setSetGameOver={setSetGameOver}
        tableValues={tableValues}
        setTableValues={setTableValues}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
      ></Table>
      <Button
        setGameOver={setGameOver}
        setSetGameOver={setSetGameOver}
        setPlayerTurn={setPlayerTurn}
        setTableValues={setTableValues}
      ></Button>
    </div>
  );
}

export default GameBody;
