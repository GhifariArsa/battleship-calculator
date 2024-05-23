class Cell {
  constructor(x, y, i, j, selected, ship, probVal) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.j = j;
    this.selected = selected;
    this.ship = false;
    this.count = 0;
    this.probVal = 0;
  }

  show() {
    if (this.selected && this.count % 3 == 1) {
      fill(0, 255, 0);
    } else if (this.selected && this.count % 3 == 2) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }

    if (this.ship) {
      fill(50, 20);
    }
    rect(this.x, this.y, SIZE / 10, SIZE / 10);
  }

  mouseInside(px, py) {
    return (
      px > this.x &&
      px < this.x + SIZE / 10 &&
      py > this.y &&
      py < this.y + SIZE / 10
    );
  }

  pressed() {
    this.selected = true;
    this.count++;
  }

  setShip() {
    this.ship = true;
  }
}
