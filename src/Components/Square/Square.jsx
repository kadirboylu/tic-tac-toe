import React from "react";
import { useGameContext } from "../../contexts/GameContext/GameContext";
import styles from "./Square.module.css";

const Square = ({ num }) => {
  const { board, setBoard, turn, setTurn, winner } = useGameContext();

  const winnerStyles = (() => {
    if (winner?.player && winner.squares.includes(num)) return "winner";
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
      ? styles.squareX
      : board[num] === "O"
      ? styles.squareO
      : "";
  };

  // If square is winner square -> bg-color: green else ""
  const winnerSquares = () => {
    return winnerStyles === "winner" ? styles.squareWinner : "";
  };

  return (
    <div
      className={`${styles.base} ${squareStyle()} ${winnerSquares()}`}
      onClick={() => handleClick()}
    >
      {board[num]}
    </div>
  );
};

export default Square;
