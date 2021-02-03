const gameBoard = (board,fleet) => {
  return {
    player: true,
    winner: false,
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
          let col = Math.floor(Math.random() * board.length);
          let row = Math.floor(Math.random() * board.length);
          //------------------------- HORIZONTAL ---------------------//
          if (horizontal && board[col][row] === "empty") {
            //check to keep ship inside array/board
            if (ship.length + col > board.length) {
              let colsToMove = ship.length + col - board.length;
              col = col - colsToMove;
            }

            //check for available space
            if (board[col][row] === "empty") {
              let pos = 1;
              let freeSpaces = 1;
              while (pos < ship.length) {
                if (board[col + pos][row] === "empty") {
                  freeSpaces++;
                }
                pos++;
              }
              if (freeSpaces === ship.length) {
                let pos = 0;
                while (pos < ship.length) {
                  board[col + pos][row] = ship;
                  pos++;
                }
              }
              return board[col][row];
            } else return (shipPlaced = false);
          }
          // ------------------------VERTICAL---------------------------//
          if (!horizontal && board[col][row] === "empty") {
            //check to keep ship inside array/board
            if (ship.length + row > board.length) {
              let rowsToMove = ship.length + row - board.length;
              row = row - rowsToMove;
            }
            //check for available space
            if (board[col][row] === "empty") {
              let pos = 1;
              let freeSpaces = 1;
              while (pos < ship.length) {
                if (board[col][row + pos] === "empty") {
                  freeSpaces++;
                }
                pos++;
              }
              if (freeSpaces === ship.length) {
                let pos = 0;
                while (pos < ship.length) {
                  board[col][row + pos] = ship;
                  pos++;
                }
              }
              return board[col][row];
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
        
        if (board[col][row] === "empty") {
          this.player = !this.player;
          board[col][row] = "attacked"
          return board;
        }
        if (
          board[col][row] !== "empty" &&
          board[col][row] !== "attacked"
        ) {
          //damage the ship
          let ship = board[col][row];
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
          col = Math.floor(Math.random() * board.length);
          row = Math.floor(Math.random() * board.length)
        }
        while (board[col][row] === "attacked")
        if (board[col][row] === "empty") {
          this.player = !this.player;
          return (board[col][row] = "attacked");
        }
        if (
          board[col][row] !== "empty" &&
          board[col][row] !== "attacked"
        ) {
          //damage the ship
          let ship = board[col][row];
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
