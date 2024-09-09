// The Chicken class extends the MovableObject class
class Chicken extends MovableObject {
  // Default properties of the chicken
  y = 353; // y position of the chicken
  height = 60; // Height of the chicken
  width = 60; // Width of the chicken

  // Array of image paths for the chicken walking animation
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
  ];

  // Constructor for initializing a new instance of Chicken
  constructor() {
    super(); // Calls the constructor of the MovableObject class
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"); // Loads the initial image for the chicken
    this.loadImages(this.IMAGES_WALKING); // Loads all images for the walking animation

    // Sets the initial x position to a random value within a range
    this.x = 200 + Math.random() * 1000;
    // Sets the speed of the chicken to a random value within a range
    this.speed = 0.15 + Math.random() * 0.55;

    this.animate(); // Starts the animation
  }

  // Method to handle chicken animation and movement
  animate() {
    // Sets up an interval for moving the chicken left
    setInterval(() => {
      this.moveLeft(); // Moves the chicken to the left
    }, 1000 / 60); // Runs at 60 FPS

    // Sets up an interval for playing the walking animation
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING); // Plays the walking animation
    }, 60); // Runs every 60 milliseconds
  }
}
