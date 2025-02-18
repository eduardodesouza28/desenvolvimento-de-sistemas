const canvas = document.getElementById("canvaJogo")
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
let click = false

const player = {
    sizex: 20,
    sizey: 20,
    posx: 25,
    posy: canvas.height - 20,
}

const obstacule = {
    posx: canvas.width - 50,
    posy: canvas.height - 100,
    sizex: 20,
    sizey: 100,
    velocity: 5
}

var Keys = {
    up: false,
    down: false,
    left: false,
    right: false
};

document.addEventListener("click", (e) => {
    if (click == true) {
        location.reload()
    }
})

function drawChar() {
    ctx.fillStyle = 'red'
    ctx.fillRect(player.posx, player.posy, player.sizex, player.sizey)

}

function drawObs() {
    ctx.fillStyle = 'white'
    ctx.fillRect(obstacule.posx, obstacule.posy, obstacule.sizex, obstacule.sizey)
}

function moveObs() {
    obstacule.posx -= obstacule.velocity
}

function verifyCollision() {
    if (player.posx >= obstacule.posx - obstacule.sizex) {
        // alert("game over")
        // document.location.reload()
        gameOver()
    }
}

function gameOver() {
    obstacule.velocity = 0
    moveObs()
    ctx.fillStyle = "blue"
    ctx.fillRect((canvas.width / 2) - 150, (canvas.height / 2) - 50, 300, 100)
    ctx.fillStyle = "black"
    ctx.font = "40px Arial"
    ctx.fillText("game over", (canvas.width / 2) - 95, (canvas.height / 2))
    click = true
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    verifyCollision()
    moveObs()
    drawObs()
    drawChar()
    requestAnimationFrame(loop)
}

loop()