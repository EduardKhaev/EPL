// The Cloud class extends the MovableObject class
class Cloud extends MovableObject {
    // Default properties of the cloud
    y = 20; // y position of the cloud
    width = 500; // Width of the cloud
    height = 250; // Height of the cloud

    // Constructor for initializing a new instance of Cloud
    constructor() {
        super(); // Calls the constructor of the MovableObject class
        this.loadImage('img/5_background/layers/4_clouds/1.png'); // Loads the initial image for the cloud

        // Sets the initial x position to a random value within a range
        this.x = 0 + Math.random() * 500;
        this.animate(); // Starts the animation
    }

    // Method to handle cloud animation
    animate() {
        this.moveLeft(); // Moves the cloud to the left
    }
}
