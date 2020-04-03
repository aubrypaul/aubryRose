let n = 2;
let d = 29;
let R = 300;
let innerPoints, outerPoints;
let innerColor, outerColor;
let inner, outer, LoopDraw, loopVals, roundVals;
let theta;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  setUpUserInput();
  setupAnimation();
}

function draw() {
  background(0);
  stroke(255);
  translate(width / 2, height / 2);
  animatedRose(inner.checked(), outer.checked(), LoopDraw.checked());
  if (loopVals.checked()) {


    if (roundVals.checked()) {
      if (frameCount % 100 == 0) {
        n = round(n);
        d = round(d);
        n++;
        d++;
      }
    } else {
      n += .01;
      d += .01;
    }
  }
}
