import React from "react";
import { useGameContext } from "@contexts/GameContext";
import styles from "./ScoreBoard.module.css";

const ScoreBoard = () => {
  const { turn, winner, scoreX, scoreO } = useGameContext();

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyles = (() => {
    return (
      winner === null &&
      (turn === "X" ? styles.turnX : turn === "O" ? styles.turnO : "")
    );
  })();

  // if winner = true -> bg and border color = green, if draw = true -> bg and border color=yellow else ""
  const winnerStyles = (() => {
    return winner?.player ? styles.win : winner?.result ? styles.draw : "";
  })();

  return (
    <div className={`${styles.base} ${winner?.result && winnerStyles}`}>
      <div
        className={`${styles.scoreX} ${styles.score} ${
          winner?.player === "X" && winnerStyles
        } ${turn === "X" && turnStyles}`}
      >
        X - {scoreX}
      </div>
      <div
        className={`${styles.scoreY} ${styles.score} ${
          winner?.player === "O" && winnerStyles
        } ${turn === "O" && turnStyles}`}
      >
        O - {scoreO}
      </div>
    </div>
  );
};

export default ScoreBoard;
