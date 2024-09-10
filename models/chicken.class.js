class Chicken extends MovableObject {
  
  y = 353;
  height = 60;
  width = 60;

  // Array of image paths for the chicken walking animation
  IMAGES_WALKING = [
    "img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "img/3_enemies_chicken/chicken_normal/1_walk/3_w.png"
  ];
  offset = {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5
}

  
  constructor() {
    super();
    this.loadImage("img/3_enemies_chicken/chicken_normal/1_walk/1_w.png");
    this.loadImages(this.IMAGES_WALKING); 

    
    this.x = 200 + Math.random() * 1000;
   
    this.speed = 0.15 + Math.random() * 0.55;

    this.animate();
  }

  // Method to handle chicken animation and movement
  animate() {
    
    setInterval(() => {
      this.moveLeft(); 
    }, 1000 / 60); 

    // Sets up an interval for playing the walking animation
    setInterval(() => {
      this.playAnimation(this.IMAGES_WALKING);
    }, 60); 
  }
}
