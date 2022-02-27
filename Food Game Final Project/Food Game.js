var door =  new Image();
door.src = "Pictures/Door.png";
var star =  new Image();
star.src = "Pictures/Star.png";
var StarOutline =  new Image();
StarOutline.src = "Pictures/StarOutline.png";
var goal =new Image();
goal.src="Pictures/goal.jpg";
var tables =new Image();
tables.src="Pictures/Table.jpg";
var order=new Image();
order.src="Pictures/Order.jpg";
var chairs =new Image();
chairs.src="Pictures/Chair.gif";
var number1= new Image();
number1.src="Pictures/1.jpg";
var number2= new Image();
number2.src="Pictures/2.jpg";
var number3= new Image();
number3.src="Pictures/3.jpg";
var number4= new Image();
number4.src="Pictures/4.jpg";
var number5= new Image();
number5.src="Pictures/5.jpg";
var number6= new Image();
number6.src="Pictures/6.jpg";
var bin= new Image();
bin.src="Pictures/Bin.jpg";
var people1= new Image();
people1.src="Pictures/1 Stick Figure.jpg";
var people2= new Image();
people2.src="Pictures/2 Stick Figure.png";
var people3= new Image();
people3.src="Pictures/3 Stick Figure.jpg";
var people4= new Image();
people4.src="Pictures/4 Stick Figure.jpg";
var people5= new Image();
people5.src="Pictures/5 Stick Figure.jpg";
var people6= new Image();
people6.src="Pictures/6 Stick Figure.png";
var plate=new Image();
plate.src="Pictures/Plate.jpg";
var moneyDollar=new Image();
moneyDollar.src="Pictures/Money.jpg";
var openSign=new Image();
openSign.src="Pictures/openSign.png";
var closeSign=new Image();
closeSign.src="Pictures/closeSign.png";
var money=0;
var myVar;
table1=false;
var table1check=0;
var table2check=0;
var table3check=0;
var table4check=0;
var table5check=0;
var table6check=0;
var table1Order=0;
var table2Order=0;
var table3Order=0;
var table4Order=0;
var table5Order=0;
var table6Order=0;
var table1serve=0;
var table2serve=0;
var table3serve=0;
var table4serve=0;
var table5serve=0;
var table6serve=0;

var seconds;
var close;


function Game(){
    draw();
    timer();
    name();
    levels();
}

function draw(){
    Floor();
    ScoreArea();
    Door();
    Rug();
    Counter();
    Table();
    Chair();
    tableNumbers();
    FoodBin();
    people();
    Goal();
}



function Instructions(){
    alert("The goal of this game to earn a $1000 by running a restaurant. You will have two minutes to do so. If you click on each button you will be prompted to do something. The buttons are in order. ")
}

function name(){
    restaurantName=prompt("What do you want the name of your restaurant to be?");
    document.getElementById("title").innerHTML =  restaurantName;
    chooselevel=prompt("What level do you want? 1 is for easy. 2 is for medium. 3 is for hard.");
}

