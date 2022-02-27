/**
 * Created by choudhary1645 on 11/28/2017.
 */


var frog =  new Image();
frog.src = "Pictures/Frog.png";
var car =  new Image();
car.src = "Pictures/car1.png";
var carX= 500;
var carY=400;
var car2 =  new Image();
car2.src = "Pictures/car1.png";
var car2X= -150;
var car2Y=350;
var car3 =  new Image();
car3.src = "Pictures/car1.png";
var car3X= -200 ;
var car3Y=450;
var car4 =  new Image();
car4.src = "Pictures/car1.png";
var car4X= 400 ;
var car4Y=500;
var car5 =  new Image();
car5.src = "Pictures/car1.png";
var car5X= 500 ;
var car5Y=500;
var car6 =  new Image();
car6.src = "Pictures/car1.png";
var car6X= -400 ;
var car6Y=450;
var car7 =  new Image();
car7.src = "Pictures/car1.png";
var car7X= -20 ;
var car7Y=350;
var car8 =  new Image();
car8.src = "Pictures/car1.png";
var car8X= 600 ;
var car8Y=400;
var log =  new Image();
log.src = "Pictures/log.png";
var logX=-100;
var logY=220;
var log1 =  new Image();
log1.src = "Pictures/log.png";
var log1X=500;
var log1Y=150;
var log2 =  new Image();
log2.src = "Pictures/log.png";
var log2X=-350;
var log2Y=220;
var log3 =  new Image();
log3.src = "Pictures/log.png";
var log3X=750;
var log3Y=150;
var log4 =  new Image();
log4.src = "Pictures/log.png";
var log4X=-150;
var log4Y=90;
var log5 =  new Image();
log5.src = "Pictures/log.png";
var log5X=-400;
var log5Y=90;
var log6 =  new Image();
log6.src = "Pictures/log.png";
var log6X=750;
var log6Y=40;
var log7 =  new Image();
log7.src = "Pictures/log.png";
var log7X=550;
var log7Y=40;
var frogX=200;
var frogY=550;
var waterX=0;
var waterY=40;
var endgameX=0;
var endgameY=0;
water==false;
lognum1==false;
lognum2==false;
lognum3==false;
lognum4==false;
lognum5==false;
lognum6==false;
lognum7==false;
lognum8==false;
var lives=3;


function initialize() {
    begin();
    rode();
    rodeline();
    rodeline2();
    rodeline3();
    rodeline4();
    grass();
    water();
    endgrass();
    drawFrog();
    endGame();
}


function begin(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#57e420";
    ctx.fillRect(0, 550, 400, 50);
}

function rode(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 350, 400, 200);
}

function rodeline(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff302";
    ctx.fillRect(10, 450, 50, 10);
}

function rodeline2(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff302";
    ctx.fillRect(110, 450, 50, 10);
}
function rodeline3(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff302";
    ctx.fillRect(210, 450, 50, 10);
}
function rodeline4(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff302";
    ctx.fillRect(310, 450, 50, 10);
}


function grass(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#67ff00";
    ctx.fillRect(0, 250, 400, 100);
}

function water(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0099ff";
    ctx.fillRect(waterX, waterY, 400, 260);
}

function endgrass(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#57e420";
    ctx.fillRect(0, 0, 400, 40);
}

function endgame(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(endgameX, endgameY, 400, 10);
}

function drawFrog() {
    var canvas = document.getElementById("myCanvas");
   var ctx = canvas.getContext("2d");
    ctx.drawImage(frog,frogX,frogY,25,25);
}


function car1(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car,carX,carY,50,50);
            if (carX < 0){
                carX = 500;
            }
        }

  function carnum2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car2,car2X,car2Y,50,50);
            if (car2X > 400){
                car2X = -150;
            }
        }

function carnum3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car3,car3X,car3Y,50,50);
    if (car3X > 400){
        car3X = -200;
    }
}

function carnum4(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car4,car4X,car4Y,50,50);
    if (car4X < 0){
        car4X = 400;
    }
}

function carnum5(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car5,car5X,car5Y,50,50);
    if (car5X < 0){
        car5X = 500;
    }
}

function carnum6(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car6,car6X,car6Y,50,50);
    if (car6X > 400){
        car6X = -400;
    }
}

