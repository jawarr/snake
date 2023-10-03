const canvas = document.getElementById('board')
const ctx = canvas.getContext('2d')

function clearScreen() {
    ctx.fillStyle = 'lightgrey'
    ctx.fillRect(0, 0, canvas.width, canvas.height)
}


export { clearScreen }