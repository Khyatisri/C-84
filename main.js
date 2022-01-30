canvas=document.getElementById("myCanvas");
ctx= canvas.getContext("2d");
marsimg="mars.jpg";
roverimg="rover.png";
Roverx= 10;
Rovery=30;
RoverWidth=100;
RoverHeight=100;

function add(){
marscanvasimg=new Image();
marscanvasimg.src=marsimg;
marscanvasimg.onload= uploadBackground;
rovercanvasimg= new Image();
rovercanvasimg.src=roverimg;
rovercanvasimg.onload= uploadRover;
}

function uploadBackground(){
ctx.drawImage(marscanvasimg,0,0,canvas.width,canvas.height);
}

function uploadRover(){
ctx.drawImage( rovercanvasimg,Roverx,Rovery,RoverWidth,RoverHeight);
}