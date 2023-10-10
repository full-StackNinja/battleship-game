import GameBoard from "./gameBoard";
import Ship from "./ship";

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
  newPlayer.allSunk = () => {
    const shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    let sunk = true;
    shipNames.forEach((ship) => {
      if (!newPlayer[ship].sunk) {
        sunk = false;
      }
    });
    return sunk;
  };

  newPlayer.resetShips = () => {
    const shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach((ship) => {
      newPlayer[ship].resetShip();
    });
  };

  newPlayer.gameBoard = new GameBoard();
  return newPlayer;
})();
