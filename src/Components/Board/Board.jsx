import React, { useState } from "react";

// CSS
import BoardCSS from "./Board.module.css";

// Components
import Scores from "../Scores/Score";
import Square from "../Square/Square";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill("")); // Board State
  const [turn, setTurn] = useState("X"); // Turn State

  return (
    <div>
      <Scores turn={turn} />
      <div
        className={`${BoardCSS.board} ${
          turn === "X" ? BoardCSS.turnX : turn === "O" ? BoardCSS.turnO : ""
        }`}
      >
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              num={index}
              board={board}
              setBoard={setBoard}
              turn={turn}
              setTurn={setTurn}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
