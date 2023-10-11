/* eslint-disable no-undef */
import Ship from "./ship";

test("test hit method", () => {
  const ship = new Ship("new", 4, 0, false);
  ship.hit();
  ship.hit();
  expect(ship.hitCount).toBe(2);
});

test("check ship sunk or not", () => {
  const ship = new Ship("new", 2, 0, false);
  ship.hit();
  ship.hit();
  ship.isSunk();
  expect(ship.sunk).toBe(true);
});
