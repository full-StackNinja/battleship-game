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
/* eslint-disable import/extensions */



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
    // console.log('table cells', tableCells)
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
  // Remove ship children frmom shipPlace page and gamePlay page
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
  function createShip(shortName, length, orient) {
    var ship = document.createElement("div");
    ship.style.position = "absolute";
    ship.style.top = "0";
    ship.style.left = "0";
    if (orient === "x") {
      ship.style.width = "".concat(2 * length, "vw");
      ship.style.height = "2vw";
      ship.setAttribute("data-width", "".concat(2 * length, "vw"));
      ship.setAttribute("data-height", "2vw");
      ship.setAttribute("data-length", "".concat(length));
      ship.setAttribute("data-orient", "x");
    }
    if (orient === "y") {
      ship.style.width = "2vw";
      ship.style.height = "".concat(2 * length, "vw");
      ship.setAttribute("data-width", "2vw");
      ship.setAttribute("data-height", "".concat(2 * length, "vw"));
      ship.setAttribute("data-length", "".concat(length));
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

  // TODO... Update cell value
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

  // Place ships on the player/ai board on game-play-page
  function autoPlaceShips(playerName, shipsCoord) {
    // console.log(player.gameBoard.board);
    var shipNames = ["c1", "d1", "d2", "p1", "p2", "p3", "s1", "s2", "s3", "s4"];
    shipNames.forEach(function (shipName) {
      var shipData = shipsCoord[shipName];
      // console.log(shipData);
      var end = shipData.end,
        orient = shipData.orient,
        length = shipData.length;
      var ship = createShip(shipName, length, orient);

      // Also update table cell's data-value with shipName
      updateCellVal(playerName, shipName, end, length, orient);
      // console.log(ship)
      // Call game play page
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

          // console.log(cellEnd)
          var cellRect = cellEnd.getBoundingClientRect();
          var gamePageRect = gamePlayPage.getBoundingClientRect();
          var shipRect = ship.getBoundingClientRect();
          var cellPosX = cellRect.right - gamePageRect.left - cellRect.width * length - 1.5;
          var cellPosY = cellRect.top - gamePageRect.top - 1.5;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          // const cellPosX = cellRect.right - gamePageRect.left - shipRect.width;
          // const cellPosY = cellRect.bottom - gamePageRect.top;
          ship.style.left = "".concat(cellPosX, "rem");
          ship.style.top = "".concat(cellPosY, "rem");
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          var _cellEnd = oppTable.rows[rowEnd].cells[colEnd];
          // console.log(cellEnd)
          var _cellRect = _cellEnd.getBoundingClientRect();
          var _gamePageRect = gamePlayPage.getBoundingClientRect();
          var _shipRect = ship.getBoundingClientRect();
          var _cellPosX = _cellRect.right - _gamePageRect.left - _cellRect.width * length - 1.5;
          var _cellPosY = _cellRect.top - _gamePageRect.top - 1.5;
          // const cellPosX = cellRect.right - gamePageRect.left - shipRect.width;
          // const cellPosY = cellRect.bottom - gamePageRect.top;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          ship.style.left = "".concat(_cellPosX, "rem");
          ship.style.top = "".concat(_cellPosY, "rem");
          ship.style.border = "2rem solid green";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
      }
      if (orient === "y") {
        var _rowEnd = end[0];
        var _colEnd = end[1];
        if (playerName === "player") {
          // Get head cell on which ship is placed
          var _cellEnd2 = yourTable.rows[_rowEnd].cells[_colEnd];
          // console.log(cellEnd);
          var _cellRect2 = _cellEnd2.getBoundingClientRect();
          var _gamePageRect2 = gamePlayPage.getBoundingClientRect();
          var _cellPosX2 = _cellRect2.left - _gamePageRect2.left - 1.5;
          var _cellPosY2 = _cellRect2.bottom - _gamePageRect2.top - _cellRect2.width * length - 1.5;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          ship.style.left = "".concat(_cellPosX2, "rem");
          ship.style.top = "".concat(_cellPosY2, "rem");
          ship.style.border = "2rem solid blue";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
        if (playerName === "ai") {
          // Get head cell on which ship is placed
          var _cellEnd3 = oppTable.rows[_rowEnd].cells[_colEnd];
          // console.log(cellEnd);
          var _cellRect3 = _cellEnd3.getBoundingClientRect();
          var _gamePageRect3 = gamePlayPage.getBoundingClientRect();
          var _cellPosX3 = _cellRect3.left - _gamePageRect3.left - 1.5;
          var _cellPosY3 = _cellRect3.bottom - _gamePageRect3.top - _cellRect3.width * length - 1.5;
          // console.log(cellRect.left, cellRect.top);
          // console.log(cellPosX, cellPosY);
          ship.style.left = "".concat(_cellPosX3, "rem");
          ship.style.top = "".concat(_cellPosY3, "rem");
          ship.style.border = "2rem solid green";
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
        }
      }
    });
  }

  // eslint-disable-next-line consistent-return
  function placeShips(shipNames, callBack) {
    var shipPlacePage = document.querySelector(".ship-placement-page");
    var gamePlayPage = document.querySelector(".gameplay-page");
    if (shipNames.length === 0) {
      // All ships placed. Now do the next tasks
      shipPlacePage.classList.remove("show");
      gamePlayPage.classList.add("show");
      // Place ships on the board at game play page on player/ai defined positions
      console.log("ships coordnates for player", _player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.shipsCoord);
      callBack();
      autoPlaceShips("player", _player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.shipsCoord);
      autoPlaceShips("ai", _ai__WEBPACK_IMPORTED_MODULE_1__["default"].gameBoard.shipsCoord);
      return true;
    }
    var shipArr = shipNames.shift();
    var shortName = shipArr[0];
    var shipName = shipArr[1];
    var length = shipArr[2];
    var shipMessage = document.querySelector(".ship-name");
    shipMessage.innerHTML = "Place ".concat(shipName).concat(" on the board");
    var isPlaced = false;
    var ship = createShip(shortName, length, "x");
    shipPlacePage.appendChild(ship);
    function dragShip(e) {
      if (!isPlaced) {
        var shipPageRect = shipPlacePage.getBoundingClientRect();
        if (e.target.matches(".table-cell")) {
          // console.log("e.target in dragShip(e)", e.target);
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
        // console.log("e.target in dropShip()", e.target);
        var row = parseInt(currentCell.getAttribute("data-row"), 10);
        var col = parseInt(currentCell.getAttribute("data-col"), 10);
        // const shipLen = parseInt(ship.getAttribute("data-length"), 10);
        if (ship.getAttribute("data-orient") === "x") {
          // console.log("row,col, length,", row, col, length);
          if (_player__WEBPACK_IMPORTED_MODULE_0__["default"].gameBoard.isValidPos(row, col, length, "x")) {
            // console.log("posiiton is valid");
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
            var _shipRect2 = ship.getBoundingClientRect();
            var _shipPageRect = shipPlacePage.getBoundingClientRect();
            var _shipX = _shipRect2.left - _shipPageRect.left;
            var _shipY = _shipRect2.top - _shipPageRect.top;
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
  // TODO... Update cell hit status in DOM
  function updateCellHit(cell, hitStatus) {
    var targetCell = cell;
    if (hitStatus === "empty") {
      targetCell.setAttribute("data-value", "miss");
      targetCell.style.backgroundColor = "pink";
    } else if (hitStatus !== "hit" && hitStatus !== "miss") {
      targetCell.setAttribute("data-value", "hit");
      targetCell.style.backgroundColor = "red";
    }
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
    updateCellHit: updateCellHit
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
      console.log('Player board', this.board);
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
          // console.log("i, col, shipName", i, col, shipName);
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
      // console.log("ships array", shipsArr);
      var orientArr = ["x", "y"];
      shipsArr.forEach(function (ship) {
        // chose orientation randomly
        var index = Math.floor(Math.random() * 2);
        var orient = orientArr[index];
        // console.log("ship", ship);
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
      // Add offset = length - 1 in col to check prev n-1 cells as empty
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
      // Add offset = length - 1 in row to check prev n-1 cells as empty
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
  // console.log("row, col, shipName, length, ", row, col, shipName, length);
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
/* eslint-disable import/extensions */


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
  /* opacity: 0; */
  display: none;
  pointer-events: none;
}
.initial-page.hide > :nth-child(n) {
  pointer-events: none;
}
.initial-page.show {
  /* opacity: 1; */
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
  display: flex;
  color: #0f766e;
  padding: 0.1vw;
  align-items: center;
  justify-content: center;
  gap: 1vw;
}

.rotate-btn:hover{
  color: blue;
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
  border: 1px solid #5978f5;
}

.your-table .table-cell:hover {
  cursor: pointer;
}

.opponent-table .table-cell {
  border: 1px solid #ccc;
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
  /* pointer-events: all; */
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
`, "",{"version":3,"sources":["webpack://./src/styleSheets/styles.css"],"names":[],"mappings":"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","sourcesContent":["body {\n  font-size: calc(16rem + (20 - 16) * ((100vw - 320rem) / (1920 - 320)));\n  background-color: #fff;\n  width: 100vw;\n  height: 100vh;\n  overflow: hidden;\n}\n\n.game-title {\n  width: 100%;\n  margin: 2vw auto;\n  text-align: center;\n  font-family: \"Tourney\";\n  font: bold;\n  font-size: calc(28rem + (80 - 28) * ((100vw - 320rem) / (1920 - 320)));\n  color: #500724;\n  margin-bottom: 5vw;\n  font-weight: 700;\n}\n\n.initial-page {\n  position: absolute;\n  width: 60vw;\n  height: 80vh;\n  z-index: 3;\n  background-color: #422006;\n  box-shadow: 3rem 3rem 3rem rgba(0, 0, 0, 0.3);\n  top: 10vh;\n  left: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.game-title.init-page {\n  color: #5978f5;\n}\n\nbutton.game-start.init-page,\n.play-again {\n  width: fit-content;\n  font-weight: 700;\n  padding: 5rem;\n  background-color: #5978f5;\n  cursor: pointer;\n  border-radius: 5rem;\n}\n\n.initial-page.hide {\n  /* opacity: 0; */\n  display: none;\n  pointer-events: none;\n}\n.initial-page.hide > :nth-child(n) {\n  pointer-events: none;\n}\n.initial-page.show {\n  /* opacity: 1; */\n  display: block;\n  pointer-events: all;\n}\n\n.ship-placement-page {\n  position: absolute;\n  width: 60vw;\n  height: 80vh;\n  padding: 2vw;\n  z-index: 2;\n  background-color: #abb8b7;\n  box-shadow: 3rem 3rem 3rem rgba(0, 0, 0, 0.3);\n  top: 10vh;\n  left: 20vw;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n}\n\n.ship-placement-page.hide {\n  opacity: 0;\n  display: none;\n  pointer-events: none;\n}\n\n.ship-placement-page.show {\n  opacity: 1;\n  display: flex;\n  pointer-events: all;\n}\n\n.ship-name {\n  padding: 5rem;\n  font-weight: bold;\n}\n\n.rotate-btn {\n  display: flex;\n  color: #0f766e;\n  padding: 0.1vw;\n  align-items: center;\n  justify-content: center;\n  gap: 1vw;\n}\n\n.rotate-btn:hover{\n  color: blue;\n}\n\n.rotate-text {\n  border-bottom: 1rem dashed #0f766e;\n  pointer-events: none;\n}\n\n.random-icon {\n  pointer-events: none;\n  width: calc(16rem + (22 - 16) * ((100vw - 320rem) / (920 - 320)));\n}\n\n.ship-placement-page .your-table .table-cell {\n  border: 1rem solid rgb(111, 111, 214);\n}\n\n.gameplay-page {\n  position: relative;\n  z-index: 1;\n  width: 60vw;\n  height: fit-content;\n  margin: 0 auto;\n  border: 1rem solid;\n  border-radius: 5rem;\n}\n\n.gameplay-page.hide {\n  opacity: 0;\n  pointer-events: none;\n}\n\n.gameplay-page.show {\n  opacity: 1;\n  pointer-events: all;\n}\n\n.turn-message {\n  width: 12vw;\n  padding: 0.5vw;\n  margin: 1vw auto;\n  background-color: #f1f5f9;\n  border-radius: 3rem;\n  text-align: center;\n}\n\n.grids-container {\n  margin: 2vw auto;\n  width: 60vw;\n  height: 25vw;\n  padding: 2vw;\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  gap: 5vw;\n  align-items: center;\n}\n\n.your-grid,\n.opponent-grid {\n  position: relative;\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  gap: 1vw;\n}\n\n.your-table,\n.opponent-table {\n  width: 20vw;\n  height: 20vw;\n  pointer-events: none;\n}\n\n.table-cell {\n  width: 2vw;\n  height: 2vw;\n  pointer-events: all;\n}\n\n.moving {\n  border: 1rem dashed #5978f5;\n  pointer-events: none;\n}\n\n.placed {\n  border: 2rem solid blue;\n  background-color: rgba(0, 0, 0, 0.2);\n  pointer-events: all;\n}\n\n.sunk {\n  border: 3rem solid red;\n}\n\n.your-table .table-cell {\n  border: 1px solid #5978f5;\n}\n\n.your-table .table-cell:hover {\n  cursor: pointer;\n}\n\n.opponent-table .table-cell {\n  border: 1px solid #ccc;\n}\n\n.your-table-gameplay-page :nth-child(n) {\n  pointer-events: none;\n  user-select: none;\n}\n\n.opponent-table .table-cell:hover {\n  cursor: pointer;\n  background-color: #ccc;\n}\n\n.gameover-container {\n  position: absolute;\n  text-align: center;\n  z-index: 5;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.3);\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n.gameover-container.hide {\n  display: none;\n  background-color: rgba(0, 0, 0, 0);\n  width: 0;\n  height: 0;\n  transition: all linear 1s;\n  overflow: hidden;\n  pointer-events: none;\n}\n\n.gameover-container.show {\n  display: block;\n  /* pointer-events: all; */\n  background-color: rgba(0, 0, 0, 0.3);\n  pointer-events: auto;\n  width: 100vw;\n  height: 100vh;\n}\n\n.gameover {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  left: 30vw;\n  top: 30vh;\n  z-index: 4;\n  width: 40vw;\n  height: 40vh;\n  background-color: #422006;\n  color: #ccc;\n  border: 1rem solid;\n  border-radius: 5rem;\n}\n\n.modal-msg {\n  font-size: 48rem;\n}\n"],"sourceRoot":""}]);
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




// Build empty game board for player1
_player__WEBPACK_IMPORTED_MODULE_7__["default"].gameBoard.buildBoard();

// Define ai's empty gameBoard
_ai__WEBPACK_IMPORTED_MODULE_8__["default"].gameBoard.buildBoard();
// console.log(ai.board)

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

// TODO.... Declare game Over
function gameOver(playerName) {
  var gameOverCont = document.querySelector(".gameover-container");
  var modalMsg = gameOverCont.querySelector(".modal-msg");
  gameOverCont.classList.add("show");
  if (playerName === "ai") {
    // console.log("You Win");
    modalMsg.textContent = "You Win!";
  } else if (playerName === "player") {
    // console.log("Ai wins");
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
  // console.log('initial turn is', turn)
  function toggleTurn() {
    if (turn === "ai") turn = "player";else turn = "ai";
  }
  function updateShipStatus(playerName, shipName) {
    if (playerName === "ai") {
      // Update current ship hit count
      // console.log("playerName , shipName", playerName, shipName);
      _ai__WEBPACK_IMPORTED_MODULE_8__["default"][shipName].hit();
      // check if ship sunk
      _ai__WEBPACK_IMPORTED_MODULE_8__["default"][shipName].isSunk();
    } else if (playerName === "player") {
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
    // console.log("ai attack position is: ", position);
    // Got valid position which is either ship position or empty cell
    var cellStatus = _player__WEBPACK_IMPORTED_MODULE_7__["default"].gameBoard.receiveAttack(position);
    // console.log("and cellStatus is", cellStatus);
    if (cellStatus !== "empty") {
      // attack is on the ship
      var shipName = cellStatus;
      // Update ship hit status
      updateShipStatus("player", shipName);
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

  // TODO...
  function playerTurn(e) {
    // console.log("player.gameBoard.board", player.gameBoard.board);
    // Display turn message
    // domManipulation.turnMessage(turn);

    if (e.target.matches(".table-cell")) {
      var targetCell = e.target;
      var position = [];
      position[0] = Number(targetCell.getAttribute("data-row"));
      position[1] = Number(targetCell.getAttribute("data-col"));
      var cellStatus = _ai__WEBPACK_IMPORTED_MODULE_8__["default"].gameBoard.receiveAttack(position);
      console.log("cellStatus", cellStatus);
      // Update cell in the DOM
      _dom__WEBPACK_IMPORTED_MODULE_6__["default"].updateCellHit(targetCell, cellStatus);

      // Check if ship got hit
      if (cellStatus !== "miss" && cellStatus !== "hit" && cellStatus !== "empty") {
        // Ship found
        var shipName = cellStatus;
        updateShipStatus("ai", shipName);
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
      // console.log(`fire hit at ship ${shipName}, with target cell `, targetCell);
    }
    // console.log("ai board after attack", ai.gameBoard.board);
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
  var randImg = new Image();
  randImg.src = _assets_icons_random_svg__WEBPACK_IMPORTED_MODULE_5__;
  randImg.classList.add("random-icon");
  randImg.alt = "Random Icon";
  var rotateBtn = document.querySelector(".rotate-btn");
  rotateBtn.appendChild(randImg);
  // console.log("shipNames Inside", shipNames);
  // Auto fill ai board 2D array with ships
  _ai__WEBPACK_IMPORTED_MODULE_8__["default"].gameBoard.autoFillShipsBoard(shipNames.slice());
  // Let player place ships on the board
  _dom__WEBPACK_IMPORTED_MODULE_6__["default"].placeShips(shipNames.slice(), gameLoop);

  // console.log("player.gameBoard.board", player.gameBoard.board);
  // console.log("ai.gameBoard.shipsCoord", ai.gameBoard.shipsCoord);
  // Enter game loop to start the game
  // gameLoop();
}

// Initially hide and gameplay page
// domManipulation.hideShipPage();
_dom__WEBPACK_IMPORTED_MODULE_6__["default"].hideGamePage();
playBtn.addEventListener("click", manageShipsPlacement);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3R0FBd0csTUFBTSxRQUFRLFFBQVEsTUFBTSxLQUFLLHNCQUFzQix1QkFBdUIsT0FBTyxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxLQUFLLFVBQVUsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFFBQVEsUUFBUSxNQUFNLEtBQUssc0JBQXNCLHFCQUFxQix1QkFBdUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLE9BQU8sS0FBSyxRQUFRLE9BQU8sTUFBTSxLQUFLLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLE1BQU0sTUFBTSxNQUFNLFlBQVksT0FBTyxPQUFPLE1BQU0sT0FBTyxzQkFBc0IscUJBQXFCLE9BQU8sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLE9BQU8sTUFBTSxNQUFNLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFFBQVEsT0FBTyxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssUUFBUSxRQUFRLE1BQU0sU0FBUyxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxPQUFPLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxNQUFNLE1BQU0sUUFBUSxZQUFZLE9BQU8sTUFBTSxNQUFNLFFBQVEsWUFBWSxXQUFXLE1BQU0sTUFBTSxNQUFNLFFBQVEsWUFBWSxPQUFPLE1BQU0sTUFBTSxLQUFLLFlBQVksT0FBTyxTQUFTLE1BQU0sS0FBSyxzQkFBc0IscUJBQXFCLHFC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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTyw2RkFBNkYsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxNQUFNLE1BQU0sVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEs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R0FBR2xGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFDLGFBQWEsQ0FBQztFQUN2RGlGLFNBQVMsQ0FBQ2xDLFdBQVcsQ0FBQ3FILE9BQU8sQ0FBQztFQUM5QjtFQUNBO0VBQ0F0TSwyQ0FBRSxDQUFDWSxTQUFTLENBQUM4SSxrQkFBa0IsQ0FBQzVJLFNBQVMsQ0FBQzZHLEtBQUssQ0FBQyxDQUFDLENBQUM7RUFDbEQ7RUFDQTdGLDRDQUFlLENBQUNnRSxVQUFVLENBQUNoRixTQUFTLENBQUM2RyxLQUFLLENBQUMsQ0FBQyxFQUFFMkQsUUFBUSxDQUFDOztFQUV2RDtFQUNBO0VBQ0E7RUFDQTtBQUNGOztBQUVBO0FBQ0E7QUFDQXhKLDRDQUFlLENBQUNtRyxZQUFZLENBQUMsQ0FBQztBQUM5Qm9FLE9BQU8sQ0FBQ25GLGdCQUFnQixDQUFDLE9BQU8sRUFBRThELG9CQUFvQixDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2NyaXB0RmlsZXMvYWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc2NyaXB0RmlsZXMvZ2FtZUJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zY3JpcHRGaWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL21leWVyLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvbXktY3NzLXJlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvbm9ybWFsaXplLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvdHlwb2dyYXBoeS5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvbWV5ZXItcmVzZXQuY3NzP2JlYjUiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL215LWNzcy1yZXNldC5jc3M/ZDY0NiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9zcmMvc3R5bGVTaGVldHMvbm9ybWFsaXplLmNzcz80ZmVjIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL3NyYy9zdHlsZVNoZWV0cy9zdHlsZXMuY3NzPzIyZmMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3N0eWxlU2hlZXRzL3R5cG9ncmFwaHkuY3NzP2M0NDIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLWdhbWUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAtZ2FtZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC1nYW1lLy4vc3JjL3NjcmlwdEZpbGVzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0IEdhbWVCb2FyZCBmcm9tIFwiLi9nYW1lQm9hcmRcIjtcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcbmltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IChmdW5jdGlvbiBhaSgpIHtcbiAgY29uc3QgbmV3QUkgPSB7fTtcbiAgbmV3QUkuYzEgPSBuZXcgU2hpcChcImNhcnJpZXJcIiwgNCk7XG4gIG5ld0FJLmQxID0gbmV3IFNoaXAoXCJkaXN0cm95ZXIxXCIsIDMpO1xuICBuZXdBSS5kMiA9IG5ldyBTaGlwKFwiZGlzdHJveWVyMlwiLCAzKTtcbiAgbmV3QUkucDEgPSBuZXcgU2hpcChcInBhdHJvbEJvYXQxXCIsIDIpO1xuICBuZXdBSS5wMiA9IG5ldyBTaGlwKFwicGF0cm9sQm9hdDJcIiwgMik7XG4gIG5ld0FJLnAzID0gbmV3IFNoaXAoXCJwYXRyb2xCb2F0M1wiLCAyKTtcbiAgbmV3QUkuczEgPSBuZXcgU2hpcChcInNpbmdsZXRvbjFcIiwgMSk7XG4gIG5ld0FJLnMyID0gbmV3IFNoaXAoXCJzaW5nbGV0b24yXCIsIDEpO1xuICBuZXdBSS5zMyA9IG5ldyBTaGlwKFwic2luZ2xldG9uM1wiLCAxKTtcbiAgbmV3QUkuczQgPSBuZXcgU2hpcChcInNpbmdsZXRvbjRcIiwgMSk7XG4gIG5ld0FJLmdhbWVCb2FyZCA9IG5ldyBHYW1lQm9hcmQoKTtcbiAgbmV3QUkuYWxsU3VuayA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBsZXQgYWxsU3VuayA9IHRydWU7XG4gICAgc2hpcE5hbWVzLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIGlmICghbmV3QUlbc2hpcF0uc3Vuaykge1xuICAgICAgICBhbGxTdW5rID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFsbFN1bms7XG4gIH07XG5cbiAgbmV3QUkucmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbmV3QUlbc2hpcF0ucmVzZXRTaGlwKClcbiAgICB9KVxuICB9XG4gIG5ld0FJLmlzQXR0YWNrVmFsaWQgPSAocG9zaXRpb24pID0+IHtcbiAgICBjb25zdCByb3cgPSBwb3NpdGlvblswXTtcbiAgICBjb25zdCBjb2wgPSBwb3NpdGlvblsxXTtcbiAgICBjb25zdCBjZWxsU3RhdHVzID0gcGxheWVyLmdhbWVCb2FyZC5ib2FyZFtyb3ddW2NvbF07XG4gICAgLy8gY29uc29sZS5sb2coJ2FpIGF0dGFjayBzdGF0dXMgaW5zaWRlIGlzJywgY2VsbFN0YXR1cywgJ2F0IHBvc2l0aW9uJywgcG9zaXRpb24pXG4gICAgaWYgKGNlbGxTdGF0dXMgIT09IFwiaGl0XCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJtaXNzXCIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG4gIG5ld0FJLmdldEhpdENvb3JkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBvc2l0aW9uID0gW107XG4gICAgcG9zaXRpb25bMF0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgcG9zaXRpb25bMV0gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG5cbiAgICByZXR1cm4gcG9zaXRpb247XG4gIH07XG5cbiAgcmV0dXJuIG5ld0FJO1xufSkoKTtcbiIsImltcG9ydCBwbGF5ZXIgZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgYWkgZnJvbSBcIi4vYWlcIjtcblxuZXhwb3J0IGRlZmF1bHQgKGZ1bmN0aW9uIGRvbU1hbmlwdWxhdGlvbigpIHtcbiAgZnVuY3Rpb24gcmVzZXRUYWJsZXMoKSB7XG4gICAgY29uc3QgeW91clRhYmxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi55b3VyLXRhYmxlLWdhbWVwbGF5LXBhZ2VcIik7XG4gICAgY29uc3Qgb3BwVGFibGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LXRhYmxlXCIpO1xuICAgIGNvbnN0IHNldFNoaXBUYWJsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2V0LXNoaXBzXCIpO1xuICAgIGNvbnN0IHlvdXJDZWxscyA9IHlvdXJUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgY29uc3Qgb3BwQ2VsbHMgPSBvcHBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgY29uc3Qgc2V0U2hpcENlbGxzID0gc2V0U2hpcFRhYmxlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFibGUtY2VsbFwiKTtcbiAgICAvLyBjb25zb2xlLmxvZygndGFibGUgY2VsbHMnLCB0YWJsZUNlbGxzKVxuICAgIHlvdXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllZENlbGwgPSBjZWxsO1xuICAgICAgLy8gc2V0IFZhbHVlIHRvIGVtcHR5XG4gICAgICBtb2RpZmllZENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcImVtcHR5XCIpO1xuICAgICAgLy8gUmVzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgbW9kaWZpZWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZmZlwiO1xuICAgIH0pO1xuXG4gICAgb3BwQ2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgbW9kaWZpZWRDZWxsID0gY2VsbDtcbiAgICAgIC8vIHNldCBWYWx1ZSB0byBlbXB0eVxuICAgICAgbW9kaWZpZWRDZWxsLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgXCJlbXB0eVwiKTtcbiAgICAgIC8vIFJlc2V0IGJhY2tncm91bmQgY29sb3JcbiAgICAgIG1vZGlmaWVkQ2VsbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZcIjtcbiAgICB9KTtcblxuICAgIHNldFNoaXBDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjb25zdCBtb2RpZmllZENlbGwgPSBjZWxsO1xuICAgICAgLy8gc2V0IFZhbHVlIHRvIGVtcHR5XG4gICAgICBtb2RpZmllZENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcImVtcHR5XCIpO1xuICAgICAgLy8gUmVzZXQgYmFja2dyb3VuZCBjb2xvclxuICAgICAgbW9kaWZpZWRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2FiYjhiN1wiO1xuICAgIH0pO1xuICB9XG4gIC8vIFJlbW92ZSBzaGlwIGNoaWxkcmVuIGZybW9tIHNoaXBQbGFjZSBwYWdlIGFuZCBnYW1lUGxheSBwYWdlXG4gIGZ1bmN0aW9uIHJlbW92ZVNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIGNvbnN0IHNoaXBzT25TaGlwUGFnZSA9IHNoaXBQYWdlLnF1ZXJ5U2VsZWN0b3JBbGwoXCIuc2hpcFwiKTtcbiAgICBjb25zdCBzaGlwc09uR2FtZVBhZ2UgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnNoaXBcIik7XG4gICAgc2hpcHNPblNoaXBQYWdlLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIHNoaXBQYWdlLnJlbW92ZUNoaWxkKHNoaXApO1xuICAgIH0pO1xuICAgIHNoaXBzT25HYW1lUGFnZS5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBnYW1lUGFnZS5yZW1vdmVDaGlsZChzaGlwKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZVNoaXAoc2hvcnROYW1lLCBsZW5ndGgsIG9yaWVudCkge1xuICAgIGNvbnN0IHNoaXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHNoaXAuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XG4gICAgc2hpcC5zdHlsZS50b3AgPSBcIjBcIjtcbiAgICBzaGlwLnN0eWxlLmxlZnQgPSBcIjBcIjtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IGAkezIgKiBsZW5ndGh9dndgO1xuICAgICAgc2hpcC5zdHlsZS5oZWlnaHQgPSBcIjJ2d1wiO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIsIGAkezIgKiBsZW5ndGh9dndgKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgXCIydndcIik7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtbGVuZ3RoXCIsIGAke2xlbmd0aH1gKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgXCJ4XCIpO1xuICAgIH1cbiAgICBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgc2hpcC5zdHlsZS53aWR0aCA9IFwiMnZ3XCI7XG4gICAgICBzaGlwLnN0eWxlLmhlaWdodCA9IGAkezIgKiBsZW5ndGh9dndgO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIsIFwiMnZ3XCIpO1xuICAgICAgc2hpcC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWhlaWdodFwiLCBgJHsyICogbGVuZ3RofXZ3YCk7XG4gICAgICBzaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtbGVuZ3RoXCIsIGAke2xlbmd0aH1gKTtcbiAgICAgIHNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgXCJ5XCIpO1xuICAgIH1cbiAgICBzaGlwLmNsYXNzTGlzdC5hZGQoXCJtb3ZpbmdcIik7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKHNob3J0TmFtZSk7XG4gICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwic2hpcFwiKTtcbiAgICByZXR1cm4gc2hpcDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoYW5nZU9yaWVudGF0aW9uKCkge1xuICAgIGNvbnN0IHNoaXBQbGFjZVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtcGxhY2VtZW50LXBhZ2VcIik7XG4gICAgY29uc3QgY3VycmVudFNoaXAgPSBzaGlwUGxhY2VQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIubW92aW5nXCIpO1xuICAgIGlmIChjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW9yaWVudFwiKSA9PT0gXCJ4XCIpIHtcbiAgICAgIGN1cnJlbnRTaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIsIFwieVwiKTtcbiAgICAgIGNvbnN0IHdpZHRoID0gY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiKTtcbiAgICAgIGNvbnN0IGhlaWdodCA9IGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIpO1xuICAgICAgY3VycmVudFNoaXAuc3R5bGUud2lkdGggPSBoZWlnaHQ7XG4gICAgICBjdXJyZW50U2hpcC5zdHlsZS5oZWlnaHQgPSB3aWR0aDtcbiAgICAgIGN1cnJlbnRTaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtaGVpZ2h0XCIsIHdpZHRoKTtcbiAgICAgIGN1cnJlbnRTaGlwLnNldEF0dHJpYnV0ZShcImRhdGEtd2lkdGhcIiwgaGVpZ2h0KTtcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInlcIikge1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1vcmllbnRcIiwgXCJ4XCIpO1xuICAgICAgY29uc3Qgd2lkdGggPSBjdXJyZW50U2hpcC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdpZHRoXCIpO1xuICAgICAgY29uc3QgaGVpZ2h0ID0gY3VycmVudFNoaXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIik7XG4gICAgICBjdXJyZW50U2hpcC5zdHlsZS53aWR0aCA9IGhlaWdodDtcbiAgICAgIGN1cnJlbnRTaGlwLnN0eWxlLmhlaWdodCA9IHdpZHRoO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS1oZWlnaHRcIiwgd2lkdGgpO1xuICAgICAgY3VycmVudFNoaXAuc2V0QXR0cmlidXRlKFwiZGF0YS13aWR0aFwiLCBoZWlnaHQpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFRPRE8uLi4gVXBkYXRlIGNlbGwgdmFsdWVcbiAgZnVuY3Rpb24gdXBkYXRlQ2VsbFZhbChwbGF5ZXJOYW1lLCBzaGlwTmFtZSwgc2hpcEVuZCwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBjb25zdCBnYW1lUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZXBsYXktcGFnZVwiKTtcbiAgICBjb25zdCByb3cgPSBzaGlwRW5kWzBdO1xuICAgIGNvbnN0IGNvbHVtbiA9IHNoaXBFbmRbMV07XG4gICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIGNvbnN0IHlvdXJUYWJsZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZVwiKTtcbiAgICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICB5b3VyVGFibGUucm93c1tyb3ddLmNlbGxzW2NvbHVtbiAtIGldLnNldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiwgc2hpcE5hbWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKG9yaWVudCA9PT0gXCJ5XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIHlvdXJUYWJsZS5yb3dzW3JvdyAtIGldLmNlbGxzW2NvbHVtbl0uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHBsYXllck5hbWUgPT09IFwiYWlcIikge1xuICAgICAgY29uc3Qgb3BwVGFibGUgPSBnYW1lUGFnZS5xdWVyeVNlbGVjdG9yKFwiLm9wcG9uZW50LXRhYmxlXCIpO1xuICAgICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgIG9wcFRhYmxlLnJvd3Nbcm93XS5jZWxsc1tjb2x1bW4gLSBpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIHNoaXBOYW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICBvcHBUYWJsZS5yb3dzW3JvdyAtIGldLmNlbGxzW2NvbHVtbl0uc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBzaGlwTmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBQbGFjZSBzaGlwcyBvbiB0aGUgcGxheWVyL2FpIGJvYXJkIG9uIGdhbWUtcGxheS1wYWdlXG4gIGZ1bmN0aW9uIGF1dG9QbGFjZVNoaXBzKHBsYXllck5hbWUsIHNoaXBzQ29vcmQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkKTtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcE5hbWUpID0+IHtcbiAgICAgIGNvbnN0IHNoaXBEYXRhID0gc2hpcHNDb29yZFtzaGlwTmFtZV07XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwRGF0YSk7XG4gICAgICBjb25zdCB7IGVuZCwgb3JpZW50LCBsZW5ndGggfSA9IHNoaXBEYXRhO1xuICAgICAgY29uc3Qgc2hpcCA9IGNyZWF0ZVNoaXAoc2hpcE5hbWUsIGxlbmd0aCwgb3JpZW50KTtcblxuICAgICAgLy8gQWxzbyB1cGRhdGUgdGFibGUgY2VsbCdzIGRhdGEtdmFsdWUgd2l0aCBzaGlwTmFtZVxuICAgICAgdXBkYXRlQ2VsbFZhbChwbGF5ZXJOYW1lLCBzaGlwTmFtZSwgZW5kLCBsZW5ndGgsIG9yaWVudCk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhzaGlwKVxuICAgICAgLy8gQ2FsbCBnYW1lIHBsYXkgcGFnZVxuICAgICAgY29uc3QgZ2FtZVBsYXlQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgICAgY29uc3QgeW91clRhYmxlID0gZ2FtZVBsYXlQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZVwiKTtcbiAgICAgIGNvbnN0IG9wcFRhYmxlID0gZ2FtZVBsYXlQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIub3Bwb25lbnQtdGFibGVcIik7XG4gICAgICBnYW1lUGxheVBhZ2UuYXBwZW5kQ2hpbGQoc2hpcCk7XG4gICAgICAvLyBQbGFjZSBzaGlwcyBvbiB0aGUgYm9hcmQgY29vcmRpbmF0ZXMgY29ycmVjdGx5XG4gICAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgICBjb25zdCByb3dFbmQgPSBlbmRbMF07XG4gICAgICAgIGNvbnN0IGNvbEVuZCA9IGVuZFsxXTtcbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAvLyBHZXQgaGVhZCBjZWxsIG9uIHdoaWNoIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgY29uc3QgY2VsbEVuZCA9IHlvdXJUYWJsZS5yb3dzW3Jvd0VuZF0uY2VsbHNbY29sRW5kXTtcblxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGxFbmQpXG4gICAgICAgICAgY29uc3QgY2VsbFJlY3QgPSBjZWxsRW5kLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGdhbWVQYWdlUmVjdCA9IGdhbWVQbGF5UGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBzaGlwUmVjdCA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1ggPSBjZWxsUmVjdC5yaWdodCAtIGdhbWVQYWdlUmVjdC5sZWZ0IC0gY2VsbFJlY3Qud2lkdGggKiBsZW5ndGggLSAxLjU7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1kgPSBjZWxsUmVjdC50b3AgLSBnYW1lUGFnZVJlY3QudG9wIC0gMS41O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGxSZWN0LmxlZnQsIGNlbGxSZWN0LnRvcCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbFBvc1gsIGNlbGxQb3NZKTtcbiAgICAgICAgICAvLyBjb25zdCBjZWxsUG9zWCA9IGNlbGxSZWN0LnJpZ2h0IC0gZ2FtZVBhZ2VSZWN0LmxlZnQgLSBzaGlwUmVjdC53aWR0aDtcbiAgICAgICAgICAvLyBjb25zdCBjZWxsUG9zWSA9IGNlbGxSZWN0LmJvdHRvbSAtIGdhbWVQYWdlUmVjdC50b3A7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYCR7Y2VsbFBvc1h9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGAke2NlbGxQb3NZfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMilcIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGxheWVyTmFtZSA9PT0gXCJhaVwiKSB7XG4gICAgICAgICAgLy8gR2V0IGhlYWQgY2VsbCBvbiB3aGljaCBzaGlwIGlzIHBsYWNlZFxuICAgICAgICAgIGNvbnN0IGNlbGxFbmQgPSBvcHBUYWJsZS5yb3dzW3Jvd0VuZF0uY2VsbHNbY29sRW5kXTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjZWxsRW5kKVxuICAgICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbEVuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBnYW1lUGFnZVJlY3QgPSBnYW1lUGxheVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3Qgc2hpcFJlY3QgPSBzaGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NYID0gY2VsbFJlY3QucmlnaHQgLSBnYW1lUGFnZVJlY3QubGVmdCAtIGNlbGxSZWN0LndpZHRoICogbGVuZ3RoIC0gMS41O1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NZID0gY2VsbFJlY3QudG9wIC0gZ2FtZVBhZ2VSZWN0LnRvcCAtIDEuNTtcbiAgICAgICAgICAvLyBjb25zdCBjZWxsUG9zWCA9IGNlbGxSZWN0LnJpZ2h0IC0gZ2FtZVBhZ2VSZWN0LmxlZnQgLSBzaGlwUmVjdC53aWR0aDtcbiAgICAgICAgICAvLyBjb25zdCBjZWxsUG9zWSA9IGNlbGxSZWN0LmJvdHRvbSAtIGdhbWVQYWdlUmVjdC50b3A7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbFJlY3QubGVmdCwgY2VsbFJlY3QudG9wKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjZWxsUG9zWCwgY2VsbFBvc1kpO1xuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2NlbGxQb3NYfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtjZWxsUG9zWX1yZW1gO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgICBjb25zdCByb3dFbmQgPSBlbmRbMF07XG4gICAgICAgIGNvbnN0IGNvbEVuZCA9IGVuZFsxXTtcbiAgICAgICAgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgICAgICAvLyBHZXQgaGVhZCBjZWxsIG9uIHdoaWNoIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgY29uc3QgY2VsbEVuZCA9IHlvdXJUYWJsZS5yb3dzW3Jvd0VuZF0uY2VsbHNbY29sRW5kXTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjZWxsRW5kKTtcbiAgICAgICAgICBjb25zdCBjZWxsUmVjdCA9IGNlbGxFbmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgZ2FtZVBhZ2VSZWN0ID0gZ2FtZVBsYXlQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NYID0gY2VsbFJlY3QubGVmdCAtIGdhbWVQYWdlUmVjdC5sZWZ0IC0gMS41O1xuICAgICAgICAgIGNvbnN0IGNlbGxQb3NZID0gY2VsbFJlY3QuYm90dG9tIC0gZ2FtZVBhZ2VSZWN0LnRvcCAtIGNlbGxSZWN0LndpZHRoICogbGVuZ3RoIC0gMS41O1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGxSZWN0LmxlZnQsIGNlbGxSZWN0LnRvcCk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbFBvc1gsIGNlbGxQb3NZKTtcbiAgICAgICAgICBzaGlwLnN0eWxlLmxlZnQgPSBgJHtjZWxsUG9zWH1yZW1gO1xuICAgICAgICAgIHNoaXAuc3R5bGUudG9wID0gYCR7Y2VsbFBvc1l9cmVtYDtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlciA9IFwiMnJlbSBzb2xpZCBibHVlXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICAgICAgICAvLyBHZXQgaGVhZCBjZWxsIG9uIHdoaWNoIHNoaXAgaXMgcGxhY2VkXG4gICAgICAgICAgY29uc3QgY2VsbEVuZCA9IG9wcFRhYmxlLnJvd3Nbcm93RW5kXS5jZWxsc1tjb2xFbmRdO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGNlbGxFbmQpO1xuICAgICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY2VsbEVuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICBjb25zdCBnYW1lUGFnZVJlY3QgPSBnYW1lUGxheVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1ggPSBjZWxsUmVjdC5sZWZ0IC0gZ2FtZVBhZ2VSZWN0LmxlZnQgLSAxLjU7XG4gICAgICAgICAgY29uc3QgY2VsbFBvc1kgPSBjZWxsUmVjdC5ib3R0b20gLSBnYW1lUGFnZVJlY3QudG9wIC0gY2VsbFJlY3Qud2lkdGggKiBsZW5ndGggLSAxLjU7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coY2VsbFJlY3QubGVmdCwgY2VsbFJlY3QudG9wKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhjZWxsUG9zWCwgY2VsbFBvc1kpO1xuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2NlbGxQb3NYfXJlbWA7XG4gICAgICAgICAgc2hpcC5zdHlsZS50b3AgPSBgJHtjZWxsUG9zWX1yZW1gO1xuICAgICAgICAgIHNoaXAuc3R5bGUuYm9yZGVyID0gXCIycmVtIHNvbGlkIGdyZWVuXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcInJnYmEoMCwgMCwgMCwgMC4yKVwiO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY29uc2lzdGVudC1yZXR1cm5cbiAgZnVuY3Rpb24gcGxhY2VTaGlwcyhzaGlwTmFtZXMsIGNhbGxCYWNrKSB7XG4gICAgY29uc3Qgc2hpcFBsYWNlUGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2hpcC1wbGFjZW1lbnQtcGFnZVwiKTtcbiAgICBjb25zdCBnYW1lUGxheVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWVwbGF5LXBhZ2VcIik7XG5cbiAgICBpZiAoc2hpcE5hbWVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgXG4gICAgICAvLyBBbGwgc2hpcHMgcGxhY2VkLiBOb3cgZG8gdGhlIG5leHQgdGFza3NcbiAgICAgIHNoaXBQbGFjZVBhZ2UuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gICAgICBnYW1lUGxheVBhZ2UuY2xhc3NMaXN0LmFkZChcInNob3dcIik7XG4gICAgICAvLyBQbGFjZSBzaGlwcyBvbiB0aGUgYm9hcmQgYXQgZ2FtZSBwbGF5IHBhZ2Ugb24gcGxheWVyL2FpIGRlZmluZWQgcG9zaXRpb25zXG4gICAgICBjb25zb2xlLmxvZyhcInNoaXBzIGNvb3JkbmF0ZXMgZm9yIHBsYXllclwiLCBwbGF5ZXIuZ2FtZUJvYXJkLnNoaXBzQ29vcmQpO1xuICAgICAgY2FsbEJhY2soKTtcbiAgICAgIGF1dG9QbGFjZVNoaXBzKFwicGxheWVyXCIsIHBsYXllci5nYW1lQm9hcmQuc2hpcHNDb29yZCk7XG4gICAgICBhdXRvUGxhY2VTaGlwcyhcImFpXCIsIGFpLmdhbWVCb2FyZC5zaGlwc0Nvb3JkKTtcbiAgICAgIFxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGNvbnN0IHNoaXBBcnIgPSBzaGlwTmFtZXMuc2hpZnQoKTtcbiAgICBjb25zdCBzaG9ydE5hbWUgPSBzaGlwQXJyWzBdO1xuICAgIGNvbnN0IHNoaXBOYW1lID0gc2hpcEFyclsxXTtcbiAgICBjb25zdCBsZW5ndGggPSBzaGlwQXJyWzJdO1xuXG4gICAgY29uc3Qgc2hpcE1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNoaXAtbmFtZVwiKTtcbiAgICBzaGlwTWVzc2FnZS5pbm5lckhUTUwgPSBcIlBsYWNlIFwiLmNvbmNhdChzaGlwTmFtZSkuY29uY2F0KFwiIG9uIHRoZSBib2FyZFwiKTtcbiAgICBsZXQgaXNQbGFjZWQgPSBmYWxzZTtcblxuICAgIGNvbnN0IHNoaXAgPSBjcmVhdGVTaGlwKHNob3J0TmFtZSwgbGVuZ3RoLCBcInhcIik7XG5cbiAgICBzaGlwUGxhY2VQYWdlLmFwcGVuZENoaWxkKHNoaXApO1xuXG4gICAgZnVuY3Rpb24gZHJhZ1NoaXAoZSkge1xuICAgICAgaWYgKCFpc1BsYWNlZCkge1xuICAgICAgICBjb25zdCBzaGlwUGFnZVJlY3QgPSBzaGlwUGxhY2VQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLnRhYmxlLWNlbGxcIikpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImUudGFyZ2V0IGluIGRyYWdTaGlwKGUpXCIsIGUudGFyZ2V0KTtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicmdiYSgwLCAwLCAwLCAwLjIpXCI7XG4gICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjFyZW0gZGFzaGVkICM1OTc4ZjVcIjtcbiAgICAgICAgICBjb25zdCBjdXJyZW50Q2VsbCA9IGUudGFyZ2V0O1xuICAgICAgICAgIGNvbnN0IGNlbGxSZWN0ID0gY3VycmVudENlbGwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgc2hpcC5zdHlsZS5sZWZ0ID0gYGNhbGMoJHtjZWxsUmVjdC5yaWdodH1yZW0gIC0gJHtzaGlwUGFnZVJlY3QubGVmdH1yZW0gLSAke3NoaXAuY2xpZW50V2lkdGh9cmVtIC0gMS41cmVtIClgO1xuICAgICAgICAgIHNoaXAuc3R5bGUudG9wID0gYGNhbGMoJHtjZWxsUmVjdC5ib3R0b219cmVtIC0gJHtzaGlwUGFnZVJlY3QudG9wfXJlbSAtICR7c2hpcC5jbGllbnRIZWlnaHR9cmVtIC0gMXJlbSlgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNoaXAuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZ2JhKDAsIDAsIDAsIDAuMClcIjtcbiAgICAgICAgICBzaGlwLnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke2UuY2xpZW50WCAtIHNoaXBQYWdlUmVjdC5sZWZ0IC0gc2hpcC5jbGllbnRXaWR0aH1yZW1gO1xuICAgICAgICAgIHNoaXAuc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZIC0gc2hpcFBhZ2VSZWN0LnRvcCAtIHNoaXAuY2xpZW50SGVpZ2h0fXJlbWA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLy8gTW92ZSBzaGlwIGFsb25nIHdpdGggdGhlIG1vdXNlXG4gICAgc2hpcFBsYWNlUGFnZS5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIGRyYWdTaGlwKTtcblxuICAgIC8vIENoYW5nZSBvcmllbnRhdGlvbiBvZiBzaGlwXG4gICAgY29uc3Qgcm90YXRlQnRuID0gc2hpcFBsYWNlUGFnZS5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZS1idG5cIik7XG4gICAgcm90YXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjaGFuZ2VPcmllbnRhdGlvbik7XG5cbiAgICBmdW5jdGlvbiBkcm9wU2hpcChlKSB7XG4gICAgICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIi50YWJsZS1jZWxsXCIpKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRDZWxsID0gZS50YXJnZXQ7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZS50YXJnZXQgaW4gZHJvcFNoaXAoKVwiLCBlLnRhcmdldCk7XG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGN1cnJlbnRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtcm93XCIpLCAxMCk7XG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGN1cnJlbnRDZWxsLmdldEF0dHJpYnV0ZShcImRhdGEtY29sXCIpLCAxMCk7XG4gICAgICAgIC8vIGNvbnN0IHNoaXBMZW4gPSBwYXJzZUludChzaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtbGVuZ3RoXCIpLCAxMCk7XG4gICAgICAgIGlmIChzaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInhcIikge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicm93LGNvbCwgbGVuZ3RoLFwiLCByb3csIGNvbCwgbGVuZ3RoKTtcbiAgICAgICAgICBpZiAocGxheWVyLmdhbWVCb2FyZC5pc1ZhbGlkUG9zKHJvdywgY29sLCBsZW5ndGgsIFwieFwiKSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NpaXRvbiBpcyB2YWxpZFwiKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBSZWN0ID0gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBQYWdlUmVjdCA9IHNoaXBQbGFjZVBhZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwWCA9IHNoaXBSZWN0LmxlZnQgLSBzaGlwUGFnZVJlY3QubGVmdDtcbiAgICAgICAgICAgIGNvbnN0IHNoaXBZID0gc2hpcFJlY3QudG9wIC0gc2hpcFBhZ2VSZWN0LnRvcDtcbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NoaXBYfXJlbWA7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7c2hpcFl9cmVtIC0gMXJlbSlgO1xuICAgICAgICAgICAgaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwibW92aW5nXCIpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uY2Ugc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICAgIHNoaXBQbGFjZVBhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wU2hpcCk7XG4gICAgICAgICAgICAvLyBTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkuIE5vdyB1cGRhdGUgdGhlIDJEIGJvYXJkIGFycmF5XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ4XCIpO1xuICAgICAgICAgICAgcGxhY2VTaGlwcyhzaGlwTmFtZXMuc2xpY2UoKSwgY2FsbEJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChzaGlwLmdldEF0dHJpYnV0ZShcImRhdGEtb3JpZW50XCIpID09PSBcInlcIikge1xuICAgICAgICAgIGlmIChwbGF5ZXIuZ2FtZUJvYXJkLmlzVmFsaWRQb3Mocm93LCBjb2wsIGxlbmd0aCwgXCJ5XCIpKSB7XG4gICAgICAgICAgICBjb25zdCBzaGlwUmVjdCA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBzaGlwUGFnZVJlY3QgPSBzaGlwUGxhY2VQYWdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3Qgc2hpcFggPSBzaGlwUmVjdC5sZWZ0IC0gc2hpcFBhZ2VSZWN0LmxlZnQ7XG4gICAgICAgICAgICBjb25zdCBzaGlwWSA9IHNoaXBSZWN0LnRvcCAtIHNoaXBQYWdlUmVjdC50b3A7XG5cbiAgICAgICAgICAgIHNoaXAuc3R5bGUubGVmdCA9IGAke3NoaXBYfXJlbWA7XG4gICAgICAgICAgICBzaGlwLnN0eWxlLnRvcCA9IGBjYWxjKCR7c2hpcFl9cmVtIC0gMXJlbSlgO1xuICAgICAgICAgICAgaXNQbGFjZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKFwicGxhY2VkXCIpO1xuICAgICAgICAgICAgc2hpcC5zdHlsZS5ib3JkZXIgPSBcIjJyZW0gc29saWQgYmx1ZVwiO1xuICAgICAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKFwibW92aW5nXCIpO1xuICAgICAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIG9uY2Ugc2hpcCBpcyBwbGFjZWRcbiAgICAgICAgICAgIHNoaXBQbGFjZVBhZ2UucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBkcmFnU2hpcCk7XG4gICAgICAgICAgICBzaGlwUGxhY2VQYWdlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBkcm9wU2hpcCk7XG4gICAgICAgICAgICAvLyBTaGlwIHBsYWNlZCBzdWNjZXNzZnVsbHkuIE5vdyB1cGRhdGUgdGhlIDJEIGJvYXJkIGFycmF5XG4gICAgICAgICAgICBwbGF5ZXIuZ2FtZUJvYXJkLnVwZGF0ZUJvYXJkKHJvdywgY29sLCBzaG9ydE5hbWUsIGxlbmd0aCwgXCJ5XCIpO1xuICAgICAgICAgICAgcGxhY2VTaGlwcyhzaGlwTmFtZXMuc2xpY2UoKSwgY2FsbEJhY2spO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICAvLyBQbGFjZSBzaGlwIG9uIHRoZSBib2FyZCBvbiBtb3VzZSBjbGlja1xuICAgIHNoaXBQbGFjZVBhZ2UuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRyb3BTaGlwKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGhpZGVJbml0UGFnZSgpIHtcbiAgICBjb25zdCBpbml0UGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaW5pdGlhbC1wYWdlXCIpO1xuICAgIGluaXRQYWdlLmNsYXNzTGlzdC5hZGQoXCJoaWRlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZVNoaXBQYWdlKCkge1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIHNoaXBQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd1NoaXBQYWdlKCkge1xuICAgIGNvbnN0IHNoaXBQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaGlwLXBsYWNlbWVudC1wYWdlXCIpO1xuICAgIHNoaXBQYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvd0dhbWVQYWdlKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZUdhbWVQYWdlKCkge1xuICAgIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICAgIGdhbWVQYWdlLmNsYXNzTGlzdC5yZW1vdmUoXCJzaG93XCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gaGlkZU1vZGFsQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IG1vZGFsQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lb3Zlci1jb250YWluZXJcIik7XG4gICAgbW9kYWxDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XG4gIH1cblxuICBmdW5jdGlvbiB0dXJuTWVzc2FnZSh0dXJuKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudHVybi1tZXNzYWdlXCIpO1xuICAgIGlmICh0dXJuID09PSBcInBsYXllclwiKSBtZXNzYWdlLnRleHRDb250ZW50ID0gXCJZb3VyIFR1cm5cIjtcbiAgICBlbHNlIG1lc3NhZ2UudGV4dENvbnRlbnQgPSBcIkFJJ3MgdHVyblwiO1xuICB9XG4gIC8vIFRPRE8uLi4gVXBkYXRlIGNlbGwgaGl0IHN0YXR1cyBpbiBET01cbiAgZnVuY3Rpb24gdXBkYXRlQ2VsbEhpdChjZWxsLCBoaXRTdGF0dXMpIHtcbiAgICBjb25zdCB0YXJnZXRDZWxsID0gY2VsbDtcbiAgICBpZiAoaGl0U3RhdHVzID09PSBcImVtcHR5XCIpIHtcbiAgICAgIHRhcmdldENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcIm1pc3NcIik7XG4gICAgICB0YXJnZXRDZWxsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwicGlua1wiO1xuICAgIH0gZWxzZSBpZiAoaGl0U3RhdHVzICE9PSBcImhpdFwiICYmIGhpdFN0YXR1cyAhPT0gXCJtaXNzXCIpIHtcbiAgICAgIHRhcmdldENlbGwuc2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiLCBcImhpdFwiKTtcbiAgICAgIHRhcmdldENlbGwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJyZWRcIjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHtcbiAgICByZXNldFRhYmxlcyxcbiAgICBwbGFjZVNoaXBzLFxuICAgIHJlbW92ZVNoaXBzLFxuICAgIGhpZGVJbml0UGFnZSxcbiAgICBoaWRlU2hpcFBhZ2UsXG4gICAgc2hvd1NoaXBQYWdlLFxuICAgIHNob3dHYW1lUGFnZSxcbiAgICBoaWRlR2FtZVBhZ2UsXG4gICAgaGlkZU1vZGFsQ29udGFpbmVyLFxuICAgIGF1dG9QbGFjZVNoaXBzLFxuICAgIHR1cm5NZXNzYWdlLFxuICAgIHVwZGF0ZUNlbGxIaXQsXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZUJvYXJkIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hbGxTdW5rID0gZmFsc2U7XG4gICAgdGhpcy5ib2FyZCA9IFtdO1xuICAgIHRoaXMuc2hpcHNDb29yZCA9IHt9O1xuICB9XG5cbiAgYnVpbGRCb2FyZCgpIHtcbiAgICBmb3IgKGxldCByID0gMDsgciA8IDEwOyByICs9IDEpIHtcbiAgICAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCAxMDsgYyArPSAxKSB7XG4gICAgICAgIHJvdy5wdXNoKFwiZW1wdHlcIik7XG4gICAgICB9XG4gICAgICB0aGlzLmJvYXJkLnB1c2gocm93KTtcbiAgICB9XG4gIH1cblxuICByZXNldEJvYXJkKCkge1xuICAgIC8vIEZpcnN0ICByZXNldCBib2FyZCBhbmQgdGhlbiBidWlsZCBpdCB3aXRoIGVtcHR5IGNlbGxzXG4gICAgdGhpcy5ib2FyZCA9IFtdXG4gICAgdGhpcy5idWlsZEJvYXJkKClcbiAgfVxuXG4gIGlzVmFsaWRQb3Mocm93LCBjb2wsIGxlbmd0aCwgb3JpZW50KSB7XG4gICAgY29uc29sZS5sb2coJ1BsYXllciBib2FyZCcsIHRoaXMuYm9hcmQpXG4gICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIgJiYgY29sICsgMSAtIGxlbmd0aCA+PSAwKSB7XG4gICAgICBjb25zdCBib2FyZFJvdyA9IHRoaXMuYm9hcmRbcm93XTtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPiBjb2wgLSBsZW5ndGg7IGkgLT0gMSkge1xuICAgICAgICBpZiAoYm9hcmRSb3dbaV0gIT09IFwiZW1wdHlcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChvcmllbnQgPT09IFwieVwiICYmIHJvdyArIDEgLSBsZW5ndGggPj0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA+IHJvdyAtIGxlbmd0aDsgaSAtPSAxKSB7XG4gICAgICAgIGlmICh0aGlzLmJvYXJkW2ldW2NvbF0gIT09IFwiZW1wdHlcIikgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdXBkYXRlQm9hcmQocm93LCBjb2wsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCkge1xuICAgIGlmIChvcmllbnQgPT09IFwieFwiKSB7XG4gICAgICBjb25zdCBib2FyZFJvdyA9IHRoaXMuYm9hcmRbcm93XTtcbiAgICAgIGZvciAobGV0IGkgPSBjb2w7IGkgPiBjb2wgLSBsZW5ndGg7IGkgLT0gMSkge1xuICAgICAgICBib2FyZFJvd1tpXSA9IHNoaXBOYW1lO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgZm9yIChsZXQgaSA9IHJvdzsgaSA+IHJvdyAtIGxlbmd0aDsgaSAtPSAxKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaSwgY29sLCBzaGlwTmFtZVwiLCBpLCBjb2wsIHNoaXBOYW1lKTtcbiAgICAgICAgdGhpcy5ib2FyZFtpXVtjb2xdID0gc2hpcE5hbWU7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFNhdmUgdGhpcyBzaGlwJ3MgY29vcmRpbmF0ZXNcbiAgICB0aGlzLnVwZGF0ZVNoaXBzQ29vcmQocm93LCBjb2wsIHNoaXBOYW1lLCBsZW5ndGgsIG9yaWVudCk7XG4gIH1cblxuICB1cGRhdGVTaGlwc0Nvb3JkKHJvdywgY29sLCBzaGlwTmFtZSwgbGVuZ3RoLCBvcmllbnQpIHtcbiAgICBpZiAob3JpZW50ID09PSBcInhcIikge1xuICAgICAgY29uc3Qgc2hpcCA9IHt9O1xuICAgICAgc2hpcC5zdGFydCA9IFtyb3csIGNvbCArIDEgLSBsZW5ndGhdO1xuICAgICAgc2hpcC5lbmQgPSBbcm93LCBjb2xdO1xuICAgICAgc2hpcC5vcmllbnQgPSBvcmllbnQ7XG4gICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMuc2hpcHNDb29yZFtzaGlwTmFtZV0gPSBzaGlwO1xuICAgIH1cbiAgICBpZiAob3JpZW50ID09PSBcInlcIikge1xuICAgICAgY29uc3Qgc2hpcCA9IHt9O1xuICAgICAgc2hpcC5zdGFydCA9IFtyb3cgKyAxIC0gbGVuZ3RoLCBjb2xdO1xuICAgICAgc2hpcC5lbmQgPSBbcm93LCBjb2xdO1xuICAgICAgc2hpcC5vcmllbnQgPSBvcmllbnQ7XG4gICAgICBzaGlwLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgIHRoaXMuc2hpcHNDb29yZFtzaGlwTmFtZV0gPSBzaGlwO1xuICAgIH1cbiAgfVxuXG4gICNnZXRTdGFydEluZGV4KGxlbmd0aCwgb3JpZW50KSB7XG4gICAgbGV0IGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICBsZXQgcm93O1xuICAgIGxldCBjb2w7XG4gICAgbGV0IGNlbGw7XG4gICAgaWYgKG9yaWVudCA9PT0gXCJ4XCIpIHtcbiAgICAgIHdoaWxlICghaW5kZXhGb3VuZCkge1xuICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgIC8vIEFkZCBvZmZzZXQgPSBsZW5ndGggLSAxIGluIGNvbCB0byBjaGVjayBwcmV2IG4tMSBjZWxscyBhcyBlbXB0eVxuICAgICAgICBjb2wgPSBsZW5ndGggLSAxICsgTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKDEwIC0gKGxlbmd0aCAtIDEpKSk7XG4gICAgICAgIGNlbGwgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICAgICAgLy8gQ2hlY2sgaWYgY3VycmVudCBjZWxsIGlzIGVtcHR5IGFuZCBwcmV2ICduLTEnIGNlbGxzIGFyZSBlbXB0eSBob3Jpem9udGFsbHlcbiAgICAgICAgaWYgKGNlbGwgPT09IFwiZW1wdHlcIikge1xuICAgICAgICAgIGluZGV4Rm91bmQgPSB0cnVlO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sIC0gaV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE9uZSBhZGRpdGlvbmFsIGNoZWNrIGFmdGVyIGluZGV4IGlzIGZvdW5kIGlzIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBhdGxlYXN0IG9uZSBjZWxsIGVtcHR5IGJldHdlZW4gY29uc2VjdXRpdmUgc2hpcHMgaW4gb3JkZXIgdG8gbWFrZSBhdXRvIHNoaXBzIHBsYWNlbWVudCBtb3JlIGxvZ2ljYWwgYW5kIGxlc3MgcmFuZG9tLlxuICAgICAgICBpZiAoaW5kZXhGb3VuZCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAncyBhbGwgY2VsbHMgYXJlIGF3YXkgZnJvbSBjb3JuZXIgcm93cyBhbmQgY29sdW1uc1xuICAgICAgICAgIGlmIChyb3cgKyAxIDw9IDkgJiYgcm93IC0gMSA+PSAwICYmIGNvbCArIDEgPD0gOSAmJiBjb2wgLSBsZW5ndGggLSAxID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sICsgMV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbCAtIGxlbmd0aF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyArIDFdW2NvbCAtIGldICE9PSBcImVtcHR5XCIgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyAtIDFdW2NvbCAtIGldICE9PSBcImVtcHR5XCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvdyA9PT0gMCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgKyAxXVtjb2wgLSBpXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyb3cgPT09IDkpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gMV1bY29sIC0gaV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sID09PSA5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3ddW2NvbCAtIGxlbmd0aF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2wgLSBsZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3Jvd11bY29sICsgMV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChvcmllbnQgPT09IFwieVwiKSB7XG4gICAgICB3aGlsZSAoIWluZGV4Rm91bmQpIHtcbiAgICAgICAgLy8gQWRkIG9mZnNldCA9IGxlbmd0aCAtIDEgaW4gcm93IHRvIGNoZWNrIHByZXYgbi0xIGNlbGxzIGFzIGVtcHR5XG4gICAgICAgIHJvdyA9IGxlbmd0aCAtIDEgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoMTAgLSAobGVuZ3RoIC0gMSkpKTtcbiAgICAgICAgY29sID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBjZWxsID0gdGhpcy5ib2FyZFtyb3ddW2NvbF07XG4gICAgICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgY2VsbCBpcyBlbXB0eSBhbmQgcHJldiAnbi0xJyBjZWxscyBhcmUgZW1wdHkgdmVydGljYWxseVxuICAgICAgICBpZiAoY2VsbCA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgaW5kZXhGb3VuZCA9IHRydWU7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gaV1bY29sXSAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE9uZSBhZGRpdGlvbmFsIGNoZWNrIGFmdGVyIGluZGV4IGlzIGZvdW5kIGlzIHRvIG1ha2Ugc3VyZSB0aGVyZSBpcyBhdGxlYXN0IG9uZSBjZWxsIGVtcHR5IGJldHdlZW4gY29uc2VjdXRpdmUgc2hpcHMgaW4gb3JkZXIgdG8gbWFrZSBhdXRvIHNoaXBzIHBsYWNlbWVudCBtb3JlIGxvZ2ljYWwgYW5kIGxlc3MgcmFuZG9tLlxuICAgICAgICBpZiAoaW5kZXhGb3VuZCkge1xuICAgICAgICAgIC8vIENoZWNrIGlmIHNoaXAncyBhbGwgY2VsbHMgYXJlIGF3YXkgZnJvbSBjb3JuZXIgcm93cyBhbmQgY29sdW1uc1xuICAgICAgICAgIGlmIChyb3cgKyAxIDw9IDkgJiYgcm93IC0gbGVuZ3RoIC0gMSA+PSAwICYmIGNvbCArIDEgPD0gOSAmJiBjb2wgLSAxID49IDApIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyArIDFdW2NvbF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgLSBsZW5ndGhdW2NvbF0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyAtIGldW2NvbCArIDFdICE9PSBcImVtcHR5XCIgfHxcbiAgICAgICAgICAgICAgICB0aGlzLmJvYXJkW3JvdyAtIGldW2NvbCAtIDFdICE9PSBcImVtcHR5XCJcbiAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjb2wgPT09IDApIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gaV1bY29sICsgMV0gIT09IFwiZW1wdHlcIikge1xuICAgICAgICAgICAgICAgIGluZGV4Rm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY29sID09PSA5KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLmJvYXJkW3JvdyAtIGldW2NvbCAtIDFdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgICBpbmRleEZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJvdyA9PT0gOSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuYm9hcmRbcm93IC0gbGVuZ3RoXVtjb2xdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm93IC0gbGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ib2FyZFtyb3cgKyAxXVtjb2xdICE9PSBcImVtcHR5XCIpIHtcbiAgICAgICAgICAgICAgaW5kZXhGb3VuZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBbcm93LCBjb2xdO1xuICB9XG5cbiAgI3BsYWNlU2luZ2xlU2hpcChzaGlwLCBvcmllbnQpIHtcbiAgICBjb25zdCBzaGlwTmFtZSA9IHNoaXBbMF07XG4gICAgY29uc3QgbGVuZ3RoID0gc2hpcFsyXTtcbiAgICAvLyBVc2UgYXJyYXkgZGVzdHJ1Y3R1cmluZyBmb3IgYWNjY2Vzc2luZyBlbGVtZW50c1xuICAgIGNvbnN0IFtyb3csIGNvbF0gPSB0aGlzLiNnZXRTdGFydEluZGV4KGxlbmd0aCwgb3JpZW50KTtcbiAgICAvLyBVcGRhdGUgYWkgYm9hcmQgd2l0aCB0aGlzIHNoaXAgaW5mb1xuICAgIC8vIGNvbnNvbGUubG9nKFwicm93LCBjb2wsIHNoaXBOYW1lLCBsZW5ndGgsIFwiLCByb3csIGNvbCwgc2hpcE5hbWUsIGxlbmd0aCk7XG4gICAgdGhpcy51cGRhdGVCb2FyZChyb3csIGNvbCwgc2hpcE5hbWUsIGxlbmd0aCwgb3JpZW50KTtcbiAgfVxuXG4gIGF1dG9GaWxsU2hpcHNCb2FyZChzaGlwc0Fycikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwic2hpcHMgYXJyYXlcIiwgc2hpcHNBcnIpO1xuICAgIGNvbnN0IG9yaWVudEFyciA9IFtcInhcIiwgXCJ5XCJdO1xuICAgIHNoaXBzQXJyLmZvckVhY2goKHNoaXApID0+IHtcbiAgICAgIC8vIGNob3NlIG9yaWVudGF0aW9uIHJhbmRvbWx5XG4gICAgICBjb25zdCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xuICAgICAgY29uc3Qgb3JpZW50ID0gb3JpZW50QXJyW2luZGV4XTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwic2hpcFwiLCBzaGlwKTtcbiAgICAgIHRoaXMuI3BsYWNlU2luZ2xlU2hpcChzaGlwLCBvcmllbnQpO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gUmVjZWl2ZSBhdHRhY2sgZnVuY3Rpb24gdG8gY2hlY2sgd2hldGhlciB0aGF0IHNob3QgaGl0IGFueSBzaGlwIG9yIGdvdCBtaXNzZWRcbiAgcmVjZWl2ZUF0dGFjayhwb3NpdGlvbikge1xuICAgIGNvbnN0IHJvdyA9IHBvc2l0aW9uWzBdO1xuICAgIGNvbnN0IGNvbCA9IHBvc2l0aW9uWzFdO1xuICAgIGNvbnN0IGNlbGxTdGF0dXMgPSB0aGlzLmJvYXJkW3Jvd11bY29sXTtcbiAgICBpZiAoY2VsbFN0YXR1cyA9PT0gXCJlbXB0eVwiKSB7XG4gICAgICB0aGlzLmJvYXJkW3Jvd11bY29sXSA9IFwibWlzc1wiO1xuICAgIH0gZWxzZSBpZiAoY2VsbFN0YXR1cyAhPT0gXCJtaXNzXCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJoaXRcIikge1xuICAgICAgdGhpcy5ib2FyZFtyb3ddW2NvbF0gPSBcImhpdFwiO1xuICAgIH1cbiAgICAvLyBSZXR1cm4gYXR0YWNraW5nIGNlbGwgc3RhdHVzXG4gICAgcmV0dXJuIGNlbGxTdGF0dXM7XG4gIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgR2FtZUJvYXJkIGZyb20gXCIuL2dhbWVCb2FyZFwiO1xuaW1wb3J0IFNoaXAgZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoZnVuY3Rpb24gcGxheWVyKCkge1xuICBjb25zdCBuZXdQbGF5ZXIgPSB7fTtcbiAgbmV3UGxheWVyLmMxID0gbmV3IFNoaXAoXCJjMVwiLCA0KTtcbiAgbmV3UGxheWVyLmQxID0gbmV3IFNoaXAoXCJkMVwiLCAzKTtcbiAgbmV3UGxheWVyLmQyID0gbmV3IFNoaXAoXCJkMlwiLCAzKTtcbiAgbmV3UGxheWVyLnAxID0gbmV3IFNoaXAoXCJwMVwiLCAyKTtcbiAgbmV3UGxheWVyLnAyID0gbmV3IFNoaXAoXCJwMlwiLCAyKTtcbiAgbmV3UGxheWVyLnAzID0gbmV3IFNoaXAoXCJwM1wiLCAyKTtcbiAgbmV3UGxheWVyLnMxID0gbmV3IFNoaXAoXCJzMVwiLCAxKTtcbiAgbmV3UGxheWVyLnMyID0gbmV3IFNoaXAoXCJzMlwiLCAxKTtcbiAgbmV3UGxheWVyLnMzID0gbmV3IFNoaXAoXCJzM1wiLCAxKTtcbiAgbmV3UGxheWVyLnM0ID0gbmV3IFNoaXAoXCJzNFwiLCAxKTtcbiAgbmV3UGxheWVyLmFsbFN1bmsgPSAoKSA9PiB7XG4gICAgY29uc3Qgc2hpcE5hbWVzID0gW1wiYzFcIiwgXCJkMVwiLCBcImQyXCIsIFwicDFcIiwgXCJwMlwiLCBcInAzXCIsIFwiczFcIiwgXCJzMlwiLCBcInMzXCIsIFwiczRcIl07XG4gICAgbGV0IHN1bmsgPSB0cnVlO1xuICAgIHNoaXBOYW1lcy5mb3JFYWNoKChzaGlwKSA9PiB7XG4gICAgICBpZiAoIW5ld1BsYXllcltzaGlwXS5zdW5rKSB7XG4gICAgICAgIHN1bmsgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gc3VuaztcbiAgfTtcblxuICBuZXdQbGF5ZXIucmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgICBjb25zdCBzaGlwTmFtZXMgPSBbXCJjMVwiLCBcImQxXCIsIFwiZDJcIiwgXCJwMVwiLCBcInAyXCIsIFwicDNcIiwgXCJzMVwiLCBcInMyXCIsIFwiczNcIiwgXCJzNFwiXTtcbiAgICBzaGlwTmFtZXMuZm9yRWFjaCgoc2hpcCkgPT4ge1xuICAgICAgbmV3UGxheWVyW3NoaXBdLnJlc2V0U2hpcCgpO1xuICAgIH0pO1xuICB9O1xuXG4gIG5ld1BsYXllci5nYW1lQm9hcmQgPSBuZXcgR2FtZUJvYXJkKCk7XG4gIHJldHVybiBuZXdQbGF5ZXI7XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGxlbmd0aCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRDb3VudCA9IDA7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID09PSB0aGlzLmhpdENvdW50KSB7XG4gICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdW5rO1xuICB9XG5cbiAgcmVzZXRTaGlwKCkge1xuICAgIHRoaXMuaGl0Q291bnQgPSAwXG4gICAgdGhpcy5zdW5rID0gMFxuICB9XG5cbiAgaGl0KCkge1xuICAgIHRoaXMuaGl0Q291bnQgKz0gMTtcbiAgfVxufVxuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgdjIuMCB8IDIwMTEwMTI2XG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxuKi9cblxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcbmIsIHUsIGksIGNlbnRlcixcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsIFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRib3JkZXI6IDA7XG5cdGZvbnQtc2l6ZTogMTAwJTtcblx0Zm9udDogaW5oZXJpdDtcblx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSwgXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xuXHRkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuXHRsaW5lLWhlaWdodDogMTtcbn1cbm9sLCB1bCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5ibG9ja3F1b3RlLCBxIHtcblx0cXVvdGVzOiBub25lO1xufVxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSwgcTphZnRlciB7XG5cdGNvbnRlbnQ6ICcnO1xuXHRjb250ZW50OiBub25lO1xufVxudGFibGUge1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlU2hlZXRzL21leWVyLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0NBR0M7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Q0FhQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxlQUFlO0NBQ2YsYUFBYTtDQUNiLHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHRmb250LXNpemU6IDEwMCU7XFxuXFx0Zm9udDogaW5oZXJpdDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKioqKioqIEVsYWQgU2hlY2h0ZXIncyBSRVNFVCAqKioqKioqL1xuLyoqKiBib3ggc2l6aW5nIGJvcmRlci1ib3ggZm9yIGFsbCBlbGVtZW50cyAqKiovXG4qLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXIge1xuICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuYSB7XG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvbiB7XG4gICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5maWd1cmUge1xuICAgICBtYXJnaW46IDA7XG59XG5pbnB1dDo6LW1vei1mb2N1cy1pbm5lciB7XG4gICAgIGJvcmRlcjogMDtcbiAgICAgcGFkZGluZzogMDtcbiAgICAgbWFyZ2luOiAwO1xufVxudWwsXG5vbCxcbmRkIHtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBwYWRkaW5nOiAwO1xuICAgICBsaXN0LXN0eWxlOiBub25lO1xufVxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgICAgbWFyZ2luOiAwO1xuICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xufVxucCB7XG4gICAgIG1hcmdpbjogMDtcbn1cbmNpdGUge1xuICAgICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5maWVsZHNldCB7XG4gICAgIGJvcmRlci13aWR0aDogMDtcbiAgICAgcGFkZGluZzogMDtcbiAgICAgbWFyZ2luOiAwO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvbXktY3NzLXJlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7QUFDckMsK0NBQStDO0FBQy9DOzs7S0FHSyxzQkFBc0I7QUFDM0I7QUFDQTtLQUNLLHFCQUFxQjtLQUNyQixjQUFjO0tBQ2QsZUFBZTtBQUNwQjtBQUNBO0tBQ0ssNkJBQTZCO0tBQzdCLGNBQWM7S0FDZCxlQUFlO0tBQ2YsVUFBVTtLQUNWLGVBQWU7QUFDcEI7QUFDQTtLQUNLLFNBQVM7QUFDZDtBQUNBO0tBQ0ssU0FBUztLQUNULFVBQVU7S0FDVixTQUFTO0FBQ2Q7QUFDQTs7O0tBR0ssU0FBUztLQUNULFVBQVU7S0FDVixnQkFBZ0I7QUFDckI7QUFDQTs7Ozs7O0tBTUssU0FBUztLQUNULGtCQUFrQjtLQUNsQixvQkFBb0I7QUFDekI7QUFDQTtLQUNLLFNBQVM7QUFDZDtBQUNBO0tBQ0ssa0JBQWtCO0FBQ3ZCO0FBQ0E7S0FDSyxlQUFlO0tBQ2YsVUFBVTtLQUNWLFNBQVM7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKioqKioqIEVsYWQgU2hlY2h0ZXIncyBSRVNFVCAqKioqKioqL1xcbi8qKiogYm94IHNpemluZyBib3JkZXItYm94IGZvciBhbGwgZWxlbWVudHMgKioqL1xcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmEge1xcbiAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICAgY29sb3I6IGluaGVyaXQ7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbiB7XFxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgIGNvbG9yOiBpbmhlcml0O1xcbiAgICAgYm9yZGVyLXdpZHRoOiAwO1xcbiAgICAgcGFkZGluZzogMDtcXG4gICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZmlndXJlIHtcXG4gICAgIG1hcmdpbjogMDtcXG59XFxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICAgYm9yZGVyOiAwO1xcbiAgICAgcGFkZGluZzogMDtcXG4gICAgIG1hcmdpbjogMDtcXG59XFxudWwsXFxub2wsXFxuZGQge1xcbiAgICAgbWFyZ2luOiAwO1xcbiAgICAgcGFkZGluZzogMDtcXG4gICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gICAgIG1hcmdpbjogMDtcXG4gICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gICAgIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xcbn1cXG5wIHtcXG4gICAgIG1hcmdpbjogMDtcXG59XFxuY2l0ZSB7XFxuICAgICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmZpZWxkc2V0IHtcXG4gICAgIGJvcmRlci13aWR0aDogMDtcXG4gICAgIHBhZGRpbmc6IDA7XFxuICAgICBtYXJnaW46IDA7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgXFxgbWFpblxcYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gXFxgaDFcXGAgZWxlbWVudHMgd2l0aGluIFxcYHNlY3Rpb25cXGAgYW5kXG4gKiBcXGBhcnRpY2xlXFxgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgXFxgZW1cXGAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IFxcYHN1YlxcYCBhbmQgXFxgc3VwXFxgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBcXGBmaWVsZHNldFxcYCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIFxcYGZpZWxkc2V0XFxgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gXFxgaW5oZXJpdFxcYCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvbm9ybWFsaXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzNDOztBQUVBOztFQUVFOztBQUVGOztFQUVFLG1CQUFtQjtBQUNyQjs7QUFFQTs7O0VBR0U7O0FBRUY7OztFQUdFLGlDQUFpQyxFQUFFLE1BQU07RUFDekMsY0FBYyxFQUFFLE1BQU07QUFDeEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxjQUFjO0VBQ2QsY0FBYztFQUNkLGtCQUFrQjtFQUNsQix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7Ozs7O0VBS0Usb0JBQW9CLEVBQUUsTUFBTTtFQUM1QixlQUFlLEVBQUUsTUFBTTtFQUN2QixpQkFBaUIsRUFBRSxNQUFNO0VBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtRQUNRLE1BQU07RUFDWixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFOztBQUVGO1NBQ1MsTUFBTTtFQUNiLG9CQUFvQjtBQUN0Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLDBCQUEwQjtBQUM1Qjs7QUFFQTs7RUFFRTs7QUFFRjs7OztFQUlFLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSw4QkFBOEI7QUFDaEM7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7RUFDRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGNBQWMsRUFBRSxNQUFNO0VBQ3RCLGVBQWUsRUFBRSxNQUFNO0VBQ3ZCLFVBQVUsRUFBRSxNQUFNO0VBQ2xCLG1CQUFtQixFQUFFLE1BQU07QUFDN0I7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjs7RUFFRSxzQkFBc0IsRUFBRSxNQUFNO0VBQzlCLFVBQVUsRUFBRSxNQUFNO0FBQ3BCOztBQUVBOztFQUVFOztBQUVGOztFQUVFLFlBQVk7QUFDZDs7QUFFQTs7O0VBR0U7O0FBRUY7RUFDRSw2QkFBNkIsRUFBRSxNQUFNO0VBQ3JDLG9CQUFvQixFQUFFLE1BQU07QUFDOUI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyxhQUFhLEVBQUUsTUFBTTtBQUN2Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cXG5cXG4vKiBEb2N1bWVudFxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxcbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xcbn1cXG5cXG4vKiBTZWN0aW9uc1xcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cXG4gKi9cXG5cXG5tYWluIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cXG4gKi9cXG5cXG5oMSB7XFxuICBmb250LXNpemU6IDJlbTtcXG4gIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnRcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXFxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXFxuICovXFxuXFxuaHIge1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cXG4gIGhlaWdodDogMDsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxucHJlIHtcXG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5hIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cXG4gKi9cXG5cXG5zbWFsbCB7XFxuICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcbiAgZm9udC1zaXplOiA3NSU7XFxuICBsaW5lLWhlaWdodDogMDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuc3ViIHtcXG4gIGJvdHRvbTogLTAuMjVlbTtcXG59XFxuXFxuc3VwIHtcXG4gIHRvcDogLTAuNWVtO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50XFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxcbiAqL1xcblxcbmltZyB7XFxuICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qIEZvcm1zXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxcbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHsgLyogMSAqL1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxcbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHsgLyogMSAqL1xcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXFxuICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLyoqXFxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxcbiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmZpZWxkc2V0IHtcXG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXFxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmxlZ2VuZCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xcbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcbiAgcGFkZGluZzogMDsgLyogMyAqL1xcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxcbiAqL1xcblxcbnByb2dyZXNzIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXFxuICovXFxuXFxudGV4dGFyZWEge1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuICBwYWRkaW5nOiAwOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXFxuW3R5cGU9XFxcIm51bWJlclxcXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXFxuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXFxuICovXFxuXFxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKiBJbnRlcmFjdGl2ZVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxcbiAqL1xcblxcbmRldGFpbHMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xcbn1cXG5cXG4vKiBNaXNjXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXFxuICovXFxuXFxudGVtcGxhdGUge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXFxuICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgZm9udC1zaXplOiBjYWxjKDE2cmVtICsgKDIwIC0gMTYpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoMTkyMCAtIDMyMCkpKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW46IDJ2dyBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIlRvdXJuZXlcIjtcbiAgZm9udDogYm9sZDtcbiAgZm9udC1zaXplOiBjYWxjKDI4cmVtICsgKDgwIC0gMjgpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoMTkyMCAtIDMyMCkpKTtcbiAgY29sb3I6ICM1MDA3MjQ7XG4gIG1hcmdpbi1ib3R0b206IDV2dztcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmluaXRpYWwtcGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogODB2aDtcbiAgei1pbmRleDogMztcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyMjAwNjtcbiAgYm94LXNoYWRvdzogM3JlbSAzcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDEwdmg7XG4gIGxlZnQ6IDIwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FtZS10aXRsZS5pbml0LXBhZ2Uge1xuICBjb2xvcjogIzU5NzhmNTtcbn1cblxuYnV0dG9uLmdhbWUtc3RhcnQuaW5pdC1wYWdlLFxuLnBsYXktYWdhaW4ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHBhZGRpbmc6IDVyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTc4ZjU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcbn1cblxuLmluaXRpYWwtcGFnZS5oaWRlIHtcbiAgLyogb3BhY2l0eTogMDsgKi9cbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5pdGlhbC1wYWdlLmhpZGUgPiA6bnRoLWNoaWxkKG4pIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uaW5pdGlhbC1wYWdlLnNob3cge1xuICAvKiBvcGFjaXR5OiAxOyAqL1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLnNoaXAtcGxhY2VtZW50LXBhZ2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDgwdmg7XG4gIHBhZGRpbmc6IDJ2dztcbiAgei1pbmRleDogMjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FiYjhiNztcbiAgYm94LXNoYWRvdzogM3JlbSAzcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDEwdmg7XG4gIGxlZnQ6IDIwdnc7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2hpcC1wbGFjZW1lbnQtcGFnZS5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zaGlwLXBsYWNlbWVudC1wYWdlLnNob3cge1xuICBvcGFjaXR5OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uc2hpcC1uYW1lIHtcbiAgcGFkZGluZzogNXJlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5yb3RhdGUtYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6ICMwZjc2NmU7XG4gIHBhZGRpbmc6IDAuMXZ3O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZ2FwOiAxdnc7XG59XG5cbi5yb3RhdGUtYnRuOmhvdmVye1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLnJvdGF0ZS10ZXh0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXJlbSBkYXNoZWQgIzBmNzY2ZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5yYW5kb20taWNvbiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB3aWR0aDogY2FsYygxNnJlbSArICgyMiAtIDE2KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDkyMCAtIDMyMCkpKTtcbn1cblxuLnNoaXAtcGxhY2VtZW50LXBhZ2UgLnlvdXItdGFibGUgLnRhYmxlLWNlbGwge1xuICBib3JkZXI6IDFyZW0gc29saWQgcmdiKDExMSwgMTExLCAyMTQpO1xufVxuXG4uZ2FtZXBsYXktcGFnZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDYwdnc7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXI6IDFyZW0gc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG59XG5cbi5nYW1lcGxheS1wYWdlLmhpZGUge1xuICBvcGFjaXR5OiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmdhbWVwbGF5LXBhZ2Uuc2hvdyB7XG4gIG9wYWNpdHk6IDE7XG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XG59XG5cbi50dXJuLW1lc3NhZ2Uge1xuICB3aWR0aDogMTJ2dztcbiAgcGFkZGluZzogMC41dnc7XG4gIG1hcmdpbjogMXZ3IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWY1Zjk7XG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmdyaWRzLWNvbnRhaW5lciB7XG4gIG1hcmdpbjogMnZ3IGF1dG87XG4gIHdpZHRoOiA2MHZ3O1xuICBoZWlnaHQ6IDI1dnc7XG4gIHBhZGRpbmc6IDJ2dztcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZ2FwOiA1dnc7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi55b3VyLWdyaWQsXG4ub3Bwb25lbnQtZ3JpZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDF2dztcbn1cblxuLnlvdXItdGFibGUsXG4ub3Bwb25lbnQtdGFibGUge1xuICB3aWR0aDogMjB2dztcbiAgaGVpZ2h0OiAyMHZ3O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLnRhYmxlLWNlbGwge1xuICB3aWR0aDogMnZ3O1xuICBoZWlnaHQ6IDJ2dztcbiAgcG9pbnRlci1ldmVudHM6IGFsbDtcbn1cblxuLm1vdmluZyB7XG4gIGJvcmRlcjogMXJlbSBkYXNoZWQgIzU5NzhmNTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5wbGFjZWQge1xuICBib3JkZXI6IDJyZW0gc29saWQgYmx1ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwb2ludGVyLWV2ZW50czogYWxsO1xufVxuXG4uc3VuayB7XG4gIGJvcmRlcjogM3JlbSBzb2xpZCByZWQ7XG59XG5cbi55b3VyLXRhYmxlIC50YWJsZS1jZWxsIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzU5NzhmNTtcbn1cblxuLnlvdXItdGFibGUgLnRhYmxlLWNlbGw6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5vcHBvbmVudC10YWJsZSAudGFibGUtY2VsbCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi55b3VyLXRhYmxlLWdhbWVwbGF5LXBhZ2UgOm50aC1jaGlsZChuKSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLm9wcG9uZW50LXRhYmxlIC50YWJsZS1jZWxsOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uZ2FtZW92ZXItY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHotaW5kZXg6IDU7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5nYW1lb3Zlci1jb250YWluZXIuaGlkZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZ2FtZW92ZXItY29udGFpbmVyLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogcG9pbnRlci1ldmVudHM6IGFsbDsgKi9cbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDEwMHZoO1xufVxuXG4uZ2FtZW92ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBsZWZ0OiAzMHZ3O1xuICB0b3A6IDMwdmg7XG4gIHotaW5kZXg6IDQ7XG4gIHdpZHRoOiA0MHZ3O1xuICBoZWlnaHQ6IDQwdmg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjIwMDY7XG4gIGNvbG9yOiAjY2NjO1xuICBib3JkZXI6IDFyZW0gc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XG59XG5cbi5tb2RhbC1tc2cge1xuICBmb250LXNpemU6IDQ4cmVtO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVTaGVldHMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNFQUFzRTtFQUN0RSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFX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QU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsb0NBQW9DO0VBQ3BDLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGZvbnQtc2l6ZTogY2FsYygxNnJlbSArICgyMCAtIDE2KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDE5MjAgLSAzMjApKSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi5nYW1lLXRpdGxlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAydncgYXV0bztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiVG91cm5leVxcXCI7XFxuICBmb250OiBib2xkO1xcbiAgZm9udC1zaXplOiBjYWxjKDI4cmVtICsgKDgwIC0gMjgpICogKCgxMDB2dyAtIDMyMHJlbSkgLyAoMTkyMCAtIDMyMCkpKTtcXG4gIGNvbG9yOiAjNTAwNzI0O1xcbiAgbWFyZ2luLWJvdHRvbTogNXZ3O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmluaXRpYWwtcGFnZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNjB2dztcXG4gIGhlaWdodDogODB2aDtcXG4gIHotaW5kZXg6IDM7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDIyMDA2O1xcbiAgYm94LXNoYWRvdzogM3JlbSAzcmVtIDNyZW0gcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgdG9wOiAxMHZoO1xcbiAgbGVmdDogMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uZ2FtZS10aXRsZS5pbml0LXBhZ2Uge1xcbiAgY29sb3I6ICM1OTc4ZjU7XFxufVxcblxcbmJ1dHRvbi5nYW1lLXN0YXJ0LmluaXQtcGFnZSxcXG4ucGxheS1hZ2FpbiB7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgcGFkZGluZzogNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM1OTc4ZjU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cmVtO1xcbn1cXG5cXG4uaW5pdGlhbC1wYWdlLmhpZGUge1xcbiAgLyogb3BhY2l0eTogMDsgKi9cXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmluaXRpYWwtcGFnZS5oaWRlID4gOm50aC1jaGlsZChuKSB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmluaXRpYWwtcGFnZS5zaG93IHtcXG4gIC8qIG9wYWNpdHk6IDE7ICovXFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1wYWdlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiA4MHZoO1xcbiAgcGFkZGluZzogMnZ3O1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNhYmI4Yjc7XFxuICBib3gtc2hhZG93OiAzcmVtIDNyZW0gM3JlbSByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0b3A6IDEwdmg7XFxuICBsZWZ0OiAyMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLXBsYWNlbWVudC1wYWdlLmhpZGUge1xcbiAgb3BhY2l0eTogMDtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LXBhZ2Uuc2hvdyB7XFxuICBvcGFjaXR5OiAxO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5zaGlwLW5hbWUge1xcbiAgcGFkZGluZzogNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucm90YXRlLWJ0biB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgY29sb3I6ICMwZjc2NmU7XFxuICBwYWRkaW5nOiAwLjF2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGdhcDogMXZ3O1xcbn1cXG5cXG4ucm90YXRlLWJ0bjpob3ZlcntcXG4gIGNvbG9yOiBibHVlO1xcbn1cXG5cXG4ucm90YXRlLXRleHQge1xcbiAgYm9yZGVyLWJvdHRvbTogMXJlbSBkYXNoZWQgIzBmNzY2ZTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG5cXG4ucmFuZG9tLWljb24ge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB3aWR0aDogY2FsYygxNnJlbSArICgyMiAtIDE2KSAqICgoMTAwdncgLSAzMjByZW0pIC8gKDkyMCAtIDMyMCkpKTtcXG59XFxuXFxuLnNoaXAtcGxhY2VtZW50LXBhZ2UgLnlvdXItdGFibGUgLnRhYmxlLWNlbGwge1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkIHJnYigxMTEsIDExMSwgMjE0KTtcXG59XFxuXFxuLmdhbWVwbGF5LXBhZ2Uge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIHdpZHRoOiA2MHZ3O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbiAgYm9yZGVyOiAxcmVtIHNvbGlkO1xcbiAgYm9yZGVyLXJhZGl1czogNXJlbTtcXG59XFxuXFxuLmdhbWVwbGF5LXBhZ2UuaGlkZSB7XFxuICBvcGFjaXR5OiAwO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5nYW1lcGxheS1wYWdlLnNob3cge1xcbiAgb3BhY2l0eTogMTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi50dXJuLW1lc3NhZ2Uge1xcbiAgd2lkdGg6IDEydnc7XFxuICBwYWRkaW5nOiAwLjV2dztcXG4gIG1hcmdpbjogMXZ3IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmNWY5O1xcbiAgYm9yZGVyLXJhZGl1czogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmdyaWRzLWNvbnRhaW5lciB7XFxuICBtYXJnaW46IDJ2dyBhdXRvO1xcbiAgd2lkdGg6IDYwdnc7XFxuICBoZWlnaHQ6IDI1dnc7XFxuICBwYWRkaW5nOiAydnc7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBnYXA6IDV2dztcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi55b3VyLWdyaWQsXFxuLm9wcG9uZW50LWdyaWQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDF2dztcXG59XFxuXFxuLnlvdXItdGFibGUsXFxuLm9wcG9uZW50LXRhYmxlIHtcXG4gIHdpZHRoOiAyMHZ3O1xcbiAgaGVpZ2h0OiAyMHZ3O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi50YWJsZS1jZWxsIHtcXG4gIHdpZHRoOiAydnc7XFxuICBoZWlnaHQ6IDJ2dztcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxufVxcblxcbi5tb3Zpbmcge1xcbiAgYm9yZGVyOiAxcmVtIGRhc2hlZCAjNTk3OGY1O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcblxcbi5wbGFjZWQge1xcbiAgYm9yZGVyOiAycmVtIHNvbGlkIGJsdWU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcbn1cXG5cXG4uc3VuayB7XFxuICBib3JkZXI6IDNyZW0gc29saWQgcmVkO1xcbn1cXG5cXG4ueW91ci10YWJsZSAudGFibGUtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNTk3OGY1O1xcbn1cXG5cXG4ueW91ci10YWJsZSAudGFibGUtY2VsbDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5vcHBvbmVudC10YWJsZSAudGFibGUtY2VsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbn1cXG5cXG4ueW91ci10YWJsZS1nYW1lcGxheS1wYWdlIDpudGgtY2hpbGQobikge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLm9wcG9uZW50LXRhYmxlIC50YWJsZS1jZWxsOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgei1pbmRleDogNTtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxufVxcblxcbi5nYW1lb3Zlci1jb250YWluZXIuaGlkZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIGxpbmVhciAxcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuXFxuLmdhbWVvdmVyLWNvbnRhaW5lci5zaG93IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLyogcG9pbnRlci1ldmVudHM6IGFsbDsgKi9cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxuLmdhbWVvdmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbGVmdDogMzB2dztcXG4gIHRvcDogMzB2aDtcXG4gIHotaW5kZXg6IDQ7XFxuICB3aWR0aDogNDB2dztcXG4gIGhlaWdodDogNDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MjIwMDY7XFxuICBjb2xvcjogI2NjYztcXG4gIGJvcmRlcjogMXJlbSBzb2xpZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVyZW07XFxufVxcblxcbi5tb2RhbC1tc2cge1xcbiAgZm9udC1zaXplOiA0OHJlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sIHtcbiAgICAgZm9udC1zaXplOiAxcHg7IC8qZm9yIHVzaW5nIFJFTSB1bml0cyovXG59XG5ib2R5IHtcbiAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBcIlJvYm90b1wiLCBcIk94eWdlblwiLCBcIlVidW50dVwiLCBcIkZpcmEgU2Fuc1wiLCBcIkRyb2lkIFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmO1xuICAgICBmb250LXNpemU6IDE2cmVtO1xuICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICBsaW5lLWhlaWdodDogMS4zO1xuICAgICBjb2xvcjogIzIyMjtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlU2hlZXRzL3R5cG9ncmFwaHkuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0tBQ0ssY0FBYyxFQUFFLHNCQUFzQjtBQUMzQztBQUNBO0tBQ0ssaUpBQWlKO0tBQ2pKLGdCQUFnQjtLQUNoQixnQkFBZ0I7S0FDaEIsZ0JBQWdCO0tBQ2hCLFdBQVc7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgICBmb250LXNpemU6IDFweDsgLypmb3IgdXNpbmcgUkVNIHVuaXRzKi9cXG59XFxuYm9keSB7XFxuICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcXFwiU2Vnb2UgVUlcXFwiLCBcXFwiUm9ib3RvXFxcIiwgXFxcIk94eWdlblxcXCIsIFxcXCJVYnVudHVcXFwiLCBcXFwiRmlyYSBTYW5zXFxcIiwgXFxcIkRyb2lkIFNhbnNcXFwiLCBcXFwiSGVsdmV0aWNhIE5ldWVcXFwiLCBzYW5zLXNlcmlmO1xcbiAgICAgZm9udC1zaXplOiAxNnJlbTtcXG4gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgICBsaW5lLWhlaWdodDogMS4zO1xcbiAgICAgY29sb3I6ICMyMjI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21leWVyLXJlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWV5ZXItcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWNzcy1yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL215LWNzcy1yZXNldC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbm9ybWFsaXplLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3R5cG9ncmFwaHkuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90eXBvZ3JhcGh5LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuLi9zdHlsZVNoZWV0cy9tZXllci1yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL215LWNzcy1yZXNldC5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL25vcm1hbGl6ZS5jc3NcIjtcbmltcG9ydCBcIi4uL3N0eWxlU2hlZXRzL3R5cG9ncmFwaHkuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZVNoZWV0cy9zdHlsZXMuY3NzXCI7XG5pbXBvcnQgcmFuZG9tSWNvbiBmcm9tIFwiLi4vYXNzZXRzL2ljb25zL3JhbmRvbS5zdmdcIjtcblxuLy8gSW1wb3J0IG1vZHVsZXMgaW50byBtYWluIGFwcC5qcyBmaWxlXG5pbXBvcnQgZG9tTWFuaXB1bGF0aW9uIGZyb20gXCIuL2RvbVwiO1xuaW1wb3J0IHBsYXllciBmcm9tIFwiLi9wbGF5ZXJcIjtcbmltcG9ydCBhaSBmcm9tIFwiLi9haVwiO1xuXG4vLyBCdWlsZCBlbXB0eSBnYW1lIGJvYXJkIGZvciBwbGF5ZXIxXG5wbGF5ZXIuZ2FtZUJvYXJkLmJ1aWxkQm9hcmQoKTtcblxuLy8gRGVmaW5lIGFpJ3MgZW1wdHkgZ2FtZUJvYXJkXG5haS5nYW1lQm9hcmQuYnVpbGRCb2FyZCgpO1xuLy8gY29uc29sZS5sb2coYWkuYm9hcmQpXG5cbmZ1bmN0aW9uIHJlc2V0R2FtZSgpIHtcbiAgLy8gUmVzZXQgYm90aCBnYW1lIGJvYXJkc1xuICBwbGF5ZXIuZ2FtZUJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgYWkuZ2FtZUJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgLy8gUmVzZXQgZGlzcGxheSB0YWJsZXMgZm9yIGJvdGggcGxheWVyc1xuICBkb21NYW5pcHVsYXRpb24ucmVzZXRUYWJsZXMoKTtcbiAgLy8gUmVzZXQgcGxheWVyJ3MvYWkncyBzaGlwcyBzdGF0dXNcbiAgcGxheWVyLnJlc2V0U2hpcHMoKTtcbiAgYWkucmVzZXRTaGlwcygpO1xuICAvLyBSZW1vdmUgc2hpcHMgZnJvbSB0YWJsZXNcbiAgZG9tTWFuaXB1bGF0aW9uLnJlbW92ZVNoaXBzKCk7XG4gIC8vIE5vdyBoaWRlIGdhbWUgcGFnZVxuICBkb21NYW5pcHVsYXRpb24uaGlkZUdhbWVQYWdlKCk7XG4gIC8vIFNob3cgc2hpcCBwbGFjZW1lbnQgcGFnZVxuICBkb21NYW5pcHVsYXRpb24uc2hvd1NoaXBQYWdlKCk7XG4gIC8vIE5vdyBoaWRlIG1vZGFsIGNvbnRhaW5lclxuICBkb21NYW5pcHVsYXRpb24uaGlkZU1vZGFsQ29udGFpbmVyKCk7XG4gIC8vIE5vdyBtYW5hZ2Ugc2hpcHMgcGxhY2VtZW50XG4gIG1hbmFnZVNoaXBzUGxhY2VtZW50KCk7XG59XG5cbi8vIFRPRE8uLi4uIERlY2xhcmUgZ2FtZSBPdmVyXG5mdW5jdGlvbiBnYW1lT3ZlcihwbGF5ZXJOYW1lKSB7XG4gIGNvbnN0IGdhbWVPdmVyQ29udCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZW92ZXItY29udGFpbmVyXCIpO1xuICBjb25zdCBtb2RhbE1zZyA9IGdhbWVPdmVyQ29udC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsLW1zZ1wiKTtcbiAgZ2FtZU92ZXJDb250LmNsYXNzTGlzdC5hZGQoXCJzaG93XCIpO1xuXG4gIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcIllvdSBXaW5cIik7XG4gICAgbW9kYWxNc2cudGV4dENvbnRlbnQgPSBcIllvdSBXaW4hXCI7XG4gIH0gZWxzZSBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiQWkgd2luc1wiKTtcbiAgICBtb2RhbE1zZy50ZXh0Q29udGVudCA9IFwiWW91IExvc2UhXCI7XG4gIH1cblxuICAvLyBBY2Nlc3MgcGxheSBhZ2FpbiBidXR0b25cbiAgY29uc3QgcGxheUFnYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5LWFnYWluXCIpO1xuXG4gIHBsYXlBZ2FpbkJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcmVzZXRHYW1lKTtcbn1cblxuZnVuY3Rpb24gaXNHYW1lT3ZlcihwbGF5ZXJOYW1lKSB7XG4gIGxldCBpc1N1bms7XG4gIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICBpc1N1bmsgPSBhaS5hbGxTdW5rKCk7XG4gIH0gZWxzZSBpZiAocGxheWVyTmFtZSA9PT0gXCJwbGF5ZXJcIikge1xuICAgIGlzU3VuayA9IHBsYXllci5hbGxTdW5rKCk7XG4gIH1cbiAgcmV0dXJuIGlzU3Vuaztcbn1cblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGNvbnN0IGdhbWVQYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lcGxheS1wYWdlXCIpO1xuICBjb25zdCBvcHBUYWJsZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIub3Bwb25lbnQtdGFibGVcIik7XG4gIGNvbnN0IHlvdXJUYWJsZSA9IGdhbWVQYWdlLnF1ZXJ5U2VsZWN0b3IoXCIueW91ci10YWJsZVwiKTtcblxuICBmdW5jdGlvbiBpbml0VHVybigpIHtcbiAgICBjb25zdCBwbGF5ZXJzID0gW1wicGxheWVyXCIsIFwiYWlcIl07XG4gICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcbiAgICByZXR1cm4gcGxheWVyc1tpbmRleF07XG4gIH1cblxuICBmdW5jdGlvbiBkaXNhYmxlT3BwVGFibGUoKSB7XG4gICAgY29uc3QgY2VsbHMgPSBvcHBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgb3BwVGFibGUuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgY2VsbENvcHkgPSBjZWxsO1xuICAgICAgY2VsbENvcHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gZW5hYmxlT3BwVGFibGUoKSB7XG4gICAgY29uc3QgY2VsbHMgPSBvcHBUYWJsZS5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYmxlLWNlbGxcIik7XG4gICAgb3BwVGFibGUuc3R5bGUub3BhY2l0eSA9IFwiMC41XCI7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY29uc3QgY2VsbENvcHkgPSBjZWxsO1xuICAgICAgY2VsbENvcHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwiYWxsXCI7XG4gICAgfSk7XG4gIH1cblxuICAvLyBTZXQgaW5pdGlhbCB0dXJuXG4gIGxldCB0dXJuID0gaW5pdFR1cm4oKTtcbiAgLy8gY29uc29sZS5sb2coJ2luaXRpYWwgdHVybiBpcycsIHR1cm4pXG4gIGZ1bmN0aW9uIHRvZ2dsZVR1cm4oKSB7XG4gICAgaWYgKHR1cm4gPT09IFwiYWlcIikgdHVybiA9IFwicGxheWVyXCI7XG4gICAgZWxzZSB0dXJuID0gXCJhaVwiO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlU2hpcFN0YXR1cyhwbGF5ZXJOYW1lLCBzaGlwTmFtZSkge1xuICAgIGlmIChwbGF5ZXJOYW1lID09PSBcImFpXCIpIHtcbiAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHNoaXAgaGl0IGNvdW50XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInBsYXllck5hbWUgLCBzaGlwTmFtZVwiLCBwbGF5ZXJOYW1lLCBzaGlwTmFtZSk7XG4gICAgICBhaVtzaGlwTmFtZV0uaGl0KCk7XG4gICAgICAvLyBjaGVjayBpZiBzaGlwIHN1bmtcbiAgICAgIGFpW3NoaXBOYW1lXS5pc1N1bmsoKTtcbiAgICB9IGVsc2UgaWYgKHBsYXllck5hbWUgPT09IFwicGxheWVyXCIpIHtcbiAgICAgIC8vIFVwZGF0ZSBjdXJyZW50IHNoaXAgaGl0IGNvdW50XG4gICAgICBwbGF5ZXJbc2hpcE5hbWVdLmhpdCgpO1xuICAgICAgLy8gY2hlY2sgaWYgc2hpcCBzdW5rXG4gICAgICBwbGF5ZXJbc2hpcE5hbWVdLmlzU3VuaygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIHBsYXkgYWkgdHVyblxuICBmdW5jdGlvbiBhaVR1cm4oKSB7XG4gICAgbGV0IHBvc2l0aW9uID0gYWkuZ2V0SGl0Q29vcmQoKTtcbiAgICB3aGlsZSAoIWFpLmlzQXR0YWNrVmFsaWQocG9zaXRpb24pKSB7XG4gICAgICBwb3NpdGlvbiA9IGFpLmdldEhpdENvb3JkKCk7XG4gICAgfVxuICAgIC8vIGNvbnNvbGUubG9nKFwiYWkgYXR0YWNrIHBvc2l0aW9uIGlzOiBcIiwgcG9zaXRpb24pO1xuICAgIC8vIEdvdCB2YWxpZCBwb3NpdGlvbiB3aGljaCBpcyBlaXRoZXIgc2hpcCBwb3NpdGlvbiBvciBlbXB0eSBjZWxsXG4gICAgY29uc3QgY2VsbFN0YXR1cyA9IHBsYXllci5nYW1lQm9hcmQucmVjZWl2ZUF0dGFjayhwb3NpdGlvbik7XG4gICAgLy8gY29uc29sZS5sb2coXCJhbmQgY2VsbFN0YXR1cyBpc1wiLCBjZWxsU3RhdHVzKTtcbiAgICBpZiAoY2VsbFN0YXR1cyAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAvLyBhdHRhY2sgaXMgb24gdGhlIHNoaXBcbiAgICAgIGNvbnN0IHNoaXBOYW1lID0gY2VsbFN0YXR1cztcbiAgICAgIC8vIFVwZGF0ZSBzaGlwIGhpdCBzdGF0dXNcbiAgICAgIHVwZGF0ZVNoaXBTdGF0dXMoXCJwbGF5ZXJcIiwgc2hpcE5hbWUpO1xuICAgICAgY29uc3QgbG9zZSA9IGlzR2FtZU92ZXIoXCJwbGF5ZXJcIik7XG4gICAgICBpZiAobG9zZSkgZ2FtZU92ZXIoXCJwbGF5ZXJcIik7XG4gICAgfVxuICAgIGNvbnN0IHRhcmdldENlbGwgPSB5b3VyVGFibGUucm93c1twb3NpdGlvblswXV0uY2VsbHNbcG9zaXRpb25bMV1dO1xuICAgIC8vIFVwZGF0ZSBjZWxsIHN0YXR1cyBtaXNzLCBoaXQgZXRjIGluIHRoZSBET01cbiAgICBkb21NYW5pcHVsYXRpb24udXBkYXRlQ2VsbEhpdCh0YXJnZXRDZWxsLCBjZWxsU3RhdHVzKTtcbiAgICAvLyBGaW5hbGx5IGVuYWJsZSBvcHBvbmVudCdzIHRhYmxlXG4gICAgZW5hYmxlT3BwVGFibGUoKTtcbiAgICAvLyBUb2dnbGUgdHVyblxuICAgIHRvZ2dsZVR1cm4oKTtcbiAgICAvLyBUaGVuIGRpc3BsYXkgdGhlIG1lc3NhZ2VcbiAgICBkb21NYW5pcHVsYXRpb24udHVybk1lc3NhZ2UodHVybik7XG4gIH1cblxuICAvLyBQbGF5IGZpcnN0IHR1cm5cbiAgZG9tTWFuaXB1bGF0aW9uLnR1cm5NZXNzYWdlKHR1cm4pO1xuICBpZiAodHVybiA9PT0gXCJhaVwiKSB7XG4gICAgLy8gSWYgZmlyc3QgdHVybiBpcyBvZiBhaSB0aGVuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBhaVR1cm4oKTtcbiAgICB9LCAxKTtcbiAgfVxuXG4gIC8vIFRPRE8uLi5cbiAgZnVuY3Rpb24gcGxheWVyVHVybihlKSB7XG4gICAgLy8gY29uc29sZS5sb2coXCJwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkXCIsIHBsYXllci5nYW1lQm9hcmQuYm9hcmQpO1xuICAgIC8vIERpc3BsYXkgdHVybiBtZXNzYWdlXG4gICAgLy8gZG9tTWFuaXB1bGF0aW9uLnR1cm5NZXNzYWdlKHR1cm4pO1xuXG4gICAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIudGFibGUtY2VsbFwiKSkge1xuICAgICAgY29uc3QgdGFyZ2V0Q2VsbCA9IGUudGFyZ2V0O1xuICAgICAgY29uc3QgcG9zaXRpb24gPSBbXTtcbiAgICAgIHBvc2l0aW9uWzBdID0gTnVtYmVyKHRhcmdldENlbGwuZ2V0QXR0cmlidXRlKFwiZGF0YS1yb3dcIikpO1xuICAgICAgcG9zaXRpb25bMV0gPSBOdW1iZXIodGFyZ2V0Q2VsbC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNvbFwiKSk7XG4gICAgICBjb25zdCBjZWxsU3RhdHVzID0gYWkuZ2FtZUJvYXJkLnJlY2VpdmVBdHRhY2socG9zaXRpb24pO1xuICAgICAgY29uc29sZS5sb2coXCJjZWxsU3RhdHVzXCIsIGNlbGxTdGF0dXMpO1xuICAgICAgLy8gVXBkYXRlIGNlbGwgaW4gdGhlIERPTVxuICAgICAgZG9tTWFuaXB1bGF0aW9uLnVwZGF0ZUNlbGxIaXQodGFyZ2V0Q2VsbCwgY2VsbFN0YXR1cyk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHNoaXAgZ290IGhpdFxuICAgICAgaWYgKGNlbGxTdGF0dXMgIT09IFwibWlzc1wiICYmIGNlbGxTdGF0dXMgIT09IFwiaGl0XCIgJiYgY2VsbFN0YXR1cyAhPT0gXCJlbXB0eVwiKSB7XG4gICAgICAgIC8vIFNoaXAgZm91bmRcbiAgICAgICAgY29uc3Qgc2hpcE5hbWUgPSBjZWxsU3RhdHVzO1xuXG4gICAgICAgIHVwZGF0ZVNoaXBTdGF0dXMoXCJhaVwiLCBzaGlwTmFtZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIENoYW5nZSB0dXJuIGlmIHNob3QgZ290IGhpdCBvciBtaXNzXG4gICAgICBpZiAoKGNlbGxTdGF0dXMgIT09IFwibWlzc1wiICYmIGNlbGxTdGF0dXMgIT09IFwiaGl0XCIpIHx8IGNlbGxTdGF0dXMgPT09IFwiZW1wdHlcIikge1xuICAgICAgICAvLyBDaGVjayB3aGV0aGVyIGdhbWUgaXMgb3ZlciBvciBub3RcbiAgICAgICAgY29uc3QgbG9zZSA9IGlzR2FtZU92ZXIoXCJhaVwiKTtcbiAgICAgICAgaWYgKGxvc2UpIHtcbiAgICAgICAgICBnYW1lT3ZlcihcImFpXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFRvZ2dsZSB0dXJuXG4gICAgICAgICAgdG9nZ2xlVHVybigpO1xuICAgICAgICAgIC8vIERpc3BsYXkgdHVybiBtZXNzYWdlXG4gICAgICAgICAgZG9tTWFuaXB1bGF0aW9uLnR1cm5NZXNzYWdlKHR1cm4pO1xuICAgICAgICAgIC8vIERpc2FibGUgb3Bwb25lbnQgdGFibGUgZHVyaW5nIGFpJ3MgdHVyblxuICAgICAgICAgIGRpc2FibGVPcHBUYWJsZSgpO1xuICAgICAgICAgIC8vIENhbGwgYWkncyB0dXJuXG4gICAgICAgICAgc2V0VGltZW91dChhaVR1cm4sIDEpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyhgZmlyZSBoaXQgYXQgc2hpcCAke3NoaXBOYW1lfSwgd2l0aCB0YXJnZXQgY2VsbCBgLCB0YXJnZXRDZWxsKTtcbiAgICB9XG4gICAgLy8gY29uc29sZS5sb2coXCJhaSBib2FyZCBhZnRlciBhdHRhY2tcIiwgYWkuZ2FtZUJvYXJkLmJvYXJkKTtcbiAgfVxuXG4gIC8vIExpc3RlbiBwbGF5ZXIncyBjbGljayBvbiBvcHBvbmVudCdzIHRhYmxlXG4gIG9wcFRhYmxlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwbGF5ZXJUdXJuKTtcbn1cblxuY29uc3QgcGxheUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1zdGFydFwiKTtcblxuLy8gRGVmaW5lIHNoaXBzIG5hbWVzXG5jb25zdCBzaGlwTmFtZXMgPSBbXG4gIFtcImMxXCIsIFwiQ2FycmllclwiLCA0XSxcbiAgW1wiZDFcIiwgXCJEaXN0cm95ZXJcIiwgM10sXG4gIFtcImQyXCIsIFwiRGlzdHJveWVyXCIsIDNdLFxuICBbXCJwMVwiLCBcIlBhdHJvbCBCb2F0XCIsIDJdLFxuICBbXCJwMlwiLCBcIlBhdHJvbCBCb2F0XCIsIDJdLFxuICBbXCJwM1wiLCBcIlBhdHJvbCBCb2F0XCIsIDJdLFxuICBbXCJzMVwiLCBcIlNpbmdsZXRvblwiLCAxXSxcbiAgW1wiczJcIiwgXCJTaW5nbGV0b25cIiwgMV0sXG4gIFtcInMzXCIsIFwiU2luZ2xldG9uXCIsIDFdLFxuICBbXCJzNFwiLCBcIlNpbmdsZXRvblwiLCAxXSxcbl07XG5cbmZ1bmN0aW9uIG1hbmFnZVNoaXBzUGxhY2VtZW50KCkge1xuICAvLyBIaWRlIGluaXRpYWwgcGFnZSB3aGVuIHBsYXkgYnV0dG9uIGNsaWNrZWRcbiAgZG9tTWFuaXB1bGF0aW9uLmhpZGVJbml0UGFnZSgpO1xuICAvLyBTaG93IHNoaXAgcGxhY2VtZW50IHBhZ2VcbiAgZG9tTWFuaXB1bGF0aW9uLnNob3dTaGlwUGFnZSgpO1xuICBjb25zdCByYW5kSW1nID1uZXcgSW1hZ2UoKVxuICByYW5kSW1nLnNyYyA9IHJhbmRvbUljb247XG4gIHJhbmRJbWcuY2xhc3NMaXN0LmFkZChcInJhbmRvbS1pY29uXCIpO1xuICByYW5kSW1nLmFsdCA9IFwiUmFuZG9tIEljb25cIlxuICBjb25zdCByb3RhdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnJvdGF0ZS1idG5cIik7XG4gIHJvdGF0ZUJ0bi5hcHBlbmRDaGlsZChyYW5kSW1nKVxuICAvLyBjb25zb2xlLmxvZyhcInNoaXBOYW1lcyBJbnNpZGVcIiwgc2hpcE5hbWVzKTtcbiAgLy8gQXV0byBmaWxsIGFpIGJvYXJkIDJEIGFycmF5IHdpdGggc2hpcHNcbiAgYWkuZ2FtZUJvYXJkLmF1dG9GaWxsU2hpcHNCb2FyZChzaGlwTmFtZXMuc2xpY2UoKSk7XG4gIC8vIExldCBwbGF5ZXIgcGxhY2Ugc2hpcHMgb24gdGhlIGJvYXJkXG4gIGRvbU1hbmlwdWxhdGlvbi5wbGFjZVNoaXBzKHNoaXBOYW1lcy5zbGljZSgpLCBnYW1lTG9vcCk7XG5cbiAgLy8gY29uc29sZS5sb2coXCJwbGF5ZXIuZ2FtZUJvYXJkLmJvYXJkXCIsIHBsYXllci5nYW1lQm9hcmQuYm9hcmQpO1xuICAvLyBjb25zb2xlLmxvZyhcImFpLmdhbWVCb2FyZC5zaGlwc0Nvb3JkXCIsIGFpLmdhbWVCb2FyZC5zaGlwc0Nvb3JkKTtcbiAgLy8gRW50ZXIgZ2FtZSBsb29wIHRvIHN0YXJ0IHRoZSBnYW1lXG4gIC8vIGdhbWVMb29wKCk7XG59XG5cbi8vIEluaXRpYWxseSBoaWRlIGFuZCBnYW1lcGxheSBwYWdlXG4vLyBkb21NYW5pcHVsYXRpb24uaGlkZVNoaXBQYWdlKCk7XG5kb21NYW5pcHVsYXRpb24uaGlkZUdhbWVQYWdlKCk7XG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBtYW5hZ2VTaGlwc1BsYWNlbWVudCk7XG4iXSwibmFtZXMiOlsiR2FtZUJvYXJkIiwiU2hpcCIsInBsYXllciIsImFpIiwibmV3QUkiLCJjMSIsImQxIiwiZDIiLCJwMSIsInAyIiwicDMiLCJzMSIsInMyIiwiczMiLCJzNCIsImdhbWVCb2FyZCIsImFsbFN1bmsiLCJzaGlwTmFtZXMiLCJmb3JFYWNoIiwic2hpcCIsInN1bmsiLCJyZXNldFNoaXBzIiwicmVzZXRTaGlwIiwiaXNBdHRhY2tWYWxpZCIsInBvc2l0aW9uIiwicm93IiwiY29sIiwiY2VsbFN0YXR1cyIsImJvYXJkIiwiZ2V0SGl0Q29vcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJkb21NYW5pcHVsYXRpb24iLCJyZXNldFRhYmxlcyIsInlvdXJUYWJsZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIm9wcFRhYmxlIiwic2V0U2hpcFRhYmxlIiwieW91ckNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsIm9wcENlbGxzIiwic2V0U2hpcENlbGxzIiwiY2VsbCIsIm1vZGlmaWVkQ2VsbCIsInNldEF0dHJpYnV0ZSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwicmVtb3ZlU2hpcHMiLCJnYW1lUGFnZSIsInNoaXBQYWdlIiwic2hpcHNPblNoaXBQYWdlIiwic2hpcHNPbkdhbWVQYWdlIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVTaGlwIiwic2hvcnROYW1lIiwibGVuZ3RoIiwib3JpZW50IiwiY3JlYXRlRWxlbWVudCIsInRvcCIsImxlZnQiLCJ3aWR0aCIsImNvbmNhdCIsImhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsImNoYW5nZU9yaWVudGF0aW9uIiwic2hpcFBsYWNlUGFnZSIsImN1cnJlbnRTaGlwIiwiZ2V0QXR0cmlidXRlIiwidXBkYXRlQ2VsbFZhbCIsInBsYXllck5hbWUiLCJzaGlwTmFtZSIsInNoaXBFbmQiLCJjb2x1bW4iLCJpIiwicm93cyIsImNlbGxzIiwiYXV0b1BsYWNlU2hpcHMiLCJzaGlwc0Nvb3JkIiwic2hpcERhdGEiLCJlbmQiLCJnYW1lUGxheVBhZ2UiLCJhcHBlbmRDaGlsZCIsInJvd0VuZCIsImNvbEVuZCIsImNlbGxFbmQiLCJjZWxsUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImdhbWVQYWdlUmVjdCIsInNoaXBSZWN0IiwiY2VsbFBvc1giLCJyaWdodCIsImNlbGxQb3NZIiwiYm9yZGVyIiwiYm90dG9tIiwicGxhY2VTaGlwcyIsImNhbGxCYWNrIiwicmVtb3ZlIiwiY29uc29sZSIsImxvZyIsInNoaXBBcnIiLCJzaGlmdCIsInNoaXBNZXNzYWdlIiwiaW5uZXJIVE1MIiwiaXNQbGFjZWQiLCJkcmFnU2hpcCIsImUiLCJzaGlwUGFnZVJlY3QiLCJ0YXJnZXQiLCJtYXRjaGVzIiwiY3VycmVudENlbGwiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsImNsaWVudFgiLCJjbGllbnRZIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJvdGF0ZUJ0biIsImRyb3BTaGlwIiwicGFyc2VJbnQiLCJpc1ZhbGlkUG9zIiwic2hpcFgiLCJzaGlwWSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ1cGRhdGVCb2FyZCIsInNsaWNlIiwiaGlkZUluaXRQYWdlIiwiaW5pdFBhZ2UiLCJoaWRlU2hpcFBhZ2UiLCJzaG93U2hpcFBhZ2UiLCJzaG93R2FtZVBhZ2UiLCJoaWRlR2FtZVBhZ2UiLCJoaWRlTW9kYWxDb250YWluZXIiLCJtb2RhbENvbnRhaW5lciIsInR1cm5NZXNzYWdlIiwidHVybiIsIm1lc3NhZ2UiLCJ0ZXh0Q29udGVudCIsInVwZGF0ZUNlbGxIaXQiLCJoaXRTdGF0dXMiLCJ0YXJnZXRDZWxsIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjIiwiX3BsYWNlU2luZ2xlU2hpcCIsIl9nZXRTdGFydEluZGV4IiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJidWlsZEJvYXJkIiwiciIsImMiLCJwdXNoIiwicmVzZXRCb2FyZCIsImJvYXJkUm93IiwidXBkYXRlU2hpcHNDb29yZCIsInN0YXJ0IiwiYXV0b0ZpbGxTaGlwc0JvYXJkIiwic2hpcHNBcnIiLCJfdGhpcyIsIm9yaWVudEFyciIsImluZGV4IiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdldCIsIl9wbGFjZVNpbmdsZVNoaXAyIiwiY2FsbCIsInJlY2VpdmVBdHRhY2siLCJfZ2V0U3RhcnRJbmRleDIiLCJpbmRleEZvdW5kIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdlIiwiX2NsYXNzUHJpdmF0ZU1ldGhvZEdlMiIsIl9zbGljZWRUb0FycmF5IiwiZGVmYXVsdCIsIm5ld1BsYXllciIsIm5hbWUiLCJoaXRDb3VudCIsImlzU3VuayIsImhpdCIsInJhbmRvbUljb24iLCJyZXNldEdhbWUiLCJtYW5hZ2VTaGlwc1BsYWNlbWVudCIsImdhbWVPdmVyIiwiZ2FtZU92ZXJDb250IiwibW9kYWxNc2ciLCJwbGF5QWdhaW5CdG4iLCJpc0dhbWVPdmVyIiwiZ2FtZUxvb3AiLCJpbml0VHVybiIsInBsYXllcnMiLCJkaXNhYmxlT3BwVGFibGUiLCJvcGFjaXR5IiwiY2VsbENvcHkiLCJwb2ludGVyRXZlbnRzIiwiZW5hYmxlT3BwVGFibGUiLCJ0b2dnbGVUdXJuIiwidXBkYXRlU2hpcFN0YXR1cyIsImFpVHVybiIsImxvc2UiLCJzZXRUaW1lb3V0IiwicGxheWVyVHVybiIsIk51bWJlciIsInBsYXlCdG4iLCJyYW5kSW1nIiwiSW1hZ2UiLCJzcmMiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9