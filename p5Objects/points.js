class Puntos{
    constructor (x, y, type = 1){
        this.x = x;
        this.y = y;
        this.type = type;        
    }
}

function draw(){
    push();
    strokeWeight(10);
    if(this.type === 1){
        stroke(23, 205, 204);
    }else if(this.type === 2){
        stroke(205, 137, 23 );
    }
    point(this.x, this.y);
    pop();
}