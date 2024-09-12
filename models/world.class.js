class World {
  
  character = new Character(); 
  level = level1;
  canvas;
  ctx;
  keyboard;
  camera_x = 0;

  statusBar = new StatusBar();
  coinBar = new CoinBar();
  bottleBar = new BottleBar();
  endbossBar = new EndbossBar();

  coins = 0; 
  bottles = 0;
  throwableObjects = [];

  // Constructor is called when a new instance of the class is created
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setWorld();
    this.run();
  }

  // Link the world with the character (allows the character to access the world)
  setWorld() {
    this.character.world = this;
  }

  // Main game loop that regularly checks logic (collisions, etc.)
  run() {
    setInterval(() => {  
      this.checkCollisions();
      this.checkThrowObjects();
      }, 100);
  }

  // Check if the player wants to throw an object (bottle)
  checkThrowObjects() {
    if (this.keyboard.D) { 
      let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
      this.throwableObjects.push(bottle);
    }
  }

  // Check collisions between the character and enemies, coins, and bottles
  checkCollisions() {
    // Check collision with enemies
    this.level.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        this.character.hit(); 
        this.statusBar.setPercentage(this.character.energy);
      }
    });
    
    // Check collision with coins
    this.level.coins.forEach((coin) => {
      if (this.character.isColliding(coin)) { 
        this.character.collect(coin);  
        this.level.coins = this.level.coins.filter(c => c !== coin);  
        this.coinBar.setPercentage(this.character.coins); 
      }
    });

    // Check collision with bottles
    this.level.bottles.forEach((bottle) => {
      if (this.character.isColliding(bottle)) { 
        this.character.collect(bottle);  
        this.level.bottles = this.level.bottles.filter(c => c !== bottle);
        this.bottleBar.setPercentage(this.character.bottles);  
      }
    });

    


  }

  // Draw all objects on the canvas
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);  
    this.ctx.translate(this.camera_x, 0);

    this.addObjectsToMap(this.level.backgroundObjects);
    this.addToMap(this.character);  
    this.addObjectsToMap(this.level.clouds);
    this.addObjectsToMap(this.level.enemies); 
    this.addObjectsToMap(this.level.coins);  
    this.addObjectsToMap(this.level.bottles); 
    this.addObjectsToMap(this.throwableObjects);  

    this.ctx.translate(-this.camera_x, 0);  

    // Add the status bars to the canvas (e.g., health bar, coin bar, bottle bar)
    this.addToMap(this.statusBar);
    this.addToMap(this.coinBar);
    this.addToMap(this.bottleBar);
    this.addToMap(this.endbossBar);

    this.ctx.translate(this.camera_x, 0);  
    this.ctx.translate(-this.camera_x, 0); 

    // Draw the next frame
    self = this;
    requestAnimationFrame(function () {
      self.draw();  
    });
  }

  // Add a group of objects to the map
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o); 
    });
  }

  // Add a single object to the map
  addToMap(mo) {
    if (mo.otherDirection) {  
      this.flipImage(mo); 
    }
    mo.draw(this.ctx); 
    mo.drawFrame(this.ctx); 

    if (mo.otherDirection) {
      this.flipImageBack(mo); 
    }
  }

  // Flip the image horizontally
  flipImage(mo) {
    this.ctx.save(); 
    this.ctx.translate(mo.width, 0); 
    this.ctx.scale(-1, 1); 
    mo.x = mo.x * -1;
  }

  // Reset the flipped image
  flipImageBack(mo) {
    mo.x = mo.x * -1; 
    this.ctx.restore(); 
  }
}