function levels(){
    if (chooselevel==1){
        function countdown() {
            seconds = document.getElementById("countdown").innerHTML;
            seconds = parseInt(seconds, 10);

            if (seconds == 1) {
                close = document.getElementById("countdown");
                close.innerHTML = "The restaurant has closed for the day";
                var ctx = document.getElementById("myCanvas").getContext("2d");
                ctx.fillStyle = "#fff1d6";
                ctx.fillRect(120, 135, 43, 50);
                ctx.drawImage(closeSign, 120, 130, 50, 50);
                document.getElementById("Start").disabled = true;
                document.getElementById("Tables").disabled = true;
                document.getElementById("Orders").disabled = true;
                Counter();
                Rug();


                return;
            }

            seconds=seconds-1;
            close = document.getElementById('countdown');
            close.innerHTML = seconds;
            time = setTimeout(countdown, 1000);
        }
        countdown();
    }
    if (chooselevel==2){
        function countdown() {
            seconds = document.getElementById("Medcountdown").innerHTML;
            seconds = parseInt(seconds, 10);

            if (seconds == 1) {
                close = document.getElementById("Medcountdown");
                close.innerHTML = "The restaurant has closed for the day";
                var ctx = document.getElementById("myCanvas").getContext("2d");
                ctx.fillStyle = "#fff1d6";
                ctx.fillRect(120, 135, 43, 50);
                ctx.drawImage(closeSign, 120, 130, 50, 50);
                document.getElementById("Start").disabled = true;
                document.getElementById("Tables").disabled = true;
                document.getElementById("Orders").disabled = true;
                Counter();
                Rug();

                return;
            }

            seconds=seconds-1;
            close = document.getElementById('Medcountdown');
            close.innerHTML = seconds;
            time = setTimeout(countdown, 1000);
        }
        countdown();
    }
    if (chooselevel==3){
        function countdown() {
            seconds = document.getElementById("Medcountdown").innerHTML;
            seconds = parseInt(seconds, 10);

            if (seconds == 1) {
                close = document.getElementById("Medcountdown");
                close.innerHTML = "The restaurant has closed for the day";
                var ctx = document.getElementById("myCanvas").getContext("2d");
                ctx.fillStyle = "#fff1d6";
                ctx.fillRect(120, 135, 43, 50);
                ctx.drawImage(closeSign, 120, 130, 50, 50);
                document.getElementById("Start").disabled = true;
                document.getElementById("Tables").disabled = true;
                document.getElementById("Orders").disabled = true;
                Counter();
                Rug();

                return;
            }

            seconds=seconds-1;
            close = document.getElementById('Medcountdown');
            close.innerHTML = seconds;
            time = setTimeout(countdown, 1000);
        }
        countdown();
    }
}

function timer(){
    myVar = setInterval(people1Round, 15000);
    myVar = setInterval(people2Round, 20000);
    myVar = setInterval(people3Round, 25000);
    myVar = setInterval(people4Round, 30000);
    myVar = setInterval(people5Round, 25000);
    myVar = setInterval(people6Round, 40000);
}

function MoneyStar(){
    if (money>=200){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(star, 400, 10 , 50, 50);
    }
    if (money>=400){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(star, 450, 10 , 50, 50);
    }
    if (money>=600){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(star, 500, 10 , 50, 50);
    }
    if (money>=800){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(star, 550, 10 , 50, 50);
    }
    if (money>=1000) {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(star, 600, 10, 50, 50);
    }
}


function Goal(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(goal, 50, 10, 150, 75);
    ctx.drawImage(moneyDollar, 200, 10 , 150, 75);
    ctx.drawImage(StarOutline, 400, 10 , 50, 50);
    ctx.drawImage(StarOutline, 450, 10 , 50, 50);
    ctx.drawImage(StarOutline, 500, 10 , 50, 50);
    ctx.drawImage(StarOutline, 550, 10 , 50, 50);
    ctx.drawImage(StarOutline, 600, 10 , 50, 50);
}

function people1Round(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(people1, 75, 625, 75, 75);
}

function people2Round(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(people2, 75, 550, 75, 75);
}

function people3Round(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(people3, 75, 475, 75, 75);
}

function people4Round(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(people4, 75, 400, 75, 75)
}

function people5Round(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(people5, 75, 325, 75, 75);
}

function people6Round(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(people6, 75, 250, 75, 75);
}

function Floor() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#fff1d6";
    ctx.fillRect(0, 0, 1000, 700);
}

function ScoreArea() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#00c1ff";
    ctx.fillRect(0, 0, 1000, 100);
}

function Door() {
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(door, 0, 125, 225, 115);
    ctx.drawImage(openSign, 120, 130, 50, 50);
}

