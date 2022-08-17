import React from "react";
import { useGameContext } from "../../contexts/GameContext";
import styles from "./GameInfo.module.css";

const GameInfo = () => {
  const { winner, setWinner, setBoard, setTurn } = useGameContext();

  // Game Reset
  const handleClick = () => {
    setWinner(null);
    setBoard(Array(9).fill(""));
    setTurn("X");
  };

  return (
    <div className={`${styles.base} ${winner?.result && styles.draw}`}>
      {
        //if winner.player = true -> result X or O won, if winner.result = true -> result DRAW
        winner?.player ? (
          <p>{winner.player} WON!</p>
        ) : winner?.result ? (
          <p>{winner.result}</p>
        ) : (
          ""
        )
      }
      <button onClick={() => handleClick()}>RESTART</button>
    </div>
  );
};

export default GameInfo;
