import React from "react";
const ComputerBoard = (props) => {
  return (
    <div className="parent center-align">
      <h3>Computer</h3>
      <div className="grid-container">
        {props.computerBoard.map((col, index) => {
          return (
            <div className="center-align">
              {col.map((row, pos) => {
                if (props.computerBoard[index][pos] === "sea") {
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
                } else {
                  return (
                    <div
                      data-col={index}
                      data-row={pos}
                      className="ship center-align"
                      onClick={props.attackShip}
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

export default ComputerBoard;
