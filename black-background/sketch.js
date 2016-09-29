var things = [];
var change;
var squareSize;
var waveAmount;
var other = false;
var row = 0;

function ThingOne(xPos,yPos) {
  this.position = createVector(xPos,yPos);
  this.draw = function() {
    beginShape();
    vertex(this.position.x,this.position.y); // begin shape at top left
    quadraticVertex(this.position.x+squareSize/2,this.position.y-change,this.position.x+squareSize,this.position.y); // to top right
    quadraticVertex(this.position.x+squareSize-change,this.position.y+squareSize/2,this.position.x+squareSize,this.position.y+squareSize); // to bottom right
    quadraticVertex(this.position.x+squareSize/2,this.position.y+squareSize+change,this.position.x,this.position.y+squareSize); // to bottom left
    quadraticVertex(this.position.x+change,this.position.y+squareSize/2,this.position.x,this.position.y); // to top left
    endShape();
  }
}

function ThingTwo(xPos,yPos) {
  this.position = createVector(xPos,yPos);
  this.draw = function() {
    beginShape();
    vertex(this.position.x,this.position.y); // begin shape at top left
    quadraticVertex(this.position.x+squareSize/2,this.position.y+change,this.position.x+squareSize,this.position.y); // to top right
    quadraticVertex(this.position.x+squareSize+change,this.position.y+squareSize/2,this.position.x+squareSize,this.position.y+squareSize); // to bottom right
    quadraticVertex(this.position.x+squareSize/2,this.position.y+squareSize-change,this.position.x,this.position.y+squareSize); // to bottom left
    quadraticVertex(this.position.x-change,this.position.y+squareSize/2,this.position.x,this.position.y); // to top left
    endShape();
  }
}

function setup() {
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  fill(0,0);
  stroke(255);
	smallestScr = min(width,height);
	squareSize = smallestScr*0.042;
	waveAmount = smallestScr*0.01;
	// console.log(smallestScr);
	strokeWeight(smallestScr/500);
  for(var x = (width-smallestScr/2)/2 + smallestScr * 0.008; x < width-(width-smallestScr/2)/2; x += smallestScr/20) {
		console.log('x: ' + x);
		if(row % 2 === 0) {
			other = false;
		} else {
			other = true;
		}
    for(var y = (height-smallestScr/2)/2 + smallestScr * 0.008; y < height-(height-smallestScr/2)/2; y += smallestScr/20) {
			console.log('y: ' + y);
      if(other) {
        things.push(new ThingOne(x,y));
        other = false;
      } else {
        things.push(new ThingTwo(x,y));
        other = true;
      }
    }
		row ++;
  }
}

function draw() {
  background(0);
	change = sin(frameCount/50)*waveAmount;
  for(var i = 0; i < things.length; i ++) {
    things[i].draw();
  }
}