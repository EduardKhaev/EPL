// The CoinBar class extends the DrawableObject class
class CoinBar extends DrawableObject {
    // Array of image paths for the different coin states of the CoinBar
    IMAGES_COINSBAR = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"
    ];

    // Initial number of coins
    coinCount = 0;

    // Constructor is called when a new instance of CoinBar is created
    constructor() {
        super(); // Calls the constructor of the base class DrawableObject
        this.loadImages(this.IMAGES_COINSBAR); // Loads the images from the array
        this.x = 30; // Sets the x-position of the CoinBar
        this.y = 85; // Sets the y-position of the CoinBar
        this.width = 200; // Sets the width of the CoinBar
        this.height = 60; // Sets the height of the CoinBar
        this.setCoinCount(0); // Sets the initial number of coins to 0
    }

    // Method to set the number of coins
    setCoinCount(countCoin) {
        this.coinCount = countCoin; // Updates the number of coins
        // Determines the path of the image corresponding to the current number of coins
        let path = this.IMAGES_COINSBAR[this.coinImageIndex()];
        // Sets the CoinBar's image to the corresponding image
        this.img = this.imageCache[path];
    }

    // Method to determine the index of the image based on the number of coins
    coinImageIndex(){
        // Returns the index of the image corresponding to the current number of coins
        if (this.coinCount == 0) {
            return 0; // Image for 0 coins
        } else if (this.coinCount == 20){
            return 1; // Image for 20 coins
        } else if (this.coinCount == 40){
            return 2; // Image for 40 coins
        } else if (this.coinCount == 60){
            return 3; // Image for 60 coins
        } else if (this.coinCount == 80){
            return 4; // Image for 80 coins
        } else  {
            return 5; // Image for 100 or more coins
        } 
    }
}
