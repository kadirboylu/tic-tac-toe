import React from "react";

// CSS
import ScoreCSS from "./Score.module.css";

const Score = ({ turn, winner }) => {
  const turnStyle = () => {
    return turn === "X" ? ScoreCSS.turnX : turn === "O" ? ScoreCSS.turnO : "";
  };

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
