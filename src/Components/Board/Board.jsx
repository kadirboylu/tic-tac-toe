import React, { useState, useEffect } from "react";

// CSS
import BoardCSS from "./Board.module.css";

// Components
import Scores from "../Scores/Score";
import Square from "../Square/Square";
import Info from "../Info/Info";

// Game Winning Conditions
const winConditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill("")); // Board State
  const [turn, setTurn] = useState("X"); // Turn State
  const [winner, setWinner] = useState(null); // Winner status

  // Check Winner
  useEffect(() => {
    const checkWinner = (conditions) => {
      for (let i = 0; i < conditions.length; i++) {
        // Destructuring the winning condition
        const [a, b, c] = conditions[i];
        // Returns the winner if the squares are not equal to the empty string and the squares are equal.
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          return { letter: board[a], indexes: conditions[i] };
        }
        // If there is no empty square and winner = null -> result: draw
        if (!board.includes("")) {
          return { draw: "DRAW!" };
        }
      }

      return null;
    };

    setWinner(checkWinner(winConditions));
  }, [board]);

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyle = () => {
    return (
      winner === null &&
      (turn === "X" ? BoardCSS.turnX : turn === "O" ? BoardCSS.turnO : "")
    );
  };

  // if winner = X -> bg-color=red, if winner = O -> bg-color=blue else ""
  const winnerStyle = () => {
    return winner?.letter === "X"
      ? BoardCSS.turnX
      : winner?.letter === "Y"
      ? BoardCSS.turnO
      : "";
  };

  return (
    <div>
      <Scores turn={turn} />
      <div className={`${BoardCSS.board} ${turnStyle()} ${winnerStyle()}`}>
        {board.map((_, index) => {
          return (
            <Square
              key={index}
              num={index}
              board={board}
              setBoard={setBoard}
              turn={turn}
              setTurn={setTurn}
              winner={winner}
            />
          );
        })}

        {winner && (
          <div className={BoardCSS.info}>
            <Info
              winner={winner}
              setWinner={setWinner}
              setBoard={setBoard}
              setTurn={setTurn}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
