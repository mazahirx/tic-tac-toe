let gameBody = document.querySelector(".main-gamebody");
let gameBox = document.querySelectorAll(".gamebox");
let startBtn = document.querySelector(".start-btn");
let turnInd = document.querySelector(".turn-indicator");
let gameStat = "hidden"; //Initial Values
let currPlayer = "X";
let winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,5,7],
    [2,6,8],
    [0,4,8],
    [2,4,6]
];

startBtn.addEventListener("click", () =>{
    if(gameStat === "hidden"){ //Toggle Game
        gameBody.style.visibility = "visible";
        gameStat = "visible";
        startBtn.innerText = "End Game";
    }else if(gameStat === "visible"){ //Reset Game
        gameBody.style.visibility = "hidden";
        startBtn.innerText = "Start Game";
        gameStat = "hidden";
        currPlayer = "X";
        gameBox.forEach(box => box.innerText = "");
    }
});

gameBox.forEach(box => { //Toggle Each Box
    box.addEventListener("click", () =>{
        if(currPlayer === "X"){
            box.innerText = "X";
            checkWinner();
            currPlayer = "O";
            turnInd.innerText = `Player ${currPlayer}'s Turn`;
        } else if (currPlayer === "O"){
            box.innerText = "O";
            checkWinner();
            currPlayer = "X";
            turnInd.innerText = `Player ${currPlayer}'s Turn`;
        }
    });
});

let checkWinner = () =>{
    for (let pattern of winPattern) {
        let pValue1 = gameBox[pattern[0]].innerText;
        let pValue2 = gameBox[pattern[1]].innerText;
        let pValue3 = gameBox[pattern[2]].innerText;

        if(pValue1 != "" && pValue2 != "" && pValue3 != ""){
            if(pValue1===pValue2 && pValue2===pValue3){
                console.log("Winner", pValue1);
            }
        }
    }
}