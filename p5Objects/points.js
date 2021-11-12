class Puntos {
    constructor(x, y, tipoPunto = 1) {
      this.x = x;
      this.y = y;
      this.tipoPunto = tipoPunto;
    }
  
    draw() {
      push();
      strokeWeight(5);
      if (this.tipoPunto === 1){
        stroke(47, 231, 81);
      }else if (this.tipoPunto === 2){
        stroke(231, 87, 47);
      }else{
        stroke(0, 0, 0);
      }
      point(this.x, this.y);
      pop();
    }
  }