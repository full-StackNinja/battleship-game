export default class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  isSunk() {
    if (this.length === this.hitCount) {
      this.sunk = true;
    }
    return this.sunk;
  }

  resetShip() {
    this.hitCount = 0
    this.sunk = 0
  }

  hit() {
    this.hitCount += 1;
  }
}
