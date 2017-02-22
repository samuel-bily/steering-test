var font;
var dots = [];

function preload() {
  font = loadFont('lib/kindergarten.ttf');
}

function setup() {
  createCanvas(1200,400);
  background(255);

  var points = font.textToPoints('the-void', 350, 200, 192, {
   sampleFactor: 0.095
  });

  for (var i = 0; i < points.length; i++) {
      var pt = points[i];
      var dot = new Dot(pt.x, pt.y);
      dots.push(dot);
  }
}

function draw() {
  background(255);
  for (var i = 0; i < dots.length; i++) {
    var dot = dots[i];
    dot.behaviors();
    dot.update();
    dot.show();
  }
}
