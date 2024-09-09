// The ThrowableObject class extends the MovableObject class
class ThrowableObject extends MovableObject {

    // Constructor for initializing a new instance of ThrowableObject
    constructor(x, y) {
        super(); // Calls the constructor of the MovableObject class
        this.loadImage('img/6_salsa_bottle/salsa_bottle.png'); // Loads the image for the throwable object
        this.x = x; // Sets the initial x position
        this.y = y; // Sets the initial y position
        this.height = 60; // Sets the height of the throwable object
        this.width = 50; // Sets the width of the throwable object
        this.throw(); // Starts the throwing action
    }

    // Method to handle the throwing action of the object
    throw() {
        this.speedY = 30; // Sets the vertical speed to simulate the throw
        this.applyGravity(); // Applies gravity to the object
        // Sets up an interval for moving the object horizontally
        setInterval(() => {
            this.x += 10; // Moves the object to the right by 10 pixels every interval
        }, 25); // Interval in milliseconds
    }
}