function Rug() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#ff0017";
    ctx.fillRect(35, 250, 150, 600);
    ctx.drawImage(number1, 50, 650, 25,25 );
    ctx.drawImage(number2, 50, 575, 25,25 );
    ctx.drawImage(number3, 50, 500, 25,25 );
    ctx.drawImage(number4, 50, 425, 25,25 );
    ctx.drawImage(number5, 50, 350, 25,25 );
    ctx.drawImage(number6, 50, 275, 25,25 );
}

function people(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(people1, 75, 625, 75, 75);
    ctx.drawImage(people6, 75, 250, 75, 75);
}

function Counter() {
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#c0c8d7";
    ctx.fillRect(300, 150, 500, 100);
    ctx.drawImage(order, 300, 160, 75,75 );
    ctx.drawImage(number1, 400, 150, 25,25 );
    ctx.drawImage(number2, 470, 150, 25,25 );
    ctx.drawImage(number3, 540, 150, 25,25 );
    ctx.drawImage(number4, 610, 150, 25,25 );
    ctx.drawImage(number5, 680, 150, 25,25 );
    ctx.drawImage(number6, 750, 150, 25,25 );
}

function Table(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(tables, 350, 300, 100, 100);
    ctx.drawImage(tables, 600, 300, 100, 100);
    ctx.drawImage(tables, 350, 500, 100, 150);
    ctx.drawImage(tables, 600, 500, 100, 150);
    ctx.drawImage(tables, 850, 325, 75, 50);
    ctx.drawImage(tables, 850, 550, 75, 50);
}

function tableNumbers(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(number1, 383, 333, 25, 25);
    ctx.drawImage(number2, 633, 333, 25, 25);
    ctx.drawImage(number3, 383, 550, 25, 25);
    ctx.drawImage(number4, 633, 550, 25, 25);
    ctx.drawImage(number5, 883, 340, 25, 25);
    ctx.drawImage(number6, 883, 560, 25, 25);
}

function Chair(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(chairs,925, 550, 50, 50);
    ctx.drawImage(chairs,800, 550, 50, 50);
    ctx.drawImage(chairs,925, 325, 50, 50);
    ctx.drawImage(chairs,800, 325, 50, 50);
    ctx.drawImage(chairs, 300, 500, 50, 50);
    ctx.drawImage(chairs, 300, 550, 50, 50);
    ctx.drawImage(chairs, 300, 600, 50, 50);
    ctx.drawImage(chairs, 450, 500, 50, 50);
    ctx.drawImage(chairs, 450, 550, 50, 50);
    ctx.drawImage(chairs, 450, 600, 50, 50);
    ctx.drawImage(chairs, 300, 300, 50, 50);
    ctx.drawImage(chairs, 300, 350, 50, 50);
    ctx.drawImage(chairs, 450, 300, 50, 50);
    ctx.drawImage(chairs, 450, 350, 50, 50);
    ctx.drawImage(chairs, 550, 300, 50, 50);
    ctx.drawImage(chairs, 550, 350, 50, 50);
    ctx.drawImage(chairs, 700, 300, 50, 50);
    ctx.drawImage(chairs, 700, 350, 50, 50);
    ctx.drawImage(chairs, 550, 500, 50, 50);
    ctx.drawImage(chairs, 550, 550, 50, 50);
    ctx.drawImage(chairs, 550, 600, 50, 50);
    ctx.drawImage(chairs, 700, 500, 50, 50);
    ctx.drawImage(chairs, 700, 550, 50, 50);
    ctx.drawImage(chairs, 700, 600, 50, 50);
}

function FoodBin(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(bin,850, 150, 100, 100);
}


function peopleTable(){
    choosePerson= prompt("Choose the person who you want to be seated");
    if (choosePerson==1){
        people1Table()
    }
    if (choosePerson==2){
        people2Table()
    }
    if (choosePerson==3){
        people3Table()
    }
    if (choosePerson==4){
        people4Table()
    }
    if (choosePerson==5){
        people5Table()
    }
    if (choosePerson==6){
        people6Table()
    }

}

