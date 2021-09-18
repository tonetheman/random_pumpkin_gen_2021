const W = 600;
const H = 600;

function setup() {
  createCanvas(W, H);
  noLoop();
}

const skipSize = 150;
const boxSize = 132;

// passed the middle circle
function drawlefteye(x,y,r) {
    let p1 = x-15;
    let p2 = y-15;
    fill(color(0,0,0));
    triangle(p1,p2,p1+5,p2-5,p1+10,p2);
}
// passed the middle circle
function drawrighteye(x,y,r) {
    let p1 = x+15;
    let p2 = y-15;
    fill(color(0,0,0));
    triangle(p1,p2,p1+5,p2-5,p1+10,p2);
}

function drawmouth(x,y,r) {
    let pts = [];
    let f = 0.25;
    let fudge = random(1,10);
    pts = [
        createVector(x-fudge-r*f, y-r*f),
        createVector(x-r*f, y+r*f),
        createVector(x+fudge+r*f, y+r*f),
        createVector(x+r*f, y-r*f)
      ];
    
    bezier(pts[0].x, pts[0].y,
        pts[1].x, pts[1].y,
        pts[2].x, pts[2].y,
        pts[3].x, pts[3].y);

}

function pumpkin(i,j) {
    // pretty color
    var r = (random(0,127) + 127);
    var g = (random(0,127) + 127);
    var b = (random(0,127) + 127);
    fill(color(r,g,b));

    let radius_size = 0.25*boxSize;
    // middle circle
    // random radius
    let r1 = random(radius_size,radius_size+30);

    // left circle
    let c2 = random(0,256);
    let r2 = random(radius_size*0.66,(radius_size*0.66)+15);
    circle(i+boxSize/2-random(r1), j+boxSize/2,r2);

    // right circle
    let r3 = random(radius_size*0.66,(radius_size*0.66)+15);
    circle(i+boxSize/2+random(r1), j+boxSize/2,r3);

    // draw ,middle circle last
    let middle_x = i+boxSize/2;
    let middle_y = j+boxSize/2
    circle(middle_x,middle_y,r1);

    // eyes
    drawlefteye(middle_x,middle_y,r1);
    drawrighteye(middle_x,middle_y,r1);
    // mouth
    drawmouth(middle_x,middle_y,r1);
}

function draw() {

    for(let i=0;i<W;i+=skipSize) {
        for(let j=0;j<H;j+=skipSize) {

            // draw box
            noFill();
            rect(i,j,boxSize,boxSize);

            pumpkin(i,j);


        }
    }

}