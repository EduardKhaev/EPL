// The Level class represents a level in the game
class Level {
    // Arrays to hold different types of objects in the level
    enemies; // Array of enemy objects in the level
    coins; // Array of coin objects in the level
    bottles; // Array of bottle objects in the level
    clouds; // Array of cloud objects in the level
    backgroundObjects; // Array of background objects in the level

    // The x-coordinate value where the level ends
    level_end_x = 2200;

    // Constructor for initializing a new instance of Level
    constructor(enemies, coins, bottles, clouds, backgroundObjects) {
        // Initializes the level's arrays with the provided arguments
        this.enemies = enemies; // Set enemies array
        this.coins = coins; // Set coins array
        this.bottles = bottles; // Set bottles array
        this.clouds = clouds; // Set clouds array
        this.backgroundObjects = backgroundObjects; // Set backgroundObjects array
    }
}
