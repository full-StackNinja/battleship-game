/* eslint-disable import/extensions */
import GameBoard from "./gameBoard.js";
import Ship from "./ship.js";

export default function ai() {
  const newAI = {};
  newAI.carrier = new Ship("carrier", 4);
  newAI.distroyer1 = new Ship("distroyer1", 3);
  newAI.distroyer2 = new Ship("distroyer2", 3);
  newAI.patrolBoat1 = new Ship("patrolBoat1", 2);
  newAI.patrolBoat2 = new Ship("patrolBoat2", 2);
  newAI.patrolBoat3 = new Ship("patrolBoat3", 2);
  newAI.singleton1 = new Ship("singleton1", 1);
  newAI.singleton2 = new Ship("singleton2", 1);
  newAI.singleton3 = new Ship("singleton3", 1);
  newAI.singleton4 = new Ship("singleton4", 1);
  Object.setPrototypeOf(newAI, new GameBoard());
  return newAI;
}
