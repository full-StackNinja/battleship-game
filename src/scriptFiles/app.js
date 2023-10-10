import "../styleSheets/meyer-reset.css";
import "../styleSheets/my-css-reset.css";
import "../styleSheets/normalize.css";
import "../styleSheets/typography.css";
import "../styleSheets/styles.css";
import randomIcon from "../assets/icons/random.svg";

// Import modules into main app.js file
import domManipulation from "./dom";
import player from "./player";
import ai from "./ai";

// Create and append ship rotate image icon to the rotate Btn
const randImg = new Image();
randImg.src = randomIcon;
randImg.classList.add("random-icon");
randImg.alt = "Random Icon";
const rotateBtn = document.querySelector(".rotate-btn");
rotateBtn.appendChild(randImg);

// Build empty game board for player1
player.gameBoard.buildBoard();

// Define ai's empty gameBoard
ai.gameBoard.buildBoard();

function resetGame() {
  // Reset both game boards
  player.gameBoard.resetBoard();
  ai.gameBoard.resetBoard();
  // Reset display tables for both players
  domManipulation.resetTables();
  // Reset player's/ai's ships status
  player.resetShips();
  ai.resetShips();
  // Remove ships from tables
  domManipulation.removeShips();
  // Now hide game page
  domManipulation.hideGamePage();
  // Show ship placement page
  domManipulation.showShipPage();
  // Now hide modal container
  domManipulation.hideModalContainer();
  // Now manage ships placement
  manageShipsPlacement();
}

// Declare game Over
function gameOver(playerName) {
  const gameOverCont = document.querySelector(".gameover-container");
  const modalMsg = gameOverCont.querySelector(".modal-msg");
  gameOverCont.classList.add("show");

  if (playerName === "ai") {
    modalMsg.textContent = "You Win!";
  } else if (playerName === "player") {
    modalMsg.textContent = "You Lose!";
  }

  // Access play again button
  const playAgainBtn = document.querySelector(".play-again");

  playAgainBtn.addEventListener("click", resetGame);
}

function isGameOver(playerName) {
  let isSunk;
  if (playerName === "ai") {
    isSunk = ai.allSunk();
  } else if (playerName === "player") {
    isSunk = player.allSunk();
  }
  return isSunk;
}

function gameLoop() {
  const gamePage = document.querySelector(".gameplay-page");
  const oppTable = gamePage.querySelector(".opponent-table");
  const yourTable = gamePage.querySelector(".your-table");

  function initTurn() {
    const players = ["player", "ai"];
    const index = Math.floor(Math.random() * 2);
    return players[index];
  }

  function disableOppTable() {
    const cells = oppTable.querySelectorAll(".table-cell");
    oppTable.style.opacity = "0.5";
    cells.forEach((cell) => {
      const cellCopy = cell;
      cellCopy.style.pointerEvents = "none";
    });
  }

  function enableOppTable() {
    const cells = oppTable.querySelectorAll(".table-cell");
    oppTable.style.opacity = "0.5";
    cells.forEach((cell) => {
      const cellCopy = cell;
      cellCopy.style.pointerEvents = "all";
    });
  }

  // Set initial turn
  let turn = initTurn();

  function toggleTurn() {
    if (turn === "ai") turn = "player";
    else turn = "ai";
  }

  function updateShipStatus(playerName, shipName) {
    if (playerName === "ai") {
      // Update current ship hit count
      ai[shipName].hit();
      // check if ship sunk
      ai[shipName].isSunk();
    }
    if (playerName === "player") {
      // Update current ship hit count
      player[shipName].hit();
      // check if ship sunk
      player[shipName].isSunk();
    }
  }

  // play ai turn
  function aiTurn() {
    let position = ai.getHitCoord();
    while (!ai.isAttackValid(position)) {
      position = ai.getHitCoord();
    }

    // Got valid position which is either ship position or empty cell
    const cellStatus = player.gameBoard.receiveAttack(position);

    if (cellStatus !== "empty") {
      // attack is on the ship
      const shipName = cellStatus;
      // Update ship hit status
      updateShipStatus("player", shipName);
      const isSunk = player[shipName].isSunk();
      if (isSunk) {
        domManipulation.shipSunk("player", shipName);
      }
      const lose = isGameOver("player");
      if (lose) gameOver("player");
    }
    const targetCell = yourTable.rows[position[0]].cells[position[1]];
    // Update cell status miss, hit etc in the DOM
    domManipulation.updateCellHit(targetCell, cellStatus);
    // Finally enable opponent's table
    enableOppTable();
    // Toggle turn
    toggleTurn();
    // Then display the message
    domManipulation.turnMessage(turn);
  }

  // Play first turn
  domManipulation.turnMessage(turn);
  if (turn === "ai") {
    // If first turn is of ai then
    setTimeout(() => {
      aiTurn();
    }, 1);
  }

  function playerTurn(e) {
    if (e.target.matches(".table-cell")) {
      const targetCell = e.target;
      const position = [];
      position[0] = Number(targetCell.getAttribute("data-row"));
      position[1] = Number(targetCell.getAttribute("data-col"));
      const cellStatus = ai.gameBoard.receiveAttack(position);

      // Update cell in the DOM
      domManipulation.updateCellHit(targetCell, cellStatus);

      // Check if ship got hit
      if (cellStatus !== "miss" && cellStatus !== "hit" && cellStatus !== "empty") {
        // Ship found
        const shipName = cellStatus;

        updateShipStatus("ai", shipName);
        // Check if ship got sunk
        const isSunk = ai[shipName].isSunk();
        if (isSunk) {
          domManipulation.shipSunk("ai", shipName);
        }
      }

      // Change turn if shot got hit or miss
      if ((cellStatus !== "miss" && cellStatus !== "hit") || cellStatus === "empty") {
        // Check whether game is over or not
        const lose = isGameOver("ai");
        if (lose) {
          gameOver("ai");
        } else {
          // Toggle turn
          toggleTurn();
          // Display turn message
          domManipulation.turnMessage(turn);
          // Disable opponent table during ai's turn
          disableOppTable();
          // Call ai's turn
          setTimeout(aiTurn, 1);
        }
      }
    }
  }

  // Listen player's click on opponent's table
  oppTable.addEventListener("click", playerTurn);
}

const playBtn = document.querySelector(".game-start");

// Define ships names
const shipNames = [
  ["c1", "Carrier", 4],
  ["d1", "Distroyer", 3],
  ["d2", "Distroyer", 3],
  ["p1", "Patrol Boat", 2],
  ["p2", "Patrol Boat", 2],
  ["p3", "Patrol Boat", 2],
  ["s1", "Singleton", 1],
  ["s2", "Singleton", 1],
  ["s3", "Singleton", 1],
  ["s4", "Singleton", 1],
];

function manageShipsPlacement() {
  // Hide initial page when play button clicked
  domManipulation.hideInitPage();
  // Show ship placement page
  domManipulation.showShipPage();

  // Auto fill ai board 2D array with ships
  ai.gameBoard.autoFillShipsBoard(shipNames.slice());
  // Let player place ships on the board
  domManipulation.placeShips(shipNames.slice(), gameLoop);
}

domManipulation.hideGamePage();
playBtn.addEventListener("click", manageShipsPlacement);
