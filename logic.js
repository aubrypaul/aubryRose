function setupAnimation() {
  loop();
  theta = 0
  innerPoints = [];
  outerPoints = [];
}

function setupValLoop() {
  let Loop = loopVals.checked();
  if (Loop) {
    Ninput.attribute('disabled', '');
    Dinput.attribute('disabled', '');
    n = 0;
    d = 0;
  } else {
    Ninput.removeAttribute('disabled');
    Dinput.removeAttribute('disabled');
    n = Ninput.value();
    d = Dinput.value();
  }
}

function staticRose(inside = true, outside = false) {
  if (!loopVals.checked())
    noLoop();
  noFill();
  background(0);
  if (inside) {
    strokeWeight(1);
    stroke(innerColor.color());
    beginShape();
    for (let i = 0; i <= 360; i++) {
      let k = i * d;
      let r = sin(n * k) * R;
      let x = r * cos(k);
      let y = r * sin(k);
      vertex(x, y);
    }
    endShape();
  }

  if (outside) {
    strokeWeight(5);
    stroke(outerColor.color());
    beginShape();
    for (let i = 0; i <= 360; i++) {
      let k = i;
      let r = sin(n * k) * R;
      let x = r * cos(k);
      let y = r * sin(k);
      vertex(x, y);
    }
    endShape();
  }

}

function animatedRose(inside = true, outside = false, Loop = false) {
  // loop();
  if (theta >= 361) {
    if (Loop)
      setupAnimation();
    else {
      staticRose(inside, outside);
    }
    return;
  }
  noFill();

  let k = d * theta;
  let r = R * sin(n * k);
  let x = r * cos(k)
  let y = r * sin(k)
  innerPoints.push(createVector(x, y));

  if (inside) {
    stroke(innerColor.color());
    strokeWeight(1);


    beginShape();
    for (let p of innerPoints) {
      // print(p.x);
      vertex(p.x, p.y);
    }
    endShape();
  }


  k = theta;
  r = R * sin(n * k);
  x = r * cos(k)
  y = r * sin(k)
  outerPoints.push(createVector(x, y));

  if (outside) {
    strokeWeight(5);
    stroke(outerColor.color());
    beginShape();
    for (let p of outerPoints) {
      // print(p.x);
      vertex(p.x, p.y);
    }
    endShape();
  }


  theta++;
}
