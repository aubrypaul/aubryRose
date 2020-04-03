let Ninput, Dinput;
let outBox,inBox;

function setUpUserInput() {
  Ninput = createInput("2", "number").input(() => {
    n = Ninput.value();
    redraw();
  });
  Dinput = createInput("29", "number").input(() => {
    d = Dinput.value();
    redraw();
  });
  innerColor = createColorPicker(color(255, 255, 255)).input(redraw);
  outerColor = createColorPicker("purple").input(redraw);
  inner = createCheckbox("Draw rose").input(redraw).checked(true);
  outer = createCheckbox("Draw outline").input(redraw);
  LoopDraw = createCheckbox("Loop drawing").input(() => {

    loopVals.checked(false);
    roundVals.checked(false);
    setupValLoop();
    redraw()});
  loopVals = createCheckbox("Loop N and D").input(() => {
    LoopDraw.checked(false);
    theta = 361;
    redraw();
    setupValLoop();
    if(!loopVals.checked())
      roundVals.checked(false);
  });

  roundVals = createCheckbox("round N and D");
}
