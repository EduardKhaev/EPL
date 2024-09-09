// The StaticObjects class inherits from DrawableObject.
// It represents static objects such as coins or bottles that do not move.
class StaticObjects extends DrawableObject {

    coin = 20;// Default value for coins, e.g., how many coins this object represents
    bottle = 20;// Default value for bottles, e.g., how many bottles this object represents

    // The StaticObjects class inherits all methods and properties from DrawableObject,
    // including methods for loading images (loadImage(), loadImages()),
    // and for drawing the objects (draw(), drawFrame()).
}
