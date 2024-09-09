// The Coins class extends the MoveableObject class
class Coins extends MovableObject {

    // Default properties of the coin
    height = 200; // Height of the coin
    width = 200; // Width of the coin
    y = 55; // y position of the coin

    // Array of image paths for the coin animation
    IMAGES_COINS = [
        'img/8_coin/coin_1.png',
        'img/8_coin/coin_2.png'
    ];
    offset = {
        top: 70,
        left: 70,
        right: 70,
        bottom: 70
    }

    // Constructor for initializing a new instance of Coins
    constructor() {
        super(); // Calls the constructor of the MoveableObject class
        this.loadImage(this.IMAGES_COINS[0]); // Loads the initial image for the coin
        this.loadImages(this.IMAGES_COINS); // Loads all images for the coin animation
        this.x = 200 + Math.random() * 2000; // Sets the initial x position to a random value within a range
    }

    // Method to handle coin animation
    animate() {
        // Sets up an interval for playing the coin animation
        setInterval(() => {
            this.playAnimation(this.IMAGES_COINS); // Plays the animation using the image array
        }, 200); // Animation interval in milliseconds
    }
}
