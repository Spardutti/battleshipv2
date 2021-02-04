import gameBoard from "../Components/GameBoard";

let board = gameBoard(3, 3);
board.placeShip();

test("used to check the board", () => {
    expect(board).toBe();
  });
  

test("create board", () => {
  expect(gameBoard(2, 2).board.length).toBe(2);
});

test("ship placement", () => {
  expect(gameBoard(3, 3).placeShip()).toBe(true);
});
