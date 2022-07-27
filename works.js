let pics = [];
let mouseThreshold = 200;
let numberOfShapes = 5;
let moveDistance = 250;


class Shape {
  constructor(locationX, locationY, inputImage) {
    this.x = locationX;
    this.y = locationY;
    this.picture = inputImage;
  }
  updateShape() {
    let mouseDistance = int(dist(this.x, this.y, mouseX, mouseY));
    if (mouseDistance <= mouseThreshold) {
      this.x += random(-moveDistance, moveDistance);
      this.y += random(-moveDistance, moveDistance);
    }
  }
  drawShape() {
    image(this.picture, this.x, this.y);
  }
}
function setup() {
  background(243, 253, 252);
  var canv = createCanvas(windowWidth, windowHeight);
  canv.position(0, 0);
  canv.style("z-index", -1);
  meowth = loadImage('meowth.png');
  family = loadImage('family.png');
  bfpc = loadImage('BFPC.png');
  fred = loadImage('fred.png');
  sketchyMed = loadImage('sketchyMedical.png');
  yesterday = loadImage('yesterday.png');


  pics.push(new Shape(73, 119, fred));
  pics.push(new Shape(407, 119, yesterday));
  pics.push(new Shape(734, 119, bfpc));
  pics.push(new Shape(1068, 119, family));
  pics.push(new Shape(73, 409, sketchyMed));
  pics.push(new Shape(407, 409, meowth));
}
function draw() {
  for (let i = 0; i < pics.length; i++) {
    pics[i].updateShape();
    pics[i].drawShape();

  }
}
