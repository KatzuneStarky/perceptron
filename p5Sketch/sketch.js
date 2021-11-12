let perceptron;
let typeOne;
let typeTwo;
let typeThree;
const points = [];

const WIDTH = 600;
const HEIGHT = 600;

const M = 0.3;
const BIAS = 0.05;

const RANGE = 60;

const xCenter = WIDTH / 2;
const yCenter = HEIGHT / 2;

const colors = {
  1: [255, 0, 0],
  2: [0, 255, 0],
};

const type1 = { x: 170, y: 170 };
const type2 = { x: -170, y: -170 };

const LAYERS = {
  entry: 2,
  hidden: 4,
  exit: 3,
};

const getRandom = (max = 1, min = 0) => Math.random() * (max - min) + min;

const getPointType = (vals) => {
  if (vals[0] == 1 && vals[1] == 0 && vals[2] == 0) {
    return 1;
  } else if (vals[0] == 0 && vals[1] == 1 && vals[2] == 0) {
    return 2;
  } else {
    return 0;
  }
};

const LEARNING_RATE = 0.1;

function setup() {
  createCanvas(WIDTH, HEIGHT);
  frameRate(6);

  perceptron = new Neuron(LAYERS, LEARNING_RATE);
}

function draw() {
  background(250);
  drawAxis();
  drawCircles();

  translate(xCenter, yCenter);
  scale(1, -1);

  Array.from(new Array(50)).forEach(() => {
    points.push(
      new Point(
        getRandom(type1.x + RANGE, type1.x - RANGE),
        getRandom(type1.y + RANGE, type1.y - RANGE)
      )
    );
    points.push(
      new Point(
        getRandom(type2.x + RANGE, type2.x - RANGE),
        getRandom(type2.y + RANGE, type2.y - RANGE)
      )
    );
  });

  points.forEach((point) => {
    const values = categorize([0, 0, 0], point);

    perceptron.train([point.x, point.y], values);
    point.type = getPointType(perceptron.classify([point.x, point.y]));
    point.draw();
  });
}

function categorize(values = [], point) {
  const vals = values;

  if (isInRange(point, type1)) {
    vals[0] = 1;
  } else if (isInRange(point, type2)) {
    vals[1] = 1;
  }

  return vals;
}

const isInRange = (point, target) =>
  dist(point.x, point.y, target.x, target.x) < RANGE;

function drawCircles() {
  push();
  translate(xCenter, yCenter);
  scale(1, -1);
  fill(0, 0, 0, 0);
  stroke(255, 0, 0);
  ellipse(type1.x, type1.y, RANGE * 2);
  stroke(0, 255, 0);
  ellipse(type2.x, type2.y, RANGE * 2);
  pop();
}

function drawAxis() {
  push();
  stroke(200);
  line(xCenter, 0, xCenter, yCenter * 2);
  line(0, yCenter, xCenter * 2, yCenter);
  pop();
}