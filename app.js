/* eslint-disable import/extensions */
// Import modules into main app.js file
import domManipulation from "./dom.js";
import player from "./player.js";
import ai from "./ai.js";

// Define player
const human = player("Jack");
// Build empty game board for player1
human.buildBoard();

// Define AI
const AI = ai();
// Define ai player's empty gameBoard
AI.buildBoard();

const playBtn = document.querySelector(".game-start");

playBtn.addEventListener("click", () => {
  // Hide initial page when play button clicked
  domManipulation.hideInitPage();
  const shipNames = [
    ["Carrier", 4],
    ["Distroyer", 3],
    ["Distroyer", 3],
    ["Patrol Boat", 2],
    ["Patrol Boat", 2],
    ["Patrol Boat", 2],
    ["Singleton", 1],
    ["Singleton", 1],
    ["Singleton", 1],
    ["Singleton", 1],
  ];
  // shipNames.forEach((ship) => domManipulation.placeShip(ship));
  domManipulation.placeShip(shipNames)
});
