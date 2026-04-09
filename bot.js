import checkWin from "./checkWin.js"

const WINNING_MOVES  = [[1,2,3], [4,5,6], [7,8,9], 
                        [1,4,7], [2,5,8], [3,6,9], 
                        [1,5,9], [3,5,7]]


let moves = [ 7, 4 , 3, 6]

// set a counter for the moves
// check the moves inividually
// if it's a winning move 
    // increment counter
    // remove move from the winning moves list
    // check if counter is up to 2 
        // recommend the last move as a winning move


        //[ 1, 4, 7 ]        
        
// Recommend move to counter winning 
function counterWinning(){
    let counter = 0
    for(let rows in WINNING_MOVES){
        let counter = 0;
        let selectedRow = [...WINNING_MOVES[rows]]

        for(let element in moves){ 
            if(selectedRow.includes(moves[element])){
                selectedRow.splice(selectedRow.indexOf(moves[element]), 1)
                console.log(selectedRow)
                counter++
                if(counter >= 2) {
                    console.log(`I recommend  ${selectedRow[0]}`)
                    break;
                }
            }
        }
        if(counter >= 2 ) break;
    }
}


let availableSpots =  [1,2,3,4,5,6,7,8,9]

function botMove(){
    let count = 0
    while(count < 3){
        let random = Math.floor(Math.random() * availableSpots.length)
        availableSpots.splice(availableSpots.indexOf(availableSpots[random]), 1)

        console.log(availableSpots)
        count++;
    }
}

botMove()


