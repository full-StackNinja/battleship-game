/* eslint-disable import/extensions */
import GameBoard from "./gameBoard.js";
import Ship from "./ship.js";

export default function player() {
  const newPlayer = {};
  newPlayer.carrier = new Ship("carrier", 4);
  newPlayer.distroyer1 = new Ship("distroyer1", 3);
  newPlayer.distroyer2 = new Ship("distroyer2", 3);
  newPlayer.patrolBoat1 = new Ship("patrolBoat1", 2);
  newPlayer.patrolBoat2 = new Ship("patrolBoat2", 2);
  newPlayer.patrolBoat3 = new Ship("patrolBoat3", 2);
  newPlayer.singleton1 = new Ship("singleton1", 1);
  newPlayer.singleton2 = new Ship("singleton2", 1);
  newPlayer.singleton3 = new Ship("singleton3", 1);
  newPlayer.singleton4 = new Ship("singleton4", 1);
  Object.setPrototypeOf(newPlayer, new GameBoard());
  return newPlayer;
}
