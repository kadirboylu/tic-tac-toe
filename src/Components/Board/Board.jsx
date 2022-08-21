import React from "react";
import { useGameContext } from "@contexts/GameContext";
import styles from "./Board.module.css";
import clsx from "clsx";
import ScoreBoard from "@components/ScoreBoard";
import Square from "@components/Square";
import GameInfo from "@components/GameInfo";

const Board = () => {
  const { board, winner, turn } = useGameContext();

  // if turn = X -> bg-color=red, if turn = O -> bg-color=blue else ""
  const turnStyles = {
    [styles.turnX]: !winner && turn === "X",
    [styles.turnO]: !winner && turn === "O",
  };

  // if winner = X -> bg-color=red, if winner = O -> bg-color=blue else ""
  const winnerStyles = {
    [styles.win]: winner?.player,
    [styles.draw]: winner?.result,
  };

  return (
    <div>
      <ScoreBoard />
      <div className={clsx(styles.board, turnStyles, winnerStyles)}>
        {board.map((_, index) => {
          return <Square key={index} num={index} />;
        })}
        {winner && (
          <div className={styles.info}>
            <GameInfo />
          </div>
        )}
      </div>
    </div>
  );
};

export default Board;
