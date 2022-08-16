import React from "react";
import { useGameContext } from "../../Contexts/GameContext";
import SquareCSS from "./Square.module.css";

const Square = ({ num }) => {
  const { board, setBoard, turn, setTurn, winner } = useGameContext();

  const winnerStyles = (() => {
    if (winner?.letter && winner.indexes.includes(num)) return "winner";
  })();

  const handleClick = () => {
    // If the content of the square is X or O, the following operations will not occur.
    if (board[num] !== "" || winner) return;

    let squares = [...board];

    switch (turn) {
      case "X":
        squares[num] = "X";
        setTurn("O");
        break;
      case "O":
        squares[num] = "O";
        setTurn("X");
        break;
      default:
        squares[num] = "";
        break;
    }

    setBoard(squares);
  };

  // if square includes "X" -> bg-color: red, if square includes "O" -> bg-color: blue else ""
  const squareStyle = () => {
    return board[num] === "X"
      ? SquareCSS.squareX
      : board[num] === "O"
      ? SquareCSS.squareO
      : "";
  };

  // If square is winner square -> bg-color: green else ""
  const winnerSquares = () => {
    return winnerStyles === "winner" ? SquareCSS.squareWinner : "";
  };

  return (
    <div
      className={`${SquareCSS.square} ${squareStyle()} ${winnerSquares()}`}
      onClick={() => handleClick()}
    >
      {board[num]}
    </div>
  );
};

export default Square;
