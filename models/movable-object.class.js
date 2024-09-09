// The MovableObject class extends DrawableObject to add additional functions like movement and collision detection
class MovableObject extends DrawableObject {
    
    speed = 0.15;  // Speed of movement along the x-axis
    otherDirection = false;  // Used to determine if the object is facing the opposite direction (left)
    speedY = 0;  // Speed of movement along the y-axis (important for jumping and falling)
    acceleration = 1.5;  // Acceleration (used for gravity, for example)
    energy = 100;  // Energy value of the object (hit points or similar)
    lastHit = 0;  // Timestamp of the last hit (for hit tracking)

    // Method to apply gravity
    applyGravity(){
        // setInterval is used to continuously apply gravity every 16.67ms (60 FPS)
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;  // Move the object upward on the y-axis (negative value)
                this.speedY -= this.acceleration;  // Decrease speed on the y-axis due to acceleration (gravity)
            }
        }, 1000 / 60);
    }

    // Checks if the object is above the ground
    isAboveGround(){
        // ThrowableObjects are always "above the ground" as they are flying
        if (this instanceof ThrowableObject){
           return true; 
        } else {
        // Normal objects are only above the ground if their y-position is less than 120
        return this.y < 120;
        }
    }

    // Checks if this object is colliding with another `mo` (Movable Object)
    isColliding(mo){
        return this.x + this.width > mo.x &&  // Check if the right side of this object touches the left side of the other
            this.y + 100 + this.height - 100 > mo.y &&  // Check if the bottom of this object touches the top of the other
            this.x < mo.x &&  // Check if the left side of this object touches the right side of the other
            this.y < mo.y + mo.height;  // Check if the top of this object touches the bottom of the other
    }

    // Reduces the energy of the object when it is hit
    hit(){
        this.energy -= 5;  // Reduces energy by 5 on a hit
        if (this.energy < 0) {
            this.energy = 0;  // Ensure that energy does not become negative
        } else{
            this.lastHit = new Date().getTime();  // Store the timestamp of the hit
        }
    }

    // Checks if the object is dead (has no energy left)
    isDead() {
        return this.energy == 0;
    }

    // Checks if the object was recently hit (vulnerability window)
    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;  // Calculate the time since the last hit
        timepassed = timepassed / 1000;  // Convert time to seconds
        return timepassed < 1;  // The object is considered hurt if the last hit was less than 1 second ago
    }

    // Plays an animation by cycling through a list of images
    playAnimation(images) {
        let i = this.currentImage % images.length;  // Determine the index of the current image based on the current image and the number of images
        let path = images[i];  // Select the image from the list
        this.img = this.imageCache[path];  // Load the image from the cache
        this.currentImage++;  // Increment the index for the next image
    }

    // Moves the object to the right
    moveRight() {
        this.x += this.speed;  // Increase the x-position of the object (move right)
        this.walking_sound.play();  // Play walking sound (if defined)
    }

    // Moves the object to the left
    moveLeft(){
        this.x -= this.speed;  // Decrease the x-position of the object (move left)
    }

    // Makes the object jump
    jump(){
        this.speedY = 30;  // Set the y-speed to a positive value so the object jumps upward
    }
}

/*
Explanation of Methods:
applyGravity(): This method simulates gravity by changing the object's y-position based on speedY (the vertical speed). The speedY is decreased by acceleration (gravity), simulating falling.

isAboveGround(): This method checks if the object is above the ground. If the object is a ThrowableObject, it always returns true as these objects are flying.

isColliding(mo): This method checks if this object is colliding with another object mo. It uses the position and size of both objects to determine a collision.

hit(): This method reduces the object's energy by 5 on a hit and stores the timestamp of the hit. If the energy falls below 0, it is set to 0.

isDead(): This method returns true if the object's energy is 0, meaning the object is dead.

isHurt(): This method checks if the object was recently hit based on the timestamp of the last hit. If the hit was less than 1 second ago, the object is considered hurt.

playAnimation(images): This method plays an animation by cycling through a list of images and applying the current image to the object.

moveRight(): This method moves the object to the right and optionally plays a walking sound.

moveLeft(): This method moves the object to the left.

jump(): This method makes the object jump by setting the vertical speed (speedY) to a positive value.
 */
