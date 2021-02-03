import shipFactory from "../Components/ShipFactory";

test("create ship with length 3", () => {
  expect(shipFactory(3).hitPoints.length).toBe(3);
});

test("receive one attack", () => {
  expect(shipFactory(2).hit()).toBe("x");
});

let boat = shipFactory(2);
boat.hit();
boat.hit();
test("check isSunk", () => {
  expect(boat.isSunk()).toBe(true);
});
