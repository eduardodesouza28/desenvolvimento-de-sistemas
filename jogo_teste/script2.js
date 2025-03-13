
const canvas = document.getElementById("canvaJogo")
const ctx = canvas.getContext('2d')
canvas.width = 400
canvas.height = 400
let framex = 0;
let framey = 0;
let gameFrame = 0
const staggerFrames = 8
let nR = Math.floor(Math.random() * 200 + 1)
let nR2 = Math.floor(Math.random() * 200 + 1)

class Entity {
	constructor(sizex, sizey, posx, posy) {
		this.sizex = sizex
		this.sizey = sizey
		this.posx = posx
		this.posy = posy
	}
	draw() {
		ctx.fillStyle = 'white'
		ctx.fillRect(this.posx, this.posy, this.sizex, this.sizey)
	}
}

class Player extends Entity {
	constructor() {
		super(50, 50, 25, canvas.height - 200)
		this.jumpVelocity = 0
		this.gravity = 0.5
		this.jumping = false
		this.onRoof = false
		this.spacePressed = false
	}

	draw() {

		ctx.drawImage(document.getElementById("flappy"), framex * 92, framey * 64, 92, 64, this.posx, this.posy, this.sizex, this.sizey)
		if (gameFrame % staggerFrames == 0) {
			if (framex < 2) {
				framex++
			}
			else {
				framex = 0
			}
		}
		gameFrame++
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
				this.jumpVelocity = 0
			}
		}
	}
}

class Obstacle extends Entity {
	constructor(posx, posy, sizex, sizey) {
		super(sizex, sizey, posx, posy)
		this.velocity = 5
	}

	draw() {
		ctx.drawImage(document.getElementById("pipe"), this.posx, this.posy)
	}

	move() {
		this.posx -= this.velocity
	}

	reset() {
		this.posx = canvas.width + 10
		if (nR >= 140) {
			nR = 140
		}
		if (nR <= 20) {
			nR = 25
		}
		this.sizey = nR
		this.posy = canvas.height - this.sizey
		this.velocity += 0.5
	}
}
class ObstacleUp extends Entity {
	constructor(posx, posy, sizex, sizey) {
		super(sizex, sizey, posx, posy)
		this.velocity = 5
	}

	draw() {
		ctx.drawImage(document.getElementById("pipeUp"), this.posx, this.sizey - 200)
	}

	move() {
		this.posx -= this.velocity
	}

	reset() {
		this.posx = canvas.width + 10
		if (nR2 >= 140) {
			nR2 = 140
		}
		if (nR <= 20) {
			nR = 25
		}
		this.sizey = nR
		this.posy = 0
		this.velocity += 0.5
	}
}

class Game {
	#points
	constructor() {
		this.player = new Player()
		this.obstacle1 = new Obstacle(canvas.width + 10, canvas.height - 100, 137, 100)
		this.obstacle2 = new ObstacleUp(canvas.width + 10, 0, 137, 100)
		this.#points = 0
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
		ctx.fillText(this.#points, canvas.width - 220, canvas.height - 350)
	}

	resetObstacles() {
		if (this.obstacle1.posx < -137) {
			this.obstacle1.reset()
			this.#points++
		}
		if (this.obstacle2.posx < -137) {
			this.obstacle2.reset()
			nR = Math.floor(Math.random() * 200 + 1)
			nR2 = Math.floor(Math.random() * 200 + 1)

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