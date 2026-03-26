{// VARIABLES 
// winning list 

// Load game board
// accept user position
    // request input
        // check if input is valid i.e is a number and within the range 1 - 9
            // if input isn't valid 
                // show board 
                //  request input again with error message
            // if valid 
                // check if the spot is available
                    // play move at that spot
                        // play move on board
                        // show board
                        // check which player made the move
                            // push the spot index into the player's moves list 
// check if the player won || draw
    // if total_moves = 9 and (any player_win is false)
    // check if player won
    // if player moves list in winning list 
        // output -> you won
// resetGame
}

// green color
import checkWin from './checkWin.js'
import readline from  'readline'

const GAME_BOARD  = [[1, 2, 3], 
                     [4, 5, 6], 
                     [7, 8, 9]]
const WINNING_MOVES  = [[1,2,3], [4,5,6], [7,8,9], 
                        [1,4,7], [2,5,8], [3,6,9], 
                        [1,5,9], [3,5,7]]

let currentMove = 'X'
const player_X_moves = []
const player_O_moves = []
let [player_X_won, player_O_won] = [false, false]


function showGameBoard(){
    for(let rows in GAME_BOARD){
        console.log(GAME_BOARD[rows])
    }
}

const play = (position) => {
    let count = 0;

    for(let rows in GAME_BOARD){
        for(let columns in GAME_BOARD){
            count++
            if(count === position) GAME_BOARD[rows][columns] = currentMove
        }
    }
}

const readInput = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})

let totalMoves = 0
function playGame(){
    // accept input
    readInput.question(`choose and available spot and Play ( X ): `, (position) => {
        position = Number(position)
        if(isNaN(position) || position < 1 || position > 9){
            console.log('\x1b[31m input is invalid\x1b[0m')
            console.log('Choose from the available spot on the game board')
            showGameBoard()
            playGame()
        }else{
            play(position)

            if(currentMove === 'X') player_X_moves.push(position)
            else player_O_moves.push(position)
    
            totalMoves += 1
            console.log(`\x1b[32m Move Executed at position ${position} \x1b[0m `)

            // check if the player is likely to start winning
            if(totalMoves < 5){
                showGameBoard()
            }else{
                // check won 
                    // x won 
                    checkWin(player_X_moves)
                    checkWin(player_O_moves)
                    // if draw -> break
                showGameBoard()
                readInput.close()
            }
            
        }
    })

}


playGame()