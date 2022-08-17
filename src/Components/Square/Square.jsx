import React from "react";
import { useGameContext } from "@contexts/GameContext";
import styles from "./Square.module.css";
import clsx from "clsx";

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
  const squareStyle = {
    [styles.squareX]: board[num] === "X",
    [styles.squareO]: board[num] === "O",
  };

  // If square is winner square -> bg-color: green else ""
  const winnerSquares = {
    [styles.squareWinner]: winnerStyles === "winner",
  };

  return (
    <div
      className={clsx(styles.base, squareStyle, winnerSquares)}
      onClick={() => handleClick()}
    >
      {board[num]}
    </div>
  );
};

export default Square;
