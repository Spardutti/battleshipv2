import ship from "../functions/shipFactory";

let tiny = ship(4);

test("ship length", () => {
  expect(tiny.length).toBe(4);
});

test("ship hp", () => {
  expect(tiny.hitPoints.length).toBe(4);
});

test("attacked position", () => {
  expect(tiny.hitPos(3)).toBe(true);
});

test("is ship sunk", () => {
  expect(tiny.isSunk()).toBe(false);
});
