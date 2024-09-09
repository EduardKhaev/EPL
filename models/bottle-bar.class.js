// The BottleBar class extends the DrawableObject class
class BottleBar extends DrawableObject {
    // Array of image paths for the different bottle states of the BottleBar
    IMAGES_BOTTLEBAR = [
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
    ];

    // Initial number of bottles
    bottleCount = 0;

    // Constructor is called when a new instance of BottleBar is created
    constructor() {
        super(); // Calls the constructor of the base class DrawableObject
        this.loadImages(this.IMAGES_BOTTLEBAR); // Loads the images from the array
        this.x = 30; // Sets the x-position of the BottleBar
        this.y = 0; // Sets the y-position of the BottleBar
        this.width = 200; // Sets the width of the BottleBar
        this.height = 60; // Sets the height of the BottleBar
        this.setBottleCount(0); // Sets the initial number of bottles to 0
    }

    // Method to set the number of bottles
    setBottleCount(bottleCount) {
        this.bottleCount = bottleCount; // Updates the number of bottles
        // Determines the path of the image corresponding to the current number of bottles
        let path = this.IMAGES_BOTTLEBAR[this.bottleImageIndex()];
        // Sets the BottleBar's image to the corresponding image
        this.img = this.imageCache[path];
    }

    // Method to determine the index of the image based on the number of bottles
    bottleImageIndex(){
        // Returns the index of the image corresponding to the current number of bottles
        if (this.bottleCount == 100) {
            return 5; // Image for 100 bottles
        } else if (this.bottleCount > 80){
            return 4; // Image for more than 80 bottles
        } else if (this.bottleCount > 60){
            return 3; // Image for more than 60 bottles
        } else if (this.bottleCount > 40){
            return 2; // Image for more than 40 bottles
        } else if (this.bottleCount > 20){
            return 1; // Image for more than 20 bottles
        } else  {
            return 0; // Image for 0-20 bottles
        } 
    }
}
