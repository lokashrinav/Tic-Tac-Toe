let xl = 0;

var Gameboard = (function() {
    let arr = ["", "", "", "", "", "", "", "", ""]
    let trace = 0;
    let small = document.getElementsByClassName("small")[0]
    let big = document.getElementsByClassName("big")[0]
    let popup = document.getElementsByClassName("popup")[0]
    let words = document.getElementsByClassName("words")[0]
    let container = document.getElementsByClassName("container")[0]
    let box1 = document.getElementsByClassName("box1")[0]
    let box2 = document.getElementsByClassName("box2")[0]
    let box3 = document.getElementsByClassName("box3")[0]
    let box4 = document.getElementsByClassName("box4")[0]
    let box5 = document.getElementsByClassName("box5")[0]
    let box6 = document.getElementsByClassName("box6")[0]
    let box7 = document.getElementsByClassName("box7")[0]
    let box8 = document.getElementsByClassName("box8")[0]
    let box9 = document.getElementsByClassName("box9")[0]



    return {
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
            }
        },
        statement: function(r){
            if(xl>0){
                words.innerHTML = "Congratulations, PlayerO!"
            }
            else if(xl<0){
                words.innerHTML = "Congratulations, PlayerX!"
            }
            popup.classList.remove("popup")
            popup.classList.add("popup-open")
            xl = 0;
            box1.setAttribute("onclick", "")
            box2.setAttribute("onclick", "")
            box3.setAttribute("onclick", "")
            box4.setAttribute("onclick", "")
            box5.setAttribute("onclick", "")
            box6.setAttribute("onclick", "")
            box7.setAttribute("onclick", "")
            box8.setAttribute("onclick", "")
            box9.setAttribute("onclick", "")

        },
        insert: function() {
            for(let i = 0; i < arr.length; i++) {
                let box = document.getElementsByClassName('box')[i]
                box.innerHTML = arr[i];
            }
            Gameboard.win()        
        },
        reset: function(){
            arr = [];
            Gameboard.insert()
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
                Gameboard.addX(t);
                trace=0;
                big.innerHTML = "O's";
                small.innerHTML = "Turn"}
            
            }
            else{
                if(arr[t] != "O" && arr[t] != "X") {
                Gameboard.addO(t);
                trace++;
                big.innerHTML = "X's";
                small.innerHTML = "Turn";}
            }
        }

    }

}
)();

const Player = (name) => {
    return {};
}

Gameboard.insert();


document.getElementsByClassName('box')[0]
        .addEventListener('click', function (event) {
            Gameboard.addO(0)
        })

