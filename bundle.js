/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scriptFiles/ai.js":
/*!*******************************!*\
  !*** ./src/scriptFiles/ai.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/scriptFiles/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/scriptFiles/ship.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player */ "./src/scriptFiles/player.js");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function ai() {
  var newAI = {};
  newAI.c1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("carrier", 4);
  newAI.d1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("distroyer1", 3);
  newAI.d2 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("distroyer2", 3);
  newAI.p1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("patrolBoat1", 2);
  newAI.p2 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("patrolBoat2", 2);
  newAI.p3 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("patrolBoat3", 2);
  newAI.s1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("singleton1", 1);
  newAI.s2 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("singleton2", 1);
  newAI.s3 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("singleton3", 1);
  newAI.s4 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("singleton4", 1);
  newAI.gameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  newAI.allSunk = function () {
    var shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    var allSunk = true;
    shipNames.forEach(function (ship) {
      if (!newAI[ship].sunk) {
        allSunk = false;
      }
    });
    return allSunk;
  };
  newAI.resetShips = function () {
    var shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach(function (ship) {
      newAI[ship].resetShip();
    });
  };
  newAI.isAttackValid = function (position) {
    var row = position[0];
    var col = position[1];
    var cellStatus = _player__WEBPACK_IMPORTED_MODULE_2__["default"].gameBoard.board[row][col];
    // console.log('ai attack status inside is', cellStatus, 'at position', position)
    if (cellStatus !== "hit" && cellStatus !== "miss") {
      return true;
    }
    return false;
  };
  newAI.getHitCoord = function () {
    var position = [];
    position[0] = Math.floor(Math.random() * 10);
    position[1] = Math.floor(Math.random() * 10);
    return position;
  };
  return newAI;
})());

/***/ }),

/***/ "./src/scriptFiles/dom.js":
/*!********************************!*\
  !*** ./src/scriptFiles/dom.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/scriptFiles/player.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ai */ "./src/scriptFiles/ai.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function domManipulation() {
  function resetTables() {
    var yourTable = document.querySelector(".your-table-gameplay-page");
    var oppTable = document.querySelector(".opponent-table");
    var setShipTable = document.querySelector(".set-ships");
    var yourCells = yourTable.querySelectorAll(".table-cell");
    var oppCells = oppTable.querySelectorAll(".table-cell");
    var setShipCells = setShipTable.querySelectorAll(".table-cell");
    yourCells.forEach(function (cell) {
      var modifiedCell = cell;
      // set Value to empty
      modifiedCell.setAttribute("data-value", "empty");
      // Reset background color
      modifiedCell.style.backgroundColor = "#fff";
    });
    oppCells.forEach(function (cell) {
      var modifiedCell = cell;
      // set Value to empty
      modifiedCell.setAttribute("data-value", "empty");
      // Reset background color
      modifiedCell.style.backgroundColor = "#fff";
    });
    setShipCells.forEach(function (cell) {
      var modifiedCell = cell;
      // set Value to empty
      modifiedCell.setAttribute("data-value", "empty");
      // Reset background color
      modifiedCell.style.backgroundColor = "#abb8b7";
    });
  }
  // Remove ship children from shipPlace page and gamePlay page
  function removeShips() {
    var gamePage = document.querySelector(".gameplay-page");
    var shipPage = document.querySelector(".ship-placement-page");
    var shipsOnShipPage = shipPage.querySelectorAll(".ship");
    var shipsOnGamePage = gamePage.querySelectorAll(".ship");
    shipsOnShipPage.forEach(function (ship) {
      shipPage.removeChild(ship);
    });
    shipsOnGamePage.forEach(function (ship) {
      gamePage.removeChild(ship);
    });
  }
  function createShip(shipOwner, shortName, length, orient) {
    var ship = document.createElement("div");
    ship.style.position = "absolute";
    ship.style.top = "0";
    ship.style.left = "0";
    ship.setAttribute("data-length", "".concat(length));
    ship.setAttribute("data-shipname", shortName);
    ship.setAttribute("data-ship-owner", shipOwner);
    if (orient === "x") {
      ship.style.width = "".concat(2 * length, "vw");
      ship.style.height = "2vw";
      ship.setAttribute("data-width", "".concat(2 * length, "vw"));
      ship.setAttribute("data-height", "2vw");
      ship.setAttribute("data-orient", "x");
    }
    if (orient === "y") {
      ship.style.width = "2vw";
      ship.style.height = "".concat(2 * length, "vw");
      ship.setAttribute("data-width", "2vw");
      ship.setAttribute("data-height", "".concat(2 * length, "vw"));
      ship.setAttribute("data-orient", "y");
    }
    ship.classList.add("moving");
    ship.classList.add(shortName);
    ship.classList.add("ship");
    return ship;
  }
  function changeOrientation() {
    var shipPlacePage = document.querySelector(".ship-placement-page");
    var currentShip = shipPlacePage.querySelector(".moving");
    if (currentShip.getAttribute("data-orient") === "x") {
      currentShip.setAttribute("data-orient", "y");
      var width = currentShip.getAttribute("data-width");
      var height = currentShip.getAttribute("data-height");
      currentShip.style.width = height;
      currentShip.style.height = width;
      currentShip.setAttribute("data-height", width);
      currentShip.setAttribute("data-width", height);
    } else if (currentShip.getAttribute("data-orient") === "y") {
      currentShip.setAttribute("data-orient", "x");
      var _width = currentShip.getAttribute("data-width");
      var _height = currentShip.getAttribute("data-height");
      currentShip.style.width = _height;
      currentShip.style.height = _width;
      currentShip.setAttribute("data-height", _width);
      currentShip.setAttribute("data-width", _height);
    }
  }

  // Update cell value
  function updateCellVal(playerName, shipName, shipEnd, length, orient) {
    var gamePage = document.querySelector(".gameplay-page");
    var row = shipEnd[0];
    var column = shipEnd[1];
    if (playerName === "player") {
      var yourTable = gamePage.querySelector(".your-table");
      if (orient === "x") {
        for (var i = 0; i < length; i += 1) {
          yourTable.rows[row].cells[column - i].setAttribute("data-value", shipName);
        }
      } else if (orient === "y") {
        for (var _i = 0; _i < length; _i += 1) {
          yourTable.rows[row - _i].cells[column].setAttribute("data-value", shipName);
        }
      }
    } else if (playerName === "ai") {
      var oppTable = gamePage.querySelector(".opponent-table");
      if (orient === "x") {
        for (var _i2 = 0; _i2 < length; _i2 += 1) {
          oppTable.rows[row].cells[column - _i2].setAttribute("data-value", shipName);
        }
      } else if (orient === "y") {
        for (var _i3 = 0; _i3 < length; _i3 += 1) {
          oppTable.rows[row - _i3].cells[column].setAttribute("data-value", shipName);
        }
      }
    }
  }
  function hideShip(ship) {
    var hiddenShip = ship;
    hiddenShip.style.border = "none";
  }

  // Place ships on the player/ai board on game-play-page
  function autoPlaceShips(playerName, shipsCoord) {
    var shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach(function (shipName) {
      var shipData = shipsCoord[shipName];
      var end = shipData.end,
        orient = shipData.orient,
        length = shipData.length;
      var ship = createShip(playerName, shipName, length, orient);
      if (playerName === "ai") {
        // Hide ship on the ai table
        hideShip(ship);
      }
      // Also update table cell's data-value with shipName
      updateCellVal(playerName, shipName, end, length, orient);

      // Call gameplay page
      var gamePlayPage = document.querySelector(".gameplay-page");
      var yourTable = gamePlayPage.querySelector(".your-table");
      var oppTable = gamePlayPage.querySelector(".opponent-table");
      gamePlayPage.appendChild(ship);
      // Place ships on the board coordinates correctly
      if (orient === "x") {
        var rowEnd = end[0];
        var colEnd = end[1];
        if (playerName === "player") {
          // Get head cell on which ship is placed
          var cellEnd = yourTable.rows[rowEnd].cells[colEnd];
          var cellRect = cellEnd.getBoundingClientRect();
          var gamePageRect = gamePlayPage.getBoundingClientRect();
          var cellPosX = (cellRect.right - gamePageRect.left - cellRect.width * length - 1.5) / window.innerWidth * 100;
          var cellPosY = (cellRect.top - gamePageRect.top - 1.5) / window.innerHeight * 100;
          ship.style.left = "".concat(cellPosX, "vw");
          ship.style.top = "".concat(cellPosY, "vh");
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          var _cellEnd = oppTable.rows[rowEnd].cells[colEnd];
          var _cellRect = _cellEnd.getBoundingClientRect();
          var _gamePageRect = gamePlayPage.getBoundingClientRect();
          var _cellPosX = (_cellRect.right - _gamePageRect.left - _cellRect.width * length - 1.5) / window.innerWidth * 100;
          var _cellPosY = (_cellRect.top - _gamePageRect.top - 1.5) / window.innerHeight * 100;
          ship.style.left = "".concat(_cellPosX, "vw");
          ship.style.top = "".concat(_cellPosY, "vh");
        }
      }
      if (orient === "y") {
        var _rowEnd = end[0];
        var _colEnd = end[1];
        if (playerName === "player") {
          // Get head cell on which ship is placed
          var _cellEnd2 = yourTable.rows[_rowEnd].cells[_colEnd];
          var _cellRect2 = _cellEnd2.getBoundingClientRect();
          var _gamePageRect2 = gamePlayPage.getBoundingClientRect();
          var _cellPosX2 = (_cellRect2.left - _gamePageRect2.left - 1.5) / window.innerWidth * 100;
          var _cellPosY2 = (_cellRect2.bottom - _gamePageRect2.top - _cellRect2.width * length - 1.5) / window.innerHeight * 100;
          ship.style.left = "".concat(_cellPosX2, "vw");
          ship.style.top = "".concat(_cellPosY2, "vh");
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          var _cellEnd3 = oppTable.rows[_rowEnd].cells[_colEnd];
          var _cellRect3 = _cellEnd3.getBoundingClientRect();
          var _gamePageRect3 = gamePlayPage.getBoundingClientRect();
          var _cellPosX3 = _cellRect3.left - _gamePageRect3.left - 1.5;
          var _cellPosY3 = _cellRect3.bottom - _gamePageRect3.top - _cellRect3.width * length - 1.5;
          ship.style.left = "".concat(_cellPosX3, "rem");
          ship.style.top = "".concat(_cellPosY3, "rem");
        }
      }
    });
  }
  function placeShips(shipNames, callBack) {
    var shipPlacePage = document.querySelector(".ship-placement-page");
    var gamePlayPage = document.querySelector(".gameplay-page");
    if (shipNames.length === 0) {
      // All ships placed. Now do the next tasks
      shipPlacePage.classList.remove("show");
      gamePlayPage.classList.add("show");
      // Call back function which is basically a gameLoop function
      callBack();
      // Place ships on the board at game play page on player/ai defined positions

      autoPlaceShips("player", _player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.shipsCoord);
      autoPlaceShips("ai", _ai__WEBPACK_IMPORTED_MODULE_1__["default"].gameBoard.shipsCoord);
      return;
    }
    var shipArr = shipNames.shift();
    var shortName = shipArr[0];
    var shipName = shipArr[1];
    var length = shipArr[2];
    var shipMessage = document.querySelector(".ship-name");
    shipMessage.innerHTML = "Place ".concat(shipName).concat(" on the board");
    var isPlaced = false;
    var ship = createShip("player", shortName, length, "x");
    shipPlacePage.appendChild(ship);
    function dragShip(e) {
      if (!isPlaced) {
        var shipPageRect = shipPlacePage.getBoundingClientRect();
        if (e.target.matches(".table-cell")) {
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          ship.style.border = "1rem dashed #5978f5";
          var currentCell = e.target;
          var cellRect = currentCell.getBoundingClientRect();
          ship.style.left = "calc(".concat(cellRect.right, "rem  - ").concat(shipPageRect.left, "rem - ").concat(ship.clientWidth, "rem - 1.5rem )");
          ship.style.top = "calc(".concat(cellRect.bottom, "rem - ").concat(shipPageRect.top, "rem - ").concat(ship.clientHeight, "rem - 1rem)");
        } else {
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.0)";
          ship.style.border = "none";
          ship.style.left = "".concat(e.clientX - shipPageRect.left - ship.clientWidth, "rem");
          ship.style.top = "".concat(e.clientY - shipPageRect.top - ship.clientHeight, "rem");
        }
      }
    }
    // Move ship along with the mouse
    shipPlacePage.addEventListener("mousemove", dragShip);

    // Change orientation of ship
    var rotateBtn = shipPlacePage.querySelector(".rotate-btn");
    rotateBtn.addEventListener("click", changeOrientation);
    function dropShip(e) {
      if (e.target.matches(".table-cell")) {
        var currentCell = e.target;
        var row = parseInt(currentCell.getAttribute("data-row"), 10);
        var col = parseInt(currentCell.getAttribute("data-col"), 10);
        if (ship.getAttribute("data-orient") === "x") {
          if (_player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.isValidPos(row, col, length, "x")) {
            var shipRect = ship.getBoundingClientRect();
            var shipPageRect = shipPlacePage.getBoundingClientRect();
            var shipX = shipRect.left - shipPageRect.left;
            var shipY = shipRect.top - shipPageRect.top;
            ship.style.left = "".concat(shipX, "rem");
            ship.style.top = "calc(".concat(shipY, "rem - 1rem)");
            isPlaced = true;
            ship.classList.add("placed");
            ship.style.border = "2rem solid blue";
            ship.classList.remove("moving");
            // Remove event listener once ship is placed
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            // Ship placed successfully. Now update the 2D board array
            _player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.updateBoard(row, col, shortName, length, "x");
            placeShips(shipNames.slice(), callBack);
          }
        } else if (ship.getAttribute("data-orient") === "y") {
          if (_player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.isValidPos(row, col, length, "y")) {
            var _shipRect = ship.getBoundingClientRect();
            var _shipPageRect = shipPlacePage.getBoundingClientRect();
            var _shipX = _shipRect.left - _shipPageRect.left;
            var _shipY = _shipRect.top - _shipPageRect.top;
            ship.style.left = "".concat(_shipX, "rem");
            ship.style.top = "calc(".concat(_shipY, "rem - 1rem)");
            isPlaced = true;
            ship.classList.add("placed");
            ship.style.border = "2rem solid blue";
            ship.classList.remove("moving");
            // Remove event listener once ship is placed
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            // Ship placed successfully. Now update the 2D board array
            _player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.updateBoard(row, col, shortName, length, "y");
            placeShips(shipNames.slice(), callBack);
          }
        }
      }
    }
    // Place ship on the board on mouse click
    shipPlacePage.addEventListener("click", dropShip);
  }
  function hideInitPage() {
    var initPage = document.querySelector(".initial-page");
    initPage.classList.add("hide");
  }
  function hideShipPage() {
    var shipPage = document.querySelector(".ship-placement-page");
    shipPage.classList.remove("show");
  }
  function showShipPage() {
    var shipPage = document.querySelector(".ship-placement-page");
    shipPage.classList.add("show");
  }
  function showGamePage() {
    var gamePage = document.querySelector(".gameplay-page");
    gamePage.classList.add("show");
  }
  function hideGamePage() {
    var gamePage = document.querySelector(".gameplay-page");
    gamePage.classList.remove("show");
  }
  function hideModalContainer() {
    var modalContainer = document.querySelector(".gameover-container");
    modalContainer.classList.remove("show");
  }
  function turnMessage(turn) {
    var message = document.querySelector(".turn-message");
    if (turn === "player") message.textContent = "Your Turn";else message.textContent = "AI's turn";
  }
  // Update cell hit status in DOM
  function updateCellHit(cell, hitStatus) {
    var targetCell = cell;
    if (hitStatus === "empty") {
      targetCell.setAttribute("data-value", "miss");
      targetCell.style.backgroundColor = "#bfdbfe";
    } else if (hitStatus !== "hit" && hitStatus !== "miss") {
      targetCell.setAttribute("data-value", "hit");
      targetCell.style.backgroundColor = "red";
    }
  }

  // Change color of the sunk ship on the DOM

  function shipSunk(shipOwner, shipName) {
    var gamePage = document.querySelector(".gameplay-page");
    // Find all ships on game page
    var shipsNodeList = gamePage.querySelectorAll(".ship");
    var shipsArr = Array.from(shipsNodeList);
    var sunkShip;
    shipsArr.forEach(function (ship) {
      var name = ship.getAttribute("data-shipname");
      var owner = ship.getAttribute("data-ship-owner");
      if (name === shipName && owner === shipOwner) sunkShip = ship;
    });
    console.log(sunkShip);
    sunkShip.style.border = "4rem solid red";
    sunkShip.style.backgroundColor = "#450a0a";
  }
  return {
    resetTables: resetTables,
    placeShips: placeShips,
    removeShips: removeShips,
    hideInitPage: hideInitPage,
    hideShipPage: hideShipPage,
    showShipPage: showShipPage,
    showGamePage: showGamePage,
    hideGamePage: hideGamePage,
    hideModalContainer: hideModalContainer,
    autoPlaceShips: autoPlaceShips,
    turnMessage: turnMessage,
    updateCellHit: updateCellHit,
    shipSunk: shipSunk
  };
})());

/***/ }),

