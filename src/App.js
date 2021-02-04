import WelcomeScreen from "./Components/WelcomeScreen";
import "materialize-css/dist/css/materialize.min.css";
import React, { useState, useEffect } from "react";
import PlayerBoard from "./Components/PlayerBoard";
import ComputerBoard from "./Components/ComputerBoard";
import gameBoard from "./Components/GameBoard";
import './style/style.css';

function App() {
  const [welcome, setWelcome] = useState(true);
  const [playerBoard, setPlayerBoard] = useState(gameBoard(9, 9));

  const playGame = () => {
    setWelcome(false);
    playerBoard.placeShip();
    console.log(playerBoard)
  };

  return (
    <div>
      {welcome ? (
        <WelcomeScreen playGame={playGame} />
      ) : (
        <div className="container">
          <h1 className="center-align">turn!</h1>
          <div className="board-grid">
            <PlayerBoard playerBoard={playerBoard.board} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
