class BottleBar extends DrawableObject {
    IMAGES_BOTTLEBAR = [
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/0.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/20.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/40.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/60.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/80.png",
        "img/7_statusbars/1_statusbar/3_statusbar_bottle/blue/100.png",
       
    ];

    bottleCount = 0;

    constructor() {
        super();
        this.loadImages(this.IMAGES_BOTTLEBAR);
        this.x = 30;
        this.y = 0;
        this.width = 200;
        this.height = 60;
        this.setCoinCount(0);
        
    }
    setCoinCount( bottleCount) {
        this. bottleCount =  bottleCount;
        let path = this.IMAGES_BOTTLEBAR[this.coinImageIndex()];
        this.img = this.imageCache[path];
    }
    coinImageIndex(){
        if (this. bottleCount == 100) {
            return 5;
        } else if (this. bottleCount > 80){
            return 4;
        } else if (this. bottleCount > 60){
            return 3;
        } else if (this. bottleCount > 40){
            return 2;
        } else if (this. bottleCount > 20){
            return 1;
        } else  {
            return 0;
        } 

    }
}