function movepeople1(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff0017";
    ctx.fillRect(75, 625, 75, 75);
}

function movepeople2(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff0017";
    ctx.fillRect(75, 550, 75, 75);
}

function movepeople3(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff0017";
    ctx.fillRect(75, 475, 75, 75);
}

function movepeople4(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff0017";
    ctx.fillRect( 75, 400, 75, 75);
}

function movepeople5(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff0017";
    ctx.fillRect( 75, 325, 75, 75);
}

function movepeople6(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.fillStyle = "#ff0017";
    ctx.fillRect(75, 250, 75, 75);
}

function people1Table() {
    chooseTables = prompt("Choose a table");
    if (chooseTables == 1) {
        if (table1check == 1){
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table1check == 0){
            table1check=table1check+1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people1, 350, 400, 75, 75);
            movepeople1();
        }
    }
    if (chooseTables == 2) {
        if (table2check == 1){
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table2check == 0){
            table2check=table2check+1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people1, 600, 400, 75, 75);
            movepeople1()
        }
    }
    if (chooseTables == 3) {
        if (table3check == 1){
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table3check == 0){
            table3check=table3check+1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people1, 375, 625, 75, 75);
            movepeople1()
        }
    }
    if (chooseTables == 4) {
        if (table4check == 1){
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table4check == 0){
            table4check=table4check+1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people1, 625, 625, 75, 75);
            movepeople1()
        }
    }
    if (chooseTables == 5) {
        if (table5check == 1){
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table5check == 0){
            table5check=table5check+1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people1, 850, 375, 75, 75);
            movepeople1()
        }
    }
    if (chooseTables == 6) {
        if (table6check == 1){
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table6check == 0){
            table6check=table6check+1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people1, 850, 600, 75, 75);
            movepeople1()
        }
    }
}


function people2Table() {
    chooseTables = prompt("Choose a table");
    if (chooseTables == 1) {
        if (table1check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table1check == 0) {
            table1check = table1check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people2, 350, 400, 75, 75);
            movepeople2()
        }
    }
    if (chooseTables == 2) {
        if (table2check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table2check == 0) {
            table2check = table2check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people2, 600, 400, 75, 75);
            movepeople2()
        }
    }
    if (chooseTables == 3) {
        if (table3check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table3check == 0) {
            table3check = table3check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people2, 375, 625, 75, 75);
            movepeople2()
        }
    }
    if (chooseTables == 4) {
        if (table4check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table4check == 0) {
            table4check = table4check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people2, 625, 625, 75, 75);
            movepeople2()
        }
    }
    if (chooseTables == 5) {
        if (table5check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table5check == 0) {
            table5check = table5check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people2, 850, 375, 75, 75);
            movepeople2()
        }
    }
    if (chooseTables == 6) {
        if (table6check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table6check == 0) {
            table6check = table6check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people2, 850, 600, 75, 75);
            movepeople2()
        }
    }
}

function people3Table() {
    chooseTables = prompt("Choose a table");
    if (chooseTables == 1) {
        if (table1check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table1check == 0) {
            table1check = table1check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people3, 350, 400, 75, 75);
            movepeople3()
        }
    }
    if (chooseTables == 2) {
        if (table2check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table2check == 0) {
            table2check = table2check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people3, 600, 400, 75, 75);
            movepeople3()
        }
    }
    if (chooseTables == 3) {
        if (table3check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table3check == 0) {
            table3check = table3check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people3, 375, 625, 75, 75);
            movepeople3()
        }
    }
    if (chooseTables == 4) {
        if (table4check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table4check == 0) {
            table4check = table4check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people3, 625, 625, 75, 75);
            movepeople3()
        }
    }
    if (chooseTables ==5) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()
    }

    if (chooseTables == 6) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()
    }
}


