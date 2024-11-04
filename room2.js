const grid = document.querySelector(".grid");
const number = document.querySelector(".number");

const randomIndex = Math.floor(Math.random() * 9);

const row = Math.floor(randomIndex / 3) + 1; // + 1 bc index starts at 0
const col = (randomIndex % 3) + 1; 

number.style.gridRow = row;
number.style.gridColumn = col;