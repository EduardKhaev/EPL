// The Bottles class extends the MoveableObject class
class Bottles extends MovableObject {

    // height and width of the bottle
    height = 100;
    width = 100;
    y = 320; //Y position of the bottle

    offset = {
        top: 20,
        left: 40,
        right: 20,
        bottom: 10
    }

    // Array of image paths for the bottle animation
    IMAGES_BOTTLES = [
        'img/6_salsa_bottle/1_salsa_bottle_on_ground.png',
        'img/6_salsa_bottle/2_salsa_bottle_on_ground.png'
    ];

    // Constructor for initializing a new instance of Bottles
    constructor() {
        super(); // Calls the constructor of the MoveableObject class
        this.loadImage(this.IMAGES_BOTTLES[0]); // Loads the initial image for the bottle
        this.loadImages(this.IMAGES_BOTTLES); // Loads all images for the bottle animation
        this.x = 200 + Math.random() * 2000; // Sets the x position to a random value within a range
    }

    // Method to animate the bottle
    animate() {
        // Sets up an interval to repeatedly play the bottle animation
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES); // Plays the animation using the image array
        }, 200); // Animation interval in milliseconds
    }
}
