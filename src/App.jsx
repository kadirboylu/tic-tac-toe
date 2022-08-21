import React from "react";
import Board from "@components/Board";
import { GameProvider } from "@contexts/GameContext";

function App() {
  return (
    <GameProvider>
      <Board />
    </GameProvider>
  );
}

export default App;
