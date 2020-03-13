class Ground extends Square {
  constructor(xSpeed) {
    super(
      groundStyle.width,
      groundStyle.height,
      groundStyle.left,
      groundStyle.top,
      -xSpeed,
      0,
      groundDom
    );
  }

  onMove() {
    if (-parseFloat(this.left) >= wrapStyleWidth) {
      this.left = 0;
    }
  }
}
