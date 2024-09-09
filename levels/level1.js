// Creates a new instance of Level called level1
const level1 = new Level(
    [
        // Array of enemies in the level
        new Chicken(), // Creates a new Chicken object
        new Chicken(), // Creates another Chicken object
        new Chicken(), // Creates a third Chicken object
        new Endboss(), // Creates an Endboss object
    ],
    [
        // Array of coins in the level
        new Coins(), // Creates a new Coins object
        new Coins(), // Creates another Coins object
    ],
    [
        // Array of bottles in the level
        new Bottles(), // Creates a new Bottles object
        new Bottles(), // Creates another Bottles object
        new Bottles(), // Creates a third Bottles object
        new Bottles(), // Creates a fourth Bottles object
    ],
    [
        // Array of clouds in the level
        new Cloud(), // Creates a new Cloud object
    ],
    [
        // Array of background objects in the level
        // Each BackgroundObject represents a different layer of the background
        new BackgroundObject("img/5_background/layers/air.png", -719), // Background layer 1 at position -719
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", -719), // Background layer 3 at position -719
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", -719), // Background layer 2 at position -719
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", -719), // Background layer 1 at position -719

        new BackgroundObject("img/5_background/layers/air.png", 0), // Background layer 1 at position 0
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 0), // Background layer 3 at position 0
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 0), // Background layer 2 at position 0
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 0), // Background layer 1 at position 0

        new BackgroundObject("img/5_background/layers/air.png", 719), // Background layer 1 at position 719
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719), // Background layer 3 at position 719
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719), // Background layer 2 at position 719
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719), // Background layer 1 at position 719

        new BackgroundObject("img/5_background/layers/air.png", 719*2), // Background layer 1 at position 1438
        new BackgroundObject("img/5_background/layers/3_third_layer/1.png", 719*2), // Background layer 3 at position 1438
        new BackgroundObject("img/5_background/layers/2_second_layer/1.png", 719*2), // Background layer 2 at position 1438
        new BackgroundObject("img/5_background/layers/1_first_layer/1.png", 719*2), // Background layer 1 at position 1438

        new BackgroundObject("img/5_background/layers/air.png", 719*3), // Background layer 1 at position 2157
        new BackgroundObject("img/5_background/layers/3_third_layer/2.png", 719*3), // Background layer 3 at position 2157
        new BackgroundObject("img/5_background/layers/2_second_layer/2.png", 719*3), // Background layer 2 at position 2157
        new BackgroundObject("img/5_background/layers/1_first_layer/2.png", 719*3), // Background layer 1 at position 2157
    ]
);
