import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import { motion } from "framer-motion";

const WelcomeScreen = (props) => {
  return (
    <div className="center-align welcome">
      <motion.h1
        initial={{ y: -300 }}
        animate={{ y: 0 }}
        transition={{ delay:.5 }}
      >
        Welcome
      </motion.h1>
      <motion.p
        initial={{ x: -800 }}
        animate={{ x: 0 }}
        transition={{ delay: .5, stiffness: 70, type: "spring" }}
      >
        The goal of the game is to destroy all <br/>
        of the enemy ships before he destroy yours! <br/>
        if your attack hit, you can attack again. <br/>
        if you miss, its your oponent turn! <br/>
        Good Luck, Have Fun
      </motion.p>
      <motion.button
        initial={{ y: 5000 }}
        animate={{ y: 0 }}
        transition={{delay: .5}}
              onClick={props.playGame} className="waves-effect waves-light btn">
        Play!
      </motion.button>
    </div>
  );
};

export default WelcomeScreen;
