const board = document.querySelector("#board");
const colors = [
  "#ADFF2F",
  "#7FFF00",
  "#00FF00",
  "#32CD32",
  "#98FB98",
  "#228B22",
  "#2E8B57",
  "#9ACD32",
];
const SQUARES_NAMBER = 650;

for (let i = 0; i < SQUARES_NAMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  square.addEventListener("mouseover", () => setColor(square));

  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
