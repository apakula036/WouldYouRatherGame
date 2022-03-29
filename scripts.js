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
    "Would you rather have skin that changes color based on your emotions or tattoos appear all over your body depicting what you did yesterday?",
    "Would you rather have 20 legs or 1 arm?",
    "Would you rather have unlimited popcorn or unlimited icees?",
    "Would you rather have a personal chef or a personal driver?",
    "Would you rather have to use chopsticks every day for the rest of your life or use a fork?",
    "Would you rather never be able to shower again or have no legs?",
    "Would you rather poop in the only toilet at a party knowing that you'll clog it or poop in the bushes in the backyard?",
    "Would you rather only be able to wear sweatpants for the rest of your life or only be able to wear suits for the rest of your life?",
    "Would you rather have your parents pick your fiancee out or stay single the rest of your life?",
    "If you could wake up tomorrow and be automatically granted 10,000 hours of experience in any skill of your choice, which would it be?",
    "Would you rather earn $0.01 every time you took a step or $1 every time you jumped?",
    "Would you rather live with a ghost who cooks delicious meals for you everyday or live with a ghost who cleans your home everyday?",
    "Would you rather be able to teleport or always have a minimum of $25 in your wallet?",
    "Would you rather be an extremely talented liar or a human lie detector?",
    "",
];
function startGameText(arrayName){
    hideImages();
    document.getElementById("questionH1").style.visibility="visible";
    document.getElementById("or").style.visibility="hidden";
    arrayName = arrayOfTextChoices;
    var randomNumber = Math.floor(Math.random() * arrayName.length);
    document.getElementById("questionH1").innerHTML = (arrayName[randomNumber]);
    console.log((arrayName[randomNumber]))
}
document.addEventListener("DOMContentLoaded", function(){
    //document.getElementById("buttons").style.visibility="hidden";
    hideImages();
});

function startGame(arrayName){
    document.getElementById("questionH1").style.visibility="hidden";
    showImages();
    document.getElementById("or").style.visibility="visible";
    //document.getElementById("buttons").style.visibility="visible";
    var image = document.getElementById("emptyImage");
    var imageTwo = document.getElementById("emptyImageTwo");
    if(arrayName == "objects"){
        currentArray = objectsArray;
        var randomNumber = Math.floor(Math.random() * currentArray.length);
        var randomNumberTwo = Math.floor(Math.random() * currentArray.length);
        var randomNumberThree = Math.floor(Math.random() * currentArray.length);
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