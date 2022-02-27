var a;
var pictX = 50;
var pictY=90;
var pictA = 250;
var pictB=50;
var pictC= 425;
var pictD=350;
var rectX= 325;
var rectY= 325;

function drawStuff() {
    //change the order of the two statements below.  Notice how the second is painted on the first.
    drawRects();
    drawRects2();
    drawRects3();
    drawRects4();
    drawRects5();
    drawRects6();
    drawRects7();
    drawRects8();
    drawRects9();
    drawCircles();
    drawCircles2();
    drawLines();
    drawLines2();
    drawLines3();
    drawLines4();
    drawLines5();
    drawLines6();
    drawLines7();
    drawLines8();
    drawLines9();
    drawLines10();
    drawLines11();
    drawText();
    drawImage();
    drawImage2();

}

function drawRects(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#0000BB";
    ctx.fillRect(00,00,500,500);
}
function drawRects2(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#bba08c";
    ctx.fillRect(225,250,250,200);
}

function drawRects3(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#bba08c";
    ctx.fillRect(20,300,250,200);
}

function drawRects4(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(40,325,150,150);
}

function drawRects5(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(325,325,50,150);
}

function drawRects6(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff3e9";
    ctx.fillRect(rectX,rectY,50,150);
    rectX= rectX + moveAmount1;
}
function drawRects7(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(260,270,50,50);
}

function drawRects8(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#000000";
    ctx.fillRect(385,270,50,50);
}
function drawRects9(){
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff7d5";
    ctx.fillRect(290,225,130,25);
}

function drawCircles() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.arc(450,50,40,0,360);
    ctx.fillStyle = "#fffdfd";
    ctx.fill();
    ctx.stroke();
}
function drawCircles2() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    ctx.beginPath();

    ctx.arc(425,40,40,0,360);
    ctx.fillStyle = "#0000bb";
    ctx.fill();
   // ctx.stroke();
}

function drawLines() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,450);
    ctx.lineWidth=100;
    ctx.lineTo(500,450);
    ctx.strokeStyle = "#00FF00";
    ctx.stroke();
}
function drawLines2() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(350,200);
    ctx.lineWidth=23;
    ctx.lineTo(475,250);
    ctx.strokeStyle = "#fff7d5";
    ctx.stroke();
}

function drawLines3() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(360,200);
    ctx.lineWidth=23;
    ctx.lineTo(225,250);
    ctx.strokeStyle = "#fff7d5";
    ctx.stroke();
}
function drawLines4() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,450);
    ctx.lineWidth=35;
    ctx.lineTo(500,450);
    ctx.strokeStyle = "#000000";
    ctx.stroke();
}

function drawLines5() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,450);
    ctx.lineWidth=1;
    ctx.lineTo(300,450);
    ctx.strokeStyle = "#00FF00";
    ctx.stroke();
}

function drawLines6() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(0,450);
    ctx.lineWidth=3;
    ctx.lineTo(500,450);
    ctx.strokeStyle = "#fffb3a";
    ctx.stroke();
}
function drawLines7() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(260,295);
    ctx.lineWidth=2;
    ctx.lineTo(310,295);
    ctx.strokeStyle = "#fff9f0";
    ctx.stroke();
}

function drawLines8() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(385,295);
    ctx.lineWidth=2;
    ctx.lineTo(435,295);
    ctx.strokeStyle = "#fff9f0";
    ctx.stroke();
}
function drawLines9() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(285,270);
    ctx.lineWidth=2;
    ctx.lineTo(285,320);
    ctx.strokeStyle = "#fff9f0";
    ctx.stroke();
}
function drawLines10() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(410,270);
    ctx.lineWidth=2;
    ctx.lineTo(410,320);
    ctx.strokeStyle = "#fff9f0";
    ctx.stroke();
}

function drawLines11() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.beginPath();
    ctx.moveTo(240,245);
    ctx.lineWidth=15;
    ctx.lineTo(460,245);
    ctx.strokeStyle = "#fff7d5";
    ctx.stroke();
}

function drawText() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle= "#00ffff";
    ctx.font = "30px Arial";
    ctx.fillText("The House and Sky", 20,50);
}
//draws an image dynamically so that it can be moved easily
var pict = new Image();	//create a new image object and attach it to a reference variable
pict.src = "resources/whitecloud.png"; //creates a pathname to an image to use. must do this once for each image.

var pict2 = new Image();
pict2.src = "resources/car7.png";


function drawImage() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    pictX= pictX + moveAmount;
    pictA= pictA + moveAmount;
    ctx.drawImage(pict,pictX,pictY,100,100);
    ctx.drawImage(pict,pictA,pictB,100,100);
}

function drawImage2() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    pictC= pictC + moveAmount2;
    ctx.drawImage(pict2,pictC,pictD,150,150);

}

function startAnimation() {
    animate();
}
 function animate() {
     a=requestAnimationFrame(animate);
     drawRects();
     drawRects2();
     drawRects3();
     drawRects4();
     drawRects5();
     drawRects6();
     moveRects6();
     drawRects7();
     drawRects8();
     drawRects9();
     drawCircles();
     drawCircles2();
     drawLines();
     drawLines2();
     drawLines3();
     drawLines4();
     drawLines5();
     drawLines6();
     drawLines7();
     drawLines8();
     drawLines9();
     drawLines10();
     drawLines11();
     drawText();
     moveImage();
     moveImage2();
     drawImage();
     drawImage2();
     moveImage3();
 }
function stopAnimation() {
    cancelAnimationFrame(a);
}

var moveAmount= 0.2;
var moveAmount1=0.3;
var moveAmount2=2;

function moveImage() {

    if (pictX + 50  > 500){

        moveAmount = moveAmount * (-1);
    }

    if (pictX<0){

        moveAmount = moveAmount * (-1);
    }
}
function moveImage2() {

    if (pictA + 50  > 500){

        moveAmount = moveAmount * (-1);
    }

    if (pictA<0){

        moveAmount = moveAmount * (1);
    }
}
function moveImage3() {

    if (pictC + 50  > 500){

        moveAmount2 = moveAmount2 * (-1);
    }

    if (pictC<0){

        moveAmount2 = moveAmount2 * (-1);
    }
}
function moveRects6() {

    if (rectX + 174  > 500){

        moveAmount1 = moveAmount1 * (-1);
    }

    if (rectX < 275){

        moveAmount1 = moveAmount1 * (-1);
    }
}

/**
 * Created by rcortez on 11/12/2017.
 */
