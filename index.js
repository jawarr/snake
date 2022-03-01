// Game Objects
let snake = {
    body: [],
    nextDirection: []
  }

let gameState = {
    score: 0,
    apple: [],
    snake: snake
}



// Functions to manipulate Game Objects




// Stuff that shows up on the screen

// game grid
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


// apple 

const cells = document.getElementsByTagName('td')
console.log(cells)

setInterval(function () {
    const randomCellIndex = Math.floor(Math.random() * cells.length);
    cells[randomCellIndex].classList = ('apple');
  }, 10000);



  // Make things do stuff when the user does things



