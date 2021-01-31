import shipFactory from "./shipFactory";

const gameBoard = (cols, rows) => {
  return {
    board: Array(rows)
      .fill()
      .map(() => Array(cols).fill("empty")),
    placeShip(col, row, shipLength, horizontal) {
      let ship = shipFactory(shipLength);

      if (horizontal && this.board[col][row] === "empty") {
        //check to keep ship inside array/board
        if (shipLength + col > this.board.length) {
          let colsToMove = shipLength + col - this.board.length;
          col = col - colsToMove;
        }
        //check for available space
        if (this.board[col][row] === "empty") {
          let pos = 1;
          let freeSpaces = 1;
          while (pos < shipLength) {
            if (this.board[col + pos][row] === "empty") {
              freeSpaces++;
            }
            pos++;
          }
          if (freeSpaces === shipLength) {
            let pos = 0;
            while (pos < shipLength) {
              this.board[col + pos][row] = "ship";
              pos++;
            }
          }
          return (this.board[col][row]);
        } else return false;
      }
      //Vertical
      if (this.board[col][row] === "empty") {
        //check to keep ship inside array/board
        if (shipLength + row > this.board.length) {
          let rowsToMove = shipLength + row - this.board.length;
          row = row - rowsToMove;
        }
        //check for available space
        if (this.board[col][row] === "empty") {
          let pos = 1;
          let freeSpaces = 1;
          while (pos < shipLength) {
            if (this.board[col][row + pos] === "empty") {
              freeSpaces++;
            }
            pos++;
          }
          if (freeSpaces === shipLength) {
            let pos = 0;
            while (pos < shipLength) {
              this.board[col][row + pos] = "ship";
              pos++;
            }
          }
          return this.board[col][row];
        } else {
          return false;
        }
      } else {
        return false;
      }
    },
    receiveAttack(col, row){
      if(this.board[col][row] === "empty"){
        return this.board[col][row] = "attacked"
      }
      if(this.board[col][row] === "ship"){
      }
    }
  };
};

export default gameBoard;
