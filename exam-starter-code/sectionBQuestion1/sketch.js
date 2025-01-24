let cats = []; 
let addButton // arrays 
let backgroundImage;

function preload(){
    backgroundImage = loadImage ('assets/ background.jpg')
}
function setup() {
  createCanvas(1000,800); // making the canvas size 
  addButton = createButton('Add Cat'); // Create an Add Cat button
  addButton.position(10, 10); // making the button position 
  addButton.mousePressed(addCat); // make the cats appear when the button is pressed
}

function draw() {
  background(0); 
  image(backgroundImage, 0, 0 ,width, height )
  

  for (let i = 0; i < cats.length; i++) {
    cats[i].display(); // shows each cat
  }
}

// adds a new cat to the array
function addCat() {
  let cat = new Cat(random(100, 700), random(100, 500), random(255), random(255), random(255));
  cats.push(cat); // Adds the new cats to the cats array
}

// defines all of the cats properties and methods
class Cat {
  constructor(x, y, r, g, b) {
    this.x = x; // X position of the cat
    this.y = y; // Y position of the cat
    this.color = color(r, g, b); // Color of the cat
    this.size = 60; // Size of the cat
  }
  
  // displays the cat
  display() {
    fill(this.color); // adds color for the cat
    
    // the body of the cat
    ellipse(this.x, this.y, this.size, this.size);
    
    //  the head of the cat 
    ellipse(this.x, this.y - 50, this.size * 0.8, this.size * 0.8);
    
    // the eyes of the cat 
    fill(0); // black for the eyes
    ellipse(this.x - 15, this.y - 60, 10, 10); // Left eye
    ellipse(this.x + 15, this.y - 60, 10, 10); // Right eye
    
    // the nose of the cat 
    fill(255, 0, 0); // color to red for the nose
    triangle(this.x, this.y - 50, this.x - 5, this.y - 40, this.x + 5, this.y - 40);
    
    // the mouth of the cat 
    line(this.x, this.y - 40, this.x, this.y - 30); // Middle mouth line
    line(this.x, this.y - 30, this.x - 10, this.y - 20); // Left mouth line
    line(this.x, this.y - 30, this.x + 10, this.y - 20); // Right mouth line
    
    // the ears of the cat 
    fill(this.color); // color for the ears
    triangle(this.x - 25, this.y - 80, this.x - 40, this.y - 100, this.x - 10, this.y - 100); // Left ear
    triangle(this.x + 25, this.y - 80, this.x + 40, this.y - 100, this.x + 10, this.y - 100); // Right ear
  }
}
