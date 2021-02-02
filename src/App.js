import WelcomeScreen from "./Components/WelcomeScreen";
import "materialize-css/dist/css/materialize.min.css";
import PlayerBoard from "./Components/PlayerBoard";
import ComputerBoard from "./Components/ComputerBoard";
import React, { useState, useEffect } from "react";
import gameBoard from "./functions/gameBoard";
import "./style/welcome.css";

function App() {
  const [welcome, setWelcome] = useState(true);
  const [board, setBoard] = useState();
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState(gameBoard().winner);
  const [ fleet, setFleet ] = useState([]);

  const playGame = () => {
    setWelcome(false);
  };

  useEffect(() => {
    setBoard(gameBoard(8, 8).board);
    player ? setPlayer("Player") : setPlayer("Computer");
  }, []);

   
  const receiveAttack = ( e) => {
    console.log(e.target);
    let col = e.target.getAttribute("data-col");
     let row = e.target.getAttribute("data-row");
    if (winner === false && player) {
      if (board[col][row] === "empty") {
        board[col][row] = "attacked"
        setPlayer(false);
        return setBoard(board);
      }
      
    }
  }
  

  return (
    <div>
      {welcome ? (
        <WelcomeScreen playGame={playGame} />
      ) : (
        <div className="container game">
          <h1 className="center-align">{player} turn!</h1>
          <div className="row">
            <div className="col s6">
              <PlayerBoard board={board} receiveAttack={receiveAttack} />
            </div>
            <div className="col s6">
              <ComputerBoard board={board} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
