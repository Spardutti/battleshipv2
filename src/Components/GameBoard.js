import shipFactory from "./ShipFactory";

const gameBoard = (col, row) => {
  return {
    board: new Array(row).fill().map(() => new Array(col).fill("sea")),
    placeShip() {
      let ship = shipFactory(3);
      let col, row;
      let shipPlaced = false;
      let horizontal = true;
      let rndNum = Math.floor(Math.random() * 10);

      if (rndNum > 5) {
        horizontal = false;
      }
      while (!shipPlaced) {
        //--------------------------- HORIZONTAL
        if (horizontal) {
          col = Math.floor(
            Math.random() * (this.board.length - ship.hitPoints.length)
          );
          row = Math.floor(Math.random() * this.board.length);
          if (this.board[col][row] === "sea") {
            let freeSpaces = 1;
            for (let i = 1; i < ship.hitPoints.length; i++) {
              if (this.board[col + i][row] === "sea") {
                freeSpaces++;
              }
                else  return shipPlaced = false;
            }
            if (freeSpaces === ship.hitPoints.length) {
              for (let i = 0; i < ship.hitPoints.length; i++) {
                this.board[col + i][row] = ship;
                return (shipPlaced = true);
              }
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
              } else return shipPlaced = false;
            }
            if (freeSpaces === ship.hitPoints.length) {
              for (let i = 0; i < ship.hitPoints.length; i++) {
                this.board[col][row + i] = ship;
                return (shipPlaced = true);
              }
            }
          }
        } else return (shipPlaced = false);
      }
    },
  };
};

export default gameBoard;
