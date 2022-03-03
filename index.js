const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')
const text = document.getElementById('text')
const scoreBoard = document.createElement('h2')
text.appendChild(scoreBoard)



class snakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let speed = 10

canvas.height = 400
canvas.width = 400
let cellCount = 20
let cellSize = canvas.width / cellCount
let headX = 10
let headY = 10
const snakeBody = []
let bodyLength = 2


let appleX = 5
let appleY = 5

let xVelocity = 0
let yVelocity = 0

let score = 0

function renderGame() {
    // console.log("I updated")
    clearScreen()
    snakePosition()
    appleCollision()
    renderApple()
    renderSnake()
    updateScore()
    setTimeout(renderGame, 1000 / speed)
}

function updateScore () {
    scoreBoard.innerText = `SCORE: ${bodyLength - 2}`
}

function clearScreen() {
    ctx.fillStyle = 'lightgrey'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}

function renderSnake() {
    //continuously adds new body parts 
    ctx.fillStyle = 'darkgreen'
    for (let i = 0; i < snakeBody.length; i++) {
        let segment = snakeBody[i]
        
        //up down
        if (xVelocity === 0 && (yVelocity === -1 || yVelocity === 1)) {
            ctx.fillRect(segment.x * cellCount, segment.y * cellCount, cellSize, cellSize)
        //left right
        } else if (yVelocity === 0 && (xVelocity === -1 || xVelocity === 1)){
            ctx.fillRect(segment.x * cellCount, segment.y * cellCount, cellSize, cellSize)
        }
    }

    //moves the body with the head by removing the tail end 
    //and adding new parts right after the head 
    snakeBody.push(new snakePart(headX, headY))
    if (snakeBody.length > bodyLength) {
        snakeBody.shift()
    }

    // draws the head starting in the middle of the screen
    // ctx.fillStyle = 'blue'
    ctx.fillRect(headX * cellCount, headY * cellCount, cellSize, cellSize)
    ctx.fillStyle = 'rgb(5, 56, 5)'
    ctx.fillRect(headX * cellCount + 1, headY * cellCount - 1, cellSize / 3, cellSize / 3)
    ctx.fillRect(headX * cellCount + 12, headY * cellCount - 1, cellSize / 3, cellSize / 3)
}

function snakePosition() {
    headX = headX + xVelocity
    headY = headY + yVelocity
}

function renderApple() {
    ctx.fillStyle = 'crimson'
    ctx.fillRect(appleX * cellCount, appleY * cellCount, cellSize, cellSize)
}

document.body.addEventListener('keydown', arrowInput)

function appleCollision() {
    if (appleX === headX && appleY === headY) {
        appleX = Math.floor(Math.random() * cellCount)
        appleY = Math.floor(Math.random() * cellCount)
        bodyLength++
    }
}

function arrowInput(event) {
    //up
    if (event.keyCode == 38) {
        if (yVelocity === 1) {
            return
        }
        yVelocity = -1
        xVelocity = 0
    }
    //down
    if (event.keyCode == 40) {
        if (yVelocity === -1) {
            return
        }
        yVelocity = 1
        xVelocity = 0
    }
    //left
    if (event.keyCode == 37) {
        if (xVelocity === 1) {
            return
        }
        yVelocity = 0
        xVelocity = -1
    }
    //right 
    if (event.keyCode == 39) {
        if (xVelocity === -1) {
            return
        }
        yVelocity = 0
        xVelocity = 1
    }
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














