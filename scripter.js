let xl = 0;

var Gameboard = (function() {
    let arr = ["", "", "", "", "", "", "", "", ""]
    let playernames = []
    let trace = 0;
    let small = document.getElementsByClassName("small")[0]
    let big = document.getElementsByClassName("big")[0]
    let popup = document.getElementsByClassName("popup")[0]
    let words = document.getElementsByClassName("words")[2]
    let won = document.getElementsByClassName("won")[0]
    let reseter = document.getElementsByClassName("reset")[0]
    let box = document.getElementsByClassName('box')[0]
    let player1 = document.getElementsByClassName("popup-open1")[0]
    let player2 = document.getElementsByClassName("popup2")[0]
    let inpit = document.getElementsByClassName("inpit")[0]
    let inpiter = document.getElementsByClassName("inpit")[1]


    return {
        siv: function(){
            if(inpit.value != undefined) {
                playernames[0] = inpit.value;
                player1.classList.remove("popup-open1")
                player1.classList.add("popup1")
                player2.classList.remove("popup2")
                player2.classList.add("popup-open2")
            }
        },
        siv2: function(){
            if(inpiter.value != undefined) {
                playernames[1] = inpiter.value;
                player2.classList.remove("popup-open2")
                player2.classList.add("popup2")
                for(let i = 0; i < arr.length; i++) {
                    box = document.getElementsByClassName('box')[i]
                    box.setAttribute("onclick", `Gameboard.choose(${i})`);
                }
                reseter.setAttribute("onclick", "Gameboard.reset()")
            }
        },
        win: function(){
            if((arr[0] == "O" && arr[1] == "O" && arr[2]== "O")||(arr[3] == "O" && arr[4] == "O" && arr[5] == "O")||(arr[6] == "O" && arr[7] == "O" && arr[8] == "O")) {
                xl++;
                Gameboard.statement()
            }
            else if((arr[0] == "X" && arr[1] == "X" && arr[2] == "X")||(arr[3] == "X" && arr[4] == "X" && arr[5] == "X")||(arr[6] == "X" && arr[7] == "X" && arr[8] == "X")) {
                xl--;
                Gameboard.statement()
            }
            else if((arr[0] == "O" && arr[3] == "O" && arr[6]== "O")||(arr[1] == "O" && arr[4] == "O" && arr[7] == "O")||(arr[2] == "O" && arr[5] == "O" && arr[8] == "O")) {
                xl++;
                Gameboard.statement()
            }
            else if((arr[0] == "X" && arr[3] == "X" && arr[6]== "X")||(arr[1] == "X" && arr[4] == "X" && arr[7] == "X")||(arr[2] == "X" && arr[5] == "X" && arr[8] == "X")) {
                xl--;
                Gameboard.statement()
            }
            else if((arr[2] == "O" && arr[4] == "O" && arr[6] == "O")||(arr[0] == "O" && arr[4] == "O" && arr[8] == "O")) {
                xl++;
                Gameboard.statement()
            }
            else if((arr[2] == "X" && arr[4] == "X" && arr[6] == "X")||(arr[0] == "X" && arr[4] == "X" && arr[8] == "X")) {
                xl--;
                Gameboard.statement()
            }
            else{
                Gameboard.checker()
            }

        },
        checker: function(){
            if(arr[0] != "" && arr[1] != "" && arr[2] != "" && arr[3] != "" && arr[4] != "" && arr[5] != "" && arr[6] != "" && arr[7] != "" && arr[8] != "" ) {
                popup.classList.remove("popup")
                popup.classList.add("popup-open")
                words.innerHTML = "It's a Tie!"
                won.innerHTML = "";
            }
        },
        statement: function(r){
            if(xl>0){
                words.innerHTML = "Congratulations, " + playernames[0] + "!";
            }
            else if(xl<0){
                words.innerHTML = "Congratulations, " + playernames[1] + "!";
            }
            popup.classList.remove("popup")
            popup.classList.add("popup-open")
            xl = 0;
            for(let i = 0; i < arr.length; i++) {
                let box = document.getElementsByClassName('box')[i]
                box.setAttribute("onclick", "");
            }
            reseter.setAttribute("onclick", "")
            big.innerHTML = "Game";
            small.innerHTML = "Over!";            
        },
        insert: function() {
            for(let i = 0; i < arr.length; i++) {
                box = document.getElementsByClassName('box')[i]
                box.innerHTML = arr[i];
            }
            Gameboard.win()        
        },
        reset: function(){
            arr = ["", "", "", "", "", "", "", "", ""]
            for(let i = 0; i < arr.length; i++) {
                box = document.getElementsByClassName('box')[i]
                box.setAttribute("onclick", `Gameboard.choose(${i})`);
            }
            reseter.setAttribute("onclick", "Gameboard.reset()")
            big.innerHTML = "O";
            small.innerHTML = "Goes First";
            Gameboard.insert()
            trace = 0;
        },
        reset2: function(){
            popup.classList.remove("popup-open")
            popup.classList.add("popup")
            arr = ["", "", "", "", "", "", "", "", ""]
            for(let i = 0; i < arr.length; i++) {
                box = document.getElementsByClassName('box')[i]
                box.setAttribute("onclick", `Gameboard.choose(${i})`);
            }
            reseter.setAttribute("onclick", "Gameboard.reset()")
            big.innerHTML = "O";
            small.innerHTML = "Goes First";
            Gameboard.insert()
            trace = 0;
        },
        addX: function(t){
            if(arr[t] != "O" && arr[t] != "X") {
                arr.splice(t, 1,"X")
                Gameboard.insert()
            }
        },
        addO: function(t){
            if(arr[t] != "O" && arr[t] != "X") {
                arr.splice(t, 1,"O")
                Gameboard.insert()
            }         
        },
        choose: function(t){
            if(trace==1) {
                if(arr[t] != "O" && arr[t] != "X") {
                big.innerHTML = playernames[0]+"'s";
                small.innerHTML = "Turn"
                Gameboard.addX(t);
                trace=0;      
            }      
            }
            else{
                if(arr[t] != "O" && arr[t] != "X") {
                big.innerHTML = playernames[1]+"'s";
                small.innerHTML = "Turn";
                Gameboard.addO(t);
                trace++;
            }
            }
        }

    }

}
)();