function people4Table() {
    chooseTables = prompt("Choose a table");
    if (chooseTables == 1) {
        if (table1check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table1check == 0) {
            table1check = table1check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people4, 350, 400, 75, 75);
            movepeople4()
        }
    }
    if (chooseTables == 2) {
        if (table2check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table2check == 0) {
            table2check = table2check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people4, 600, 400, 75, 75);
            movepeople4()
        }
    }
    if (chooseTables == 3) {
        if (table3check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table3check == 0) {
            table3check = table3check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people4, 375, 625, 75, 75);
            movepeople4()
        }
    }
    if (chooseTables == 4) {
        if (table4check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table4check == 0) {
            table4check = table4check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people4, 625, 625, 75, 75);
            movepeople4()
        }
    }
    if (chooseTables == 5) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()
    }

    if (chooseTables == 6) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()
    }
}

function people5Table() {
    chooseTables = prompt("Choose a table");
    if (chooseTables == 1) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()

    }
    if (chooseTables == 2) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()
    }
    if (chooseTables == 3) {
        if (table3check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table3check == 0) {
            table3check = table3check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people5, 375, 625, 75, 75);
            movepeople5()
        }
    }
    if (chooseTables == 4) {
        if (table4check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table4check == 0) {
            table4check = table4check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people5, 625, 625, 75, 75);
            movepeople5()
        }
    }
    if (chooseTables == 5) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()

    }
    if (chooseTables == 6) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()

    }
}

function people6Table() {
    chooseTables = prompt("Choose a table");
    if (chooseTables == 1) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()
    }
    if (chooseTables == 2) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()

    }
    if (chooseTables == 3) {
        if (table3check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table3check == 0) {
            table3check = table3check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people6, 375, 625, 75, 75);
            movepeople6()
        }
    }
    if (chooseTables == 4) {
        if (table4check == 1) {
            alert("Someone is already sitting on this table. Pick your people and table again. ");
            peopleTable()
        }
        else if (table4check == 0) {
            table4check = table4check + 1;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.drawImage(people6, 625, 625, 75, 75);
            movepeople6()
        }
    }
    if (chooseTables == 5) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()

    }
    if (chooseTables == 6) {
        alert("Sorry. The amount of people you chose does not fit the table.Choose your people and table again.");
        peopleTable()
    }
}

function Order(){
    getOrder=prompt("Which table do you want to get order from?");
    if (getOrder==1 && table1check == 1){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 385, 180, 50,50 );
        table1Order=table1Order+1
    }
    else if(getOrder==1 && table1check == 0){
        alert("Sorry. There are no people on this table, to get an order from")
    }
    if (getOrder==2 && table2check == 1){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 455, 180, 50,50 );
        table2Order=table2Order+1
    }
    else if(getOrder==2 && table2check == 0){
        alert("Sorry. There are no people on this table, to get an order from")
    }
    if (getOrder==3 && table3check == 1){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 525, 180, 50,50 );
        table3Order=table3Order+1
    }
    else if(getOrder==3 && table3check == 0){
        alert("Sorry. There are no people on this table, to get an order from")
    }
    if (getOrder==4 && table4check == 1){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 595, 180, 50,50 );
        table4Order=table4Order+1
    }
    else if(getOrder==4 && table4check == 0){
        alert("Sorry. There are no people on this table, to get an order from")
    }
    if (getOrder==5 && table5check == 1){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 665, 180, 50,50 );
        table5Order=table5Order+1
    }
    else if(getOrder==5 && table5check == 0){
        alert("Sorry. There are no people on this table, to get an order from")
    }
    if (getOrder==6 && table6check == 1){
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 735, 180, 50,50 );
        table6Order=table6Order+1
    }
    else if(getOrder==6 && table6check == 0){
        alert("Sorry. There are no people on this table, to get an order from")
    }
}


