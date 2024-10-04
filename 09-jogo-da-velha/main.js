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

let currentPlayer = player1;
let gameOver = false;

const handleClick = (event) => {
  const position = event.target.id;
  const element = document.getElementById(position);

  if (element.innerHTML === "" && !gameOver) {
    element.innerHTML = currentPlayer;
    checkWinner();
    if (!gameOver) togglePlayer();
  }
};

const resetGame = () => {
  board.forEach((element) => {
    element.innerHTML = "";
    element.style.backgroundColor = "white";
  });
  gameOver = false;
  currentPlayer = player1;
  divCurrentPlayer.innerHTML = `É a vez do jogador ${currentPlayer}`;
};

const togglePlayer = () => {
  currentPlayer = currentPlayer === player1 ? player2 : player1;
  divCurrentPlayer.innerHTML = `É a vez do jogador ${currentPlayer}`;
};

const checkWinner = () => {
  positions.forEach((position) => {
    if (
      board[position[0]].innerHTML === currentPlayer &&
      board[position[1]].innerHTML === currentPlayer &&
      board[position[2]].innerHTML === currentPlayer
    ) {
      gameOver = true;
      position.forEach((i) => (board[i].style.backgroundColor = "green"));
      divCurrentPlayer.innerHTML = `O jogador ${currentPlayer} venceu!`;
      setTimeout(() => {
        alert(`O jogador ${currentPlayer} venceu!`);
      }, 200);
      return;
    }
  });
  if (!gameOver && board.every((element) => element.innerHTML !== "")) {
    gameOver = true;
    alert(`Deu velha!`);
    divCurrentPlayer.innerHTML = `Deu velha!`;
  }
};

board.forEach((element) => {
  element.addEventListener("click", handleClick);
});

reiniciar.addEventListener("click", resetGame);
