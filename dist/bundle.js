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
          var cellPosX = cellRect.right - gamePageRect.left - cellRect.width * length - 1.5;
          var cellPosY = cellRect.top - gamePageRect.top - 1.5;
          ship.style.left = "".concat(cellPosX, "rem");
          ship.style.top = "".concat(cellPosY, "rem");
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          var _cellEnd = oppTable.rows[rowEnd].cells[colEnd];
          var _cellRect = _cellEnd.getBoundingClientRect();
          var _gamePageRect = gamePlayPage.getBoundingClientRect();
          var _cellPosX = _cellRect.right - _gamePageRect.left - _cellRect.width * length - 1.5;
          var _cellPosY = _cellRect.top - _gamePageRect.top - 1.5;
          ship.style.left = "".concat(_cellPosX, "rem");
          ship.style.top = "".concat(_cellPosY, "rem");
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
          var _cellPosX2 = _cellRect2.left - _gamePageRect2.left - 1.5;
          var _cellPosY2 = _cellRect2.bottom - _gamePageRect2.top - _cellRect2.width * length - 1.5;
          ship.style.left = "".concat(_cellPosX2, "rem");
          ship.style.top = "".concat(_cellPosY2, "rem");
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
    }, 1);
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
          setTimeout(aiTurn, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sNkZBQTZGLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFB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QUFJLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUNwQixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDdEIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUN0QixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDdEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUN2QjtBQUVELFNBQVMrSyxvQkFBb0JBLENBQUEsRUFBRztFQUM5QjtFQUNBL0osNENBQWUsQ0FBQytGLFlBQVksQ0FBQyxDQUFDO0VBQzlCO0VBQ0EvRiw0Q0FBZSxDQUFDa0csWUFBWSxDQUFDLENBQUM7O0VBRTlCO0VBQ0FoSSwyQ0FBRSxDQUFDWSxTQUFTLENBQUN5SixrQkFBa0IsQ0FBQ3ZKLFNBQVMsQ0FBQzhHLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDbEQ7RUFDQTlGLDRDQUFlLENBQUNrRSxVQUFVLENBQUNsRixTQUFTLENBQUM4RyxLQUFLLENBQUMsQ0FBQyxFQUFFdUUsUUFBUSxDQUFDO0FBQ3pEO0FBRUFySyw0Q0FBZSxDQUFDb0csWUFBWSxDQUFDLENBQUM7QUFDOUJnRixPQUFPLENBQUNoRyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUyRSxvQkFBb0IsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL2dhbWVCb2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2NyaXB0RmlsZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9tZXllci1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL215LWNzcy1yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL25vcm1hbGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL3R5cG9ncmFwaHkuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL21leWVyLXJlc2V0LmNzcz9iZWI1Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9teS1jc3MtcmVzZXQuY3NzP2Q2NDYiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL25vcm1hbGl6ZS5jc3M/NGZlYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvc3R5bGVzLmNzcz8yMmZjIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy90eXBvZ3JhcGh5LmNzcz9jNDQyIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBhaSgpIHtcbiAgY29uc3QgbmV3QUkgPSB7fTtcbiAgbmV3QUkuYzEgPSBuZXcgU2hpcChcImNhcnJpZXJcIiwgNCk7XG4gIG5ld0FJLmQxID0gbmV3IFNoaXAoXCJkaXN0cm95ZXIxXCIsIDMpO1xuICBuZXdBSS5kMiA9IG5ldyBTaGlwKFwiZGlzdHJveWVyMlwiLCAzKTtcbiAgbmV3QUkucDEgPSBuZXcgU2hpcChcInBhdHJvbEJvYXQxXCIsIDIpO1xuICBuZXdBSS5wMiA9IG5ldyBTaGlwKFwicGF0cm9sQm9hdDJcIiwgMik7XG4gIG5ld0FJLnAzID0gbmV3IFNoaXAoXCJwYXRyb2xCb2F0M1wiLCAyKTtcbiAgbmV3QUkuczEgPSBuZXcgU2hpcChcInNpbmdsZXRvbjFcIiwgMSk7XG4gIG5ld0FJLnMyID0gbmV3IFNoaXAoXCJzaW5nbGV0b24yXCIsIDEpO1xuICBuZXdBSS5zMyA9IG5ldyBTaGlwKFwic2luZ2xldG9uM1wiLCAxKTtcbiAgbmV3QUkuczQgPSBuZXcgU2hpcChcInNpbmdsZXRvbjRcIiwgMSk7XG4gIG5ld0FJLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgbmV3QUkuYWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBsZXQgYWxsU3VuayA9IHRydWU7XG4gICAgc2hpcE5hbWVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghbmV3QUlbc2hpcF0uc3Vuaykge1xuICAgICAgICBhbGxTdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFN1bms7XG4gIH07XG5cbiAgbmV3QUkucmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbmV3QUlbc2hpcF0ucmVzZXRTaGlwKCk7XG4gICAgfSk7XG4gIH07XG4gIG5ld0FJLmlzQXR0YWNrVmFsaWQgPSAocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBjb2wgPSBwb3NpdGlvblsxXTtcbiAgICBjb25zdCBjZWxsU3RhdHVzID0gcGxheWVyLmdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF07XG4gICAgLy8gY29uc29sZS5sb2coJ2FpIGF0dGFjayBzdGF0dXMgaW5zaWRlIGlzJywgY2VsbFN0YXR1cywgJ2F0IHBvc2l0aW9uJywgcG9zaXRpb24pXG4gICAgaWYgKGNlbGxTdGF0dXMgIT09IFwiaGl0XCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIG5ld0FJLmdldEhpdENvb3JkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gW107XG4gICAgcG9zaXRpb25bMF0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcG9zaXRpb25bMV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIG5ld0FJO1xufSkoKTtcbiIsImltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgYWkgZnJvbSBcIi4vYWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGRvbU1hbmlwdWxhdGlvbigpIHtcbiAgZnVuY3Rpb24gcmVzZXRUYWJsZXMoKSB7XG4gICAgY29uc3QgeW91clRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55b3VyLXRhYmxlLWdhbWVwbGF5LXBhZ2VcIik7XG4gICAgY29uc3Qgb3BwVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LXRhYmxlXCIpO1xuICAgIGNvbnN0IHNldFNoaXBUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0LXNoaXBzXCIpO1xuICAgIGNvbnN0IHlvdXJDZWxscyA9IHlvdXJUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgY29uc3Qgb3BwQ2VsbHMgPSBvcHBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgY29uc3Qgc2V0U2hpcENlbGxzID0gc2V0U2hpcFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGUtY2VsbFwiKTtcblxuICAgIHlvdXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllZENlbGwgPSBjZWxsO1xuICAgICAgLy8gc2V0IFZhbHVlIHRvIGVtcHR5XG4gICAgICBtb2RpZmllZENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcImVtcHR5XCIpO1xuICAgICAgLy8gUmVzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgbW9kaWZpZWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiO1xuICAgIH0pO1xuXG4gICAgb3BwQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZWRDZWxsID0gY2VsbDtcbiAgICAgIC8vIHNldCBWYWx1ZSB0byBlbXB0eVxuICAgICAgbW9kaWZpZWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJlbXB0eVwiKTtcbiAgICAgIC8vIFJlc2V0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIG1vZGlmaWVkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbiAgICB9KTtcblxuICAgIHNldFNoaXBDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllZENlbGwgPSBjZWxsO1xuICAgICAgLy8gc2V0IFZhbHVlIHRvIGVtcHR5XG4gICAgICBtb2RpZmllZENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcImVtcHR5XCIpO1xuICAgICAgLy8gUmVzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgbW9kaWZpZWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2FiYjhiN1wiO1xuICAgIH0pO1xuICB9XG4gIC8vIFJlbW92ZSBzaGlwIGNoaWxkcmVuIGZyb20gc2hpcFBsYWNlIHBhZ2UgYW5kIGdhbWVQbGF5IHBhZ2VcbiAgZnVuY3Rpb24gcmVtb3ZlU2hpcHMoKSB7XG4gICAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG4gICAgY29uc3Qgc2hpcFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VtZW50LXBhZ2VcIik7XG4gICAgY29uc3Qgc2hpcHNPblNoaXBQYWdlID0gc2hpcFBhZ2UucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIGNvbnN0IHNoaXBzT25HYW1lUGFnZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBzaGlwc09uU2hpcFBhZ2UuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgc2hpcFBhZ2UucmVtb3ZlQ2hpbGQoc2hpcCk7XG4gICAgfSk7XG4gICAgc2hpcHNPbkdhbWVQYWdlLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGdhbWVQYWdlLnJlbW92ZUNoaWxkKHNoaXApO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlU2hpcChzaGlwT3duZXIsIHNob3J0TmFtZSwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBjb25zdCBzaGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBzaGlwLnN0eWxlLnBvc2l0aW9uID0gXCJhYnNvbHV0ZVwiO1xuICAgIHNoaXAuc3R5bGUudG9wID0gXCIwXCI7XG4gICAgc2hpcC5zdHlsZS5sZWZ0ID0gXCIwXCI7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWxlbmd0aFwiLCBgJHtsZW5ndGh9YCk7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXBuYW1lXCIsIHNob3J0TmFtZSk7XG4gICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXAtb3duZXJcIiwgc2hpcE93bmVyKTtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAkezIgKiBsZW5ndGh9dndgO1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBcIjJ2d1wiO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIsIGAkezIgKiBsZW5ndGh9dndgKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgXCIydndcIik7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIFwieFwiKTtcbiAgICB9XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBcIjJ2d1wiO1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBgJHsyICogbGVuZ3RofXZ3YDtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCBcIjJ2d1wiKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgYCR7MiAqIGxlbmd0aH12d2ApO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBcInlcIik7XG4gICAgfVxuICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcIm1vdmluZ1wiKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoc2hvcnROYW1lKTtcbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJzaGlwXCIpO1xuICAgIHJldHVybiBzaGlwO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hhbmdlT3JpZW50YXRpb24oKSB7XG4gICAgY29uc3Qgc2hpcFBsYWNlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnQtcGFnZVwiKTtcbiAgICBjb25zdCBjdXJyZW50U2hpcCA9IHNoaXBQbGFjZVBhZ2UucXVlcnlTZWxlY3RvcihcIi5tb3ZpbmdcIik7XG4gICAgaWYgKGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInhcIikge1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgXCJ5XCIpO1xuICAgICAgY29uc3Qgd2lkdGggPSBjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIik7XG4gICAgICBjdXJyZW50U2hpcC5zdHlsZS53aWR0aCA9IGhlaWdodDtcbiAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLmhlaWdodCA9IHdpZHRoO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgd2lkdGgpO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCBoZWlnaHQpO1xuICAgIH0gZWxzZSBpZiAoY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPT09IFwieVwiKSB7XG4gICAgICBjdXJyZW50U2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBcInhcIik7XG4gICAgICBjb25zdCB3aWR0aCA9IGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtd2lkdGhcIik7XG4gICAgICBjb25zdCBoZWlnaHQgPSBjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhlaWdodFwiKTtcbiAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLndpZHRoID0gaGVpZ2h0O1xuICAgICAgY3VycmVudFNoaXAuc3R5bGUuaGVpZ2h0ID0gd2lkdGg7XG4gICAgICBjdXJyZW50U2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhlaWdodFwiLCB3aWR0aCk7XG4gICAgICBjdXJyZW50U2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIsIGhlaWdodCk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIGNlbGwgdmFsdWVcbiAgZnVuY3Rpb24gdXBkYXRlQ2VsbFZhbChwbGF5ZXJOYW1lLCBzaGlwTmFtZSwgc2hpcEVuZCwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgICBjb25zdCByb3cgPSBzaGlwRW5kWzBdO1xuICAgIGNvbnN0IGNvbHVtbiA9IHNoaXBFbmRbMV07XG4gICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIGNvbnN0IHlvdXJUYWJsZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZVwiKTtcbiAgICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB5b3VyVGFibGUucm93c1tyb3ddLmNlbGxzW2NvbHVtbiAtIGldLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHlvdXJUYWJsZS5yb3dzW3JvdyAtIGldLmNlbGxzW2NvbHVtbl0uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgY29uc3Qgb3BwVGFibGUgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LXRhYmxlXCIpO1xuICAgICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIG9wcFRhYmxlLnJvd3Nbcm93XS5jZWxsc1tjb2x1bW4gLSBpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBvcHBUYWJsZS5yb3dzW3JvdyAtIGldLmNlbGxzW2NvbHVtbl0uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlU2hpcChzaGlwKSB7XG4gICAgY29uc3QgaGlkZGVuU2hpcCA9IHNoaXA7XG4gICAgaGlkZGVuU2hpcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgfVxuXG4gIC8vIFBsYWNlIHNoaXBzIG9uIHRoZSBwbGF5ZXIvYWkgYm9hcmQgb24gZ2FtZS1wbGF5LXBhZ2VcbiAgZnVuY3Rpb24gYXV0b1BsYWNlU2hpcHMocGxheWVyTmFtZSwgc2hpcHNDb29yZCkge1xuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtcImMxXCIsIFwiZDFcIiwgXCJkMlwiLCBcInAxXCIsIFwicDJcIiwgXCJwM1wiLCBcInMxXCIsIFwiczJcIiwgXCJzM1wiLCBcInM0XCJdO1xuICAgIHNoaXBOYW1lcy5mb3JFYWNoKChzaGlwTmFtZSkgPT4ge1xuICAgICAgY29uc3Qgc2hpcERhdGEgPSBzaGlwc0Nvb3JkW3NoaXBOYW1lXTtcblxuICAgICAgY29uc3QgeyBlbmQsIG9yaWVudCwgbGVuZ3RoIH0gPSBzaGlwRGF0YTtcbiAgICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKHBsYXllck5hbWUsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCk7XG4gICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJhaVwiKSB7XG4gICAgICAgIC8vIEhpZGUgc2hpcCBvbiB0aGUgYWkgdGFibGVcbiAgICAgICAgaGlkZVNoaXAoc2hpcCk7XG4gICAgICB9XG4gICAgICAvLyBBbHNvIHVwZGF0ZSB0YWJsZSBjZWxsJ3MgZGF0YS12YWx1ZSB3aXRoIHNoaXBOYW1lXG4gICAgICB1cGRhdGVDZWxsVmFsKHBsYXllck5hbWUsIHNoaXBOYW1lLCBlbmQsIGxlbmd0aCwgb3JpZW50KTtcblxuICAgICAgLy8gQ2FsbCBnYW1lcGxheSBwYWdlXG4gICAgICBjb25zdCBnYW1lUGxheVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG4gICAgICBjb25zdCB5b3VyVGFibGUgPSBnYW1lUGxheVBhZ2UucXVlcnlTZWxlY3RvcihcIi55b3VyLXRhYmxlXCIpO1xuICAgICAgY29uc3Qgb3BwVGFibGUgPSBnYW1lUGxheVBhZ2UucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC10YWJsZVwiKTtcbiAgICAgIGdhbWVQbGF5UGFnZS5hcHBlbmRDaGlsZChzaGlwKTtcbiAgICAgIC8vIFBsYWNlIHNoaXBzIG9uIHRoZSBib2FyZCBjb29yZGluYXRlcyBjb3JyZWN0bHlcbiAgICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICAgIGNvbnN0IHJvd0VuZCA9IGVuZFswXTtcbiAgICAgICAgY29uc3QgY29sRW5kID0gZW5kWzFdO1xuICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgIC8vIEdldCBoZWFkIGNlbGwgb24gd2hpY2ggc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICBjb25zdCBjZWxsRW5kID0geW91clRhYmxlLnJvd3Nbcm93RW5kXS5jZWxsc1tjb2xFbmRdO1xuXG4gICAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsRW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGdhbWVQYWdlUmVjdCA9IGdhbWVQbGF5UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBjZWxsUG9zWCA9IGNlbGxSZWN0LnJpZ2h0IC0gZ2FtZVBhZ2VSZWN0LmxlZnQgLSBjZWxsUmVjdC53aWR0aCAqIGxlbmd0aCAtIDEuNTtcbiAgICAgICAgICBjb25zdCBjZWxsUG9zWSA9IGNlbGxSZWN0LnRvcCAtIGdhbWVQYWdlUmVjdC50b3AgLSAxLjU7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7Y2VsbFBvc1h9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2NlbGxQb3NZfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJhaVwiKSB7XG4gICAgICAgICAgLy8gR2V0IGhlYWQgY2VsbCBvbiB3aGljaCBzaGlwIGlzIHBsYWNlZFxuICAgICAgICAgIGNvbnN0IGNlbGxFbmQgPSBvcHBUYWJsZS5yb3dzW3Jvd0VuZF0uY2VsbHNbY29sRW5kXTtcblxuICAgICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbEVuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBnYW1lUGFnZVJlY3QgPSBnYW1lUGxheVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1ggPSBjZWxsUmVjdC5yaWdodCAtIGdhbWVQYWdlUmVjdC5sZWZ0IC0gY2VsbFJlY3Qud2lkdGggKiBsZW5ndGggLSAxLjU7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1kgPSBjZWxsUmVjdC50b3AgLSBnYW1lUGFnZVJlY3QudG9wIC0gMS41O1xuXG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7Y2VsbFBvc1h9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2NlbGxQb3NZfXJlbWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICAgIGNvbnN0IHJvd0VuZCA9IGVuZFswXTtcbiAgICAgICAgY29uc3QgY29sRW5kID0gZW5kWzFdO1xuICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgICAgIC8vIEdldCBoZWFkIGNlbGwgb24gd2hpY2ggc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICBjb25zdCBjZWxsRW5kID0geW91clRhYmxlLnJvd3Nbcm93RW5kXS5jZWxsc1tjb2xFbmRdO1xuXG4gICAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsRW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGdhbWVQYWdlUmVjdCA9IGdhbWVQbGF5UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBjZWxsUG9zWCA9IGNlbGxSZWN0LmxlZnQgLSBnYW1lUGFnZVJlY3QubGVmdCAtIDEuNTtcbiAgICAgICAgICBjb25zdCBjZWxsUG9zWSA9IGNlbGxSZWN0LmJvdHRvbSAtIGdhbWVQYWdlUmVjdC50b3AgLSBjZWxsUmVjdC53aWR0aCAqIGxlbmd0aCAtIDEuNTtcblxuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2NlbGxQb3NYfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtjZWxsUG9zWX1yZW1gO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGJsdWVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgICAgIC8vIEdldCBoZWFkIGNlbGwgb24gd2hpY2ggc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICBjb25zdCBjZWxsRW5kID0gb3BwVGFibGUucm93c1tyb3dFbmRdLmNlbGxzW2NvbEVuZF07XG5cbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGxFbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVBhZ2VSZWN0ID0gZ2FtZVBsYXlQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NYID0gY2VsbFJlY3QubGVmdCAtIGdhbWVQYWdlUmVjdC5sZWZ0IC0gMS41O1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NZID0gY2VsbFJlY3QuYm90dG9tIC0gZ2FtZVBhZ2VSZWN0LnRvcCAtIGNlbGxSZWN0LndpZHRoICogbGVuZ3RoIC0gMS41O1xuXG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7Y2VsbFBvc1h9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2NlbGxQb3NZfXJlbWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYWNlU2hpcHMoc2hpcE5hbWVzLCBjYWxsQmFjaykge1xuICAgIGNvbnN0IHNoaXBQbGFjZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VtZW50LXBhZ2VcIik7XG4gICAgY29uc3QgZ2FtZVBsYXlQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuXG4gICAgaWYgKHNoaXBOYW1lcy5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIEFsbCBzaGlwcyBwbGFjZWQuIE5vdyBkbyB0aGUgbmV4dCB0YXNrc1xuICAgICAgc2hpcFBsYWNlUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgICAgIGdhbWVQbGF5UGFnZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgICAgIC8vIENhbGwgYmFjayBmdW5jdGlvbiB3aGljaCBpcyBiYXNpY2FsbHkgYSBnYW1lTG9vcCBmdW5jdGlvblxuICAgICAgY2FsbEJhY2soKTtcbiAgICAgIC8vIFBsYWNlIHNoaXBzIG9uIHRoZSBib2FyZCBhdCBnYW1lIHBsYXkgcGFnZSBvbiBwbGF5ZXIvYWkgZGVmaW5lZCBwb3NpdGlvbnNcblxuICAgICAgYXV0b1BsYWNlU2hpcHMoXCJwbGF5ZXJcIiwgcGxheWVyLmdhbWVCb2FyZC5zaGlwc0Nvb3JkKTtcbiAgICAgIGF1dG9QbGFjZVNoaXBzKFwiYWlcIiwgYWkuZ2FtZUJvYXJkLnNoaXBzQ29vcmQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzaGlwQXJyID0gc2hpcE5hbWVzLnNoaWZ0KCk7XG4gICAgY29uc3Qgc2hvcnROYW1lID0gc2hpcEFyclswXTtcbiAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBBcnJbMV07XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcEFyclsyXTtcblxuICAgIGNvbnN0IHNoaXBNZXNzYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLW5hbWVcIik7XG4gICAgc2hpcE1lc3NhZ2UuaW5uZXJIVE1MID0gXCJQbGFjZSBcIi5jb25jYXQoc2hpcE5hbWUpLmNvbmNhdChcIiBvbiB0aGUgYm9hcmRcIik7XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG5cbiAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChcInBsYXllclwiLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ4XCIpO1xuXG4gICAgc2hpcFBsYWNlUGFnZS5hcHBlbmRDaGlsZChzaGlwKTtcblxuICAgIGZ1bmN0aW9uIGRyYWdTaGlwKGUpIHtcbiAgICAgIGlmICghaXNQbGFjZWQpIHtcbiAgICAgICAgY29uc3Qgc2hpcFBhZ2VSZWN0ID0gc2hpcFBsYWNlUGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50YWJsZS1jZWxsXCIpKSB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIxcmVtIGRhc2hlZCAjNTk3OGY1XCI7XG4gICAgICAgICAgY29uc3QgY3VycmVudENlbGwgPSBlLnRhcmdldDtcbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGN1cnJlbnRDZWxsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGBjYWxjKCR7Y2VsbFJlY3QucmlnaHR9cmVtICAtICR7c2hpcFBhZ2VSZWN0LmxlZnR9cmVtIC0gJHtzaGlwLmNsaWVudFdpZHRofXJlbSAtIDEuNXJlbSApYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7Y2VsbFJlY3QuYm90dG9tfXJlbSAtICR7c2hpcFBhZ2VSZWN0LnRvcH1yZW0gLSAke3NoaXAuY2xpZW50SGVpZ2h0fXJlbSAtIDFyZW0pYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjApXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFggLSBzaGlwUGFnZVJlY3QubGVmdCAtIHNoaXAuY2xpZW50V2lkdGh9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WSAtIHNoaXBQYWdlUmVjdC50b3AgLSBzaGlwLmNsaWVudEhlaWdodH1yZW1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIE1vdmUgc2hpcCBhbG9uZyB3aXRoIHRoZSBtb3VzZVxuICAgIHNoaXBQbGFjZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG5cbiAgICAvLyBDaGFuZ2Ugb3JpZW50YXRpb24gb2Ygc2hpcFxuICAgIGNvbnN0IHJvdGF0ZUJ0biA9IHNoaXBQbGFjZVBhZ2UucXVlcnlTZWxlY3RvcihcIi5yb3RhdGUtYnRuXCIpO1xuICAgIHJvdGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2hhbmdlT3JpZW50YXRpb24pO1xuXG4gICAgZnVuY3Rpb24gZHJvcFNoaXAoZSkge1xuICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudGFibGUtY2VsbFwiKSkge1xuICAgICAgICBjb25zdCBjdXJyZW50Q2VsbCA9IGUudGFyZ2V0O1xuXG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpLCAxMCk7XG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpLCAxMCk7XG5cbiAgICAgICAgaWYgKHNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIikgPT09IFwieFwiKSB7XG4gICAgICAgICAgaWYgKHBsYXllci5nYW1lQm9hcmQuaXNWYWxpZFBvcyhyb3csIGNvbCwgbGVuZ3RoLCBcInhcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBSZWN0ID0gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQYWdlUmVjdCA9IHNoaXBQbGFjZVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwWCA9IHNoaXBSZWN0LmxlZnQgLSBzaGlwUGFnZVJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBZID0gc2hpcFJlY3QudG9wIC0gc2hpcFBhZ2VSZWN0LnRvcDtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NoaXBYfXJlbWA7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7c2hpcFl9cmVtIC0gMXJlbSlgO1xuICAgICAgICAgICAgaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwibW92aW5nXCIpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uY2Ugc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICAgIHNoaXBQbGFjZVBhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wU2hpcCk7XG4gICAgICAgICAgICAvLyBTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkuIE5vdyB1cGRhdGUgdGhlIDJEIGJvYXJkIGFycmF5XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ4XCIpO1xuICAgICAgICAgICAgcGxhY2VTaGlwcyhzaGlwTmFtZXMuc2xpY2UoKSwgY2FsbEJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInlcIikge1xuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmlzVmFsaWRQb3Mocm93LCBjb2wsIGxlbmd0aCwgXCJ5XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwUmVjdCA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwUGFnZVJlY3QgPSBzaGlwUGxhY2VQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFggPSBzaGlwUmVjdC5sZWZ0IC0gc2hpcFBhZ2VSZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBzaGlwWSA9IHNoaXBSZWN0LnRvcCAtIHNoaXBQYWdlUmVjdC50b3A7XG5cbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NoaXBYfXJlbWA7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7c2hpcFl9cmVtIC0gMXJlbSlgO1xuICAgICAgICAgICAgaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwibW92aW5nXCIpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uY2Ugc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICAgIHNoaXBQbGFjZVBhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wU2hpcCk7XG4gICAgICAgICAgICAvLyBTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkuIE5vdyB1cGRhdGUgdGhlIDJEIGJvYXJkIGFycmF5XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ5XCIpO1xuICAgICAgICAgICAgcGxhY2VTaGlwcyhzaGlwTmFtZXMuc2xpY2UoKSwgY2FsbEJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQbGFjZSBzaGlwIG9uIHRoZSBib2FyZCBvbiBtb3VzZSBjbGlja1xuICAgIHNoaXBQbGFjZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyb3BTaGlwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVJbml0UGFnZSgpIHtcbiAgICBjb25zdCBpbml0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5pdGlhbC1wYWdlXCIpO1xuICAgIGluaXRQYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVNoaXBQYWdlKCkge1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIHNoaXBQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1NoaXBQYWdlKCkge1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIHNoaXBQYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0dhbWVQYWdlKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUdhbWVQYWdlKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU1vZGFsQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlci1jb250YWluZXJcIik7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuTWVzc2FnZSh0dXJuKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVybi1tZXNzYWdlXCIpO1xuICAgIGlmICh0dXJuID09PSBcInBsYXllclwiKSBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJZb3VyIFR1cm5cIjtcbiAgICBlbHNlIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkFJJ3MgdHVyblwiO1xuICB9XG4gIC8vIFVwZGF0ZSBjZWxsIGhpdCBzdGF0dXMgaW4gRE9NXG4gIGZ1bmN0aW9uIHVwZGF0ZUNlbGxIaXQoY2VsbCwgaGl0U3RhdHVzKSB7XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGNlbGw7XG4gICAgaWYgKGhpdFN0YXR1cyA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICB0YXJnZXRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJtaXNzXCIpO1xuICAgICAgdGFyZ2V0Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNiZmRiZmVcIjtcbiAgICB9IGVsc2UgaWYgKGhpdFN0YXR1cyAhPT0gXCJoaXRcIiAmJiBoaXRTdGF0dXMgIT09IFwibWlzc1wiKSB7XG4gICAgICB0YXJnZXRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJoaXRcIik7XG4gICAgICB0YXJnZXRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmVkXCI7XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hhbmdlIGNvbG9yIG9mIHRoZSBzdW5rIHNoaXAgb24gdGhlIERPTVxuXG4gIGZ1bmN0aW9uIHNoaXBTdW5rKHNoaXBPd25lciwgc2hpcE5hbWUpIHtcbiAgICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgICAvLyBGaW5kIGFsbCBzaGlwcyBvbiBnYW1lIHBhZ2VcbiAgICBjb25zdCBzaGlwc05vZGVMaXN0ID0gZ2FtZVBhZ2UucXVlcnlTZWxlY3RvckFsbChcIi5zaGlwXCIpO1xuICAgIGNvbnN0IHNoaXBzQXJyID0gQXJyYXkuZnJvbShzaGlwc05vZGVMaXN0KTtcbiAgICBsZXQgc3Vua1NoaXA7XG4gICAgc2hpcHNBcnIuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgY29uc3QgbmFtZSA9IHNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwbmFtZVwiKTtcbiAgICAgIGNvbnN0IG93bmVyID0gc2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNoaXAtb3duZXJcIik7XG4gICAgICBpZiAobmFtZSA9PT0gc2hpcE5hbWUgJiYgb3duZXIgPT09IHNoaXBPd25lcikgc3Vua1NoaXAgPSBzaGlwO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKHN1bmtTaGlwKTtcbiAgICBzdW5rU2hpcC5zdHlsZS5ib3JkZXIgPSBcIjRyZW0gc29saWQgcmVkXCI7XG4gICAgc3Vua1NoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjNDUwYTBhXCI7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlc2V0VGFibGVzLFxuICAgIHBsYWNlU2hpcHMsXG4gICAgcmVtb3ZlU2hpcHMsXG4gICAgaGlkZUluaXRQYWdlLFxuICAgIGhpZGVTaGlwUGFnZSxcbiAgICBzaG93R2FtZVBhZ2UsXG4gICAgaGlkZUdhbWVQYWdlLFxuICAgIGhpZGVNb2RhbENvbnRhaW5lcixcbiAgICBhdXRvUGxhY2VTaGlwcyxcbiAgICB0dXJuTWVzc2FnZSxcbiAgICB1cGRhdGVDZWxsSGl0LFxuICAgIHNoaXBTdW5rLFxuICB9O1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVCb2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWxsU3VuayA9IGZhbHNlO1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLnNoaXBzQ29vcmQgPSB7fTtcbiAgfVxuXG4gIGJ1aWxkQm9hcmQoKSB7XG4gICAgZm9yIChsZXQgciA9IDA7IHIgPCAxMDsgciArPSAxKSB7XG4gICAgICBjb25zdCByb3cgPSBbXTtcbiAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMTA7IGMgKz0gMSkge1xuICAgICAgICByb3cucHVzaChcImVtcHR5XCIpO1xuICAgICAgfVxuICAgICAgdGhpcy5ib2FyZC5wdXNoKHJvdyk7XG4gICAgfVxuICB9XG5cbiAgcmVzZXRCb2FyZCgpIHtcbiAgICAvLyBGaXJzdCAgcmVzZXQgYm9hcmQgYW5kIHRoZW4gYnVpbGQgaXQgd2l0aCBlbXB0eSBjZWxsc1xuICAgIHRoaXMuYm9hcmQgPSBbXTtcbiAgICB0aGlzLmJ1aWxkQm9hcmQoKTtcbiAgfVxuXG4gIGlzVmFsaWRQb3Mocm93LCBjb2wsIGxlbmd0aCwgb3JpZW50KSB7XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIgJiYgY29sICsgMSAtIGxlbmd0aCA+PSAwKSB7XG4gICAgICBjb25zdCBib2FyZFJvdyA9IHRoaXMuYm9hcmRbcm93XTtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPiBjb2wgLSBsZW5ndGg7IGkgLT0gMSkge1xuICAgICAgICBpZiAoYm9hcmRSb3dbaV0gIT09IFwiZW1wdHlcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvcmllbnQgPT09IFwieVwiICYmIHJvdyArIDEgLSBsZW5ndGggPj0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA+IHJvdyAtIGxlbmd0aDsgaSAtPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2NvbF0gIT09IFwiZW1wdHlcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlQm9hcmQocm93LCBjb2wsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCkge1xuICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICBjb25zdCBib2FyZFJvdyA9IHRoaXMuYm9hcmRbcm93XTtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPiBjb2wgLSBsZW5ndGg7IGkgLT0gMSkge1xuICAgICAgICBib2FyZFJvd1tpXSA9IHNoaXBOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA+IHJvdyAtIGxlbmd0aDsgaSAtPSAxKSB7XG4gICAgICAgIHRoaXMuYm9hcmRbaV1bY29sXSA9IHNoaXBOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBTYXZlIHRoaXMgc2hpcCdzIGNvb3JkaW5hdGVzXG4gICAgdGhpcy51cGRhdGVTaGlwc0Nvb3JkKHJvdywgY29sLCBzaGlwTmFtZSwgbGVuZ3RoLCBvcmllbnQpO1xuICB9XG5cbiAgdXBkYXRlU2hpcHNDb29yZChyb3csIGNvbCwgc2hpcE5hbWUsIGxlbmd0aCwgb3JpZW50KSB7XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSB7fTtcbiAgICAgIHNoaXAuc3RhcnQgPSBbcm93LCBjb2wgKyAxIC0gbGVuZ3RoXTtcbiAgICAgIHNoaXAuZW5kID0gW3JvdywgY29sXTtcbiAgICAgIHNoaXAub3JpZW50ID0gb3JpZW50O1xuICAgICAgc2hpcC5sZW5ndGggPSBsZW5ndGg7XG4gICAgICB0aGlzLnNoaXBzQ29vcmRbc2hpcE5hbWVdID0gc2hpcDtcbiAgICB9XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgIGNvbnN0IHNoaXAgPSB7fTtcbiAgICAgIHNoaXAuc3RhcnQgPSBbcm93ICsgMSAtIGxlbmd0aCwgY29sXTtcbiAgICAgIHNoaXAuZW5kID0gW3JvdywgY29sXTtcbiAgICAgIHNoaXAub3JpZW50ID0gb3JpZW50O1xuICAgICAgc2hpcC5sZW5ndGggPSBsZW5ndGg7XG4gICAgICB0aGlzLnNoaXBzQ29vcmRbc2hpcE5hbWVdID0gc2hpcDtcbiAgICB9XG4gIH1cblxuICAjZ2V0U3RhcnRJbmRleChsZW5ndGgsIG9yaWVudCkge1xuICAgIGxldCBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgbGV0IHJvdztcbiAgICBsZXQgY29sO1xuICAgIGxldCBjZWxsO1xuICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICB3aGlsZSAoIWluZGV4Rm91bmQpIHtcbiAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgICAgIGNvbCA9IGxlbmd0aCAtIDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAobGVuZ3RoIC0gMSkpKTtcbiAgICAgICAgY2VsbCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAvLyBDaGVjayBpZiBjdXJyZW50IGNlbGwgaXMgZW1wdHkgYW5kIHByZXYgJ24tMScgY2VsbHMgYXJlIGVtcHR5IGhvcml6b250YWxseVxuICAgICAgICBpZiAoY2VsbCA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgaW5kZXhGb3VuZCA9IHRydWU7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2wgLSBpXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gT25lIGFkZGl0aW9uYWwgY2hlY2sgYWZ0ZXIgaW5kZXggaXMgZm91bmQgaXMgdG8gbWFrZSBzdXJlIHRoZXJlIGlzIGF0bGVhc3Qgb25lIGNlbGwgZW1wdHkgYmV0d2VlbiBjb25zZWN1dGl2ZSBzaGlwcyBpbiBvcmRlciB0byBtYWtlIGF1dG8gc2hpcHMgcGxhY2VtZW50IG1vcmUgbG9naWNhbCBhbmQgbGVzcyByYW5kb20uXG4gICAgICAgIGlmIChpbmRleEZvdW5kKSB7XG4gICAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCdzIGFsbCBjZWxscyBhcmUgYXdheSBmcm9tIGNvcm5lciByb3dzIGFuZCBjb2x1bW5zXG4gICAgICAgICAgaWYgKHJvdyArIDEgPD0gOSAmJiByb3cgLSAxID49IDAgJiYgY29sICsgMSA8PSA5ICYmIGNvbCAtIGxlbmd0aCAtIDEgPj0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2wgKyAxXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sIC0gbGVuZ3RoXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93ICsgMV1bY29sIC0gaV0gIT09IFwiZW1wdHlcIiB8fFxuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbcm93IC0gMV1bY29sIC0gaV0gIT09IFwiZW1wdHlcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93ID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyArIDFdW2NvbCAtIGldICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvdyA9PT0gOSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgLSAxXVtjb2wgLSBpXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2wgPT09IDkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sIC0gbGVuZ3RoXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbCAtIGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2wgKyAxXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgIHdoaWxlICghaW5kZXhGb3VuZCkge1xuICAgICAgICByb3cgPSBsZW5ndGggLSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gKGxlbmd0aCAtIDEpKSk7XG4gICAgICAgIGNvbCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgY2VsbCA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgICAgICAvLyBDaGVjayBpZiBjdXJyZW50IGNlbGwgaXMgZW1wdHkgYW5kIHByZXYgJ24tMScgY2VsbHMgYXJlIGVtcHR5IHZlcnRpY2FsbHlcbiAgICAgICAgaWYgKGNlbGwgPT09IFwiZW1wdHlcIikge1xuICAgICAgICAgIGluZGV4Rm91bmQgPSB0cnVlO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyAtIGldW2NvbF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBPbmUgYWRkaXRpb25hbCBjaGVjayBhZnRlciBpbmRleCBpcyBmb3VuZCBpcyB0byBtYWtlIHN1cmUgdGhlcmUgaXMgYXRsZWFzdCBvbmUgY2VsbCBlbXB0eSBiZXR3ZWVuIGNvbnNlY3V0aXZlIHNoaXBzIGluIG9yZGVyIHRvIG1ha2UgYXV0byBzaGlwcyBwbGFjZW1lbnQgbW9yZSBsb2dpY2FsIGFuZCBsZXNzIHJhbmRvbS5cbiAgICAgICAgaWYgKGluZGV4Rm91bmQpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBzaGlwJ3MgYWxsIGNlbGxzIGFyZSBhd2F5IGZyb20gY29ybmVyIHJvd3MgYW5kIGNvbHVtbnNcbiAgICAgICAgICBpZiAocm93ICsgMSA8PSA5ICYmIHJvdyAtIGxlbmd0aCAtIDEgPj0gMCAmJiBjb2wgKyAxIDw9IDkgJiYgY29sIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgKyAxXVtjb2xdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gbGVuZ3RoXVtjb2xdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3cgLSBpXVtjb2wgKyAxXSAhPT0gXCJlbXB0eVwiIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3cgLSBpXVtjb2wgLSAxXSAhPT0gXCJlbXB0eVwiXG4gICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sID09PSAwKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyAtIGldW2NvbCArIDFdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbCA9PT0gOSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgLSBpXVtjb2wgLSAxXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3cgPT09IDkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyAtIGxlbmd0aF1bY29sXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvdyAtIGxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93ICsgMV1bY29sXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gW3JvdywgY29sXTtcbiAgfVxuXG4gICNwbGFjZVNpbmdsZVNoaXAoc2hpcCwgb3JpZW50KSB7XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwWzBdO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBbMl07XG4gICAgLy8gVXNlIGFycmF5IGRlc3RydWN0dXJpbmcgZm9yIGFjY2Nlc3NpbmcgZWxlbWVudHNcbiAgICBjb25zdCBbcm93LCBjb2xdID0gdGhpcy4jZ2V0U3RhcnRJbmRleChsZW5ndGgsIG9yaWVudCk7XG4gICAgLy8gVXBkYXRlIGFpIGJvYXJkIHdpdGggdGhpcyBzaGlwIGluZm9cblxuICAgIHRoaXMudXBkYXRlQm9hcmQocm93LCBjb2wsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCk7XG4gIH1cblxuICBhdXRvRmlsbFNoaXBzQm9hcmQoc2hpcHNBcnIpIHtcbiAgICBjb25zdCBvcmllbnRBcnIgPSBbXCJ4XCIsIFwieVwiXTtcbiAgICBzaGlwc0Fyci5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICAvLyBjaG9zZSBvcmllbnRhdGlvbiByYW5kb21seVxuICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICAgIGNvbnN0IG9yaWVudCA9IG9yaWVudEFycltpbmRleF07XG5cbiAgICAgIHRoaXMuI3BsYWNlU2luZ2xlU2hpcChzaGlwLCBvcmllbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVjZWl2ZSBhdHRhY2sgZnVuY3Rpb24gdG8gY2hlY2sgd2hldGhlciB0aGF0IHNob3QgaGl0IGFueSBzaGlwIG9yIGdvdCBtaXNzZWRcbiAgcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgIGNvbnN0IHJvdyA9IHBvc2l0aW9uWzBdO1xuICAgIGNvbnN0IGNvbCA9IHBvc2l0aW9uWzFdO1xuICAgIGNvbnN0IGNlbGxTdGF0dXMgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICBpZiAoY2VsbFN0YXR1cyA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IFwibWlzc1wiO1xuICAgIH0gZWxzZSBpZiAoY2VsbFN0YXR1cyAhPT0gXCJtaXNzXCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJoaXRcIikge1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBcImhpdFwiO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXR0YWNraW5nIGNlbGwgc3RhdHVzXG4gICAgcmV0dXJuIGNlbGxTdGF0dXM7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBwbGF5ZXIoKSB7XG4gIGNvbnN0IG5ld1BsYXllciA9IHt9O1xuICBuZXdQbGF5ZXIuYzEgPSBuZXcgU2hpcChcImMxXCIsIDQpO1xuICBuZXdQbGF5ZXIuZDEgPSBuZXcgU2hpcChcImQxXCIsIDMpO1xuICBuZXdQbGF5ZXIuZDIgPSBuZXcgU2hpcChcImQyXCIsIDMpO1xuICBuZXdQbGF5ZXIucDEgPSBuZXcgU2hpcChcInAxXCIsIDIpO1xuICBuZXdQbGF5ZXIucDIgPSBuZXcgU2hpcChcInAyXCIsIDIpO1xuICBuZXdQbGF5ZXIucDMgPSBuZXcgU2hpcChcInAzXCIsIDIpO1xuICBuZXdQbGF5ZXIuczEgPSBuZXcgU2hpcChcInMxXCIsIDEpO1xuICBuZXdQbGF5ZXIuczIgPSBuZXcgU2hpcChcInMyXCIsIDEpO1xuICBuZXdQbGF5ZXIuczMgPSBuZXcgU2hpcChcInMzXCIsIDEpO1xuICBuZXdQbGF5ZXIuczQgPSBuZXcgU2hpcChcInM0XCIsIDEpO1xuICBuZXdQbGF5ZXIuYWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgc2hpcE5hbWVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghbmV3UGxheWVyW3NoaXBdLnN1bmspIHtcbiAgICAgICAgc3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBzdW5rO1xuICB9O1xuXG4gIG5ld1BsYXllci5yZXNldFNoaXBzID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtcImMxXCIsIFwiZDFcIiwgXCJkMlwiLCBcInAxXCIsIFwicDJcIiwgXCJwM1wiLCBcInMxXCIsIFwiczJcIiwgXCJzM1wiLCBcInM0XCJdO1xuICAgIHNoaXBOYW1lcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBuZXdQbGF5ZXJbc2hpcF0ucmVzZXRTaGlwKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgbmV3UGxheWVyLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgcmV0dXJuIG5ld1BsYXllcjtcbn0pKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobmFtZSwgbGVuZ3RoKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdENvdW50ID0gMDtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5sZW5ndGggPT09IHRoaXMuaGl0Q291bnQpIHtcbiAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnN1bms7XG4gIH1cblxuICByZXNldFNoaXAoKSB7XG4gICAgdGhpcy5oaXRDb3VudCA9IDBcbiAgICB0aGlzLnN1bmsgPSAwXG4gIH1cblxuICBoaXQoKSB7XG4gICAgdGhpcy5oaXRDb3VudCArPSAxO1xuICB9XG59XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXG4gICB2Mi4wIHwgMjAxMTAxMjZcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxuYiwgdSwgaSwgY2VudGVyLFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGJvcmRlcjogMDtcblx0Zm9udC1zaXplOiAxMDAlO1xuXHRmb250OiBpbmhlcml0O1xuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XG5cdGRpc3BsYXk6IGJsb2NrO1xufVxuYm9keSB7XG5cdGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsIHVsIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsIHEge1xuXHRxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcbnE6YmVmb3JlLCBxOmFmdGVyIHtcblx0Y29udGVudDogJyc7XG5cdGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdGJvcmRlci1zcGFjaW5nOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvbWV5ZXItcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULGVBQWU7Q0FDZixhQUFhO0NBQ2Isd0JBQXdCO0FBQ3pCO0FBQ0EsZ0RBQWdEO0FBQ2hEOztDQUVDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7Q0FDQyxnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLFlBQVk7QUFDYjtBQUNBOztDQUVDLFdBQVc7Q0FDWCxhQUFhO0FBQ2Q7QUFDQTtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdGZvbnQtc2l6ZTogMTAwJTtcXG5cXHRmb250OiBpbmhlcml0O1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qKioqKiogRWxhZCBTaGVjaHRlcidzIFJFU0VUICoqKioqKiovXG4vKioqIGJveCBzaXppbmcgYm9yZGVyLWJveCBmb3IgYWxsIGVsZW1lbnRzICoqKi9cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5hIHtcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uIHtcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgIHBhZGRpbmc6IDA7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmZpZ3VyZSB7XG4gICAgIG1hcmdpbjogMDtcbn1cbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcbiAgICAgYm9yZGVyOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBtYXJnaW46IDA7XG59XG51bCxcbm9sLFxuZGQge1xuICAgICBtYXJnaW46IDA7XG4gICAgIHBhZGRpbmc6IDA7XG4gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICAgICBtYXJnaW46IDA7XG4gICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcbiAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG59XG5wIHtcbiAgICAgbWFyZ2luOiAwO1xufVxuY2l0ZSB7XG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbmZpZWxkc2V0IHtcbiAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBtYXJnaW46IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZVNoZWV0cy9teS1jc3MtcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQztBQUNyQywrQ0FBK0M7QUFDL0M7OztLQUdLLHNCQUFzQjtBQUMzQjtBQUNBO0tBQ0sscUJBQXFCO0tBQ3JCLGNBQWM7S0FDZCxlQUFlO0FBQ3BCO0FBQ0E7S0FDSyw2QkFBNkI7S0FDN0IsY0FBYztLQUNkLGVBQWU7S0FDZixVQUFVO0tBQ1YsZUFBZTtBQUNwQjtBQUNBO0tBQ0ssU0FBUztBQUNkO0FBQ0E7S0FDSyxTQUFTO0tBQ1QsVUFBVTtLQUNWLFNBQVM7QUFDZDtBQUNBOzs7S0FHSyxTQUFTO0tBQ1QsVUFBVTtLQUNWLGdCQUFnQjtBQUNyQjtBQUNBOzs7Ozs7S0FNSyxTQUFTO0tBQ1Qsa0JBQWtCO0tBQ2xCLG9CQUFvQjtBQUN6QjtBQUNBO0tBQ0ssU0FBUztBQUNkO0FBQ0E7S0FDSyxrQkFBa0I7QUFDdkI7QUFDQTtLQUNLLGVBQWU7S0FDZixVQUFVO0tBQ1YsU0FBUztBQUNkXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qKioqKiogRWxhZCBTaGVjaHRlcidzIFJFU0VUICoqKioqKiovXFxuLyoqKiBib3ggc2l6aW5nIGJvcmRlci1ib3ggZm9yIGFsbCBlbGVtZW50cyAqKiovXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuYSB7XFxuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uIHtcXG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICBib3JkZXItd2lkdGg6IDA7XFxuICAgICBwYWRkaW5nOiAwO1xcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5maWd1cmUge1xcbiAgICAgbWFyZ2luOiAwO1xcbn1cXG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgICBib3JkZXI6IDA7XFxuICAgICBwYWRkaW5nOiAwO1xcbiAgICAgbWFyZ2luOiAwO1xcbn1cXG51bCxcXG5vbCxcXG5kZCB7XFxuICAgICBtYXJnaW46IDA7XFxuICAgICBwYWRkaW5nOiAwO1xcbiAgICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgICAgbWFyZ2luOiAwO1xcbiAgICAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgICAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcbnAge1xcbiAgICAgbWFyZ2luOiAwO1xcbn1cXG5jaXRlIHtcXG4gICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuZmllbGRzZXQge1xcbiAgICAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgICAgcGFkZGluZzogMDtcXG4gICAgIG1hcmdpbjogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBcXGBtYWluXFxgIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBcXGBoMVxcYCBlbGVtZW50cyB3aXRoaW4gXFxgc2VjdGlvblxcYCBhbmRcbiAqIFxcYGFydGljbGVcXGAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBcXGBlbVxcYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgXFxgc3ViXFxgIGFuZCBcXGBzdXBcXGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBcXGBpbmhlcml0XFxgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZVNoZWV0cy9ub3JtYWxpemUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLDJFQUEyRTs7QUFFM0U7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSxpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLDhCQUE4QixFQUFFLE1BQU07QUFDeEM7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLFNBQVM7QUFDWDs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLHVCQUF1QixFQUFFLE1BQU07RUFDL0IsU0FBUyxFQUFFLE1BQU07RUFDakIsaUJBQWlCLEVBQUUsTUFBTTtBQUMzQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSw2QkFBNkI7QUFDL0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsbUJBQW1CLEVBQUUsTUFBTTtFQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDM0M7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsbUJBQW1CO0FBQ3JCOztBQUVBOzs7RUFHRTs7QUFFRjs7O0VBR0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLGNBQWM7RUFDZCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjs7Ozs7RUFLRSxvQkFBb0IsRUFBRSxNQUFNO0VBQzVCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLGlCQUFpQixFQUFFLE1BQU07RUFDekIsU0FBUyxFQUFFLE1BQU07QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1FBQ1EsTUFBTTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7U0FDUyxNQUFNO0VBQ2Isb0JBQW9CO0FBQ3RCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsMEJBQTBCO0FBQzVCOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDhCQUE4QjtBQUNoQzs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLDhCQUE4QjtBQUNoQzs7QUFFQTs7Ozs7RUFLRTs7QUFFRjtFQUNFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsY0FBYyxFQUFFLE1BQU07RUFDdEIsY0FBYyxFQUFFLE1BQU07RUFDdEIsZUFBZSxFQUFFLE1BQU07RUFDdkIsVUFBVSxFQUFFLE1BQU07RUFDbEIsbUJBQW1CLEVBQUUsTUFBTTtBQUM3Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7OztFQUdFOztBQUVGOztFQUVFLHNCQUFzQixFQUFFLE1BQU07RUFDOUIsVUFBVSxFQUFFLE1BQU07QUFDcEI7O0FBRUE7O0VBRUU7O0FBRUY7O0VBRUUsWUFBWTtBQUNkOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDZCQUE2QixFQUFFLE1BQU07RUFDckMsb0JBQW9CLEVBQUUsTUFBTTtBQUM5Qjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSwwQkFBMEIsRUFBRSxNQUFNO0VBQ2xDLGFBQWEsRUFBRSxNQUFNO0FBQ3ZCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xcblxcbi8qIERvY3VtZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXFxuICovXFxuXFxuaHRtbCB7XFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXFxufVxcblxcbi8qIFNlY3Rpb25zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxcbiAqL1xcblxcbm1haW4ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG4gIGZvbnQtc2l6ZTogMmVtO1xcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogR3JvdXBpbmcgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cXG4gKi9cXG5cXG5ociB7XFxuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcbiAgaGVpZ2h0OiAwOyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5wcmUge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXFxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuY29kZSxcXG5rYmQsXFxuc2FtcCB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cXG4gKiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3ViLFxcbnN1cCB7XFxuICBmb250LXNpemU6IDc1JTtcXG4gIGxpbmUtaGVpZ2h0OiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5zdWIge1xcbiAgYm90dG9tOiAtMC4yNWVtO1xcbn1cXG5cXG5zdXAge1xcbiAgdG9wOiAtMC41ZW07XFxufVxcblxcbi8qIEVtYmVkZGVkIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuaW1nIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuLyogRm9ybXNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxub3B0Z3JvdXAsXFxuc2VsZWN0LFxcbnRleHRhcmVhIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cXG4gKi9cXG5cXG5idXR0b24sXFxuaW5wdXQgeyAvKiAxICovXFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXFxuICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuZmllbGRzZXQge1xcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXFxuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAzICovXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZXh0YXJlYSB7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxcbiAqL1xcblxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdLFxcblt0eXBlPVxcXCJyYWRpb1xcXCJdIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cXG4gKi9cXG5cXG5bdHlwZT1cXFwic2VhcmNoXFxcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXFxuICBmb250OiBpbmhlcml0OyAvKiAyICovXFxufVxcblxcbi8qIEludGVyYWN0aXZlXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXFxuICovXFxuXFxuZGV0YWlscyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc3VtbWFyeSB7XFxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XFxufVxcblxcbi8qIE1pc2NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHkge1xuICBmb250LXNpemU6IGNhbGMoMTZyZW0gKyAoMjAgLSAxNikgKiAoKDEwMHZ3IC0gMzIwcmVtKSAvICgxOTIwIC0gMzIwKSkpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5nYW1lLXRpdGxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMnZ3IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiVG91cm5leVwiO1xuICBmb250OiBib2xkO1xuICBmb250LXNpemU6IGNhbGMoMjhyZW0gKyAoODAgLSAyOCkgKiAoKDEwMHZ3IC0gMzIwcmVtKSAvICgxOTIwIC0gMzIwKSkpO1xuICBjb2xvcjogIzUwMDcyNDtcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uaW5pdGlhbC1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiA4MHZoO1xuICB6LWluZGV4OiAzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIyMDA2O1xuICBib3gtc2hhZG93OiAzcmVtIDNyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRvcDogMTB2aDtcbiAgbGVmdDogMjB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5nYW1lLXRpdGxlLmluaXQtcGFnZSB7XG4gIGNvbG9yOiAjNTk3OGY1O1xufVxuXG5idXR0b24uZ2FtZS1zdGFydC5pbml0LXBhZ2UsXG4ucGxheS1hZ2FpbiB7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZzogNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU5NzhmNTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xufVxuXG4uaW5pdGlhbC1wYWdlLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5pbml0aWFsLXBhZ2UuaGlkZSA+IDpudGgtY2hpbGQobikge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5pbml0aWFsLXBhZ2Uuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogODB2aDtcbiAgcGFkZGluZzogMnZ3O1xuICB6LWluZGV4OiAyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJiOGI3O1xuICBib3gtc2hhZG93OiAzcmVtIDNyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRvcDogMTB2aDtcbiAgbGVmdDogMjB2dztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5zaGlwLXBsYWNlbWVudC1wYWdlLmhpZGUge1xuICBvcGFjaXR5OiAwO1xuICBkaXNwbGF5OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnNoaXAtcGxhY2VtZW50LXBhZ2Uuc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5zaGlwLW5hbWUge1xuICBwYWRkaW5nOiA1cmVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnJvdGF0ZS1idG4ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogIzBmNzY2ZTtcbiAgcGFkZGluZzogMXJlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGdhcDogMXZ3O1xufVxuXG4ucm90YXRlLWJ0bjpob3ZlciB7XG4gIG91dGxpbmU6IDFyZW0gc29saWQgIzYzNjE2MTtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbn1cblxuLnJvdGF0ZS10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXJlbSBkYXNoZWQgIzBmNzY2ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5yYW5kb20taWNvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3aWR0aDogY2FsYygxNnJlbSArICgyMiAtIDE2KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDkyMCAtIDMyMCkpKTtcbn1cblxuLnNoaXAtcGxhY2VtZW50LXBhZ2UgLnlvdXItdGFibGUgLnRhYmxlLWNlbGwge1xuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKDExMSwgMTExLCAyMTQpO1xufVxuXG4uZ2FtZXBsYXktcGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFyZW0gc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG59XG5cbi5nYW1lcGxheS1wYWdlLmhpZGUge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmdhbWVwbGF5LXBhZ2Uuc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi50dXJuLW1lc3NhZ2Uge1xuICB3aWR0aDogMTJ2dztcbiAgcGFkZGluZzogMC41dnc7XG4gIG1hcmdpbjogMXZ3IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWRzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMnZ3IGF1dG87XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDI1dnc7XG4gIHBhZGRpbmc6IDJ2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA1dnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi55b3VyLWdyaWQsXG4ub3Bwb25lbnQtZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDF2dztcbn1cblxuLnlvdXItdGFibGUsXG4ub3Bwb25lbnQtdGFibGUge1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRhYmxlLWNlbGwge1xuICB3aWR0aDogMnZ3O1xuICBoZWlnaHQ6IDJ2dztcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLm1vdmluZyB7XG4gIGJvcmRlcjogMXJlbSBkYXNoZWQgIzU5NzhmNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wbGFjZWQge1xuICBib3JkZXI6IDJyZW0gc29saWQgYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uc3VuayB7XG4gIGJvcmRlcjogM3JlbSBzb2xpZCByZWQ7XG59XG5cbi55b3VyLXRhYmxlIC50YWJsZS1jZWxsIHtcbiAgYm9yZGVyOiAxcmVtIHNvbGlkICM1OTc4ZjU7XG59XG5cbi55b3VyLXRhYmxlIC50YWJsZS1jZWxsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ub3Bwb25lbnQtdGFibGUgLnRhYmxlLWNlbGwge1xuICBib3JkZXI6IDFyZW0gc29saWQgI2NjYztcbn1cblxuLnlvdXItdGFibGUtZ2FtZXBsYXktcGFnZSA6bnRoLWNoaWxkKG4pIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4ub3Bwb25lbnQtdGFibGUgLnRhYmxlLWNlbGw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5nYW1lb3Zlci1jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgei1pbmRleDogNTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbn1cblxuLmdhbWVvdmVyLWNvbnRhaW5lci5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAxcztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5nYW1lb3Zlci1jb250YWluZXIuc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuLmdhbWVvdmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbGVmdDogMzB2dztcbiAgdG9wOiAzMHZoO1xuICB6LWluZGV4OiA0O1xuICB3aWR0aDogNDB2dztcbiAgaGVpZ2h0OiA0MHZoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIyMDA2O1xuICBjb2xvcjogI2NjYztcbiAgYm9yZGVyOiAxcmVtIHNvbGlkO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xufVxuXG4ubW9kYWwtbXNnIHtcbiAgZm9udC1zaXplOiA0OHJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlU2hlZXRzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxzRUFBc0U7RUFDdEUsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VB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QUFZO0VBQ1osYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isa0NBQWtDO0VBQ2xDLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxjQUFjOztFQUVkLG9DQUFvQztFQUNwQyxvQkFBb0I7RUFDcEIsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBmb250LXNpemU6IGNhbGMoMTZyZW0gKyAoMjAgLSAxNikgKiAoKDEwMHZ3IC0gMzIwcmVtKSAvICgxOTIwIC0gMzIwKSkpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4uZ2FtZS10aXRsZSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMnZ3IGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogXFxcIlRvdXJuZXlcXFwiO1xcbiAgZm9udDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogY2FsYygyOHJlbSArICg4MCAtIDI4KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDE5MjAgLSAzMjApKSk7XFxuICBjb2xvcjogIzUwMDcyNDtcXG4gIG1hcmdpbi1ib3R0b206IDV2dztcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5pbml0aWFsLXBhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICB6LWluZGV4OiAzO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyMjAwNjtcXG4gIGJveC1zaGFkb3c6IDNyZW0gM3JlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDIwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmdhbWUtdGl0bGUuaW5pdC1wYWdlIHtcXG4gIGNvbG9yOiAjNTk3OGY1O1xcbn1cXG5cXG5idXR0b24uZ2FtZS1zdGFydC5pbml0LXBhZ2UsXFxuLnBsYXktYWdhaW4ge1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHBhZGRpbmc6IDVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk3OGY1O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLmluaXRpYWwtcGFnZS5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmluaXRpYWwtcGFnZS5oaWRlID4gOm50aC1jaGlsZChuKSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmluaXRpYWwtcGFnZS5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LXBhZ2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICBwYWRkaW5nOiAydnc7XFxuICB6LWluZGV4OiAyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYjhiNztcXG4gIGJveC1zaGFkb3c6IDNyZW0gM3JlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHRvcDogMTB2aDtcXG4gIGxlZnQ6IDIwdnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LXBhZ2UuaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtcGFnZS5zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnNoaXAtbmFtZSB7XFxuICBwYWRkaW5nOiA1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5yb3RhdGUtYnRuIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6ICMwZjc2NmU7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi5yb3RhdGUtYnRuOmhvdmVyIHtcXG4gIG91dGxpbmU6IDFyZW0gc29saWQgIzYzNjE2MTtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi5yb3RhdGUtdGV4dCB7XFxuICBib3JkZXItYm90dG9tOiAxcmVtIGRhc2hlZCAjMGY3NjZlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5yYW5kb20taWNvbiB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHdpZHRoOiBjYWxjKDE2cmVtICsgKDIyIC0gMTYpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoOTIwIC0gMzIwKSkpO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtcGFnZSAueW91ci10YWJsZSAudGFibGUtY2VsbCB7XFxuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKDExMSwgMTExLCAyMTQpO1xcbn1cXG5cXG4uZ2FtZXBsYXktcGFnZSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICBib3JkZXI6IDFyZW0gc29saWQ7XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4uZ2FtZXBsYXktcGFnZS5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVwbGF5LXBhZ2Uuc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnR1cm4tbWVzc2FnZSB7XFxuICB3aWR0aDogMTJ2dztcXG4gIHBhZGRpbmc6IDAuNXZ3O1xcbiAgbWFyZ2luOiAxdncgYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XFxuICBib3JkZXItcmFkaXVzOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZ3JpZHMtY29udGFpbmVyIHtcXG4gIG1hcmdpbjogMnZ3IGF1dG87XFxuICB3aWR0aDogNjB2dztcXG4gIGhlaWdodDogMjV2dztcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGdhcDogNXZ3O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnlvdXItZ3JpZCxcXG4ub3Bwb25lbnQtZ3JpZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4ueW91ci10YWJsZSxcXG4ub3Bwb25lbnQtdGFibGUge1xcbiAgd2lkdGg6IDIwdnc7XFxuICBoZWlnaHQ6IDIwdnc7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnRhYmxlLWNlbGwge1xcbiAgd2lkdGg6IDJ2dztcXG4gIGhlaWdodDogMnZ3O1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLm1vdmluZyB7XFxuICBib3JkZXI6IDFyZW0gZGFzaGVkICM1OTc4ZjU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnBsYWNlZCB7XFxuICBib3JkZXI6IDJyZW0gc29saWQgYmx1ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5zdW5rIHtcXG4gIGJvcmRlcjogM3JlbSBzb2xpZCByZWQ7XFxufVxcblxcbi55b3VyLXRhYmxlIC50YWJsZS1jZWxsIHtcXG4gIGJvcmRlcjogMXJlbSBzb2xpZCAjNTk3OGY1O1xcbn1cXG5cXG4ueW91ci10YWJsZSAudGFibGUtY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHBvbmVudC10YWJsZSAudGFibGUtY2VsbCB7XFxuICBib3JkZXI6IDFyZW0gc29saWQgI2NjYztcXG59XFxuXFxuLnlvdXItdGFibGUtZ2FtZXBsYXktcGFnZSA6bnRoLWNoaWxkKG4pIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5vcHBvbmVudC10YWJsZSAudGFibGUtY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHotaW5kZXg6IDU7XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbn1cXG5cXG4uZ2FtZW92ZXItY29udGFpbmVyLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICB3aWR0aDogMDtcXG4gIGhlaWdodDogMDtcXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIuc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmdhbWVvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogMzB2dztcXG4gIHRvcDogMzB2aDtcXG4gIHotaW5kZXg6IDQ7XFxuICB3aWR0aDogNDB2dztcXG4gIGhlaWdodDogNDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjIwMDY7XFxuICBjb2xvcjogI2NjYztcXG4gIGJvcmRlcjogMXJlbSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi5tb2RhbC1tc2cge1xcbiAgZm9udC1zaXplOiA0OHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICAgZm9udC1zaXplOiAxcHg7IC8qZm9yIHVzaW5nIFJFTSB1bml0cyovXG59XG5ib2R5IHtcbiAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgICBmb250LXNpemU6IDE2cmVtO1xuICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICBjb2xvcjogIzIyMjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlU2hlZXRzL3R5cG9ncmFwaHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0tBQ0ssY0FBYyxFQUFFLHNCQUFzQjtBQUMzQztBQUNBO0tBQ0ssaUpBQWlKO0tBQ2pKLGdCQUFnQjtLQUNoQixnQkFBZ0I7S0FDaEIsZ0JBQWdCO0tBQ2hCLFdBQVc7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgICBmb250LXNpemU6IDFweDsgLypmb3IgdXNpbmcgUkVNIHVuaXRzKi9cXG59XFxuYm9keSB7XFxuICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsIFxcXCJVYnVudHVcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgZm9udC1zaXplOiAxNnJlbTtcXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICAgY29sb3I6ICMyMjI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21leWVyLXJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWV5ZXItcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWNzcy1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWNzcy1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zdHlsZVNoZWV0cy9tZXllci1yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL215LWNzcy1yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZVNoZWV0cy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgcmFuZG9tSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3JhbmRvbS5zdmdcIjtcblxuLy8gSW1wb3J0IG1vZHVsZXMgaW50byBtYWluIGFwcC5qcyBmaWxlXG5pbXBvcnQgZG9tTWFuaXB1bGF0aW9uIGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBhaSBmcm9tIFwiLi9haVwiO1xuXG4vLyBDcmVhdGUgYW5kIGFwcGVuZCBzaGlwIHJvdGF0ZSBpbWFnZSBpY29uIHRvIHRoZSByb3RhdGUgQnRuXG5jb25zdCByYW5kSW1nID0gbmV3IEltYWdlKCk7XG5yYW5kSW1nLnNyYyA9IHJhbmRvbUljb247XG5yYW5kSW1nLmNsYXNzTGlzdC5hZGQoXCJyYW5kb20taWNvblwiKTtcbnJhbmRJbWcuYWx0ID0gXCJSYW5kb20gSWNvblwiO1xuY29uc3Qgcm90YXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5yb3RhdGUtYnRuXCIpO1xucm90YXRlQnRuLmFwcGVuZENoaWxkKHJhbmRJbWcpO1xuXG4vLyBCdWlsZCBlbXB0eSBnYW1lIGJvYXJkIGZvciBwbGF5ZXIxXG5wbGF5ZXIuZ2FtZUJvYXJkLmJ1aWxkQm9hcmQoKTtcblxuLy8gRGVmaW5lIGFpJ3MgZW1wdHkgZ2FtZUJvYXJkXG5haS5nYW1lQm9hcmQuYnVpbGRCb2FyZCgpO1xuXG5mdW5jdGlvbiByZXNldEdhbWUoKSB7XG4gIC8vIFJlc2V0IGJvdGggZ2FtZSBib2FyZHNcbiAgcGxheWVyLmdhbWVCb2FyZC5yZXNldEJvYXJkKCk7XG4gIGFpLmdhbWVCb2FyZC5yZXNldEJvYXJkKCk7XG4gIC8vIFJlc2V0IGRpc3BsYXkgdGFibGVzIGZvciBib3RoIHBsYXllcnNcbiAgZG9tTWFuaXB1bGF0aW9uLnJlc2V0VGFibGVzKCk7XG4gIC8vIFJlc2V0IHBsYXllcidzL2FpJ3Mgc2hpcHMgc3RhdHVzXG4gIHBsYXllci5yZXNldFNoaXBzKCk7XG4gIGFpLnJlc2V0U2hpcHMoKTtcbiAgLy8gUmVtb3ZlIHNoaXBzIGZyb20gdGFibGVzXG4gIGRvbU1hbmlwdWxhdGlvbi5yZW1vdmVTaGlwcygpO1xuICAvLyBOb3cgaGlkZSBnYW1lIHBhZ2VcbiAgZG9tTWFuaXB1bGF0aW9uLmhpZGVHYW1lUGFnZSgpO1xuICAvLyBTaG93IHNoaXAgcGxhY2VtZW50IHBhZ2VcbiAgZG9tTWFuaXB1bGF0aW9uLnNob3dTaGlwUGFnZSgpO1xuICAvLyBOb3cgaGlkZSBtb2RhbCBjb250YWluZXJcbiAgZG9tTWFuaXB1bGF0aW9uLmhpZGVNb2RhbENvbnRhaW5lcigpO1xuICAvLyBOb3cgbWFuYWdlIHNoaXBzIHBsYWNlbWVudFxuICBtYW5hZ2VTaGlwc1BsYWNlbWVudCgpO1xufVxuXG4vLyBEZWNsYXJlIGdhbWUgT3ZlclxuZnVuY3Rpb24gZ2FtZU92ZXIocGxheWVyTmFtZSkge1xuICBjb25zdCBnYW1lT3ZlckNvbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVvdmVyLWNvbnRhaW5lclwiKTtcbiAgY29uc3QgbW9kYWxNc2cgPSBnYW1lT3ZlckNvbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbC1tc2dcIik7XG4gIGdhbWVPdmVyQ29udC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcblxuICBpZiAocGxheWVyTmFtZSA9PT0gXCJhaVwiKSB7XG4gICAgbW9kYWxNc2cudGV4dENvbnRlbnQgPSBcIllvdSBXaW4hXCI7XG4gIH0gZWxzZSBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgIG1vZGFsTXNnLnRleHRDb250ZW50ID0gXCJZb3UgTG9zZSFcIjtcbiAgfVxuXG4gIC8vIEFjY2VzcyBwbGF5IGFnYWluIGJ1dHRvblxuICBjb25zdCBwbGF5QWdhaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXktYWdhaW5cIik7XG5cbiAgcGxheUFnYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldEdhbWUpO1xufVxuXG5mdW5jdGlvbiBpc0dhbWVPdmVyKHBsYXllck5hbWUpIHtcbiAgbGV0IGlzU3VuaztcbiAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgIGlzU3VuayA9IGFpLmFsbFN1bmsoKTtcbiAgfSBlbHNlIGlmIChwbGF5ZXJOYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgaXNTdW5rID0gcGxheWVyLmFsbFN1bmsoKTtcbiAgfVxuICByZXR1cm4gaXNTdW5rO1xufVxuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG4gIGNvbnN0IG9wcFRhYmxlID0gZ2FtZVBhZ2UucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC10YWJsZVwiKTtcbiAgY29uc3QgeW91clRhYmxlID0gZ2FtZVBhZ2UucXVlcnlTZWxlY3RvcihcIi55b3VyLXRhYmxlXCIpO1xuXG4gIGZ1bmN0aW9uIGluaXRUdXJuKCkge1xuICAgIGNvbnN0IHBsYXllcnMgPSBbXCJwbGF5ZXJcIiwgXCJhaVwiXTtcbiAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgIHJldHVybiBwbGF5ZXJzW2luZGV4XTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc2FibGVPcHBUYWJsZSgpIHtcbiAgICBjb25zdCBjZWxscyA9IG9wcFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGUtY2VsbFwiKTtcbiAgICBvcHBUYWJsZS5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBjZWxsQ29weSA9IGNlbGw7XG4gICAgICBjZWxsQ29weS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBlbmFibGVPcHBUYWJsZSgpIHtcbiAgICBjb25zdCBjZWxscyA9IG9wcFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGUtY2VsbFwiKTtcbiAgICBvcHBUYWJsZS5zdHlsZS5vcGFjaXR5ID0gXCIwLjVcIjtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBjZWxsQ29weSA9IGNlbGw7XG4gICAgICBjZWxsQ29weS5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJhbGxcIjtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNldCBpbml0aWFsIHR1cm5cbiAgbGV0IHR1cm4gPSBpbml0VHVybigpO1xuXG4gIGZ1bmN0aW9uIHRvZ2dsZVR1cm4oKSB7XG4gICAgaWYgKHR1cm4gPT09IFwiYWlcIikgdHVybiA9IFwicGxheWVyXCI7XG4gICAgZWxzZSB0dXJuID0gXCJhaVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2hpcFN0YXR1cyhwbGF5ZXJOYW1lLCBzaGlwTmFtZSkge1xuICAgIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHNoaXAgaGl0IGNvdW50XG4gICAgICBhaVtzaGlwTmFtZV0uaGl0KCk7XG4gICAgICAvLyBjaGVjayBpZiBzaGlwIHN1bmtcbiAgICAgIGFpW3NoaXBOYW1lXS5pc1N1bmsoKTtcbiAgICB9XG4gICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHNoaXAgaGl0IGNvdW50XG4gICAgICBwbGF5ZXJbc2hpcE5hbWVdLmhpdCgpO1xuICAgICAgLy8gY2hlY2sgaWYgc2hpcCBzdW5rXG4gICAgICBwbGF5ZXJbc2hpcE5hbWVdLmlzU3VuaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBsYXkgYWkgdHVyblxuICBmdW5jdGlvbiBhaVR1cm4oKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gYWkuZ2V0SGl0Q29vcmQoKTtcbiAgICB3aGlsZSAoIWFpLmlzQXR0YWNrVmFsaWQocG9zaXRpb24pKSB7XG4gICAgICBwb3NpdGlvbiA9IGFpLmdldEhpdENvb3JkKCk7XG4gICAgfVxuXG4gICAgLy8gR290IHZhbGlkIHBvc2l0aW9uIHdoaWNoIGlzIGVpdGhlciBzaGlwIHBvc2l0aW9uIG9yIGVtcHR5IGNlbGxcbiAgICBjb25zdCBjZWxsU3RhdHVzID0gcGxheWVyLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcblxuICAgIGlmIChjZWxsU3RhdHVzICE9PSBcImVtcHR5XCIpIHtcbiAgICAgIC8vIGF0dGFjayBpcyBvbiB0aGUgc2hpcFxuICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjZWxsU3RhdHVzO1xuICAgICAgLy8gVXBkYXRlIHNoaXAgaGl0IHN0YXR1c1xuICAgICAgdXBkYXRlU2hpcFN0YXR1cyhcInBsYXllclwiLCBzaGlwTmFtZSk7XG4gICAgICBjb25zdCBpc1N1bmsgPSBwbGF5ZXJbc2hpcE5hbWVdLmlzU3VuaygpO1xuICAgICAgaWYgKGlzU3Vuaykge1xuICAgICAgICBkb21NYW5pcHVsYXRpb24uc2hpcFN1bmsoXCJwbGF5ZXJcIiwgc2hpcE5hbWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgbG9zZSA9IGlzR2FtZU92ZXIoXCJwbGF5ZXJcIik7XG4gICAgICBpZiAobG9zZSkgZ2FtZU92ZXIoXCJwbGF5ZXJcIik7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldENlbGwgPSB5b3VyVGFibGUucm93c1twb3NpdGlvblswXV0uY2VsbHNbcG9zaXRpb25bMV1dO1xuICAgIC8vIFVwZGF0ZSBjZWxsIHN0YXR1cyBtaXNzLCBoaXQgZXRjIGluIHRoZSBET01cbiAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlQ2VsbEhpdCh0YXJnZXRDZWxsLCBjZWxsU3RhdHVzKTtcbiAgICAvLyBGaW5hbGx5IGVuYWJsZSBvcHBvbmVudCdzIHRhYmxlXG4gICAgZW5hYmxlT3BwVGFibGUoKTtcbiAgICAvLyBUb2dnbGUgdHVyblxuICAgIHRvZ2dsZVR1cm4oKTtcbiAgICAvLyBUaGVuIGRpc3BsYXkgdGhlIG1lc3NhZ2VcbiAgICBkb21NYW5pcHVsYXRpb24udHVybk1lc3NhZ2UodHVybik7XG4gIH1cblxuICAvLyBQbGF5IGZpcnN0IHR1cm5cbiAgZG9tTWFuaXB1bGF0aW9uLnR1cm5NZXNzYWdlKHR1cm4pO1xuICBpZiAodHVybiA9PT0gXCJhaVwiKSB7XG4gICAgLy8gSWYgZmlyc3QgdHVybiBpcyBvZiBhaSB0aGVuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhaVR1cm4oKTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHBsYXllclR1cm4oZSkge1xuICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRhYmxlLWNlbGxcIikpIHtcbiAgICAgIGNvbnN0IHRhcmdldENlbGwgPSBlLnRhcmdldDtcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gW107XG4gICAgICBwb3NpdGlvblswXSA9IE51bWJlcih0YXJnZXRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpKTtcbiAgICAgIHBvc2l0aW9uWzFdID0gTnVtYmVyKHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1jb2xcIikpO1xuICAgICAgY29uc3QgY2VsbFN0YXR1cyA9IGFpLmdhbWVCb2FyZC5yZWNlaXZlQXR0YWNrKHBvc2l0aW9uKTtcblxuICAgICAgLy8gVXBkYXRlIGNlbGwgaW4gdGhlIERPTVxuICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUNlbGxIaXQodGFyZ2V0Q2VsbCwgY2VsbFN0YXR1cyk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHNoaXAgZ290IGhpdFxuICAgICAgaWYgKGNlbGxTdGF0dXMgIT09IFwibWlzc1wiICYmIGNlbGxTdGF0dXMgIT09IFwiaGl0XCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIC8vIFNoaXAgZm91bmRcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjZWxsU3RhdHVzO1xuXG4gICAgICAgIHVwZGF0ZVNoaXBTdGF0dXMoXCJhaVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIC8vIENoZWNrIGlmIHNoaXAgZ290IHN1bmtcbiAgICAgICAgY29uc3QgaXNTdW5rID0gYWlbc2hpcE5hbWVdLmlzU3VuaygpO1xuICAgICAgICBpZiAoaXNTdW5rKSB7XG4gICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnNoaXBTdW5rKFwiYWlcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENoYW5nZSB0dXJuIGlmIHNob3QgZ290IGhpdCBvciBtaXNzXG4gICAgICBpZiAoKGNlbGxTdGF0dXMgIT09IFwibWlzc1wiICYmIGNlbGxTdGF0dXMgIT09IFwiaGl0XCIpIHx8IGNlbGxTdGF0dXMgPT09IFwiZW1wdHlcIikge1xuICAgICAgICAvLyBDaGVjayB3aGV0aGVyIGdhbWUgaXMgb3ZlciBvciBub3RcbiAgICAgICAgY29uc3QgbG9zZSA9IGlzR2FtZU92ZXIoXCJhaVwiKTtcbiAgICAgICAgaWYgKGxvc2UpIHtcbiAgICAgICAgICBnYW1lT3ZlcihcImFpXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRvZ2dsZSB0dXJuXG4gICAgICAgICAgdG9nZ2xlVHVybigpO1xuICAgICAgICAgIC8vIERpc3BsYXkgdHVybiBtZXNzYWdlXG4gICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnR1cm5NZXNzYWdlKHR1cm4pO1xuICAgICAgICAgIC8vIERpc2FibGUgb3Bwb25lbnQgdGFibGUgZHVyaW5nIGFpJ3MgdHVyblxuICAgICAgICAgIGRpc2FibGVPcHBUYWJsZSgpO1xuICAgICAgICAgIC8vIENhbGwgYWkncyB0dXJuXG4gICAgICAgICAgc2V0VGltZW91dChhaVR1cm4sIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gTGlzdGVuIHBsYXllcidzIGNsaWNrIG9uIG9wcG9uZW50J3MgdGFibGVcbiAgb3BwVGFibGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHBsYXllclR1cm4pO1xufVxuXG5jb25zdCBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLXN0YXJ0XCIpO1xuXG4vLyBEZWZpbmUgc2hpcHMgbmFtZXNcbmNvbnN0IHNoaXBOYW1lcyA9IFtcbiAgW1wiYzFcIiwgXCJDYXJyaWVyXCIsIDRdLFxuICBbXCJkMVwiLCBcIkRpc3Ryb3llclwiLCAzXSxcbiAgW1wiZDJcIiwgXCJEaXN0cm95ZXJcIiwgM10sXG4gIFtcInAxXCIsIFwiUGF0cm9sIEJvYXRcIiwgMl0sXG4gIFtcInAyXCIsIFwiUGF0cm9sIEJvYXRcIiwgMl0sXG4gIFtcInAzXCIsIFwiUGF0cm9sIEJvYXRcIiwgMl0sXG4gIFtcInMxXCIsIFwiU2luZ2xldG9uXCIsIDFdLFxuICBbXCJzMlwiLCBcIlNpbmdsZXRvblwiLCAxXSxcbiAgW1wiczNcIiwgXCJTaW5nbGV0b25cIiwgMV0sXG4gIFtcInM0XCIsIFwiU2luZ2xldG9uXCIsIDFdLFxuXTtcblxuZnVuY3Rpb24gbWFuYWdlU2hpcHNQbGFjZW1lbnQoKSB7XG4gIC8vIEhpZGUgaW5pdGlhbCBwYWdlIHdoZW4gcGxheSBidXR0b24gY2xpY2tlZFxuICBkb21NYW5pcHVsYXRpb24uaGlkZUluaXRQYWdlKCk7XG4gIC8vIFNob3cgc2hpcCBwbGFjZW1lbnQgcGFnZVxuICBkb21NYW5pcHVsYXRpb24uc2hvd1NoaXBQYWdlKCk7XG5cbiAgLy8gQXV0byBmaWxsIGFpIGJvYXJkIDJEIGFycmF5IHdpdGggc2hpcHNcbiAgYWkuZ2FtZUJvYXJkLmF1dG9GaWxsU2hpcHNCb2FyZChzaGlwTmFtZXMuc2xpY2UoKSk7XG4gIC8vIExldCBwbGF5ZXIgcGxhY2Ugc2hpcHMgb24gdGhlIGJvYXJkXG4gIGRvbU1hbmlwdWxhdGlvbi5wbGFjZVNoaXBzKHNoaXBOYW1lcy5zbGljZSgpLCBnYW1lTG9vcCk7XG59XG5cbmRvbU1hbmlwdWxhdGlvbi5oaWRlR2FtZVBhZ2UoKTtcbnBsYXlCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG1hbmFnZVNoaXBzUGxhY2VtZW50KTtcbiJdLCJuYW1lcyI6WyJHYW1lQm9hcmQiLCJTaGlwIiwicGxheWVyIiwiYWkiLCJuZXdBSSIsImMxIiwiZDEiLCJkMiIsInAxIiwicDIiLCJwMyIsInMxIiwiczIiLCJzMyIsInM0IiwiZ2FtZUJvYXJkIiwiYWxsU3VuayIsInNoaXBOYW1lcyIsImZvckVhY2giLCJzaGlwIiwic3VuayIsInJlc2V0U2hpcHMiLCJyZXNldFNoaXAiLCJpc0F0dGFja1ZhbGlkIiwicG9zaXRpb24iLCJyb3ciLCJjb2wiLCJjZWxsU3RhdHVzIiwiYm9hcmQiLCJnZXRIaXRDb29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImRvbU1hbmlwdWxhdGlvbiIsInJlc2V0VGFibGVzIiwieW91clRhYmxlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib3BwVGFibGUiLCJzZXRTaGlwVGFibGUiLCJ5b3VyQ2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3BwQ2VsbHMiLCJzZXRTaGlwQ2VsbHMiLCJjZWxsIiwibW9kaWZpZWRDZWxsIiwic2V0QXR0cmlidXRlIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJyZW1vdmVTaGlwcyIsImdhbWVQYWdlIiwic2hpcFBhZ2UiLCJzaGlwc09uU2hpcFBhZ2UiLCJzaGlwc09uR2FtZVBhZ2UiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZVNoaXAiLCJzaGlwT3duZXIiLCJzaG9ydE5hbWUiLCJsZW5ndGgiLCJvcmllbnQiLCJjcmVhdGVFbGVtZW50IiwidG9wIiwibGVmdCIsImNvbmNhdCIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY2hhbmdlT3JpZW50YXRpb24iLCJzaGlwUGxhY2VQYWdlIiwiY3VycmVudFNoaXAiLCJnZXRBdHRyaWJ1dGUiLCJ1cGRhdGVDZWxsVmFsIiwicGxheWVyTmFtZSIsInNoaXBOYW1lIiwic2hpcEVuZCIsImNvbHVtbiIsImkiLCJyb3dzIiwiY2VsbHMiLCJoaWRlU2hpcCIsImhpZGRlblNoaXAiLCJib3JkZXIiLCJhdXRvUGxhY2VTaGlwcyIsInNoaXBzQ29vcmQiLCJzaGlwRGF0YSIsImVuZCIsImdhbWVQbGF5UGFnZSIsImFwcGVuZENoaWxkIiwicm93RW5kIiwiY29sRW5kIiwiY2VsbEVuZCIsImNlbGxSZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiZ2FtZVBhZ2VSZWN0IiwiY2VsbFBvc1giLCJyaWdodCIsImNlbGxQb3NZIiwiYm90dG9tIiwicGxhY2VTaGlwcyIsImNhbGxCYWNrIiwicmVtb3ZlIiwic2hpcEFyciIsInNoaWZ0Iiwic2hpcE1lc3NhZ2UiLCJpbm5lckhUTUwiLCJpc1BsYWNlZCIsImRyYWdTaGlwIiwiZSIsInNoaXBQYWdlUmVjdCIsInRhcmdldCIsIm1hdGNoZXMiLCJjdXJyZW50Q2VsbCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0IiwiY2xpZW50WCIsImNsaWVudFkiLCJhZGRFdmVudExpc3RlbmVyIiwicm90YXRlQnRuIiwiZHJvcFNoaXAiLCJwYXJzZUludCIsImlzVmFsaWRQb3MiLCJzaGlwUmVjdCIsInNoaXBYIiwic2hpcFkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidXBkYXRlQm9hcmQiLCJzbGljZSIsImhpZGVJbml0UGFnZSIsImluaXRQYWdlIiwiaGlkZVNoaXBQYWdlIiwic2hvd1NoaXBQYWdlIiwic2hvd0dhbWVQYWdlIiwiaGlkZUdhbWVQYWdlIiwiaGlkZU1vZGFsQ29udGFpbmVyIiwibW9kYWxDb250YWluZXIiLCJ0dXJuTWVzc2FnZSIsInR1cm4iLCJtZXNzYWdlIiwidGV4dENvbnRlbnQiLCJ1cGRhdGVDZWxsSGl0IiwiaGl0U3RhdHVzIiwidGFyZ2V0Q2VsbCIsInNoaXBTdW5rIiwic2hpcHNOb2RlTGlzdCIsInNoaXBzQXJyIiwiQXJyYXkiLCJmcm9tIiwic3Vua1NoaXAiLCJuYW1lIiwib3duZXIiLCJjb25zb2xlIiwibG9nIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiX3BsYWNlU2luZ2xlU2hpcCIsIl9nZXRTdGFydEluZGV4IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJidWlsZEJvYXJkIiwiciIsImMiLCJwdXNoIiwicmVzZXRCb2FyZCIsImJvYXJkUm93IiwidXBkYXRlU2hpcHNDb29yZCIsInN0YXJ0IiwiYXV0b0ZpbGxTaGlwc0JvYXJkIiwiX3RoaXMiLCJvcmllbnRBcnIiLCJpbmRleCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZXQiLCJfcGxhY2VTaW5nbGVTaGlwMiIsImNhbGwiLCJyZWNlaXZlQXR0YWNrIiwiX2dldFN0YXJ0SW5kZXgyIiwiaW5kZXhGb3VuZCIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZSIsIl9jbGFzc1ByaXZhdGVNZXRob2RHZTIiLCJfc2xpY2VkVG9BcnJheSIsImRlZmF1bHQiLCJuZXdQbGF5ZXIiLCJoaXRDb3VudCIsImlzU3VuayIsImhpdCIsInJhbmRvbUljb24iLCJyYW5kSW1nIiwiSW1hZ2UiLCJzcmMiLCJhbHQiLCJyZXNldEdhbWUiLCJtYW5hZ2VTaGlwc1BsYWNlbWVudCIsImdhbWVPdmVyIiwiZ2FtZU92ZXJDb250IiwibW9kYWxNc2ciLCJwbGF5QWdhaW5CdG4iLCJpc0dhbWVPdmVyIiwiZ2FtZUxvb3AiLCJpbml0VHVybiIsInBsYXllcnMiLCJkaXNhYmxlT3BwVGFibGUiLCJvcGFjaXR5IiwiY2VsbENvcHkiLCJwb2ludGVyRXZlbnRzIiwiZW5hYmxlT3BwVGFibGUiLCJ0b2dnbGVUdXJuIiwidXBkYXRlU2hpcFN0YXR1cyIsImFpVHVybiIsImxvc2UiLCJzZXRUaW1lb3V0IiwicGxheWVyVHVybiIsIk51bWJlciIsInBsYXlCdG4iXSwic291cmNlUm9vdCI6IiJ9