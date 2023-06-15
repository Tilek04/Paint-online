import Tools from "./Tool";

export default class Rect extends Tools {
  constructor(canvas) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
  }

  mouseUpHandler(e) {
    this.mousedown = false;
  }

  mouseDownHandler(e) {
    this.mousedown = true;
    this.ctx.beginPath();
    this.startX = e.pageX - e.target.offsetLeft;
    this.startY = e.pageY - e.target.offsetTop;
  }

  mouseMoveHandler(e) {
    if (this.mousedown) {
      let currentX = e.pageX - e.target.offsetLeft;
      let currentY = e.pageY - e.target.offsetTop;
      let width = currentX - this.startX;
      let height = currentY - this.startY;
      this.draw(this.startX, this.startY, width, height);
    }
  }
  draw(x, y, w, h) {
    this.ctx.rect(x, y, w, h);
    this.ctx.fill();
    this.ctx.stroke();
  }
}
