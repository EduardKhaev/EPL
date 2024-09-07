class CoinBar extends DrawableObject {
    IMAGES_COINSBAR = [
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/0.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/20.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/40.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/60.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/80.png",
        "img/7_statusbars/1_statusbar/1_statusbar_coin/blue/100.png"
    ];

    coinCount = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_COINSBAR);
        this.x = 30;
        this.y = 85;
        this.width = 200;
        this.height = 60;
        this.setCoinCount(0);
        
    }
    setCoinCount(countCoin) {
        this.coinCount = countCoin;
        let path = this.IMAGES_COINSBAR[this.coinImageIndex()];
        this.img = this.imageCache[path];
    }
    coinImageIndex(){
        if (this.coinCount == 0) {
            return 0;
        } else if (this.coinCount == 20){
            return 1;
        } else if (this.coinCount == 40){
            return 2;
        } else if (this.coinCount == 60){
            return 3;
        } else if (this.coinCount == 80){
            return 4;
        } else  {
            return 5;
        } 

    }
}
