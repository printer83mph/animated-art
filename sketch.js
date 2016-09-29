var things = [];
var change;
var other = false;
var row = 0;

function ThingOne(xPos,yPos) {
  this.position = createVector(xPos,yPos);
  this.draw = function() {
    beginShape();
    vertex(this.position.x,this.position.y); // begin shape at top left
    quadraticVertex(this.position.x+15,this.position.y-change,this.position.x+30,this.position.y); // to top right
    quadraticVertex(this.position.x+30-change,this.position.y+15,this.position.x+30,this.position.y+30); // to bottom right
    quadraticVertex(this.position.x+15,this.position.y+30+change,this.position.x,this.position.y+30); // to bottom left
    quadraticVertex(this.position.x+change,this.position.y+15,this.position.x,this.position.y); // to top left
    endShape();
  }
}

function ThingTwo(xPos,yPos) {
  this.position = createVector(xPos,yPos);
  this.draw = function() {
    beginShape();
    vertex(this.position.x,this.position.y); // begin shape at top left
    quadraticVertex(this.position.x+15,this.position.y+change,this.position.x+30,this.position.y); // to top right
    quadraticVertex(this.position.x+30+change,this.position.y+15,this.position.x+30,this.position.y+30); // to bottom right
    quadraticVertex(this.position.x+15,this.position.y+30-change,this.position.x,this.position.y+30); // to bottom left
    quadraticVertex(this.position.x-change,this.position.y+15,this.position.x,this.position.y); // to top left
    endShape();
  }
}

function setup() {
  canvas = createCanvas(window.innerWidth,window.innerHeight);
  fill(0,0);
  stroke(0);
  strokeWeight(1);
	smallestScr = min(width,height);
	console.log(smallestScr);
  for(var x = (width-smallestScr/2)/2; x < width-(width-smallestScr/2)/2 - 30; x += 37) {
		console.log('x: ' + x);
		if(row % 2 === 0) {
			other = false;
		} else {
			other = true;
		}
    for(var y = (height-smallestScr/2)/2; y < height-(height-smallestScr/2)/2 - 30; y += 37) {
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
  background(255);
	change = sin(frameCount/50)*10;
  for(var i = 0; i < things.length; i ++) {
    things[i].draw();
  }
}