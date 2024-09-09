// The Endboss class extends the MovableObject class
class Endboss extends MovableObject {

    // Default properties of the endboss
    height = 400; // Height of the endboss
    width = 250; // Width of the endboss
    y = 55; // y position of the endboss

    // Array of image paths for the endboss walking animation
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];

    // Constructor for initializing a new instance of Endboss
    constructor() {
        super(); // Calls the constructor of the MovableObject class
        this.loadImage(this.IMAGES_WALKING[0]); // Loads the initial image for the endboss
        this.loadImages(this.IMAGES_WALKING); // Loads all images for the walking animation
        // Sets the initial x position of the endboss
        this.x = 2500;
        this.animate(); // Starts the animation
    }

    // Method to handle endboss animation
    animate() {
        // Sets up an interval for playing the endboss walking animation
        setInterval(() => {
            this.playAnimation(this.IMAGES_WALKING); // Plays the walking animation using the image array
        }, 200); // Animation interval in milliseconds
    }
}
