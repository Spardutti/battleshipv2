import shipFactory from "./ShipFactory";

const gameBoard = (cols, rows) => {
  return {
    board: new Array(rows).fill().map(() => new Array(cols).fill("sea")),
    ships: [
      shipFactory(2),
      shipFactory(2),
      shipFactory(3),
      shipFactory(3),
      shipFactory(4),
      shipFactory(5),
    ],
    //----------------------------PLACESHIP
    placeShip() {
      //variables
      let col, row;
      let horizontal = true;
      let rndNum = Math.floor(Math.random() * 10);

      this.ships.forEach((ship, index) => {
        let shipPlaced = false;

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
                } 
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
                } 
              }
              if (freeSpaces === ship.hitPoints.length) {
                for (let i = 0; i < ship.hitPoints.length; i++) {
                  this.board[col][row + i] = ship;
                }
                return (shipPlaced = true);
              }
            }
          } 
        }
        return shipPlaced;
      });
    },
    receiveAttack(col, row) {
      if (this.board[col][row] === "sea") {
        this.board[col][row] = "attacked";
        //next player
        //remove eventListener
      }
      //TODO HERE
      if (typeof this.board[col][row] === "object") {
        let ship = this.board[col][row];
        let index = this.ships.indexOf(ship);
        this.board[col][row] = "hit";
        this.ships[index].hit();
        if (this.ships[index].isSunk()) {
          //check for all ships destroyed
          this.ships.splice(index, 1);
        }
        if (this.ships.length === 0) {
          return "winner";
        }
      }
      return this.board[col][row];
    },
  };
};

export default gameBoard;
