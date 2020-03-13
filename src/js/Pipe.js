class Pipe extends Square {
  constructor(height, left, speed, direction) {
    super(
      Pipe.PipeWidth,
      height,
      left,
      direction === "down" ? contentHeight - height : 0,
      -speed,
      0,
      Pipe.CreateElement(direction)
    );
    this.direction = direction
  }

  static CreateElement = function(direction) {
    const dom = document.createElement("div");
    dom.classList.add(Pipe.PipeDirMapClass[direction]);
    return dom;
  };
  static PipeWidth = 130;
  static PipeDirMapClass = {
    down: "pipeDown",
    up: "pipeUp"
  };

  onMove() {
    if (parseInt(this.left) + parseInt(this.width) <= 0) {
      this.dom.remove();
    }
    if (
      parseInt(this.left) <= groundStyleWidth &&
      parseInt(this.left) + parseInt(this.width) > 0
    ) {
      wrapperDom.append(this.dom);
    }

  }

  render() {
    this.dom.style.left = parseInt(this.left) + "px";
    this.dom.style.height = parseInt(this.height) + "px";
  }
}
