const testArray = [
"test1",
"test2",
"test3",
"test4",
"test5",
"test6",
"test7"
];


function startGame(){
    
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

function nextQuestion(){
    
}

function resetGame(){
    
}