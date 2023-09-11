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
    gameBoard.autoPlace();
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
