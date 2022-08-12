import React from "react";

// CSS
import ScoreCSS from "./Score.module.css";

const Score = ({ turn }) => {
  return (
    <div
      className={`${ScoreCSS.scores} ${
        turn === "X" ? ScoreCSS.turnX : turn === "O" ? ScoreCSS.turnO : ""
      }`}
    >
      <div className={`${ScoreCSS.scoreX} ${ScoreCSS.score} `}>X - 1</div>
      <div className={`${ScoreCSS.scoreY} ${ScoreCSS.score} `}>O - 1</div>
    </div>
  );
};

export default Score;
