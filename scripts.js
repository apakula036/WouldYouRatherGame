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

];

document.addEventListener("DOMContentLoaded", function(){
    //document.getElementById("buttons").style.visibility="hidden";
    hideImages();
});

function startGame(arrayName){
    showImages();
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