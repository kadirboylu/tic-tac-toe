import React from "react";

// Context
import { useGameContext } from "../../Contexts/GameContext";

// CSS
import ScoreCSS from "./Score.module.css";

const Score = () => {
  const { turn, winner, scoreX, scoreO } = useGameContext();

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyle = () => {
    return (
      winner === null &&
      (turn === "X" ? ScoreCSS.turnX : turn === "O" ? ScoreCSS.turnO : "")
    );
  };

  // if winner = true -> bg and border color = green, if draw = true -> bg and border color=yellow else ""
  const winnerStyle = () => {
    return winner?.letter ? ScoreCSS.win : winner?.draw ? ScoreCSS.draw : "";
  };

  return (
    <div className={`${ScoreCSS.scores} ${winner?.draw && winnerStyle()}`}>
      <div
        className={`${ScoreCSS.scoreX} ${ScoreCSS.score} ${
          winner?.letter === "X" && winnerStyle()
        } ${turn === "X" && turnStyle()}`}
      >
        X - {scoreX}
      </div>
      <div
        className={`${ScoreCSS.scoreY} ${ScoreCSS.score} ${
          winner?.letter === "O" && winnerStyle()
        } ${turn === "O" && turnStyle()}`}
      >
        O - {scoreO}
      </div>
    </div>
  );
};

export default Score;
