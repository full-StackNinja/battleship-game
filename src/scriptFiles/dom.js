import player from "./player";
import ai from "./ai";

export default (function domManipulation() {
  function resetTables() {
    const yourTable = document.querySelector(".your-table-gameplay-page");
    const oppTable = document.querySelector(".opponent-table");
    const setShipTable = document.querySelector(".set-ships");
    const yourCells = yourTable.querySelectorAll(".table-cell");
    const oppCells = oppTable.querySelectorAll(".table-cell");
    const setShipCells = setShipTable.querySelectorAll(".table-cell");

    yourCells.forEach((cell) => {
      const modifiedCell = cell;
      // set Value to empty
      modifiedCell.setAttribute("data-value", "empty");
      // Reset background color
      modifiedCell.style.backgroundColor = "#fff";
    });

    oppCells.forEach((cell) => {
      const modifiedCell = cell;
      // set Value to empty
      modifiedCell.setAttribute("data-value", "empty");
      // Reset background color
      modifiedCell.style.backgroundColor = "#fff";
    });

    setShipCells.forEach((cell) => {
      const modifiedCell = cell;
      // set Value to empty
      modifiedCell.setAttribute("data-value", "empty");
      // Reset background color
      modifiedCell.style.backgroundColor = "#abb8b7";
    });
  }
  // Remove ship children from shipPlace page and gamePlay page
  function removeShips() {
    const gamePage = document.querySelector(".gameplay-page");
    const shipPage = document.querySelector(".ship-placement-page");
    const shipsOnShipPage = shipPage.querySelectorAll(".ship");
    const shipsOnGamePage = gamePage.querySelectorAll(".ship");
    shipsOnShipPage.forEach((ship) => {
      shipPage.removeChild(ship);
    });
    shipsOnGamePage.forEach((ship) => {
      gamePage.removeChild(ship);
    });
  }

  function createShip(shipOwner, shortName, length, orient) {
    const ship = document.createElement("div");
    ship.style.position = "absolute";
    ship.style.top = "0";
    ship.style.left = "0";
    ship.setAttribute("data-length", `${length}`);
    ship.setAttribute("data-shipname", shortName);
    ship.setAttribute("data-ship-owner", shipOwner);
    if (orient === "x") {
      ship.style.width = `${2 * length}vw`;
      ship.style.height = "2vw";
      ship.setAttribute("data-width", `${2 * length}vw`);
      ship.setAttribute("data-height", "2vw");
      ship.setAttribute("data-orient", "x");
    }
    if (orient === "y") {
      ship.style.width = "2vw";
      ship.style.height = `${2 * length}vw`;
      ship.setAttribute("data-width", "2vw");
      ship.setAttribute("data-height", `${2 * length}vw`);
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

  // Update cell value
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

  function hideShip(ship) {
    const hiddenShip = ship;
    hiddenShip.style.border = "none";
  }

  // Place ships on the player/ai board on game-play-page
  function autoPlaceShips(playerName, shipsCoord) {
    const shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach((shipName) => {
      const shipData = shipsCoord[shipName];

      const { end, orient, length } = shipData;
      const ship = createShip(playerName, shipName, length, orient);
      if (playerName === "ai") {
        // Hide ship on the ai table
        hideShip(ship);
      }
      // Also update table cell's data-value with shipName
      updateCellVal(playerName, shipName, end, length, orient);

      // Call gameplay page
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

          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX =
            ((cellRect.right - gamePageRect.left - cellRect.width * length - 1.5) /
              window.innerWidth) *
            100;
          const cellPosY = ((cellRect.top - gamePageRect.top - 1.5) / window.innerHeight) * 100;
          ship.style.left = `${cellPosX}vw`;
          ship.style.top = `${cellPosY}vh`;
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          const cellEnd = oppTable.rows[rowEnd].cells[colEnd];

          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX =
            ((cellRect.right - gamePageRect.left - cellRect.width * length - 1.5) /
              window.innerWidth) *
            100;
          const cellPosY = ((cellRect.top - gamePageRect.top - 1.5) / window.innerWidth) * 100;

          ship.style.left = `${cellPosX}vw`;
          ship.style.top = `${cellPosY}vh`;
        }
      }
      if (orient === "y") {
        const rowEnd = end[0];
        const colEnd = end[1];
        if (playerName === "player") {
          // Get head cell on which ship is placed
          const cellEnd = yourTable.rows[rowEnd].cells[colEnd];

          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX = ((cellRect.left - gamePageRect.left - 1.5) / window.innerWidth) * 100;
          const cellPosY =
            ((cellRect.bottom - gamePageRect.top - cellRect.width * length - 1.5) /
              window.innerWidth) *
            100;

          ship.style.left = `${cellPosX}vw`;
          ship.style.top = `${cellPosY}vw`;
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          const cellEnd = oppTable.rows[rowEnd].cells[colEnd];

          const cellRect = cellEnd.getBoundingClientRect();
          const gamePageRect = gamePlayPage.getBoundingClientRect();
          const cellPosX = cellRect.left - gamePageRect.left - 1.5;
          const cellPosY = cellRect.bottom - gamePageRect.top - cellRect.width * length - 1.5;

          ship.style.left = `${cellPosX}rem`;
          ship.style.top = `${cellPosY}rem`;
        }
      }
    });
  }

  function placeShips(shipNames, callBack) {
    const shipPlacePage = document.querySelector(".ship-placement-page");
    const gamePlayPage = document.querySelector(".gameplay-page");

    if (shipNames.length === 0) {
      // All ships placed. Now do the next tasks
      shipPlacePage.classList.remove("show");
      gamePlayPage.classList.add("show");
      // Call back function which is basically a gameLoop function
      callBack();
      // Place ships on the board at game play page on player/ai defined positions

      autoPlaceShips("player", player.gameBoard.shipsCoord);
      autoPlaceShips("ai", ai.gameBoard.shipsCoord);
      return;
    }
    const shipArr = shipNames.shift();
    const shortName = shipArr[0];
    const shipName = shipArr[1];
    const length = shipArr[2];

    const shipMessage = document.querySelector(".ship-name");
    shipMessage.innerHTML = "Place ".concat(shipName).concat(" on the board");
    let isPlaced = false;

    const ship = createShip("player", shortName, length, "x");

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
            // Remove event listener once ship is placed
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            // Ship placed successfully. Now update the 2D board array
            player.gameBoard.updateBoard(row, col, shortName, length, "x");
            placeShips(shipNames.slice(), callBack);
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
            // Remove event listener once ship is placed
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            // Ship placed successfully. Now update the 2D board array
            player.gameBoard.updateBoard(row, col, shortName, length, "y");
            placeShips(shipNames.slice(), callBack);
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
    shipPage.classList.remove("show");
  }

  function showShipPage() {
    const shipPage = document.querySelector(".ship-placement-page");
    shipPage.classList.add("show");
  }

  function showGamePage() {
    const gamePage = document.querySelector(".gameplay-page");
    gamePage.classList.add("show");
  }

  function hideGamePage() {
    const gamePage = document.querySelector(".gameplay-page");
    gamePage.classList.remove("show");
  }

  function hideModalContainer() {
    const modalContainer = document.querySelector(".gameover-container");
    modalContainer.classList.remove("show");
  }

  function turnMessage(turn) {
    const message = document.querySelector(".turn-message");
    if (turn === "player") message.textContent = "Your Turn";
    else message.textContent = "AI's turn";
  }
  // Update cell hit status in DOM
  function updateCellHit(cell, hitStatus) {
    const targetCell = cell;
    if (hitStatus === "empty") {
      targetCell.setAttribute("data-value", "miss");
      targetCell.style.backgroundColor = "#bfdbfe";
    } else if (hitStatus !== "hit" && hitStatus !== "miss") {
      targetCell.setAttribute("data-value", "hit");
      targetCell.style.backgroundColor = "red";
    }
  }

  // Change color of the sunk ship on the DOM

  function shipSunk(shipOwner, shipName) {
    const gamePage = document.querySelector(".gameplay-page");
    // Find all ships on game page
    const shipsNodeList = gamePage.querySelectorAll(".ship");
    const shipsArr = Array.from(shipsNodeList);
    let sunkShip;
    shipsArr.forEach((ship) => {
      const name = ship.getAttribute("data-shipname");
      const owner = ship.getAttribute("data-ship-owner");
      if (name === shipName && owner === shipOwner) sunkShip = ship;
    });
    console.log(sunkShip);
    sunkShip.style.border = "4rem solid red";
    sunkShip.style.backgroundColor = "#450a0a";
  }

  return {
    resetTables,
    placeShips,
    removeShips,
    hideInitPage,
    hideShipPage,
    showShipPage,
    showGamePage,
    hideGamePage,
    hideModalContainer,
    autoPlaceShips,
    turnMessage,
    updateCellHit,
    shipSunk,
  };
})();
