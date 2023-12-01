const positions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const player1 = "X";
const player2 = "O";
const board = Array.from(document.getElementsByClassName("celula"));
const divCurrentPlayer = document.getElementById("currentPlayer");
const reiniciar = document.getElementById("reiniciar");
console.log(board);
let currentPlayer = player1;
let gameOver = false;

const handleClick = (event) => {
  const position = event.target.id;
  const element = document.getElementById(position);

  if (element.innerHTML === "" && !gameOver) {
    element.innerHTML = currentPlayer;
    checkWinner();
    togglePlayer();
  }
};

board.forEach((element) => {
  element.addEventListener("click", handleClick);
});

reiniciar.addEventListener("click", () => {
  board.forEach((element) => {
    element.innerHTML = "";
  });
  gameOver = false;
  currentPlayer = player1;
  divCurrentPlayer.innerHTML = `É a vez do jogador ${currentPlayer}`;
});

const togglePlayer = () => {
  if (gameOver) return;
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  divCurrentPlayer.innerHTML = `É a vez do jogador ${currentPlayer}`;
};

const checkWinner = () => {
  if (
    board[0].innerHTML !== "" &&
    board[1].innerHTML !== "" &&
    board[2].innerHTML !== "" &&
    board[3].innerHTML !== "" &&
    board[4].innerHTML !== "" &&
    board[5].innerHTML !== "" &&
    board[6].innerHTML !== "" &&
    board[7].innerHTML !== "" &&
    board[8].innerHTML !== ""
  ) {
    gameOver = true;
    alert(`Deu velha!`);
    divCurrentPlayer.innerHTML = `Deu velha!`;
  } else {
    positions.forEach((position) => {
      if (
        board[position[0]].innerHTML === currentPlayer &&
        board[position[1]].innerHTML === currentPlayer &&
        board[position[2]].innerHTML === currentPlayer
      ) {
        gameOver = true;
        alert(`O jogador ${currentPlayer} venceu!`);
        divCurrentPlayer.innerHTML = `O jogador ${currentPlayer} venceu!`;
      }
    });
  }
};
