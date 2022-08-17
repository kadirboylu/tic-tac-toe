import React from "react";
import { useGameContext } from "../../Contexts/GameContext";
import styles from "./Score.module.css";

const Score = () => {
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
    return winner?.letter ? styles.win : winner?.result ? styles.draw : "";
  })();

  return (
    <div className={`${styles.base} ${winner?.result && winnerStyles}`}>
      <div
        className={`${styles.scoreX} ${styles.score} ${
          winner?.letter === "X" && winnerStyles
        } ${turn === "X" && turnStyles}`}
      >
        X - {scoreX}
      </div>
      <div
        className={`${styles.scoreY} ${styles.score} ${
          winner?.letter === "O" && winnerStyles
        } ${turn === "O" && turnStyles}`}
      >
        O - {scoreO}
      </div>
    </div>
  );
};

export default Score;
