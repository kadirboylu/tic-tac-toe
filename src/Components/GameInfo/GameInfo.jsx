import React from "react";
import { useGameContext } from "@contexts/GameContext";
import styles from "./GameInfo.module.css";
import clsx from "clsx";

const GameInfo = () => {
  const { winner, setWinner, setBoard, setTurn } = useGameContext();

  // Game Reset
  const handleClick = () => {
    setWinner(null);
    setBoard(Array(9).fill(""));
    setTurn("X");
  };

  // Style for the draw
  const drawStyle = {
    [styles.draw]: winner?.result && styles.draw,
  };

  return (
    <div className={clsx(styles.base, drawStyle)}>
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
