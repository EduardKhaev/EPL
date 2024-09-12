class CoinBar extends DrawableObject {
    IMAGES_COINSBAR = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"
    ];

    // Initial number of coins
    percentage = 0;

    // Constructor is called when a new instance of CoinBar is created
    constructor() {
        super();
        this.loadImages(this.IMAGES_COINSBAR);
        this.x = 30;
        this.y = 85;
        this.width = 200;
        this.height = 60;
        this.setPercentage(0);
    }
    
    

    // Method to set the number of coins
    setPercentage(percentage) {
        this.percentage = percentage;
        let path = this.IMAGES_COINSBAR[this.coinImageIndex()];
        this.img = this.imageCache[path];
    }

    // Method to determine the index of the image based on the number of coins
    coinImageIndex(){
        if (this.percentage == 0) {
            return 0;
        } else if (this.percentage == 20){
            return 1;
        } else if (this.percentage == 40){
            return 2;
        } else if (this.percentage == 60){
            return 3;
        } else if (this.percentage == 80){
            return 4;
        } else  {
            return 5;
        } 
    }
}
