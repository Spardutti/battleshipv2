import WelcomeScreen from "./Components/WelcomeScreen";
import "materialize-css/dist/css/materialize.min.css";
import React, { useState, useEffect } from "react";
import PlayerBoard from "./Components/PlayerBoard";
import ComputerBoard from "./Components/ComputerBoard";
import gameBoard from "./Components/GameBoard";
import "./style/style.css";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [playerBoard, setPlayerBoard] = useState(gameBoard(3, 3));
  const [computerBoard, setComputerBoard] = useState(gameBoard(9, 9));
  const [updateDom, setUpdateDom] = useState(false);
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(false);

  //FIGURE HOW TO DISABLE CLICK ON DIV AFTER IT HAVE BEEN CLICKED;

  const playGame = () => {
    setWelcome(false);
    playerBoard.placeShip();
    computerBoard.placeShip();
  };

  const attack = (e) => {
    if (player) {
      let col = e.target.getAttribute("data-col");
      let row = e.target.getAttribute("data-row");
      computerBoard.receiveAttack(col, row);
      if (computerBoard.receiveAttack(col, row) === "hit") {
        //keeps playing
        setUpdateDom(true);
        if (computerBoard.ships.length === 0) {
          setWinner(true);
        }
      } else {
        setPlayer(false);
      }
    }
  };
  const computerAttack = () => {
    if (!player) {
      let col = Math.floor(Math.random() * playerBoard.board.length);
      let row = Math.floor(Math.random() * playerBoard.board.length);

      while (
        (playerBoard.board[col][row] === "attacked" ||
          playerBoard.board[col][row] === "hit") &&
        !winner
      ) {
        col = Math.floor(Math.random() * playerBoard.board.length);
        row = Math.floor(Math.random() * playerBoard.board.length);
      }
      playerBoard.receiveAttack(col, row);
      setTimeout(() => {
        if (playerBoard.receiveAttack(col, row) === "attacked") {
          setPlayer(true);
        } else {
          setUpdateDom(true);

          if (playerBoard.ships.length === 0) {
            setWinner(true);
            return;
          }
          setTimeout(() => {
            computerAttack();
          }, 500);
        }
      }, 500);
    }
  };
  useEffect(() => {
    computerAttack();
  }, [player]);

  useEffect(() => {
    setUpdateDom(false);
  }, [updateDom]);

  return (
    <div>
      {welcome ? (
        <WelcomeScreen playGame={playGame} />
      ) : winner ? (
        <h1>Win</h1>
      ) : (
        <div className="container">
          <h1 className="center-align">
            {player ? `Player's Turn!` : `Computer's Turn`}
          </h1>
          <div className="board-grid">
            <PlayerBoard playerBoard={playerBoard.board} winner={winner} />
            <ComputerBoard
              computerBoard={computerBoard.board}
              winner={winner}
              attack={attack}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
