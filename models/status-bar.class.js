// The StatusBar class inherits from the DrawableObject class
class StatusBar extends DrawableObject {
    // Array of image paths for different health states of the status bar
    IMAGES_HEALTH = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
    ];

    // Initial health percentage of the status bar
    percentageHealth = 100;

    // Constructor is called when a new instance of StatusBar is created
    constructor() {
        super(); // Calls the constructor of the base class DrawableObject
        this.loadImages(this.IMAGES_HEALTH); // Loads images from the array
        this.x = 30; // Sets the x position of the status bar
        this.y = 40; // Sets the y position of the status bar
        this.width = 200; // Sets the width of the status bar
        this.height = 60; // Sets the height of the status bar
        this.setHealthPercentage(100); // Sets the initial health to 100%
    }

    // Method to set the health percentage
    setHealthPercentage(percentageHealth) {
        this.percentageHealth = percentageHealth; // Updates the health percentage
        // Determines the path of the image corresponding to the current health state
        let path = this.IMAGES_HEALTH[this.healthImageIndex()];
        // Sets the status bar image to the corresponding image
        this.img = this.imageCache[path];
    }

    // Method to determine the index of the image based on the health percentage
    healthImageIndex(){
        // Returns the index of the image that corresponds to the current health percentage
        if (this.percentageHealth == 100) {
            return 5; // Image for 100% health
        } else if (this.percentageHealth > 80){
            return 4; // Image for more than 80% health
        } else if (this.percentageHealth > 60){
            return 3; // Image for more than 60% health
        } else if (this.percentageHealth > 40){
            return 2; // Image for more than 40% health
        } else if (this.percentageHealth > 20){
            return 1; // Image for more than 20% health
        } else  {
            return 0; // Image for 0-20% health
        } 
    }
}
/*
Summary:
IMAGES_HEALTH: An array containing image paths for different health levels of the status bar.
percentageHealth: Represents the initial health percentage of the status bar.
constructor: Initializes the status bar by loading images, setting position, size, and initial health percentage.
setHealthPercentage: Updates the health percentage and changes the displayed image based on the current health.
healthImageIndex: Determines the index of the image that represents the current health percentage.
*/