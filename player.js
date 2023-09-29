/* eslint-disable import/extensions */
import GameBoard from "./gameBoard.js";
import Ship from "./ship.js";

export default (function player() {
  const newPlayer = {};
  newPlayer.c1 = new Ship("c1", 4);
  newPlayer.d1 = new Ship("d1", 3);
  newPlayer.d2 = new Ship("d2", 3);
  newPlayer.p1 = new Ship("p1", 2);
  newPlayer.p2 = new Ship("p2", 2);
  newPlayer.p3 = new Ship("p3", 2);
  newPlayer.s1 = new Ship("s1", 1);
  newPlayer.s2 = new Ship("s2", 1);
  newPlayer.s3 = new Ship("s3", 1);
  newPlayer.s4 = new Ship("s4", 1);
  // Object.setPrototypeOf(newPlayer, new GameBoard());
  newPlayer.gameBoard = new GameBoard()
  return newPlayer;
})();
