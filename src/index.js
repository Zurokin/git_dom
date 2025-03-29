import "./style.css";
import goblinImage from "./goblin.png";

const gameContainer = document.getElementById("game-container");

// Создание игрового поля
const cells = [];
for (let i = 0; i < 16; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  gameContainer.appendChild(cell);
  cells.push(cell);
}

// Создание гоблина
const goblin = document.createElement("img");
goblin.src = goblinImage;
goblin.classList.add("goblin");

// Функция для перемещения гоблина
let currentIndex = -1;
function moveGoblin() {
  let newIndex;
  do {
    newIndex = Math.floor(Math.random() * 16);
  } while (newIndex === currentIndex);

  if (currentIndex !== -1) {
    cells[currentIndex].innerHTML = "";
  }
  cells[newIndex].appendChild(goblin);
  currentIndex = newIndex;
}

setInterval(moveGoblin, 1000);
