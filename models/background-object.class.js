// The BackgroundObject class extends the MovableObject class
class BackgroundObject extends MovableObject {

    // Default width and height of the background object
    width = 720;
    height = 480;

    // Constructor for initializing a new instance of BackgroundObject
    constructor(imagePath, x) {
        super(); // Calls the constructor of the MovableObject class
        this.loadImage(imagePath); // Loads the image from the provided path
        this.x = x; // Sets the x position of the background object
        this.y = 480 - this.height; // Sets the y position to place the background at the bottom of the screen
    }
}
