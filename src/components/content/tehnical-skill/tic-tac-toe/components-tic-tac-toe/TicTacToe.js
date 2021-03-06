import React, { useState, useEffect } from "react";
import "./../style/StyleTicTacToe.css";
import Player from "./Player";
import GameBody from "./GameBody";

function TicTacToe() {
  const [tableValues, setTableValues] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [playerTurn, setPlayerTurn] = useState("X");
  const [numberOfWinsX, setNumberOfWinsX] = useState(0);
  const [numberOfWins0, setNumberOfWins0] = useState(0);
  const [setGameOver, setSetGameOver] = useState(false);

  useEffect(() => {
    if (
      tableValues[0] === tableValues[1] &&
      tableValues[1] === tableValues[2] &&
      tableValues[1] !== ""
    ) {
      if (tableValues[0] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(true);
      } else if (tableValues[0] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(true);
      }
    }
    if (
      tableValues[3] === tableValues[4] &&
      tableValues[4] === tableValues[5] &&
      tableValues[4] !== ""
    ) {
      if (tableValues[3] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(!setGameOver);
      } else if (tableValues[3] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(!setGameOver);
      }
    }
    if (
      tableValues[6] === tableValues[7] &&
      tableValues[7] === tableValues[8] &&
      tableValues[7] !== ""
    ) {
      if (tableValues[6] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(!setGameOver);
      } else if (tableValues[6] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(!setGameOver);
      }
    }
    if (
      tableValues[0] === tableValues[3] &&
      tableValues[3] === tableValues[6] &&
      tableValues[3] !== ""
    ) {
      if (tableValues[0] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(!setGameOver);
      } else if (tableValues[0] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(!setGameOver);
      }
    }
    if (
      tableValues[1] === tableValues[4] &&
      tableValues[4] === tableValues[7] &&
      tableValues[4] !== ""
    ) {
      if (tableValues[1] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(!setGameOver);
      } else if (tableValues[1] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(!setGameOver);
      }
    }
    if (
      tableValues[2] === tableValues[5] &&
      tableValues[5] === tableValues[8] &&
      tableValues[5] !== ""
    ) {
      if (tableValues[2] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(!setGameOver);
      } else if (tableValues[2] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(!setGameOver);
      }
    }
    if (
      tableValues[0] === tableValues[4] &&
      tableValues[4] === tableValues[8] &&
      tableValues[4] !== ""
    ) {
      if (tableValues[0] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(!setGameOver);
      } else if (tableValues[0] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(!setGameOver);
      }
    }
    if (
      tableValues[2] === tableValues[4] &&
      tableValues[4] === tableValues[6] &&
      tableValues[4] !== ""
    ) {
      if (tableValues[2] === "X") {
        setNumberOfWinsX(numberOfWinsX + 1);
        setSetGameOver(!setGameOver);
      } else if (tableValues[2] === "0") {
        setNumberOfWins0(numberOfWins0 + 1);
        setSetGameOver(!setGameOver);
      }
    }
  }, [tableValues]);

  return (
    <div id="containerTicTacToe">
      <Player
        numberOfWins={numberOfWinsX}
        title={"Player X"}
        isActive={playerTurn === "X" ? true : false}
      ></Player>
      <GameBody
        setGameOver={setGameOver}
        setSetGameOver={setSetGameOver}
        tableValues={tableValues}
        setTableValues={setTableValues}
        playerTurn={playerTurn}
        setPlayerTurn={setPlayerTurn}
      ></GameBody>
      <Player
        numberOfWins={numberOfWins0}
        title={"Player 0"}
        isActive={playerTurn === "0" ? true : false}
      ></Player>
    </div>
  );
}

export default TicTacToe;
