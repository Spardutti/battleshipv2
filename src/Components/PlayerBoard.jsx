import React from "react";

const PlayerBoard = (props) => {
  return (
    <div className="parent center-align">
      <h3>Player</h3>
      <div className="grid-container">
        {props.playerBoard.map((col, index) => {
          return (
            <div className="center-align">
              {col.map((row, pos) => {
                if (props.playerBoard[index][pos] === "sea") {
                  return <div className="squares ">Sea</div>;
                } else {
                  return (
                    <div
                      data-col={index}
                      data-row={pos}
                      className="ship center-align"
                    >
                      Ship
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
