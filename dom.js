/* eslint-disable import/extensions */
// import GameBoard from "./gameBoard.js";
import player from "./player.js";
import ai from "./ai.js";

export default (function domManipulation() {
  function resetTable(tableName) {
    if (tableName === "your-table") {
      const gridTable = document.querySelector(".your-table");
      const tableCells = gridTable.querySelectorAll(".table-cell");
      // console.log('table cells', tableCells)
      tableCells.forEach((cell) => {
        // console.log("cell", cell);
        cell.setAttribute("data-value", "empty");
        // console.log("cell", cell);
      });
    }
  }

  function createShip(shortName, length, orient) {
    const ship = document.createElement("div");
    ship.style.position = "absolute";
    ship.style.top = "0";
    ship.style.left = "0";
    if (orient === "x") {
      ship.style.width = `${2 * length}vw`;
      ship.style.height = "2vw";
      ship.setAttribute("data-width", `${2 * length}vw`);
      ship.setAttribute("data-height", "2vw");
      ship.setAttribute("data-length", `${length}`);
      ship.setAttribute("data-orient", "x");
    }
    if (orient === "y") {
      ship.style.width = "2vw";
      ship.style.height = `${2 * length}vw`;
      ship.setAttribute("data-width", "2vw");
      ship.setAttribute("data-height", `${2 * length}vw`);
      ship.setAttribute("data-length", `${length}`);
      ship.setAttribute("data-orient", "y");
    }
    ship.classList.add("moving");
    ship.classList.add(shortName);
    ship.classList.add("ship");
    return ship;
  }

  function changeOrientation() {
    const shipPlacePage = document.querySelector(".ship-placement-page");
    const currentShip = shipPlacePage.querySelector(".moving");
    if (currentShip.getAttribute("data-orient") === "x") {
      currentShip.setAttribute("data-orient", "y");
      const width = currentShip.getAttribute("data-width");
      const height = currentShip.getAttribute("data-height");
      currentShip.style.width = height;
      currentShip.style.height = width;
      currentShip.setAttribute("data-height", width);
      currentShip.setAttribute("data-width", height);
    } else if (currentShip.getAttribute("data-orient") === "y") {
      currentShip.setAttribute("data-orient", "x");
      const width = currentShip.getAttribute("data-width");
      const height = currentShip.getAttribute("data-height");
      currentShip.style.width = height;
      currentShip.style.height = width;
      currentShip.setAttribute("data-height", width);
      currentShip.setAttribute("data-width", height);
    }
  }

  // TODO... Update cell value
  function updateCellVal(playerName, shipName, shipEnd, length, orient) {
    const gamePage = document.querySelector(".gameplay-page");
    const row = shipEnd[0];
    const column = shipEnd[1];
    if (playerName === "player") {
      const yourTable = gamePage.querySelector(".your-table");
      if (orient === "x") {
        for (let i = 0; i < length; i += 1) {
          yourTable.rows[row].cells[column - i].setAttribute("data-value", shipName);
        }
      } else if (orient === "y") {
        for (let i = 0; i < length; i += 1) {
          yourTable.rows[row - i].cells[column].setAttribute("data-value", shipName);
        }
      }
    } else if (playerName === "ai") {
      const oppTable = gamePage.querySelector(".opponent-table");
      if (orient === "x") {
        for (let i = 0; i < length; i += 1) {
          oppTable.rows[row].cells[column - i].setAttribute("data-value", shipName);
        }
      } else if (orient === "y") {
        for (let i = 0; i < length; i += 1) {
          oppTable.rows[row - i].cells[column].setAttribute("data-value", shipName);
        }
      }
    }
  }

  // Place ships on the player/ai board on game-play-page
  function autoPlaceShips(playerName, shipsCoord) {
    // console.log(player.gameBoard.board);
    const shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach((shipName) => {
      const shipData = shipsCoord[shipName];
      // console.log(shipData);
      const { end, orient, length } = shipData;
      const ship = createShip(shipName, length, orient);

      // Also update table cell's data-value with shipName
      updateCellVal(playerName, shipName, end, length,orient);
      // console.log(ship)
      // Call game play page
      const gamePlayPage = document.querySelector(".gameplay-page");
      const yourTable = gamePlayPage.querySelector(".your-table");
      const oppTable = gamePlayPage.querySelector(".opponent-table");
      gamePlayPage.appendChild(ship);
      // Place ships on the board coordinates correctly
      if (orient === "x") {
        const rowEnd = end[0];
        const colEnd = end[1];
        if (playerName === "player") {
          // Get head cell on which ship is placed
          const cellEnd = yourTable.rows[rowEnd].cells[colEnd];

          // console.log(cellEnd)
          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX = cellRect.right - gamePageRect.left - cellRect.width * length - 1.5;
          const cellPosY = cellRect.top - gamePageRect.top - 1.5;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          ship.style.left = `${cellPosX}rem`;
          ship.style.top = `${cellPosY}rem`;
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          const cellEnd = oppTable.rows[rowEnd].cells[colEnd];
          // console.log(cellEnd)
          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX = cellRect.right - gamePageRect.left - cellRect.width * length - 1.5;
          const cellPosY = cellRect.top - gamePageRect.top - 1.5;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          ship.style.left = `${cellPosX}rem`;
          ship.style.top = `${cellPosY}rem`;
          ship.style.border = "2rem solid green";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
      }
      if (orient === "y") {
        const rowEnd = end[0];
        const colEnd = end[1];
        if (playerName === "player") {
          // Get head cell on which ship is placed
          const cellEnd = yourTable.rows[rowEnd].cells[colEnd];
          // console.log(cellEnd);
          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX = cellRect.left - gamePageRect.left - 1.5;
          const cellPosY = cellRect.bottom - gamePageRect.top - cellRect.width * length - 1.5;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          ship.style.left = `${cellPosX}rem`;
          ship.style.top = `${cellPosY}rem`;
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          const cellEnd = oppTable.rows[rowEnd].cells[colEnd];
          // console.log(cellEnd);
          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX = cellRect.left - gamePageRect.left - 1.5;
          const cellPosY = cellRect.bottom - gamePageRect.top - cellRect.width * length - 1.5;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          ship.style.left = `${cellPosX}rem`;
          ship.style.top = `${cellPosY}rem`;
          ship.style.border = "2rem solid green";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
      }
    });
  }

  // eslint-disable-next-line consistent-return
  function placeShips(shipNames) {
    const shipPlacePage = document.querySelector(".ship-placement-page");
    const gamePlayPage = document.querySelector(".gameplay-page");

    if (shipNames.length === 0) {
      // All ships placed. Now do the next tasks
      shipPlacePage.classList.add("hide");
      gamePlayPage.classList.add("show");
      // Place ships on the board at game play page on player/ai defined positions
      autoPlaceShips("player", player.gameBoard.shipsCoord);
      autoPlaceShips("ai", ai.gameBoard.shipsCoord);
      return true;
    }
    const shipArr = shipNames.shift();
    const shortName = shipArr[0];
    const shipName = shipArr[1];
    const length = shipArr[2];

    const shipMessage = document.querySelector(".ship-name");
    shipMessage.innerHTML = "Place ".concat(shipName).concat(" on the board");
    let isPlaced = false;

    const ship = createShip(shortName, length, "x");

    shipPlacePage.appendChild(ship);

    function dragShip(e) {
      if (!isPlaced) {
        const shipPageRect = shipPlacePage.getBoundingClientRect();
        if (e.target.matches(".table-cell")) {
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          ship.style.border = "1rem dashed #5978f5";
          const currentCell = e.target;
          const cellRect = currentCell.getBoundingClientRect();
          ship.style.left = `calc(${cellRect.right}rem  - ${shipPageRect.left}rem - ${ship.clientWidth}rem - 1.5rem )`;
          ship.style.top = `calc(${cellRect.bottom}rem - ${shipPageRect.top}rem - ${ship.clientHeight}rem - 1rem)`;
        } else {
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
          ship.style.border = "none";
          ship.style.left = `${e.clientX - shipPageRect.left - ship.clientWidth}rem`;
          ship.style.top = `${e.clientY - shipPageRect.top - ship.clientHeight}rem`;
        }
      }
    }
    // Move ship along with the mouse
    shipPlacePage.addEventListener("mousemove", dragShip);

    // Change orientation of ship
    const rotateBtn = shipPlacePage.querySelector(".rotate-btn");
    rotateBtn.addEventListener("click", changeOrientation);

    function dropShip(e) {
      if (e.target.matches(".table-cell")) {
        const currentCell = e.target;
        const row = parseInt(currentCell.getAttribute("data-row"), 10);
        const col = parseInt(currentCell.getAttribute("data-col"), 10);
        // const shipLen = parseInt(ship.getAttribute("data-length"), 10);
        if (ship.getAttribute("data-orient") === "x") {
          if (player.gameBoard.isValidPos(row, col, length, "x")) {
            const shipRect = ship.getBoundingClientRect();
            const shipPageRect = shipPlacePage.getBoundingClientRect();
            const shipX = shipRect.left - shipPageRect.left;
            const shipY = shipRect.top - shipPageRect.top;
            ship.style.left = `${shipX}rem`;
            ship.style.top = `calc(${shipY}rem - 1rem)`;
            isPlaced = true;
            ship.classList.add("placed");
            ship.style.border = "2rem solid blue";
            ship.classList.remove("moving");
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            // Ship placed successfully. Now update the 2D board array
            player.gameBoard.updateBoard(row, col, shortName, length, "x");
            placeShips(shipNames.slice());
          }
        } else if (ship.getAttribute("data-orient") === "y") {
          if (player.gameBoard.isValidPos(row, col, length, "y")) {
            const shipRect = ship.getBoundingClientRect();
            const shipPageRect = shipPlacePage.getBoundingClientRect();
            const shipX = shipRect.left - shipPageRect.left;
            const shipY = shipRect.top - shipPageRect.top;

            ship.style.left = `${shipX}rem`;
            ship.style.top = `calc(${shipY}rem - 1rem)`;
            isPlaced = true;
            ship.classList.add("placed");
            ship.style.border = "2rem solid blue";
            ship.classList.remove("moving");
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            // Ship placed successfully. Now update the 2D board array
            player.gameBoard.updateBoard(row, col, shortName, length, "y");
            placeShips(shipNames.slice());
          }
        }
      }
    }
    // Place ship on the board on mouse click
    shipPlacePage.addEventListener("click", dropShip);
  }

  function hideInitPage() {
    const initPage = document.querySelector(".initial-page");
    initPage.classList.add("hide");
  }
  function hideShipPage() {
    const shipPage = document.querySelector(".ship-placement-page");
    shipPage.classList.add("hide");
  }
  return {
    resetTable,
    placeShips,
    hideInitPage,
    hideShipPage,
    autoPlaceShips,
  };
})();
