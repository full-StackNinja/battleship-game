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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDZGQUE2RixZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxnQ0FBZ0MsMkVBQTJFLDJCQUEyQixpQkFBaUIsa0JBQWtCLHFCQUFxQixHQUFHLGlCQUFpQixnQkFBZ0IscUJBQXFCLHVCQUF1Qiw2QkFBNkIsZUFBZSwyRUFBMkUsbUJBQW1CLHVCQUF1QixxQkFBcUIsR0FBRyxtQkFBbUIsdUJBQXVCLGdCQUFnQixpQkFBaUIsZUFBZSw4QkFBOEIsa0RBQWtELGNBQWMsZUFBZSxrQkFBa0IsMkJBQTJCLGtDQUFrQyx3QkFBd0IsR0FBRywyQkFBMkIsbUJBQW1CLEdBQUcsK0NBQStDLHVCQUF1QixxQkFBcUIsa0JBQWtCLDhCQUE4QixvQkFBb0Isd0JBQXdCLEdBQUcsd0JBQXdCLGtCQUFrQix5QkFBeUIsR0FBRyxzQ0FBc0MseUJBQXlCLEdBQUcsc0JBQXNCLG1CQUFtQix3QkFBd0IsR0FBRywwQkFBMEIsdUJBQXVCLGdCQUFnQixpQkFBaUIsaUJBQWlCLGVBQWUsOEJBQThCLGtEQUFrRCxjQUFjLGVBQWUsa0JBQWtCLDJCQUEyQixrQ0FBa0Msd0JBQXdCLEdBQUcsK0JBQStCLGVBQWUsa0JBQWtCLHlCQUF5QixHQUFHLCtCQUErQixlQUFlLGtCQUFrQix3QkFBd0IsR0FBRyxnQkFBZ0Isa0JBQWtCLHNCQUFzQixHQUFHLGlCQUFpQiwyQkFBMkIsa0JBQWtCLG1CQUFtQixrQkFBa0Isd0JBQXdCLDRCQUE0QixhQUFhLEdBQUcsdUJBQXVCLGdDQUFnQyx3QkFBd0IsR0FBRyxrQkFBa0IsdUNBQXVDLHlCQUF5QixHQUFHLGtCQUFrQix5QkFBeUIsc0VBQXNFLEdBQUcsa0RBQWtELDBDQUEwQyxHQUFHLG9CQUFvQix1QkFBdUIsZUFBZSxnQkFBZ0Isd0JBQXdCLG1CQUFtQix1QkFBdUIsd0JBQXdCLEdBQUcseUJBQXlCLGVBQWUseUJBQXlCLEdBQUcseUJBQXlCLGVBQWUsd0JBQXdCLEdBQUcsbUJBQW1CLGdCQUFnQixtQkFBbUIscUJBQXFCLDhCQUE4Qix3QkFBd0IsdUJBQXVCLEdBQUcsc0JBQXNCLHFCQUFxQixnQkFBZ0IsaUJBQWlCLGlCQUFpQixrQkFBa0Isa0NBQWtDLG9CQUFvQixhQUFhLHdCQUF3QixHQUFHLGlDQUFpQyx1QkFBdUIsdUJBQXVCLGtCQUFrQiwyQkFBMkIsYUFBYSxHQUFHLG1DQUFtQyxnQkFBZ0IsaUJBQWlCLHlCQUF5QixHQUFHLGlCQUFpQixlQUFlLGdCQUFnQix3QkFBd0IsR0FBRyxhQUFhLGdDQUFnQyx5QkFBeUIsR0FBRyxhQUFhLDRCQUE0Qix5Q0FBeUMsd0JBQXdCLEdBQUcsV0FBVywyQkFBMkIsR0FBRyw2QkFBNkIsK0JBQStCLEdBQUcsbUNBQW1DLG9CQUFvQixHQUFHLGlDQUFpQyw0QkFBNEIsR0FBRyw2Q0FBNkMseUJBQXlCLHNCQUFzQixHQUFHLHVDQUF1QyxvQkFBb0IsMkJBQTJCLEdBQUcseUJBQXlCLHVCQUF1Qix1QkFBdUIsZUFBZSxpQkFBaUIsa0JBQWtCLHlDQUF5QyxXQUFXLFlBQVksYUFBYSxjQUFjLEdBQUcsOEJBQThCLGtCQUFrQix1Q0FBdUMsYUFBYSxjQUFjLDhCQUE4QixxQkFBcUIseUJBQXlCLEdBQUcsOEJBQThCLG1CQUFtQiwyQ0FBMkMseUJBQXlCLGlCQUFpQixrQkFBa0IsR0FBRyxlQUFlLHVCQUF1QixrQkFBa0IsMkJBQTJCLGtDQUFrQyx3QkFBd0IsZUFBZSxjQUFjLGVBQWUsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsZ0JBQWdCLHVCQUF1Qix3QkFBd0IsR0FBRyxnQkFBZ0IscUJBQXFCLEdBQUcscUJBQXFCO0FBQ3JoTztBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVJ2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUdBQWlHLHNCQUFzQixNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLGdDQUFnQyx1QkFBdUIsMEJBQTBCLFFBQVEsdUtBQXVLLHdCQUF3Qix3QkFBd0Isd0JBQXdCLG1CQUFtQixHQUFHLHFCQUFxQjtBQUMxakI7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNqQjFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0EscUZBQXFGO0FBQ3JGO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHFCQUFxQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzRkFBc0YscUJBQXFCO0FBQzNHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixzREFBc0QscUJBQXFCO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkQSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUE0RztBQUM1RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLDRGQUFPOzs7O0FBSXNEO0FBQzlFLE9BQU8saUVBQWUsNEZBQU8sSUFBSSw0RkFBTyxVQUFVLDRGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBNkc7QUFDN0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw2RkFBTzs7OztBQUl1RDtBQUMvRSxPQUFPLGlFQUFlLDZGQUFPLElBQUksNkZBQU8sVUFBVSw2RkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QjdFLE1BQWtHO0FBQ2xHLE1BQXdGO0FBQ3hGLE1BQStGO0FBQy9GLE1BQWtIO0FBQ2xILE1BQTJHO0FBQzNHLE1BQTJHO0FBQzNHLE1BQTBHO0FBQzFHO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsMEZBQU87Ozs7QUFJb0Q7QUFDNUUsT0FBTyxpRUFBZSwwRkFBTyxJQUFJLDBGQUFPLFVBQVUsMEZBQU8sbUJBQW1CLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekI3RSxNQUFrRztBQUNsRyxNQUF3RjtBQUN4RixNQUErRjtBQUMvRixNQUFrSDtBQUNsSCxNQUEyRztBQUMzRyxNQUEyRztBQUMzRyxNQUF1RztBQUN2RztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHVGQUFPOzs7O0FBSWlEO0FBQ3pFLE9BQU8saUVBQWUsdUZBQU8sSUFBSSx1RkFBTyxVQUFVLHVGQUFPLG1CQUFtQixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBMkc7QUFDM0c7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQywyRkFBTzs7OztBQUlxRDtBQUM3RSxPQUFPLGlFQUFlLDJGQUFPLElBQUksMkZBQU8sVUFBVSwyRkFBTyxtQkFBbUIsRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQix3QkFBd0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsaUJBQWlCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNEJBQTRCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztVQ2JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBd0M7QUFDQztBQUNIO0FBQ0M7QUFDSjtBQUNpQjs7QUFFcEQ7QUFDb0M7QUFDTjtBQUNSOztBQUV0QjtBQUNBLElBQU0wTCxPQUFPLEdBQUcsSUFBSUMsS0FBSyxDQUFDLENBQUM7QUFDM0JELE9BQU8sQ0FBQ0UsR0FBRyxHQUFHSCxxREFBVTtBQUN4QkMsT0FBTyxDQUFDekgsU0FBUyxDQUFDQyxHQUFHLENBQUMsYUFBYSxDQUFDO0FBQ3BDd0gsT0FBTyxDQUFDRyxHQUFHLEdBQUcsYUFBYTtBQUMzQixJQUFNeEUsU0FBUyxHQUFHbEYsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ3ZEaUYsU0FBUyxDQUFDOUIsV0FBVyxDQUFDbUcsT0FBTyxDQUFDOztBQUU5QjtBQUNBekwsK0NBQU0sQ0FBQ2EsU0FBUyxDQUFDaUosVUFBVSxDQUFDLENBQUM7O0FBRTdCO0FBQ0E3SiwyQ0FBRSxDQUFDWSxTQUFTLENBQUNpSixVQUFVLENBQUMsQ0FBQztBQUV6QixTQUFTK0IsU0FBU0EsQ0FBQSxFQUFHO0VBQ25CO0VBQ0E3TCwrQ0FBTSxDQUFDYSxTQUFTLENBQUNxSixVQUFVLENBQUMsQ0FBQztFQUM3QmpLLDJDQUFFLENBQUNZLFNBQVMsQ0FBQ3FKLFVBQVUsQ0FBQyxDQUFDO0VBQ3pCO0VBQ0FuSSw0Q0FBZSxDQUFDQyxXQUFXLENBQUMsQ0FBQztFQUM3QjtFQUNBaEMsK0NBQU0sQ0FBQ21CLFVBQVUsQ0FBQyxDQUFDO0VBQ25CbEIsMkNBQUUsQ0FBQ2tCLFVBQVUsQ0FBQyxDQUFDO0VBQ2Y7RUFDQVksNENBQWUsQ0FBQ2dCLFdBQVcsQ0FBQyxDQUFDO0VBQzdCO0VBQ0FoQiw0Q0FBZSxDQUFDb0csWUFBWSxDQUFDLENBQUM7RUFDOUI7RUFDQXBHLDRDQUFlLENBQUNrRyxZQUFZLENBQUMsQ0FBQztFQUM5QjtFQUNBbEcsNENBQWUsQ0FBQ3FHLGtCQUFrQixDQUFDLENBQUM7RUFDcEM7RUFDQTBELG9CQUFvQixDQUFDLENBQUM7QUFDeEI7O0FBRUE7QUFDQSxTQUFTQyxRQUFRQSxDQUFDeEgsVUFBVSxFQUFFO0VBQzVCLElBQU15SCxZQUFZLEdBQUc5SixRQUFRLENBQUNDLGFBQWEsQ0FBQyxxQkFBcUIsQ0FBQztFQUNsRSxJQUFNOEosUUFBUSxHQUFHRCxZQUFZLENBQUM3SixhQUFhLENBQUMsWUFBWSxDQUFDO0VBQ3pENkosWUFBWSxDQUFDaEksU0FBUyxDQUFDQyxHQUFHLENBQUMsTUFBTSxDQUFDO0VBRWxDLElBQUlNLFVBQVUsS0FBSyxJQUFJLEVBQUU7SUFDdkIwSCxRQUFRLENBQUN4RCxXQUFXLEdBQUcsVUFBVTtFQUNuQyxDQUFDLE1BQU0sSUFBSWxFLFVBQVUsS0FBSyxRQUFRLEVBQUU7SUFDbEMwSCxRQUFRLENBQUN4RCxXQUFXLEdBQUcsV0FBVztFQUNwQzs7RUFFQTtFQUNBLElBQU15RCxZQUFZLEdBQUdoSyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7RUFFMUQrSixZQUFZLENBQUMvRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUwRSxTQUFTLENBQUM7QUFDbkQ7QUFFQSxTQUFTTSxVQUFVQSxDQUFDNUgsVUFBVSxFQUFFO0VBQzlCLElBQUkrRyxNQUFNO0VBQ1YsSUFBSS9HLFVBQVUsS0FBSyxJQUFJLEVBQUU7SUFDdkIrRyxNQUFNLEdBQUdyTCwyQ0FBRSxDQUFDYSxPQUFPLENBQUMsQ0FBQztFQUN2QixDQUFDLE1BQU0sSUFBSXlELFVBQVUsS0FBSyxRQUFRLEVBQUU7SUFDbEMrRyxNQUFNLEdBQUd0TCwrQ0FBTSxDQUFDYyxPQUFPLENBQUMsQ0FBQztFQUMzQjtFQUNBLE9BQU93SyxNQUFNO0FBQ2Y7QUFFQSxTQUFTYyxRQUFRQSxDQUFBLEVBQUc7RUFDbEIsSUFBTXBKLFFBQVEsR0FBR2QsUUFBUSxDQUFDQyxhQUFhLENBQUMsZ0JBQWdCLENBQUM7RUFDekQsSUFBTUMsUUFBUSxHQUFHWSxRQUFRLENBQUNiLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQztFQUMxRCxJQUFNRixTQUFTLEdBQUdlLFFBQVEsQ0FBQ2IsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUV2RCxTQUFTa0ssUUFBUUEsQ0FBQSxFQUFHO0lBQ2xCLElBQU1DLE9BQU8sR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUM7SUFDaEMsSUFBTTdCLEtBQUssR0FBRzdJLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNDLE9BQU93SyxPQUFPLENBQUM3QixLQUFLLENBQUM7RUFDdkI7RUFFQSxTQUFTOEIsZUFBZUEsQ0FBQSxFQUFHO0lBQ3pCLElBQU0xSCxLQUFLLEdBQUd6QyxRQUFRLENBQUNHLGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUN0REgsUUFBUSxDQUFDUyxLQUFLLENBQUMySixPQUFPLEdBQUcsS0FBSztJQUM5QjNILEtBQUssQ0FBQzdELE9BQU8sQ0FBQyxVQUFDMEIsSUFBSSxFQUFLO01BQ3RCLElBQU0rSixRQUFRLEdBQUcvSixJQUFJO01BQ3JCK0osUUFBUSxDQUFDNUosS0FBSyxDQUFDNkosYUFBYSxHQUFHLE1BQU07SUFDdkMsQ0FBQyxDQUFDO0VBQ0o7RUFFQSxTQUFTQyxjQUFjQSxDQUFBLEVBQUc7SUFDeEIsSUFBTTlILEtBQUssR0FBR3pDLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUMsYUFBYSxDQUFDO0lBQ3RESCxRQUFRLENBQUNTLEtBQUssQ0FBQzJKLE9BQU8sR0FBRyxLQUFLO0lBQzlCM0gsS0FBSyxDQUFDN0QsT0FBTyxDQUFDLFVBQUMwQixJQUFJLEVBQUs7TUFDdEIsSUFBTStKLFFBQVEsR0FBRy9KLElBQUk7TUFDckIrSixRQUFRLENBQUM1SixLQUFLLENBQUM2SixhQUFhLEdBQUcsS0FBSztJQUN0QyxDQUFDLENBQUM7RUFDSjs7RUFFQTtFQUNBLElBQUluRSxJQUFJLEdBQUc4RCxRQUFRLENBQUMsQ0FBQztFQUVyQixTQUFTTyxVQUFVQSxDQUFBLEVBQUc7SUFDcEIsSUFBSXJFLElBQUksS0FBSyxJQUFJLEVBQUVBLElBQUksR0FBRyxRQUFRLENBQUMsS0FDOUJBLElBQUksR0FBRyxJQUFJO0VBQ2xCO0VBRUEsU0FBU3NFLGdCQUFnQkEsQ0FBQ3RJLFVBQVUsRUFBRUMsUUFBUSxFQUFFO0lBQzlDLElBQUlELFVBQVUsS0FBSyxJQUFJLEVBQUU7TUFDdkI7TUFDQXRFLDJDQUFFLENBQUN1RSxRQUFRLENBQUMsQ0FBQytHLEdBQUcsQ0FBQyxDQUFDO01BQ2xCO01BQ0F0TCwyQ0FBRSxDQUFDdUUsUUFBUSxDQUFDLENBQUM4RyxNQUFNLENBQUMsQ0FBQztJQUN2QjtJQUNBLElBQUkvRyxVQUFVLEtBQUssUUFBUSxFQUFFO01BQzNCO01BQ0F2RSwrQ0FBTSxDQUFDd0UsUUFBUSxDQUFDLENBQUMrRyxHQUFHLENBQUMsQ0FBQztNQUN0QjtNQUNBdkwsK0NBQU0sQ0FBQ3dFLFFBQVEsQ0FBQyxDQUFDOEcsTUFBTSxDQUFDLENBQUM7SUFDM0I7RUFDRjs7RUFFQTtFQUNBLFNBQVN3QixNQUFNQSxDQUFBLEVBQUc7SUFDaEIsSUFBSXhMLFFBQVEsR0FBR3JCLDJDQUFFLENBQUMwQixXQUFXLENBQUMsQ0FBQztJQUMvQixPQUFPLENBQUMxQiwyQ0FBRSxDQUFDb0IsYUFBYSxDQUFDQyxRQUFRLENBQUMsRUFBRTtNQUNsQ0EsUUFBUSxHQUFHckIsMkNBQUUsQ0FBQzBCLFdBQVcsQ0FBQyxDQUFDO0lBQzdCOztJQUVBO0lBQ0EsSUFBTUYsVUFBVSxHQUFHekIsK0NBQU0sQ0FBQ2EsU0FBUyxDQUFDZ0ssYUFBYSxDQUFDdkosUUFBUSxDQUFDO0lBRTNELElBQUlHLFVBQVUsS0FBSyxPQUFPLEVBQUU7TUFDMUI7TUFDQSxJQUFNK0MsUUFBUSxHQUFHL0MsVUFBVTtNQUMzQjtNQUNBb0wsZ0JBQWdCLENBQUMsUUFBUSxFQUFFckksUUFBUSxDQUFDO01BQ3BDLElBQU04RyxNQUFNLEdBQUd0TCwrQ0FBTSxDQUFDd0UsUUFBUSxDQUFDLENBQUM4RyxNQUFNLENBQUMsQ0FBQztNQUN4QyxJQUFJQSxNQUFNLEVBQUU7UUFDVnZKLDRDQUFlLENBQUM4RyxRQUFRLENBQUMsUUFBUSxFQUFFckUsUUFBUSxDQUFDO01BQzlDO01BQ0EsSUFBTXVJLElBQUksR0FBR1osVUFBVSxDQUFDLFFBQVEsQ0FBQztNQUNqQyxJQUFJWSxJQUFJLEVBQUVoQixRQUFRLENBQUMsUUFBUSxDQUFDO0lBQzlCO0lBQ0EsSUFBTW5ELFVBQVUsR0FBRzNHLFNBQVMsQ0FBQzJDLElBQUksQ0FBQ3RELFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDdUQsS0FBSyxDQUFDdkQsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2pFO0lBQ0FTLDRDQUFlLENBQUMyRyxhQUFhLENBQUNFLFVBQVUsRUFBRW5ILFVBQVUsQ0FBQztJQUNyRDtJQUNBa0wsY0FBYyxDQUFDLENBQUM7SUFDaEI7SUFDQUMsVUFBVSxDQUFDLENBQUM7SUFDWjtJQUNBN0ssNENBQWUsQ0FBQ3VHLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO0VBQ25DOztFQUVBO0VBQ0F4Ryw0Q0FBZSxDQUFDdUcsV0FBVyxDQUFDQyxJQUFJLENBQUM7RUFDakMsSUFBSUEsSUFBSSxLQUFLLElBQUksRUFBRTtJQUNqQjtJQUNBeUUsVUFBVSxDQUFDLFlBQU07TUFDZkYsTUFBTSxDQUFDLENBQUM7SUFDVixDQUFDLEVBQUUsSUFBSSxDQUFDO0VBQ1Y7RUFFQSxTQUFTRyxVQUFVQSxDQUFDdkcsQ0FBQyxFQUFFO0lBQ3JCLElBQUlBLENBQUMsQ0FBQ0UsTUFBTSxDQUFDQyxPQUFPLENBQUMsYUFBYSxDQUFDLEVBQUU7TUFDbkMsSUFBTStCLFVBQVUsR0FBR2xDLENBQUMsQ0FBQ0UsTUFBTTtNQUMzQixJQUFNdEYsUUFBUSxHQUFHLEVBQUU7TUFDbkJBLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRzRMLE1BQU0sQ0FBQ3RFLFVBQVUsQ0FBQ3ZFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztNQUN6RC9DLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRzRMLE1BQU0sQ0FBQ3RFLFVBQVUsQ0FBQ3ZFLFlBQVksQ0FBQyxVQUFVLENBQUMsQ0FBQztNQUN6RCxJQUFNNUMsVUFBVSxHQUFHeEIsMkNBQUUsQ0FBQ1ksU0FBUyxDQUFDZ0ssYUFBYSxDQUFDdkosUUFBUSxDQUFDOztNQUV2RDtNQUNBUyw0Q0FBZSxDQUFDMkcsYUFBYSxDQUFDRSxVQUFVLEVBQUVuSCxVQUFVLENBQUM7O01BRXJEO01BQ0EsSUFBSUEsVUFBVSxLQUFLLE1BQU0sSUFBSUEsVUFBVSxLQUFLLEtBQUssSUFBSUEsVUFBVSxLQUFLLE9BQU8sRUFBRTtRQUMzRTtRQUNBLElBQU0rQyxRQUFRLEdBQUcvQyxVQUFVO1FBRTNCb0wsZ0JBQWdCLENBQUMsSUFBSSxFQUFFckksUUFBUSxDQUFDO1FBQ2hDO1FBQ0EsSUFBTThHLE1BQU0sR0FBR3JMLDJDQUFFLENBQUN1RSxRQUFRLENBQUMsQ0FBQzhHLE1BQU0sQ0FBQyxDQUFDO1FBQ3BDLElBQUlBLE1BQU0sRUFBRTtVQUNWdkosNENBQWUsQ0FBQzhHLFFBQVEsQ0FBQyxJQUFJLEVBQUVyRSxRQUFRLENBQUM7UUFDMUM7TUFDRjs7TUFFQTtNQUNBLElBQUsvQyxVQUFVLEtBQUssTUFBTSxJQUFJQSxVQUFVLEtBQUssS0FBSyxJQUFLQSxVQUFVLEtBQUssT0FBTyxFQUFFO1FBQzdFO1FBQ0EsSUFBTXNMLElBQUksR0FBR1osVUFBVSxDQUFDLElBQUksQ0FBQztRQUM3QixJQUFJWSxJQUFJLEVBQUU7VUFDUmhCLFFBQVEsQ0FBQyxJQUFJLENBQUM7UUFDaEIsQ0FBQyxNQUFNO1VBQ0w7VUFDQWEsVUFBVSxDQUFDLENBQUM7VUFDWjtVQUNBN0ssNENBQWUsQ0FBQ3VHLFdBQVcsQ0FBQ0MsSUFBSSxDQUFDO1VBQ2pDO1VBQ0FnRSxlQUFlLENBQUMsQ0FBQztVQUNqQjtVQUNBUyxVQUFVLENBQUNGLE1BQU0sRUFBRSxJQUFJLENBQUM7UUFDMUI7TUFDRjtJQUNGO0VBQ0Y7O0VBRUE7RUFDQTFLLFFBQVEsQ0FBQytFLGdCQUFnQixDQUFDLE9BQU8sRUFBRThGLFVBQVUsQ0FBQztBQUNoRDtBQUVBLElBQU1FLE9BQU8sR0FBR2pMLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQzs7QUFFckQ7QUFDQSxJQUFNcEIsU0FBUyxHQUFHLENBQ2hCLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFDcEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUN0QixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsSUFBSSxFQUFFLGFBQWEsRUFBRSxDQUFDLENBQUMsRUFDeEIsQ0FBQyxJQUFJLEVBQUUsYUFBYSxFQUFFLENBQUMsQ0FBQyxFQUN4QixDQUFDLElBQUksRUFBRSxhQUFhLEVBQUUsQ0FBQyxDQUFDLEVBQ3hCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsRUFDdEIsQ0FBQyxJQUFJLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxFQUN0QixDQUFDLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLEVBQ3RCLENBQUMsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FDdkI7QUFFRCxTQUFTK0ssb0JBQW9CQSxDQUFBLEVBQUc7RUFDOUI7RUFDQS9KLDRDQUFlLENBQUMrRixZQUFZLENBQUMsQ0FBQztFQUM5QjtFQUNBL0YsNENBQWUsQ0FBQ2tHLFlBQVksQ0FBQyxDQUFDOztFQUU5QjtFQUNBaEksMkNBQUUsQ0FBQ1ksU0FBUyxDQUFDeUosa0JBQWtCLENBQUN2SixTQUFTLENBQUM4RyxLQUFLLENBQUMsQ0FBQyxDQUFDO0VBQ2xEO0VBQ0E5Riw0Q0FBZSxDQUFDa0UsVUFBVSxDQUFDbEYsU0FBUyxDQUFDOEcsS0FBSyxDQUFDLENBQUMsRUFBRXVFLFFBQVEsQ0FBQztBQUN6RDtBQUVBckssNENBQWUsQ0FBQ29HLFlBQVksQ0FBQyxDQUFDO0FBQzlCZ0YsT0FBTyxDQUFDaEcsZ0JBQWdCLENBQUMsT0FBTyxFQUFFMkUsb0JBQW9CLENBQUMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2NyaXB0RmlsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9nYW1lQm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2NyaXB0RmlsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvbWV5ZXItcmVzZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9teS1jc3MtcmVzZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9ub3JtYWxpemUuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9zdHlsZXMuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy90eXBvZ3JhcGh5LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9tZXllci1yZXNldC5jc3M/YmViNSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvbXktY3NzLXJlc2V0LmNzcz9kNjQ2Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9ub3JtYWxpemUuY3NzPzRmZWMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL3N0eWxlcy5jc3M/MjJmYyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvdHlwb2dyYXBoeS5jc3M/YzQ0MiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2NyaXB0RmlsZXMvYXBwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lQm9hcmQgZnJvbSBcIi4vZ2FtZUJvYXJkXCI7XG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gYWkoKSB7XG4gIGNvbnN0IG5ld0FJID0ge307XG4gIG5ld0FJLmMxID0gbmV3IFNoaXAoXCJjYXJyaWVyXCIsIDQpO1xuICBuZXdBSS5kMSA9IG5ldyBTaGlwKFwiZGlzdHJveWVyMVwiLCAzKTtcbiAgbmV3QUkuZDIgPSBuZXcgU2hpcChcImRpc3Ryb3llcjJcIiwgMyk7XG4gIG5ld0FJLnAxID0gbmV3IFNoaXAoXCJwYXRyb2xCb2F0MVwiLCAyKTtcbiAgbmV3QUkucDIgPSBuZXcgU2hpcChcInBhdHJvbEJvYXQyXCIsIDIpO1xuICBuZXdBSS5wMyA9IG5ldyBTaGlwKFwicGF0cm9sQm9hdDNcIiwgMik7XG4gIG5ld0FJLnMxID0gbmV3IFNoaXAoXCJzaW5nbGV0b24xXCIsIDEpO1xuICBuZXdBSS5zMiA9IG5ldyBTaGlwKFwic2luZ2xldG9uMlwiLCAxKTtcbiAgbmV3QUkuczMgPSBuZXcgU2hpcChcInNpbmdsZXRvbjNcIiwgMSk7XG4gIG5ld0FJLnM0ID0gbmV3IFNoaXAoXCJzaW5nbGV0b240XCIsIDEpO1xuICBuZXdBSS5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIG5ld0FJLmFsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW1wiYzFcIiwgXCJkMVwiLCBcImQyXCIsIFwicDFcIiwgXCJwMlwiLCBcInAzXCIsIFwiczFcIiwgXCJzMlwiLCBcInMzXCIsIFwiczRcIl07XG4gICAgbGV0IGFsbFN1bmsgPSB0cnVlO1xuICAgIHNoaXBOYW1lcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIW5ld0FJW3NoaXBdLnN1bmspIHtcbiAgICAgICAgYWxsU3VuayA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbGxTdW5rO1xuICB9O1xuXG4gIG5ld0FJLnJlc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW1wiYzFcIiwgXCJkMVwiLCBcImQyXCIsIFwicDFcIiwgXCJwMlwiLCBcInAzXCIsIFwiczFcIiwgXCJzMlwiLCBcInMzXCIsIFwiczRcIl07XG4gICAgc2hpcE5hbWVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIG5ld0FJW3NoaXBdLnJlc2V0U2hpcCgpO1xuICAgIH0pO1xuICB9O1xuICBuZXdBSS5pc0F0dGFja1ZhbGlkID0gKHBvc2l0aW9uKSA9PiB7XG4gICAgY29uc3Qgcm93ID0gcG9zaXRpb25bMF07XG4gICAgY29uc3QgY29sID0gcG9zaXRpb25bMV07XG4gICAgY29uc3QgY2VsbFN0YXR1cyA9IHBsYXllci5nYW1lQm9hcmQuYm9hcmRbcm93XVtjb2xdO1xuICAgIC8vIGNvbnNvbGUubG9nKCdhaSBhdHRhY2sgc3RhdHVzIGluc2lkZSBpcycsIGNlbGxTdGF0dXMsICdhdCBwb3NpdGlvbicsIHBvc2l0aW9uKVxuICAgIGlmIChjZWxsU3RhdHVzICE9PSBcImhpdFwiICYmIGNlbGxTdGF0dXMgIT09IFwibWlzc1wiKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBuZXdBSS5nZXRIaXRDb29yZCA9ICgpID0+IHtcbiAgICBjb25zdCBwb3NpdGlvbiA9IFtdO1xuICAgIHBvc2l0aW9uWzBdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIHBvc2l0aW9uWzFdID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9O1xuXG4gIHJldHVybiBuZXdBSTtcbn0pKCk7XG4iLCJpbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGFpIGZyb20gXCIuL2FpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBkb21NYW5pcHVsYXRpb24oKSB7XG4gIGZ1bmN0aW9uIHJlc2V0VGFibGVzKCkge1xuICAgIGNvbnN0IHlvdXJUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZS1nYW1lcGxheS1wYWdlXCIpO1xuICAgIGNvbnN0IG9wcFRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC10YWJsZVwiKTtcbiAgICBjb25zdCBzZXRTaGlwVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNldC1zaGlwc1wiKTtcbiAgICBjb25zdCB5b3VyQ2VsbHMgPSB5b3VyVGFibGUucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZS1jZWxsXCIpO1xuICAgIGNvbnN0IG9wcENlbGxzID0gb3BwVGFibGUucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZS1jZWxsXCIpO1xuICAgIGNvbnN0IHNldFNoaXBDZWxscyA9IHNldFNoaXBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG5cbiAgICB5b3VyQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZWRDZWxsID0gY2VsbDtcbiAgICAgIC8vIHNldCBWYWx1ZSB0byBlbXB0eVxuICAgICAgbW9kaWZpZWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJlbXB0eVwiKTtcbiAgICAgIC8vIFJlc2V0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIG1vZGlmaWVkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbiAgICB9KTtcblxuICAgIG9wcENlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IG1vZGlmaWVkQ2VsbCA9IGNlbGw7XG4gICAgICAvLyBzZXQgVmFsdWUgdG8gZW1wdHlcbiAgICAgIG1vZGlmaWVkQ2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwiZW1wdHlcIik7XG4gICAgICAvLyBSZXNldCBiYWNrZ3JvdW5kIGNvbG9yXG4gICAgICBtb2RpZmllZENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmXCI7XG4gICAgfSk7XG5cbiAgICBzZXRTaGlwQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZWRDZWxsID0gY2VsbDtcbiAgICAgIC8vIHNldCBWYWx1ZSB0byBlbXB0eVxuICAgICAgbW9kaWZpZWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJlbXB0eVwiKTtcbiAgICAgIC8vIFJlc2V0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIG1vZGlmaWVkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhYmI4YjdcIjtcbiAgICB9KTtcbiAgfVxuICAvLyBSZW1vdmUgc2hpcCBjaGlsZHJlbiBmcm9tIHNoaXBQbGFjZSBwYWdlIGFuZCBnYW1lUGxheSBwYWdlXG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIGNvbnN0IHNoaXBzT25TaGlwUGFnZSA9IHNoaXBQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBjb25zdCBzaGlwc09uR2FtZVBhZ2UgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgc2hpcHNPblNoaXBQYWdlLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXBQYWdlLnJlbW92ZUNoaWxkKHNoaXApO1xuICAgIH0pO1xuICAgIHNoaXBzT25HYW1lUGFnZS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBnYW1lUGFnZS5yZW1vdmVDaGlsZChzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXAoc2hpcE93bmVyLCBzaG9ydE5hbWUsIGxlbmd0aCwgb3JpZW50KSB7XG4gICAgY29uc3Qgc2hpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgc2hpcC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcbiAgICBzaGlwLnN0eWxlLnRvcCA9IFwiMFwiO1xuICAgIHNoaXAuc3R5bGUubGVmdCA9IFwiMFwiO1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1sZW5ndGhcIiwgYCR7bGVuZ3RofWApO1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwbmFtZVwiLCBzaG9ydE5hbWUpO1xuICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwLW93bmVyXCIsIHNoaXBPd25lcik7XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgIHNoaXAuc3R5bGUud2lkdGggPSBgJHsyICogbGVuZ3RofXZ3YDtcbiAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gXCIydndcIjtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCBgJHsyICogbGVuZ3RofXZ3YCk7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIsIFwiMnZ3XCIpO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiLCBcInhcIik7XG4gICAgfVxuICAgIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICBzaGlwLnN0eWxlLndpZHRoID0gXCIydndcIjtcbiAgICAgIHNoaXAuc3R5bGUuaGVpZ2h0ID0gYCR7MiAqIGxlbmd0aH12d2A7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtd2lkdGhcIiwgXCIydndcIik7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIsIGAkezIgKiBsZW5ndGh9dndgKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgXCJ5XCIpO1xuICAgIH1cbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJtb3ZpbmdcIik7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKHNob3J0TmFtZSk7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IHNoaXBQbGFjZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VtZW50LXBhZ2VcIik7XG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwUGxhY2VQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIubW92aW5nXCIpO1xuICAgIGlmIChjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSA9PT0gXCJ4XCIpIHtcbiAgICAgIGN1cnJlbnRTaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIFwieVwiKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIpO1xuICAgICAgY3VycmVudFNoaXAuc3R5bGUud2lkdGggPSBoZWlnaHQ7XG4gICAgICBjdXJyZW50U2hpcC5zdHlsZS5oZWlnaHQgPSB3aWR0aDtcbiAgICAgIGN1cnJlbnRTaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIsIHdpZHRoKTtcbiAgICAgIGN1cnJlbnRTaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtd2lkdGhcIiwgaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInlcIikge1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgXCJ4XCIpO1xuICAgICAgY29uc3Qgd2lkdGggPSBjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIik7XG4gICAgICBjdXJyZW50U2hpcC5zdHlsZS53aWR0aCA9IGhlaWdodDtcbiAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLmhlaWdodCA9IHdpZHRoO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgd2lkdGgpO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCBoZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBjZWxsIHZhbHVlXG4gIGZ1bmN0aW9uIHVwZGF0ZUNlbGxWYWwocGxheWVyTmFtZSwgc2hpcE5hbWUsIHNoaXBFbmQsIGxlbmd0aCwgb3JpZW50KSB7XG4gICAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG4gICAgY29uc3Qgcm93ID0gc2hpcEVuZFswXTtcbiAgICBjb25zdCBjb2x1bW4gPSBzaGlwRW5kWzFdO1xuICAgIGlmIChwbGF5ZXJOYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgICBjb25zdCB5b3VyVGFibGUgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yKFwiLnlvdXItdGFibGVcIik7XG4gICAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgeW91clRhYmxlLnJvd3Nbcm93XS5jZWxsc1tjb2x1bW4gLSBpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB5b3VyVGFibGUucm93c1tyb3cgLSBpXS5jZWxsc1tjb2x1bW5dLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICAgIGNvbnN0IG9wcFRhYmxlID0gZ2FtZVBhZ2UucXVlcnlTZWxlY3RvcihcIi5vcHBvbmVudC10YWJsZVwiKTtcbiAgICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBvcHBUYWJsZS5yb3dzW3Jvd10uY2VsbHNbY29sdW1uIC0gaV0uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgb3BwVGFibGUucm93c1tyb3cgLSBpXS5jZWxsc1tjb2x1bW5dLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVNoaXAoc2hpcCkge1xuICAgIGNvbnN0IGhpZGRlblNoaXAgPSBzaGlwO1xuICAgIGhpZGRlblNoaXAuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gIH1cblxuICAvLyBQbGFjZSBzaGlwcyBvbiB0aGUgcGxheWVyL2FpIGJvYXJkIG9uIGdhbWUtcGxheS1wYWdlXG4gIGZ1bmN0aW9uIGF1dG9QbGFjZVNoaXBzKHBsYXllck5hbWUsIHNoaXBzQ29vcmQpIHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBEYXRhID0gc2hpcHNDb29yZFtzaGlwTmFtZV07XG5cbiAgICAgIGNvbnN0IHsgZW5kLCBvcmllbnQsIGxlbmd0aCB9ID0gc2hpcERhdGE7XG4gICAgICBjb25zdCBzaGlwID0gY3JlYXRlU2hpcChwbGF5ZXJOYW1lLCBzaGlwTmFtZSwgbGVuZ3RoLCBvcmllbnQpO1xuICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgICAvLyBIaWRlIHNoaXAgb24gdGhlIGFpIHRhYmxlXG4gICAgICAgIGhpZGVTaGlwKHNoaXApO1xuICAgICAgfVxuICAgICAgLy8gQWxzbyB1cGRhdGUgdGFibGUgY2VsbCdzIGRhdGEtdmFsdWUgd2l0aCBzaGlwTmFtZVxuICAgICAgdXBkYXRlQ2VsbFZhbChwbGF5ZXJOYW1lLCBzaGlwTmFtZSwgZW5kLCBsZW5ndGgsIG9yaWVudCk7XG5cbiAgICAgIC8vIENhbGwgZ2FtZXBsYXkgcGFnZVxuICAgICAgY29uc3QgZ2FtZVBsYXlQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgICAgY29uc3QgeW91clRhYmxlID0gZ2FtZVBsYXlQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZVwiKTtcbiAgICAgIGNvbnN0IG9wcFRhYmxlID0gZ2FtZVBsYXlQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIub3Bwb25lbnQtdGFibGVcIik7XG4gICAgICBnYW1lUGxheVBhZ2UuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICAvLyBQbGFjZSBzaGlwcyBvbiB0aGUgYm9hcmQgY29vcmRpbmF0ZXMgY29ycmVjdGx5XG4gICAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgICBjb25zdCByb3dFbmQgPSBlbmRbMF07XG4gICAgICAgIGNvbnN0IGNvbEVuZCA9IGVuZFsxXTtcbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAvLyBHZXQgaGVhZCBjZWxsIG9uIHdoaWNoIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgY29uc3QgY2VsbEVuZCA9IHlvdXJUYWJsZS5yb3dzW3Jvd0VuZF0uY2VsbHNbY29sRW5kXTtcblxuICAgICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbEVuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBnYW1lUGFnZVJlY3QgPSBnYW1lUGxheVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1ggPSBjZWxsUmVjdC5yaWdodCAtIGdhbWVQYWdlUmVjdC5sZWZ0IC0gY2VsbFJlY3Qud2lkdGggKiBsZW5ndGggLSAxLjU7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1kgPSBjZWxsUmVjdC50b3AgLSBnYW1lUGFnZVJlY3QudG9wIC0gMS41O1xuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2NlbGxQb3NYfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtjZWxsUG9zWX1yZW1gO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGJsdWVcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgICAgIC8vIEdldCBoZWFkIGNlbGwgb24gd2hpY2ggc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICBjb25zdCBjZWxsRW5kID0gb3BwVGFibGUucm93c1tyb3dFbmRdLmNlbGxzW2NvbEVuZF07XG5cbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGxFbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVBhZ2VSZWN0ID0gZ2FtZVBsYXlQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NYID0gY2VsbFJlY3QucmlnaHQgLSBnYW1lUGFnZVJlY3QubGVmdCAtIGNlbGxSZWN0LndpZHRoICogbGVuZ3RoIC0gMS41O1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NZID0gY2VsbFJlY3QudG9wIC0gZ2FtZVBhZ2VSZWN0LnRvcCAtIDEuNTtcblxuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2NlbGxQb3NYfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtjZWxsUG9zWX1yZW1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgICBjb25zdCByb3dFbmQgPSBlbmRbMF07XG4gICAgICAgIGNvbnN0IGNvbEVuZCA9IGVuZFsxXTtcbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAvLyBHZXQgaGVhZCBjZWxsIG9uIHdoaWNoIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgY29uc3QgY2VsbEVuZCA9IHlvdXJUYWJsZS5yb3dzW3Jvd0VuZF0uY2VsbHNbY29sRW5kXTtcblxuICAgICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbEVuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBnYW1lUGFnZVJlY3QgPSBnYW1lUGxheVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1ggPSBjZWxsUmVjdC5sZWZ0IC0gZ2FtZVBhZ2VSZWN0LmxlZnQgLSAxLjU7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1kgPSBjZWxsUmVjdC5ib3R0b20gLSBnYW1lUGFnZVJlY3QudG9wIC0gY2VsbFJlY3Qud2lkdGggKiBsZW5ndGggLSAxLjU7XG5cbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtjZWxsUG9zWH1yZW1gO1xuICAgICAgICAgIHNoaXAuc3R5bGUudG9wID0gYCR7Y2VsbFBvc1l9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlciA9IFwiMnJlbSBzb2xpZCBibHVlXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICAgICAgICAvLyBHZXQgaGVhZCBjZWxsIG9uIHdoaWNoIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgY29uc3QgY2VsbEVuZCA9IG9wcFRhYmxlLnJvd3Nbcm93RW5kXS5jZWxsc1tjb2xFbmRdO1xuXG4gICAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsRW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGdhbWVQYWdlUmVjdCA9IGdhbWVQbGF5UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBjZWxsUG9zWCA9IGNlbGxSZWN0LmxlZnQgLSBnYW1lUGFnZVJlY3QubGVmdCAtIDEuNTtcbiAgICAgICAgICBjb25zdCBjZWxsUG9zWSA9IGNlbGxSZWN0LmJvdHRvbSAtIGdhbWVQYWdlUmVjdC50b3AgLSBjZWxsUmVjdC53aWR0aCAqIGxlbmd0aCAtIDEuNTtcblxuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2NlbGxQb3NYfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtjZWxsUG9zWX1yZW1gO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwbGFjZVNoaXBzKHNoaXBOYW1lcywgY2FsbEJhY2spIHtcbiAgICBjb25zdCBzaGlwUGxhY2VQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIGNvbnN0IGdhbWVQbGF5UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcblxuICAgIGlmIChzaGlwTmFtZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAvLyBBbGwgc2hpcHMgcGxhY2VkLiBOb3cgZG8gdGhlIG5leHQgdGFza3NcbiAgICAgIHNoaXBQbGFjZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICBnYW1lUGxheVBhZ2UuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAvLyBDYWxsIGJhY2sgZnVuY3Rpb24gd2hpY2ggaXMgYmFzaWNhbGx5IGEgZ2FtZUxvb3AgZnVuY3Rpb25cbiAgICAgIGNhbGxCYWNrKCk7XG4gICAgICAvLyBQbGFjZSBzaGlwcyBvbiB0aGUgYm9hcmQgYXQgZ2FtZSBwbGF5IHBhZ2Ugb24gcGxheWVyL2FpIGRlZmluZWQgcG9zaXRpb25zXG5cbiAgICAgIGF1dG9QbGFjZVNoaXBzKFwicGxheWVyXCIsIHBsYXllci5nYW1lQm9hcmQuc2hpcHNDb29yZCk7XG4gICAgICBhdXRvUGxhY2VTaGlwcyhcImFpXCIsIGFpLmdhbWVCb2FyZC5zaGlwc0Nvb3JkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2hpcEFyciA9IHNoaXBOYW1lcy5zaGlmdCgpO1xuICAgIGNvbnN0IHNob3J0TmFtZSA9IHNoaXBBcnJbMF07XG4gICAgY29uc3Qgc2hpcE5hbWUgPSBzaGlwQXJyWzFdO1xuICAgIGNvbnN0IGxlbmd0aCA9IHNoaXBBcnJbMl07XG5cbiAgICBjb25zdCBzaGlwTWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1uYW1lXCIpO1xuICAgIHNoaXBNZXNzYWdlLmlubmVySFRNTCA9IFwiUGxhY2UgXCIuY29uY2F0KHNoaXBOYW1lKS5jb25jYXQoXCIgb24gdGhlIGJvYXJkXCIpO1xuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuXG4gICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAoXCJwbGF5ZXJcIiwgc2hvcnROYW1lLCBsZW5ndGgsIFwieFwiKTtcblxuICAgIHNoaXBQbGFjZVBhZ2UuYXBwZW5kQ2hpbGQoc2hpcCk7XG5cbiAgICBmdW5jdGlvbiBkcmFnU2hpcChlKSB7XG4gICAgICBpZiAoIWlzUGxhY2VkKSB7XG4gICAgICAgIGNvbnN0IHNoaXBQYWdlUmVjdCA9IHNoaXBQbGFjZVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudGFibGUtY2VsbFwiKSkge1xuICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlciA9IFwiMXJlbSBkYXNoZWQgIzU5NzhmNVwiO1xuICAgICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZS50YXJnZXQ7XG4gICAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjdXJyZW50Q2VsbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgY2FsYygke2NlbGxSZWN0LnJpZ2h0fXJlbSAgLSAke3NoaXBQYWdlUmVjdC5sZWZ0fXJlbSAtICR7c2hpcC5jbGllbnRXaWR0aH1yZW0gLSAxLjVyZW0gKWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgY2FsYygke2NlbGxSZWN0LmJvdHRvbX1yZW0gLSAke3NoaXBQYWdlUmVjdC50b3B9cmVtIC0gJHtzaGlwLmNsaWVudEhlaWdodH1yZW0gLSAxcmVtKWA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4wKVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYIC0gc2hpcFBhZ2VSZWN0LmxlZnQgLSBzaGlwLmNsaWVudFdpZHRofXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtlLmNsaWVudFkgLSBzaGlwUGFnZVJlY3QudG9wIC0gc2hpcC5jbGllbnRIZWlnaHR9cmVtYDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBNb3ZlIHNoaXAgYWxvbmcgd2l0aCB0aGUgbW91c2VcbiAgICBzaGlwUGxhY2VQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhZ1NoaXApO1xuXG4gICAgLy8gQ2hhbmdlIG9yaWVudGF0aW9uIG9mIHNoaXBcbiAgICBjb25zdCByb3RhdGVCdG4gPSBzaGlwUGxhY2VQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIucm90YXRlLWJ0blwiKTtcbiAgICByb3RhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNoYW5nZU9yaWVudGF0aW9uKTtcblxuICAgIGZ1bmN0aW9uIGRyb3BTaGlwKGUpIHtcbiAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRhYmxlLWNlbGxcIikpIHtcbiAgICAgICAgY29uc3QgY3VycmVudENlbGwgPSBlLnRhcmdldDtcblxuICAgICAgICBjb25zdCByb3cgPSBwYXJzZUludChjdXJyZW50Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJvd1wiKSwgMTApO1xuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChjdXJyZW50Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKSwgMTApO1xuXG4gICAgICAgIGlmIChzaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInhcIikge1xuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmlzVmFsaWRQb3Mocm93LCBjb2wsIGxlbmd0aCwgXCJ4XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwUmVjdCA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwUGFnZVJlY3QgPSBzaGlwUGxhY2VQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFggPSBzaGlwUmVjdC5sZWZ0IC0gc2hpcFBhZ2VSZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBzaGlwWSA9IHNoaXBSZWN0LnRvcCAtIHNoaXBQYWdlUmVjdC50b3A7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtzaGlwWH1yZW1gO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgY2FsYygke3NoaXBZfXJlbSAtIDFyZW0pYDtcbiAgICAgICAgICAgIGlzUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInBsYWNlZFwiKTtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGJsdWVcIjtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vdmluZ1wiKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbmNlIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhZ1NoaXApO1xuICAgICAgICAgICAgc2hpcFBsYWNlUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJvcFNoaXApO1xuICAgICAgICAgICAgLy8gU2hpcCBwbGFjZWQgc3VjY2Vzc2Z1bGx5LiBOb3cgdXBkYXRlIHRoZSAyRCBib2FyZCBhcnJheVxuICAgICAgICAgICAgcGxheWVyLmdhbWVCb2FyZC51cGRhdGVCb2FyZChyb3csIGNvbCwgc2hvcnROYW1lLCBsZW5ndGgsIFwieFwiKTtcbiAgICAgICAgICAgIHBsYWNlU2hpcHMoc2hpcE5hbWVzLnNsaWNlKCksIGNhbGxCYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSA9PT0gXCJ5XCIpIHtcbiAgICAgICAgICBpZiAocGxheWVyLmdhbWVCb2FyZC5pc1ZhbGlkUG9zKHJvdywgY29sLCBsZW5ndGgsIFwieVwiKSkge1xuICAgICAgICAgICAgY29uc3Qgc2hpcFJlY3QgPSBzaGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFBhZ2VSZWN0ID0gc2hpcFBsYWNlUGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBYID0gc2hpcFJlY3QubGVmdCAtIHNoaXBQYWdlUmVjdC5sZWZ0O1xuICAgICAgICAgICAgY29uc3Qgc2hpcFkgPSBzaGlwUmVjdC50b3AgLSBzaGlwUGFnZVJlY3QudG9wO1xuXG4gICAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtzaGlwWH1yZW1gO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgY2FsYygke3NoaXBZfXJlbSAtIDFyZW0pYDtcbiAgICAgICAgICAgIGlzUGxhY2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZChcInBsYWNlZFwiKTtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGJsdWVcIjtcbiAgICAgICAgICAgIHNoaXAuY2xhc3NMaXN0LnJlbW92ZShcIm1vdmluZ1wiKTtcbiAgICAgICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBvbmNlIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgZHJhZ1NoaXApO1xuICAgICAgICAgICAgc2hpcFBsYWNlUGFnZS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZHJvcFNoaXApO1xuICAgICAgICAgICAgLy8gU2hpcCBwbGFjZWQgc3VjY2Vzc2Z1bGx5LiBOb3cgdXBkYXRlIHRoZSAyRCBib2FyZCBhcnJheVxuICAgICAgICAgICAgcGxheWVyLmdhbWVCb2FyZC51cGRhdGVCb2FyZChyb3csIGNvbCwgc2hvcnROYW1lLCBsZW5ndGgsIFwieVwiKTtcbiAgICAgICAgICAgIHBsYWNlU2hpcHMoc2hpcE5hbWVzLnNsaWNlKCksIGNhbGxCYWNrKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gUGxhY2Ugc2hpcCBvbiB0aGUgYm9hcmQgb24gbW91c2UgY2xpY2tcbiAgICBzaGlwUGxhY2VQYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wU2hpcCk7XG4gIH1cblxuICBmdW5jdGlvbiBoaWRlSW5pdFBhZ2UoKSB7XG4gICAgY29uc3QgaW5pdFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmluaXRpYWwtcGFnZVwiKTtcbiAgICBpbml0UGFnZS5jbGFzc0xpc3QuYWRkKFwiaGlkZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVTaGlwUGFnZSgpIHtcbiAgICBjb25zdCBzaGlwUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnQtcGFnZVwiKTtcbiAgICBzaGlwUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dTaGlwUGFnZSgpIHtcbiAgICBjb25zdCBzaGlwUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnQtcGFnZVwiKTtcbiAgICBzaGlwUGFnZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNob3dHYW1lUGFnZSgpIHtcbiAgICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgICBnYW1lUGFnZS5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVHYW1lUGFnZSgpIHtcbiAgICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgICBnYW1lUGFnZS5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVNb2RhbENvbnRhaW5lcigpIHtcbiAgICBjb25zdCBtb2RhbENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZW92ZXItY29udGFpbmVyXCIpO1xuICAgIG1vZGFsQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gdHVybk1lc3NhZ2UodHVybikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnR1cm4tbWVzc2FnZVwiKTtcbiAgICBpZiAodHVybiA9PT0gXCJwbGF5ZXJcIikgbWVzc2FnZS50ZXh0Q29udGVudCA9IFwiWW91ciBUdXJuXCI7XG4gICAgZWxzZSBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJBSSdzIHR1cm5cIjtcbiAgfVxuICAvLyBVcGRhdGUgY2VsbCBoaXQgc3RhdHVzIGluIERPTVxuICBmdW5jdGlvbiB1cGRhdGVDZWxsSGl0KGNlbGwsIGhpdFN0YXR1cykge1xuICAgIGNvbnN0IHRhcmdldENlbGwgPSBjZWxsO1xuICAgIGlmIChoaXRTdGF0dXMgPT09IFwiZW1wdHlcIikge1xuICAgICAgdGFyZ2V0Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwibWlzc1wiKTtcbiAgICAgIHRhcmdldENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYmZkYmZlXCI7XG4gICAgfSBlbHNlIGlmIChoaXRTdGF0dXMgIT09IFwiaGl0XCIgJiYgaGl0U3RhdHVzICE9PSBcIm1pc3NcIikge1xuICAgICAgdGFyZ2V0Q2VsbC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwiaGl0XCIpO1xuICAgICAgdGFyZ2V0Q2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJlZFwiO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoYW5nZSBjb2xvciBvZiB0aGUgc3VuayBzaGlwIG9uIHRoZSBET01cblxuICBmdW5jdGlvbiBzaGlwU3VuayhzaGlwT3duZXIsIHNoaXBOYW1lKSB7XG4gICAgY29uc3QgZ2FtZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG4gICAgLy8gRmluZCBhbGwgc2hpcHMgb24gZ2FtZSBwYWdlXG4gICAgY29uc3Qgc2hpcHNOb2RlTGlzdCA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBjb25zdCBzaGlwc0FyciA9IEFycmF5LmZyb20oc2hpcHNOb2RlTGlzdCk7XG4gICAgbGV0IHN1bmtTaGlwO1xuICAgIHNoaXBzQXJyLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBzaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtc2hpcG5hbWVcIik7XG4gICAgICBjb25zdCBvd25lciA9IHNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaGlwLW93bmVyXCIpO1xuICAgICAgaWYgKG5hbWUgPT09IHNoaXBOYW1lICYmIG93bmVyID09PSBzaGlwT3duZXIpIHN1bmtTaGlwID0gc2hpcDtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhzdW5rU2hpcCk7XG4gICAgc3Vua1NoaXAuc3R5bGUuYm9yZGVyID0gXCI0cmVtIHNvbGlkIHJlZFwiO1xuICAgIHN1bmtTaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzQ1MGEwYVwiO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZXNldFRhYmxlcyxcbiAgICBwbGFjZVNoaXBzLFxuICAgIHJlbW92ZVNoaXBzLFxuICAgIGhpZGVJbml0UGFnZSxcbiAgICBoaWRlU2hpcFBhZ2UsXG4gICAgc2hvd1NoaXBQYWdlLFxuICAgIHNob3dHYW1lUGFnZSxcbiAgICBoaWRlR2FtZVBhZ2UsXG4gICAgaGlkZU1vZGFsQ29udGFpbmVyLFxuICAgIGF1dG9QbGFjZVNoaXBzLFxuICAgIHR1cm5NZXNzYWdlLFxuICAgIHVwZGF0ZUNlbGxIaXQsXG4gICAgc2hpcFN1bmssXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hbGxTdW5rID0gZmFsc2U7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuc2hpcHNDb29yZCA9IHt9O1xuICB9XG5cbiAgYnVpbGRCb2FyZCgpIHtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IDEwOyByICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAxMDsgYyArPSAxKSB7XG4gICAgICAgIHJvdy5wdXNoKFwiZW1wdHlcIik7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICByZXNldEJvYXJkKCkge1xuICAgIC8vIEZpcnN0ICByZXNldCBib2FyZCBhbmQgdGhlbiBidWlsZCBpdCB3aXRoIGVtcHR5IGNlbGxzXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuYnVpbGRCb2FyZCgpO1xuICB9XG5cbiAgaXNWYWxpZFBvcyhyb3csIGNvbCwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIiAmJiBjb2wgKyAxIC0gbGVuZ3RoID49IDApIHtcbiAgICAgIGNvbnN0IGJvYXJkUm93ID0gdGhpcy5ib2FyZFtyb3ddO1xuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA+IGNvbCAtIGxlbmd0aDsgaSAtPSAxKSB7XG4gICAgICAgIGlmIChib2FyZFJvd1tpXSAhPT0gXCJlbXB0eVwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ5XCIgJiYgcm93ICsgMSAtIGxlbmd0aCA+PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpID4gcm93IC0gbGVuZ3RoOyBpIC09IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuYm9hcmRbaV1bY29sXSAhPT0gXCJlbXB0eVwiKSByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB1cGRhdGVCb2FyZChyb3csIGNvbCwgc2hpcE5hbWUsIGxlbmd0aCwgb3JpZW50KSB7XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgIGNvbnN0IGJvYXJkUm93ID0gdGhpcy5ib2FyZFtyb3ddO1xuICAgICAgZm9yIChsZXQgaSA9IGNvbDsgaSA+IGNvbCAtIGxlbmd0aDsgaSAtPSAxKSB7XG4gICAgICAgIGJvYXJkUm93W2ldID0gc2hpcE5hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICBmb3IgKGxldCBpID0gcm93OyBpID4gcm93IC0gbGVuZ3RoOyBpIC09IDEpIHtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtjb2xdID0gc2hpcE5hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFNhdmUgdGhpcyBzaGlwJ3MgY29vcmRpbmF0ZXNcbiAgICB0aGlzLnVwZGF0ZVNoaXBzQ29vcmQocm93LCBjb2wsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCk7XG4gIH1cblxuICB1cGRhdGVTaGlwc0Nvb3JkKHJvdywgY29sLCBzaGlwTmFtZSwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgY29uc3Qgc2hpcCA9IHt9O1xuICAgICAgc2hpcC5zdGFydCA9IFtyb3csIGNvbCArIDEgLSBsZW5ndGhdO1xuICAgICAgc2hpcC5lbmQgPSBbcm93LCBjb2xdO1xuICAgICAgc2hpcC5vcmllbnQgPSBvcmllbnQ7XG4gICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMuc2hpcHNDb29yZFtzaGlwTmFtZV0gPSBzaGlwO1xuICAgIH1cbiAgICBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgY29uc3Qgc2hpcCA9IHt9O1xuICAgICAgc2hpcC5zdGFydCA9IFtyb3cgKyAxIC0gbGVuZ3RoLCBjb2xdO1xuICAgICAgc2hpcC5lbmQgPSBbcm93LCBjb2xdO1xuICAgICAgc2hpcC5vcmllbnQgPSBvcmllbnQ7XG4gICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMuc2hpcHNDb29yZFtzaGlwTmFtZV0gPSBzaGlwO1xuICAgIH1cbiAgfVxuXG4gICNnZXRTdGFydEluZGV4KGxlbmd0aCwgb3JpZW50KSB7XG4gICAgbGV0IGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICBsZXQgcm93O1xuICAgIGxldCBjb2w7XG4gICAgbGV0IGNlbGw7XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgIHdoaWxlICghaW5kZXhGb3VuZCkge1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICAgICAgY29sID0gbGVuZ3RoIC0gMSArIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgxMCAtIChsZW5ndGggLSAxKSkpO1xuICAgICAgICBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgY2VsbCBpcyBlbXB0eSBhbmQgcHJldiAnbi0xJyBjZWxscyBhcmUgZW1wdHkgaG9yaXpvbnRhbGx5XG4gICAgICAgIGlmIChjZWxsID09PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICBpbmRleEZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbCAtIGldICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBPbmUgYWRkaXRpb25hbCBjaGVjayBhZnRlciBpbmRleCBpcyBmb3VuZCBpcyB0byBtYWtlIHN1cmUgdGhlcmUgaXMgYXRsZWFzdCBvbmUgY2VsbCBlbXB0eSBiZXR3ZWVuIGNvbnNlY3V0aXZlIHNoaXBzIGluIG9yZGVyIHRvIG1ha2UgYXV0byBzaGlwcyBwbGFjZW1lbnQgbW9yZSBsb2dpY2FsIGFuZCBsZXNzIHJhbmRvbS5cbiAgICAgICAgaWYgKGluZGV4Rm91bmQpIHtcbiAgICAgICAgICAvLyBDaGVjayBpZiBzaGlwJ3MgYWxsIGNlbGxzIGFyZSBhd2F5IGZyb20gY29ybmVyIHJvd3MgYW5kIGNvbHVtbnNcbiAgICAgICAgICBpZiAocm93ICsgMSA8PSA5ICYmIHJvdyAtIDEgPj0gMCAmJiBjb2wgKyAxIDw9IDkgJiYgY29sIC0gbGVuZ3RoIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbCArIDFdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2wgLSBsZW5ndGhdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3cgKyAxXVtjb2wgLSBpXSAhPT0gXCJlbXB0eVwiIHx8XG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtyb3cgLSAxXVtjb2wgLSBpXSAhPT0gXCJlbXB0eVwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3cgPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93ICsgMV1bY29sIC0gaV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93ID09PSA5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyAtIDFdW2NvbCAtIGldICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNvbCA9PT0gOSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93XVtjb2wgLSBsZW5ndGhdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sIC0gbGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbCArIDFdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgd2hpbGUgKCFpbmRleEZvdW5kKSB7XG4gICAgICAgIHJvdyA9IGxlbmd0aCAtIDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAobGVuZ3RoIC0gMSkpKTtcbiAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgY2VsbCBpcyBlbXB0eSBhbmQgcHJldiAnbi0xJyBjZWxscyBhcmUgZW1wdHkgdmVydGljYWxseVxuICAgICAgICBpZiAoY2VsbCA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgaW5kZXhGb3VuZCA9IHRydWU7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gaV1bY29sXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE9uZSBhZGRpdGlvbmFsIGNoZWNrIGFmdGVyIGluZGV4IGlzIGZvdW5kIGlzIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBhdGxlYXN0IG9uZSBjZWxsIGVtcHR5IGJldHdlZW4gY29uc2VjdXRpdmUgc2hpcHMgaW4gb3JkZXIgdG8gbWFrZSBhdXRvIHNoaXBzIHBsYWNlbWVudCBtb3JlIGxvZ2ljYWwgYW5kIGxlc3MgcmFuZG9tLlxuICAgICAgICBpZiAoaW5kZXhGb3VuZCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAncyBhbGwgY2VsbHMgYXJlIGF3YXkgZnJvbSBjb3JuZXIgcm93cyBhbmQgY29sdW1uc1xuICAgICAgICAgIGlmIChyb3cgKyAxIDw9IDkgJiYgcm93IC0gbGVuZ3RoIC0gMSA+PSAwICYmIGNvbCArIDEgPD0gOSAmJiBjb2wgLSAxID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyArIDFdW2NvbF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgLSBsZW5ndGhdW2NvbF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyAtIGldW2NvbCArIDFdICE9PSBcImVtcHR5XCIgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyAtIGldW2NvbCAtIDFdICE9PSBcImVtcHR5XCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2wgPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gaV1bY29sICsgMV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sID09PSA5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyAtIGldW2NvbCAtIDFdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvdyA9PT0gOSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gbGVuZ3RoXVtjb2xdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93IC0gbGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgKyAxXVtjb2xdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbcm93LCBjb2xdO1xuICB9XG5cbiAgI3BsYWNlU2luZ2xlU2hpcChzaGlwLCBvcmllbnQpIHtcbiAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBbMF07XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcFsyXTtcbiAgICAvLyBVc2UgYXJyYXkgZGVzdHJ1Y3R1cmluZyBmb3IgYWNjY2Vzc2luZyBlbGVtZW50c1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNnZXRTdGFydEluZGV4KGxlbmd0aCwgb3JpZW50KTtcbiAgICAvLyBVcGRhdGUgYWkgYm9hcmQgd2l0aCB0aGlzIHNoaXAgaW5mb1xuXG4gICAgdGhpcy51cGRhdGVCb2FyZChyb3csIGNvbCwgc2hpcE5hbWUsIGxlbmd0aCwgb3JpZW50KTtcbiAgfVxuXG4gIGF1dG9GaWxsU2hpcHNCb2FyZChzaGlwc0Fycikge1xuICAgIGNvbnN0IG9yaWVudEFyciA9IFtcInhcIiwgXCJ5XCJdO1xuICAgIHNoaXBzQXJyLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIC8vIGNob3NlIG9yaWVudGF0aW9uIHJhbmRvbWx5XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgY29uc3Qgb3JpZW50ID0gb3JpZW50QXJyW2luZGV4XTtcblxuICAgICAgdGhpcy4jcGxhY2VTaW5nbGVTaGlwKHNoaXAsIG9yaWVudCk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZWNlaXZlIGF0dGFjayBmdW5jdGlvbiB0byBjaGVjayB3aGV0aGVyIHRoYXQgc2hvdCBoaXQgYW55IHNoaXAgb3IgZ290IG1pc3NlZFxuICByZWNlaXZlQXR0YWNrKHBvc2l0aW9uKSB7XG4gICAgY29uc3Qgcm93ID0gcG9zaXRpb25bMF07XG4gICAgY29uc3QgY29sID0gcG9zaXRpb25bMV07XG4gICAgY29uc3QgY2VsbFN0YXR1cyA9IHRoaXMuYm9hcmRbcm93XVtjb2xdO1xuICAgIGlmIChjZWxsU3RhdHVzID09PSBcImVtcHR5XCIpIHtcbiAgICAgIHRoaXMuYm9hcmRbcm93XVtjb2xdID0gXCJtaXNzXCI7XG4gICAgfSBlbHNlIGlmIChjZWxsU3RhdHVzICE9PSBcIm1pc3NcIiAmJiBjZWxsU3RhdHVzICE9PSBcImhpdFwiKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IFwiaGl0XCI7XG4gICAgfVxuICAgIC8vIFJldHVybiBhdHRhY2tpbmcgY2VsbCBzdGF0dXNcbiAgICByZXR1cm4gY2VsbFN0YXR1cztcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIHBsYXllcigpIHtcbiAgY29uc3QgbmV3UGxheWVyID0ge307XG4gIG5ld1BsYXllci5jMSA9IG5ldyBTaGlwKFwiYzFcIiwgNCk7XG4gIG5ld1BsYXllci5kMSA9IG5ldyBTaGlwKFwiZDFcIiwgMyk7XG4gIG5ld1BsYXllci5kMiA9IG5ldyBTaGlwKFwiZDJcIiwgMyk7XG4gIG5ld1BsYXllci5wMSA9IG5ldyBTaGlwKFwicDFcIiwgMik7XG4gIG5ld1BsYXllci5wMiA9IG5ldyBTaGlwKFwicDJcIiwgMik7XG4gIG5ld1BsYXllci5wMyA9IG5ldyBTaGlwKFwicDNcIiwgMik7XG4gIG5ld1BsYXllci5zMSA9IG5ldyBTaGlwKFwiczFcIiwgMSk7XG4gIG5ld1BsYXllci5zMiA9IG5ldyBTaGlwKFwiczJcIiwgMSk7XG4gIG5ld1BsYXllci5zMyA9IG5ldyBTaGlwKFwiczNcIiwgMSk7XG4gIG5ld1BsYXllci5zNCA9IG5ldyBTaGlwKFwiczRcIiwgMSk7XG4gIG5ld1BsYXllci5hbGxTdW5rID0gKCkgPT4ge1xuICAgIGNvbnN0IHNoaXBOYW1lcyA9IFtcImMxXCIsIFwiZDFcIiwgXCJkMlwiLCBcInAxXCIsIFwicDJcIiwgXCJwM1wiLCBcInMxXCIsIFwiczJcIiwgXCJzM1wiLCBcInM0XCJdO1xuICAgIGxldCBzdW5rID0gdHJ1ZTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgaWYgKCFuZXdQbGF5ZXJbc2hpcF0uc3Vuaykge1xuICAgICAgICBzdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHN1bms7XG4gIH07XG5cbiAgbmV3UGxheWVyLnJlc2V0U2hpcHMgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW1wiYzFcIiwgXCJkMVwiLCBcImQyXCIsIFwicDFcIiwgXCJwMlwiLCBcInAzXCIsIFwiczFcIiwgXCJzMlwiLCBcInMzXCIsIFwiczRcIl07XG4gICAgc2hpcE5hbWVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIG5ld1BsYXllcltzaGlwXS5yZXNldFNoaXAoKTtcbiAgICB9KTtcbiAgfTtcblxuICBuZXdQbGF5ZXIuZ2FtZUJvYXJkID0gbmV3IEdhbWVCb2FyZCgpO1xuICByZXR1cm4gbmV3UGxheWVyO1xufSkoKTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBsZW5ndGgpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0Q291bnQgPSAwO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmxlbmd0aCA9PT0gdGhpcy5oaXRDb3VudCkge1xuICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3VuaztcbiAgfVxuXG4gIHJlc2V0U2hpcCgpIHtcbiAgICB0aGlzLmhpdENvdW50ID0gMFxuICAgIHRoaXMuc3VuayA9IDBcbiAgfVxuXG4gIGhpdCgpIHtcbiAgICB0aGlzLmhpdENvdW50ICs9IDE7XG4gIH1cbn1cbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcbiAgIHYyLjAgfCAyMDExMDEyNlxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcbiovXG5cbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXG5iLCB1LCBpLCBjZW50ZXIsXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0Ym9yZGVyOiAwO1xuXHRmb250LXNpemU6IDEwMCU7XG5cdGZvbnQ6IGluaGVyaXQ7XG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcblx0ZGlzcGxheTogYmxvY2s7XG59XG5ib2R5IHtcblx0bGluZS1oZWlnaHQ6IDE7XG59XG5vbCwgdWwge1xuXHRsaXN0LXN0eWxlOiBub25lO1xufVxuYmxvY2txdW90ZSwgcSB7XG5cdHF1b3Rlczogbm9uZTtcbn1cbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xuXHRjb250ZW50OiAnJztcblx0Y29udGVudDogbm9uZTtcbn1cbnRhYmxlIHtcblx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblx0Ym9yZGVyLXNwYWNpbmc6IDA7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZVNoZWV0cy9tZXllci1yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztDQUdDOztBQUVEOzs7Ozs7Ozs7Ozs7O0NBYUMsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1QsZUFBZTtDQUNmLGFBQWE7Q0FDYix3QkFBd0I7QUFDekI7QUFDQSxnREFBZ0Q7QUFDaEQ7O0NBRUMsY0FBYztBQUNmO0FBQ0E7Q0FDQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGdCQUFnQjtBQUNqQjtBQUNBO0NBQ0MsWUFBWTtBQUNiO0FBQ0E7O0NBRUMsV0FBVztDQUNYLGFBQWE7QUFDZDtBQUNBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG5cXHRtYXJnaW46IDA7XFxuXFx0cGFkZGluZzogMDtcXG5cXHRib3JkZXI6IDA7XFxuXFx0Zm9udC1zaXplOiAxMDAlO1xcblxcdGZvbnQ6IGluaGVyaXQ7XFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG5cXHRkaXNwbGF5OiBibG9jaztcXG59XFxuYm9keSB7XFxuXFx0bGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLCB1bCB7XFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSwgcSB7XFxuXFx0cXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuXFx0Y29udGVudDogJyc7XFxuXFx0Y29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcblxcdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuXFx0Ym9yZGVyLXNwYWNpbmc6IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyoqKioqKiBFbGFkIFNoZWNodGVyJ3MgUkVTRVQgKioqKioqKi9cbi8qKiogYm94IHNpemluZyBib3JkZXItYm94IGZvciBhbGwgZWxlbWVudHMgKioqL1xuKixcbio6OmJlZm9yZSxcbio6OmFmdGVyIHtcbiAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbmEge1xuICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b24ge1xuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgcGFkZGluZzogMDtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xufVxuZmlndXJlIHtcbiAgICAgbWFyZ2luOiAwO1xufVxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgICBib3JkZXI6IDA7XG4gICAgIHBhZGRpbmc6IDA7XG4gICAgIG1hcmdpbjogMDtcbn1cbnVsLFxub2wsXG5kZCB7XG4gICAgIG1hcmdpbjogMDtcbiAgICAgcGFkZGluZzogMDtcbiAgICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gICAgIG1hcmdpbjogMDtcbiAgICAgZm9udC1zaXplOiBpbmhlcml0O1xuICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cbnAge1xuICAgICBtYXJnaW46IDA7XG59XG5jaXRlIHtcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuZmllbGRzZXQge1xuICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgIHBhZGRpbmc6IDA7XG4gICAgIG1hcmdpbjogMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlU2hlZXRzL215LWNzcy1yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUNBQXFDO0FBQ3JDLCtDQUErQztBQUMvQzs7O0tBR0ssc0JBQXNCO0FBQzNCO0FBQ0E7S0FDSyxxQkFBcUI7S0FDckIsY0FBYztLQUNkLGVBQWU7QUFDcEI7QUFDQTtLQUNLLDZCQUE2QjtLQUM3QixjQUFjO0tBQ2QsZUFBZTtLQUNmLFVBQVU7S0FDVixlQUFlO0FBQ3BCO0FBQ0E7S0FDSyxTQUFTO0FBQ2Q7QUFDQTtLQUNLLFNBQVM7S0FDVCxVQUFVO0tBQ1YsU0FBUztBQUNkO0FBQ0E7OztLQUdLLFNBQVM7S0FDVCxVQUFVO0tBQ1YsZ0JBQWdCO0FBQ3JCO0FBQ0E7Ozs7OztLQU1LLFNBQVM7S0FDVCxrQkFBa0I7S0FDbEIsb0JBQW9CO0FBQ3pCO0FBQ0E7S0FDSyxTQUFTO0FBQ2Q7QUFDQTtLQUNLLGtCQUFrQjtBQUN2QjtBQUNBO0tBQ0ssZUFBZTtLQUNmLFVBQVU7S0FDVixTQUFTO0FBQ2RcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyoqKioqKiBFbGFkIFNoZWNodGVyJ3MgUkVTRVQgKioqKioqKi9cXG4vKioqIGJveCBzaXppbmcgYm9yZGVyLWJveCBmb3IgYWxsIGVsZW1lbnRzICoqKi9cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5hIHtcXG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5idXR0b24ge1xcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgICBjb2xvcjogaW5oZXJpdDtcXG4gICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgIHBhZGRpbmc6IDA7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmZpZ3VyZSB7XFxuICAgICBtYXJnaW46IDA7XFxufVxcbmlucHV0OjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgIGJvcmRlcjogMDtcXG4gICAgIHBhZGRpbmc6IDA7XFxuICAgICBtYXJnaW46IDA7XFxufVxcbnVsLFxcbm9sLFxcbmRkIHtcXG4gICAgIG1hcmdpbjogMDtcXG4gICAgIHBhZGRpbmc6IDA7XFxuICAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICAgICBtYXJnaW46IDA7XFxuICAgICBmb250LXNpemU6IGluaGVyaXQ7XFxuICAgICBmb250LXdlaWdodDogaW5oZXJpdDtcXG59XFxucCB7XFxuICAgICBtYXJnaW46IDA7XFxufVxcbmNpdGUge1xcbiAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5maWVsZHNldCB7XFxuICAgICBib3JkZXItd2lkdGg6IDA7XFxuICAgICBwYWRkaW5nOiAwO1xcbiAgICAgbWFyZ2luOiAwO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIFxcYG1haW5cXGAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIFxcYGgxXFxgIGVsZW1lbnRzIHdpdGhpbiBcXGBzZWN0aW9uXFxgIGFuZFxuICogXFxgYXJ0aWNsZVxcYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIFxcYGVtXFxgIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBcXGBzdWJcXGAgYW5kIFxcYHN1cFxcYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gXFxgZmllbGRzZXRcXGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIFxcYGluaGVyaXRcXGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlU2hlZXRzL25vcm1hbGl6ZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsMkVBQTJFOztBQUUzRTsrRUFDK0U7O0FBRS9FOzs7RUFHRTs7QUFFRjtFQUNFLGlCQUFpQixFQUFFLE1BQU07RUFDekIsOEJBQThCLEVBQUUsTUFBTTtBQUN4Qzs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsU0FBUztBQUNYOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsdUJBQXVCLEVBQUUsTUFBTTtFQUMvQixTQUFTLEVBQUUsTUFBTTtFQUNqQixpQkFBaUIsRUFBRSxNQUFNO0FBQzNCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSxtQkFBbUIsRUFBRSxNQUFNO0VBQzNCLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cXG4gKi9cXG5cXG5odG1sIHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cXG59XFxuXFxuLyogU2VjdGlvbnNcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuLyoqXFxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXFxuICovXFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuaDEge1xcbiAgZm9udC1zaXplOiAyZW07XFxuICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBHcm91cGluZyBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXFxuICBoZWlnaHQ6IDA7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXFxuICovXFxuXFxuYSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5jb2RlLFxcbmtiZCxcXG5zYW1wIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxuc21hbGwge1xcbiAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcbi8qKlxcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxcbiAqIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdWIsXFxuc3VwIHtcXG4gIGZvbnQtc2l6ZTogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuICBib3R0b206IC0wLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuICB0b3A6IC0wLjVlbTtcXG59XFxuXFxuLyogRW1iZWRkZWQgY29udGVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5pbWcge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG4vKiBGb3Jtc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5vcHRncm91cCxcXG5zZWxlY3QsXFxudGV4dGFyZWEge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7IC8qIDEgKi9cXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5maWVsZHNldCB7XFxuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXFxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxcbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcXG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5sZWdlbmQge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXFxuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cXG4gKi9cXG5cXG5wcm9ncmVzcyB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRleHRhcmVhIHtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXFxuICovXFxuXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl0sXFxuW3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXFxuICovXFxuXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxcbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxcbiAqL1xcblxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxcbiAqL1xcblxcbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmVcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zdW1tYXJ5IHtcXG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogTWlzY1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxcbiAqL1xcblxcbnRlbXBsYXRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbltoaWRkZW5dIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gIGZvbnQtc2l6ZTogY2FsYygxNnJlbSArICgyMCAtIDE2KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDE5MjAgLSAzMjApKSk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmdhbWUtdGl0bGUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAydncgYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LWZhbWlseTogXCJUb3VybmV5XCI7XG4gIGZvbnQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogY2FsYygyOHJlbSArICg4MCAtIDI4KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDE5MjAgLSAzMjApKSk7XG4gIGNvbG9yOiAjNTAwNzI0O1xuICBtYXJnaW4tYm90dG9tOiA1dnc7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5pbml0aWFsLXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDgwdmg7XG4gIHotaW5kZXg6IDM7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjIwMDY7XG4gIGJveC1zaGFkb3c6IDNyZW0gM3JlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdG9wOiAxMHZoO1xuICBsZWZ0OiAyMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhbWUtdGl0bGUuaW5pdC1wYWdlIHtcbiAgY29sb3I6ICM1OTc4ZjU7XG59XG5cbmJ1dHRvbi5nYW1lLXN0YXJ0LmluaXQtcGFnZSxcbi5wbGF5LWFnYWluIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBmb250LXdlaWdodDogNzAwO1xuICBwYWRkaW5nOiA1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk3OGY1O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG59XG5cbi5pbml0aWFsLXBhZ2UuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmluaXRpYWwtcGFnZS5oaWRlID4gOm50aC1jaGlsZChuKSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmluaXRpYWwtcGFnZS5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5zaGlwLXBsYWNlbWVudC1wYWdlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiA4MHZoO1xuICBwYWRkaW5nOiAydnc7XG4gIHotaW5kZXg6IDI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmI4Yjc7XG4gIGJveC1zaGFkb3c6IDNyZW0gM3JlbSAzcmVtIHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdG9wOiAxMHZoO1xuICBsZWZ0OiAyMHZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnNoaXAtcGxhY2VtZW50LXBhZ2UuaGlkZSB7XG4gIG9wYWNpdHk6IDA7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtcGFnZS5zaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLnNoaXAtbmFtZSB7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm90YXRlLWJ0biB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiAjMGY3NjZlO1xuICBwYWRkaW5nOiAxcmVtO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxdnc7XG59XG5cbi5yb3RhdGUtYnRuOmhvdmVyIHtcbiAgb3V0bGluZTogMXJlbSBzb2xpZCAjNjM2MTYxO1xuICBib3JkZXItcmFkaXVzOiA1cmVtO1xufVxuXG4ucm90YXRlLXRleHQge1xuICBib3JkZXItYm90dG9tOiAxcmVtIGRhc2hlZCAjMGY3NjZlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnJhbmRvbS1pY29uIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHdpZHRoOiBjYWxjKDE2cmVtICsgKDIyIC0gMTYpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoOTIwIC0gMzIwKSkpO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtcGFnZSAueW91ci10YWJsZSAudGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXJlbSBzb2xpZCByZ2IoMTExLCAxMTEsIDIxNCk7XG59XG5cbi5nYW1lcGxheS1wYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogNjB2dztcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJvcmRlcjogMXJlbSBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbn1cblxuLmdhbWVwbGF5LXBhZ2UuaGlkZSB7XG4gIG9wYWNpdHk6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ2FtZXBsYXktcGFnZS5zaG93IHtcbiAgb3BhY2l0eTogMTtcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLnR1cm4tbWVzc2FnZSB7XG4gIHdpZHRoOiAxMnZ3O1xuICBwYWRkaW5nOiAwLjV2dztcbiAgbWFyZ2luOiAxdncgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ3JpZHMtY29udGFpbmVyIHtcbiAgbWFyZ2luOiAydncgYXV0bztcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogMjV2dztcbiAgcGFkZGluZzogMnZ3O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDV2dztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnlvdXItZ3JpZCxcbi5vcHBvbmVudC1ncmlkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMXZ3O1xufVxuXG4ueW91ci10YWJsZSxcbi5vcHBvbmVudC10YWJsZSB7XG4gIHdpZHRoOiAyMHZ3O1xuICBoZWlnaHQ6IDIwdnc7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4udGFibGUtY2VsbCB7XG4gIHdpZHRoOiAydnc7XG4gIGhlaWdodDogMnZ3O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4ubW92aW5nIHtcbiAgYm9yZGVyOiAxcmVtIGRhc2hlZCAjNTk3OGY1O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnBsYWNlZCB7XG4gIGJvcmRlcjogMnJlbSBzb2xpZCBibHVlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi5zdW5rIHtcbiAgYm9yZGVyOiAzcmVtIHNvbGlkIHJlZDtcbn1cblxuLnlvdXItdGFibGUgLnRhYmxlLWNlbGwge1xuICBib3JkZXI6IDFyZW0gc29saWQgIzU5NzhmNTtcbn1cblxuLnlvdXItdGFibGUgLnRhYmxlLWNlbGw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcHBvbmVudC10YWJsZSAudGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXJlbSBzb2xpZCAjY2NjO1xufVxuXG4ueW91ci10YWJsZS1nYW1lcGxheS1wYWdlIDpudGgtY2hpbGQobikge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5vcHBvbmVudC10YWJsZSAudGFibGUtY2VsbDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmdhbWVvdmVyLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB6LWluZGV4OiA1O1xuICB3aWR0aDogMTAwdnc7XG4gIGhlaWdodDogMTAwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG4uZ2FtZW92ZXItY29udGFpbmVyLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDFzO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmdhbWVvdmVyLWNvbnRhaW5lci5zaG93IHtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uZ2FtZW92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiAzMHZ3O1xuICB0b3A6IDMwdmg7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IDQwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjIwMDY7XG4gIGNvbG9yOiAjY2NjO1xuICBib3JkZXI6IDFyZW0gc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG59XG5cbi5tb2RhbC1tc2cge1xuICBmb250LXNpemU6IDQ4cmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNF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QUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7O0VBRWQsb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnJlbSArICgyMCAtIDE2KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDE5MjAgLSAzMjApKSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5nYW1lLXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAydncgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVG91cm5leVxcXCI7XFxuICBmb250OiBib2xkO1xcbiAgZm9udC1zaXplOiBjYWxjKDI4cmVtICsgKDgwIC0gMjgpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoMTkyMCAtIDMyMCkpKTtcXG4gIGNvbG9yOiAjNTAwNzI0O1xcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmluaXRpYWwtcGFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNjB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIyMDA2O1xcbiAgYm94LXNoYWRvdzogM3JlbSAzcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS10aXRsZS5pbml0LXBhZ2Uge1xcbiAgY29sb3I6ICM1OTc4ZjU7XFxufVxcblxcbmJ1dHRvbi5nYW1lLXN0YXJ0LmluaXQtcGFnZSxcXG4ucGxheS1hZ2FpbiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTc4ZjU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4uaW5pdGlhbC1wYWdlLmhpZGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uaW5pdGlhbC1wYWdlLmhpZGUgPiA6bnRoLWNoaWxkKG4pIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uaW5pdGlhbC1wYWdlLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtcGFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNjB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIHBhZGRpbmc6IDJ2dztcXG4gIHotaW5kZXg6IDI7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWJiOGI3O1xcbiAgYm94LXNoYWRvdzogM3JlbSAzcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1wbGFjZW1lbnQtcGFnZS5oaWRlIHtcXG4gIG9wYWNpdHk6IDA7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1wYWdlLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uc2hpcC1uYW1lIHtcXG4gIHBhZGRpbmc6IDVyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnJvdGF0ZS1idG4ge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBjb2xvcjogIzBmNzY2ZTtcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLnJvdGF0ZS1idG46aG92ZXIge1xcbiAgb3V0bGluZTogMXJlbSBzb2xpZCAjNjM2MTYxO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLnJvdGF0ZS10ZXh0IHtcXG4gIGJvcmRlci1ib3R0b206IDFyZW0gZGFzaGVkICMwZjc2NmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnJhbmRvbS1pY29uIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgd2lkdGg6IGNhbGMoMTZyZW0gKyAoMjIgLSAxNikgKiAoKDEwMHZ3IC0gMzIwcmVtKSAvICg5MjAgLSAzMjApKSk7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1wYWdlIC55b3VyLXRhYmxlIC50YWJsZS1jZWxsIHtcXG4gIGJvcmRlcjogMXJlbSBzb2xpZCByZ2IoMTExLCAxMTEsIDIxNCk7XFxufVxcblxcbi5nYW1lcGxheS1wYWdlIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7XFxuICB3aWR0aDogNjB2dztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIGJvcmRlcjogMXJlbSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi5nYW1lcGxheS1wYWdlLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4uZ2FtZXBsYXktcGFnZS5zaG93IHtcXG4gIG9wYWNpdHk6IDE7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4udHVybi1tZXNzYWdlIHtcXG4gIHdpZHRoOiAxMnZ3O1xcbiAgcGFkZGluZzogMC41dnc7XFxuICBtYXJnaW46IDF2dyBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjVmOTtcXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5ncmlkcy1jb250YWluZXIge1xcbiAgbWFyZ2luOiAydncgYXV0bztcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiAyNXZ3O1xcbiAgcGFkZGluZzogMnZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgZ2FwOiA1dnc7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ueW91ci1ncmlkLFxcbi5vcHBvbmVudC1ncmlkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAxdnc7XFxufVxcblxcbi55b3VyLXRhYmxlLFxcbi5vcHBvbmVudC10YWJsZSB7XFxuICB3aWR0aDogMjB2dztcXG4gIGhlaWdodDogMjB2dztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4udGFibGUtY2VsbCB7XFxuICB3aWR0aDogMnZ3O1xcbiAgaGVpZ2h0OiAydnc7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4ubW92aW5nIHtcXG4gIGJvcmRlcjogMXJlbSBkYXNoZWQgIzU5NzhmNTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucGxhY2VkIHtcXG4gIGJvcmRlcjogMnJlbSBzb2xpZCBibHVlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcXG59XFxuXFxuLnN1bmsge1xcbiAgYm9yZGVyOiAzcmVtIHNvbGlkIHJlZDtcXG59XFxuXFxuLnlvdXItdGFibGUgLnRhYmxlLWNlbGwge1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkICM1OTc4ZjU7XFxufVxcblxcbi55b3VyLXRhYmxlIC50YWJsZS1jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm9wcG9uZW50LXRhYmxlIC50YWJsZS1jZWxsIHtcXG4gIGJvcmRlcjogMXJlbSBzb2xpZCAjY2NjO1xcbn1cXG5cXG4ueW91ci10YWJsZS1nYW1lcGxheS1wYWdlIDpudGgtY2hpbGQobikge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm9wcG9uZW50LXRhYmxlIC50YWJsZS1jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAxcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lci5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZ2FtZW92ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBsZWZ0OiAzMHZ3O1xcbiAgdG9wOiAzMHZoO1xcbiAgei1pbmRleDogNDtcXG4gIHdpZHRoOiA0MHZ3O1xcbiAgaGVpZ2h0OiA0MHZoO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyMjAwNjtcXG4gIGNvbG9yOiAjY2NjO1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLm1vZGFsLW1zZyB7XFxuICBmb250LXNpemU6IDQ4cmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGh0bWwge1xuICAgICBmb250LXNpemU6IDFweDsgLypmb3IgdXNpbmcgUkVNIHVuaXRzKi9cbn1cbmJvZHkge1xuICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFwiUm9ib3RvXCIsIFwiT3h5Z2VuXCIsIFwiVWJ1bnR1XCIsIFwiRmlyYSBTYW5zXCIsIFwiRHJvaWQgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWY7XG4gICAgIGZvbnQtc2l6ZTogMTZyZW07XG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgIGxpbmUtaGVpZ2h0OiAxLjM7XG4gICAgIGNvbG9yOiAjMjIyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvdHlwb2dyYXBoeS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7S0FDSyxjQUFjLEVBQUUsc0JBQXNCO0FBQzNDO0FBQ0E7S0FDSyxpSkFBaUo7S0FDakosZ0JBQWdCO0tBQ2hCLGdCQUFnQjtLQUNoQixnQkFBZ0I7S0FDaEIsV0FBVztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJodG1sIHtcXG4gICAgIGZvbnQtc2l6ZTogMXB4OyAvKmZvciB1c2luZyBSRU0gdW5pdHMqL1xcbn1cXG5ib2R5IHtcXG4gICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFxcXCJTZWdvZSBVSVxcXCIsIFxcXCJSb2JvdG9cXFwiLCBcXFwiT3h5Z2VuXFxcIiwgXFxcIlVidW50dVxcXCIsIFxcXCJGaXJhIFNhbnNcXFwiLCBcXFwiRHJvaWQgU2Fuc1xcXCIsIFxcXCJIZWx2ZXRpY2EgTmV1ZVxcXCIsIHNhbnMtc2VyaWY7XFxuICAgICBmb250LXNpemU6IDE2cmVtO1xcbiAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgIGxpbmUtaGVpZ2h0OiAxLjM7XFxuICAgICBjb2xvcjogIzIyMjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWV5ZXItcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZXllci1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktY3NzLXJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbXktY3NzLXJlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9ub3JtYWxpemUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdHlwb2dyYXBoeS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL21leWVyLXJlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVTaGVldHMvbXktY3NzLXJlc2V0LmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVTaGVldHMvbm9ybWFsaXplLmNzc1wiO1xuaW1wb3J0IFwiLi4vc3R5bGVTaGVldHMvdHlwb2dyYXBoeS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL3N0eWxlcy5jc3NcIjtcbmltcG9ydCByYW5kb21JY29uIGZyb20gXCIuLi9hc3NldHMvaWNvbnMvcmFuZG9tLnN2Z1wiO1xuXG4vLyBJbXBvcnQgbW9kdWxlcyBpbnRvIG1haW4gYXBwLmpzIGZpbGVcbmltcG9ydCBkb21NYW5pcHVsYXRpb24gZnJvbSBcIi4vZG9tXCI7XG5pbXBvcnQgcGxheWVyIGZyb20gXCIuL3BsYXllclwiO1xuaW1wb3J0IGFpIGZyb20gXCIuL2FpXCI7XG5cbi8vIENyZWF0ZSBhbmQgYXBwZW5kIHNoaXAgcm90YXRlIGltYWdlIGljb24gdG8gdGhlIHJvdGF0ZSBCdG5cbmNvbnN0IHJhbmRJbWcgPSBuZXcgSW1hZ2UoKTtcbnJhbmRJbWcuc3JjID0gcmFuZG9tSWNvbjtcbnJhbmRJbWcuY2xhc3NMaXN0LmFkZChcInJhbmRvbS1pY29uXCIpO1xucmFuZEltZy5hbHQgPSBcIlJhbmRvbSBJY29uXCI7XG5jb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZS1idG5cIik7XG5yb3RhdGVCdG4uYXBwZW5kQ2hpbGQocmFuZEltZyk7XG5cbi8vIEJ1aWxkIGVtcHR5IGdhbWUgYm9hcmQgZm9yIHBsYXllcjFcbnBsYXllci5nYW1lQm9hcmQuYnVpbGRCb2FyZCgpO1xuXG4vLyBEZWZpbmUgYWkncyBlbXB0eSBnYW1lQm9hcmRcbmFpLmdhbWVCb2FyZC5idWlsZEJvYXJkKCk7XG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgLy8gUmVzZXQgYm90aCBnYW1lIGJvYXJkc1xuICBwbGF5ZXIuZ2FtZUJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgYWkuZ2FtZUJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgLy8gUmVzZXQgZGlzcGxheSB0YWJsZXMgZm9yIGJvdGggcGxheWVyc1xuICBkb21NYW5pcHVsYXRpb24ucmVzZXRUYWJsZXMoKTtcbiAgLy8gUmVzZXQgcGxheWVyJ3MvYWkncyBzaGlwcyBzdGF0dXNcbiAgcGxheWVyLnJlc2V0U2hpcHMoKTtcbiAgYWkucmVzZXRTaGlwcygpO1xuICAvLyBSZW1vdmUgc2hpcHMgZnJvbSB0YWJsZXNcbiAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZVNoaXBzKCk7XG4gIC8vIE5vdyBoaWRlIGdhbWUgcGFnZVxuICBkb21NYW5pcHVsYXRpb24uaGlkZUdhbWVQYWdlKCk7XG4gIC8vIFNob3cgc2hpcCBwbGFjZW1lbnQgcGFnZVxuICBkb21NYW5pcHVsYXRpb24uc2hvd1NoaXBQYWdlKCk7XG4gIC8vIE5vdyBoaWRlIG1vZGFsIGNvbnRhaW5lclxuICBkb21NYW5pcHVsYXRpb24uaGlkZU1vZGFsQ29udGFpbmVyKCk7XG4gIC8vIE5vdyBtYW5hZ2Ugc2hpcHMgcGxhY2VtZW50XG4gIG1hbmFnZVNoaXBzUGxhY2VtZW50KCk7XG59XG5cbi8vIERlY2xhcmUgZ2FtZSBPdmVyXG5mdW5jdGlvbiBnYW1lT3ZlcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IGdhbWVPdmVyQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZW92ZXItY29udGFpbmVyXCIpO1xuICBjb25zdCBtb2RhbE1zZyA9IGdhbWVPdmVyQ29udC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW1zZ1wiKTtcbiAgZ2FtZU92ZXJDb250LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICBtb2RhbE1zZy50ZXh0Q29udGVudCA9IFwiWW91IFdpbiFcIjtcbiAgfSBlbHNlIGlmIChwbGF5ZXJOYW1lID09PSBcInBsYXllclwiKSB7XG4gICAgbW9kYWxNc2cudGV4dENvbnRlbnQgPSBcIllvdSBMb3NlIVwiO1xuICB9XG5cbiAgLy8gQWNjZXNzIHBsYXkgYWdhaW4gYnV0dG9uXG4gIGNvbnN0IHBsYXlBZ2FpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheS1hZ2FpblwiKTtcblxuICBwbGF5QWdhaW5CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0R2FtZSk7XG59XG5cbmZ1bmN0aW9uIGlzR2FtZU92ZXIocGxheWVyTmFtZSkge1xuICBsZXQgaXNTdW5rO1xuICBpZiAocGxheWVyTmFtZSA9PT0gXCJhaVwiKSB7XG4gICAgaXNTdW5rID0gYWkuYWxsU3VuaygpO1xuICB9IGVsc2UgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICBpc1N1bmsgPSBwbGF5ZXIuYWxsU3VuaygpO1xuICB9XG4gIHJldHVybiBpc1N1bms7XG59XG5cbmZ1bmN0aW9uIGdhbWVMb29wKCkge1xuICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgY29uc3Qgb3BwVGFibGUgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LXRhYmxlXCIpO1xuICBjb25zdCB5b3VyVGFibGUgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yKFwiLnlvdXItdGFibGVcIik7XG5cbiAgZnVuY3Rpb24gaW5pdFR1cm4oKSB7XG4gICAgY29uc3QgcGxheWVycyA9IFtcInBsYXllclwiLCBcImFpXCJdO1xuICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XG4gICAgcmV0dXJuIHBsYXllcnNbaW5kZXhdO1xuICB9XG5cbiAgZnVuY3Rpb24gZGlzYWJsZU9wcFRhYmxlKCkge1xuICAgIGNvbnN0IGNlbGxzID0gb3BwVGFibGUucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZS1jZWxsXCIpO1xuICAgIG9wcFRhYmxlLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGNlbGxDb3B5ID0gY2VsbDtcbiAgICAgIGNlbGxDb3B5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGVuYWJsZU9wcFRhYmxlKCkge1xuICAgIGNvbnN0IGNlbGxzID0gb3BwVGFibGUucXVlcnlTZWxlY3RvckFsbChcIi50YWJsZS1jZWxsXCIpO1xuICAgIG9wcFRhYmxlLnN0eWxlLm9wYWNpdHkgPSBcIjAuNVwiO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNvbnN0IGNlbGxDb3B5ID0gY2VsbDtcbiAgICAgIGNlbGxDb3B5LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcImFsbFwiO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gU2V0IGluaXRpYWwgdHVyblxuICBsZXQgdHVybiA9IGluaXRUdXJuKCk7XG5cbiAgZnVuY3Rpb24gdG9nZ2xlVHVybigpIHtcbiAgICBpZiAodHVybiA9PT0gXCJhaVwiKSB0dXJuID0gXCJwbGF5ZXJcIjtcbiAgICBlbHNlIHR1cm4gPSBcImFpXCI7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVTaGlwU3RhdHVzKHBsYXllck5hbWUsIHNoaXBOYW1lKSB7XG4gICAgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgc2hpcCBoaXQgY291bnRcbiAgICAgIGFpW3NoaXBOYW1lXS5oaXQoKTtcbiAgICAgIC8vIGNoZWNrIGlmIHNoaXAgc3Vua1xuICAgICAgYWlbc2hpcE5hbWVdLmlzU3VuaygpO1xuICAgIH1cbiAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgICAgLy8gVXBkYXRlIGN1cnJlbnQgc2hpcCBoaXQgY291bnRcbiAgICAgIHBsYXllcltzaGlwTmFtZV0uaGl0KCk7XG4gICAgICAvLyBjaGVjayBpZiBzaGlwIHN1bmtcbiAgICAgIHBsYXllcltzaGlwTmFtZV0uaXNTdW5rKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gcGxheSBhaSB0dXJuXG4gIGZ1bmN0aW9uIGFpVHVybigpIHtcbiAgICBsZXQgcG9zaXRpb24gPSBhaS5nZXRIaXRDb29yZCgpO1xuICAgIHdoaWxlICghYWkuaXNBdHRhY2tWYWxpZChwb3NpdGlvbikpIHtcbiAgICAgIHBvc2l0aW9uID0gYWkuZ2V0SGl0Q29vcmQoKTtcbiAgICB9XG5cbiAgICAvLyBHb3QgdmFsaWQgcG9zaXRpb24gd2hpY2ggaXMgZWl0aGVyIHNoaXAgcG9zaXRpb24gb3IgZW1wdHkgY2VsbFxuICAgIGNvbnN0IGNlbGxTdGF0dXMgPSBwbGF5ZXIuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xuXG4gICAgaWYgKGNlbGxTdGF0dXMgIT09IFwiZW1wdHlcIikge1xuICAgICAgLy8gYXR0YWNrIGlzIG9uIHRoZSBzaGlwXG4gICAgICBjb25zdCBzaGlwTmFtZSA9IGNlbGxTdGF0dXM7XG4gICAgICAvLyBVcGRhdGUgc2hpcCBoaXQgc3RhdHVzXG4gICAgICB1cGRhdGVTaGlwU3RhdHVzKFwicGxheWVyXCIsIHNoaXBOYW1lKTtcbiAgICAgIGNvbnN0IGlzU3VuayA9IHBsYXllcltzaGlwTmFtZV0uaXNTdW5rKCk7XG4gICAgICBpZiAoaXNTdW5rKSB7XG4gICAgICAgIGRvbU1hbmlwdWxhdGlvbi5zaGlwU3VuayhcInBsYXllclwiLCBzaGlwTmFtZSk7XG4gICAgICB9XG4gICAgICBjb25zdCBsb3NlID0gaXNHYW1lT3ZlcihcInBsYXllclwiKTtcbiAgICAgIGlmIChsb3NlKSBnYW1lT3ZlcihcInBsYXllclwiKTtcbiAgICB9XG4gICAgY29uc3QgdGFyZ2V0Q2VsbCA9IHlvdXJUYWJsZS5yb3dzW3Bvc2l0aW9uWzBdXS5jZWxsc1twb3NpdGlvblsxXV07XG4gICAgLy8gVXBkYXRlIGNlbGwgc3RhdHVzIG1pc3MsIGhpdCBldGMgaW4gdGhlIERPTVxuICAgIGRvbU1hbmlwdWxhdGlvbi51cGRhdGVDZWxsSGl0KHRhcmdldENlbGwsIGNlbGxTdGF0dXMpO1xuICAgIC8vIEZpbmFsbHkgZW5hYmxlIG9wcG9uZW50J3MgdGFibGVcbiAgICBlbmFibGVPcHBUYWJsZSgpO1xuICAgIC8vIFRvZ2dsZSB0dXJuXG4gICAgdG9nZ2xlVHVybigpO1xuICAgIC8vIFRoZW4gZGlzcGxheSB0aGUgbWVzc2FnZVxuICAgIGRvbU1hbmlwdWxhdGlvbi50dXJuTWVzc2FnZSh0dXJuKTtcbiAgfVxuXG4gIC8vIFBsYXkgZmlyc3QgdHVyblxuICBkb21NYW5pcHVsYXRpb24udHVybk1lc3NhZ2UodHVybik7XG4gIGlmICh0dXJuID09PSBcImFpXCIpIHtcbiAgICAvLyBJZiBmaXJzdCB0dXJuIGlzIG9mIGFpIHRoZW5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFpVHVybigpO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgZnVuY3Rpb24gcGxheWVyVHVybihlKSB7XG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudGFibGUtY2VsbFwiKSkge1xuICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBbXTtcbiAgICAgIHBvc2l0aW9uWzBdID0gTnVtYmVyKHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIikpO1xuICAgICAgcG9zaXRpb25bMV0gPSBOdW1iZXIodGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKSk7XG4gICAgICBjb25zdCBjZWxsU3RhdHVzID0gYWkuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xuXG4gICAgICAvLyBVcGRhdGUgY2VsbCBpbiB0aGUgRE9NXG4gICAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlQ2VsbEhpdCh0YXJnZXRDZWxsLCBjZWxsU3RhdHVzKTtcblxuICAgICAgLy8gQ2hlY2sgaWYgc2hpcCBnb3QgaGl0XG4gICAgICBpZiAoY2VsbFN0YXR1cyAhPT0gXCJtaXNzXCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJoaXRcIiAmJiBjZWxsU3RhdHVzICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgLy8gU2hpcCBmb3VuZFxuICAgICAgICBjb25zdCBzaGlwTmFtZSA9IGNlbGxTdGF0dXM7XG5cbiAgICAgICAgdXBkYXRlU2hpcFN0YXR1cyhcImFpXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgc2hpcCBnb3Qgc3Vua1xuICAgICAgICBjb25zdCBpc1N1bmsgPSBhaVtzaGlwTmFtZV0uaXNTdW5rKCk7XG4gICAgICAgIGlmIChpc1N1bmspIHtcbiAgICAgICAgICBkb21NYW5pcHVsYXRpb24uc2hpcFN1bmsoXCJhaVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gQ2hhbmdlIHR1cm4gaWYgc2hvdCBnb3QgaGl0IG9yIG1pc3NcbiAgICAgIGlmICgoY2VsbFN0YXR1cyAhPT0gXCJtaXNzXCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJoaXRcIikgfHwgY2VsbFN0YXR1cyA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIC8vIENoZWNrIHdoZXRoZXIgZ2FtZSBpcyBvdmVyIG9yIG5vdFxuICAgICAgICBjb25zdCBsb3NlID0gaXNHYW1lT3ZlcihcImFpXCIpO1xuICAgICAgICBpZiAobG9zZSkge1xuICAgICAgICAgIGdhbWVPdmVyKFwiYWlcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gVG9nZ2xlIHR1cm5cbiAgICAgICAgICB0b2dnbGVUdXJuKCk7XG4gICAgICAgICAgLy8gRGlzcGxheSB0dXJuIG1lc3NhZ2VcbiAgICAgICAgICBkb21NYW5pcHVsYXRpb24udHVybk1lc3NhZ2UodHVybik7XG4gICAgICAgICAgLy8gRGlzYWJsZSBvcHBvbmVudCB0YWJsZSBkdXJpbmcgYWkncyB0dXJuXG4gICAgICAgICAgZGlzYWJsZU9wcFRhYmxlKCk7XG4gICAgICAgICAgLy8gQ2FsbCBhaSdzIHR1cm5cbiAgICAgICAgICBzZXRUaW1lb3V0KGFpVHVybiwgMTAwMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBMaXN0ZW4gcGxheWVyJ3MgY2xpY2sgb24gb3Bwb25lbnQncyB0YWJsZVxuICBvcHBUYWJsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcGxheWVyVHVybik7XG59XG5cbmNvbnN0IHBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtc3RhcnRcIik7XG5cbi8vIERlZmluZSBzaGlwcyBuYW1lc1xuY29uc3Qgc2hpcE5hbWVzID0gW1xuICBbXCJjMVwiLCBcIkNhcnJpZXJcIiwgNF0sXG4gIFtcImQxXCIsIFwiRGlzdHJveWVyXCIsIDNdLFxuICBbXCJkMlwiLCBcIkRpc3Ryb3llclwiLCAzXSxcbiAgW1wicDFcIiwgXCJQYXRyb2wgQm9hdFwiLCAyXSxcbiAgW1wicDJcIiwgXCJQYXRyb2wgQm9hdFwiLCAyXSxcbiAgW1wicDNcIiwgXCJQYXRyb2wgQm9hdFwiLCAyXSxcbiAgW1wiczFcIiwgXCJTaW5nbGV0b25cIiwgMV0sXG4gIFtcInMyXCIsIFwiU2luZ2xldG9uXCIsIDFdLFxuICBbXCJzM1wiLCBcIlNpbmdsZXRvblwiLCAxXSxcbiAgW1wiczRcIiwgXCJTaW5nbGV0b25cIiwgMV0sXG5dO1xuXG5mdW5jdGlvbiBtYW5hZ2VTaGlwc1BsYWNlbWVudCgpIHtcbiAgLy8gSGlkZSBpbml0aWFsIHBhZ2Ugd2hlbiBwbGF5IGJ1dHRvbiBjbGlja2VkXG4gIGRvbU1hbmlwdWxhdGlvbi5oaWRlSW5pdFBhZ2UoKTtcbiAgLy8gU2hvdyBzaGlwIHBsYWNlbWVudCBwYWdlXG4gIGRvbU1hbmlwdWxhdGlvbi5zaG93U2hpcFBhZ2UoKTtcblxuICAvLyBBdXRvIGZpbGwgYWkgYm9hcmQgMkQgYXJyYXkgd2l0aCBzaGlwc1xuICBhaS5nYW1lQm9hcmQuYXV0b0ZpbGxTaGlwc0JvYXJkKHNoaXBOYW1lcy5zbGljZSgpKTtcbiAgLy8gTGV0IHBsYXllciBwbGFjZSBzaGlwcyBvbiB0aGUgYm9hcmRcbiAgZG9tTWFuaXB1bGF0aW9uLnBsYWNlU2hpcHMoc2hpcE5hbWVzLnNsaWNlKCksIGdhbWVMb29wKTtcbn1cblxuZG9tTWFuaXB1bGF0aW9uLmhpZGVHYW1lUGFnZSgpO1xucGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbWFuYWdlU2hpcHNQbGFjZW1lbnQpO1xuIl0sIm5hbWVzIjpbIkdhbWVCb2FyZCIsIlNoaXAiLCJwbGF5ZXIiLCJhaSIsIm5ld0FJIiwiYzEiLCJkMSIsImQyIiwicDEiLCJwMiIsInAzIiwiczEiLCJzMiIsInMzIiwiczQiLCJnYW1lQm9hcmQiLCJhbGxTdW5rIiwic2hpcE5hbWVzIiwiZm9yRWFjaCIsInNoaXAiLCJzdW5rIiwicmVzZXRTaGlwcyIsInJlc2V0U2hpcCIsImlzQXR0YWNrVmFsaWQiLCJwb3NpdGlvbiIsInJvdyIsImNvbCIsImNlbGxTdGF0dXMiLCJib2FyZCIsImdldEhpdENvb3JkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiZG9tTWFuaXB1bGF0aW9uIiwicmVzZXRUYWJsZXMiLCJ5b3VyVGFibGUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJvcHBUYWJsZSIsInNldFNoaXBUYWJsZSIsInlvdXJDZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcHBDZWxscyIsInNldFNoaXBDZWxscyIsImNlbGwiLCJtb2RpZmllZENlbGwiLCJzZXRBdHRyaWJ1dGUiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsInJlbW92ZVNoaXBzIiwiZ2FtZVBhZ2UiLCJzaGlwUGFnZSIsInNoaXBzT25TaGlwUGFnZSIsInNoaXBzT25HYW1lUGFnZSIsInJlbW92ZUNoaWxkIiwiY3JlYXRlU2hpcCIsInNoaXBPd25lciIsInNob3J0TmFtZSIsImxlbmd0aCIsIm9yaWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0b3AiLCJsZWZ0IiwiY29uY2F0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJjaGFuZ2VPcmllbnRhdGlvbiIsInNoaXBQbGFjZVBhZ2UiLCJjdXJyZW50U2hpcCIsImdldEF0dHJpYnV0ZSIsInVwZGF0ZUNlbGxWYWwiLCJwbGF5ZXJOYW1lIiwic2hpcE5hbWUiLCJzaGlwRW5kIiwiY29sdW1uIiwiaSIsInJvd3MiLCJjZWxscyIsImhpZGVTaGlwIiwiaGlkZGVuU2hpcCIsImJvcmRlciIsImF1dG9QbGFjZVNoaXBzIiwic2hpcHNDb29yZCIsInNoaXBEYXRhIiwiZW5kIiwiZ2FtZVBsYXlQYWdlIiwiYXBwZW5kQ2hpbGQiLCJyb3dFbmQiLCJjb2xFbmQiLCJjZWxsRW5kIiwiY2VsbFJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJnYW1lUGFnZVJlY3QiLCJjZWxsUG9zWCIsInJpZ2h0IiwiY2VsbFBvc1kiLCJib3R0b20iLCJwbGFjZVNoaXBzIiwiY2FsbEJhY2siLCJyZW1vdmUiLCJzaGlwQXJyIiwic2hpZnQiLCJzaGlwTWVzc2FnZSIsImlubmVySFRNTCIsImlzUGxhY2VkIiwiZHJhZ1NoaXAiLCJlIiwic2hpcFBhZ2VSZWN0IiwidGFyZ2V0IiwibWF0Y2hlcyIsImN1cnJlbnRDZWxsIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJjbGllbnRYIiwiY2xpZW50WSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb3RhdGVCdG4iLCJkcm9wU2hpcCIsInBhcnNlSW50IiwiaXNWYWxpZFBvcyIsInNoaXBSZWN0Iiwic2hpcFgiLCJzaGlwWSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVCb2FyZCIsInNsaWNlIiwiaGlkZUluaXRQYWdlIiwiaW5pdFBhZ2UiLCJoaWRlU2hpcFBhZ2UiLCJzaG93U2hpcFBhZ2UiLCJzaG93R2FtZVBhZ2UiLCJoaWRlR2FtZVBhZ2UiLCJoaWRlTW9kYWxDb250YWluZXIiLCJtb2RhbENvbnRhaW5lciIsInR1cm5NZXNzYWdlIiwidHVybiIsIm1lc3NhZ2UiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUNlbGxIaXQiLCJoaXRTdGF0dXMiLCJ0YXJnZXRDZWxsIiwic2hpcFN1bmsiLCJzaGlwc05vZGVMaXN0Iiwic2hpcHNBcnIiLCJBcnJheSIsImZyb20iLCJzdW5rU2hpcCIsIm5hbWUiLCJvd25lciIsImNvbnNvbGUiLCJsb2ciLCJfY2xhc3NDYWxsQ2hlY2siLCJfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMiLCJfcGxhY2VTaW5nbGVTaGlwIiwiX2dldFN0YXJ0SW5kZXgiLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImJ1aWxkQm9hcmQiLCJyIiwiYyIsInB1c2giLCJyZXNldEJvYXJkIiwiYm9hcmRSb3ciLCJ1cGRhdGVTaGlwc0Nvb3JkIiwic3RhcnQiLCJhdXRvRmlsbFNoaXBzQm9hcmQiLCJfdGhpcyIsIm9yaWVudEFyciIsImluZGV4IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9wbGFjZVNpbmdsZVNoaXAyIiwiY2FsbCIsInJlY2VpdmVBdHRhY2siLCJfZ2V0U3RhcnRJbmRleDIiLCJpbmRleEZvdW5kIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdlIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdlMiIsIl9zbGljZWRUb0FycmF5IiwiZGVmYXVsdCIsIm5ld1BsYXllciIsImhpdENvdW50IiwiaXNTdW5rIiwiaGl0IiwicmFuZG9tSWNvbiIsInJhbmRJbWciLCJJbWFnZSIsInNyYyIsImFsdCIsInJlc2V0R2FtZSIsIm1hbmFnZVNoaXBzUGxhY2VtZW50IiwiZ2FtZU92ZXIiLCJnYW1lT3ZlckNvbnQiLCJtb2RhbE1zZyIsInBsYXlBZ2FpbkJ0biIsImlzR2FtZU92ZXIiLCJnYW1lTG9vcCIsImluaXRUdXJuIiwicGxheWVycyIsImRpc2FibGVPcHBUYWJsZSIsIm9wYWNpdHkiLCJjZWxsQ29weSIsInBvaW50ZXJFdmVudHMiLCJlbmFibGVPcHBUYWJsZSIsInRvZ2dsZVR1cm4iLCJ1cGRhdGVTaGlwU3RhdHVzIiwiYWlUdXJuIiwibG9zZSIsInNldFRpbWVvdXQiLCJwbGF5ZXJUdXJuIiwiTnVtYmVyIiwicGxheUJ0biJdLCJzb3VyY2VSb290IjoiIn0=