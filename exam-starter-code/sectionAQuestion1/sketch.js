
let circleX = 50;
let circleY = 50;
// let circle is to set the variables

function setup () {
createCanvas (500,500); // this is to craete the
circleDiameter = 50; // this will make the diameter
circlex = width / 2; // this makes width of the circle
circley = height / 2; // this makes the height
}

function draw(){
background (50); // this sets the background colour
let mouseXClamped = constrain(mouseX, 0, width)
let mouseYClamped = constrain(mouseY, 0, height) 


stroke(0); // this shows that there is no strok fi11(150); // this shows the colour inside the
fill(150);
circle(mouseX, mouseY, 50);

textAlign (CENTER, CENTER); // this makes sure the coordinates will stay wih the circle when it moves
text("X:" + mouseX + " Y:"+ mouseY, mouseXclamped, mouseYclamped)
textSize (13); // this makes the text size of the coordinates
}