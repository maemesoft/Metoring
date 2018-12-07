var img = [];
var img_signbot;
var img_logo;
var bgX;
var bgXTemp;
var bgSlide;

var imgTest = [];
var test = [];

var font;

function setup() {
    var myCanvas = createCanvas(1200, 600);
    myCanvas.parent('cola');

  frameRate(60);

  for(var i = 1; i <= 5; i++) {
    img[i] = loadImage("data/" + i + ".png");
    imgTest[i] = loadImage("data/1x/" + i + ".png");
    test[i] = false;
  }
    

  imgTest[1] = loadImage("data/1x/1.png");
  img_logo = loadImage("data/logo.png")
  
  bgX = 0;
  bgSlide = 0;
  bgXTemp = 0;

  font = loadFont("data/BMDOHYEON_ttf.ttf");
}

function draw() {
    background("#91CCD5");

    for(var i = 1; i <= 5; i++) {
        image(img[i], bgX + 1199 * (i-1), 0);

        if (test[i] == true) image(imgTest[i], bgX + 1199 * (1) + 700, 0, 425, 600);
    }

    if (test[1] == true) image(imgTest[1], bgX + 1199 * (1) + 700, 0, 425, 600);

    bgXTemp = bgXTemp * 9/10;
    bgX = bgX + bgXTemp;

    fill(0);
    textFont(font, 36);
    text("강예원", bgX + 1199 * (1) + 400, 120);
    text("김누리", bgX + 1199 * (1) + 400, 200);
    text("빈가희", bgX + 1199 * (1) + 400, 280);
    text("도원석", bgX + 1199 * (1) + 400, 360);
    text("하정훈", bgX + 1199 * (1) + 400, 440);
}

function mousePressed() {
    if (bgXTemp%600 < 0.01 && bgXTemp%600 > -0.01) {
        if (mouseX > 1200 && bgX > -4500) {
            // bgSlide = 2;
            bgXTemp = -133;
            testing(0);
        }
        else if (mouseX < 0 && bgX < -1000) {
            // bgSlide = 1;
            bgXTemp = 133;
            testing(0);
        }
    }

    if (mouseX > 400 && mouseX < 600) {
        if (mouseY > 120 && mouseY < 190) testing(1);
        if (mouseY > 200 && mouseY < 270) testing(2);
        if (mouseY > 280 && mouseY < 350) testing(3);
        if (mouseY > 360 && mouseY < 430) testing(4);
        if (mouseY > 440 && mouseY < 500) testing(5);
    }

}

function testing(tested) {
    for (var i = 1; i <= 5; i++) {
        test[i] = false;
    }
    test[tested] = true;
    console.log(tested);
}