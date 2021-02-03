import gameBoard from "../Components/GameBoard";


test("create board", () => {
    expect(gameBoard(2,2).board.length).toBe(2)
})


test("ship placement", () => {
    expect(gameBoard(3,3).placeShip()).toBe(true);
})

test("test for ship larger than free space", () => {
    expect(gameBoard(2,2).placeShip()).toThrowError();
})