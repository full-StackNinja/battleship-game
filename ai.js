/* eslint-disable import/extensions */
import GameBoard from "./gameBoard.js";
import Ship from "./ship.js";

export default (function ai() {
  const newAI = {};
  newAI.c1 = new Ship("carrier", 4);
  newAI.d1 = new Ship("distroyer1", 3);
  newAI.d2 = new Ship("distroyer2", 3);
  newAI.p1 = new Ship("patrolBoat1", 2);
  newAI.p2 = new Ship("patrolBoat2", 2);
  newAI.p3 = new Ship("patrolBoat3", 2);
  newAI.s1 = new Ship("singleton1", 1);
  newAI.s2 = new Ship("singleton2", 1);
  newAI.s3 = new Ship("singleton3", 1);
  newAI.s4 = new Ship("singleton4", 1);
  // Object.setPrototypeOf(newAI, new GameBoard());
  newAI.gameBoard = new GameBoard();
  return newAI;
})();
