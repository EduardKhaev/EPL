class StatusBar extends DrawableObject {
    IMAGES_HEALTH = [
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
        "img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
    ];
    IMAGES_COINS = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"
    ];

    percentageHealth = 100;
    coinCount = 0;

    
    constructor() {
        super();
        this.loadImages(this.IMAGES_HEALTH);
        this.x = 30;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setHealthPercentage(100);
        
    }

    setHealthPercentage(percentageHealth) {
        this.percentageHealth = percentageHealth;
        let path = this.IMAGES_HEALTH[this.healthImageIndex()];
        this.img = this.imageCache[path];
    }

    healthImageIndex(){
        if (this.percentageHealth == 100) {
            return 5;
        } else if (this.percentageHealth > 80){
            return 4;
        } else if (this.percentageHealth > 60){
            return 3;
        } else if (this.percentageHealth > 40){
            return 2;
        } else if (this.percentageHealth > 20){
            return 1;
        } else  {
            return 0;
        } 

    }
}