function serve() {
    serveFood = prompt("Choose the table which the food must be delivered to.");
    if (serveFood == 1 && table1Order==1) {
        table1serve=table1serve+1;
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 400, 350, 50, 50);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#c0c8d7";
        ctx.fillRect(385, 180, 50,50);
    }
    else if (serveFood == 1 && table1Order==0){
        alert("Sorry. No one ordered on this table ")
    }
    if (serveFood == 2 && table2Order==1) {
        table2serve=table2serve+1;
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 600, 350, 50, 50);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#c0c8d7";
        ctx.fillRect(455, 180, 50,50);
    }
    else if (serveFood == 2 && table2Order==0){
        alert("Sorry. No one ordered on this table ")
    }
    if (serveFood == 3 && table3Order==1) {
        table3serve=table3serve+1;
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 383, 600, 50, 50);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#c0c8d7";
        ctx.fillRect(525, 180, 50,50);
    }
    else if (serveFood == 3 && table3Order==0){
        alert("Sorry. No one ordered on this table ")
    }
    if (serveFood == 4 && table4Order==1) {
        table4serve=table4serve+1;
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 600, 600, 50, 50);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#c0c8d7";
        ctx.fillRect(595, 180, 50,50);
    }
    else if (serveFood == 4 && table4Order==0){
        alert("Sorry. No one ordered on this table ")
    }
    if (serveFood == 5 && table5Order==1) {
        table5serve=table5serve+1;
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 850, 325, 40, 40);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#c0c8d7";
        ctx.fillRect(665, 180, 50,50);
    }
    else if (serveFood == 5 && table5Order==0){
        alert("Sorry. No one ordered on this table ")
    }
    if (serveFood == 6 && table6Order==1) {
        table6serve=table6serve+1;
        var ctx = document.getElementById("myCanvas").getContext("2d");
        ctx.drawImage(plate, 850, 550, 40, 40);
        var canvas = document.getElementById("myCanvas");
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#c0c8d7";
        ctx.fillRect(735, 180, 50,50);
    }
    else if (serveFood == 6 && table6Order==0){
        alert("Sorry. No one ordered on this table ")
    }
}

function cleanFood(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(plate,870, 150, 50, 50);
    money=money+100;
    document.getElementById("display").innerHTML = "Money:$" + money;
}

function cleanFoodHard(){
    var ctx = document.getElementById("myCanvas").getContext("2d");
    ctx.drawImage(plate,870, 150, 50, 50);
    if (choosePerson==1){
        money=money+25;
        document.getElementById("display").innerHTML = "Money:$" + money;
    }
    if (choosePerson==2){
        money=money+50;
        document.getElementById("display").innerHTML = "Money:$" + money;
    }
    if (choosePerson==3){
        money=money+75;
        document.getElementById("display").innerHTML = "Money:$" + money;
    }
    if (choosePerson==4){
        money=money+100;
        document.getElementById("display").innerHTML = "Money:$" + money;
    }
    if (choosePerson==5){
        money=money+125;
        document.getElementById("display").innerHTML = "Money:$" + money;
    }
    if (choosePerson==6){
        money=money+150;
        document.getElementById("display").innerHTML = "Money:$" + money;
    }
}

