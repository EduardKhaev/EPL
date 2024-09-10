// The MovableObject class extends DrawableObject to add additional functions like movement and collision detection
class MovableObject extends DrawableObject {
    
    speed = 0.15; 
    otherDirection = false; 
    speedY = 0;  
    acceleration = 1.5; 
    energy = 100;
    lastHit = 0; 
    coin = 20;
    bottle = 20;

    // Method to apply gravity
    applyGravity(){
       
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY; 
                this.speedY -= this.acceleration; 
            }
        }, 1000 / 60);
    }

    // Checks if the object is above the ground
    isAboveGround(){
        
        if (this instanceof ThrowableObject){
           return true; 
        } else {
       
        return this.y < 120;
        }
    }

    
    isColliding(mo) {

        
        return this.x + this.width - this.offset.right > mo.x + mo.offset.left &&
                this.y + this.height - this.offset.bottom > mo.y + mo.offset.top &&
                this.x + this.offset.left < mo.x + mo.width - mo.offset.right &&
                this.y + this.offset.top < mo.y + mo.height - mo.offset.bottom;
    }
    

    // Reduces the energy of the object when it is hit
    hit(){
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else{
            this.lastHit = new Date().getTime();
        }
    }

    // Checks if the object is dead (has no energy left)
    isDead() {
        return this.energy == 0;
    }

    // Checks if the object was recently hit (vulnerability window)
    isHurt(){
        let timepassed = new Date().getTime() - this.lastHit;
        timepassed = timepassed / 1000;
        return timepassed < 1;
    }

    // Plays an animation by cycling through a list of images
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    // Moves the object to the right
    moveRight() {
        this.x += this.speed;
        this.walking_sound.play();
    }

    // Moves the object to the left
    moveLeft(){
        this.x -= this.speed;  
    }

    // Makes the object jump
    jump(){
        this.speedY = 30;  
    }
}
