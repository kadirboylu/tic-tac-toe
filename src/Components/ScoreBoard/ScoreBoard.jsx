import React from "react";
import { useGameContext } from "@contexts/GameContext";
import styles from "./ScoreBoard.module.css";
import clsx from "clsx";

const ScoreBoard = () => {
  const { turn, winner, score } = useGameContext();

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyles = {
    [styles.turnX]: !winner && turn === "X",
    [styles.turnO]: !winner && turn === "O",
  };

  // if winner = true -> bg and border color = green, if draw = true -> bg and border color=yellow else ""
  const winnerStyles = {
    [styles.win]: winner?.player,
    [styles.draw]: winner?.result,
  };

  return (
    <div className={clsx(styles.base, winner?.result && winnerStyles)}>
      <div
        className={clsx(
          styles.scoreX,
          styles.score,
          winner?.player === "X" && winnerStyles,
          turn === "X" && turnStyles
        )}
      >
        X - {score.X}
      </div>
      <div
        className={clsx(
          styles.scoreY,
          styles.score,
          winner?.player === "O" && winnerStyles,
          turn === "O" && turnStyles
        )}
      >
        O - {score.O}
      </div>
    </div>
  );
};

export default ScoreBoard;
