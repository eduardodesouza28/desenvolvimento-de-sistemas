//comportamental

class Command {
  execute() { }
}
class OnCommand extends Command {
  constructor(lightBulb) {
    super();
    this.lightBulb = lightBulb;
  }

  execute() {
    this.lightBulb.On();
  }
}

class OffCommand extends Command {
  constructor(lightBulb) {
    super();
    this.lightBulb = lightBulb;
  }

  execute() {
    this.lightBulb.Off();
  }
}
class MidCommand extends Command {
  constructor(lightBulb) {
    super();
    this.lightBulb = lightBulb;
  }

  execute() {
    this.lightBulb.Mid();
  }
}
class LightBulb {
  On() {
    console.log('Bulb is ON');
  }

  Off() {
    console.log('Bulb is OFF');
  }
  Mid() {
    console.log('Bulb is MID');
  }
}
class Switch {
  constructor() {
    this.command = null;
  }

  setCommand(command) {
    this.command = command;
  }

  executeCommand() {
    this.command.execute();
  }
}
const light = new LightBulb();
const On = new OnCommand(light);
const Off = new OffCommand(light);
const Mid = new MidCommand(light);
const switchButton = new Switch();

switchButton.setCommand(On);
switchButton.executeCommand();

switchButton.setCommand(Off);
switchButton.executeCommand();

switchButton.setCommand(Mid);
switchButton.executeCommand();
