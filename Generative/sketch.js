let imgA, imgB;

function preload() {
  imgA= loadImage('images/CASTLE.jpg');
  imgB = loadImage('images/CASTLE1.jpg');
}

function setup() {
  imgA.resize(0, 900);
  imgB.resize(0, 900);
  createCanvas(imgB.width, imgA.height);

  imgA.loadPixels();
  imgB.loadPixels();
}

function draw() {

  let x = random(width);
  let y = random(height);
  let k = random(5);
  k = floor(k);
  let c;

  switch (k) {
    case 0:
    case 1:
    case 2:
    case 3:
      c = imgA.get(x, y, 50, 50);
      break;

    case 4:
      c = imgB.get(x, y, 50, 50);
      break;
  }
  image(c, x, y);
}