const boy=document.getElementById("boy");
const obst=document.getElementById("obstacle");
const displayScore=document.getElementById("score");
const body=document.getElementById("body");
let score=0;
function audiobg(){
    audio= new Audio('audio.mp3')
    audio.play();
}
document.onkeydown=function(key)
{
     if(key.keyCode==38 || key.keyCode==32)
     {
        audiobg();
        boy.classList.add("jump");
        setTimeout(() =>{
            boy.classList.remove("jump");
        },300);
     }
     if(key.keyCode==39)
     {
        x=parseInt(window.getComputedStyle(boy).getPropertyValue("left")); 
        boy.style.left=x+50+"px";
     }
     if(key.keyCode==37)
     {
        x=parseInt(window.getComputedStyle(boy).getPropertyValue("left")); 
        boy.style.left=x-50+"px";
     }
}
function showscore(){
    score++;
    displayScore.innerText=score;
    obstacle.classList.add("speed");
    if(score>99&&score<200)
     obstacle.classList.add("speed1");
    else if(score>199&&score<300)
     obstacle.classList.add("speed2");
    else if(score>299&&score<400) 
     obstacle.classList.add("speed3"); 
}
setInterval(showscore,100);
 let loose=setInterval(function()
 {
 let boyTop =parseInt(window.getComputedStyle(boy).getPropertyValue("top"));
 let boyleft =parseInt(window.getComputedStyle(boy).getPropertyValue("left"));
 let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));
  dx=Math.abs(boyleft-obstacleLeft);
 if(dx < 35 && boyTop >300){
     alert("GAME OVER\nYOUR SCORE is : "+score);
     audio.pause();
     score=0;
     window.location.reload();
 }
});