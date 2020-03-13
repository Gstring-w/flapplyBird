class Square {
  constructor(width, height, left, top, xSpeed, ySpeed, dom) {
    this.width = width;
    this.height = height;
    this.left = left;
    this.top = top;
    this.xSpeed = xSpeed;
    this.ySpeed = ySpeed;
    this.dom = dom;
  }

  /**
   * 控制移动
   * @param {*} duration
   */
  move(duration) {
    if (+this.ySpeed === 0 && +this.xSpeed === 0) {
      return;
    }

    this.left = parseFloat(this.left) + this.xSpeed * duration;
    this.top = parseFloat(this.top) + this.ySpeed * duration;

    if (this.onMove) {
      this.onMove();
    }
    this.render();
  }

  render() {
    this.dom.style.width = this.width + "px";
    this.dom.style.height = this.height + "px";
    this.dom.style.left = parseInt(this.left) + "px";
    this.dom.style.top = parseInt(this.top) + "px";
  }
}
