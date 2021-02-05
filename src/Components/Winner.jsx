import React from "react";


const WinnerScreen = props => {
    return (
        <div className="center-align win-container">
            <h1 className="center-align">{props.player ? "Player Wins!" : "Computer Wins!"} </h1>
            <p>Thanks for playing!</p>
            <button className="waves-effect waves-ligth btn" onClick={props.newGame}>Play Again ?</button>
        </div>
    )
}

export default WinnerScreen;