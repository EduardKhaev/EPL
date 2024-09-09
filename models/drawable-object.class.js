class DrawableObject {
    // Properties for managing the image and position of the object
    img;  // The image object that will be loaded
    imageCache = {};  // Cache to store multiple images (e.g., for animations)
    currentImage = 0;  // Index of the currently displayed image
    x = 120;  // The x-position of the object on the map
    y = 280;  // The y-position of the object on the map
    height = 150;  // The height of the object
    width = 100;  // The width of the object

    offset = {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    }

    // Method to load a single image
    loadImage(path) {
        this.img = new Image();  // Creates a new Image object
        this.img.src = path;  // Sets the source of the image (path to the image file)
    }

    // Method to draw the image on the canvas
    draw(ctx) {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);  // Draws the image at the specified position with the specified size
    }

    // Method to draw a frame around the object (for collision detection or debugging)
    drawFrame(ctx) {
        
        
        // Draws an additional blue frame for the character (e.g., for the hitbox)
        if (this instanceof Character) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 30, this.y + 130, this.width - 70, this.height - 150);  // Shrinks the rectangle for coins
            ctx.stroke();
        }
        
        // Draws a special blue frame for coins
        else if (this instanceof Coins) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x + 75, this.y + 75, this.width - 150, this.height - 150);  // Shrinks the rectangle for coins
            ctx.stroke();
        }

        // Draws a blue frame for chickens
        else if (this instanceof Chicken) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height,);  // Standard frame around the chicken
            ctx.stroke();
        }

        else if (this instanceof Bottles) {
            ctx.beginPath();
            ctx.lineWidth = '5';
            ctx.strokeStyle = 'blue';
            ctx.rect(this.x, this.y, this.width, this.height);  // Standard frame around the chicken
            ctx.stroke();
        }
    }

    // Method to load multiple images (e.g., for animations)
    loadImages(arr) {
        arr.forEach((path) => {
            let img = new Image();  // Creates a new Image object for each image
            img.src = path;  // Sets the source of the image (path to the image file)
            this.imageCache[path] = img;  // Stores the image in the cache with the path as the key
        });
    }
}

/* Explanation of Methods:
loadImage(path): This method loads a single image based on a file path and assigns it to the img property,
which is later used for drawing.

draw(ctx): This method draws the loaded image (img) on the canvas (ctx) at the position (x, y) and with the dimensions width and height.

drawFrame(ctx): This method draws a colored frame around the object depending on its type (e.g., Character, Coin, or Chicken)
to make it visible. This is useful for debugging collisions or hit zones.

loadImages(arr): This method loads multiple images (e.g., for animations). It stores each
loaded image in imageCache, an object that keeps the images with their paths as keys.
*/
