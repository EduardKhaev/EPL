class DrawableObject {
    img;
    imageCache = {};
    currentImage = 0;
    x = 120;
    y = 280;
    height = 150;
    width = 100;
    
    
    
    
    
    loadImage(path) {
        this.img = new Image();
        this.img.src = path;
    }


    draw(ctx){
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        
    }

    drawFrame(ctx){
        if (this instanceof Character || this instanceof Coins || this instanceof Chicken){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'red';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();
        }
        if (this instanceof Character ) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y + 100, this.width, this.hit_box_height);
            ctx.stroke();
        }
        else if (this instanceof Coins){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 50, this.y + 50, this.width -100, this.height - 100);
            ctx.stroke();
        }


        else if( this instanceof Chicken ){
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);
            ctx.stroke();

        }
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

}