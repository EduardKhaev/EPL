class EndbossBar extends DrawableObject {
    // Array of image paths for different health states of the status bar
    IMAGES_ENDBOSSHEALTH = [
        "img/7_statusbars/2_statusbar_endboss/blue/blue0.png",
        "img/7_statusbars/2_statusbar_endboss/blue/blue20.png",
        "img/7_statusbars/2_statusbar_endboss/blue/blue40.png",
        "img/7_statusbars/2_statusbar_endboss/blue/blue60.png",
        "img/7_statusbars/2_statusbar_endboss/blue/blue80.png",
        "img/7_statusbars/2_statusbar_endboss/blue/blue100.png",
    ];

    // Initial health percentage of the status bar
    percentageBossHealth = 100;

    // Constructor is called when a new instance of StatusBar is created
    constructor() {
        super(); // Calls the constructor of the base class DrawableObject
        this.loadImages(this.IMAGES_ENDBOSSHEALTH); // Loads images from the array
        this.x = 500; // Sets the x position of the status bar
        this.y = 10; // Sets the y position of the status bar
        this.width = 200; // Sets the width of the status bar
        this.height = 60; // Sets the height of the status bar
        this.setBossHealthPercentage(100); // Sets the initial health to 100%
    }

    // Method to set the health percentage
    setBossHealthPercentage(percentageBossHealth) {
        this.percentageBossHealth = percentageBossHealth; // Updates the health percentage
        // Determines the path of the image corresponding to the current health state
        let path = this.IMAGES_ENDBOSSHEALTH[this.healthBossImageIndex()];
        // Sets the status bar image to the corresponding image
        this.img = this.imageCache[path];
    }

    // Method to determine the index of the image based on the health percentage
    healthBossImageIndex(){
        // Returns the index of the image that corresponds to the current health percentage
        if (this.percentageBossHealth == 100) {
            return 5; // Image for 100% health
        } else if (this.percentageBossHealth > 80){
            return 4; // Image for more than 80% health
        } else if (this.percentageBossHealth > 60){
            return 3; // Image for more than 60% health
        } else if (this.percentageBossHealth > 40){
            return 2; // Image for more than 40% health
        } else if (this.percentageBossHealth > 20){
            return 1; // Image for more than 20% health
        } else  {
            return 0; // Image for 0-20% health
        } 
    }

    percentageBossHealth(){
        return this.percentageBossHealth;
    }

}