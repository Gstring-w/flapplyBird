class Bird extends Square {
  constructor() {
    super(
      birdStyle.width,
      birdStyle.height,
      birdStyle.left,
      birdStyle.top,
      0,
      0,
      birdDom
    );

    this.g = 400; // 小鸟所受的重力
    this.swingStatus = 1; // 小鸟翅膀的初始值
    this.lastSwing = 1;
    this.fly();
  }

  move(duration) {
    if (this.top < 0) {
      this.top = 0;
    } else if (this.top + parseInt(this.height) >= contentHeight) {
      this.top = contentHeight - parseInt(this.height);
    } else {
      this.top = parseFloat(this.top) + duration * this.g;
    }
    super.render();

    this.swing();
  }

  swing() {
    if (Math.random() < 0.8) return;
    const lastSwing = `swing${this.lastSwing}`;
    const changeClassName = `swing${this.swingStatus}`;
    this.dom.classList.remove(lastSwing);
    this.dom.classList.add(changeClassName);
    this.lastSwing = this.swingStatus;
    this.swingStatus = ((this.swingStatus + 1) % 3) + 1;
  }

  fly() {
    document.addEventListener("keypress", e => {
      if (e.code === "Space") {
        this.top = parseInt(this.top) - 150;
      }
    });
  }
}
