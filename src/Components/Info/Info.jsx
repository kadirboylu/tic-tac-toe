import React from "react";

// CSS
import InfoCSS from "./Info.module.css";

const Info = ({ winner, setWinner, setBoard, setTurn }) => {
  // Game Reset
  const handleClick = () => {
    setWinner(null);
    setBoard(Array(9).fill(""));
    setTurn("X");
  };

  return (
    <div className={`${InfoCSS.info} ${winner?.draw && InfoCSS.draw}`}>
      {
        //if winner.letter = true -> result X or O won, if winner.draw = true -> result DRAW
        winner?.letter ? (
          <p>{winner.letter} WON!</p>
        ) : winner?.draw ? (
          <p>{winner.draw}</p>
        ) : (
          ""
        )
      }
      <button onClick={() => handleClick()}>RESTART</button>
    </div>
  );
};

export default Info;