/***/ "./src/scriptFiles/gameBoard.js":
/*!**************************************!*\
  !*** ./src/scriptFiles/gameBoard.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GameBoard)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classPrivateMethodInitSpec(obj, privateSet) { _checkPrivateRedeclaration(obj, privateSet); privateSet.add(obj); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }
var _getStartIndex = /*#__PURE__*/new WeakSet();
var _placeSingleShip = /*#__PURE__*/new WeakSet();
var GameBoard = /*#__PURE__*/function () {
  function GameBoard() {
    _classCallCheck(this, GameBoard);
    _classPrivateMethodInitSpec(this, _placeSingleShip);
    _classPrivateMethodInitSpec(this, _getStartIndex);
    this.allSunk = false;
    this.board = [];
    this.shipsCoord = {};
  }
  _createClass(GameBoard, [{
    key: "buildBoard",
    value: function buildBoard() {
      for (var r = 0; r < 10; r += 1) {
        var row = [];
        for (var c = 0; c < 10; c += 1) {
          row.push("empty");
        }
        this.board.push(row);
      }
    }
  }, {
    key: "resetBoard",
    value: function resetBoard() {
      // First  reset board and then build it with empty cells
      this.board = [];
      this.buildBoard();
    }
  }, {
    key: "isValidPos",
    value: function isValidPos(row, col, length, orient) {
      if (orient === "x" && col + 1 - length >= 0) {
        var boardRow = this.board[row];
        for (var i = col; i > col - length; i -= 1) {
          if (boardRow[i] !== "empty") return false;
        }
        return true;
      }
      if (orient === "y" && row + 1 - length >= 0) {
        for (var _i = row; _i > row - length; _i -= 1) {
          if (this.board[_i][col] !== "empty") return false;
        }
        return true;
      }
      return false;
    }
  }, {
    key: "updateBoard",
    value: function updateBoard(row, col, shipName, length, orient) {
      if (orient === "x") {
        var boardRow = this.board[row];
        for (var i = col; i > col - length; i -= 1) {
          boardRow[i] = shipName;
        }
      }
      if (orient === "y") {
        for (var _i2 = row; _i2 > row - length; _i2 -= 1) {
          this.board[_i2][col] = shipName;
        }
      }
      // Save this ship's coordinates
      this.updateShipsCoord(row, col, shipName, length, orient);
    }
  }, {
    key: "updateShipsCoord",
    value: function updateShipsCoord(row, col, shipName, length, orient) {
      if (orient === "x") {
        var ship = {};
        ship.start = [row, col + 1 - length];
        ship.end = [row, col];
        ship.orient = orient;
        ship.length = length;
        this.shipsCoord[shipName] = ship;
      }
      if (orient === "y") {
        var _ship = {};
        _ship.start = [row + 1 - length, col];
        _ship.end = [row, col];
        _ship.orient = orient;
        _ship.length = length;
        this.shipsCoord[shipName] = _ship;
      }
    }
  }, {
    key: "autoFillShipsBoard",
    value: function autoFillShipsBoard(shipsArr) {
      var _this = this;
      var orientArr = ["x", "y"];
      shipsArr.forEach(function (ship) {
        // chose orientation randomly
        var index = Math.floor(Math.random() * 2);
        var orient = orientArr[index];
        _classPrivateMethodGet(_this, _placeSingleShip, _placeSingleShip2).call(_this, ship, orient);
      });
    }

    // Receive attack function to check whether that shot hit any ship or got missed
  }, {
    key: "receiveAttack",
    value: function receiveAttack(position) {
      var row = position[0];
      var col = position[1];
      var cellStatus = this.board[row][col];
      if (cellStatus === "empty") {
        this.board[row][col] = "miss";
      } else if (cellStatus !== "miss" && cellStatus !== "hit") {
        this.board[row][col] = "hit";
      }
      // Return attacking cell status
      return cellStatus;
    }
  }]);
  return GameBoard;
}();
function _getStartIndex2(length, orient) {
  var indexFound = false;
  var row;
  var col;
  var cell;
  if (orient === "x") {
    while (!indexFound) {
      row = Math.floor(Math.random() * 10);
      col = length - 1 + Math.floor(Math.random() * (10 - (length - 1)));
      cell = this.board[row][col];
      // Check if current cell is empty and prev 'n-1' cells are empty horizontally
      if (cell === "empty") {
        indexFound = true;
        for (var i = 1; i < length; i += 1) {
          if (this.board[row][col - i] !== "empty") {
            indexFound = false;
            break;
          }
        }
      }

      // One additional check after index is found is to make sure there is atleast one cell empty between consecutive ships in order to make auto ships placement more logical and less random.
      if (indexFound) {
        // Check if ship's all cells are away from corner rows and columns
        if (row + 1 <= 9 && row - 1 >= 0 && col + 1 <= 9 && col - length - 1 >= 0) {
          if (this.board[row][col + 1] !== "empty") {
            indexFound = false;
          }
          if (this.board[row][col - length] !== "empty") {
            indexFound = false;
          }
          for (var _i3 = 0; _i3 < length; _i3 += 1) {
            if (this.board[row + 1][col - _i3] !== "empty" || this.board[row - 1][col - _i3] !== "empty") indexFound = false;
          }
        }
        if (row === 0) {
          for (var _i4 = 0; _i4 < length; _i4 += 1) {
            if (this.board[row + 1][col - _i4] !== "empty") {
              indexFound = false;
            }
          }
        }
        if (row === 9) {
          for (var _i5 = 0; _i5 < length; _i5 += 1) {
            if (this.board[row - 1][col - _i5] !== "empty") {
              indexFound = false;
            }
          }
        }
        if (col === 9) {
          if (this.board[row][col - length] !== "empty") {
            indexFound = false;
          }
        }
        if (col - length === 0) {
          if (this.board[row][col + 1] !== "empty") {
            indexFound = false;
          }
        }
      }
    }
  } else if (orient === "y") {
    while (!indexFound) {
      row = length - 1 + Math.floor(Math.random() * (10 - (length - 1)));
      col = Math.floor(Math.random() * 10);
      cell = this.board[row][col];
      // Check if current cell is empty and prev 'n-1' cells are empty vertically
      if (cell === "empty") {
        indexFound = true;
        for (var _i6 = 1; _i6 < length; _i6 += 1) {
          if (this.board[row - _i6][col] !== "empty") {
            indexFound = false;
            break;
          }
        }
      }
      // One additional check after index is found is to make sure there is atleast one cell empty between consecutive ships in order to make auto ships placement more logical and less random.
      if (indexFound) {
        // Check if ship's all cells are away from corner rows and columns
        if (row + 1 <= 9 && row - length - 1 >= 0 && col + 1 <= 9 && col - 1 >= 0) {
          if (this.board[row + 1][col] !== "empty") {
            indexFound = false;
          }
          if (this.board[row - length][col] !== "empty") {
            indexFound = false;
          }
          for (var _i7 = 0; _i7 < length; _i7 += 1) {
            if (this.board[row - _i7][col + 1] !== "empty" || this.board[row - _i7][col - 1] !== "empty") {
              indexFound = false;
            }
          }
        }
        if (col === 0) {
          for (var _i8 = 0; _i8 < length; _i8 += 1) {
            if (this.board[row - _i8][col + 1] !== "empty") {
              indexFound = false;
            }
          }
        }
        if (col === 9) {
          for (var _i9 = 0; _i9 < length; _i9 += 1) {
            if (this.board[row - _i9][col - 1] !== "empty") {
              indexFound = false;
            }
          }
        }
        if (row === 9) {
          if (this.board[row - length][col] !== "empty") {
            indexFound = false;
          }
        }
        if (row - length === 0) {
          if (this.board[row + 1][col] !== "empty") {
            indexFound = false;
          }
        }
      }
    }
  }
  return [row, col];
}
function _placeSingleShip2(ship, orient) {
  var shipName = ship[0];
  var length = ship[2];
  // Use array destructuring for acccessing elements
  var _classPrivateMethodGe = _classPrivateMethodGet(this, _getStartIndex, _getStartIndex2).call(this, length, orient),
    _classPrivateMethodGe2 = _slicedToArray(_classPrivateMethodGe, 2),
    row = _classPrivateMethodGe2[0],
    col = _classPrivateMethodGe2[1];
  // Update ai board with this ship info

  this.updateBoard(row, col, shipName, length, orient);
}


/***/ }),

/***/ "./src/scriptFiles/player.js":
/*!***********************************!*\
  !*** ./src/scriptFiles/player.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ "./src/scriptFiles/gameBoard.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ "./src/scriptFiles/ship.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((function player() {
  var newPlayer = {};
  newPlayer.c1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("c1", 4);
  newPlayer.d1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("d1", 3);
  newPlayer.d2 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("d2", 3);
  newPlayer.p1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("p1", 2);
  newPlayer.p2 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("p2", 2);
  newPlayer.p3 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("p3", 2);
  newPlayer.s1 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("s1", 1);
  newPlayer.s2 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("s2", 1);
  newPlayer.s3 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("s3", 1);
  newPlayer.s4 = new _ship__WEBPACK_IMPORTED_MODULE_1__["default"]("s4", 1);
  newPlayer.allSunk = function () {
    var shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    var sunk = true;
    shipNames.forEach(function (ship) {
      if (!newPlayer[ship].sunk) {
        sunk = false;
      }
    });
    return sunk;
  };
  newPlayer.resetShips = function () {
    var shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach(function (ship) {
      newPlayer[ship].resetShip();
    });
  };
  newPlayer.gameBoard = new _gameBoard__WEBPACK_IMPORTED_MODULE_0__["default"]();
  return newPlayer;
})());

/***/ }),

