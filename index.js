const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

let speed = 7

function updateLoop () {
    console.log("I updated")
    setTimeout(updateLoop, 1000/speed)
}

// function clearScreen () {
//     ctx.fillStyle = 'lightgrey'
//     ctx.fillRect(0, 0, canvas.width, canvas.height)
// }

// clearScreen()


updateLoop()



















