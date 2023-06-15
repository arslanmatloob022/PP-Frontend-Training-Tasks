let player = "A";
let gameEnded = false;


for(let i=0; i <= 9; i++){
    document.getElementById(i.toString()).addEventListener(
        "click", function(){
            if(this.innerHTML==="" && !gameEnded){
                this.innerHTML = player;
                
                if(player === "A"){
                    player = "B";
                }else{
                    player ="A";
                }
            }
        }
    )
}