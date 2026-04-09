const WINNING_MOVES  = [[1,2,3], [4,5,6], [7,8,9], 
                        [1,4,7], [2,5,8], [3,6,9], 
                        [1,5,9], [3,5,7]]



const moves = [1,0,9,5]

//{ 
    // loop through array 
// select a row
// select an item from the moves
// check if the move is the winning list
    // if its in the winnig list
        // count++

            // if count === 3 
                // print the move 
                // break;
    // else continue

//}
   

export default function checkWin(moves){
    let searchCount = 0
    let playerWon = false;
    for(let rows in WINNING_MOVES){
    let count = 0;
    let selectedRow = WINNING_MOVES[rows]
        for(let columns in moves){
            searchCount++;
            let isInWinningList = selectedRow.includes(moves[columns])

            if(isInWinningList){
                count++

                if(count === 3){
                    playerWon = true
                    return playerWon
                }
            }else {
                // console.log('\x1b[31m not in winning list \x1b[0m')
                continue; 
            } 
        }

        if(count === 3) break;
        if(searchCount === 32) return playerWon
    }
    


}


