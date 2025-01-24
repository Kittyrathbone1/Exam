let rectWidth = 50;
let rectHeight = 30;
let rectangles = [];
//these show the varibles

function setup(){
    createCanvas(800,600);//this is to create the canvas
    background(250,120,180); //this creates the background colour
}
 function draw (){
    background(250,120,180) //this draws out the rectangle color
 

for (let i = 0; i < rectangles.length; i++){ //this is a loop for the array ofrectangles
fill(rectangles)
rectMode(CENTER);// sets the rectangles position to center
rect(rectangles[i].x, rectangles[i].y,rectWidth) //this draws out the rectangles
}
}
 function mousePressed(){ //will run a code whenever mouse is pressed
     rectangles.push({ // adds another rectangle to the rectangle array
        x:mouseX,
        y:mouseY, // positions of the rectangle 
        color: color(random(255), random(255), random(255)) // gives us a random number between 0 and 255
     })
 }
 function KeyPressed(){ // what happens when key is pressed
    if (rectangles.length > 0); //shows the array elements and checks it 
rectangles.shift(); 
 }