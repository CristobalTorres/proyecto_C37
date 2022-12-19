var canvas, backgroundImage;

var questions;

var question, contestant, quiz;

var backgroundImage

var database;

function preload(){
backgroundImage = loadImage("backGround.jpg")
}
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.app();
  quiz = new Quiz();
  quiz.start();
}


function draw(){
  background(backgroundImage);

}
