class Bottles extends StaticObjects{

    height = 100;
    width = 100;
    y = 320
    

    IMAGES_BOTTLES = [
        'img/6_salsa_bottle/salsa_bottle.png'
      
    ];

    

    constructor(){
        super().loadImage(this.IMAGES_BOTTLES[0]);
        this.loadImages(this.IMAGES_BOTTLES);
        this.x = 200 + Math.random() * 2000;
        
    }

    animate() {
        setInterval(() => {
            this.playAnimation(this.IMAGES_BOTTLES);
        }, 200);
    }
}

