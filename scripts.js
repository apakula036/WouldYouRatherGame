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
const thingsArray = [

]; 
const randomArray = [
    
    
]; 

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("buttons").style.display = "none";
});

function startGame(arrayName){
    if(arrayName == "objects"){
        currentArray = objectsArray;
        console.log(currentArray);
        const randomNumber = Math.floor(Math.random() * currentArray.length)
        const randomNumberTwo = Math.floor(Math.random() * currentArray.length)
        if(randomNumber == randomNumberTwo){
            randomNumberTwo + 1;
            document.getElementById("left").innerHTML= (currentArray[randomNumber]);
            document.getElementById("or").innerHTML = "or";
            document.getElementById("right").innerHTML= currentArray[randomNumberTwo];
        }
        else {
            document.getElementById("left").innerHTML= (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            document.getElementById("right").innerHTML= currentArray[randomNumberTwo];
        }
    }
    else if(arrayName == "things"){
        currentArray = thingsArray;
        console.log(currentArray);
        const randomNumber = Math.floor(Math.random() * currentArray.length)
        const randomNumberTwo = Math.floor(Math.random() * currentArray.length)
        if(randomNumber == randomNumberTwo){
            randomNumberTwo + 1;
            document.getElementById("left").innerHTML= (currentArray[randomNumber]);
            document.getElementById("or").innerHTML = "or";
            document.getElementById("right").innerHTML= currentArray[randomNumberTwo];
        }
        else {
            document.getElementById("left").innerHTML= (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            document.getElementById("right").innerHTML= currentArray[randomNumberTwo];
        }
    }
    else if(arrayName == "random"){
        currentArray = randomArray;
        console.log(currentArray);
        const randomNumber = Math.floor(Math.random() * currentArray.length)
        const randomNumberTwo = Math.floor(Math.random() * currentArray.length)
        if(randomNumber == randomNumberTwo){
            randomNumberTwo + 1;
            document.getElementById("left").innerHTML= (currentArray[randomNumber]);
            document.getElementById("or").innerHTML = "or";
            document.getElementById("right").innerHTML= currentArray[randomNumberTwo];
        }
        else {
            document.getElementById("left").innerHTML= (currentArray[randomNumber]);
            document.getElementById("or").innerHTML= "or";
            document.getElementById("right").innerHTML= currentArray[randomNumberTwo];
        }
    }
}

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
}

function resetGame(){
    
}