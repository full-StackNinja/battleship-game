import GameBoard from "./gameBoard";
import Ship from "./ship";
import player from "./player";

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
  newAI.gameBoard = new GameBoard();
  newAI.allSunk = () => {
    const shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    let allSunk = true;
    shipNames.forEach((ship) => {
      if (!newAI[ship].sunk) {
        allSunk = false;
      }
    });
    return allSunk;
  };

  newAI.resetShips = () => {
    const shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach((ship) => {
      newAI[ship].resetShip();
    });
  };
  newAI.isAttackValid = (position) => {
    const row = position[0];
    const col = position[1];
    const cellStatus = player.gameBoard.board[row][col];
    // console.log('ai attack status inside is', cellStatus, 'at position', position)
    if (cellStatus !== "hit" && cellStatus !== "miss") {
      return true;
    }
    return false;
  };
  newAI.getHitCoord = () => {
    const position = [];
    position[0] = Math.floor(Math.random() * 10);
    position[1] = Math.floor(Math.random() * 10);

    return position;
  };

  return newAI;
})();
