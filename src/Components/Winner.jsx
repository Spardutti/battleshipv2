import React from "react";
import { motion } from "framer-motion";


const WinnerScreen = props => {
    return (
        <motion.div
            initial={{ opacity: 0, rotate: 180 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 2, type:"spring", stiffness: 200}}
            className="center-align win-container">
            <h1 className="center-align">{props.player ? "Player Wins!" : "Computer Wins!"} </h1>
            <p>Thanks for playing!</p>
            <button className="waves-effect waves-ligth btn" onClick={props.newGame}>Play Again ?</button>
        </motion.div>
    )
}

export default WinnerScreen;