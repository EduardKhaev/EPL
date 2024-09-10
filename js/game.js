// Declare global variables for canvas, world, and keyboard
let canvas;
let world;
let keyboard = new Keyboard(); // Create a new instance of Keyboard to handle key states

// Function to initialize the game
function init() {
    canvas = document.getElementById('canvas'); // Get the canvas element from the HTML
    world = new World(canvas, keyboard); // Create a new World instance, passing the canvas and keyboard
    let startScreenImage = document.querySelector('.startscreen');
    let startGameBtn = document.querySelector('.startgamebtn');
    startScreenImage.style.display = 'none';
    startGameBtn.style.display = 'none';
    

    // Log the character instance to the console for debugging purposes
    console.log('My character is', world.character);
}

// Event listener for keydown events
window.addEventListener("keydown", (e) => {
    // Update the keyboard object based on the key pressed
    if(e.keyCode == 39) { // Right arrow key
        keyboard.RIGHT = true;
    }
    if(e.keyCode == 37) { // Left arrow key
        keyboard.LEFT = true;
    }
    if(e.keyCode == 38) { // Up arrow key
        keyboard.UP = true;
    }
    if(e.keyCode == 40) { // Down arrow key
        keyboard.DOWN = true;
    }
    if(e.keyCode == 32) { // Space bar
        keyboard.SPACE = true;
    }
    if(e.keyCode == 68) { // 'D' key
        keyboard.D = true;
    }
});

// Event listener for keyup events
window.addEventListener("keyup", (e) => {
    // Update the keyboard object when a key is released
    if(e.keyCode == 39) { // Right arrow key
        keyboard.RIGHT = false;
    }
    if(e.keyCode == 37) { // Left arrow key
        keyboard.LEFT = false;
    }
    if(e.keyCode == 38) { // Up arrow key
        keyboard.UP = false;
    }
    if(e.keyCode == 40) { // Down arrow key
        keyboard.DOWN = false;
    }
    if(e.keyCode == 32) { // Space bar
        keyboard.SPACE = false;
    }
    if(e.keyCode == 68) { // 'D' key
        keyboard.D = false;
    }
    // Log the event to the console for debugging purposes
    console.log(e);
});
