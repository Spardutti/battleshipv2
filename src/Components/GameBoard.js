import shipFactory from "./ShipFactory";

const gameBoard = (cols, rows) => {
  return {
    board: new Array(rows).fill().map(() => new Array(cols).fill("sea")),
    ships: [shipFactory(3)],
    //----------------------------PLACESHIP
    placeShip() {
      //variables
      let col, row;
      let shipPlaced = false;
      let horizontal = true;
      let rndNum = Math.floor(Math.random() * 10);

      this.ships.forEach((ship, index) => {
        if (rndNum > 5) {
          horizontal = false;
        }
        while (!shipPlaced) {
          //--------------------------- HORIZONTAL--//
          if (horizontal) {
            //check for roll to not place the ship out of boundaries
            col = Math.floor(
              Math.random() * (this.board.length - ship.hitPoints.length)
            );
            row = Math.floor(Math.random() * this.board.length);
            //check if space rolled is empty
            if (this.board[col][row] === "sea") {
              //create a freeSpaces var to check if there is enough spaces for the length
              //of the ship
              let freeSpaces = 1;
              for (let i = 1; i < ship.hitPoints.length; i++) {
                if (this.board[col + i][row] === "sea") {
                  freeSpaces++;
                } else return (shipPlaced = false);
              }
              if (freeSpaces === ship.hitPoints.length) {
                for (let i = 0; i < ship.hitPoints.length; i++) {
                  this.board[col + i][row] = ship;
                }
                return (shipPlaced = true);
              }
            } //-----------------------------VERTICAL--//
          }
          if (!horizontal) {
            col = Math.floor(Math.random() * this.board.length);
            row = Math.floor(
              Math.random() * (this.board.length - ship.hitPoints.length)
            );
            if (this.board[col][row] === "sea") {
              let freeSpaces = 1;
              for (let i = 1; i < ship.hitPoints.length; i++) {
                if (this.board[col][row + i] === "sea") {
                  freeSpaces++;
                } else return (shipPlaced = false);
              }
              if (freeSpaces === ship.hitPoints.length) {
                for (let i = 0; i < ship.hitPoints.length; i++) {
                  this.board[col][row + i] = ship;
                }
                return (shipPlaced = true);
              }
            }
          } else return (shipPlaced = false);
        }
      });
      //roll for aligment
    },
    receiveAttack(col, row) {
      if (this.board[col][row] === "sea") {
        this.board[col][row] = "attacked";
        //next player
        //remove eventListener
      }
      //TODO HERE
      if (this.board === this.ships) {
      }
    },
  };
};

export default gameBoard;
