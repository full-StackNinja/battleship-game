export default class Ship {
  constructor(name, length, hitCount, sunk) {
    this.name = name;
    this.length = length;
    this.hitCount = hitCount;
    this.sunk = sunk;
  }

  isSunk() {
    if (this.length === this.hitCount) {
      this.sunk = true;
    }
    return this.sunk;
  }

  hit() {
    this.hitCount += 1;
  }
}
