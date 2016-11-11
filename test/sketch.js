function setup() { 
  createCanvas(400, 400);
	background(255);
} 

function draw() { 
	background('white');
	fill(255);
	rect(0,320,399, 79);

	ellipse(200, 300, 150, 150);
	ellipse(200, 200, 100, 100);
	ellipse(200, 130, 70, 70);

	fill(255, 0, 0);
	ellipse(200,300,5,5);
	ellipse(200,200,5,5);

	fill(0, 0, 0);
	ellipse(190,125,5,5);
	ellipse(210,125,5,5);

	line(160, 200, 160 + mouseX-160, mouseY);
	line(240, 200, 240 -(mouseX-160), mouseY);

}

function mouseClicked() {
	saveCanvas('snowman.png');
	return false;
}
