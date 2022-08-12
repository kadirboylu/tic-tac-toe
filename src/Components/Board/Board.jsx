import React from "react";

// Components
import Scores from "../Scores/Score";
import Square from "../Square/Square";
import Info from "../Info/Info";

const Board = () => {
  return (
    <div>
      <Scores />
      <Square />
      <Info />
    </div>
  );
};

export default Board;
