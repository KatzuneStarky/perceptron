let Canvas;
let perceptron;
let uno, dos, tres;
const puntos = [];
const widthC = 1000, heightC = 500;
const centrarX = widthC / 2, centrarY = heightC / 2;
const ciruclo1 = { x: 130, y: 63 };
const ciruclo2 = { x: -130, y: -63 };
const M = 0.3;
const BIAS = 0.05;
const rango = 60;
const capas = {
    entry: 2,
    hidden: 4,
    exit: 3,
};
const tamanoConocimiento = 0.1;

function setup(){
    Canvas = createCanvas(widthC, heightC);
    frameRate(5);
    perceptron = new Neuron(capas, tamanoConocimiento);
}

function draw(){
    lineasD();
    circulos();
    dibujarPuntosP();
}

function lineasD(){
    push();
    stroke(20);
    line(centrarX, 0, centrarX, centrarY * 2);
    line(0, centrarY, centrarX * 2, centrarY);
    pop();
}

function circulos() {
    push();
    translate(centrarX, centrarY);
    scale(2, -2);
    stroke(4, 103, 18 );
    ellipse(ciruclo1.x, ciruclo1.y, rango * 2);
    stroke(147, 50, 4);
    ellipse(ciruclo2.x, ciruclo2.y, rango * 2);
    pop();
  }

  function dibujarPuntosP(){
    Array.from(new Array(10)).forEach(() => {
        puntos.push(
          new Puntos(
            getRandom(ciruclo1.x + rango, ciruclo1.x - rango),
            getRandom(ciruclo1.y + rango, ciruclo1.y - rango)
          )
        );
        puntos.push(
          new Puntos(
            getRandom(ciruclo2.x + rango, ciruclo2.x - rango),
            getRandom(ciruclo2.y + rango, ciruclo2.y - rango)
          )
        );
      });

      puntos.forEach((puntos) => {
        const values = categorize([0, 0, 0], puntos);
        perceptron.train([puntos.x, puntos.y], values);
        puntos.type = getPointType(perceptron.classify([puntos.x, puntos.y]));
        puntos.draw();
      });
  }

  const obtenerValorPunto = (valor) => {
    if (valor[0] == 1 && valor[1] == 0 && valor[2] == 0) {
      return 1;
    } else if (valor[0] == 0 && valor[1] == 1 && valor[2] == 0) {
      return 2;
    } else {
      return 0;
    }
  }

  function categorize(values = [], point) {
    const vals = values;
  
    if (isInRange(point, ciruclo1)) {
      vals[0] = 1;
    } else if (isInRange(point, ciruclo2)) {
      vals[1] = 1;
    }
  
    return vals;
  }
  
  const isInRange = (point, target) =>
    dist(point.x, point.y, target.x, target.x) < rango;
    const getRandom = (max = 1, min = 0) => Math.random() * (max - min) + min;