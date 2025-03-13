//comportamental

class SupportHandler {
  setNextHandler(handler) {
    this.nextHandler = handler
  }

  handleRequest(query) {
    throw new Error("This method should be overridden!")
  }
}

class Level1Support extends SupportHandler {
  handleRequest(query) {
    if (query.difficulty === "easy") {
      console.log("Suporte Nível 1: Lidando com consulta fácil.")
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(query)
    }
  }
}

class Level2Support extends SupportHandler {
  handleRequest(query) {
    if (query.difficulty === "medium") {
      console.log("Suporte Nível 2: Lidando com consulta média.")
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(query)
    }
  }
}

class Level3Support extends SupportHandler {
  handleRequest(query) {
    if (query.difficulty === "hard") {
      console.log("Suporte Nível 3: Lidando com consulta difícil.")
    } else if (this.nextHandler) {
      this.nextHandler.handleRequest(query)
    }
    // else {
    //   console.log("Consulta não pode ser tratada em nenhum nível.")
    // }
  }
}

class UnknownSupport extends SupportHandler {
  handleRequest(query) {
    console.log("lidando com consulta de nivel desconhecido.")
  }
}

const level1 = new Level1Support()
const level2 = new Level2Support()
const level3 = new Level3Support()
const unknown = new UnknownSupport()

level1.setNextHandler(level2)
level2.setNextHandler(level3)
level3.setNextHandler(unknown)

const easyQuery = { difficulty: "easy" }
const mediumQuery = { difficulty: "medium" }
const hardQuery = { difficulty: "hard" }
const unknownQuery = { difficulty: "unknown" }

level1.handleRequest(easyQuery)
level1.handleRequest(mediumQuery)
level1.handleRequest(hardQuery)
level1.handleRequest(unknownQuery)