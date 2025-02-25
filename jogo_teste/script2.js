
const canvas = document.getElementById("canvaJogo")
const ctx = canvas.getContext('2d')
canvas.width = 400
canvas.height = 400

class Player {
    constructor() {
        this.posx = 25
        this.posy = canvas.height - 20
        this.sizex = 20
        this.sizey = 20
        this.jumpVelocity = 0
        this.gravity = 0.5
        this.jumping = false
        this.onGround = true
        this.onRoof = false
        this.spacePressed = false
    }

    draw() {
        ctx.drawImage(document.getElementById("flappy"), this.posx, this.posy, this.sizex, this.sizey)
    }

    jump() {
        if (this.jumping) {
            if (this.posy <= 0) {
                this.onRoof = true
                this.jumpVelocity = 0
                this.posy = 0.1
            }
            if (this.spacePressed && this.jumpVelocity < 15) {
                this.jumpVelocity += 0.5
            }
            this.posy -= this.jumpVelocity
            this.jumpVelocity -= this.gravity
            if (this.posy >= canvas.height - this.sizey) {
                this.posy = canvas.height - this.sizey
                this.jumping = false
                this.onGround = true
                this.jumpVelocity = 0
            }
        }
    }
}

class Obstacle {
    constructor(posx, posy, sizex, sizey) {
        this.posx = posx
        this.posy = posy
        this.sizex = sizex
        this.sizey = sizey
        this.velocity = 5
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.posx, this.posy, this.sizex, this.sizey)
    }

    move() {
        this.posx -= this.velocity
    }

    reset() {
        let nR = Math.floor(Math.random() * 200 + 1)
        this.posx = canvas.width + 10
        if (nR >= 150) {
            nR = 150
        }
        if (nR <= 20){
            nR = 25
        }
        this.sizey = nR
        this.posy = canvas.height - this.sizey
        this.velocity += 0.5
    }
}
class ObstacleUp {
    constructor(posx, posy, sizex, sizey) {
        this.posx = posx
        this.posy = posy
        this.sizex = sizex
        this.sizey = sizey
        this.velocity = 5
    }

    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.posx, this.posy, this.sizex, this.sizey)
    }

    move() {
        this.posx -= this.velocity
    }

    reset() {
        let nR = Math.floor(Math.random() * 200 + 1)
        this.posx = canvas.width + 10
        if (nR >= 150) {
            nR = 150
        }
        if (nR <= 20){
            nR = 25
        }
        this.sizey = nR
        this.posy = 0
        this.velocity += 0.5
    }
}

class Game {
    constructor() {
        this.player = new Player()
        this.obstacle1 = new Obstacle(canvas.width + 10, canvas.height - 100, 50, 100)
        this.obstacle2 = new ObstacleUp(canvas.width + 10, 0, 50, 100)
        this.points = 0
        this.gameover = false

        this.init()
    }

    init() {
        document.addEventListener("click", () => {
            if (this.gameover) {
                location.reload()
            }
        })

        document.addEventListener("keydown", (e) => {
            if (e.code === "Space") {
                if (this.gameOver)
                    this.player.jumping = true
                this.player.jumpVelocity = 5
                this.player.onGround = false
                this.player.spacePressed = true
                if (this.gameover) {
                    location.reload()
                }
            }
        })
        document.addEventListener("keyup", (e) => {
            if (e.code == "Space") {
                this.player.spacePressed = false
            }
        })

        this.loop()
    }

    drawPoints() {
        ctx.fillStyle = "black"
        ctx.font = "40px Arial"
        ctx.fillText(this.points, canvas.width - 200, canvas.height - 350)
    }

    resetObstacles() {
        if (this.obstacle1.posx < -50) {
            this.obstacle1.reset()
            this.points++
        }
        if (this.obstacle2.posx < -50) {
            this.obstacle2.reset()
        }
    }

    moveObstacles() {
        this.obstacle1.move()
        this.obstacle2.move()
    }

    verifyCollision() {
        if (this.checkCollision(this.player, this.obstacle1) || this.checkCollision(this.player, this.obstacle2)) {
            this.gameOver()
        }
    }

    checkCollision(player, obstacle) {
        return player.posx < obstacle.posx + obstacle.sizex &&
            player.posx + player.sizex > obstacle.posx &&
            player.posy < obstacle.posy + obstacle.sizey &&
            player.posy + player.sizey > obstacle.posy
    }

    gameOver() {
        this.obstacle1.velocity = 0
        this.obstacle2.velocity = 0
        this.gameover = true
        ctx.fillStyle = "blue"
        ctx.fillRect((canvas.width / 2) - 150, (canvas.height / 2) - 50, 300, 100)
        ctx.fillStyle = "black"
        ctx.font = "40px Arial"
        ctx.fillText("Game Over", (canvas.width / 2) - 95, (canvas.height / 2))
    }

    loop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        this.player.jump()
        this.moveObstacles()
        this.verifyCollision()
        this.resetObstacles()
        this.obstacle1.draw()
        this.obstacle2.draw()
        this.player.draw()
        this.drawPoints()
        requestAnimationFrame(() => this.loop())
    }
}

const game = new Game()