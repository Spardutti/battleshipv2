import React from "react";
import "materialize-css/dist/css/materialize.min.css";

const PlayerBoard = (props) => {
  return (
    <div className="player">
      <h1 className="center-align">Player</h1>
      <div className="board-grid center-align">
        {props.board.map((e, col) => {
          return (
            <div className="">
              {e.map((j, row) => {
                if (j === "empty") {
                  return (
                    <div
                      data-row={row}
                      data-col={col}
                      onClick={props.receiveAttack}
                      className="squares center-align"
                      ></div>
                  );
                  } if (j === "attacked") {
                    return (
                        <div
                          data-row={row}
                          data-col={col}
                          onClick={props.receiveAttack}
                          className="squares-attacked center-align"
                        ></div>
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
