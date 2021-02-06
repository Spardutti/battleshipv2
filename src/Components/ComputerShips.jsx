import React from "react";

const ComputerShips = (props) => {
  return (
    <div className="remaining-ships">
      {props.ships.map((e) => {
        return (
          <div className="ship-left">
            {e.hitPoints.map((ship) => {
              if (ship === "o" ){
                return <div  className="square-left"></div>;
              } else {
                return <div  className="square-hit"></div>;

              }
            })}
          </div>
        );
      })}
    </div>
  );
};

export default ComputerShips;
