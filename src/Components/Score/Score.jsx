import React from "react";
import { useGameContext } from "../../Contexts/GameContext";
import ScoreCSS from "./Score.module.css";

const Score = () => {
  const { turn, winner, scoreX, scoreO } = useGameContext();

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyles = (() => {
    return (
      winner === null &&
      (turn === "X" ? ScoreCSS.turnX : turn === "O" ? ScoreCSS.turnO : "")
    );
  })();

  // if winner = true -> bg and border color = green, if draw = true -> bg and border color=yellow else ""
  const winnerStyles = (() => {
    return winner?.letter ? ScoreCSS.win : winner?.draw ? ScoreCSS.draw : "";
  })();

  return (
    <div className={`${ScoreCSS.scores} ${winner?.draw && winnerStyles}`}>
      <div
        className={`${ScoreCSS.scoreX} ${ScoreCSS.score} ${
          winner?.letter === "X" && winnerStyles
        } ${turn === "X" && turnStyles}`}
      >
        X - {scoreX}
      </div>
      <div
        className={`${ScoreCSS.scoreY} ${ScoreCSS.score} ${
          winner?.letter === "O" && winnerStyles
        } ${turn === "O" && turnStyles}`}
      >
        O - {scoreO}
      </div>
    </div>
  );
};

export default Score;
