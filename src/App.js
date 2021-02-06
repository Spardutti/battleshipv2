import WelcomeScreen from "./Components/WelcomeScreen";
import "materialize-css/dist/css/materialize.min.css";
import React, { useState, useEffect } from "react";
import PlayerBoard from "./Components/PlayerBoard";
import ComputerBoard from "./Components/ComputerBoard";
import gameBoard from "./Components/GameBoard";
import "./style/style.css";
import WinnerScreen from "./Components/Winner";
import RandomizeShip from "./Components/RandomizeShip";
import ComputerShips from "./Components/ComputerShips";
import { motion } from "framer-motion"

function App() {
  const [welcome, setWelcome] = useState(true);
  const [playerBoard, setPlayerBoard] = useState(gameBoard(9, 9));
  const [computerBoard, setComputerBoard] = useState(gameBoard(9, 9));
  const [updateDom, setUpdateDom] = useState(false);
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(false);
  const [gameOn, setGameOn] = useState(false);
  const [intialLoad, setInitialLoad] = useState(true);
  const [action, setAction] = useState("");

  // Start the game and set initialload false to prevent bugs
  const playGame = () => {
    setWelcome(false);
    playerBoard.placeShip();
    computerBoard.placeShip();
    setInitialLoad(false);
  };
  //attack the computer board
  const attack = (e) => {
    if (player) {
      setGameOn(true);
      let col = e.target.getAttribute("data-col");
      let row = e.target.getAttribute("data-row");
      computerBoard.receiveAttack(col, row);
      if (computerBoard.receiveAttack(col, row) === "hit") {
        //keeps playing
        setAction("Player Hit!");
        setUpdateDom(true);
        if (computerBoard.ships.length === 0) {
          setWinner(true);
        }
      } else {
        setAction("Player Miss!");
        setPlayer(false);
      }
    }
  };
  //randomize the computer attack on the player board
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
          setAction("Computer Miss!");
        } else {
          setAction("Computer Hits!");

          setUpdateDom(true);

          if (playerBoard.ships.length === 0) {
            setWinner(true);
            return;
          }
          setTimeout(() => {
            computerAttack();
          }, 500);
        }
      }, 1000);
    }
  };
  //set everythign to default to begin a new game
  //and reset the board to prevent bugs
  const newGame = () => {
    setWinner(false);
    setWelcome(true);
    setInitialLoad(true);
    setGameOn(false);
    setPlayerBoard(gameBoard(9, 9));
    setComputerBoard(gameBoard(9, 9));
  };
  useEffect(() => {
    computerAttack();
  }, [player]);

  useEffect(() => {
    setUpdateDom(false);
  }, [updateDom]);

  useEffect(() => {
    if (intialLoad === false) {
      playerBoard.placeShip();
    }
  }, [playerBoard]);

  const randomizeShip = () => {
    if (intialLoad === false) {
      setPlayerBoard(gameBoard(9, 9));
      setUpdateDom(true);
    }
  };

  return (
    <div>
      {welcome ? (
        <WelcomeScreen playGame={playGame} />
      ) : winner ? (
        <WinnerScreen player={player} newGame={newGame} />
      ) : (
        <div className="container">
          <h1 className="center-align">
            {player ? `Player's Turn!` : `Computer's Turn`}
          </h1>
          <p className="center-align">{action}</p>
          <div className="board-grid">
            <PlayerBoard playerBoard={playerBoard.board} winner={winner} />
            <ComputerBoard
              computerBoard={computerBoard.board}
              winner={winner}
              attack={attack}
            />
            {gameOn ? null : <RandomizeShip randomizeShip={randomizeShip} />}
            <ComputerShips ships={computerBoard.ships} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
