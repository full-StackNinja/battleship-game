import GameBoard from "./gameBoard";
import Ship from "./ship";

test("game board have length 10", () => {
  const board = new GameBoard();
  board.buildBoard();
  expect(board.board).toHaveLength(10);
  expect(board.board[0]).toHaveLength(10);
  expect(board.board[0]).toEqual([
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
    "empty",
  ]);
});

describe("placeShip(ship, orientation)", () => {
  it(" Should place the ship on board horizontally but randomly", () => {
    const gameBoard = new GameBoard();
    gameBoard.buildBoard();
    const carrier = new Ship("c1", 4, 0, false);
    gameBoard.placeShip(carrier, "h");
    const shipPos = gameBoard.board
      .map((row) => row.filter((cell) => cell === "c1"))
      .filter((array) => array.length !== 0);
    expect(...shipPos).toHaveLength(4);
    expect(...shipPos).toEqual(["c1", "c1", "c1", "c1"]);
  });

  it("should place the ship on board vertically randomly", () => {
    const gameBoard = new GameBoard();
    gameBoard.buildBoard();
    const carrier = new Ship("c1", 4, 0, false);
    gameBoard.placeShip(carrier, "v");
    const shipPos = gameBoard.board
      .map((row) => row.filter((cell) => cell === "c1")[0])
      .filter((cell) => cell !== undefined);
    expect(shipPos).toHaveLength(4);
    expect(shipPos).toEqual(["c1", "c1", "c1", "c1"]);
  });
  it("Should place the ship of length=1 on board horizontally randomly ", () => {
    const gameBoard = new GameBoard();
    gameBoard.buildBoard();
    const singleton1 = new Ship("s1", 1, 0, false);
    gameBoard.placeShip(singleton1, "h");
    const shipPos = gameBoard.board
      .map((row) => row.filter((cell) => cell === "s1")[0])
      .filter((cell) => cell !== undefined);
    expect(shipPos).toHaveLength(1);
    expect(shipPos).toEqual(["s1"]);
  });
  it("place the ship of length=1 on board vertically randomly", () => {
    const gameBoard = new GameBoard();
    gameBoard.buildBoard();
    const singleton1 = new Ship("s1", 1, 0, false);
    gameBoard.placeShip(singleton1, "v");
    const shipPos = gameBoard.board
      .map((row) => row.filter((cell) => cell === "s1")[0])
      .filter((cell) => cell !== undefined);
    expect(shipPos).toHaveLength(1);
    expect(shipPos).toEqual(["s1"]);
  });
});

describe("autoPlace() Method", () => {
  test("check that all the 10 ships have been placed on the board randomly", () => {
    const gameBoard = new GameBoard();
    gameBoard.buildBoard();
    // Define board ships
    const carrier = new Ship("c", 4, 0, false);
    const destroyer1 = new Ship("d1", 3, 0, false);
    const destroyer2 = new Ship("d2", 3, 0, false);
    const patrolBoat1 = new Ship("p1", 2, 0, false);
    const patrolBoat2 = new Ship("p2", 2, 0, false);
    const patrolBoat3 = new Ship("p3", 2, 0, false);
    const singleton1 = new Ship("s1", 1, 0, false);
    const singleton2 = new Ship("s2", 1, 0, false);
    const singleton3 = new Ship("s3", 1, 0, false);
    const singleton4 = new Ship("s4", 1, 0, false);
    const shipsArr = [
      carrier,
      destroyer1,
      destroyer2,
      patrolBoat1,
      patrolBoat2,
      patrolBoat3,
      singleton1,
      singleton2,
      singleton3,
      singleton4,
    ];
    gameBoard.autoPlace(shipsArr);
    const arr = [];
    gameBoard.board.forEach((row) =>
      row.forEach((cell) => (cell !== "empty" ? arr.push(cell) : arr.concat([])))
    );
    const expectedArr = [
      "c",
      "c",
      "c",
      "c",
      "d1",
      "d1",
      "d1",
      "d2",
      "d2",
      "d2",
      "p1",
      "p1",
      "p2",
      "p2",
      "p3",
      "p3",
      "s1",
      "s2",
      "s3",
      "s4",
    ];
    expect(expectedArr).toEqual(expect.arrayContaining(arr));
  });
});

describe("receiveAttack(position) Method", () => {
  it("should check that attack is conceived on correct position", () => {
    const gameBoard = new GameBoard();
    gameBoard.buildBoard();
    // Define board ships
    const carrier = new Ship("c", 4, 0, false);
    const destroyer1 = new Ship("d1", 3, 0, false);
    const destroyer2 = new Ship("d2", 3, 0, false);
    const patrolBoat1 = new Ship("p1", 2, 0, false);
    const patrolBoat2 = new Ship("p2", 2, 0, false);
    const patrolBoat3 = new Ship("p3", 2, 0, false);
    const singleton1 = new Ship("s1", 1, 0, false);
    const singleton2 = new Ship("s2", 1, 0, false);
    const singleton3 = new Ship("s3", 1, 0, false);
    const singleton4 = new Ship("s4", 1, 0, false);
    const shipsArr = [
      carrier,
      destroyer1,
      destroyer2,
      patrolBoat1,
      patrolBoat2,
      patrolBoat3,
      singleton1,
      singleton2,
      singleton3,
      singleton4,
    ];
    gameBoard.autoPlace(shipsArr);

    // Since ships are placed randomly, so first pick any cell on the board with ship and witout ship
    const shipsPos = [];
    const emptyPos = [];
    gameBoard.board.forEach((row, rowIndex) =>
      row.forEach((cell, colIndex) =>
        cell !== "empty"
          ? shipsPos.push({ pos: [rowIndex, colIndex], value: cell })
          : emptyPos.push([rowIndex, colIndex])
      )
    );
    // Check attack missed
    expect(gameBoard.receiveAttack(emptyPos[0])).toBe("empty");
    // Check ship got attacked
    expect(gameBoard.receiveAttack(shipsPos[0].pos)).toBe(shipsPos[0].value);
  });
});
