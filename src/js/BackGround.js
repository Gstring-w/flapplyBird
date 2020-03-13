class BackGround extends Square {
  constructor(xSpeed) {
    super(
      backStyle.width,
      backStyle.height,
      backStyle.left,
      backStyle.top,
      -xSpeed,
      0,
      backDom
    );
  }

  onMove() {
    if (-parseFloat(this.left) >= wrapStyleWidth) {
      this.left = 0;
    }
  }
}
