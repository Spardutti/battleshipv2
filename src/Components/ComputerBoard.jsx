import React from "react";
import uniqid from "uniqid";


const ComputerBoard = (props) => {
  return (
    <div className="parent center-align">
      <h3>Computer</h3>
      <div className="grid-container">
        {props.computerBoard.map((col, index) => {
          return (
            <div key={uniqid()} className="center-align">
              {col.map((row, pos) => {
                if (props.computerBoard[index][pos] === "sea") {
                  return (
                    <div key={uniqid()}
                      data-col={index}
                      data-row={pos}
                      onClick={props.attack}
                      className="squares "
                    >
                      Sea
                    </div>
                  );
                }
                if (typeof props.computerBoard[index][pos] === "object") {
                  return (
                    <div key={uniqid()}
                      data-col={index}
                      data-row={pos}
                      className="ship center-align"
                      onClick={props.attack}
                    >
                      Ship
                    </div>
                  );
                }
                if (props.computerBoard[index][pos] === "hit") {
                  return (
                    <div key={uniqid()}
                      data-col={index}
                      data-row={pos}
                      className="hit center-align"
                    >
                      hit
                    </div>
                  );
                } if(props.computerBoard[index][pos] === "attacked") {
                  return (
                    <div key={uniqid()}
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

export default ComputerBoard;
