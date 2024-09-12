// The Endboss class extends the MovableObject class
class Endboss extends MovableObject {

    // Default properties of the endboss
    height = 400; // Height of the endboss
    width = 250; // Width of the endboss
    y = 55; // y position of the endboss
    x = 2500;
    
    

    // Array of image paths for the endboss walking animation
    IMAGES_ALERT = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png'
    ];
    IMAGES_WALKING = [
        'img/4_enemie_boss_chicken/1_walk/G1.png',
        'img/4_enemie_boss_chicken/1_walk/G2.png',
        'img/4_enemie_boss_chicken/1_walk/G3.png',
        'img/4_enemie_boss_chicken/1_walk/G4.png'
    ];
    IMAGES_ATTACK = [
        'img/4_enemie_boss_chicken/3_attack/G13.png',
        'img/4_enemie_boss_chicken/3_attack/G14.png',
        'img/4_enemie_boss_chicken/3_attack/G15.png',
        'img/4_enemie_boss_chicken/3_attack/G16.png',
        'img/4_enemie_boss_chicken/3_attack/G17.png',
        'img/4_enemie_boss_chicken/3_attack/G18.png',
        'img/4_enemie_boss_chicken/3_attack/G19.png',
        'img/4_enemie_boss_chicken/3_attack/G20.png'
        
    ];
    IMAGES_HURT = [
        'img/4_enemie_boss_chicken/4_hurt/G21.png',
        'img/4_enemie_boss_chicken/4_hurt/G22.png',
        'img/4_enemie_boss_chicken/4_hurt/G23.png'
    ];
    IMAGES_DEAD = [
        'img/4_enemie_boss_chicken/5_dead/G24.png',
        'img/4_enemie_boss_chicken/5_dead/G25.png',
        'img/4_enemie_boss_chicken/5_dead/G26.png'
    ];

    

    offset = {
        top: 70,
        left: 20,
        right: 20,
        bottom: 50
    }

    // Constructor for initializing a new instance of Endboss
    constructor() {
        super(); // Calls the constructor of the MovableObject class
        this.loadImage('img/4_enemie_boss_chicken/2_alert/G5.png')
        this.loadImages(this.IMAGES_ALERT);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        // Sets the initial x position of the endboss
        this.animate(); // Starts the animation
        this.moveEndboss();
    }

    // Method to handle endboss animation
    animate() {
        // Sets up an interval for playing the endboss walking animation
        setInterval(() => {
            if (this.isDead()) {
              this.playAnimation(this.IMAGES_DEAD);
      
              if (this.isHurt) {
                this.playAnimation(this.IMAGES_HURT);
              }
            }
          }, 300);
        
        
    }
    moveEndboss() {
        this.moveEndbossInterval = setInterval(() => {
            const distance = this.x - world.character.x;
    
            if (distance <= 300) {
                this.increaseSpeed(10);
                this.playAttackAnimation();
            } else if (distance < 500) {
                this.increaseSpeed(2);  // Optional: separate speed for walking
                this.playWalkingAnimation();
            } else {
                this.speed = 1.5; // Set default speed when outside the range
            }
            
            this.moveLeft(); // Move left in both cases when distance < 600
        }, 100); // 1000 / 10 is 100ms
    }
    
    // Helper methods for clarity and modularity
    increaseSpeed(value) {
        this.speed = value;
    }
    
    playWalkingAnimation() {
        this.playAnimation(this.IMAGES_WALKING);
    }
    
    playAttackAnimation() {
        this.playAnimation(this.IMAGES_ATTACK);
    }
}
