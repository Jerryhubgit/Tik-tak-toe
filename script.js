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
                                                  
const GAME_BOARD  = [[1, 2, 3], 
                     [4, 5, 6], 
                     [7, 8, 9]]

const btns = document.querySelectorAll('.gameboard .slots')
const playersTurn = document.querySelector('.players-turn')

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
const positionIsInvalid = (position) => {
   return ( isNaN(position) || position < 1 || position > 9 )
}

let totalMoves =  9 - availableSpots.length;
let gamePosition;

showGameBoard()


// else check if position is available


// console.log(`AVAILABLE SPOT: [${availableSpots}]`)
function playGame(position){
    position = Number(position)


    if (!availableSpots.includes(position)){
        console.log(`\x1b[31m That spot has already been taken\x1b[0m`)
        showGameBoard()
        return
    }
    else{
        play(position)
        // remove played spot
        availableSpots.splice(availableSpots.indexOf(position), 1)

        if(currentMove === 'X') player_X_moves.push(position)
        else player_O_moves.push(position)
        console.log(`X: ${player_X_moves} `, `O: ${player_O_moves}`)

        console.log(`\x1b[32m Move Executed at position ${position} \x1b[0m `)
        for(let btn of btns){
            if(btn.dataset.play == position){
                btn.querySelector('h1').innerHTML = currentMove
            }
        }

        if(totalMoves > 5){
            showGameBoard()
            updateMove()
        }else{
            if(checkWin(player_X_moves)) {
                player_X_won = true
                showGameBoard()
                playersTurn.innerHTML = `Player X WON`
                console.log(`\x1b[32m Player x : ${checkWin(player_X_moves) == true ? 'won' : 'lost'} \x1b[0m`)
                return
            }else if (checkWin(player_O_moves)){
                player_O_won = true
                showGameBoard()
                playersTurn.innerHTML = `Player O WON`
                console.log(`]\x1b[32m Player O : ${checkWin(player_O_moves) == true ? 'won' : 'lost'} \x1b[0m`)
                return
            }else{
                if(availableSpots.length === 0) {
                    console.log(`\x1b[33m Argh!!, the game was draw\x1b[0m`)
                    playersTurn.innerHTML = 'Argh!!, the game was draw'
                }
                else {
                    showGameBoard()
                    updateMove()
                    playersTurn.innerHTML = `${currentMove} TURN`
                }
            }
        }
    }
    console.log(availableSpots)
}

// play
// updatemove
// bot plays

function multiplay(){
    if(currentMove === 'X'){
        btns.forEach(btn => {
            btn.addEventListener('click', () => { 
                gamePosition = btn.dataset.play
                if(player_X_won === true || player_O_won === true) return 
                playGame(gamePosition)
                console.log(`Here we have the move`)
                multiplay()
            })
        })
    }else{
        console.log(`Available spots: ${availableSpots}`, availableSpots.length)
        let randomSpot = Math.floor(Math.random() * availableSpots.length)
        setTimeout(() => {
            playGame(availableSpots[randomSpot])
        }, 1000)
     
    }
    
    
}



multiplay()
