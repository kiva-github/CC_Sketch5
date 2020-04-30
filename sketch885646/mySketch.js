function setup() {
	logo = loadImage('http://www.openprocessing.org/sketch/885646/files/instagraham.png');
	createCanvas(windowWidth, windowHeight);
	background(100);
	textSize(32);
}

function draw() {
	square(windowWidth/2 - 175, windowHeight/2 - 350, 350, 700);
	image(logo, windowWidth/2 - 120, 50, 50, 50);
	text('Instagraham', windowWidth/2 - 50, 85);
	
	rect(width/2 - 150, height/2 - 250, 300, 400);
	text("Image Canvas", width/2 - 100, height/2- 50);
}