const canvas = document.getElementById("canvaJogo")
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;
let gameover = false
let obsR = 100
let spacePressed = false
let points = 0
const img = document.getElementById("flappy")
const pat = ctx.createPattern(img, "no-repeat")

const player = {
    posy: canvas.height - 20,
    sizex: 20,
    sizey: 20,
    posx: 25,
    jumpVelocity: 0,
    gravity: 0.5,
    jumping: false,
    onGround: true,
    onRoof: false

}

const obstacule = {
    posx: canvas.width + 10,
    posy: canvas.height - obsR,
    sizex: 50,
    sizey: obsR,
    velocity: 5
}
const obstacule2 = {
    posx: canvas.width + 10,
    posy: 0,
    sizex: 50,
    sizey: obsR,
    velocity: 5
}

document.addEventListener("click", (e) => {
    if (gameover == true) {
        location.reload()
    }
})

document.addEventListener("keydown", (e) => {
    if (e.code == "Space") {
        if (gameover == false && player.onRoof == false) {
            spacePressed = true
            player.jumpVelocity = 5
            player.jumping = true
            player.onGround = false
            player.onRoof = false
        }
        if (gameover) {
            location.reload()
        }

    }
});

document.addEventListener("keyup", (e) => {
    if (e.code == "Space") {
        spacePressed = false
    }
})

function drawChar() {
    ctx.drawImage(img, player.posx, player.posy, player.sizex, player.sizey)
    // ctx.fillStyle = pat
    // ctx.fillRect(player.posx, player.posy, player.sizex, player.sizey)

}
function drawPoints() {
    ctx.fillStyle = "black"
    ctx.font = "40px Arial"
    ctx.fillText(points, canvas.width - 200, canvas.height - 350)

}
function drawObs() {
    ctx.fillStyle = 'green'
    ctx.fillRect(obstacule.posx, obstacule.posy, obstacule.sizex, obstacule.sizey)
}
function drawObs2() {
    ctx.fillStyle = 'green'
    ctx.fillRect(obstacule2.posx, obstacule2.posy, obstacule2.sizex, obstacule2.sizey)
}

function ground() {
    if (player.posy >= canvas.height - player.sizey) {
        player.posy = canvas.height - player.sizey
        player.jumpVelocity = 0
        player.onGround = true
        player.jumping = false
    }

}

function jump() {
    player.posy -= player.jumpVelocity
}

function moveChar() {
    if (player.posy <= 0) {
        player.onRoof = true
        player.jumpVelocity = 0
        player.posy = 0.1
        player.posy -= player.jumpVelocity
        // player.jumpVelocity -= player.gravity
    } else {
        player.onRoof = false
        if (player.jumping == true) {
            // jump()
            if (spacePressed && player.jumpVelocity < 15) {
                player.jumpVelocity += 0.5
            }
        }
        jump()
    }
    

    player.jumpVelocity -= player.gravity
}

function resetObs() {
    if (obstacule.posx < - 50) {
        obsR = Math.floor(Math.random() * 200 + 1)
        if (obsR >= 170) {
            obsR = 120
        }
        obstacule.posx = canvas.width + 20
        obstacule.velocity += 0.5
        obstacule2.posx = canvas.width + 20
        obstacule2.velocity += 0.5
        obstacule.sizey = obsR
        obstacule.posy = canvas.height - obsR
        obstacule2.sizey = obsR
        points++
    }
}

function moveObs() {
    obstacule.posx -= obstacule.velocity
    obstacule2.posx -= obstacule2.velocity

}

function verifyCollision() {
    if (player.posx < obstacule.posx + obstacule.sizex &&
        player.posx + player.sizex > obstacule.posx &&
        player.posy < obstacule.posy + obstacule.sizey &&
        player.posy + player.sizey > obstacule.posy ||
        player.posx < obstacule2.posx + obstacule2.sizex &&
        player.posx + player.sizex > obstacule2.posx &&
        player.posy < obstacule2.posy + obstacule2.sizey &&
        player.posy + player.sizey > obstacule2.posy
    ) {
        gameOver()
    }
}

function gameOver() {
    obstacule.velocity = 0
    obstacule2.velocity = 0
    moveObs()
    ctx.fillStyle = "blue"
    ctx.fillRect((canvas.width / 2) - 150, (canvas.height / 2) - 50, 300, 100)
    ctx.fillStyle = "black"
    ctx.font = "40px Arial"
    ctx.fillText("game over", (canvas.width / 2) - 95, (canvas.height / 2))
    gameover = true
}

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    verifyCollision()
    moveChar()
    drawObs2()
    drawPoints()
    moveObs()
    ground()
    resetObs()
    drawObs()
    drawChar()
    requestAnimationFrame(loop)
}

loop()