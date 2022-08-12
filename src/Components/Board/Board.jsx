import React, { useState } from "react";

// CSS
import BoardCSS from "./Board.module.css";

// Components
import Scores from "../Scores/Score";
import Square from "../Square/Square";
import Info from "../Info/Info";

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));

  return (
    <div>
      <Scores />
      <div className={BoardCSS.board}>
        {board.map((_, index) => {
          return (
            <Square key={index} num={index} board={board} setBoard={setBoard} />
          );
        })}
      </div>
    </div>
  );
};

export default Board;
