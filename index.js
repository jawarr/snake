// Game Objects
let snake = {
    body: [],
    nextDirection: []
  }

let gameState = {
    apple: [],
    snake: snake
}



// Functions to manipulate Game Object




// Stuff that shows up on the screen
const table = document.getElementsByTagName('table')[0]

function makeGrid(){
    for (let i = 0; i < 5; i++){
        const row = document.createElement('tr')
        table.appendChild(row)
        for (let i = 0; i < 5; i++){
            const cell = document.createElement('td')
            row.appendChild(cell)
        }
    }
}

makeGrid()

// Make things do stuff when the user does things



