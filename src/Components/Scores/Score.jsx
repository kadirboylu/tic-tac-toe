import React from "react";

// CSS
import ScoreCSS from "./Score.module.css";

const Score = ({ turn, winner }) => {
  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyle = () => {
    return turn === "X" ? ScoreCSS.turnX : turn === "O" ? ScoreCSS.turnO : "";
  };

  // if winner = true -> bg and border color = green, if draw = true -> bg and border color=yellow else ""
  const winnerStyle = () => {
    return winner?.letter ? ScoreCSS.win : winner?.draw ? ScoreCSS.draw : "";
  };

  return (
    <div className={`${ScoreCSS.scores} ${turnStyle()} ${winnerStyle()}`}>
      <div className={`${ScoreCSS.scoreX} ${ScoreCSS.score} `}>X - 1</div>
      <div className={`${ScoreCSS.scoreY} ${ScoreCSS.score} `}>O - 1</div>
    </div>
  );
};

export default Score;