function carnum7(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car7,car7X,car7Y,50,50);
    if (car7X > 400){
        car7X = -20;
    }
}

function carnum8(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(car8,car8X,car8Y,50,50);
    if (car8X < 0){
        car8X = 600;
    }
}
function lognum1(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log,logX,logY,150,125);
    if (logX > 400){
        logX = -100;
    }
}

function lognum2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log1,log1X,log1Y,150,125);
    if (log1X < 0){
        log1X = 500;
    }
}

function lognum3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log2,log2X,log2Y,150,125);
    if (log2X > 400){
        log2X = -350;
    }
}

function lognum4(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log3,log3X,log3Y,150,125);
    if (log3X < 0){
        log3X = 750;
    }
}

function lognum5(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log4,log4X,log4Y,150,125);
    if (log4X > 400){
        log4X = -150;
    }
}

function lognum6(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log5,log5X,log5Y,150,125);
    if (log5X > 400){
        log5X = -400;
    }
}

function lognum7(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log6,log6X,log6Y,150,125);
    if (log6X < 0){
        log6X = 750;
    }
}

function lognum8(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(log7,log7X,log7Y,150,125);
    if (log7X < 0){
        log7X = 550;
    }
}

function checkCollision(){
    if (frogX< carX + 50 && frogX + 25 > carX && frogY < carY + 25 && frogY + 25 > carY) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

function checkCollision2(){
    if (frogX< car2X + 50 && frogX + 25 > car2X && frogY < car2Y + 25 && frogY + 25 > car2Y) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

function checkCollision3(){
    if (frogX< car3X + 50 && frogX + 25 > car3X && frogY < car3Y + 25 && frogY + 25 > car3Y) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

function checkCollision4(){
    if (frogX< car4X + 50 && frogX + 25 > car4X && frogY < car4Y + 25 && frogY + 25 > car4Y) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

function checkCollision5(){
    if (frogX< car5X + 50 && frogX + 25 > car5X && frogY < car5Y + 25 && frogY + 25 > car5Y) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

function checkCollision6(){
    if (frogX< car6X + 50 && frogX + 25 > car6X && frogY < car6Y + 25 && frogY + 25 > car6Y) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

function checkCollision7(){
    if (frogX< car7X + 50 && frogX + 25 > car7X && frogY < car7Y + 25 && frogY + 25 > car7Y) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

function checkCollision8(){
    if (frogX< car8X + 50 && frogX + 25 > car8X && frogY < car8Y + 25 && frogY + 25 > car8Y) {
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";
    }}

    function checkCollision9(){
   if (frogX + 25 < logX + 150 && frogX > logX  && frogY > logY && frogY +25  < logY + 125 )  {
       lognum1==true;
       lognum2==false;
       lognum3==false;
       lognum4==false;
       lognum5==false;
       lognum6==false;
       lognum7==false;
       lognum8==false;
        document.getElementById('disp').innerHTML = "Yay";


        if(frogX > 0 && frogX < 400) frogX++;
        else {
            frogX = 200;
           frogY = 550;
           lives--;
           lognum1==false;
      }
    }
    else if (frogX + 25 < log2X + 150 && frogX > log2X  && frogY > log2Y && frogY +25  < log2Y + 125 ) {
       lognum3==true;
       lognum1==false;
       lognum2==false;
       lognum4==false;
       lognum5==false;
       lognum6==false;
       lognum7==false;
       lognum8==false;
       document.getElementById('disp').innerHTML = "Yay";

       if(frogX > 0 && frogX < 400) frogX++;
       else {
           frogX = 200;
           frogY = 550;
           lives--;
           lognum3==false;
       }
   }

   else if (frogX + 25 < log4X + 150 && frogX > log4X  && frogY > log4Y && frogY +25  < log4Y + 125 ) {
       lognum5==true;
       lognum1==false;
       lognum2==false;
       lognum3==false;
       lognum4==false;
       lognum6==false;
       lognum7==false;
       lognum8==false;
       document.getElementById('disp').innerHTML = "Yay";

       if(frogX > 0 && frogX < 400) frogX++;
       else {
           frogX = 200;
           frogY = 550;
           lives--;
           lognum5==false;
       }
   }

   else if (frogX + 25 < log5X + 150 && frogX > log5X  && frogY > log5Y && frogY +25  < log5Y + 125 ) {
       lognum6==true;
       document.getElementById('disp').innerHTML = "Yay";

       if(frogX > 0 && frogX < 400) frogX++;
       else {
           frogX = 200;
           frogY = 550;
           lives--;
           lognum6==false;
       }
   }

      else if (frogX + 25 < log3X + 150 && frogX > log3X  && frogY > log3Y && frogY +25  < log3Y + 125 ) {
            lognum4==true;
            document.getElementById('disp').innerHTML = "Yay";
            if(frogX > 0 && frogX < 400) frogX--;
            else {
                frogX = 200;
                frogY = 550;
                lives--;
                lognum4==false;
            }
        }

        else if (frogX + 25 < log1X + 150 && frogX > log1X  && frogY > log1Y && frogY +25  < log1Y + 125 ) {
            lognum2==true;
            document.getElementById('disp').innerHTML = "Yay";
            if(frogX > 0 && frogX < 400) frogX--;
            else {
                frogX = 200;
                frogY = 550;
                lives--;
                lognum2==false;
            }
        }

        else if (frogX + 25 < log6X + 150 && frogX > log6X  && frogY > log6Y && frogY +25  < log6Y + 125 ) {
            lognum7==true;
            document.getElementById('disp').innerHTML = "Yay";
            if(frogX > 0 && frogX < 400) frogX--;
            else {
                frogX = 200;
                frogY = 550;
                lives--;
                lognum7==false;
            }
        }

        else if (frogX + 25 < log7X + 150 && frogX > log7X  && frogY > log7Y && frogY +25  < log7Y + 125 ) {
            lognum8==true;
            document.getElementById('disp').innerHTML = "Yay";
            if(frogX > 0 && frogX < 400) frogX--;
            else {
                frogX = 200;
                frogY = 550;
                lives--;
                lognum8==false;
            }
        }

     else if (frogX + 25 < waterX + 400 && frogX > waterX  && frogY + 25 < waterY  + 260 && frogY > waterY) {
       water==true;
        frogX = 200;
        frogY = 550;
        lives--;
        document.getElementById('disp').innerHTML = "ouch";

    }}




function checkCollisiongEnd(){
    if (frogX< endgameX + 400 && frogX + 25 > endgameX && frogY < endgameY + 10 && frogY + 25 > endgameY) {
        document.getElementById('disp').innerHTML = "You win!";
    }}



    $(document).keydown(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);

    if(keycode == 87)  
    {
        frogY=frogY-50;
    }
    if(keycode == 65) 
    {
        frogX=frogX-50;
    }
    if(keycode == 68)  
    {
        frogX=frogX+50;
    }
    if(keycode == 83)  
    {
        frogY=frogY+50;
    }
    if(keycode == 13) 
    {
        animate();
    }
});

function animate() {
    if (lives == 0) {
        document.getElementById('disp').innerHTML = 'Game Over';
    }
    else {
        requestAnimationFrame(animate);
    }
    carX=carX-1;
    car2X=car2X+1;
    car3X=car3X+1;
    car4X=car4X-1;
    car5X=car5X-1;
    car6X=car6X+1;
    car7X=car7X+1;
    car8X=car8X-1;
    logX=logX+1;
    log1X=log1X-1;
    log2X=log2X+1;
    log3X=log3X-1;
    log4X=log4X+1;
    log5X=log5X+1;
    log6X=log6X-1;
    log7X=log7X-1;
    begin();
    rode();
    rodeline();
    rodeline2();
    rodeline3();
    rodeline4();
    grass();
    water();
    endgrass();
    car1();
    carnum2();
    carnum3();
    carnum4();
    carnum5();
    carnum6();
    carnum7();
    carnum8();
    lognum1();
    lognum2();
    lognum3();
    lognum4();
    lognum5();
    lognum6();
    lognum7();
    lognum8();
    checkCollision();
    checkCollision2();
    checkCollision3();
    checkCollision4();
    checkCollision5();
    checkCollision6();
    checkCollision7();
    checkCollision8();
    checkCollision9();
    drawFrog();
    endgame();
    checkCollisiongEnd();
    document.getElementById('lives').innerHTML = 'Lives left: ' +lives;
}


