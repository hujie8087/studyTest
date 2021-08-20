// 定义一个食物的类
export class Food {
  // 食物的元素
  element: HTMLElement;
  constructor() {
    // 获取页面中的food元素并赋值给element
    this.element = document.getElementById("food")!;
  }
  // 获取食物元素的坐标的方法
  get x() {
    return this.element.offsetLeft;
  }
  get y() {
    return this.element.offsetTop;
  }
  // 生成新的坐标赋值给食物元素
  change() {
    let x = Math.round(Math.random() * 29) * 10;
    let y = Math.round(Math.random() * 29) * 10;
    this.element.style.left = x + "px";
    this.element.style.top = y + "px";
  }
}
export class ScorePanel {
  score = 0;
  level = 1;

  scoreEle: Element;
  levelEle: Element;
  scoreUp: number;
  maxLevel: number;
  constructor(maxLevel: number = 10, scoreUp: number = 10) {
    this.scoreEle = document.getElementById("score")!;
    this.levelEle = document.getElementById("level")!;
    this.maxLevel = maxLevel;
    this.scoreUp = scoreUp;
  }
  addScore() {
    this.scoreEle.innerHTML = ++this.score + "";
    if (this.score % this.scoreUp === 0) {
      this.levelUp();
    }
  }
  levelUp() {
    if (this.level < this.maxLevel) {
      this.levelEle.innerHTML = ++this.level + "";
    }
  }
}

export class Snake {
  // 蛇容器
  element: HTMLElement;
  // 蛇头
  head: HTMLElement;
  // 身体
  bodies: HTMLCollection;

  constructor() {
    this.element = document.getElementById("snake")!;
    this.head = document.querySelector("#snake>div")!;
    this.bodies = this.element.getElementsByTagName("div");
  }

  // 获取蛇头元素的坐标的方法
  get x() {
    return this.head.offsetLeft;
  }
  get y() {
    return this.head.offsetTop;
  }

  // 获取蛇头元素的坐标的方法
  set x(val: number) {
    if (val === this.x) {
      return;
    }
    if (val < 0 || val > 290) {
      throw new Error("游戏结束");
    }
    this.moveBody();
    this.head.style.left = val + "px";
    this.checkHeadBody();
  }
  set y(val: number) {
    if (val === this.y) {
      return;
    }
    if (val < 0 || val > 290) {
      throw new Error("游戏结束");
    }
    this.moveBody();
    this.head.style.top = val + "px";
    this.checkHeadBody();
  }

  // 增加身体
  addBody() {
    this.element.insertAdjacentHTML("beforeend", "<div></div>");
  }
  // 移动身体
  moveBody() {
    for (let index = this.bodies.length - 1; index > 0; index--) {
      let x = (this.bodies[index - 1] as HTMLElement).offsetLeft;
      let y = (this.bodies[index - 1] as HTMLElement).offsetTop;

      (this.bodies[index] as HTMLElement).style.left = x + "px";
      (this.bodies[index] as HTMLElement).style.top = y + "px";
    }
  }
  // 检测蛇头是否撞到身体
  checkHeadBody() {
    if (this.bodies[1]) {
      for (let index = 1; index < this.bodies.length; index++) {
        let ele = this.bodies[index] as HTMLElement;
        if (
          this.head.offsetLeft === ele.offsetLeft &&
          this.head.offsetTop === ele.offsetTop
        ) {
          throw new Error("游戏结束");
        }
      }
    }
  }
}

export class GameControl {
  foot: Food;
  scorePanel: ScorePanel;
  snake: Snake;
  // 方向
  direction: string;
  // 游戏结束开关
  isLive: boolean = true;

  // 防抖
  isDouble: boolean = true;
  constructor() {
    this.foot = new Food();
    this.scorePanel = new ScorePanel();
    this.snake = new Snake();
    this.direction = "Right";
    this.init();
  }
  // 初始化
  init() {
    document.addEventListener("keydown", this.keyDownHandle.bind(this));
    this.moveSnake();
  }

  // 键盘响应函数
  keyDownHandle(e: KeyboardEvent) {
    if (this.isDouble) {
      this.isDouble = false;
      setTimeout(() => {
        // 判断方向是否为掉头，只有在不是 掉头的情况下才改变蛇的方向
        if (
          (this.direction === "ArrowUp" && e.key === "ArrowDown") ||
          (this.direction === "ArrowDown" && e.key === "ArrowUp") ||
          (this.direction === "ArrowLeft" && e.key === "ArrowRight") ||
          (this.direction === "ArrowRight" && e.key === "ArrowLeft")
        ) {
          return;
        }
        this.direction = e.key;
        this.isDouble = true;
      }, 100);
    }
  }
  // 蛇运动函数
  moveSnake() {
    let x = this.snake.x;
    let y = this.snake.y;

    switch (this.direction) {
      case "ArrowUp":
      case "Up":
        y -= 10;
        break;
      case "ArrowDown":
      case "Down":
        y += 10;
        break;
      case "ArrowLeft":
      case "Left":
        x -= 10;
        break;
      case "ArrowRight":
      case "Right":
        x += 10;
        break;
      default:
        break;
    }
    this.checkOut(x, y);
    try {
      this.snake.x = x;
      this.snake.y = y;
    } catch (error) {
      alert(error.message + "GAME OVER");
      this.isLive = false;
    }

    this.isLive &&
      setTimeout(
        this.moveSnake.bind(this),
        300 - (this.scorePanel.level - 1) * 30
      );
  }
  // 检测是否迟到食物
  checkOut(x: number, y: number) {
    if (x === this.foot.x && y === this.foot.y) {
      //   蛇的身体加一
      this.snake.addBody();
      // 记分牌加一分
      this.scorePanel.addScore();
      //   重新生成食物
      this.foot.change();
      this.checkFoodSnake();
    }
  }
  // 检测生成的食物的坐标是否在蛇的身体里
  checkFoodSnake() {
    let foodX = this.foot.x;
    let foodY = this.foot.y;
    for (let index = 0; index < this.snake.bodies.length; index++) {
      let ele = this.snake.bodies[index] as HTMLElement;
      if (ele.offsetLeft === foodX && ele.offsetTop === foodY) {
        //   重新生成食物
        this.foot.change();
        this.checkFoodSnake();
        return;
      }
    }
  }
}
