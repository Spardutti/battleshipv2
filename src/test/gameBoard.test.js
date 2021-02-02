import gameBoard from "../functions/gameBoard";
import shipFactory from "../functions/shipFactory";

let dd = shipFactory(2);
let cc = shipFactory(3);

let fleet = [dd]


let testBoard = gameBoard(1, 2, fleet);
testBoard.placeShip("horizontal");

test("check the board", () => {
    expect(testBoard.board).toBe("");
})

//testBoard.placeShip(2,2, "vertical")
/* working before random cant check now
test("ship length placement vertical", () => {
    expect(testBoard.board[2][2]).toMatchObject(dd);
})*/


//testBoard.placeShip(0,0, "horizontal")


test("check if space is not free", () => {
    expect(testBoard.placeShip(0,0, "horizontal")).toBeFalsy();
})
/* checked before random place
test("attack missed", () => {
    expect(testBoard.receiveAttack(2,0)).toBe("attacked")
})
test("attack hit", () => {
    expect(testBoard.receiveAttack(2,2)).toBe(dd);
})
test("attack hit2", () => {
    expect(testBoard.receiveAttack(2,1)).toBe("attacked");
}) */



test("check if winner", () => {
    expect(testBoard.receiveAttack(0,0)).toBe(false);
})