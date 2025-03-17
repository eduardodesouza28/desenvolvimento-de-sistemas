// criacao
class UIFactory {
  createButton() {}
  createInputField() {}
  createTooltip() {}
}

class OrangeThemeFactory extends UIFactory {
  createButton() {
    return new OrangeThemeButton()
  }
  createInputField() {
    return new OrangeThemeInputField()
  }
  createTooltip() {
    return new OrangeThemeTooltip()
  }
}

class LightThemeFactory extends UIFactory {
  createButton() {
    return new LightThemeButton()
  }
  createInputField() {
    return new LightThemeInputField()
  }
  createTooltip() {
    return new LightThemeTooltip()
  }
}

class DarkThemeFactory extends UIFactory {
  createButton() {
    return new DarkThemeButton()
  }
  createInputField() {
    return new DarkThemeInputField()
  }
  createTooltip() {
    return new DarkThemeTooltip()
  }
}

class Button {}

class LightThemeButton extends Button {
  constructor() {
    super()
    console.log('Botão de tema claro criado')
  }
}

class DarkThemeButton extends Button {
  constructor() {
    super()
    console.log('Botão de tema escuro criado')
  }
}

class OrangeThemeButton extends Button {
  constructor() {
    super()
    console.log('Botão de tema laranja criado')
  }
}

const lightFactory = new LightThemeFactory()
const lightButton = lightFactory.createButton()

const darkFactory = new DarkThemeFactory()
const darkButton = darkFactory.createButton()

const orangeFactory = new OrangeThemeFactory()
const orangeButton = orangeFactory.createButton()

