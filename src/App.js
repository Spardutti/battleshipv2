import WelcomeScreen from "./Components/WelcomeScreen";
import "materialize-css/dist/css/materialize.min.css";
import React, { useState, useEffect } from "react";

function App() {
  const [welcome, setWelcome] = useState(true);

  const playGame = () => {
    setWelcome(false);
  };

  useEffect(() => {});

  return (
    <div>
      {welcome ? (
        <WelcomeScreen playGame={playGame} />
      ) : (
        <div className="container game">
          <h1 className="center-align">turn!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
