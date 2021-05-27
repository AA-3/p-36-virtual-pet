var gameState=0;
var playerCount;
var database,position;
var form,player,game;
var allPlayers;

function setup(){
    database=firebase.database();
    createCanvas(displayWidth-20,displayHeight-30);

   
game=new Game();
game.getState();
game.start();

}

function draw(){
   if(playerCount==4){
       game.update(1);
   }
   if(gameState==1){
       clear();
       game.play();
       
   }
}

