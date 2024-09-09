class World {
  // Initialize properties
  character = new Character();  // Create a new Character object
  level = level1;  // Reference to the current level (here "level1")
  canvas;  // Placeholder for the drawing canvas
  ctx;  // 2D context for the canvas
  keyboard;  // Placeholder for keyboard input
  camera_x = 0;  // Camera position on the x-axis
  statusBar = new StatusBar();  // Create a new status bar (e.g., for health display)
  coinBar = new CoinBar();  // Create a new display for collected coins
  bottleBar = new BottleBar();  // Create a new display for collected bottles
  throwableObjects = [];  // Array for objects that the character can throw (e.g., bottles)

  // Constructor is called when a new instance of the class is created
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");  // Get the 2D context for drawing on the canvas
    this.canvas = canvas;  // Assign the canvas
    this.keyboard = keyboard;  // Assign the keyboard control
    this.draw();  // Start the drawing process
    this.setWorld();  // Set the link between World and Character
    this.run();  // Start the main game loop (e.g., collision detection, logic)
  }

  // Link the world with the character (allows the character to access the world)
  setWorld() {
    this.character.world = this;  // Set a reference to the world in the character object
  }

  // Main game loop that regularly checks logic (collisions, etc.)
  run() {
    setInterval(() => {  
      this.checkCollisions();  // Check for collisions between objects
      this.checkThrowObjects();  // Check if the player wants to throw an object
    }, 200);  // Execute this logic every 200 milliseconds
  }

  // Check if the player wants to throw an object (bottle)
  checkThrowObjects() {
    if (this.keyboard.D) {  // If the 'D' key is pressed
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);  // Create a new bottle near the character
      this.throwableObjects.push(bottle);  // Add the bottle to the array of throwable objects
    }
  }

  // Check collisions between the character and enemies, coins, and bottles
  checkCollisions() {
    // Check collision with enemies
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {  // If the character collides with an enemy
        this.character.hit();  // Reduce the character's energy
        this.statusBar.setHealthPercentage(this.character.energy);  // Update the health display in the StatusBar
      }
    });
    
    // Check collision with coins
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) {  // If the character touches a coin
        this.character.collect(coin);  // Collect the coin (e.g., increase the coin count)
        this.level.coins.pop(coin);  // Remove the coin from the level
        this.coinBar.setCoinCount(this.character.coin_count);  // Update the coin bar
      }
    });

    // Check collision with bottles
    this.level.bottles.forEach((bottle) => {
      if (this.character.isColliding(bottle)) {  // If the character touches a bottle
        this.character.collect(bottle);  // Collect the bottle (e.g., increase the bottle count)
        this.level.bottles.pop(bottle);  // Remove the bottle from the level
        this.bottleBar.setBottleCount(this.character.bottle_count);  // Update the bottle bar
      }
    });
  }

  // Draw all objects on the canvas
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  // Clear the canvas for a new frame
    this.ctx.translate(this.camera_x, 0);  // Move the camera horizontally

    this.addObjectsToMap(this.level.backgroundObjects);  // Add background objects to the canvas
    this.addToMap(this.character);  // Add the character to the canvas
    this.addObjectsToMap(this.level.clouds);  // Add clouds to the canvas
    this.addObjectsToMap(this.level.enemies);  // Add enemies to the canvas
    this.addObjectsToMap(this.level.coins);  // Add coins to the canvas
    this.addObjectsToMap(this.level.bottles);  // Add bottles to the canvas
    this.addObjectsToMap(this.throwableObjects);  // Add throwable objects (bottles) to the canvas

    this.ctx.translate(-this.camera_x, 0);  // Move the camera back

    // Add the status bars to the canvas (e.g., health bar, coin bar, bottle bar)
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.bottleBar);

    this.ctx.translate(this.camera_x, 0);  // Move the camera back again
    this.ctx.translate(-this.camera_x, 0);  // Move the camera back

    // Draw the next frame
    self = this;
    requestAnimationFrame(function () {
      self.draw();  // Continuously call the draw method to animate the game
    });
  }

  // Add a group of objects to the map
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);  // Draw each object from the array
    });
  }

  // Add a single object to the map
  addToMap(mo) {
    if (mo.otherDirection) {  // If the object should face the opposite direction
      this.flipImage(mo);  // Flip the image horizontally
    }
    mo.draw(this.ctx);  // Draw the object
    mo.drawFrame(this.ctx);  // Draw the object's frame (if necessary)

    if (mo.otherDirection) {  // If the object was flipped
      this.flipImageBack(mo);  // Flip the image back
    }
  }

  // Flip the image horizontally
  flipImage(mo) {
    this.ctx.save();  // Save the current state of the context
    this.ctx.translate(mo.width, 0);  // Move the image position
    this.ctx.scale(-1, 1);  // Scale the image horizontally by -1 (flips it)
    mo.x = mo.x * -1;  // Invert the x-position of the object
  }

  // Reset the flipped image
  flipImageBack(mo) {
    mo.x = mo.x * -1;  // Invert the x-position back
    this.ctx.restore();  // Restore the context to the saved state
  }
}