/***/ "./src/scriptFiles/ship.js":
/*!*********************************!*\
  !*** ./src/scriptFiles/ship.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Ship = /*#__PURE__*/function () {
  function Ship(name, length) {
    _classCallCheck(this, Ship);
    this.name = name;
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }
  _createClass(Ship, [{
    key: "isSunk",
    value: function isSunk() {
      if (this.length === this.hitCount) {
        this.sunk = true;
      }
      return this.sunk;
    }
  }, {
    key: "resetShip",
    value: function resetShip() {
      this.hitCount = 0;
      this.sunk = 0;
    }
  }, {
    key: "hit",
    value: function hit() {
      this.hitCount += 1;
    }
  }]);
  return Ship;
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/meyer-reset.css":
/*!*******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styleSheets/meyer-reset.css ***!
  \*******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`, "",{"version":3,"sources":["webpack://./src/styleSheets/meyer-reset.css"],"names":[],"mappings":"AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,eAAe;CACf,aAAa;CACb,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/my-css-reset.css":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styleSheets/my-css-reset.css ***!
  \********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/****** Elad Shechter's RESET *******/
/*** box sizing border-box for all elements ***/
*,
*::before,
*::after {
     box-sizing: border-box;
}
a {
     text-decoration: none;
     color: inherit;
     cursor: pointer;
}
button {
     background-color: transparent;
     color: inherit;
     border-width: 0;
     padding: 0;
     cursor: pointer;
}
figure {
     margin: 0;
}
input::-moz-focus-inner {
     border: 0;
     padding: 0;
     margin: 0;
}
ul,
ol,
dd {
     margin: 0;
     padding: 0;
     list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6 {
     margin: 0;
     font-size: inherit;
     font-weight: inherit;
}
p {
     margin: 0;
}
cite {
     font-style: normal;
}
fieldset {
     border-width: 0;
     padding: 0;
     margin: 0;
}
`, "",{"version":3,"sources":["webpack://./src/styleSheets/my-css-reset.css"],"names":[],"mappings":"AAAA,qCAAqC;AACrC,+CAA+C;AAC/C;;;KAGK,sBAAsB;AAC3B;AACA;KACK,qBAAqB;KACrB,cAAc;KACd,eAAe;AACpB;AACA;KACK,6BAA6B;KAC7B,cAAc;KACd,eAAe;KACf,UAAU;KACV,eAAe;AACpB;AACA;KACK,SAAS;AACd;AACA;KACK,SAAS;KACT,UAAU;KACV,SAAS;AACd;AACA;;;KAGK,SAAS;KACT,UAAU;KACV,gBAAgB;AACrB;AACA;;;;;;KAMK,SAAS;KACT,kBAAkB;KAClB,oBAAoB;AACzB;AACA;KACK,SAAS;AACd;AACA;KACK,kBAAkB;AACvB;AACA;KACK,eAAe;KACf,UAAU;KACV,SAAS;AACd","sourcesContent":["/****** Elad Shechter's RESET *******/\n/*** box sizing border-box for all elements ***/\n*,\n*::before,\n*::after {\n     box-sizing: border-box;\n}\na {\n     text-decoration: none;\n     color: inherit;\n     cursor: pointer;\n}\nbutton {\n     background-color: transparent;\n     color: inherit;\n     border-width: 0;\n     padding: 0;\n     cursor: pointer;\n}\nfigure {\n     margin: 0;\n}\ninput::-moz-focus-inner {\n     border: 0;\n     padding: 0;\n     margin: 0;\n}\nul,\nol,\ndd {\n     margin: 0;\n     padding: 0;\n     list-style: none;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n     margin: 0;\n     font-size: inherit;\n     font-weight: inherit;\n}\np {\n     margin: 0;\n}\ncite {\n     font-style: normal;\n}\nfieldset {\n     border-width: 0;\n     padding: 0;\n     margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/normalize.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styleSheets/normalize.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */

/* Document
   ========================================================================== */

/**
 * 1. Correct the line height in all browsers.
 * 2. Prevent adjustments of font size after orientation changes in iOS.
 */

html {
  line-height: 1.15; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

/* Sections
   ========================================================================== */

/**
 * Remove the margin in all browsers.
 */

body {
  margin: 0;
}

/**
 * Render the \`main\` element consistently in IE.
 */

main {
  display: block;
}

/**
 * Correct the font size and margin on \`h1\` elements within \`section\` and
 * \`article\` contexts in Chrome, Firefox, and Safari.
 */

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}

/* Grouping content
   ========================================================================== */

/**
 * 1. Add the correct box sizing in Firefox.
 * 2. Show the overflow in Edge and IE.
 */

hr {
  box-sizing: content-box; /* 1 */
  height: 0; /* 1 */
  overflow: visible; /* 2 */
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

pre {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/* Text-level semantics
   ========================================================================== */

/**
 * Remove the gray background on active links in IE 10.
 */

a {
  background-color: transparent;
}

/**
 * 1. Remove the bottom border in Chrome 57-
 * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.
 */

abbr[title] {
  border-bottom: none; /* 1 */
  text-decoration: underline; /* 2 */
  text-decoration: underline dotted; /* 2 */
}

/**
 * Add the correct font weight in Chrome, Edge, and Safari.
 */

b,
strong {
  font-weight: bolder;
}

/**
 * 1. Correct the inheritance and scaling of font size in all browsers.
 * 2. Correct the odd \`em\` font sizing in all browsers.
 */

code,
kbd,
samp {
  font-family: monospace, monospace; /* 1 */
  font-size: 1em; /* 2 */
}

/**
 * Add the correct font size in all browsers.
 */

small {
  font-size: 80%;
}

/**
 * Prevent \`sub\` and \`sup\` elements from affecting the line height in
 * all browsers.
 */

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* Embedded content
   ========================================================================== */

/**
 * Remove the border on images inside links in IE 10.
 */

img {
  border-style: none;
}

/* Forms
   ========================================================================== */

/**
 * 1. Change the font styles in all browsers.
 * 2. Remove the margin in Firefox and Safari.
 */

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-size: 100%; /* 1 */
  line-height: 1.15; /* 1 */
  margin: 0; /* 2 */
}

/**
 * Show the overflow in IE.
 * 1. Show the overflow in Edge.
 */

button,
input { /* 1 */
  overflow: visible;
}

/**
 * Remove the inheritance of text transform in Edge, Firefox, and IE.
 * 1. Remove the inheritance of text transform in Firefox.
 */

button,
select { /* 1 */
  text-transform: none;
}

/**
 * Correct the inability to style clickable types in iOS and Safari.
 */

button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}

/**
 * Remove the inner border and padding in Firefox.
 */

button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

/**
 * Restore the focus styles unset by the previous rule.
 */

button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}

/**
 * Correct the padding in Firefox.
 */

fieldset {
  padding: 0.35em 0.75em 0.625em;
}

/**
 * 1. Correct the text wrapping in Edge and IE.
 * 2. Correct the color inheritance from \`fieldset\` elements in IE.
 * 3. Remove the padding so developers are not caught out when they zero out
 *    \`fieldset\` elements in all browsers.
 */

legend {
  box-sizing: border-box; /* 1 */
  color: inherit; /* 2 */
  display: table; /* 1 */
  max-width: 100%; /* 1 */
  padding: 0; /* 3 */
  white-space: normal; /* 1 */
}

/**
 * Add the correct vertical alignment in Chrome, Firefox, and Opera.
 */

progress {
  vertical-align: baseline;
}

/**
 * Remove the default vertical scrollbar in IE 10+.
 */

textarea {
  overflow: auto;
}

/**
 * 1. Add the correct box sizing in IE 10.
 * 2. Remove the padding in IE 10.
 */

[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; /* 1 */
  padding: 0; /* 2 */
}

/**
 * Correct the cursor style of increment and decrement buttons in Chrome.
 */

[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}

/**
 * 1. Correct the odd appearance in Chrome and Safari.
 * 2. Correct the outline style in Safari.
 */

[type="search"] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/**
 * Remove the inner padding in Chrome and Safari on macOS.
 */

[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}

/**
 * 1. Correct the inability to style clickable types in iOS and Safari.
 * 2. Change font properties to \`inherit\` in Safari.
 */

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/* Interactive
   ========================================================================== */

/*
 * Add the correct display in Edge, IE 10+, and Firefox.
 */

details {
  display: block;
}

/*
 * Add the correct display in all browsers.
 */

summary {
  display: list-item;
}

/* Misc
   ========================================================================== */

/**
 * Add the correct display in IE 10+.
 */

template {
  display: none;
}

/**
 * Add the correct display in IE 10.
 */

[hidden] {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/styleSheets/normalize.css"],"names":[],"mappings":"AAAA,2EAA2E;;AAE3E;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,iBAAiB,EAAE,MAAM;EACzB,8BAA8B,EAAE,MAAM;AACxC;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,SAAS;AACX;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;EACE,uBAAuB,EAAE,MAAM;EAC/B,SAAS,EAAE,MAAM;EACjB,iBAAiB,EAAE,MAAM;AAC3B;;AAEA;;;EAGE;;AAEF;EACE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,6BAA6B;AAC/B;;AAEA;;;EAGE;;AAEF;EACE,mBAAmB,EAAE,MAAM;EAC3B,0BAA0B,EAAE,MAAM;EAClC,iCAAiC,EAAE,MAAM;AAC3C;;AAEA;;EAEE;;AAEF;;EAEE,mBAAmB;AACrB;;AAEA;;;EAGE;;AAEF;;;EAGE,iCAAiC,EAAE,MAAM;EACzC,cAAc,EAAE,MAAM;AACxB;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,cAAc;EACd,cAAc;EACd,kBAAkB;EAClB,wBAAwB;AAC1B;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,WAAW;AACb;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;;EAGE;;AAEF;;;;;EAKE,oBAAoB,EAAE,MAAM;EAC5B,eAAe,EAAE,MAAM;EACvB,iBAAiB,EAAE,MAAM;EACzB,SAAS,EAAE,MAAM;AACnB;;AAEA;;;EAGE;;AAEF;QACQ,MAAM;EACZ,iBAAiB;AACnB;;AAEA;;;EAGE;;AAEF;SACS,MAAM;EACb,oBAAoB;AACtB;;AAEA;;EAEE;;AAEF;;;;EAIE,0BAA0B;AAC5B;;AAEA;;EAEE;;AAEF;;;;EAIE,kBAAkB;EAClB,UAAU;AACZ;;AAEA;;EAEE;;AAEF;;;;EAIE,8BAA8B;AAChC;;AAEA;;EAEE;;AAEF;EACE,8BAA8B;AAChC;;AAEA;;;;;EAKE;;AAEF;EACE,sBAAsB,EAAE,MAAM;EAC9B,cAAc,EAAE,MAAM;EACtB,cAAc,EAAE,MAAM;EACtB,eAAe,EAAE,MAAM;EACvB,UAAU,EAAE,MAAM;EAClB,mBAAmB,EAAE,MAAM;AAC7B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;;EAGE;;AAEF;;EAEE,sBAAsB,EAAE,MAAM;EAC9B,UAAU,EAAE,MAAM;AACpB;;AAEA;;EAEE;;AAEF;;EAEE,YAAY;AACd;;AAEA;;;EAGE;;AAEF;EACE,6BAA6B,EAAE,MAAM;EACrC,oBAAoB,EAAE,MAAM;AAC9B;;AAEA;;EAEE;;AAEF;EACE,wBAAwB;AAC1B;;AAEA;;;EAGE;;AAEF;EACE,0BAA0B,EAAE,MAAM;EAClC,aAAa,EAAE,MAAM;AACvB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,cAAc;AAChB;;AAEA;;EAEE;;AAEF;EACE,kBAAkB;AACpB;;AAEA;+EAC+E;;AAE/E;;EAEE;;AAEF;EACE,aAAa;AACf;;AAEA;;EAEE;;AAEF;EACE,aAAa;AACf","sourcesContent":["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/styles.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styleSheets/styles.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  font-size: calc(16rem + (20 - 16) * ((100vw - 320rem) / (1920 - 320)));
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.game-title {
  width: 100%;
  margin: 2vw auto;
  text-align: center;
  font-family: "Tourney";
  font: bold;
  font-size: calc(28rem + (80 - 28) * ((100vw - 320rem) / (1920 - 320)));
  color: #500724;
  margin-bottom: 5vw;
  font-weight: 700;
}

.initial-page {
  position: absolute;
  width: 60vw;
  height: 80vh;
  z-index: 3;
  background-color: #422006;
  box-shadow: 3rem 3rem 3rem rgba(0, 0, 0, 0.3);
  top: 10vh;
  left: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.game-title.init-page {
  color: #5978f5;
}

button.game-start.init-page,
.play-again {
  width: fit-content;
  font-weight: 700;
  padding: 5rem;
  background-color: #5978f5;
  cursor: pointer;
  border-radius: 5rem;
}

.initial-page.hide {
  display: none;
  pointer-events: none;
}
.initial-page.hide > :nth-child(n) {
  pointer-events: none;
}
.initial-page.show {
  display: block;
  pointer-events: all;
}

.ship-placement-page {
  position: absolute;
  width: 60vw;
  height: 80vh;
  padding: 2vw;
  z-index: 2;
  background-color: #abb8b7;
  box-shadow: 3rem 3rem 3rem rgba(0, 0, 0, 0.3);
  top: 10vh;
  left: 20vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}

.ship-placement-page.hide {
  opacity: 0;
  display: none;
  pointer-events: none;
}

.ship-placement-page.show {
  opacity: 1;
  display: flex;
  pointer-events: all;
}

.ship-name {
  padding: 5rem;
  font-weight: bold;
}

.rotate-btn {
  box-sizing: border-box;
  display: flex;
  color: #0f766e;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  gap: 1vw;
}

.rotate-btn:hover {
  outline: 1rem solid #636161;
  border-radius: 5rem;
}

.rotate-text {
  border-bottom: 1rem dashed #0f766e;
  pointer-events: none;
}

.random-icon {
  pointer-events: none;
  width: calc(16rem + (22 - 16) * ((100vw - 320rem) / (920 - 320)));
}

.ship-placement-page .your-table .table-cell {
  border: 1rem solid rgb(111, 111, 214);
}

.gameplay-page {
  position: relative;
  z-index: 1;
  width: 60vw;
  height: fit-content;
  margin: 0 auto;
  border: 1rem solid;
  border-radius: 5rem;
}

.gameplay-page.hide {
  opacity: 0;
  pointer-events: none;
}

.gameplay-page.show {
  opacity: 1;
  pointer-events: all;
}

.turn-message {
  width: 12vw;
  padding: 0.5vw;
  margin: 1vw auto;
  background-color: #f1f5f9;
  border-radius: 3rem;
  text-align: center;
}

.grids-container {
  margin: 2vw auto;
  width: 60vw;
  height: 25vw;
  padding: 2vw;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 5vw;
  align-items: center;
}

.your-grid,
.opponent-grid {
  position: relative;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1vw;
}

.your-table,
.opponent-table {
  width: 20vw;
  height: 20vw;
  pointer-events: none;
}

.table-cell {
  width: 2vw;
  height: 2vw;
  pointer-events: all;
}

.moving {
  border: 1rem dashed #5978f5;
  pointer-events: none;
}

.placed {
  border: 2rem solid blue;
  background-color: rgba(0, 0, 0, 0.2);
  pointer-events: all;
}

.sunk {
  border: 3rem solid red;
}

.your-table .table-cell {
  border: 1rem solid #5978f5;
}

.your-table .table-cell:hover {
  cursor: pointer;
}

.opponent-table .table-cell {
  border: 1rem solid #ccc;
}

.your-table-gameplay-page :nth-child(n) {
  pointer-events: none;
  user-select: none;
}

.opponent-table .table-cell:hover {
  cursor: pointer;
  background-color: #ccc;
}

.gameover-container {
  position: absolute;
  text-align: center;
  z-index: 5;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.gameover-container.hide {
  display: none;
  background-color: rgba(0, 0, 0, 0);
  width: 0;
  height: 0;
  transition: all linear 1s;
  overflow: hidden;
  pointer-events: none;
}

.gameover-container.show {
  display: block;

  background-color: rgba(0, 0, 0, 0.3);
  pointer-events: auto;
  width: 100vw;
  height: 100vh;
}

.gameover {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  left: 30vw;
  top: 30vh;
  z-index: 4;
  width: 40vw;
  height: 40vh;
  background-color: #422006;
  color: #ccc;
  border: 1rem solid;
  border-radius: 5rem;
}

.modal-msg {
  font-size: 48rem;
}
`, "",{"version":3,"sources":["webpack://./src/styleSheets/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  font-size: calc(16rem + (20 - 16) * ((100vw - 320rem) / (1920 - 320)));\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.game-title {\n  width: 100%;\n  margin: 2vw auto;\n  text-align: center;\n  font-family: \"Tourney\";\n  font: bold;\n  font-size: calc(28rem + (80 - 28) * ((100vw - 320rem) / (1920 - 320)));\n  color: #500724;\n  margin-bottom: 5vw;\n  font-weight: 700;\n}\n\n.initial-page {\n  position: absolute;\n  width: 60vw;\n  height: 80vh;\n  z-index: 3;\n  background-color: #422006;\n  box-shadow: 3rem 3rem 3rem rgba(0, 0, 0, 0.3);\n  top: 10vh;\n  left: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.game-title.init-page {\n  color: #5978f5;\n}\n\nbutton.game-start.init-page,\n.play-again {\n  width: fit-content;\n  font-weight: 700;\n  padding: 5rem;\n  background-color: #5978f5;\n  cursor: pointer;\n  border-radius: 5rem;\n}\n\n.initial-page.hide {\n  display: none;\n  pointer-events: none;\n}\n.initial-page.hide > :nth-child(n) {\n  pointer-events: none;\n}\n.initial-page.show {\n  display: block;\n  pointer-events: all;\n}\n\n.ship-placement-page {\n  position: absolute;\n  width: 60vw;\n  height: 80vh;\n  padding: 2vw;\n  z-index: 2;\n  background-color: #abb8b7;\n  box-shadow: 3rem 3rem 3rem rgba(0, 0, 0, 0.3);\n  top: 10vh;\n  left: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.ship-placement-page.hide {\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n}\n\n.ship-placement-page.show {\n  opacity: 1;\n  display: flex;\n  pointer-events: all;\n}\n\n.ship-name {\n  padding: 5rem;\n  font-weight: bold;\n}\n\n.rotate-btn {\n  box-sizing: border-box;\n  display: flex;\n  color: #0f766e;\n  padding: 1rem;\n  align-items: center;\n  justify-content: center;\n  gap: 1vw;\n}\n\n.rotate-btn:hover {\n  outline: 1rem solid #636161;\n  border-radius: 5rem;\n}\n\n.rotate-text {\n  border-bottom: 1rem dashed #0f766e;\n  pointer-events: none;\n}\n\n.random-icon {\n  pointer-events: none;\n  width: calc(16rem + (22 - 16) * ((100vw - 320rem) / (920 - 320)));\n}\n\n.ship-placement-page .your-table .table-cell {\n  border: 1rem solid rgb(111, 111, 214);\n}\n\n.gameplay-page {\n  position: relative;\n  z-index: 1;\n  width: 60vw;\n  height: fit-content;\n  margin: 0 auto;\n  border: 1rem solid;\n  border-radius: 5rem;\n}\n\n.gameplay-page.hide {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.gameplay-page.show {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.turn-message {\n  width: 12vw;\n  padding: 0.5vw;\n  margin: 1vw auto;\n  background-color: #f1f5f9;\n  border-radius: 3rem;\n  text-align: center;\n}\n\n.grids-container {\n  margin: 2vw auto;\n  width: 60vw;\n  height: 25vw;\n  padding: 2vw;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 5vw;\n  align-items: center;\n}\n\n.your-grid,\n.opponent-grid {\n  position: relative;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1vw;\n}\n\n.your-table,\n.opponent-table {\n  width: 20vw;\n  height: 20vw;\n  pointer-events: none;\n}\n\n.table-cell {\n  width: 2vw;\n  height: 2vw;\n  pointer-events: all;\n}\n\n.moving {\n  border: 1rem dashed #5978f5;\n  pointer-events: none;\n}\n\n.placed {\n  border: 2rem solid blue;\n  background-color: rgba(0, 0, 0, 0.2);\n  pointer-events: all;\n}\n\n.sunk {\n  border: 3rem solid red;\n}\n\n.your-table .table-cell {\n  border: 1rem solid #5978f5;\n}\n\n.your-table .table-cell:hover {\n  cursor: pointer;\n}\n\n.opponent-table .table-cell {\n  border: 1rem solid #ccc;\n}\n\n.your-table-gameplay-page :nth-child(n) {\n  pointer-events: none;\n  user-select: none;\n}\n\n.opponent-table .table-cell:hover {\n  cursor: pointer;\n  background-color: #ccc;\n}\n\n.gameover-container {\n  position: absolute;\n  text-align: center;\n  z-index: 5;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.gameover-container.hide {\n  display: none;\n  background-color: rgba(0, 0, 0, 0);\n  width: 0;\n  height: 0;\n  transition: all linear 1s;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.gameover-container.show {\n  display: block;\n\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: auto;\n  width: 100vw;\n  height: 100vh;\n}\n\n.gameover {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  left: 30vw;\n  top: 30vh;\n  z-index: 4;\n  width: 40vw;\n  height: 40vh;\n  background-color: #422006;\n  color: #ccc;\n  border: 1rem solid;\n  border-radius: 5rem;\n}\n\n.modal-msg {\n  font-size: 48rem;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/typography.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styleSheets/typography.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html {
     font-size: 1px; /*for using REM units*/
}
body {
     font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
     font-size: 16rem;
     font-weight: 400;
     line-height: 1.3;
     color: #222;
}
`, "",{"version":3,"sources":["webpack://./src/styleSheets/typography.css"],"names":[],"mappings":"AAAA;KACK,cAAc,EAAE,sBAAsB;AAC3C;AACA;KACK,iJAAiJ;KACjJ,gBAAgB;KAChB,gBAAgB;KAChB,gBAAgB;KAChB,WAAW;AAChB","sourcesContent":["html {\n     font-size: 1px; /*for using REM units*/\n}\nbody {\n     font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", \"Roboto\", \"Oxygen\", \"Ubuntu\", \"Fira Sans\", \"Droid Sans\", \"Helvetica Neue\", sans-serif;\n     font-size: 16rem;\n     font-weight: 400;\n     line-height: 1.3;\n     color: #222;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styleSheets/meyer-reset.css":
/*!*****************************************!*\
  !*** ./src/styleSheets/meyer-reset.css ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./meyer-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/meyer-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_meyer_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styleSheets/my-css-reset.css":
/*!******************************************!*\
  !*** ./src/styleSheets/my-css-reset.css ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./my-css-reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/my-css-reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_my_css_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styleSheets/normalize.css":
/*!***************************************!*\
  !*** ./src/styleSheets/normalize.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./normalize.css */ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/normalize.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_normalize_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styleSheets/styles.css":
/*!************************************!*\
  !*** ./src/styleSheets/styles.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styleSheets/typography.css":
/*!****************************************!*\
  !*** ./src/styleSheets/typography.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./typography.css */ "./node_modules/css-loader/dist/cjs.js!./src/styleSheets/typography.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_typography_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/icons/random.svg":
/*!*************************************!*\
  !*** ./src/assets/icons/random.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2d94b2881f9d540d0f54.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./src/scriptFiles/app.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styleSheets_meyer_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styleSheets/meyer-reset.css */ "./src/styleSheets/meyer-reset.css");
/* harmony import */ var _styleSheets_my_css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styleSheets/my-css-reset.css */ "./src/styleSheets/my-css-reset.css");
/* harmony import */ var _styleSheets_normalize_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styleSheets/normalize.css */ "./src/styleSheets/normalize.css");
/* harmony import */ var _styleSheets_typography_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styleSheets/typography.css */ "./src/styleSheets/typography.css");
/* harmony import */ var _styleSheets_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styleSheets/styles.css */ "./src/styleSheets/styles.css");
/* harmony import */ var _assets_icons_random_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/random.svg */ "./src/assets/icons/random.svg");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dom */ "./src/scriptFiles/dom.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./player */ "./src/scriptFiles/player.js");
/* harmony import */ var _ai__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ai */ "./src/scriptFiles/ai.js");







// Import modules into main app.js file




// Create and append ship rotate image icon to the rotate Btn
var randImg = new Image();
randImg.src = _assets_icons_random_svg__WEBPACK_IMPORTED_MODULE_5__;
randImg.classList.add("random-icon");
randImg.alt = "Random Icon";
var rotateBtn = document.querySelector(".rotate-btn");
rotateBtn.appendChild(randImg);

// Build empty game board for player1
_player__WEBPACK_IMPORTED_MODULE_7__["default"].gameBoard.buildBoard();

// Define ai's empty gameBoard
_ai__WEBPACK_IMPORTED_MODULE_8__["default"].gameBoard.buildBoard();
function resetGame() {
  // Reset both game boards
  _player__WEBPACK_IMPORTED_MODULE_7__["default"].gameBoard.resetBoard();
  _ai__WEBPACK_IMPORTED_MODULE_8__["default"].gameBoard.resetBoard();
  // Reset display tables for both players
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].resetTables();
  // Reset player's/ai's ships status
  _player__WEBPACK_IMPORTED_MODULE_7__["default"].resetShips();
  _ai__WEBPACK_IMPORTED_MODULE_8__["default"].resetShips();
  // Remove ships from tables
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].removeShips();
  // Now hide game page
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].hideGamePage();
  // Show ship placement page
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].showShipPage();
  // Now hide modal container
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].hideModalContainer();
  // Now manage ships placement
  manageShipsPlacement();
}

// Declare game Over
function gameOver(playerName) {
  var gameOverCont = document.querySelector(".gameover-container");
  var modalMsg = gameOverCont.querySelector(".modal-msg");
  gameOverCont.classList.add("show");
  if (playerName === "ai") {
    modalMsg.textContent = "You Win!";
  } else if (playerName === "player") {
    modalMsg.textContent = "You Lose!";
  }

  // Access play again button
  var playAgainBtn = document.querySelector(".play-again");
  playAgainBtn.addEventListener("click", resetGame);
}
function isGameOver(playerName) {
  var isSunk;
  if (playerName === "ai") {
    isSunk = _ai__WEBPACK_IMPORTED_MODULE_8__["default"].allSunk();
  } else if (playerName === "player") {
    isSunk = _player__WEBPACK_IMPORTED_MODULE_7__["default"].allSunk();
  }
  return isSunk;
}
function gameLoop() {
  var gamePage = document.querySelector(".gameplay-page");
  var oppTable = gamePage.querySelector(".opponent-table");
  var yourTable = gamePage.querySelector(".your-table");
  function initTurn() {
    var players = ["player", "ai"];
    var index = Math.floor(Math.random() * 2);
    return players[index];
  }
  function disableOppTable() {
    var cells = oppTable.querySelectorAll(".table-cell");
    oppTable.style.opacity = "0.5";
    cells.forEach(function (cell) {
      var cellCopy = cell;
      cellCopy.style.pointerEvents = "none";
    });
  }
  function enableOppTable() {
    var cells = oppTable.querySelectorAll(".table-cell");
    oppTable.style.opacity = "0.5";
    cells.forEach(function (cell) {
      var cellCopy = cell;
      cellCopy.style.pointerEvents = "all";
    });
  }

  // Set initial turn
  var turn = initTurn();
  function toggleTurn() {
    if (turn === "ai") turn = "player";else turn = "ai";
  }
  function updateShipStatus(playerName, shipName) {
    if (playerName === "ai") {
      // Update current ship hit count
      _ai__WEBPACK_IMPORTED_MODULE_8__["default"][shipName].hit();
      // check if ship sunk
      _ai__WEBPACK_IMPORTED_MODULE_8__["default"][shipName].isSunk();
    }
    if (playerName === "player") {
      // Update current ship hit count
      _player__WEBPACK_IMPORTED_MODULE_7__["default"][shipName].hit();
      // check if ship sunk
      _player__WEBPACK_IMPORTED_MODULE_7__["default"][shipName].isSunk();
    }
  }

  // play ai turn
  function aiTurn() {
    var position = _ai__WEBPACK_IMPORTED_MODULE_8__["default"].getHitCoord();
    while (!_ai__WEBPACK_IMPORTED_MODULE_8__["default"].isAttackValid(position)) {
      position = _ai__WEBPACK_IMPORTED_MODULE_8__["default"].getHitCoord();
    }

    // Got valid position which is either ship position or empty cell
    var cellStatus = _player__WEBPACK_IMPORTED_MODULE_7__["default"].gameBoard.receiveAttack(position);
    if (cellStatus !== "empty") {
      // attack is on the ship
      var shipName = cellStatus;
      // Update ship hit status
      updateShipStatus("player", shipName);
      var isSunk = _player__WEBPACK_IMPORTED_MODULE_7__["default"][shipName].isSunk();
      if (isSunk) {
        _dom__WEBPACK_IMPORTED_MODULE_6__["default"].shipSunk("player", shipName);
      }
      var lose = isGameOver("player");
      if (lose) gameOver("player");
    }
    var targetCell = yourTable.rows[position[0]].cells[position[1]];
    // Update cell status miss, hit etc in the DOM
    _dom__WEBPACK_IMPORTED_MODULE_6__["default"].updateCellHit(targetCell, cellStatus);
    // Finally enable opponent's table
    enableOppTable();
    // Toggle turn
    toggleTurn();
    // Then display the message
    _dom__WEBPACK_IMPORTED_MODULE_6__["default"].turnMessage(turn);
  }

  // Play first turn
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].turnMessage(turn);
  if (turn === "ai") {
    // If first turn is of ai then
    setTimeout(function () {
      aiTurn();
    }, 1000);
  }
  function playerTurn(e) {
    if (e.target.matches(".table-cell")) {
      var targetCell = e.target;
      var position = [];
      position[0] = Number(targetCell.getAttribute("data-row"));
      position[1] = Number(targetCell.getAttribute("data-col"));
      var cellStatus = _ai__WEBPACK_IMPORTED_MODULE_8__["default"].gameBoard.receiveAttack(position);

      // Update cell in the DOM
      _dom__WEBPACK_IMPORTED_MODULE_6__["default"].updateCellHit(targetCell, cellStatus);

      // Check if ship got hit
      if (cellStatus !== "miss" && cellStatus !== "hit" && cellStatus !== "empty") {
        // Ship found
        var shipName = cellStatus;
        updateShipStatus("ai", shipName);
        // Check if ship got sunk
        var isSunk = _ai__WEBPACK_IMPORTED_MODULE_8__["default"][shipName].isSunk();
        if (isSunk) {
          _dom__WEBPACK_IMPORTED_MODULE_6__["default"].shipSunk("ai", shipName);
        }
      }

      // Change turn if shot got hit or miss
      if (cellStatus !== "miss" && cellStatus !== "hit" || cellStatus === "empty") {
        // Check whether game is over or not
        var lose = isGameOver("ai");
        if (lose) {
          gameOver("ai");
        } else {
          // Toggle turn
          toggleTurn();
          // Display turn message
          _dom__WEBPACK_IMPORTED_MODULE_6__["default"].turnMessage(turn);
          // Disable opponent table during ai's turn
          disableOppTable();
          // Call ai's turn
          setTimeout(aiTurn, 1000);
        }
      }
    }
  }

  // Listen player's click on opponent's table
  oppTable.addEventListener("click", playerTurn);
}
var playBtn = document.querySelector(".game-start");

// Define ships names
var shipNames = [["c1", "Carrier", 4], ["d1", "Distroyer", 3], ["d2", "Distroyer", 3], ["p1", "Patrol Boat", 2], ["p2", "Patrol Boat", 2], ["p3", "Patrol Boat", 2], ["s1", "Singleton", 1], ["s2", "Singleton", 1], ["s3", "Singleton", 1], ["s4", "Singleton", 1]];
function manageShipsPlacement() {
  // Hide initial page when play button clicked
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].hideInitPage();
  // Show ship placement page
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].showShipPage();

  // Auto fill ai board 2D array with ships
  _ai__WEBPACK_IMPORTED_MODULE_8__["default"].gameBoard.autoFillShipsBoard(shipNames.slice());
  // Let player place ships on the board
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].placeShips(shipNames.slice(), gameLoop);
}
_dom__WEBPACK_IMPORTED_MODULE_6__["default"].hideGamePage();
playBtn.addEventListener("click", manageShipsPlacement);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLHNCQUFzQixxQkFBcUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLE1BQU0sWUFBWSxPQUFPLE9BQU8sTUFBTSxPQUFPLHNCQUFzQixxQkFBcUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sT0FBTyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxRQUFRLFFBQVEsTUFBTSxTQUFTLHNCQUFzQixxQkFBcUIsdUJBQXVCLHFCQUFxQixPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE9BQU8sTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sTUFBTSxRQUFRLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLFdBQVcsTUFBTSxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLFNBQVMsTUFBTSxLQUFLLHNCQUFzQixxQkFBcUIscUJBQXFCLHFCQUFxQixxQkFBcUIsdUJBQXVCLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sTUFBTSxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLE1BQU0sVUFBVSxNQUFNLE9BQU8sTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sT0FBTyxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQixPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE9BQU8sTUFBTSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxPQUFPLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxzVkFBc1YsdUJBQXVCLDJDQUEyQyxVQUFVLDhKQUE4SixjQUFjLEdBQUcsd0VBQXdFLG1CQUFtQixHQUFHLHNKQUFzSixtQkFBbUIscUJBQXFCLEdBQUcsb05BQW9OLDZCQUE2QixzQkFBc0IsOEJBQThCLFVBQVUsdUpBQXVKLHVDQUF1QywyQkFBMkIsVUFBVSx5TEFBeUwsa0NBQWtDLEdBQUcsMEpBQTBKLHlCQUF5Qix1Q0FBdUMsOENBQThDLFVBQVUseUZBQXlGLHdCQUF3QixHQUFHLHFLQUFxSyx1Q0FBdUMsMkJBQTJCLFVBQVUsc0VBQXNFLG1CQUFtQixHQUFHLG9IQUFvSCxtQkFBbUIsbUJBQW1CLHVCQUF1Qiw2QkFBNkIsR0FBRyxTQUFTLG9CQUFvQixHQUFHLFNBQVMsZ0JBQWdCLEdBQUcscUxBQXFMLHVCQUF1QixHQUFHLDRQQUE0UCwwQkFBMEIsNEJBQTRCLDhCQUE4QixzQkFBc0IsVUFBVSxnR0FBZ0csNkJBQTZCLEdBQUcscUtBQXFLLGdDQUFnQyxHQUFHLHlKQUF5SiwrQkFBK0IsR0FBRywrTUFBK00sdUJBQXVCLGVBQWUsR0FBRyx3TUFBd00sbUNBQW1DLEdBQUcsOERBQThELG1DQUFtQyxHQUFHLHdRQUF3USw0QkFBNEIsMkJBQTJCLDJCQUEyQiw0QkFBNEIsdUJBQXVCLGdDQUFnQyxVQUFVLGdHQUFnRyw2QkFBNkIsR0FBRywrRUFBK0UsbUJBQW1CLEdBQUcsd0lBQXdJLDRCQUE0Qix1QkFBdUIsVUFBVSx3TEFBd0wsaUJBQWlCLEdBQUcsdUlBQXVJLG1DQUFtQyxpQ0FBaUMsVUFBVSwwSEFBMEgsNkJBQTZCLEdBQUcsNktBQTZLLGdDQUFnQywwQkFBMEIsVUFBVSxzTEFBc0wsbUJBQW1CLEdBQUcscUVBQXFFLHVCQUF1QixHQUFHLDhKQUE4SixrQkFBa0IsR0FBRyxnRUFBZ0Usa0JBQWtCLEdBQUcscUJBQXFCO0FBQzEyUTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFd2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkZBQTZGLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGdDQUFnQywyRUFBMkUsMkJBQTJCLGlCQUFpQixrQkFBa0IscUJBQXFCLEdBQUcsaUJBQWlCLGdCQUFnQixxQkFBcUIsdUJBQXVCLDZCQUE2QixlQUFlLDJFQUEyRSxtQkFBbUIsdUJBQXVCLHFCQUFxQixHQUFHLG1CQUFtQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixlQUFlLDhCQUE4QixrREFBa0QsY0FBYyxlQUFlLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixHQUFHLDJCQUEyQixtQkFBbUIsR0FBRywrQ0FBK0MsdUJBQXVCLHFCQUFxQixrQkFBa0IsOEJBQThCLG9CQUFvQix3QkFBd0IsR0FBRyx3QkFBd0Isa0JBQWtCLHlCQUF5QixHQUFHLHNDQUFzQyx5QkFBeUIsR0FBRyxzQkFBc0IsbUJBQW1CLHdCQUF3QixHQUFHLDBCQUEwQix1QkFBdUIsZ0JBQWdCLGlCQUFpQixpQkFBaUIsZUFBZSw4QkFBOEIsa0RBQWtELGNBQWMsZUFBZSxrQkFBa0IsMkJBQTJCLGtDQUFrQyx3QkFBd0IsR0FBRywrQkFBK0IsZUFBZSxrQkFBa0IseUJBQXlCLEdBQUcsK0JBQStCLGVBQWUsa0JBQWtCLHdCQUF3QixHQUFHLGdCQUFnQixrQkFBa0Isc0JBQXNCLEdBQUcsaUJBQWlCLDJCQUEyQixrQkFBa0IsbUJBQW1CLGtCQUFrQix3QkFBd0IsNEJBQTRCLGFBQWEsR0FBRyx1QkFBdUIsZ0NBQWdDLHdCQUF3QixHQUFHLGtCQUFrQix1Q0FBdUMseUJBQXlCLEdBQUcsa0JBQWtCLHlCQUF5QixzRUFBc0UsR0FBRyxrREFBa0QsMENBQTBDLEdBQUcsb0JBQW9CLHVCQUF1QixlQUFlLGdCQUFnQix3QkFBd0IsbUJBQW1CLHVCQUF1Qix3QkFBd0IsR0FBRyx5QkFBeUIsZUFBZSx5QkFBeUIsR0FBRyx5QkFBeUIsZUFBZSx3QkFBd0IsR0FBRyxtQkFBbUIsZ0JBQWdCLG1CQUFtQixxQkFBcUIsOEJBQThCLHdCQUF3Qix1QkFBdUIsR0FBRyxzQkFBc0IscUJBQXFCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGtCQUFrQixrQ0FBa0Msb0JBQW9CLGFBQWEsd0JBQXdCLEdBQUcsaUNBQWlDLHVCQUF1Qix1QkFBdUIsa0JBQWtCLDJCQUEyQixhQUFhLEdBQUcsbUNBQW1DLGdCQUFnQixpQkFBaUIseUJBQXlCLEdBQUcsaUJBQWlCLGVBQWUsZ0JBQWdCLHdCQUF3QixHQUFHLGFBQWEsZ0NBQWdDLHlCQUF5QixHQUFHLGFBQWEsNEJBQTRCLHlDQUF5Qyx3QkFBd0IsR0FBRyxXQUFXLDJCQUEyQixHQUFHLDZCQUE2QiwrQkFBK0IsR0FBRyxtQ0FBbUMsb0JBQW9CLEdBQUcsaUNBQWlDLDRCQUE0QixHQUFHLDZDQUE2Qyx5QkFBeUIsc0JBQXNCLEdBQUcsdUNBQXVDLG9CQUFvQiwyQkFBMkIsR0FBRyx5QkFBeUIsdUJBQXVCLHVCQUF1QixlQUFlLGlCQUFpQixrQkFBa0IseUNBQXlDLFdBQVcsWUFBWSxhQUFhLGNBQWMsR0FBRyw4QkFBOEIsa0JBQWtCLHVDQUF1QyxhQUFhLGNBQWMsOEJBQThCLHFCQUFxQix5QkFBeUIsR0FBRyw4QkFBOEIsbUJBQW1CLDJDQUEyQyx5QkFBeUIsaUJBQWlCLGtCQUFrQixHQUFHLGVBQWUsdUJBQXVCLGtCQUFrQiwyQkFBMkIsa0NBQWtDLHdCQUF3QixlQUFlLGNBQWMsZUFBZSxnQkFBZ0IsaUJBQWlCLDhCQUE4QixnQkFBZ0IsdUJBQXVCLHdCQUF3QixHQUFHLGdCQUFnQixxQkFBcUIsR0FBRyxxQkFBcUI7QUFDcmhPO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxUnZDO0FBQzZHO0FBQ2pCO0FBQzVGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxpR0FBaUcsc0JBQXNCLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsZ0NBQWdDLHVCQUF1QiwwQkFBMEIsUUFBUSx1S0FBdUssd0JBQXdCLHdCQUF3Qix3QkFBd0IsbUJBQW1CLEdBQUcscUJBQXFCO0FBQzFqQjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7OztBQ2pCMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTRHO0FBQzVHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsNEZBQU87Ozs7QUFJc0Q7QUFDOUUsT0FBTyxpRUFBZSw0RkFBTyxJQUFJLDRGQUFPLFVBQVUsNEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUE2RztBQUM3RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDZGQUFPOzs7O0FBSXVEO0FBQy9FLE9BQU8saUVBQWUsNkZBQU8sSUFBSSw2RkFBTyxVQUFVLDZGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBMEc7QUFDMUc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywwRkFBTzs7OztBQUlvRDtBQUM1RSxPQUFPLGlFQUFlLDBGQUFPLElBQUksMEZBQU8sVUFBVSwwRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQXVHO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsdUZBQU87Ozs7QUFJaUQ7QUFDekUsT0FBTyxpRUFBZSx1RkFBTyxJQUFJLHVGQUFPLFVBQVUsdUZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUEyRztBQUMzRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDJGQUFPOzs7O0FBSXFEO0FBQzdFLE9BQU8saUVBQWUsMkZBQU8sSUFBSSwyRkFBTyxVQUFVLDJGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0F3QztBQUNDO0FBQ0g7QUFDQztBQUNKO0FBQ2lCOztBQUVwRDtBQUNvQztBQUNOO0FBQ1I7O0FBRXRCO0FBQ0EsSUFBTTZMLE9BQU8sR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQztBQUMzQkQsT0FBTyxDQUFDRSxHQUFHLEdBQUdILHFEQUFVO0FBQ3hCQyxPQUFPLENBQUM1SCxTQUFTLENBQUNDLEdBQUcsQ0FBQyxhQUFhLENBQUM7QUFDcEMySCxPQUFPLENBQUNHLEdBQUcsR0FBRyxhQUFhO0FBQzNCLElBQU14RSxTQUFTLEdBQUdyRixRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFDdkRvRixTQUFTLENBQUNqQyxXQUFXLENBQUNzRyxPQUFPLENBQUM7O0FBRTlCO0FBQ0E1TCwrQ0FBTSxDQUFDYSxTQUFTLENBQUNvSixVQUFVLENBQUMsQ0FBQzs7QUFFN0I7QUFDQWhLLDJDQUFFLENBQUNZLFNBQVMsQ0FBQ29KLFVBQVUsQ0FBQyxDQUFDO0FBRXpCLFNBQVMrQixTQUFTQSxDQUFBLEVBQUc7RUFDbkI7RUFDQWhNLCtDQUFNLENBQUNhLFNBQVMsQ0FBQ3dKLFVBQVUsQ0FBQyxDQUFDO0VBQzdCcEssMkNBQUUsQ0FBQ1ksU0FBUyxDQUFDd0osVUFBVSxDQUFDLENBQUM7RUFDekI7RUFDQXRJLDRDQUFlLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBQzdCO0VBQ0FoQywrQ0FBTSxDQUFDbUIsVUFBVSxDQUFDLENBQUM7RUFDbkJsQiwyQ0FBRSxDQUFDa0IsVUFBVSxDQUFDLENBQUM7RUFDZjtFQUNBWSw0Q0FBZSxDQUFDZ0IsV0FBVyxDQUFDLENBQUM7RUFDN0I7RUFDQWhCLDRDQUFlLENBQUN1RyxZQUFZLENBQUMsQ0FBQztFQUM5QjtFQUNBdkcsNENBQWUsQ0FBQ3FHLFlBQVksQ0FBQyxDQUFDO0VBQzlCO0VBQ0FyRyw0Q0FBZSxDQUFDd0csa0JBQWtCLENBQUMsQ0FBQztFQUNwQztFQUNBMEQsb0JBQW9CLENBQUMsQ0FBQztBQUN4Qjs7QUFFQTtBQUNBLFNBQVNDLFFBQVFBLENBQUMzSCxVQUFVLEVBQUU7RUFDNUIsSUFBTTRILFlBQVksR0FBR2pLLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLHFCQUFxQixDQUFDO0VBQ2xFLElBQU1pSyxRQUFRLEdBQUdELFlBQVksQ0FBQ2hLLGFBQWEsQ0FBQyxZQUFZLENBQUM7RUFDekRnSyxZQUFZLENBQUNuSSxTQUFTLENBQUNDLEdBQUcsQ0FBQyxNQUFNLENBQUM7RUFFbEMsSUFBSU0sVUFBVSxLQUFLLElBQUksRUFBRTtJQUN2QjZILFFBQVEsQ0FBQ3hELFdBQVcsR0FBRyxVQUFVO0VBQ25DLENBQUMsTUFBTSxJQUFJckUsVUFBVSxLQUFLLFFBQVEsRUFBRTtJQUNsQzZILFFBQVEsQ0FBQ3hELFdBQVcsR0FBRyxXQUFXO0VBQ3BDOztFQUVBO0VBQ0EsSUFBTXlELFlBQVksR0FBR25LLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUUxRGtLLFlBQVksQ0FBQy9FLGdCQUFnQixDQUFDLE9BQU8sRUFBRTBFLFNBQVMsQ0FBQztBQUNuRDtBQUVBLFNBQVNNLFVBQVVBLENBQUMvSCxVQUFVLEVBQUU7RUFDOUIsSUFBSWtILE1BQU07RUFDVixJQUFJbEgsVUFBVSxLQUFLLElBQUksRUFBRTtJQUN2QmtILE1BQU0sR0FBR3hMLDJDQUFFLENBQUNhLE9BQU8sQ0FBQyxDQUFDO0VBQ3ZCLENBQUMsTUFBTSxJQUFJeUQsVUFBVSxLQUFLLFFBQVEsRUFBRTtJQUNsQ2tILE1BQU0sR0FBR3pMLCtDQUFNLENBQUNjLE9BQU8sQ0FBQyxDQUFDO0VBQzNCO0VBQ0EsT0FBTzJLLE1BQU07QUFDZjtBQUVBLFNBQVNjLFFBQVFBLENBQUEsRUFBRztFQUNsQixJQUFNdkosUUFBUSxHQUFHZCxRQUFRLENBQUNDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQztFQUN6RCxJQUFNQyxRQUFRLEdBQUdZLFFBQVEsQ0FBQ2IsYUFBYSxDQUFDLGlCQUFpQixDQUFDO0VBQzFELElBQU1GLFNBQVMsR0FBR2UsUUFBUSxDQUFDYixhQUFhLENBQUMsYUFBYSxDQUFDO0VBRXZELFNBQVNxSyxRQUFRQSxDQUFBLEVBQUc7SUFDbEIsSUFBTUMsT0FBTyxHQUFHLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQztJQUNoQyxJQUFNN0IsS0FBSyxHQUFHaEosSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDM0MsT0FBTzJLLE9BQU8sQ0FBQzdCLEtBQUssQ0FBQztFQUN2QjtFQUVBLFNBQVM4QixlQUFlQSxDQUFBLEVBQUc7SUFDekIsSUFBTTdILEtBQUssR0FBR3pDLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3RESCxRQUFRLENBQUNTLEtBQUssQ0FBQzhKLE9BQU8sR0FBRyxLQUFLO0lBQzlCOUgsS0FBSyxDQUFDN0QsT0FBTyxDQUFDLFVBQUMwQixJQUFJLEVBQUs7TUFDdEIsSUFBTWtLLFFBQVEsR0FBR2xLLElBQUk7TUFDckJrSyxRQUFRLENBQUMvSixLQUFLLENBQUNnSyxhQUFhLEdBQUcsTUFBTTtJQUN2QyxDQUFDLENBQUM7RUFDSjtFQUVBLFNBQVNDLGNBQWNBLENBQUEsRUFBRztJQUN4QixJQUFNakksS0FBSyxHQUFHekMsUUFBUSxDQUFDRyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7SUFDdERILFFBQVEsQ0FBQ1MsS0FBSyxDQUFDOEosT0FBTyxHQUFHLEtBQUs7SUFDOUI5SCxLQUFLLENBQUM3RCxPQUFPLENBQUMsVUFBQzBCLElBQUksRUFBSztNQUN0QixJQUFNa0ssUUFBUSxHQUFHbEssSUFBSTtNQUNyQmtLLFFBQVEsQ0FBQy9KLEtBQUssQ0FBQ2dLLGFBQWEsR0FBRyxLQUFLO0lBQ3RDLENBQUMsQ0FBQztFQUNKOztFQUVBO0VBQ0EsSUFBSW5FLElBQUksR0FBRzhELFFBQVEsQ0FBQyxDQUFDO0VBRXJCLFNBQVNPLFVBQVVBLENBQUEsRUFBRztJQUNwQixJQUFJckUsSUFBSSxLQUFLLElBQUksRUFBRUEsSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUM5QkEsSUFBSSxHQUFHLElBQUk7RUFDbEI7RUFFQSxTQUFTc0UsZ0JBQWdCQSxDQUFDekksVUFBVSxFQUFFQyxRQUFRLEVBQUU7SUFDOUMsSUFBSUQsVUFBVSxLQUFLLElBQUksRUFBRTtNQUN2QjtNQUNBdEUsMkNBQUUsQ0FBQ3VFLFFBQVEsQ0FBQyxDQUFDa0gsR0FBRyxDQUFDLENBQUM7TUFDbEI7TUFDQXpMLDJDQUFFLENBQUN1RSxRQUFRLENBQUMsQ0FBQ2lILE1BQU0sQ0FBQyxDQUFDO0lBQ3ZCO0lBQ0EsSUFBSWxILFVBQVUsS0FBSyxRQUFRLEVBQUU7TUFDM0I7TUFDQXZFLCtDQUFNLENBQUN3RSxRQUFRLENBQUMsQ0FBQ2tILEdBQUcsQ0FBQyxDQUFDO01BQ3RCO01BQ0ExTCwrQ0FBTSxDQUFDd0UsUUFBUSxDQUFDLENBQUNpSCxNQUFNLENBQUMsQ0FBQztJQUMzQjtFQUNGOztFQUVBO0VBQ0EsU0FBU3dCLE1BQU1BLENBQUEsRUFBRztJQUNoQixJQUFJM0wsUUFBUSxHQUFHckIsMkNBQUUsQ0FBQzBCLFdBQVcsQ0FBQyxDQUFDO0lBQy9CLE9BQU8sQ0FBQzFCLDJDQUFFLENBQUNvQixhQUFhLENBQUNDLFFBQVEsQ0FBQyxFQUFFO01BQ2xDQSxRQUFRLEdBQUdyQiwyQ0FBRSxDQUFDMEIsV0FBVyxDQUFDLENBQUM7SUFDN0I7O0lBRUE7SUFDQSxJQUFNRixVQUFVLEdBQUd6QiwrQ0FBTSxDQUFDYSxTQUFTLENBQUNtSyxhQUFhLENBQUMxSixRQUFRLENBQUM7SUFFM0QsSUFBSUcsVUFBVSxLQUFLLE9BQU8sRUFBRTtNQUMxQjtNQUNBLElBQU0rQyxRQUFRLEdBQUcvQyxVQUFVO01BQzNCO01BQ0F1TCxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUV4SSxRQUFRLENBQUM7TUFDcEMsSUFBTWlILE1BQU0sR0FBR3pMLCtDQUFNLENBQUN3RSxRQUFRLENBQUMsQ0FBQ2lILE1BQU0sQ0FBQyxDQUFDO01BQ3hDLElBQUlBLE1BQU0sRUFBRTtRQUNWMUosNENBQWUsQ0FBQ2lILFFBQVEsQ0FBQyxRQUFRLEVBQUV4RSxRQUFRLENBQUM7TUFDOUM7TUFDQSxJQUFNMEksSUFBSSxHQUFHWixVQUFVLENBQUMsUUFBUSxDQUFDO01BQ2pDLElBQUlZLElBQUksRUFBRWhCLFFBQVEsQ0FBQyxRQUFRLENBQUM7SUFDOUI7SUFDQSxJQUFNbkQsVUFBVSxHQUFHOUcsU0FBUyxDQUFDMkMsSUFBSSxDQUFDdEQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUN1RCxLQUFLLENBQUN2RCxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDakU7SUFDQVMsNENBQWUsQ0FBQzhHLGFBQWEsQ0FBQ0UsVUFBVSxFQUFFdEgsVUFBVSxDQUFDO0lBQ3JEO0lBQ0FxTCxjQUFjLENBQUMsQ0FBQztJQUNoQjtJQUNBQyxVQUFVLENBQUMsQ0FBQztJQUNaO0lBQ0FoTCw0Q0FBZSxDQUFDMEcsV0FBVyxDQUFDQyxJQUFJLENBQUM7RUFDbkM7O0VBRUE7RUFDQTNHLDRDQUFlLENBQUMwRyxXQUFXLENBQUNDLElBQUksQ0FBQztFQUNqQyxJQUFJQSxJQUFJLEtBQUssSUFBSSxFQUFFO0lBQ2pCO0lBQ0F5RSxVQUFVLENBQUMsWUFBTTtNQUNmRixNQUFNLENBQUMsQ0FBQztJQUNWLENBQUMsRUFBRSxJQUFJLENBQUM7RUFDVjtFQUVBLFNBQVNHLFVBQVVBLENBQUN2RyxDQUFDLEVBQUU7SUFDckIsSUFBSUEsQ0FBQyxDQUFDRSxNQUFNLENBQUNDLE9BQU8sQ0FBQyxhQUFhLENBQUMsRUFBRTtNQUNuQyxJQUFNK0IsVUFBVSxHQUFHbEMsQ0FBQyxDQUFDRSxNQUFNO01BQzNCLElBQU16RixRQUFRLEdBQUcsRUFBRTtNQUNuQkEsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHK0wsTUFBTSxDQUFDdEUsVUFBVSxDQUFDMUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO01BQ3pEL0MsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHK0wsTUFBTSxDQUFDdEUsVUFBVSxDQUFDMUUsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO01BQ3pELElBQU01QyxVQUFVLEdBQUd4QiwyQ0FBRSxDQUFDWSxTQUFTLENBQUNtSyxhQUFhLENBQUMxSixRQUFRLENBQUM7O01BRXZEO01BQ0FTLDRDQUFlLENBQUM4RyxhQUFhLENBQUNFLFVBQVUsRUFBRXRILFVBQVUsQ0FBQzs7TUFFckQ7TUFDQSxJQUFJQSxVQUFVLEtBQUssTUFBTSxJQUFJQSxVQUFVLEtBQUssS0FBSyxJQUFJQSxVQUFVLEtBQUssT0FBTyxFQUFFO1FBQzNFO1FBQ0EsSUFBTStDLFFBQVEsR0FBRy9DLFVBQVU7UUFFM0J1TCxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUV4SSxRQUFRLENBQUM7UUFDaEM7UUFDQSxJQUFNaUgsTUFBTSxHQUFHeEwsMkNBQUUsQ0FBQ3VFLFFBQVEsQ0FBQyxDQUFDaUgsTUFBTSxDQUFDLENBQUM7UUFDcEMsSUFBSUEsTUFBTSxFQUFFO1VBQ1YxSiw0Q0FBZSxDQUFDaUgsUUFBUSxDQUFDLElBQUksRUFBRXhFLFFBQVEsQ0FBQztRQUMxQztNQUNGOztNQUVBO01BQ0EsSUFBSy9DLFVBQVUsS0FBSyxNQUFNLElBQUlBLFVBQVUsS0FBSyxLQUFLLElBQUtBLFVBQVUsS0FBSyxPQUFPLEVBQUU7UUFDN0U7UUFDQSxJQUFNeUwsSUFBSSxHQUFHWixVQUFVLENBQUMsSUFBSSxDQUFDO1FBQzdCLElBQUlZLElBQUksRUFBRTtVQUNSaEIsUUFBUSxDQUFDLElBQUksQ0FBQztRQUNoQixDQUFDLE1BQU07VUFDTDtVQUNBYSxVQUFVLENBQUMsQ0FBQztVQUNaO1VBQ0FoTCw0Q0FBZSxDQUFDMEcsV0FBVyxDQUFDQyxJQUFJLENBQUM7VUFDakM7VUFDQWdFLGVBQWUsQ0FBQyxDQUFDO1VBQ2pCO1VBQ0FTLFVBQVUsQ0FBQ0YsTUFBTSxFQUFFLElBQUksQ0FBQztRQUMxQjtNQUNGO0lBQ0Y7RUFDRjs7RUFFQTtFQUNBN0ssUUFBUSxDQUFDa0YsZ0JBQWdCLENBQUMsT0FBTyxFQUFFOEYsVUFBVSxDQUFDO0FBQ2hEO0FBRUEsSUFBTUUsT0FBTyxHQUFHcEwsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDOztBQUVyRDtBQUNBLElBQU1wQixTQUFTLEdBQUcsQ0FDaEIsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUNwQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDdEIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUN0QixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDdEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUN2QjtBQUVELFNBQVNrTCxvQkFBb0JBLENBQUEsRUFBRztFQUM5QjtFQUNBbEssNENBQWUsQ0FBQ2tHLFlBQVksQ0FBQyxDQUFDO0VBQzlCO0VBQ0FsRyw0Q0FBZSxDQUFDcUcsWUFBWSxDQUFDLENBQUM7O0VBRTlCO0VBQ0FuSSwyQ0FBRSxDQUFDWSxTQUFTLENBQUM0SixrQkFBa0IsQ0FBQzFKLFNBQVMsQ0FBQ2lILEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDbEQ7RUFDQWpHLDRDQUFlLENBQUNxRSxVQUFVLENBQUNyRixTQUFTLENBQUNpSCxLQUFLLENBQUMsQ0FBQyxFQUFFdUUsUUFBUSxDQUFDO0FBQ3pEO0FBRUF4Syw0Q0FBZSxDQUFDdUcsWUFBWSxDQUFDLENBQUM7QUFDOUJnRixPQUFPLENBQUNoRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUyRSxvQkFBb0IsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2NyaXB0RmlsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9tZXllci1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL215LWNzcy1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL21leWVyLXJlc2V0LmNzcz9iZWI1Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9teS1jc3MtcmVzZXQuY3NzP2Q2NDYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL25vcm1hbGl6ZS5jc3M/NGZlYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvc3R5bGVzLmNzcz8yMmZjIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy90eXBvZ3JhcGh5LmNzcz9jNDQyIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBhaSgpIHtcbiAgY29uc3QgbmV3QUkgPSB7fTtcbiAgbmV3QUkuYzEgPSBuZXcgU2hpcChcImNhcnJpZXJcIiwgNCk7XG4gIG5ld0FJLmQxID0gbmV3IFNoaXAoXCJkaXN0cm95ZXIxXCIsIDMpO1xuICBuZXdBSS5kMiA9IG5ldyBTaGlwKFwiZGlzdHJveWVyMlwiLCAzKTtcbiAgbmV3QUkucDEgPSBuZXcgU2hpcChcInBhdHJvbEJvYXQxXCIsIDIpO1xuICBuZXdBSS5wMiA9IG5ldyBTaGlwKFwicGF0cm9sQm9hdDJcIiwgMik7XG4gIG5ld0FJLnAzID0gbmV3IFNoaXAoXCJwYXRyb2xCb2F0M1wiLCAyKTtcbiAgbmV3QUkuczEgPSBuZXcgU2hpcChcInNpbmdsZXRvbjFcIiwgMSk7XG4gIG5ld0FJLnMyID0gbmV3IFNoaXAoXCJzaW5nbGV0b24yXCIsIDEpO1xuICBuZXdBSS5zMyA9IG5ldyBTaGlwKFwic2luZ2xldG9uM1wiLCAxKTtcbiAgbmV3QUkuczQgPSBuZXcgU2hpcChcInNpbmdsZXRvbjRcIiwgMSk7XG4gIG5ld0FJLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgbmV3QUkuYWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBsZXQgYWxsU3VuayA9IHRydWU7XG4gICAgc2hpcE5hbWVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghbmV3QUlbc2hpcF0uc3Vuaykge1xuICAgICAgICBhbGxTdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFN1bms7XG4gIH07XG5cbiAgbmV3QUkucmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbmV3QUlbc2hpcF0ucmVzZXRTaGlwKCk7XG4gICAgfSk7XG4gIH07XG4gIG5ld0FJLmlzQXR0YWNrVmFsaWQgPSAocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBjb2wgPSBwb3NpdGlvblsxXTtcbiAgICBjb25zdCBjZWxsU3RhdHVzID0gcGxheWVyLmdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF07XG4gICAgLy8gY29uc29sZS5sb2coJ2FpIGF0dGFjayBzdGF0dXMgaW5zaWRlIGlzJywgY2VsbFN0YXR1cywgJ2F0IHBvc2l0aW9uJywgcG9zaXRpb24pXG4gICAgaWYgKGNlbGxTdGF0dXMgIT09IFwiaGl0XCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIG5ld0FJLmdldEhpdENvb3JkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gW107XG4gICAgcG9zaXRpb25bMF0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcG9zaXRpb25bMV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIG5ld0FJO1xufSkoKTtcbiIsImltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgYWkgZnJvbSBcIi4vYWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGRvbU1hbmlwdWxhdGlvbigpIHtcbiAgZnVuY3Rpb24gcmVzZXRUYWJsZXMoKSB7XG4gICAgY29uc3QgeW91clRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55b3VyLXRhYmxlLWdhbWVwbGF5LXBhZ2VcIik7XG4gICAgY29uc3Qgb3BwVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LXRhYmxlXCIpO1xuICAgIGNvbnN0IHNldFNoaXBUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0LXNoaXBzXCIpO1xuICAgIGNvbnN0IHlvdXJDZWxscyA9IHlvdXJUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgY29uc3Qgb3BwQ2VsbHMgPSBvcHBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgY29uc3Qgc2V0U2hpcENlbGxzID0gc2V0U2hpcFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGUtY2VsbFwiKTtcblxuICAgIHlvdXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllZENlbGwgPSBjZWxsO1xuICAgICAgLy8gc2V0IFZhbHVlIHRvIGVtcHR5XG4gICAgICBtb2RpZmllZENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcImVtcHR5XCIpO1xuICAgICAgLy8gUmVzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgbW9kaWZpZWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiO1xuICAgIH0pO1xuXG4gICAgb3BwQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZWRDZWxsID0gY2VsbDtcbiAgICAgIC8vIHNldCBWYWx1ZSB0byBlbXB0eVxuICAgICAgbW9kaWZpZWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJlbXB0eVwiKTtcbiAgICAgIC8vIFJlc2V0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIG1vZGlmaWVkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbiAgICB9KTtcblxuICAgIHNldFNoaXBDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllZENlbGwgPSBjZWxsO1xuICAgICAgLy8gc2V0IFZhbHVlIHRvIGVtcHR5XG4gICAgICBtb2RpZmllZENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcImVtcHR5XCIpO1xuICAgICAgLy8gUmVzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgbW9kaWZpZWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2FiYjhiN1wiO1xuICAgIH0pO1xuICB9XG4gIC8vIFJlbW92ZSBzaGlwIGNoaWxkcmVuIGZyb20gc2hpcFBsYWNlIHBhZ2UgYW5kIGdhbWVQbGF5IHBhZ2VcbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcHMoKSB7XG4gICAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG4gICAgY29uc3Qgc2hpcFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VtZW50LXBhZ2VcIik7XG4gICAgY29uc3Qgc2hpcHNPblNoaXBQYWdlID0gc2hpcFBhZ2UucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIGNvbnN0IHNoaXBzT25HYW1lUGFnZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBzaGlwc09uU2hpcFBhZ2UuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcFBhZ2UucmVtb3ZlQ2hpbGQoc2hpcCk7XG4gICAgfSk7XG4gICAgc2hpcHNPbkdhbWVQYWdlLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGdhbWVQYWdlLnJlbW92ZUNoaWxkKHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hpcChzaGlwT3duZXIsIHNob3J0TmFtZSwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgc2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxlbmd0aFwiLCBgJHtsZW5ndGh9YCk7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXBuYW1lXCIsIHNob3J0TmFtZSk7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXAtb3duZXJcIiwgc2hpcE93bmVyKTtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAkezIgKiBsZW5ndGh9dndgO1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBcIjJ2d1wiO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIsIGAkezIgKiBsZW5ndGh9dndgKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgXCIydndcIik7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIFwieFwiKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBcIjJ2d1wiO1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHsyICogbGVuZ3RofXZ3YDtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCBcIjJ2d1wiKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgYCR7MiAqIGxlbmd0aH12d2ApO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBcInlcIik7XG4gICAgfVxuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcIm1vdmluZ1wiKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoc2hvcnROYW1lKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3Qgc2hpcFBsYWNlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnQtcGFnZVwiKTtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBQbGFjZVBhZ2UucXVlcnlTZWxlY3RvcihcIi5tb3ZpbmdcIik7XG4gICAgaWYgKGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInhcIikge1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgXCJ5XCIpO1xuICAgICAgY29uc3Qgd2lkdGggPSBjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIik7XG4gICAgICBjdXJyZW50U2hpcC5zdHlsZS53aWR0aCA9IGhlaWdodDtcbiAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLmhlaWdodCA9IHdpZHRoO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgd2lkdGgpO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCBoZWlnaHQpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPT09IFwieVwiKSB7XG4gICAgICBjdXJyZW50U2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBcInhcIik7XG4gICAgICBjb25zdCB3aWR0aCA9IGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtd2lkdGhcIik7XG4gICAgICBjb25zdCBoZWlnaHQgPSBjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhlaWdodFwiKTtcbiAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLndpZHRoID0gaGVpZ2h0O1xuICAgICAgY3VycmVudFNoaXAuc3R5bGUuaGVpZ2h0ID0gd2lkdGg7XG4gICAgICBjdXJyZW50U2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhlaWdodFwiLCB3aWR0aCk7XG4gICAgICBjdXJyZW50U2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIsIGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIGNlbGwgdmFsdWVcbiAgZnVuY3Rpb24gdXBkYXRlQ2VsbFZhbChwbGF5ZXJOYW1lLCBzaGlwTmFtZSwgc2hpcEVuZCwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgICBjb25zdCByb3cgPSBzaGlwRW5kWzBdO1xuICAgIGNvbnN0IGNvbHVtbiA9IHNoaXBFbmRbMV07XG4gICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIGNvbnN0IHlvdXJUYWJsZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZVwiKTtcbiAgICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB5b3VyVGFibGUucm93c1tyb3ddLmNlbGxzW2NvbHVtbiAtIGldLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHlvdXJUYWJsZS5yb3dzW3JvdyAtIGldLmNlbGxzW2NvbHVtbl0uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgY29uc3Qgb3BwVGFibGUgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LXRhYmxlXCIpO1xuICAgICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIG9wcFRhYmxlLnJvd3Nbcm93XS5jZWxsc1tjb2x1bW4gLSBpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBvcHBUYWJsZS5yb3dzW3JvdyAtIGldLmNlbGxzW2NvbHVtbl0uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgaGlkZGVuU2hpcCA9IHNoaXA7XG4gICAgaGlkZGVuU2hpcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIC8vIFBsYWNlIHNoaXBzIG9uIHRoZSBwbGF5ZXIvYWkgYm9hcmQgb24gZ2FtZS1wbGF5LXBhZ2VcbiAgZnVuY3Rpb24gYXV0b1BsYWNlU2hpcHMocGxheWVyTmFtZSwgc2hpcHNDb29yZCkge1xuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtcImMxXCIsIFwiZDFcIiwgXCJkMlwiLCBcInAxXCIsIFwicDJcIiwgXCJwM1wiLCBcInMxXCIsIFwiczJcIiwgXCJzM1wiLCBcInM0XCJdO1xuICAgIHNoaXBOYW1lcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc2hpcERhdGEgPSBzaGlwc0Nvb3JkW3NoaXBOYW1lXTtcblxuICAgICAgY29uc3QgeyBlbmQsIG9yaWVudCwgbGVuZ3RoIH0gPSBzaGlwRGF0YTtcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKHBsYXllck5hbWUsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCk7XG4gICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJhaVwiKSB7XG4gICAgICAgIC8vIEhpZGUgc2hpcCBvbiB0aGUgYWkgdGFibGVcbiAgICAgICAgaGlkZVNoaXAoc2hpcCk7XG4gICAgICB9XG4gICAgICAvLyBBbHNvIHVwZGF0ZSB0YWJsZSBjZWxsJ3MgZGF0YS12YWx1ZSB3aXRoIHNoaXBOYW1lXG4gICAgICB1cGRhdGVDZWxsVmFsKHBsYXllck5hbWUsIHNoaXBOYW1lLCBlbmQsIGxlbmd0aCwgb3JpZW50KTtcblxuICAgICAgLy8gQ2FsbCBnYW1lcGxheSBwYWdlXG4gICAgICBjb25zdCBnYW1lUGxheVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG4gICAgICBjb25zdCB5b3VyVGFibGUgPSBnYW1lUGxheVBhZ2UucXVlcnlTZWxlY3RvcihcIi55b3VyLXRhYmxlXCIpO1xuICAgICAgY29uc3Qgb3BwVGFibGUgPSBnYW1lUGxheVBhZ2UucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC10YWJsZVwiKTtcbiAgICAgIGdhbWVQbGF5UGFnZS5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICAgIC8vIFBsYWNlIHNoaXBzIG9uIHRoZSBib2FyZCBjb29yZGluYXRlcyBjb3JyZWN0bHlcbiAgICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICAgIGNvbnN0IHJvd0VuZCA9IGVuZFswXTtcbiAgICAgICAgY29uc3QgY29sRW5kID0gZW5kWzFdO1xuICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgIC8vIEdldCBoZWFkIGNlbGwgb24gd2hpY2ggc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICBjb25zdCBjZWxsRW5kID0geW91clRhYmxlLnJvd3Nbcm93RW5kXS5jZWxsc1tjb2xFbmRdO1xuXG4gICAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsRW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGdhbWVQYWdlUmVjdCA9IGdhbWVQbGF5UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBjZWxsUG9zWCA9XG4gICAgICAgICAgICAoKGNlbGxSZWN0LnJpZ2h0IC0gZ2FtZVBhZ2VSZWN0LmxlZnQgLSBjZWxsUmVjdC53aWR0aCAqIGxlbmd0aCAtIDEuNSkgL1xuICAgICAgICAgICAgICB3aW5kb3cuaW5uZXJXaWR0aCkgKlxuICAgICAgICAgICAgMTAwO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NZID0gKChjZWxsUmVjdC50b3AgLSBnYW1lUGFnZVJlY3QudG9wIC0gMS41KSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAxMDA7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7Y2VsbFBvc1h9dndgO1xuICAgICAgICAgIHNoaXAuc3R5bGUudG9wID0gYCR7Y2VsbFBvc1l9dmhgO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGJsdWVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgICAgIC8vIEdldCBoZWFkIGNlbGwgb24gd2hpY2ggc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICBjb25zdCBjZWxsRW5kID0gb3BwVGFibGUucm93c1tyb3dFbmRdLmNlbGxzW2NvbEVuZF07XG5cbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGxFbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVBhZ2VSZWN0ID0gZ2FtZVBsYXlQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NYID1cbiAgICAgICAgICAgICgoY2VsbFJlY3QucmlnaHQgLSBnYW1lUGFnZVJlY3QubGVmdCAtIGNlbGxSZWN0LndpZHRoICogbGVuZ3RoIC0gMS41KSAvXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoKSAqXG4gICAgICAgICAgICAxMDA7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1kgPSAoKGNlbGxSZWN0LnRvcCAtIGdhbWVQYWdlUmVjdC50b3AgLSAxLjUpIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDEwMDtcblxuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2NlbGxQb3NYfXZ3YDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2NlbGxQb3NZfXZoYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgICAgY29uc3Qgcm93RW5kID0gZW5kWzBdO1xuICAgICAgICBjb25zdCBjb2xFbmQgPSBlbmRbMV07XG4gICAgICAgIGlmIChwbGF5ZXJOYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgICAgICAgLy8gR2V0IGhlYWQgY2VsbCBvbiB3aGljaCBzaGlwIGlzIHBsYWNlZFxuICAgICAgICAgIGNvbnN0IGNlbGxFbmQgPSB5b3VyVGFibGUucm93c1tyb3dFbmRdLmNlbGxzW2NvbEVuZF07XG5cbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGxFbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVBhZ2VSZWN0ID0gZ2FtZVBsYXlQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NYID0gKChjZWxsUmVjdC5sZWZ0IC0gZ2FtZVBhZ2VSZWN0LmxlZnQgLSAxLjUpIC8gd2luZG93LmlubmVyV2lkdGgpICogMTAwO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NZID1cbiAgICAgICAgICAgICgoY2VsbFJlY3QuYm90dG9tIC0gZ2FtZVBhZ2VSZWN0LnRvcCAtIGNlbGxSZWN0LndpZHRoICogbGVuZ3RoIC0gMS41KSAvXG4gICAgICAgICAgICAgIHdpbmRvdy5pbm5lckhlaWdodCkgKlxuICAgICAgICAgICAgMTAwO1xuXG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7Y2VsbFBvc1h9dndgO1xuICAgICAgICAgIHNoaXAuc3R5bGUudG9wID0gYCR7Y2VsbFBvc1l9dmhgO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGJsdWVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgICAgIC8vIEdldCBoZWFkIGNlbGwgb24gd2hpY2ggc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICBjb25zdCBjZWxsRW5kID0gb3BwVGFibGUucm93c1tyb3dFbmRdLmNlbGxzW2NvbEVuZF07XG5cbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGxFbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVBhZ2VSZWN0ID0gZ2FtZVBsYXlQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NYID0gY2VsbFJlY3QubGVmdCAtIGdhbWVQYWdlUmVjdC5sZWZ0IC0gMS41O1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NZID0gY2VsbFJlY3QuYm90dG9tIC0gZ2FtZVBhZ2VSZWN0LnRvcCAtIGNlbGxSZWN0LndpZHRoICogbGVuZ3RoIC0gMS41O1xuXG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7Y2VsbFBvc1h9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2NlbGxQb3NZfXJlbWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHMoc2hpcE5hbWVzLCBjYWxsQmFjaykge1xuICAgIGNvbnN0IHNoaXBQbGFjZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VtZW50LXBhZ2VcIik7XG4gICAgY29uc3QgZ2FtZVBsYXlQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuXG4gICAgaWYgKHNoaXBOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEFsbCBzaGlwcyBwbGFjZWQuIE5vdyBkbyB0aGUgbmV4dCB0YXNrc1xuICAgICAgc2hpcFBsYWNlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIGdhbWVQbGF5UGFnZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIC8vIENhbGwgYmFjayBmdW5jdGlvbiB3aGljaCBpcyBiYXNpY2FsbHkgYSBnYW1lTG9vcCBmdW5jdGlvblxuICAgICAgY2FsbEJhY2soKTtcbiAgICAgIC8vIFBsYWNlIHNoaXBzIG9uIHRoZSBib2FyZCBhdCBnYW1lIHBsYXkgcGFnZSBvbiBwbGF5ZXIvYWkgZGVmaW5lZCBwb3NpdGlvbnNcblxuICAgICAgYXV0b1BsYWNlU2hpcHMoXCJwbGF5ZXJcIiwgcGxheWVyLmdhbWVCb2FyZC5zaGlwc0Nvb3JkKTtcbiAgICAgIGF1dG9QbGFjZVNoaXBzKFwiYWlcIiwgYWkuZ2FtZUJvYXJkLnNoaXBzQ29vcmQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaGlwQXJyID0gc2hpcE5hbWVzLnNoaWZ0KCk7XG4gICAgY29uc3Qgc2hvcnROYW1lID0gc2hpcEFyclswXTtcbiAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBBcnJbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcEFyclsyXTtcblxuICAgIGNvbnN0IHNoaXBNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLW5hbWVcIik7XG4gICAgc2hpcE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJQbGFjZSBcIi5jb25jYXQoc2hpcE5hbWUpLmNvbmNhdChcIiBvbiB0aGUgYm9hcmRcIik7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChcInBsYXllclwiLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ4XCIpO1xuXG4gICAgc2hpcFBsYWNlUGFnZS5hcHBlbmRDaGlsZChzaGlwKTtcblxuICAgIGZ1bmN0aW9uIGRyYWdTaGlwKGUpIHtcbiAgICAgIGlmICghaXNQbGFjZWQpIHtcbiAgICAgICAgY29uc3Qgc2hpcFBhZ2VSZWN0ID0gc2hpcFBsYWNlUGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50YWJsZS1jZWxsXCIpKSB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIxcmVtIGRhc2hlZCAjNTk3OGY1XCI7XG4gICAgICAgICAgY29uc3QgY3VycmVudENlbGwgPSBlLnRhcmdldDtcbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGN1cnJlbnRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGBjYWxjKCR7Y2VsbFJlY3QucmlnaHR9cmVtICAtICR7c2hpcFBhZ2VSZWN0LmxlZnR9cmVtIC0gJHtzaGlwLmNsaWVudFdpZHRofXJlbSAtIDEuNXJlbSApYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7Y2VsbFJlY3QuYm90dG9tfXJlbSAtICR7c2hpcFBhZ2VSZWN0LnRvcH1yZW0gLSAke3NoaXAuY2xpZW50SGVpZ2h0fXJlbSAtIDFyZW0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjApXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFggLSBzaGlwUGFnZVJlY3QubGVmdCAtIHNoaXAuY2xpZW50V2lkdGh9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WSAtIHNoaXBQYWdlUmVjdC50b3AgLSBzaGlwLmNsaWVudEhlaWdodH1yZW1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgc2hpcCBhbG9uZyB3aXRoIHRoZSBtb3VzZVxuICAgIHNoaXBQbGFjZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG5cbiAgICAvLyBDaGFuZ2Ugb3JpZW50YXRpb24gb2Ygc2hpcFxuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IHNoaXBQbGFjZVBhZ2UucXVlcnlTZWxlY3RvcihcIi5yb3RhdGUtYnRuXCIpO1xuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlT3JpZW50YXRpb24pO1xuXG4gICAgZnVuY3Rpb24gZHJvcFNoaXAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudGFibGUtY2VsbFwiKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2VsbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpLCAxMCk7XG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpLCAxMCk7XG5cbiAgICAgICAgaWYgKHNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPT09IFwieFwiKSB7XG4gICAgICAgICAgaWYgKHBsYXllci5nYW1lQm9hcmQuaXNWYWxpZFBvcyhyb3csIGNvbCwgbGVuZ3RoLCBcInhcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBSZWN0ID0gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQYWdlUmVjdCA9IHNoaXBQbGFjZVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwWCA9IHNoaXBSZWN0LmxlZnQgLSBzaGlwUGFnZVJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBZID0gc2hpcFJlY3QudG9wIC0gc2hpcFBhZ2VSZWN0LnRvcDtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NoaXBYfXJlbWA7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7c2hpcFl9cmVtIC0gMXJlbSlgO1xuICAgICAgICAgICAgaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwibW92aW5nXCIpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uY2Ugc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICAgIHNoaXBQbGFjZVBhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wU2hpcCk7XG4gICAgICAgICAgICAvLyBTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkuIE5vdyB1cGRhdGUgdGhlIDJEIGJvYXJkIGFycmF5XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ4XCIpO1xuICAgICAgICAgICAgcGxhY2VTaGlwcyhzaGlwTmFtZXMuc2xpY2UoKSwgY2FsbEJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInlcIikge1xuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmlzVmFsaWRQb3Mocm93LCBjb2wsIGxlbmd0aCwgXCJ5XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwUmVjdCA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwUGFnZVJlY3QgPSBzaGlwUGxhY2VQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFggPSBzaGlwUmVjdC5sZWZ0IC0gc2hpcFBhZ2VSZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBzaGlwWSA9IHNoaXBSZWN0LnRvcCAtIHNoaXBQYWdlUmVjdC50b3A7XG5cbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NoaXBYfXJlbWA7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7c2hpcFl9cmVtIC0gMXJlbSlgO1xuICAgICAgICAgICAgaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwibW92aW5nXCIpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uY2Ugc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICAgIHNoaXBQbGFjZVBhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wU2hpcCk7XG4gICAgICAgICAgICAvLyBTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkuIE5vdyB1cGRhdGUgdGhlIDJEIGJvYXJkIGFycmF5XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ5XCIpO1xuICAgICAgICAgICAgcGxhY2VTaGlwcyhzaGlwTmFtZXMuc2xpY2UoKSwgY2FsbEJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQbGFjZSBzaGlwIG9uIHRoZSBib2FyZCBvbiBtb3VzZSBjbGlja1xuICAgIHNoaXBQbGFjZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyb3BTaGlwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVJbml0UGFnZSgpIHtcbiAgICBjb25zdCBpbml0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5pdGlhbC1wYWdlXCIpO1xuICAgIGluaXRQYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVNoaXBQYWdlKCkge1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIHNoaXBQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1NoaXBQYWdlKCkge1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIHNoaXBQYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0dhbWVQYWdlKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUdhbWVQYWdlKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU1vZGFsQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlci1jb250YWluZXJcIik7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuTWVzc2FnZSh0dXJuKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVybi1tZXNzYWdlXCIpO1xuICAgIGlmICh0dXJuID09PSBcInBsYXllclwiKSBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJZb3VyIFR1cm5cIjtcbiAgICBlbHNlIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkFJJ3MgdHVyblwiO1xuICB9XG4gIC8vIFVwZGF0ZSBjZWxsIGhpdCBzdGF0dXMgaW4gRE9NXG4gIGZ1bmN0aW9uIHVwZGF0ZUNlbGxIaXQoY2VsbCwgaGl0U3RhdHVzKSB7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGNlbGw7XG4gICAgaWYgKGhpdFN0YXR1cyA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICB0YXJnZXRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJtaXNzXCIpO1xuICAgICAgdGFyZ2V0Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiZmRiZmVcIjtcbiAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyAhPT0gXCJoaXRcIiAmJiBoaXRTdGF0dXMgIT09IFwibWlzc1wiKSB7XG4gICAgICB0YXJnZXRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJoaXRcIik7XG4gICAgICB0YXJnZXRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hhbmdlIGNvbG9yIG9mIHRoZSBzdW5rIHNoaXAgb24gdGhlIERPTVxuXG4gIGZ1bmN0aW9uIHNoaXBTdW5rKHNoaXBPd25lciwgc2hpcE5hbWUpIHtcbiAgICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgICAvLyBGaW5kIGFsbCBzaGlwcyBvbiBnYW1lIHBhZ2VcbiAgICBjb25zdCBzaGlwc05vZGVMaXN0ID0gZ2FtZVBhZ2UucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIGNvbnN0IHNoaXBzQXJyID0gQXJyYXkuZnJvbShzaGlwc05vZGVMaXN0KTtcbiAgICBsZXQgc3Vua1NoaXA7XG4gICAgc2hpcHNBcnIuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwbmFtZVwiKTtcbiAgICAgIGNvbnN0IG93bmVyID0gc2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXAtb3duZXJcIik7XG4gICAgICBpZiAobmFtZSA9PT0gc2hpcE5hbWUgJiYgb3duZXIgPT09IHNoaXBPd25lcikgc3Vua1NoaXAgPSBzaGlwO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHN1bmtTaGlwKTtcbiAgICBzdW5rU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjRyZW0gc29saWQgcmVkXCI7XG4gICAgc3Vua1NoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNDUwYTBhXCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc2V0VGFibGVzLFxuICAgIHBsYWNlU2hpcHMsXG4gICAgcmVtb3ZlU2hpcHMsXG4gICAgaGlkZUluaXRQYWdlLFxuICAgIGhpZGVTaGlwUGFnZSxcbiAgICBzaG93U2hpcFBhZ2UsXG4gICAgc2hvd0dhbWVQYWdlLFxuICAgIGhpZGVHYW1lUGFnZSxcbiAgICBoaWRlTW9kYWxDb250YWluZXIsXG4gICAgYXV0b1BsYWNlU2hpcHMsXG4gICAgdHVybk1lc3NhZ2UsXG4gICAgdXBkYXRlQ2VsbEhpdCxcbiAgICBzaGlwU3VuayxcbiAgfTtcbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmFsbFN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5zaGlwc0Nvb3JkID0ge307XG4gIH1cblxuICBidWlsZEJvYXJkKCkge1xuICAgIGZvciAobGV0IHIgPSAwOyByIDwgMTA7IHIgKz0gMSkge1xuICAgICAgY29uc3Qgcm93ID0gW107XG4gICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDEwOyBjICs9IDEpIHtcbiAgICAgICAgcm93LnB1c2goXCJlbXB0eVwiKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm9hcmQucHVzaChyb3cpO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0Qm9hcmQoKSB7XG4gICAgLy8gRmlyc3QgIHJlc2V0IGJvYXJkIGFuZCB0aGVuIGJ1aWxkIGl0IHdpdGggZW1wdHkgY2VsbHNcbiAgICB0aGlzLmJvYXJkID0gW107XG4gICAgdGhpcy5idWlsZEJvYXJkKCk7XG4gIH1cblxuICBpc1ZhbGlkUG9zKHJvdywgY29sLCBsZW5ndGgsIG9yaWVudCkge1xuICAgIGlmIChvcmllbnQgPT09IFwieFwiICYmIGNvbCArIDEgLSBsZW5ndGggPj0gMCkge1xuICAgICAgY29uc3QgYm9hcmRSb3cgPSB0aGlzLmJvYXJkW3Jvd107XG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpID4gY29sIC0gbGVuZ3RoOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKGJvYXJkUm93W2ldICE9PSBcImVtcHR5XCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAob3JpZW50ID09PSBcInlcIiAmJiByb3cgKyAxIC0gbGVuZ3RoID49IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPiByb3cgLSBsZW5ndGg7IGkgLT0gMSkge1xuICAgICAgICBpZiAodGhpcy5ib2FyZFtpXVtjb2xdICE9PSBcImVtcHR5XCIpIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaGlwTmFtZSwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgY29uc3QgYm9hcmRSb3cgPSB0aGlzLmJvYXJkW3Jvd107XG4gICAgICBmb3IgKGxldCBpID0gY29sOyBpID4gY29sIC0gbGVuZ3RoOyBpIC09IDEpIHtcbiAgICAgICAgYm9hcmRSb3dbaV0gPSBzaGlwTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPiByb3cgLSBsZW5ndGg7IGkgLT0gMSkge1xuICAgICAgICB0aGlzLmJvYXJkW2ldW2NvbF0gPSBzaGlwTmFtZTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gU2F2ZSB0aGlzIHNoaXAncyBjb29yZGluYXRlc1xuICAgIHRoaXMudXBkYXRlU2hpcHNDb29yZChyb3csIGNvbCwgc2hpcE5hbWUsIGxlbmd0aCwgb3JpZW50KTtcbiAgfVxuXG4gIHVwZGF0ZVNoaXBzQ29vcmQocm93LCBjb2wsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCkge1xuICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICBjb25zdCBzaGlwID0ge307XG4gICAgICBzaGlwLnN0YXJ0ID0gW3JvdywgY29sICsgMSAtIGxlbmd0aF07XG4gICAgICBzaGlwLmVuZCA9IFtyb3csIGNvbF07XG4gICAgICBzaGlwLm9yaWVudCA9IG9yaWVudDtcbiAgICAgIHNoaXAubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgdGhpcy5zaGlwc0Nvb3JkW3NoaXBOYW1lXSA9IHNoaXA7XG4gICAgfVxuICAgIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICBjb25zdCBzaGlwID0ge307XG4gICAgICBzaGlwLnN0YXJ0ID0gW3JvdyArIDEgLSBsZW5ndGgsIGNvbF07XG4gICAgICBzaGlwLmVuZCA9IFtyb3csIGNvbF07XG4gICAgICBzaGlwLm9yaWVudCA9IG9yaWVudDtcbiAgICAgIHNoaXAubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgdGhpcy5zaGlwc0Nvb3JkW3NoaXBOYW1lXSA9IHNoaXA7XG4gICAgfVxuICB9XG5cbiAgI2dldFN0YXJ0SW5kZXgobGVuZ3RoLCBvcmllbnQpIHtcbiAgICBsZXQgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgIGxldCByb3c7XG4gICAgbGV0IGNvbDtcbiAgICBsZXQgY2VsbDtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgd2hpbGUgKCFpbmRleEZvdW5kKSB7XG4gICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcblxuICAgICAgICBjb2wgPSBsZW5ndGggLSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gKGxlbmd0aCAtIDEpKSk7XG4gICAgICAgIGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgY3VycmVudCBjZWxsIGlzIGVtcHR5IGFuZCBwcmV2ICduLTEnIGNlbGxzIGFyZSBlbXB0eSBob3Jpem9udGFsbHlcbiAgICAgICAgaWYgKGNlbGwgPT09IFwiZW1wdHlcIikge1xuICAgICAgICAgIGluZGV4Rm91bmQgPSB0cnVlO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sIC0gaV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9uZSBhZGRpdGlvbmFsIGNoZWNrIGFmdGVyIGluZGV4IGlzIGZvdW5kIGlzIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBhdGxlYXN0IG9uZSBjZWxsIGVtcHR5IGJldHdlZW4gY29uc2VjdXRpdmUgc2hpcHMgaW4gb3JkZXIgdG8gbWFrZSBhdXRvIHNoaXBzIHBsYWNlbWVudCBtb3JlIGxvZ2ljYWwgYW5kIGxlc3MgcmFuZG9tLlxuICAgICAgICBpZiAoaW5kZXhGb3VuZCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAncyBhbGwgY2VsbHMgYXJlIGF3YXkgZnJvbSBjb3JuZXIgcm93cyBhbmQgY29sdW1uc1xuICAgICAgICAgIGlmIChyb3cgKyAxIDw9IDkgJiYgcm93IC0gMSA+PSAwICYmIGNvbCArIDEgPD0gOSAmJiBjb2wgLSBsZW5ndGggLSAxID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sICsgMV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbCAtIGxlbmd0aF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyArIDFdW2NvbCAtIGldICE9PSBcImVtcHR5XCIgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyAtIDFdW2NvbCAtIGldICE9PSBcImVtcHR5XCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvdyA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgKyAxXVtjb2wgLSBpXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3cgPT09IDkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gMV1bY29sIC0gaV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sID09PSA5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbCAtIGxlbmd0aF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2wgLSBsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sICsgMV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICB3aGlsZSAoIWluZGV4Rm91bmQpIHtcbiAgICAgICAgcm93ID0gbGVuZ3RoIC0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIChsZW5ndGggLSAxKSkpO1xuICAgICAgICBjb2wgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgY3VycmVudCBjZWxsIGlzIGVtcHR5IGFuZCBwcmV2ICduLTEnIGNlbGxzIGFyZSBlbXB0eSB2ZXJ0aWNhbGx5XG4gICAgICAgIGlmIChjZWxsID09PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICBpbmRleEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgLSBpXVtjb2xdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT25lIGFkZGl0aW9uYWwgY2hlY2sgYWZ0ZXIgaW5kZXggaXMgZm91bmQgaXMgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIGF0bGVhc3Qgb25lIGNlbGwgZW1wdHkgYmV0d2VlbiBjb25zZWN1dGl2ZSBzaGlwcyBpbiBvcmRlciB0byBtYWtlIGF1dG8gc2hpcHMgcGxhY2VtZW50IG1vcmUgbG9naWNhbCBhbmQgbGVzcyByYW5kb20uXG4gICAgICAgIGlmIChpbmRleEZvdW5kKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCdzIGFsbCBjZWxscyBhcmUgYXdheSBmcm9tIGNvcm5lciByb3dzIGFuZCBjb2x1bW5zXG4gICAgICAgICAgaWYgKHJvdyArIDEgPD0gOSAmJiByb3cgLSBsZW5ndGggLSAxID49IDAgJiYgY29sICsgMSA8PSA5ICYmIGNvbCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93ICsgMV1bY29sXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyAtIGxlbmd0aF1bY29sXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93IC0gaV1bY29sICsgMV0gIT09IFwiZW1wdHlcIiB8fFxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93IC0gaV1bY29sIC0gMV0gIT09IFwiZW1wdHlcIlxuICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbCA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgLSBpXVtjb2wgKyAxXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2wgPT09IDkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gaV1bY29sIC0gMV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93ID09PSA5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgLSBsZW5ndGhdW2NvbF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3cgLSBsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyArIDFdW2NvbF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFtyb3csIGNvbF07XG4gIH1cblxuICAjcGxhY2VTaW5nbGVTaGlwKHNoaXAsIG9yaWVudCkge1xuICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcFswXTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwWzJdO1xuICAgIC8vIFVzZSBhcnJheSBkZXN0cnVjdHVyaW5nIGZvciBhY2NjZXNzaW5nIGVsZW1lbnRzXG4gICAgY29uc3QgW3JvdywgY29sXSA9IHRoaXMuI2dldFN0YXJ0SW5kZXgobGVuZ3RoLCBvcmllbnQpO1xuICAgIC8vIFVwZGF0ZSBhaSBib2FyZCB3aXRoIHRoaXMgc2hpcCBpbmZvXG5cbiAgICB0aGlzLnVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaGlwTmFtZSwgbGVuZ3RoLCBvcmllbnQpO1xuICB9XG5cbiAgYXV0b0ZpbGxTaGlwc0JvYXJkKHNoaXBzQXJyKSB7XG4gICAgY29uc3Qgb3JpZW50QXJyID0gW1wieFwiLCBcInlcIl07XG4gICAgc2hpcHNBcnIuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgLy8gY2hvc2Ugb3JpZW50YXRpb24gcmFuZG9tbHlcbiAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgICBjb25zdCBvcmllbnQgPSBvcmllbnRBcnJbaW5kZXhdO1xuXG4gICAgICB0aGlzLiNwbGFjZVNpbmdsZVNoaXAoc2hpcCwgb3JpZW50KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFJlY2VpdmUgYXR0YWNrIGZ1bmN0aW9uIHRvIGNoZWNrIHdoZXRoZXIgdGhhdCBzaG90IGhpdCBhbnkgc2hpcCBvciBnb3QgbWlzc2VkXG4gIHJlY2VpdmVBdHRhY2socG9zaXRpb24pIHtcbiAgICBjb25zdCByb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBjb2wgPSBwb3NpdGlvblsxXTtcbiAgICBjb25zdCBjZWxsU3RhdHVzID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgaWYgKGNlbGxTdGF0dXMgPT09IFwiZW1wdHlcIikge1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBcIm1pc3NcIjtcbiAgICB9IGVsc2UgaWYgKGNlbGxTdGF0dXMgIT09IFwibWlzc1wiICYmIGNlbGxTdGF0dXMgIT09IFwiaGl0XCIpIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gXCJoaXRcIjtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGF0dGFja2luZyBjZWxsIHN0YXR1c1xuICAgIHJldHVybiBjZWxsU3RhdHVzO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcGxheWVyKCkge1xuICBjb25zdCBuZXdQbGF5ZXIgPSB7fTtcbiAgbmV3UGxheWVyLmMxID0gbmV3IFNoaXAoXCJjMVwiLCA0KTtcbiAgbmV3UGxheWVyLmQxID0gbmV3IFNoaXAoXCJkMVwiLCAzKTtcbiAgbmV3UGxheWVyLmQyID0gbmV3IFNoaXAoXCJkMlwiLCAzKTtcbiAgbmV3UGxheWVyLnAxID0gbmV3IFNoaXAoXCJwMVwiLCAyKTtcbiAgbmV3UGxheWVyLnAyID0gbmV3IFNoaXAoXCJwMlwiLCAyKTtcbiAgbmV3UGxheWVyLnAzID0gbmV3IFNoaXAoXCJwM1wiLCAyKTtcbiAgbmV3UGxheWVyLnMxID0gbmV3IFNoaXAoXCJzMVwiLCAxKTtcbiAgbmV3UGxheWVyLnMyID0gbmV3IFNoaXAoXCJzMlwiLCAxKTtcbiAgbmV3UGxheWVyLnMzID0gbmV3IFNoaXAoXCJzM1wiLCAxKTtcbiAgbmV3UGxheWVyLnM0ID0gbmV3IFNoaXAoXCJzNFwiLCAxKTtcbiAgbmV3UGxheWVyLmFsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW1wiYzFcIiwgXCJkMVwiLCBcImQyXCIsIFwicDFcIiwgXCJwMlwiLCBcInAzXCIsIFwiczFcIiwgXCJzMlwiLCBcInMzXCIsIFwiczRcIl07XG4gICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgIHNoaXBOYW1lcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIW5ld1BsYXllcltzaGlwXS5zdW5rKSB7XG4gICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICBuZXdQbGF5ZXIucmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbmV3UGxheWVyW3NoaXBdLnJlc2V0U2hpcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIG5ld1BsYXllci5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIHJldHVybiBuZXdQbGF5ZXI7XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdENvdW50KSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG5cbiAgcmVzZXRTaGlwKCkge1xuICAgIHRoaXMuaGl0Q291bnQgPSAwXG4gICAgdGhpcy5zdW5rID0gMFxuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0Q291bnQgKz0gMTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlU2hlZXRzL21leWVyLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKioqKioqIEVsYWQgU2hlY2h0ZXIncyBSRVNFVCAqKioqKioqL1xuLyoqKiBib3ggc2l6aW5nIGJvcmRlci1ib3ggZm9yIGFsbCBlbGVtZW50cyAqKiovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYSB7XG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiB7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5maWd1cmUge1xuICAgICBtYXJnaW46IDA7XG59XG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgIGJvcmRlcjogMDtcbiAgICAgcGFkZGluZzogMDtcbiAgICAgbWFyZ2luOiAwO1xufVxudWwsXG5vbCxcbmRkIHtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxucCB7XG4gICAgIG1hcmdpbjogMDtcbn1cbmNpdGUge1xuICAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5maWVsZHNldCB7XG4gICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgcGFkZGluZzogMDtcbiAgICAgbWFyZ2luOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvbXktY3NzLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7QUFDckMsK0NBQStDO0FBQy9DOzs7S0FHSyxzQkFBc0I7QUFDM0I7QUFDQTtLQUNLLHFCQUFxQjtLQUNyQixjQUFjO0tBQ2QsZUFBZTtBQUNwQjtBQUNBO0tBQ0ssNkJBQTZCO0tBQzdCLGNBQWM7S0FDZCxlQUFlO0tBQ2YsVUFBVTtLQUNWLGVBQWU7QUFDcEI7QUFDQTtLQUNLLFNBQVM7QUFDZDtBQUNBO0tBQ0ssU0FBUztLQUNULFVBQVU7S0FDVixTQUFTO0FBQ2Q7QUFDQTs7O0tBR0ssU0FBUztLQUNULFVBQVU7S0FDVixnQkFBZ0I7QUFDckI7QUFDQTs7Ozs7O0tBTUssU0FBUztLQUNULGtCQUFrQjtLQUNsQixvQkFBb0I7QUFDekI7QUFDQTtLQUNLLFNBQVM7QUFDZDtBQUNBO0tBQ0ssa0JBQWtCO0FBQ3ZCO0FBQ0E7S0FDSyxlQUFlO0tBQ2YsVUFBVTtLQUNWLFNBQVM7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqIEVsYWQgU2hlY2h0ZXIncyBSRVNFVCAqKioqKioqL1xcbi8qKiogYm94IHNpemluZyBib3JkZXItYm94IGZvciBhbGwgZWxlbWVudHMgKioqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmEge1xcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbiB7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgICAgcGFkZGluZzogMDtcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZmlndXJlIHtcXG4gICAgIG1hcmdpbjogMDtcXG59XFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICAgYm9yZGVyOiAwO1xcbiAgICAgcGFkZGluZzogMDtcXG4gICAgIG1hcmdpbjogMDtcXG59XFxudWwsXFxub2wsXFxuZGQge1xcbiAgICAgbWFyZ2luOiAwO1xcbiAgICAgcGFkZGluZzogMDtcXG4gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gICAgIG1hcmdpbjogMDtcXG4gICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5wIHtcXG4gICAgIG1hcmdpbjogMDtcXG59XFxuY2l0ZSB7XFxuICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmZpZWxkc2V0IHtcXG4gICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgIHBhZGRpbmc6IDA7XFxuICAgICBtYXJnaW46IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXG4gKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1zaXplOiBjYWxjKDE2cmVtICsgKDIwIC0gMTYpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoMTkyMCAtIDMyMCkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDJ2dyBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRvdXJuZXlcIjtcbiAgZm9udDogYm9sZDtcbiAgZm9udC1zaXplOiBjYWxjKDI4cmVtICsgKDgwIC0gMjgpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoMTkyMCAtIDMyMCkpKTtcbiAgY29sb3I6ICM1MDA3MjQ7XG4gIG1hcmdpbi1ib3R0b206IDV2dztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmluaXRpYWwtcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogODB2aDtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyMjAwNjtcbiAgYm94LXNoYWRvdzogM3JlbSAzcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDEwdmg7XG4gIGxlZnQ6IDIwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS10aXRsZS5pbml0LXBhZ2Uge1xuICBjb2xvcjogIzU5NzhmNTtcbn1cblxuYnV0dG9uLmdhbWUtc3RhcnQuaW5pdC1wYWdlLFxuLnBsYXktYWdhaW4ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTc4ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbn1cblxuLmluaXRpYWwtcGFnZS5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5pdGlhbC1wYWdlLmhpZGUgPiA6bnRoLWNoaWxkKG4pIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5pdGlhbC1wYWdlLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLnNoaXAtcGxhY2VtZW50LXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmc6IDJ2dztcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYjhiNztcbiAgYm94LXNoYWRvdzogM3JlbSAzcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDEwdmg7XG4gIGxlZnQ6IDIwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtcGFnZS5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zaGlwLXBsYWNlbWVudC1wYWdlLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uc2hpcC1uYW1lIHtcbiAgcGFkZGluZzogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb3RhdGUtYnRuIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMwZjc2NmU7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBnYXA6IDF2dztcbn1cblxuLnJvdGF0ZS1idG46aG92ZXIge1xuICBvdXRsaW5lOiAxcmVtIHNvbGlkICM2MzYxNjE7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG59XG5cbi5yb3RhdGUtdGV4dCB7XG4gIGJvcmRlci1ib3R0b206IDFyZW0gZGFzaGVkICMwZjc2NmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ucmFuZG9tLWljb24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgd2lkdGg6IGNhbGMoMTZyZW0gKyAoMjIgLSAxNikgKiAoKDEwMHZ3IC0gMzIwcmVtKSAvICg5MjAgLSAzMjApKSk7XG59XG5cbi5zaGlwLXBsYWNlbWVudC1wYWdlIC55b3VyLXRhYmxlIC50YWJsZS1jZWxsIHtcbiAgYm9yZGVyOiAxcmVtIHNvbGlkIHJnYigxMTEsIDExMSwgMjE0KTtcbn1cblxuLmdhbWVwbGF5LXBhZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyOiAxcmVtIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xufVxuXG4uZ2FtZXBsYXktcGFnZS5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5nYW1lcGxheS1wYWdlLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4udHVybi1tZXNzYWdlIHtcbiAgd2lkdGg6IDEydnc7XG4gIHBhZGRpbmc6IDAuNXZ3O1xuICBtYXJnaW46IDF2dyBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xuICBib3JkZXItcmFkaXVzOiAzcmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ncmlkcy1jb250YWluZXIge1xuICBtYXJnaW46IDJ2dyBhdXRvO1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiAyNXZ3O1xuICBwYWRkaW5nOiAydnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGdhcDogNXZ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ueW91ci1ncmlkLFxuLm9wcG9uZW50LWdyaWQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAxdnc7XG59XG5cbi55b3VyLXRhYmxlLFxuLm9wcG9uZW50LXRhYmxlIHtcbiAgd2lkdGg6IDIwdnc7XG4gIGhlaWdodDogMjB2dztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi50YWJsZS1jZWxsIHtcbiAgd2lkdGg6IDJ2dztcbiAgaGVpZ2h0OiAydnc7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5tb3Zpbmcge1xuICBib3JkZXI6IDFyZW0gZGFzaGVkICM1OTc4ZjU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ucGxhY2VkIHtcbiAgYm9yZGVyOiAycmVtIHNvbGlkIGJsdWU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLnN1bmsge1xuICBib3JkZXI6IDNyZW0gc29saWQgcmVkO1xufVxuXG4ueW91ci10YWJsZSAudGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXJlbSBzb2xpZCAjNTk3OGY1O1xufVxuXG4ueW91ci10YWJsZSAudGFibGUtY2VsbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm9wcG9uZW50LXRhYmxlIC50YWJsZS1jZWxsIHtcbiAgYm9yZGVyOiAxcmVtIHNvbGlkICNjY2M7XG59XG5cbi55b3VyLXRhYmxlLWdhbWVwbGF5LXBhZ2UgOm50aC1jaGlsZChuKSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm9wcG9uZW50LXRhYmxlIC50YWJsZS1jZWxsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5nYW1lb3Zlci1jb250YWluZXIuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ2FtZW92ZXItY29udGFpbmVyLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcblxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5nYW1lb3ZlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGxlZnQ6IDMwdnc7XG4gIHRvcDogMzB2aDtcbiAgei1pbmRleDogNDtcbiAgd2lkdGg6IDQwdnc7XG4gIGhlaWdodDogNDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyMjAwNjtcbiAgY29sb3I6ICNjY2M7XG4gIGJvcmRlcjogMXJlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbn1cblxuLm1vZGFsLW1zZyB7XG4gIGZvbnQtc2l6ZTogNDhyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZVNoZWV0cy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0VBQXNFO0VBQ3RFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1Ysc0VBQXNFO0VBQ3RFLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osVUFBVTtFQUNWLHlCQUF5QjtFQUN6Qiw2Q0FBNkM7RUFDN0MsU0FBUztFQUNULFVBQVU7RUFDVixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7RUFDVix5QkFBeUI7RUFDekIsNkNBQTZDO0VBQzdDLFNBQVM7RUFDVCxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpRUFBaUU7QUFDbkU7O0FBRUE7RUFDRSxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osWUFBWTtFQUNaLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsZUFBZTtFQUNmLFFBQVE7RUFDUixtQkFBbUI7QUFDckI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFFBQVE7QUFDVjs7QUFFQTs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixvQ0FBb0M7RUFDcEMsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtDQUFrQztFQUNsQyxRQUFRO0VBQ1IsU0FBUztFQUNULHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsY0FBYzs7RUFFZCxvQ0FBb0M7RUFDcEMsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixTQUFTO0VBQ1QsVUFBVTtFQUNWLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgZm9udC1zaXplOiBjYWxjKDE2cmVtICsgKDIwIC0gMTYpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoMTkyMCAtIDMyMCkpKTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXJnaW46IDJ2dyBhdXRvO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJUb3VybmV5XFxcIjtcXG4gIGZvbnQ6IGJvbGQ7XFxuICBmb250LXNpemU6IGNhbGMoMjhyZW0gKyAoODAgLSAyOCkgKiAoKDEwMHZ3IC0gMzIwcmVtKSAvICgxOTIwIC0gMzIwKSkpO1xcbiAgY29sb3I6ICM1MDA3MjQ7XFxuICBtYXJnaW4tYm90dG9tOiA1dnc7XFxuICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uaW5pdGlhbC1wYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgei1pbmRleDogMztcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjIwMDY7XFxuICBib3gtc2hhZG93OiAzcmVtIDNyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAyMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5nYW1lLXRpdGxlLmluaXQtcGFnZSB7XFxuICBjb2xvcjogIzU5NzhmNTtcXG59XFxuXFxuYnV0dG9uLmdhbWUtc3RhcnQuaW5pdC1wYWdlLFxcbi5wbGF5LWFnYWluIHtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBwYWRkaW5nOiA1cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NzhmNTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi5pbml0aWFsLXBhZ2UuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5pbml0aWFsLXBhZ2UuaGlkZSA+IDpudGgtY2hpbGQobikge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5pbml0aWFsLXBhZ2Uuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1wYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMnZ3O1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmI4Yjc7XFxuICBib3gtc2hhZG93OiAzcmVtIDNyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAyMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1wYWdlLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LXBhZ2Uuc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5zaGlwLW5hbWUge1xcbiAgcGFkZGluZzogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucm90YXRlLWJ0biB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGNvbG9yOiAjMGY3NjZlO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4ucm90YXRlLWJ0bjpob3ZlciB7XFxuICBvdXRsaW5lOiAxcmVtIHNvbGlkICM2MzYxNjE7XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4ucm90YXRlLXRleHQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXJlbSBkYXNoZWQgIzBmNzY2ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucmFuZG9tLWljb24ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWR0aDogY2FsYygxNnJlbSArICgyMiAtIDE2KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDkyMCAtIDMyMCkpKTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LXBhZ2UgLnlvdXItdGFibGUgLnRhYmxlLWNlbGwge1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkIHJnYigxMTEsIDExMSwgMjE0KTtcXG59XFxuXFxuLmdhbWVwbGF5LXBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLmdhbWVwbGF5LXBhZ2UuaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lcGxheS1wYWdlLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi50dXJuLW1lc3NhZ2Uge1xcbiAgd2lkdGg6IDEydnc7XFxuICBwYWRkaW5nOiAwLjV2dztcXG4gIG1hcmdpbjogMXZ3IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdyaWRzLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDJ2dyBhdXRvO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDI1dnc7XFxuICBwYWRkaW5nOiAydnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDV2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55b3VyLWdyaWQsXFxuLm9wcG9uZW50LWdyaWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLnlvdXItdGFibGUsXFxuLm9wcG9uZW50LXRhYmxlIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAyMHZ3O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YWJsZS1jZWxsIHtcXG4gIHdpZHRoOiAydnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5tb3Zpbmcge1xcbiAgYm9yZGVyOiAxcmVtIGRhc2hlZCAjNTk3OGY1O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYm9yZGVyOiAycmVtIHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uc3VuayB7XFxuICBib3JkZXI6IDNyZW0gc29saWQgcmVkO1xcbn1cXG5cXG4ueW91ci10YWJsZSAudGFibGUtY2VsbCB7XFxuICBib3JkZXI6IDFyZW0gc29saWQgIzU5NzhmNTtcXG59XFxuXFxuLnlvdXItdGFibGUgLnRhYmxlLWNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ub3Bwb25lbnQtdGFibGUgLnRhYmxlLWNlbGwge1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkICNjY2M7XFxufVxcblxcbi55b3VyLXRhYmxlLWdhbWVwbGF5LXBhZ2UgOm50aC1jaGlsZChuKSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4ub3Bwb25lbnQtdGFibGUgLnRhYmxlLWNlbGw6aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB6LWluZGV4OiA1O1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lci5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgd2lkdGg6IDA7XFxuICBoZWlnaHQ6IDA7XFxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDFzO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxufVxcblxcbi5nYW1lb3ZlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGxlZnQ6IDMwdnc7XFxuICB0b3A6IDMwdmg7XFxuICB6LWluZGV4OiA0O1xcbiAgd2lkdGg6IDQwdnc7XFxuICBoZWlnaHQ6IDQwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIyMDA2O1xcbiAgY29sb3I6ICNjY2M7XFxuICBib3JkZXI6IDFyZW0gc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4ubW9kYWwtbXNnIHtcXG4gIGZvbnQtc2l6ZTogNDhyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCB7XG4gICAgIGZvbnQtc2l6ZTogMXB4OyAvKmZvciB1c2luZyBSRU0gdW5pdHMqL1xufVxuYm9keSB7XG4gICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgXCJSb2JvdG9cIiwgXCJPeHlnZW5cIiwgXCJVYnVudHVcIiwgXCJGaXJhIFNhbnNcIiwgXCJEcm9pZCBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZjtcbiAgICAgZm9udC1zaXplOiAxNnJlbTtcbiAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgY29sb3I6ICMyMjI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZVNoZWV0cy90eXBvZ3JhcGh5LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtLQUNLLGNBQWMsRUFBRSxzQkFBc0I7QUFDM0M7QUFDQTtLQUNLLGlKQUFpSjtLQUNqSixnQkFBZ0I7S0FDaEIsZ0JBQWdCO0tBQ2hCLGdCQUFnQjtLQUNoQixXQUFXO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwge1xcbiAgICAgZm9udC1zaXplOiAxcHg7IC8qZm9yIHVzaW5nIFJFTSB1bml0cyovXFxufVxcbmJvZHkge1xcbiAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXFxcIlNlZ29lIFVJXFxcIiwgXFxcIlJvYm90b1xcXCIsIFxcXCJPeHlnZW5cXFwiLCBcXFwiVWJ1bnR1XFxcIiwgXFxcIkZpcmEgU2Fuc1xcXCIsIFxcXCJEcm9pZCBTYW5zXFxcIiwgXFxcIkhlbHZldGljYSBOZXVlXFxcIiwgc2Fucy1zZXJpZjtcXG4gICAgIGZvbnQtc2l6ZTogMTZyZW07XFxuICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgbGluZS1oZWlnaHQ6IDEuMztcXG4gICAgIGNvbG9yOiAjMjIyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllci1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21leWVyLXJlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1jc3MtcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teS1jc3MtcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL25vcm1hbGl6ZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHlwb2dyYXBoeS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi4vc3R5bGVTaGVldHMvbWV5ZXItcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZVNoZWV0cy9teS1jc3MtcmVzZXQuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZVNoZWV0cy9ub3JtYWxpemUuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZVNoZWV0cy90eXBvZ3JhcGh5LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVTaGVldHMvc3R5bGVzLmNzc1wiO1xuaW1wb3J0IHJhbmRvbUljb24gZnJvbSBcIi4uL2Fzc2V0cy9pY29ucy9yYW5kb20uc3ZnXCI7XG5cbi8vIEltcG9ydCBtb2R1bGVzIGludG8gbWFpbiBhcHAuanMgZmlsZVxuaW1wb3J0IGRvbU1hbmlwdWxhdGlvbiBmcm9tIFwiLi9kb21cIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgYWkgZnJvbSBcIi4vYWlcIjtcblxuLy8gQ3JlYXRlIGFuZCBhcHBlbmQgc2hpcCByb3RhdGUgaW1hZ2UgaWNvbiB0byB0aGUgcm90YXRlIEJ0blxuY29uc3QgcmFuZEltZyA9IG5ldyBJbWFnZSgpO1xucmFuZEltZy5zcmMgPSByYW5kb21JY29uO1xucmFuZEltZy5jbGFzc0xpc3QuYWRkKFwicmFuZG9tLWljb25cIik7XG5yYW5kSW1nLmFsdCA9IFwiUmFuZG9tIEljb25cIjtcbmNvbnN0IHJvdGF0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlLWJ0blwiKTtcbnJvdGF0ZUJ0bi5hcHBlbmRDaGlsZChyYW5kSW1nKTtcblxuLy8gQnVpbGQgZW1wdHkgZ2FtZSBib2FyZCBmb3IgcGxheWVyMVxucGxheWVyLmdhbWVCb2FyZC5idWlsZEJvYXJkKCk7XG5cbi8vIERlZmluZSBhaSdzIGVtcHR5IGdhbWVCb2FyZFxuYWkuZ2FtZUJvYXJkLmJ1aWxkQm9hcmQoKTtcblxuZnVuY3Rpb24gcmVzZXRHYW1lKCkge1xuICAvLyBSZXNldCBib3RoIGdhbWUgYm9hcmRzXG4gIHBsYXllci5nYW1lQm9hcmQucmVzZXRCb2FyZCgpO1xuICBhaS5nYW1lQm9hcmQucmVzZXRCb2FyZCgpO1xuICAvLyBSZXNldCBkaXNwbGF5IHRhYmxlcyBmb3IgYm90aCBwbGF5ZXJzXG4gIGRvbU1hbmlwdWxhdGlvbi5yZXNldFRhYmxlcygpO1xuICAvLyBSZXNldCBwbGF5ZXIncy9haSdzIHNoaXBzIHN0YXR1c1xuICBwbGF5ZXIucmVzZXRTaGlwcygpO1xuICBhaS5yZXNldFNoaXBzKCk7XG4gIC8vIFJlbW92ZSBzaGlwcyBmcm9tIHRhYmxlc1xuICBkb21NYW5pcHVsYXRpb24ucmVtb3ZlU2hpcHMoKTtcbiAgLy8gTm93IGhpZGUgZ2FtZSBwYWdlXG4gIGRvbU1hbmlwdWxhdGlvbi5oaWRlR2FtZVBhZ2UoKTtcbiAgLy8gU2hvdyBzaGlwIHBsYWNlbWVudCBwYWdlXG4gIGRvbU1hbmlwdWxhdGlvbi5zaG93U2hpcFBhZ2UoKTtcbiAgLy8gTm93IGhpZGUgbW9kYWwgY29udGFpbmVyXG4gIGRvbU1hbmlwdWxhdGlvbi5oaWRlTW9kYWxDb250YWluZXIoKTtcbiAgLy8gTm93IG1hbmFnZSBzaGlwcyBwbGFjZW1lbnRcbiAgbWFuYWdlU2hpcHNQbGFjZW1lbnQoKTtcbn1cblxuLy8gRGVjbGFyZSBnYW1lIE92ZXJcbmZ1bmN0aW9uIGdhbWVPdmVyKHBsYXllck5hbWUpIHtcbiAgY29uc3QgZ2FtZU92ZXJDb250ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlci1jb250YWluZXJcIik7XG4gIGNvbnN0IG1vZGFsTXNnID0gZ2FtZU92ZXJDb250LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWwtbXNnXCIpO1xuICBnYW1lT3ZlckNvbnQuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG5cbiAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgIG1vZGFsTXNnLnRleHRDb250ZW50ID0gXCJZb3UgV2luIVwiO1xuICB9IGVsc2UgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICBtb2RhbE1zZy50ZXh0Q29udGVudCA9IFwiWW91IExvc2UhXCI7XG4gIH1cblxuICAvLyBBY2Nlc3MgcGxheSBhZ2FpbiBidXR0b25cbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWFnYWluXCIpO1xuXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRHYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNHYW1lT3ZlcihwbGF5ZXJOYW1lKSB7XG4gIGxldCBpc1N1bms7XG4gIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICBpc1N1bmsgPSBhaS5hbGxTdW5rKCk7XG4gIH0gZWxzZSBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgIGlzU3VuayA9IHBsYXllci5hbGxTdW5rKCk7XG4gIH1cbiAgcmV0dXJuIGlzU3Vuaztcbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICBjb25zdCBvcHBUYWJsZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIub3Bwb25lbnQtdGFibGVcIik7XG4gIGNvbnN0IHlvdXJUYWJsZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZVwiKTtcblxuICBmdW5jdGlvbiBpbml0VHVybigpIHtcbiAgICBjb25zdCBwbGF5ZXJzID0gW1wicGxheWVyXCIsIFwiYWlcIl07XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICByZXR1cm4gcGxheWVyc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlT3BwVGFibGUoKSB7XG4gICAgY29uc3QgY2VsbHMgPSBvcHBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgb3BwVGFibGUuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgY2VsbENvcHkgPSBjZWxsO1xuICAgICAgY2VsbENvcHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlT3BwVGFibGUoKSB7XG4gICAgY29uc3QgY2VsbHMgPSBvcHBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgb3BwVGFibGUuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgY2VsbENvcHkgPSBjZWxsO1xuICAgICAgY2VsbENvcHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTZXQgaW5pdGlhbCB0dXJuXG4gIGxldCB0dXJuID0gaW5pdFR1cm4oKTtcblxuICBmdW5jdGlvbiB0b2dnbGVUdXJuKCkge1xuICAgIGlmICh0dXJuID09PSBcImFpXCIpIHR1cm4gPSBcInBsYXllclwiO1xuICAgIGVsc2UgdHVybiA9IFwiYWlcIjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZVNoaXBTdGF0dXMocGxheWVyTmFtZSwgc2hpcE5hbWUpIHtcbiAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJhaVwiKSB7XG4gICAgICAvLyBVcGRhdGUgY3VycmVudCBzaGlwIGhpdCBjb3VudFxuICAgICAgYWlbc2hpcE5hbWVdLmhpdCgpO1xuICAgICAgLy8gY2hlY2sgaWYgc2hpcCBzdW5rXG4gICAgICBhaVtzaGlwTmFtZV0uaXNTdW5rKCk7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJOYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgICAvLyBVcGRhdGUgY3VycmVudCBzaGlwIGhpdCBjb3VudFxuICAgICAgcGxheWVyW3NoaXBOYW1lXS5oaXQoKTtcbiAgICAgIC8vIGNoZWNrIGlmIHNoaXAgc3Vua1xuICAgICAgcGxheWVyW3NoaXBOYW1lXS5pc1N1bmsoKTtcbiAgICB9XG4gIH1cblxuICAvLyBwbGF5IGFpIHR1cm5cbiAgZnVuY3Rpb24gYWlUdXJuKCkge1xuICAgIGxldCBwb3NpdGlvbiA9IGFpLmdldEhpdENvb3JkKCk7XG4gICAgd2hpbGUgKCFhaS5pc0F0dGFja1ZhbGlkKHBvc2l0aW9uKSkge1xuICAgICAgcG9zaXRpb24gPSBhaS5nZXRIaXRDb29yZCgpO1xuICAgIH1cblxuICAgIC8vIEdvdCB2YWxpZCBwb3NpdGlvbiB3aGljaCBpcyBlaXRoZXIgc2hpcCBwb3NpdGlvbiBvciBlbXB0eSBjZWxsXG4gICAgY29uc3QgY2VsbFN0YXR1cyA9IHBsYXllci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG5cbiAgICBpZiAoY2VsbFN0YXR1cyAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAvLyBhdHRhY2sgaXMgb24gdGhlIHNoaXBcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gY2VsbFN0YXR1cztcbiAgICAgIC8vIFVwZGF0ZSBzaGlwIGhpdCBzdGF0dXNcbiAgICAgIHVwZGF0ZVNoaXBTdGF0dXMoXCJwbGF5ZXJcIiwgc2hpcE5hbWUpO1xuICAgICAgY29uc3QgaXNTdW5rID0gcGxheWVyW3NoaXBOYW1lXS5pc1N1bmsoKTtcbiAgICAgIGlmIChpc1N1bmspIHtcbiAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnNoaXBTdW5rKFwicGxheWVyXCIsIHNoaXBOYW1lKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGxvc2UgPSBpc0dhbWVPdmVyKFwicGxheWVyXCIpO1xuICAgICAgaWYgKGxvc2UpIGdhbWVPdmVyKFwicGxheWVyXCIpO1xuICAgIH1cbiAgICBjb25zdCB0YXJnZXRDZWxsID0geW91clRhYmxlLnJvd3NbcG9zaXRpb25bMF1dLmNlbGxzW3Bvc2l0aW9uWzFdXTtcbiAgICAvLyBVcGRhdGUgY2VsbCBzdGF0dXMgbWlzcywgaGl0IGV0YyBpbiB0aGUgRE9NXG4gICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUNlbGxIaXQodGFyZ2V0Q2VsbCwgY2VsbFN0YXR1cyk7XG4gICAgLy8gRmluYWxseSBlbmFibGUgb3Bwb25lbnQncyB0YWJsZVxuICAgIGVuYWJsZU9wcFRhYmxlKCk7XG4gICAgLy8gVG9nZ2xlIHR1cm5cbiAgICB0b2dnbGVUdXJuKCk7XG4gICAgLy8gVGhlbiBkaXNwbGF5IHRoZSBtZXNzYWdlXG4gICAgZG9tTWFuaXB1bGF0aW9uLnR1cm5NZXNzYWdlKHR1cm4pO1xuICB9XG5cbiAgLy8gUGxheSBmaXJzdCB0dXJuXG4gIGRvbU1hbmlwdWxhdGlvbi50dXJuTWVzc2FnZSh0dXJuKTtcbiAgaWYgKHR1cm4gPT09IFwiYWlcIikge1xuICAgIC8vIElmIGZpcnN0IHR1cm4gaXMgb2YgYWkgdGhlblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWlUdXJuKCk7XG4gICAgfSwgMTAwMCk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGF5ZXJUdXJuKGUpIHtcbiAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50YWJsZS1jZWxsXCIpKSB7XG4gICAgICBjb25zdCB0YXJnZXRDZWxsID0gZS50YXJnZXQ7XG4gICAgICBjb25zdCBwb3NpdGlvbiA9IFtdO1xuICAgICAgcG9zaXRpb25bMF0gPSBOdW1iZXIodGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKSk7XG4gICAgICBwb3NpdGlvblsxXSA9IE51bWJlcih0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpKTtcbiAgICAgIGNvbnN0IGNlbGxTdGF0dXMgPSBhaS5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG5cbiAgICAgIC8vIFVwZGF0ZSBjZWxsIGluIHRoZSBET01cbiAgICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVDZWxsSGl0KHRhcmdldENlbGwsIGNlbGxTdGF0dXMpO1xuXG4gICAgICAvLyBDaGVjayBpZiBzaGlwIGdvdCBoaXRcbiAgICAgIGlmIChjZWxsU3RhdHVzICE9PSBcIm1pc3NcIiAmJiBjZWxsU3RhdHVzICE9PSBcImhpdFwiICYmIGNlbGxTdGF0dXMgIT09IFwiZW1wdHlcIikge1xuICAgICAgICAvLyBTaGlwIGZvdW5kXG4gICAgICAgIGNvbnN0IHNoaXBOYW1lID0gY2VsbFN0YXR1cztcblxuICAgICAgICB1cGRhdGVTaGlwU3RhdHVzKFwiYWlcIiwgc2hpcE5hbWUpO1xuICAgICAgICAvLyBDaGVjayBpZiBzaGlwIGdvdCBzdW5rXG4gICAgICAgIGNvbnN0IGlzU3VuayA9IGFpW3NoaXBOYW1lXS5pc1N1bmsoKTtcbiAgICAgICAgaWYgKGlzU3Vuaykge1xuICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi5zaGlwU3VuayhcImFpXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBDaGFuZ2UgdHVybiBpZiBzaG90IGdvdCBoaXQgb3IgbWlzc1xuICAgICAgaWYgKChjZWxsU3RhdHVzICE9PSBcIm1pc3NcIiAmJiBjZWxsU3RhdHVzICE9PSBcImhpdFwiKSB8fCBjZWxsU3RhdHVzID09PSBcImVtcHR5XCIpIHtcbiAgICAgICAgLy8gQ2hlY2sgd2hldGhlciBnYW1lIGlzIG92ZXIgb3Igbm90XG4gICAgICAgIGNvbnN0IGxvc2UgPSBpc0dhbWVPdmVyKFwiYWlcIik7XG4gICAgICAgIGlmIChsb3NlKSB7XG4gICAgICAgICAgZ2FtZU92ZXIoXCJhaVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBUb2dnbGUgdHVyblxuICAgICAgICAgIHRvZ2dsZVR1cm4oKTtcbiAgICAgICAgICAvLyBEaXNwbGF5IHR1cm4gbWVzc2FnZVxuICAgICAgICAgIGRvbU1hbmlwdWxhdGlvbi50dXJuTWVzc2FnZSh0dXJuKTtcbiAgICAgICAgICAvLyBEaXNhYmxlIG9wcG9uZW50IHRhYmxlIGR1cmluZyBhaSdzIHR1cm5cbiAgICAgICAgICBkaXNhYmxlT3BwVGFibGUoKTtcbiAgICAgICAgICAvLyBDYWxsIGFpJ3MgdHVyblxuICAgICAgICAgIHNldFRpbWVvdXQoYWlUdXJuLCAxMDAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIExpc3RlbiBwbGF5ZXIncyBjbGljayBvbiBvcHBvbmVudCdzIHRhYmxlXG4gIG9wcFRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJUdXJuKTtcbn1cblxuY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1zdGFydFwiKTtcblxuLy8gRGVmaW5lIHNoaXBzIG5hbWVzXG5jb25zdCBzaGlwTmFtZXMgPSBbXG4gIFtcImMxXCIsIFwiQ2FycmllclwiLCA0XSxcbiAgW1wiZDFcIiwgXCJEaXN0cm95ZXJcIiwgM10sXG4gIFtcImQyXCIsIFwiRGlzdHJveWVyXCIsIDNdLFxuICBbXCJwMVwiLCBcIlBhdHJvbCBCb2F0XCIsIDJdLFxuICBbXCJwMlwiLCBcIlBhdHJvbCBCb2F0XCIsIDJdLFxuICBbXCJwM1wiLCBcIlBhdHJvbCBCb2F0XCIsIDJdLFxuICBbXCJzMVwiLCBcIlNpbmdsZXRvblwiLCAxXSxcbiAgW1wiczJcIiwgXCJTaW5nbGV0b25cIiwgMV0sXG4gIFtcInMzXCIsIFwiU2luZ2xldG9uXCIsIDFdLFxuICBbXCJzNFwiLCBcIlNpbmdsZXRvblwiLCAxXSxcbl07XG5cbmZ1bmN0aW9uIG1hbmFnZVNoaXBzUGxhY2VtZW50KCkge1xuICAvLyBIaWRlIGluaXRpYWwgcGFnZSB3aGVuIHBsYXkgYnV0dG9uIGNsaWNrZWRcbiAgZG9tTWFuaXB1bGF0aW9uLmhpZGVJbml0UGFnZSgpO1xuICAvLyBTaG93IHNoaXAgcGxhY2VtZW50IHBhZ2VcbiAgZG9tTWFuaXB1bGF0aW9uLnNob3dTaGlwUGFnZSgpO1xuXG4gIC8vIEF1dG8gZmlsbCBhaSBib2FyZCAyRCBhcnJheSB3aXRoIHNoaXBzXG4gIGFpLmdhbWVCb2FyZC5hdXRvRmlsbFNoaXBzQm9hcmQoc2hpcE5hbWVzLnNsaWNlKCkpO1xuICAvLyBMZXQgcGxheWVyIHBsYWNlIHNoaXBzIG9uIHRoZSBib2FyZFxuICBkb21NYW5pcHVsYXRpb24ucGxhY2VTaGlwcyhzaGlwTmFtZXMuc2xpY2UoKSwgZ2FtZUxvb3ApO1xufVxuXG5kb21NYW5pcHVsYXRpb24uaGlkZUdhbWVQYWdlKCk7XG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYW5hZ2VTaGlwc1BsYWNlbWVudCk7XG4iXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiU2hpcCIsInBsYXllciIsImFpIiwibmV3QUkiLCJjMSIsImQxIiwiZDIiLCJwMSIsInAyIiwicDMiLCJzMSIsInMyIiwiczMiLCJzNCIsImdhbWVCb2FyZCIsImFsbFN1bmsiLCJzaGlwTmFtZXMiLCJmb3JFYWNoIiwic2hpcCIsInN1bmsiLCJyZXNldFNoaXBzIiwicmVzZXRTaGlwIiwiaXNBdHRhY2tWYWxpZCIsInBvc2l0aW9uIiwicm93IiwiY29sIiwiY2VsbFN0YXR1cyIsImJvYXJkIiwiZ2V0SGl0Q29vcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkb21NYW5pcHVsYXRpb24iLCJyZXNldFRhYmxlcyIsInlvdXJUYWJsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wcFRhYmxlIiwic2V0U2hpcFRhYmxlIiwieW91ckNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsIm9wcENlbGxzIiwic2V0U2hpcENlbGxzIiwiY2VsbCIsIm1vZGlmaWVkQ2VsbCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicmVtb3ZlU2hpcHMiLCJnYW1lUGFnZSIsInNoaXBQYWdlIiwic2hpcHNPblNoaXBQYWdlIiwic2hpcHNPbkdhbWVQYWdlIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVTaGlwIiwic2hpcE93bmVyIiwic2hvcnROYW1lIiwibGVuZ3RoIiwib3JpZW50IiwiY3JlYXRlRWxlbWVudCIsInRvcCIsImxlZnQiLCJjb25jYXQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsImNoYW5nZU9yaWVudGF0aW9uIiwic2hpcFBsYWNlUGFnZSIsImN1cnJlbnRTaGlwIiwiZ2V0QXR0cmlidXRlIiwidXBkYXRlQ2VsbFZhbCIsInBsYXllck5hbWUiLCJzaGlwTmFtZSIsInNoaXBFbmQiLCJjb2x1bW4iLCJpIiwicm93cyIsImNlbGxzIiwiaGlkZVNoaXAiLCJoaWRkZW5TaGlwIiwiYm9yZGVyIiwiYXV0b1BsYWNlU2hpcHMiLCJzaGlwc0Nvb3JkIiwic2hpcERhdGEiLCJlbmQiLCJnYW1lUGxheVBhZ2UiLCJhcHBlbmRDaGlsZCIsInJvd0VuZCIsImNvbEVuZCIsImNlbGxFbmQiLCJjZWxsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbWVQYWdlUmVjdCIsImNlbGxQb3NYIiwicmlnaHQiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiY2VsbFBvc1kiLCJpbm5lckhlaWdodCIsImJvdHRvbSIsInBsYWNlU2hpcHMiLCJjYWxsQmFjayIsInJlbW92ZSIsInNoaXBBcnIiLCJzaGlmdCIsInNoaXBNZXNzYWdlIiwiaW5uZXJIVE1MIiwiaXNQbGFjZWQiLCJkcmFnU2hpcCIsImUiLCJzaGlwUGFnZVJlY3QiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY3VycmVudENlbGwiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImNsaWVudFgiLCJjbGllbnRZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdGF0ZUJ0biIsImRyb3BTaGlwIiwicGFyc2VJbnQiLCJpc1ZhbGlkUG9zIiwic2hpcFJlY3QiLCJzaGlwWCIsInNoaXBZIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInVwZGF0ZUJvYXJkIiwic2xpY2UiLCJoaWRlSW5pdFBhZ2UiLCJpbml0UGFnZSIsImhpZGVTaGlwUGFnZSIsInNob3dTaGlwUGFnZSIsInNob3dHYW1lUGFnZSIsImhpZGVHYW1lUGFnZSIsImhpZGVNb2RhbENvbnRhaW5lciIsIm1vZGFsQ29udGFpbmVyIiwidHVybk1lc3NhZ2UiLCJ0dXJuIiwibWVzc2FnZSIsInRleHRDb250ZW50IiwidXBkYXRlQ2VsbEhpdCIsImhpdFN0YXR1cyIsInRhcmdldENlbGwiLCJzaGlwU3VuayIsInNoaXBzTm9kZUxpc3QiLCJzaGlwc0FyciIsIkFycmF5IiwiZnJvbSIsInN1bmtTaGlwIiwibmFtZSIsIm93bmVyIiwiY29uc29sZSIsImxvZyIsIl9jbGFzc0NhbGxDaGVjayIsIl9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyIsIl9wbGFjZVNpbmdsZVNoaXAiLCJfZ2V0U3RhcnRJbmRleCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYnVpbGRCb2FyZCIsInIiLCJjIiwicHVzaCIsInJlc2V0Qm9hcmQiLCJib2FyZFJvdyIsInVwZGF0ZVNoaXBzQ29vcmQiLCJzdGFydCIsImF1dG9GaWxsU2hpcHNCb2FyZCIsIl90aGlzIiwib3JpZW50QXJyIiwiaW5kZXgiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2V0IiwiX3BsYWNlU2luZ2xlU2hpcDIiLCJjYWxsIiwicmVjZWl2ZUF0dGFjayIsIl9nZXRTdGFydEluZGV4MiIsImluZGV4Rm91bmQiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2UiLCJfY2xhc3NQcml2YXRlTWV0aG9kR2UyIiwiX3NsaWNlZFRvQXJyYXkiLCJkZWZhdWx0IiwibmV3UGxheWVyIiwiaGl0Q291bnQiLCJpc1N1bmsiLCJoaXQiLCJyYW5kb21JY29uIiwicmFuZEltZyIsIkltYWdlIiwic3JjIiwiYWx0IiwicmVzZXRHYW1lIiwibWFuYWdlU2hpcHNQbGFjZW1lbnQiLCJnYW1lT3ZlciIsImdhbWVPdmVyQ29udCIsIm1vZGFsTXNnIiwicGxheUFnYWluQnRuIiwiaXNHYW1lT3ZlciIsImdhbWVMb29wIiwiaW5pdFR1cm4iLCJwbGF5ZXJzIiwiZGlzYWJsZU9wcFRhYmxlIiwib3BhY2l0eSIsImNlbGxDb3B5IiwicG9pbnRlckV2ZW50cyIsImVuYWJsZU9wcFRhYmxlIiwidG9nZ2xlVHVybiIsInVwZGF0ZVNoaXBTdGF0dXMiLCJhaVR1cm4iLCJsb3NlIiwic2V0VGltZW91dCIsInBsYXllclR1cm4iLCJOdW1iZXIiLCJwbGF5QnRuIl0sInNvdXJjZVJvb3QiOiIifQ==