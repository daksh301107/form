var canvas, backgroundImage;
var allPlayers;
var gameState = 0;
var PlayerCount;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
 // if (playerCount===1){
   // game.update(1);

  //}
  if (gameState===1){
  clear();
    game.play();
  }
}
