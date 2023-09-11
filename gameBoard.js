import Ship from "./ship";

export default class GameBoard {
  constructor() {
    this.allSunk = false;
    this.board = [];
    this.shipsAbbreviations = {};
  }

  buildBoard() {
    for (let r = 0; r < 10; r += 1) {
      const row = [];
      for (let c = 0; c < 10; c += 1) {
        row.push("empty");
      }
      this.board.push(row);
    }
  }

  #getStartIndex(n, orientation) {
    let indexFound = false;
    let row;
    let col;
    let cell;

    if (orientation === "h") {
      while (!indexFound) {
        row = Math.floor(Math.random() * 10);
        col = Math.floor(Math.random() * (10 - (n - 1)));
        cell = this.board[row][col];
        // Check if index position on board is empty and next 'n' cells are empty horizontally
        if (cell === "empty") {
          indexFound = true;
          for (let i = 1; i < n - 1; i += 1) {
            if (this.board[row][col + i] !== "empty") {
              indexFound = false;
              break;
            }
          }
        }
      }
    } else if (orientation === "v") {
      while (!indexFound) {
        row = Math.floor(Math.random() * (10 - (n - 1)));
        col = Math.floor(Math.random() * 10);
        cell = this.board[row][col];
        // Check if index position on board is empty and next 'n' cells are empty vertically
        if (cell === "empty") {
          indexFound = true;
          for (let i = 1; i < n - 1; i += 1) {
            if (this.board[row + i][col] !== "empty") {
              indexFound = false;
              break;
            }
          }
        }
      }
    }
    return [row, col];
  }

  placeShip(ship, orientation) {
    const [row, col] = this.#getStartIndex(ship.length, orientation);
    if (orientation === "h") {
      for (let i = 0; i < ship.length; i += 1) {
        this.board[row][col + i] = ship.name;
      }
    } else if (orientation === "v") {
      for (let i = 0; i < ship.length; i += 1) {
        this.board[row + i][col] = ship.name;
      }
    }
  }

  autoPlace() {
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

    // Add ships to array to place them randomly on the board
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
    const orientationArr = ["h", "v"];

    shipsArr.forEach((ship) => {
      const index = Math.floor(Math.random() * 2);
      const orientation = orientationArr[index];
      this.placeShip(ship, orientation);
    });
  }

  // Receive attack function to check whether that shot hit any ship or got missed
  receiveAttack(position) {
    const row = position[0];
    const col = position[1];
  }
}
