const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

let speed = 7

canvas.height = 400
canvas.width = 400
let tileCount = 20
let tileSize = canvas.width / tileCount - 2
let headX = 10
let headY = 10

let xDirection = 0
let yDirection = 0

function renderGame() {
    console.log("I updated")
    clearScreen()
    drawSnake()
    setTimeout(updateLoop, 1000 / speed)
}


function clearScreen() {
    ctx.fillStyle = 'lightgrey'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function drawSnake() {
    ctx.fillStyle = 'green'
    ctx.fillRect(headX * tileCount, headY * tileCount, tileSize, tileSize)
}



renderGame()




// make canvas square and size to screen

// function canvasSize(viewportPercent) {
//     viewportPercent = viewportPercent / 100
//     let viewportMinSize = Math.min(window.innerWidth, window.innerHeight)
//     return viewportPercent * viewportMinSize
// }

// function renderCanvas () {
//     canvas.width = canvasSize(80)
//     canvas.height = canvasSize(80)
//     console.log(canvas.width, canvas.height)
//     setTimeout(renderCanvas, 500)
// }

// renderCanvas ()

// setInterval (function () {
//     canvas.width = canvasSize(80)
//     canvas.height = canvasSize(80)
//     console.log(canvas.width, canvas.height)
// }, 500)

// render function 














