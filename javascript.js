const gameboard = (function () {
  const initialBoard = [null, null, null, null, null, null, null, null, null];
  return { initialBoard };
})();

const Player = function (letter) {
  this.letter = letter;

  getLetter = function () {
    return letter;
  };
  return { getLetter };
};
const playerX = Player("X");

const board = gameboard.initialBoard;
const btns = Array.from(document.getElementsByClassName("field"));
let xCounter = 0;
let oCounter = 0;

// Update symbol counters
btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    xCounter = 0;
    oCounter = 0;
    for (i = 0; i < board.length; i++) {
      if (board[i] == "X") {
        xCounter++;
      }
    }
    for (i = 0; i < board.length; i++) {
      if (board[i] == "O") {
        oCounter++;
      }
    }
  })
);
// Print the correct symbol
btns.forEach((btn) =>
  btn.addEventListener("click", function () {
    if (btn.textContent !== "") {
      return;
    }
    let index = Number(this.dataset.num);
    let printSymbol = function (symbol) {
      board[index] = symbol;
      btn.textContent = symbol;
    };
    if (xCounter <= oCounter) {
      printSymbol("X");
    } else {
      printSymbol("O");
    }
  })
);
// 2 - quien juega
// 3 - evitar pisar
// 4 - determinar ganador / lista de combinaciones c/vez que alguien clickea
// 5 - deshabilitar button en cada field
// 6 - agregar reset / volver fields a null

// commit testing
