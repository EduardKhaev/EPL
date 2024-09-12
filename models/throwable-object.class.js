// The ThrowableObject class extends the MovableObject class
class ThrowableObject extends MovableObject {

    IMAGES_SALSATHROW = [
        "img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
        "img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
      ];

    // Constructor for initializing a new instance of ThrowableObject
    constructor(x, y) {
        super(); // Calls the constructor of the MovableObject class
        this.loadImage(this.IMAGES_SALSATHROW[0]); // Loads the image for the throwable object
        this.loadImages(this.IMAGES_SALSATHROW);
        this.x = x; // Sets the initial x position
        this.y = y; // Sets the initial y position
        this.height = 60; // Sets the height of the throwable object
        this.width = 50; // Sets the width of the throwable object
        this.animate();
        this.throw();
    }

    animate() {
        // Sets up an interval to repeatedly play the bottle animation
        setInterval(() => {
            this.playAnimation(this.IMAGES_SALSATHROW); // Plays the animation using the image array
        }, 100); // Animation interval in milliseconds
    }

    // Method to handle the throwing action of the object
    throw() {
        this.speedY = 25; // Sets the vertical speed to simulate the throw
        this.applyGravity(); // Applies gravity to the object
        // Sets up an interval for moving the object horizontally
        setInterval(() => {
            this.x += 10; // Moves the object to the right by 10 pixels every interval
        }, 25); // Interval in milliseconds
    }
}
