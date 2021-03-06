import React from "react";
import uniqid from "uniqid";


const PlayerBoard = (props) => {
  return (
    <div className="parent center-align">
      <h3 className="current-player">Player</h3>
      <div className="grid-container">
        {props.playerBoard.map((col, index) => {
          return (
            <div key={uniqid()} className="center-align">
              {col.map((row, pos) => {
                if (props.playerBoard[index][pos] === "sea") {
                  return (
                    <div key={uniqid()}
                      data-col={index}
                      data-row={pos}
                      onClick={props.attack}
                      className="squares "
                    >
                      
                    </div>
                  );
                }
                if (typeof props.playerBoard[index][pos] === "object") {
                  return (
                    <div key={uniqid()}                      data-col={index}
                      data-row={pos}
                      className="ship center-align"
                      onClick={props.attack}
                    >
                      
                    </div>
                  );
                }
                if (props.playerBoard[index][pos] === "hit") {
                  return (
                    <div key={uniqid()}                      data-col={index}
                      data-row={pos}
                      className="hit center-align"
                    >
                      
                    </div>
                  );
                } else {
                  return (
                    <div key={uniqid()}                      data-col={index}
                      data-row={pos}
                      className="attacked center-align"
                    >
                      
                    </div>
                  );
                }
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PlayerBoard;
