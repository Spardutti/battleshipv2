import React from "react";
const PlayerBoard = (props) => {
  return (
    <div className="parent center-align">
      <h3>Computer</h3>
      <div className="grid-container">
        {props.playerBoard.map((col, index) => {
          return (
            <div className="center-align">
              {col.map((row, pos) => {
                if (props.playerBoard[index][pos] === "sea") {
                  return (
                    <div
                      data-col={index}
                      data-row={pos}
                      onClick={props.attack}
                      className="squares "
                    >
                      Sea
                    </div>
                  );
                }
                if (typeof props.playerBoard[index][pos] === "object") {
                  return (
                    <div
                      data-col={index}
                      data-row={pos}
                      className="ship center-align"
                      onClick={props.attack}
                    >
                      Ship
                    </div>
                  );
                }
                if (props.playerBoard[index][pos] === "hit") {
                  return (
                    <div
                      data-col={index}
                      data-row={pos}
                      className="hit center-align"
                    >
                      hit
                    </div>
                  );
                } else {
                  return (
                    <div
                      data-col={index}
                      data-row={pos}
                      className="attacked center-align"
                    >
                      Att
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
