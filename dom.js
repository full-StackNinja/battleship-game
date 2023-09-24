export default (function domManipulation() {
  function resetGrid(tableName) {
    if (tableName === "your-table") {
      const gridTable = document.querySelector(".your-table");
      const tableCells = gridTable.querySelectorAll(".table-cell");
      // console.log('table cells', tableCells)
      tableCells.forEach((cell) => {
        // console.log("cell", cell);
        cell.setAttribute("data-value", "empty");
        // console.log("cell", cell);
      });
    }
  }

  function createShip(shipClass, length) {
    const ship = document.createElement("div");
    ship.style.position = "absolute";
    ship.style.top = "0";
    ship.style.left = "0";
    ship.style.width = `${2 * length}vw`;
    ship.style.heigth = "2vw";

    ship.classList.add("moving");
    ship.setAttribute("data-width", `${2 * length}vw`);
    ship.setAttribute("data-height", "2vw");
    ship.setAttribute("data-length", `${length}`);
    ship.setAttribute("data-orient", "x");
    ship.classList.add(shipClass);
    return ship;
  }

  function changeOrientation() {
    const shipPlacePage = document.querySelector(".ship-placement-page");
    const currentShip = shipPlacePage.querySelector(".moving");
    if (currentShip.getAttribute("data-orient") === "x") {
      currentShip.setAttribute("data-orient", "y");
      const width = currentShip.getAttribute("data-width");
      const height = currentShip.getAttribute("data-height");
      currentShip.style.width = height;
      currentShip.style.height = width;
      currentShip.setAttribute("data-height", width);
      currentShip.setAttribute("data-width", height);
    } else if (currentShip.getAttribute("data-orient") === "y") {
      currentShip.setAttribute("data-orient", "x");
      const width = currentShip.getAttribute("data-width");
      const height = currentShip.getAttribute("data-height");
      currentShip.style.width = height;
      currentShip.style.height = width;
      currentShip.setAttribute("data-height", width);
      currentShip.setAttribute("data-width", height);
    }
  }

  function placeShip(shipNames) {
    if (shipNames.length === 0) return 0;
    const shipArr = shipNames.shift();
    const shipName = shipArr[0];
    const length = shipArr[1];

    const shipShortNames = {
      Carrier: "c",
      Distroyer: "d",
      "Patrol Boat": "p",
      Singleton: "s",
    };
    const shipMessage = document.querySelector(".ship-name");
    shipMessage.innerHTML = "Place ".concat(shipName).concat(" on the board");
    let isPlaced = false;
    const ship = createShip(shipShortNames[shipName], length);
    const shipPlacePage = document.querySelector(".ship-placement-page");
    shipPlacePage.appendChild(ship);

    function dragShip(e) {
      if (!isPlaced) {
        const shipPageRect = shipPlacePage.getBoundingClientRect();
        if (e.target.matches(".table-cell")) {
          ship.style.backgroundColor = "rgba(0, 0, 0, 0.2)";
          const currentCell = e.target;
          const cellRect = currentCell.getBoundingClientRect();
          ship.style.left = `calc(${cellRect.right}rem  - ${shipPageRect.left}rem - ${ship.clientWidth}rem - 1.5rem )`;
          ship.style.top = `calc(${cellRect.bottom}rem - ${shipPageRect.top}rem - ${ship.clientHeight}rem - 1rem)`;
        } else {
          ship.style.left = `${e.clientX - shipPageRect.left - ship.clientWidth}rem`;
          ship.style.top = `${e.clientY - shipPageRect.top - ship.clientHeight}rem`;
        }
      }
    }
    // Move ship along with the mouse
    shipPlacePage.addEventListener("mousemove", dragShip);

    // Change orientation of ship
    const rotateBtn = shipPlacePage.querySelector(".rotate-btn");
    rotateBtn.addEventListener("click", changeOrientation);

    function dropShip(e) {
      if (e.target.matches(".table-cell")) {
        const currentCell = e.target;

        const row = parseInt(currentCell.getAttribute("data-row"), 10);
        const col = parseInt(currentCell.getAttribute("data-col"), 10);
        const shipLen = parseInt(ship.getAttribute("data-length"), 10);
        if (ship.getAttribute("data-orient") === "x") {
          if (col + 1 - shipLen >= 0) {
            const shipRect = ship.getBoundingClientRect();
            const shipPageRect = shipPlacePage.getBoundingClientRect();
            const shipX = shipRect.left - shipPageRect.left;
            const shipY = shipRect.top - shipPageRect.top;

            ship.style.left = `${shipX}rem`;
            ship.style.top = `calc(${shipY}rem - 1rem)`;
            isPlaced = true;
            ship.classList.add("placed");
            ship.classList.remove("moving");
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            placeShip(shipNames.slice());
          }
        } else if (ship.getAttribute("data-orient") === "y") {
          if (row + 1 - shipLen >= 0) {
            const shipRect = ship.getBoundingClientRect();
            const shipPageRect = shipPlacePage.getBoundingClientRect();
            const shipX = shipRect.left - shipPageRect.left;
            const shipY = shipRect.top - shipPageRect.top;

            ship.style.left = `${shipX}rem`;
            ship.style.top = `calc(${shipY}rem - 1rem)`;
            isPlaced = true;
            ship.classList.add("placed");
            ship.classList.remove("moving");
            shipPlacePage.removeEventListener("mousemove", dragShip);
            shipPlacePage.removeEventListener("click", dropShip);
            placeShip(shipNames.slice());
          }
        }
      }
    }
    // Place ship on the board on mouse click
    shipPlacePage.addEventListener("click", dropShip);
  }

  function hideInitPage() {
    const initPage = document.querySelector(".initial-page");
    initPage.classList.add("hide");
  }
  function hideShipPage() {
    const shipPage = document.querySelector(".ship-placement-page");
    shipPage.classList.add("hide");
  }
  return {
    resetGrid,
    placeShip,
    hideInitPage,
    hideShipPage,
  };
})();
