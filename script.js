// create Phaser.Game object assigned to global variable named game
var game = new Phaser.Game(800, 600, Phaser.AUTO, "game", {
  preload: preload,
  create: create,
  update: update,
});

// declare other global variables (for sprites, etc.)
let titleText;
let startButton;

// preload game assets - runs one time when webpage first loads
function preload() {}

// create game world - runs one time after preload finishes
function create() {
    titleText = game.add.text(10, 10, "Trivia Game", { color: 'blue', font: '24px sans-serif' });
    console.log(titleText);
}

// update game - runs repeatedly in loop after create finishes
function update() {}

// add custom functions (for collisions, etc.) - only run when called
