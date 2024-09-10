// The Character class extends the MovableObject class
class Character extends MovableObject {
  // Default properties of the character
  y = 30; // y position of the character
  height = 300; // Height of the character
  width = 150; // Width of the character
  speed = 7; // Movement speed of the character

  // Array of image paths for the walking animation
  IMAGES_WALKING = [
    "img/2_character_pepe/2_walk/W-21.png",
    "img/2_character_pepe/2_walk/W-22.png",
    "img/2_character_pepe/2_walk/W-23.png",
    "img/2_character_pepe/2_walk/W-24.png",
    "img/2_character_pepe/2_walk/W-25.png",
    "img/2_character_pepe/2_walk/W-26.png"
  ];

  // Array of image paths for the jumping animation
  IMAGES_JUMPING = [
    "img/2_character_pepe/3_jump/J-31.png",
    "img/2_character_pepe/3_jump/J-32.png",
    "img/2_character_pepe/3_jump/J-33.png",
    "img/2_character_pepe/3_jump/J-34.png",
    "img/2_character_pepe/3_jump/J-35.png",
    "img/2_character_pepe/3_jump/J-36.png",
    "img/2_character_pepe/3_jump/J-37.png",
    "img/2_character_pepe/3_jump/J-38.png",
    "img/2_character_pepe/3_jump/J-39.png"
  ];

  // Array of image paths for the dead animation
  IMAGES_DEAD = [
    "img/2_character_pepe/5_dead/D-51.png",
    "img/2_character_pepe/5_dead/D-52.png",
    "img/2_character_pepe/5_dead/D-53.png",
    "img/2_character_pepe/5_dead/D-54.png",
    "img/2_character_pepe/5_dead/D-55.png",
    "img/2_character_pepe/5_dead/D-56.png",
    "img/2_character_pepe/5_dead/D-57.png"
  ];

  // Array of image paths for the hurt animation
  IMAGES_HURT = [
    "img/2_character_pepe/4_hurt/H-41.png",
    "img/2_character_pepe/4_hurt/H-42.png",
    "img/2_character_pepe/4_hurt/H-43.png"
  ];

  // Reference to the world object
  world;
  // Sound effect for walking
  walking_sound = new Audio('audio/walking-sound.mp3');


  offset = {
    top: 130,
    left: 40,
    right: 30,
    bottom: 30
}

  // Constructor for initializing a new instance of Character
  constructor() {
    super(); // Calls the constructor of the MovableObject class
    this.loadImage("img/2_character_pepe/2_walk/W-21.png"); // Loads the initial image for the character
    this.loadImages(this.IMAGES_WALKING); // Loads all images for the walking animation
    this.loadImages(this.IMAGES_JUMPING); // Loads all images for the jumping animation
    this.loadImages(this.IMAGES_DEAD); // Loads all images for the dead animation
    this.loadImages(this.IMAGES_HURT); // Loads all images for the hurt animation
    this.applyGravity(); // Applies gravity to the character
    this.animate(); // Starts the animation
  }

  // Method to handle character animation and movement
  animate() {
    // Sets up an interval for handling character movement and camera position
    setInterval(() => {
      this.walking_sound.pause(); // Pauses the walking sound if not moving
      // Moves the character to the right if the RIGHT key is pressed
      if (this.world.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
        this.moveRight(); // Moves the character right
        this.otherDirection = false; // Indicates the character is facing right
        this.walking_sound.play(); // Plays the walking sound
      }
      // Moves the character to the left if the LEFT key is pressed
      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft(); // Moves the character left
        this.otherDirection = true; // Indicates the character is facing left
        this.walking_sound.play(); // Plays the walking sound
      }
      // Makes the character jump if the SPACE key is pressed and the character is on the ground
      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump(); // Executes the jump
      }
      // Updates the camera position based on the character's x position
      this.world.camera_x = -this.x + 100;
    }, 1000 / 60); // Runs at 60 FPS

    // Sets up an interval for handling character animations
    setInterval(() => {
      // Plays the dead animation if the character is dead
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      // Plays the hurt animation if the character is hurt
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      // Plays the jumping animation if the character is in the air
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      // Plays the walking animation if the character is moving
      } else if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 70); // Runs every 70 milliseconds
  }

  // Method to make the character jump
  jump() {
    this.speedY = 30; // Sets the vertical speed for jumping
  }

  // Method to handle collecting items
  collect(item) {
    if (item instanceof Coins) {
      this.coins += 20; // Increases the coin count by 20 if a coin is collected
    } else if (item instanceof Bottles) {
      this.bottles += 10; // Increases the bottle count by 10 if a bottle is collected
    }
  }
}
