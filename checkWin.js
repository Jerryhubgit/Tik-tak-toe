const WINNING_MOVES  = [[1,2,3], [4,5,6], [7,8,9], 
                        [1,4,7], [2,5,8], [3,6,9], 
                        [1,5,9], [3,5,7]]


// loop through array 
// selected a row
// loop select element in moves
// check if element is in row
    // if true -> count++
        // check if all of them are there 
            // count === 3 
                // moves ***** is at position ***
    // else - break out of loop



const moves = [3,7,5] 

export default function CheckWin(moves){
    let searchCount = -1;
    for(let rows in WINNING_MOVES){
        let count = 0
        let selectedRow = [...WINNING_MOVES[rows]]
        let isInTheWinningList;
        searchCount++
        for(let column in moves){
            isInTheWinningList = selectedRow.includes(moves[column])
            console.log(isInTheWinningList, selectedRow, moves[column])
            if(isInTheWinningList){
                count++
                if(count === 3) { 
                    console.log(`\x1b[32mMoves ${moves} at index ${searchCount} is a winning move\x1b[0m`)
                    break;
                }
                selectedRow.splice(selectedRow.indexOf(moves[column]), 1)
            }else {
                console.log(`\x1b[31mMoves ${moves} isn't a winning move\x1b[0m`)
                break;
            }
        }
        if(count === 3) break;
    }
}

// CheckWin(moves)




