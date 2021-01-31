import gameBoard from "../functions/gameBoard";
import shipFactory from "../functions/shipFactory";



let testBoard = gameBoard(3,3);

test("x length", () => {
    expect(testBoard.board.length).toBe(3)
})

test("y length", () => {
    expect(testBoard.board[0][1]).toBe("empty");
})

test("ship placement vertical", () => {
    expect(testBoard.placeShip(2,2, 2, "vertical")).toBe("ship")
})
test("ship length placement vertical", () => {
    expect(testBoard.board[2][2]).toBe("ship");
})
test("ship placement horizontal", () => {
    expect(testBoard.placeShip(0,0, 2, "horizontal")).toBe("ship");
})

test("check if space is not free", () => {
    expect(testBoard.placeShip(0,0,2, "horizontal")).toBeFalsy();
})

test("attack missed", () => {
    expect(testBoard.receiveAttack(2,0)).toBe("attacked")
})

