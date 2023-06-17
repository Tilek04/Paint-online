import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas = null;

  undoList = []
  redoList = []

  constructor() {
    makeAutoObservable(this);
  }
  setCanvas(canvas) {
    this.canvas = canvas;
  }
  pushToUndo(data) {
  this.undoList.push(data)
  }
  pushToRedo (data) {
 this.redoList.push(data)
  }

undo() {
let ctx = this.canvas.getContext('2d');
if(this.undoList.length > 0) {
   let dataUrl = this.undoList.pop()
   let img = new Image()
   let src = dataUrl
   img.onload = () => {
    ctx.clearReact(0, 0, this.canvas.width, this.canvas.height)
   }
}else {
  ctx.drawImage(img , 0, 0, this.canvas.widht, this.canvas.height)
}
}

redo() {

}

}

export default new CanvasState();
