import React, { useState, useEffect } from "react";
import { GameContext } from "../../Contexts/GameContext";
import styles from "./Board.module.css";
import Scores from "../Score/Score";
import Square from "../Square/Square";
import Info from "../Info/Info";

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
  const [scoreX, setScoreX] = useState(0);
  const [scoreO, setScoreO] = useState(0);

  // Check Winner
  useEffect(() => {
    const checkWinner = (conditions) => {
      for (let i = 0; i < conditions.length; i++) {
        // Destructuring the winning condition
        const [a, b, c] = conditions[i];
        // Returns the winner if the squares are not equal to the empty string and the squares are equal.
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          board[a] === "X"
            ? setScoreX((scoreX) => scoreX + 1)
            : setScoreO((scoreO) => scoreO + 1);

          return { player: board[a], squares: conditions[i] };
        }
        // If there is no empty square and winner = null -> result: draw
        // i === 7 is must because we will check the conditions first
        if (!board.includes("") && i === 7) {
          return { result: "DRAW!" };
        }
      }

      return null;
    };

    setWinner(checkWinner(winConditions));
  }, [board]);

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyles = (() => {
    return (
      winner === null &&
      (turn === "X" ? styles.turnX : turn === "O" ? styles.turnO : "")
    );
  })();

  // if winner = X -> bg-color=red, if winner = O -> bg-color=blue else ""
  const winnerStyles = (() => {
    return winner?.player ? styles.win : winner?.result ? styles.draw : "";
  })();

  return (
    <GameContext.Provider
      value={{
        board,
        setBoard,
        turn,
        setTurn,
        winner,
        setWinner,
        scoreX,
        setScoreX,
        scoreO,
        setScoreO,
      }}
    >
      <Scores />
      <div className={`${styles.board} ${turnStyles} ${winnerStyles}`}>
        {board.map((_, index) => {
          return <Square key={index} num={index} />;
        })}
        {winner && (
          <div className={styles.info}>
            <Info />
          </div>
        )}
      </div>
    </GameContext.Provider>
  );
};

export default Board;
