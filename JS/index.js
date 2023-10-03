const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')
const text = document.getElementById('text')
const scoreBoard = document.createElement('h2')
text.appendChild(scoreBoard)
const upButton = document.getElementById('up')
const leftButton = document.getElementById('left')
const rightButton = document.getElementById('right')
const downButton = document.getElementById('down')
const buttons = document.getElementsByClassName('buttons')

class snakePart {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let speed = 7

function canvasSize(viewportPercent) {
    viewportPercent = viewportPercent / 100
    let viewportMinSize = Math.min(window.innerWidth, window.innerHeight)
    return viewportPercent * viewportMinSize
}

function renderGame() {
    snakePosition()
    if (isGameOver()) return
    renderCanvas()
    clearScreen()
    appleCollision()
    renderApple()
    renderSnake()
    updateScore()
    setTimeout(renderGame, 1000 / speed)
}

let cellCount = 20
let cellSize = canvas.width / cellCount


let headX = cellCount * .5
let headY = cellCount * .5
const snakeBody = []
let bodyLength = 2

let appleX = cellCount * .25
let appleY = cellCount * .25

let xVelocity = 0
let yVelocity = 0

let score = 0

// make canvas square and size to screen


function renderCanvas () {
    canvas.width = (Math.round(canvasSize(60) / 20)) * 20
    canvas.height = (Math.round(canvasSize(60) / 20)) * 20
    console.log (canvas.width, canvas.height)
}



function isGameOver () {
    let gameOver = false
    
    if (yVelocity === 0 && xVelocity === 0) {
        return false
    }

    //wall collision 
    if (headX < 0 || headX === cellCount || headY < 0 || headY === cellCount){
        gameOver = true
    }
    //snake collision
    for (let i = 0; i < snakeBody.length; i++) {
        let part = snakeBody[i]
        if (part.x === headX && part.y === headY) {
            gameOver = true
            break
        }
    }
    //GAME OVER text
    if (gameOver) {
        let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
        gradient.addColorStop("0", "magenta")
        gradient.addColorStop("0.5", "blue")
        gradient.addColorStop("1.0", "red")
        ctx.fillStyle = gradient
        ctx.font = '35px "Press Start 2P"';
        ctx.shadowOffsetX = 5
        ctx.shadowOffsetY = 5
        ctx.shadowColor = "rgb(12, 12, 12)"
        ctx.shadowBlur = 3
        ctx.fillText("GAME OVER", canvas.width / 8, canvas.height / 1.9)
    }
    return gameOver
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
        ctx.fillRect(segment.x * cellCount, segment.y * cellCount, cellSize, cellSize)
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

upButton.addEventListener('click', function(){
    if (yVelocity === 1) {
        return
    }
    yVelocity = -1
    xVelocity = 0
})

leftButton.addEventListener('click', function(){
    if (xVelocity === 1) {
        return
    }
    yVelocity = 0
    xVelocity = -1
})

rightButton.addEventListener('click', function(){
    if (xVelocity === -1) {
        return
    }
    yVelocity = 0
    xVelocity = 1
})

downButton.addEventListener('click', function(){
    if (yVelocity === -1) {
        return
    }
    yVelocity = 1
    xVelocity = 0
})

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






// setInterval (function () {
//     canvas.width = canvasSize(80)
//     canvas.height = canvasSize(80)
//     console.log(canvas.width, canvas.height)
// }, 500)

// render function 









