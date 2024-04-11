let currentPlayer = "X";
let user1 = [];
let user2 = [];
let scoreX = 0;
let scoreO = 0;
const winningChances = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ];
function Winner(user){
   
    return winningChances.some(combination => combination.every(value=> user.includes(value)));
}
function declareWinner(user) {
    winningChances.forEach(combination => {
        if (combination.every(value => user.includes(value))) {
            combination.forEach(choiceid => {
                const block = document.querySelector(`._${choiceid}`);
                block.style.backgroundColor = "lightcoral";
            });
        }
    });
}

const boxes = document.querySelectorAll(".boxes");
const turn = document.querySelector(".turn");
const result = document.querySelector(".userWinner");
const restart = document.querySelector(".restart");
const xScore = document.querySelector(".x_score");
const oScore = document.querySelector(".o_score");
turn.innerText = `Player X's Turn`;
restart.style.display ="none";
xScore.innerText = `X : ${scoreX}`;
oScore.innerText = `O : ${scoreO}`;

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
 if(box.innerText==""){
    
  if(currentPlayer==="X"){
        box.innerText = "X";
        user1.push(parseInt(box.id));}
    
  else{ box.style.color = "cornflowerblue";
        box.innerText = "O";
        user2.push(parseInt(box.id));
        }
        
    }
    if(currentPlayer==="X"){
        currentPlayer="O";
        turn.innerText = `Player${currentPlayer}'s Turn`;
      }
      else{
        currentPlayer="X";
        turn.innerText = `Player${currentPlayer}'s Turn`;
      }
    
  if(Winner(user1)){
    declareWinner(user1);
    result.innerText ="Player X wins";
    scoreX++;
    xScore.innerText = `X : ${scoreX}`;
    turn.innerText="";
    restart.style.display = "inline";
   }
   else if(Winner(user2)){
   declareWinner(user2);
    scoreO++;
    oScore.innerText = `O : ${scoreO}`;
    result.innerText ="Player O wins";
    turn.innerText="";
    restart.style.display = "inline";
   }
   else if(user1.length + user2.length == 9 && !Winner(user1) && !Winner(user2)){
    result.innerText ="Match Draw";
    turn.innerText="";
    restart.style.display = "inline";
   }
 })
});
function clearColor(user){
    user.forEach(choiceid => {
        console.log(choiceid);
        const block = document.querySelector(`._${choiceid}`);
        block.style.backgroundColor = "transparent";
    })  
}
restart.addEventListener("click", ()=>{
    clearColor(user1);
    clearColor(user2);
   
    user1 = []
    user2 = []
    boxes.forEach((box)=>{
    box.innerText = "";
    result.innerText="";
    })
    i=1;
turn.innerText = `Player O's Turn`;
})


