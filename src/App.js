import WelcomeScreen from "./Components/WelcomeScreen";
import "materialize-css/dist/css/materialize.min.css";
import React, { useState, useEffect } from "react";
import PlayerBoard from "./Components/PlayerBoard";
import ComputerBoard from "./Components/ComputerBoard";
import gameBoard from "./Components/GameBoard";
import "./style/style.css";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [playerBoard, setPlayerBoard] = useState(gameBoard(9, 9));
  const [computerBoard, setComputerBoard] = useState(gameBoard(9, 9));
  const [updateDom, setUpdateDom] = useState(false);

  //FIGURE HOW TO DISABLE CLICK ON DIV AFTER IT HAVE BEEN CLICKED;

  const playGame = () => {
    setWelcome(false);
    playerBoard.placeShip();
    computerBoard.placeShip();
  };

  const attack = (e) => {
    let col = e.target.getAttribute("data-col");
    let row = e.target.getAttribute("data-row");
    computerBoard.receiveAttack(col, row);
    setUpdateDom(true);
    console.log("click");
  };

  useEffect(() => {
    console.log("sea attacked");
    setUpdateDom(false);
  }, [updateDom]);

  const attackShip = (e) => {
    let col = e.target.getAttribute("data-col");
    let row = e.target.getAttribute("data-row");
    computerBoard.receiveAttack(col, row);
    console.log("ship");
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
            <ComputerBoard
              computerBoard={computerBoard.board}
              attackShip={attackShip}
              attack={attack}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
