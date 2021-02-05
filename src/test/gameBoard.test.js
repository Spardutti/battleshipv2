import gameBoard from "../Components/GameBoard";

let board = gameBoard(3, 3);
board.placeShip();
/*
test("used to check the board", () => {
    expect(board).toBe();
  });
  */

  /* Did a test wihtout random ship placement
  to check if everything was working
test("attack 1", () => {
  expect(board.receiveAttack(0,0)).toBeTruthy();
})
test("attack 2", () => {
  expect(board.receiveAttack(1,0)).toBeTruthy();
})
test("attack 3 && winner", () => {
  expect(board.receiveAttack(2,0)).toBeTruthy();
})

*/
test("create board", () => {
  expect(gameBoard(2, 2).board.length).toBe(2);
});

test("ship placement", () => {
  expect(gameBoard(3,3).placeShip()).toBe(true);
});

/*will vary depending if it hits an empty or ocuppied space
test("attack board", () => {
  expect(board.receiveAttack(0,0)).toBe("attacked");
})
*/


if (playerBoard.receiveAttack(col, row) === "hit") {
  //game freeze if computer attack hits a ship. need to make a new attack.
  setUpdateDom(true);
  if (playerBoard.ships.length === 0) {
    setWinner(true);
  }
  setPlayer(false);
}