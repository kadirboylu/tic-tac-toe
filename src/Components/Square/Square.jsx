import React from "react";

// CSS
import SquareCSS from "./Square.module.css";

const Square = ({ num, board, setBoard, turn, setTurn, winner }) => {
  const handleClick = () => {
    // If the content of the square is X or O, the following operations will not occur.
    if (board[num] !== "") return;

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

  return (
    <div
      className={`${SquareCSS.square} ${
        board[num] === "X"
          ? SquareCSS.squareX
          : board[num] === "O"
          ? SquareCSS.squareO
          : ""
      }`}
      onClick={() => handleClick()}
    >
      {board[num]}
    </div>
  );
};

export default Square;
