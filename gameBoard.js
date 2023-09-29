export default class GameBoard {
  constructor() {
    this.allSunk = false;
    this.board = [];
    this.shipsCoord = {};
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

  isValidPos(row, col, length, orient) {
    if (orient === "x" && col + 1 - length >= 0) {
      const boardRow = this.board[row];
      for (let i = col; i > col - length; i -= 1) {
        if (boardRow[i] !== "empty") return false;
      }
      return true;
    }
    if (orient === "y" && row + 1 - length >= 0) {
      for (let i = row; i > row - length; i -= 1) {
        if (this.board[i][col] !== "empty") return false;
      }
      return true;
    }

    return false;
  }

  updateBoard(row, col, shipName, length, orient) {
    if (orient === "x") {
      const boardRow = this.board[row];
      for (let i = col; i > col - length; i -= 1) {
        boardRow[i] = shipName;
      }
    }
    if (orient === "y") {
      for (let i = row; i > row - length; i -= 1) {
        // console.log("i, col, shipName", i, col, shipName);
        this.board[i][col] = shipName;
      }
    }
    // Save this ship's coordinates
    this.updateShipsCoord(row, col, shipName, length, orient);
  }

  updateShipsCoord(row, col, shipName, length, orient) {
    if (orient === "x") {
      const ship = {};
      ship.start = [row, col + 1 - length];
      ship.end = [row, col];
      ship.orient = orient;
      ship.length = length;
      this.shipsCoord[shipName] = ship;
    }
    if (orient === "y") {
      const ship = {};
      ship.start = [row + 1 - length, col];
      ship.end = [row, col];
      ship.orient = orient;
      ship.length = length;
      this.shipsCoord[shipName] = ship;
    }
  }

  #getStartIndex(length, orient) {
    let indexFound = false;
    let row;
    let col;
    let cell;
    if (orient === "x") {
      while (!indexFound) {
        row = Math.floor(Math.random() * 10);
        // Add offset = length - 1 in col to check prev n-1 cells as empty
        col = length - 1 + Math.floor(Math.random() * (10 - (length - 1)));
        cell = this.board[row][col];
        // Check if current cell is empty and prev 'n-1' cells are empty horizontally
        if (cell === "empty") {
          indexFound = true;
          for (let i = 1; i < length; i += 1) {
            if (this.board[row][col - i] !== "empty") {
              indexFound = false;
              break;
            }
          }
        }

        // One additional check after index is found is to make sure there is atleast one cell empty between consecutive ships in order to make auto ships placement more logical and less random.
        if (indexFound) {
          // Check if ship's all cells are away from corner rows and columns
          if (row + 1 <= 9 && row - 1 >= 0 && col + 1 <= 9 && col - length - 1 >= 0) {
            if (this.board[row][col + 1] !== "empty") {
              indexFound = false;
            }
            if (this.board[row][col - length] !== "empty") {
              indexFound = false;
            }
            for (let i = 0; i < length; i += 1) {
              if (
                this.board[row + 1][col - i] !== "empty" ||
                this.board[row - 1][col - i] !== "empty"
              )
                indexFound = false;
            }
          }
          if (row === 0) {
            for (let i = 0; i < length; i += 1) {
              if (this.board[row + 1][col - i] !== "empty") {
                indexFound = false;
              }
            }
          }
          if (row === 9) {
            for (let i = 0; i < length; i += 1) {
              if (this.board[row - 1][col - i] !== "empty") {
                indexFound = false;
              }
            }
          }
          if (col === 9) {
            if (this.board[row][col - length] !== "empty") {
              indexFound = false;
            }
          }
          if (col - length === 0) {
            if (this.board[row][col + 1] !== "empty") {
              indexFound = false;
            }
          }
        }
      }
    } else if (orient === "y") {
      while (!indexFound) {
        // Add offset = length - 1 in row to check prev n-1 cells as empty
        row = length - 1 + Math.floor(Math.random() * (10 - (length - 1)));
        col = Math.floor(Math.random() * 10);
        cell = this.board[row][col];
        // Check if current cell is empty and prev 'n-1' cells are empty vertically
        if (cell === "empty") {
          indexFound = true;
          for (let i = 1; i < length; i += 1) {
            if (this.board[row - i][col] !== "empty") {
              indexFound = false;
              break;
            }
          }
        }
        // One additional check after index is found is to make sure there is atleast one cell empty between consecutive ships in order to make auto ships placement more logical and less random.
        if (indexFound) {
          // Check if ship's all cells are away from corner rows and columns
          if (row + 1 <= 9 && row - length - 1 >= 0 && col + 1 <= 9 && col - 1 >= 0) {
            if (this.board[row + 1][col] !== "empty") {
              indexFound = false;
            }
            if (this.board[row - length][col] !== "empty") {
              indexFound = false;
            }
            for (let i = 0; i < length; i += 1) {
              if (
                this.board[row - i][col + 1] !== "empty" ||
                this.board[row - i][col - 1] !== "empty"
              ) {
                indexFound = false;
              }
            }
          }
          if (col === 0) {
            for (let i = 0; i < length; i += 1) {
              if (this.board[row - i][col + 1] !== "empty") {
                indexFound = false;
              }
            }
          }
          if (col === 9) {
            for (let i = 0; i < length; i += 1) {
              if (this.board[row - i][col - 1] !== "empty") {
                indexFound = false;
              }
            }
          }
          if (row === 9) {
            if (this.board[row - length][col] !== "empty") {
              indexFound = false;
            }
          }
          if (row - length === 0) {
            if (this.board[row + 1][col] !== "empty") {
              indexFound = false;
            }
          }
        }
      }
    }

    return [row, col];
  }

  #placeSingleShip(ship, orient) {
    const shipName = ship[0];
    const length = ship[2];
    // Use array destructuring for acccessing elements
    const [row, col] = this.#getStartIndex(length, orient);
    // Update ai board with this ship info
    // console.log("row, col, shipName, length, ", row, col, shipName, length);
    this.updateBoard(row, col, shipName, length, orient);
  }

  autoFillShipsBoard(shipsArr) {
    // console.log("ships array", shipsArr);
    const orientArr = ["x", "y"];
    shipsArr.forEach((ship) => {
      // chose orientation randomly
      const index = Math.floor(Math.random() * 2);
      const orient = orientArr[index];
      // console.log("ship", ship);
      this.#placeSingleShip(ship, orient);
    });
  }

  // Receive attack function to check whether that shot hit any ship or got missed
  receiveAttack(position) {
    const row = position[0];
    const col = position[1];
    const cellStatus = this.board[row][col];
    if (cellStatus === "empty") {
      this.board[row][col] = "missed";
    } else {
      this.board[row][col] = "hit";
    }
    // Return attacking cell status
    return cellStatus;
  }
}
