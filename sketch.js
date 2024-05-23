let cells = [];
let SIZE = 400;

function createBoard(size) {
  const squareLength = size / 10;
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      const x = i * squareLength;
      const y = j * squareLength;

      let cell = new Cell(x, y, i, j, false);
      cells.push(cell);
    }
  }
}

function calculateBoard() {
  // for all ship sizes
  //
}

function placeShip() {
  cells[10 * 5 + 3].setShip();
  cells[10 * 5 + 4].setShip();
  cells[10 * 5 + 5].setShip();
}

function setup() {
  createCanvas(SIZE, SIZE);
  createBoard(SIZE);
}

function draw() {
  background(51);
  for (let cell of cells) {
    cell.show();
  }
}

function mousePressed() {
  placeShip();
  for (let cell of cells) {
    if (cell.mouseInside(mouseX, mouseY)) {
      console.log(`CELL ${cell.i}, ${cell.j}`);
      cell.pressed();
      break;
    }
  }
}
