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


import checkWin from './checkWin.js'
import readline from  'readline'
                                                  
const GAME_BOARD  = [[1, 2, 3], 
                     [4, 5, 6], 
                     [7, 8, 9]]

const availableSpots = [1,2,3,4,5,6,7,8,9]

let currentMove = 'X'
const player_X_moves = []
const player_O_moves = []
let [player_X_won, player_O_won] = [false, false]


const showGameBoard = () => {
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

const updateMove = () => {
    currentMove = currentMove === "X" ? 'O' : 'X'
}

const readInput = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
})



const positionIsInvalid = (position) => {
   return ( isNaN(position) || position < 1 || position > 9 )
}

let totalMoves =  9 - availableSpots.length;
showGameBoard()
function playGame(){
    console.log(`AVAILABLE SPOT: [${availableSpots}]`)

    // accept input
    readInput.question(`choose and available spot and Play ( ${currentMove} ): `, (position) => {
        position = Number(position)

        if(positionIsInvalid(position)){
            console.log('\x1b[31m input is invalid\x1b[0m')
            console.log('Choose from the available spot on the game board')
            showGameBoard()
            playGame()
        }
        else if (!availableSpots.includes(position)){
            console.log(`\x1b[31m That spot has already been taken\x1b[0m`)
            showGameBoard()
            playGame()
        }
        else{
            // position is available 
                // if true - do
                // else
            play(position)
            console.log(position)
            availableSpots.splice(availableSpots.indexOf(position), 1)

            if(currentMove === 'X') player_X_moves.push(position)
            else player_O_moves.push(position)
            console.log(`X: ${player_X_moves} `, `O: ${player_O_moves}`)
    
            // totalMoves += 1
            console.log(`\x1b[32m Move Executed at position ${position} \x1b[0m `)

            // check if the player is likely to start winning
            if(totalMoves > 5){
                showGameBoard()
                updateMove()
                playGame()
            }else{
                // check won 
                    // x won 
                    if(checkWin(player_X_moves)) {
                        console.log(`\x1b[32m Player x : ${checkWin(player_X_moves) == true ? 'won' : 'lost'} \x1b[0m`)
                        readInput.close()
                    }else if (checkWin(player_O_moves)){
                        console.log(`]\x1b[32m Player O : ${checkWin(player_O_moves) == true ? 'won' : 'lost'} \x1b[0m`)
                        readInput.close()
                    }else{
                        if(availableSpots.length === 0) {
                            console.log(`\x1b[33m Argh!!, the game was draw\x1b[0m`)
                            readInput.close()
                        }
                        else {
                            console.log('stil in game');
                            showGameBoard()
                            updateMove()
                            playGame()
                        }
                    }
                    // if draw -> break
            }
            
        }
    })

}


playGame()


// confirm  X is a winning move
// X: 1,3,9,6  O: 5,2,4