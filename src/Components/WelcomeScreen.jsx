import React from "react";
import { Button, Card, Row, Col} from "react-materialize"
import "materialize-css/dist/css/materialize.min.css"

const WelcomeScreen = props => {

    return (
        <div className="center-align welcome">
            <h1 >Welcome</h1>
            <p>The goal of the game is to destroy all</p>
            <p>of the enemy ships before he destroy yours!</p>
            <p>if your attack hit, you can attack again.</p>
            <p>if you miss, its your oponent turn!</p>
            <p>Good Luck, Have Fun!</p>
            <button onClick={props.playGame} className="waves-effect waves-light btn">Play!</button>
        </div>

    )
}

export default WelcomeScreen;