function clean() {
    cleanUp = prompt("Choose the table that needs to be cleaned up");
    if (chooselevel < 3) {
        if (cleanUp == 1 && table1serve == 1) {
            table1check = 0;
            table1Order = 0;
            table1serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(350, 400, 75, 75);
            ctx.drawImage(tables, 350, 300, 100, 100);
            ctx.drawImage(number1, 383, 333, 25, 25);
            cleanFood();
            MoneyStar();
        }
        else if (cleanUp == 1 && table1serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 2 && table2serve == 1) {
            table2check = 0;
            table2Order = 0;
            table2serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(600, 400, 75, 75);
            ctx.drawImage(tables, 600, 300, 100, 100);
            ctx.drawImage(number2, 633, 333, 25, 25);
            cleanFood();
            MoneyStar();
        }
        else if (cleanUp == 2 && table2serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 3 && table3serve == 1) {
            table3check = 0;
            table3Order = 0;
            table3serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(375, 625, 75, 75);
            ctx.drawImage(tables, 350, 500, 100, 150);
            ctx.drawImage(number3, 383, 550, 25, 25);
            cleanFood();
            MoneyStar();
        }
        else if (cleanUp == 3 && table3serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 4 && table4serve == 1) {
            table4check = 0;
            table4Order = 0;
            table4serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(625, 625, 75, 75);
            ctx.drawImage(tables, 600, 500, 100, 150);
            ctx.drawImage(number4, 633, 550, 25, 25);
            cleanFood();
            MoneyStar();
        }
        else if (cleanUp == 4 && table4serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 5 && table5serve == 1) {
            table5check = 0;
            table5Order = 0;
            table5serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(850, 375, 75, 75);
            ctx.drawImage(tables, 850, 325, 75, 50);
            ctx.drawImage(number5, 883, 340, 25, 25);
            cleanFood();
            MoneyStar();
        }
        else if (cleanUp == 5 && table5serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 6 && table6serve == 1) {
            table6check = 0;
            table6Order = 0;
            table6serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(850, 600, 75, 75);
            ctx.drawImage(tables, 850, 550, 75, 50);
            ctx.drawImage(number6, 883, 560, 25, 25);
            cleanFood();
            MoneyStar();
        }
        else if (cleanUp == 6 && table6serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
    }
    if (chooselevel == 3) {
        if (cleanUp == 1 && table1serve == 1) {
            table1check = 0;
            table1Order = 0;
            table1serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(350, 400, 75, 75);
            ctx.drawImage(tables, 350, 300, 100, 100);
            ctx.drawImage(number1, 383, 333, 25, 25);
            cleanFoodHard();
            MoneyStar();
        }
        else if (cleanUp == 1 && table1serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 2 && table2serve == 1) {
            table2check = 0;
            table2Order = 0;
            table2serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(600, 400, 75, 75);
            ctx.drawImage(tables, 600, 300, 100, 100);
            ctx.drawImage(number2, 633, 333, 25, 25);
            cleanFoodHard();
            MoneyStar();
        }
        else if (cleanUp == 2 && table2serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 3 && table3serve == 1) {
            table3check = 0;
            table3Order = 0;
            table3serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(375, 625, 75, 75);
            ctx.drawImage(tables, 350, 500, 100, 150);
            ctx.drawImage(number3, 383, 550, 25, 25);
            cleanFoodHard();
            MoneyStar();
        }
        else if (cleanUp == 3 && table3serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 4 && table4serve == 1) {
            table4check = 0;
            table4Order = 0;
            table4serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(625, 625, 75, 75);
            ctx.drawImage(tables, 600, 500, 100, 150);
            ctx.drawImage(number4, 633, 550, 25, 25);
            cleanFoodHard();
            MoneyStar();
        }
        else if (cleanUp == 4 && table4serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 5 && table5serve == 1) {
            table5check = 0;
            table5Order = 0;
            table5serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(850, 375, 75, 75);
            ctx.drawImage(tables, 850, 325, 75, 50);
            ctx.drawImage(number5, 883, 340, 25, 25);
            cleanFoodHard();
            MoneyStar();
        }
        else if (cleanUp == 5 && table5serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
        if (cleanUp == 6 && table6serve == 1) {
            table6check = 0;
            table6Order = 0;
            table6serve = 0;
            var ctx = document.getElementById("myCanvas").getContext("2d");
            ctx.fillStyle = "#fff1d6";
            ctx.fillRect(850, 600, 75, 75);
            ctx.drawImage(tables, 850, 550, 75, 50);
            ctx.drawImage(number6, 883, 560, 25, 25);
            cleanFoodHard();
            MoneyStar();
        }
        else if (cleanUp == 6 && table6serve == 0) {
            alert("Sorry. There is no food to clean up the table. ")
        }
    }
}

