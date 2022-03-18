const testArray = [
"test1",
"test2",
"test3",
"test4",
"test5",
"test6",
"test7"
];
var currentArray = []; 

const objectsArray = [

]; 
const foodArray = [
    "images/banana.jpeg",
    "images/apple.jpeg",
    "images/pear.jpeg",
    "images/pizza.jpg"

]; 
const randomArray = [
    
    
]; 
const arrayOfTextChoices = [
        "What game would you play on a Jumbrotron in a fully packed stadium?",
        "Star wars or Lord of the Rings?",
        "Would you rather have the ability to see 10 minutes into the future or 150 years into the future?",
        "Would you rather have telekinesis (the ability to move things with your mind) or telepathy (the ability to read minds)?",
        "Would you rather be forced to sing along or dance to every single song you hear?",
        "Would you rather have everyone you know be able to read your thoughts or for everyone you know to have access to your Internet history?",
        "Would you rather be royalty 1,000 years ago or an average person today?",
        "Would you rather sound like Squidward or jumble sentences like Yoda?",
        "Would you rather have skin that changes color based on your emotions or tattoos appear all over your body depicting what you did yesterday?"


];
function startGameText(arrayName){
    hideImages();
    arrayName = arrayOfTextChoices;
    var randomNumber = Math.floor(Math.random() * arrayName.length);
    document.getElementById("or").innerHTML = (arrayName[randomNumber]);
    console.log((arrayName[randomNumber]))
}
document.addEventListener("DOMContentLoaded", function(){
    //document.getElementById("buttons").style.visibility="hidden";
    hideImages();
});

function startGame(arrayName){
    showImages();
    document.getElementById("or").style.visibility="visible";
    //document.getElementById("buttons").style.visibility="visible";
    var image = document.getElementById("emptyImage");
    var imageTwo = document.getElementById("emptyImageTwo");
    if(arrayName == "objects"){
        currentArray = objectsArray;
        var randomNumber = Math.floor(Math.random() * currentArray.length);
        var randomNumberTwo = Math.floor(Math.random() * currentArray.length);
        if((randomNumber == randomNumberTwo) && (randomNumber == (currentArray.length-1))){
            randomNumber--;
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
        else if(randomNumber == randomNumberTwo){
            randomNumberTwo++;
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
        else {
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
    }
    else if(arrayName == "food"){
        currentArray = foodArray;
        console.log(currentArray);
        var randomNumber = Math.floor(Math.random() * currentArray.length);
        var randomNumberTwo = Math.floor(Math.random() * currentArray.length);
        if((randomNumber == randomNumberTwo) && (randomNumber == (currentArray.length-1))){
            randomNumber--;
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
        else if(randomNumber == randomNumberTwo){
            randomNumberTwo++;
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
        else {
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
    }
    else if(arrayName == "random"){
        currentArray = randomArray;
        var randomNumber = Math.floor(Math.random() * currentArray.length);
        var randomNumberTwo = Math.floor(Math.random() * currentArray.length);
        if((randomNumber == randomNumberTwo) && (randomNumber == (currentArray.length -1))){
            randomNumber--;
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
        else if(randomNumber == randomNumberTwo){
            randomNumberTwo++;
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
        else {
            image.src = (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            imageTwo.src = (currentArray[randomNumberTwo]);
        }
    }
}
function hideImages(){
    var image = document.getElementById("emptyImage");
    var imageTwo = document.getElementById("emptyImageTwo");
    image.style.visibility="hidden";
    imageTwo.style.visibility="hidden";
}
function showImages(){
    var image = document.getElementById("emptyImage");
    var imageTwo = document.getElementById("emptyImageTwo");
    image.style.visibility="visible";
    imageTwo.style.visibility="visible";
}
/*
function nextQuestion(){
    const randomNumber = Math.floor(Math.random() * testArray.length)
    const randomNumberTwo = Math.floor(Math.random() * testArray.length)
    if(randomNumber == randomNumberTwo){
        randomNumberTwo + 1;
        document.getElementById("left").innerHTML= (testArray[randomNumber]);
        document.getElementById("right").innerHTML= testArray[randomNumberTwo];
    }
    else {
        document.getElementById("left").innerHTML= (testArray[randomNumber]);
        document.getElementById("right").innerHTML= testArray[randomNumberTwo];
    }
}*/
function resetGame(){
    location.reload();
}