import React from "react";

// CSS
import InfoCSS from "./Info.module.css";

const Info = ({ winner, setWinner, setBoard, setTurn }) => {
  const handleClick = () => {
    setWinner(null);
    setBoard(Array(9).fill(""));
    setTurn("X");
  };

  return (
    <>
      <div className="relative">
        <div
          className={`${InfoCSS.info} ${winner?.draw && InfoCSS.draw}`}
        ></div>
      </div>
      <div className={InfoCSS.result}>
        {winner?.letter ? (
          <p>{winner.letter} WON!</p>
        ) : winner?.draw ? (
          <p>{winner.draw}</p>
        ) : (
          ""
        )}
        <button onClick={() => handleClick()}>RESTART</button>
      </div>
    </>
  );
};

export default Info;
