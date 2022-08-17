import React, { useState, useEffect } from "react";
import { GameContext } from "@contexts/GameContext";
import styles from "./Board.module.css";
import clsx from "clsx";
import ScoreBoard from "@components/ScoreBoard";
import Square from "@components/Square";
import GameInfo from "@components/GameInfo";

// Game Winning Conditions
const winConditions = [
  [0, 4, 8],
  [2, 4, 6],
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

const Board = () => {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [turn, setTurn] = useState("X");
  const [winner, setWinner] = useState(null);
  const [score, setScore] = useState({ X: 0, O: 0 });

  // Check Winner
  useEffect(() => {
    const checkWinner = (conditions) => {
      for (let i = 0; i < conditions.length; i++) {
        // Destructuring the winning condition e.g. [0, 4, 8]
        const [a, b, c] = conditions[i];
        // Returns the winner if the squares are not equal to the empty string and the squares are equal.
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          board[a] === "X"
            ? setScore((score) => ({ ...score, X: score.X + 1 }))
            : setScore((score) => ({ ...score, O: score.O + 1 }));

          return { player: board[a], squares: conditions[i] };
        }
        // If there is no empty square and winner = null -> result: draw
        // i === winConditions.length - 1 is must because we will check the conditions first
        if (!board.includes("") && i === winConditions.length - 1) {
          return { result: "DRAW!" };
        }
      }

      return null;
    };

    setWinner(checkWinner(winConditions));
  }, [board]);

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyles = {
    [styles.turnX]: !winner && turn === "X",
    [styles.turnO]: !winner && turn === "O",
  };

  // if winner = X -> bg-color=red, if winner = O -> bg-color=blue else ""
  const winnerStyles = {
    [styles.win]: winner?.player,
    [styles.draw]: winner?.result,
  };

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        turn,
        setTurn,
        winner,
        setWinner,
        score,
      }}
    >
      <ScoreBoard />
      <div className={clsx(styles.board, turnStyles, winnerStyles)}>
        {board.map((_, index) => {
          return <Square key={index} num={index} />;
        })}
        {winner && (
          <div className={styles.info}>
            <GameInfo />
          </div>
        )}
      </div>
    </GameContext.Provider>
  );
};

export default Board;
