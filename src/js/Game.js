class Game {
  /**
   * 游戏配置
   * @param {*} options
   * @backSpeed 背景移动速度
   * @groundSpeed 地板移动速度
   * @pipes [] 每一项 {height,direction}
   */
  constructor({ backSpeed, groundSpeed, pipes = [] }, startDom) {
    this.back = new BackGround(backSpeed);
    this.ground = new Ground(groundSpeed);
    this.bird = new Bird();
    this.pipes = pipes.map(
      ({ height, direction }, index) =>
        new Pipe(
          height,
          index * Pipe.PipeWidth + wrapStyleWidth,
          groundSpeed,
          direction
        )
    );

    this.startDom = startDom;
    this.index = 0;
    this.addEvent();
  }

  start() {
    this.timer = setInterval(() => {
      this.back.move(16 / 1000);
      this.ground.move(16 / 1000);
      this.bird.move(16 / 1000);
      this.pipes.forEach(item => item && item.move(16 / 1000));
      // 判断游戏是否结束
      this.judgment();
    }, 16);
  }

  addEvent() {
    this.startDom.addEventListener("click", () => {
      this.start();
    });
  }

  judgment() {
    const birdLeft = parseInt(this.bird.left) + parseInt(this.bird.width);
    const birdTop = parseInt(this.bird.top) + parseInt(this.bird.height) + 5;
    let judePipe;
    for (; this.index < this.pipes.length; this.index++) {
      if (this.pipes[this.index].left + Pipe.PipeWidth > birdLeft) {
        judePipe = this.pipes[this.index];
        break;
      }
    }

    if (judePipe && birdLeft >= judePipe.left) {
      if (judePipe.direction === "down") {
        if (birdTop - judePipe.top >= 0) {
          clearInterval(this.timer);
        }
      } else {
        if (judePipe.top - birdTop >= 0) {
          clearInterval(this.timer);
        }
      }
    }
  }
}

const options = {
  backSpeed: 50,
  groundSpeed: 100,
  pipes: [
    { height: 100, direction: "down" },
    { height: 200, direction: "down" },
    { height: 300, direction: "down" },
    { height: 100, direction: "up" }
  ]
};

var game = new Game(options, startDom);
