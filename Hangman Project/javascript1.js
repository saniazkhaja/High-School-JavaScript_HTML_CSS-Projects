/**
 * Created by rcortez on 9/17/2017.
 */

var word="";
var usedLetters="";
var letter="";
var badGuess=true;
var correctGuess=0;
var wrongGuess=0;
var display = [];
var difficulty = 0;
var imagesIncorrect = new Array();
for(i=1;i<8;i++){
    imagesIncorrect[i] = 'resources/'+i+'.png'; //since my images are named with numbers, I used a for loop
}

function beginner() {   //this is allowing to choose difficulty
    difficulty = 1;
    document.getElementById("start").disabled = false;
    //once the user chooses the hardness level, it will enable the start button
}

function amateur() {
    difficulty = 2;
    document.getElementById("start").disabled = false;
}

function pro() {
    difficulty = 3;
    document.getElementById("start").disabled = false;
}

function start() { //this is the array of words that will be chosen from
    var foods = ["pizza", "cake", "candy", "bread", "milk",
        "fish", "brownie", "hamburger", "shrimp","pasta",
        "lemonade", "squid", "orange", "calamari", "caviar"];
    var cars = ["toyota", "honda", "dodge", "acura", "bmw",
        "lexus", "infiniti", "mercedes", "audi", "ford",
        "porsche", "chevrolet", "jaguar", "lamborghini", "mazda"];
    var colors = ["red", "blue", "green", "pink", "orange",
        "violet", "teal", "purple", "cyan", "lavender",
        "indigo", "magenta", "burgundy", "golden", "silver"];

    var category = Math.floor(Math.random() * 3);//this is first randomizing the category
    var element = Math.floor(Math.random() * 5);// this is then randomizing the the words

    if (category == 1 ){   //displays the category that was chosen by the computer
        document.getElementById("display5").innerHTML = "Category: foods";
    }
    else if (category == 2 ){
        document.getElementById("display5").innerHTML = "Category: cars";
    }
    else{
        document.getElementById("display5").innerHTML = "Category: colors";
    }


    if(difficulty == 2) element = element + 5; // adds to the element to get a harder word since they were in the order of diffculty
    else if (difficulty == 3) element = element + 10;

    if(category == 1 ) word = foods[element] ;//assigning the categories, so it can choose randomly
    else if(category == 2 ) word = cars[element];
    else word = colors[element];

    alert(word);  //showing word
    for(i = 0 ; i < word.length; i ++) {   //displaying the amount of dashes in the word
        display[i] = "_";
    }
    // 1==food; 2==cars; 0==colors;
    document.getElementById("display").innerHTML = display.join(" ");
    document.getElementById("guess").disabled = false;  //enables guess button
}

function Guess(){
    letter = prompt("What letter would you like to guess"); // allows user to guess a letter
    letter = letter.toLowerCase();
    //ensure it is a letter, not another symbol
    if(letter.charCodeAt(0) < 97 || letter.charCodeAt(0) > 122 || letter.length > 1) {
        alert("Try again. The letter you types was not valid.");//length should only be one letter when typed in
        return; //goes back to prompt
    }
    for(i=0;i<usedLetters.length;i++){ //makes sure same letter is not typed
        if(letter==usedLetters.substr(i,i+1)){
            alert("Try again. The letter was already used.");
            return; //goes back to prompt
        }
    }
    usedLetters = usedLetters + letter;
    matchLetter();// goes to this function next
}


function matchLetter() {
    var found = false;
    for (i = 0; i < word.length; i++) {
        if (letter == word.substring(i, i + 1)) { // this checks if your guess
            correctGuess++;
            found = true;
            display[i] = letter;
            if (correctGuess == word.length){ // if your correct guesses are equal to length the you won
                alert("you win");
            }
            document.getElementById("display").innerHTML = display.join(" ");

        }
        if(i == word.length - 1 && found == false) { // counts wrong gueses and displays picture
            wrongGuess++;
            document.getElementById("display4").innerHTML = "Wrong Guesses: " + wrongGuess;// shows wrong guesses
            document.getElementById("incorrectPics").src = imagesIncorrect[wrongGuess];//shows image

            found = false;
        }
    }

    if(wrongGuess==7){ //ends game if there are 7 wrong guesses
        alert ("game over");
        document.getElementById("display3").innerHTML = word;// displays actual word
    }
    document.getElementById("display2").innerHTML = usedLetters;
    document.getElementById("reset").disabled = false; //enables reset button
}

function Reset(){ //reset entire game by making everything blank
    word="";
    usedLetters="";
    letter="";
    badGuess=true;
    correctGuess=0;
    wrongGuess=0;
    display = [];
    document.getElementById("display3").innerHTML ="";
    document.getElementById("display").innerHTML ="";
    document.getElementById("display2").innerHTML = "";
    document.getElementById("display4").innerHTML = "";
    document.getElementById("incorrectPics").src = "";
    document.getElementById("display5").innerHTML = "";

}