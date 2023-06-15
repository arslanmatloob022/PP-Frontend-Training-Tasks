let playerSymbol = "X";
let gameEnded = false

let winPos = [
  [1, 2, 3], [4, 5, 6], 
  [7, 8, 9], [1, 4, 7], 
  [2, 5, 8], [3, 6, 9], 
  [1, 5, 9], [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {
  document.getElementById(i.toString()).addEventListener(
    "click", 
    function() {
      if (this.innerHTML === "" && !gameEnded) {
        this.innerHTML = playerSymbol;
        
        checkWin();
        if(playerSymbol === "X"){
          playerSymbol = "O"
          this.classList.add('p1');
          
        }else{
          playerSymbol = "X";
          this.classList.add('p2');
        }
      }
    }
  );
}

function checkWin() {
  for (let i = 0; i < winPos.length; i++) {
	if (
	  document.getElementById(winPos[i][0]).innerHTML === playerSymbol &&
	  document.getElementById(winPos[i][1]).innerHTML === playerSymbol &&
	  document.getElementById(winPos[i][2]).innerHTML === playerSymbol
	) {
	  document.getElementById(winPos[i][0]).classList.add("win");
	  document.getElementById(winPos[i][1]).classList.add("win");
	  document.getElementById(winPos[i][2]).classList.add("win"); 
    
	  gameEnded = true;
	  setTimeout(function() {
      res = document.querySelector(".result");
      if(playerSymbol =="O"){
        alert("Player-1 Wins !");
        document.classList.add('.show');
      }else{
        alert("Player-2 Wins");
      }
	   
	  }, 500);
    // reset();
	}
  }
  // 
}

  function reset() {
    for (let i = 1; i <= 9; i++) {
      document.getElementById(i.toString()).innerHTML = "";
      document.getElementById(i.toString()).classList.remove("x");
      document.getElementById(i.toString()).classList.remove("o");
      document.getElementById(i.toString()).classList.remove("win");
      gameEnded = false;
    }
  }