const gameBoard = (cols, rows, fleet) => {
  return {
    player: true,
    winner: false,
    board: Array(rows)
      .fill()
      .map(() => Array(cols).fill("empty")),
    placeShip() {
      //roll for horizontal or vertical
      let rndPos = Math.floor(Math.random() * 1);
      let horizontal = true;
      if (rndPos === 1) {
        horizontal = false;
      }
      fleet.forEach((ship) => {
        let shipPlaced;
        //do while ship is not placed or coordinates are already in use
        do {
          shipPlaced = true;
          let col = Math.floor(Math.random() * this.board.length);
          let row = Math.floor(Math.random() * this.board.length);
          //------------------------- HORIZONTAL ---------------------//
          if (horizontal && this.board[col][row] === "empty") {
            //check to keep ship inside array/board
            if (ship.length + col > this.board.length) {
              let colsToMove = ship.length + col - this.board.length;
              col = col - colsToMove;
            }

            //check for available space
            if (this.board[col][row] === "empty") {
              let pos = 1;
              let freeSpaces = 1;
              while (pos < ship.length) {
                if (this.board[col + pos][row] === "empty") {
                  freeSpaces++;
                }
                pos++;
              }
              if (freeSpaces === ship.length) {
                let pos = 0;
                while (pos < ship.length) {
                  this.board[col + pos][row] = ship;
                  pos++;
                }
              }
              return this.board[col][row];
            } else return (shipPlaced = false);
          }
          // ------------------------VERTICAL---------------------------//
          if (!horizontal && this.board[col][row] === "empty") {
            //check to keep ship inside array/board
            if (ship.length + row > this.board.length) {
              let rowsToMove = ship.length + row - this.board.length;
              row = row - rowsToMove;
            }
            //check for available space
            if (this.board[col][row] === "empty") {
              let pos = 1;
              let freeSpaces = 1;
              while (pos < ship.length) {
                if (this.board[col][row + pos] === "empty") {
                  freeSpaces++;
                }
                pos++;
              }
              if (freeSpaces === ship.length) {
                let pos = 0;
                while (pos < ship.length) {
                  this.board[col][row + pos] = ship;
                  pos++;
                }
              }
              return this.board[col][row];
            } else {
              return (shipPlaced = false);
            }
          } else {
            return (shipPlaced = false);
          }
        } while (!shipPlaced);
      });
    },
    receiveAttack(col, row) {
      if (this.winner === false && this.player) {
        if (this.board[col][row] === "empty") {
          this.player = !this.player;
          return (this.board[col][row] = "attacked");
        }
        if (
          this.board[col][row] !== "empty" &&
          this.board[col][row] !== "attacked"
        ) {
          //damage the ship
          let ship = this.board[col][row];
          let index = ship.hitPoints.indexOf(false);
          ship.hitPos(index);
          if (ship.isSunk()) {
            let shipDestroyed = fleet.indexOf(ship);
            fleet.splice(shipDestroyed, 1);
            if (fleet.length === 0) {
              return this.winner =true;
            }
          }
        }
      }
      if (this.winner === false && this.player !== true) {
        do {
          col = Math.floor(Math.random() * this.board.length);
          row = Math.floor(Math.random() * this.board.length)
        }
        while (this.board[col][row] === "attacked")
        if (this.board[col][row] === "empty") {
          this.player = !this.player;
          return (this.board[col][row] = "attacked");
        }
        if (
          this.board[col][row] !== "empty" &&
          this.board[col][row] !== "attacked"
        ) {
          //damage the ship
          let ship = this.board[col][row];
          let index = ship.hitPoints.indexOf(false);
          ship.hitPos(index);
          if (ship.isSunk()) {
            let shipDestroyed = fleet.indexOf(ship);
            fleet.splice(shipDestroyed, 1);
            if (fleet.length === 0) {
              return this.winner =true;
            }
          }
        }
      }
     
    },
  };
};

export default gameBoard;
