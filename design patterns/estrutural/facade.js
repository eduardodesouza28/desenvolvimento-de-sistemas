//estrutural

class SubsystemA {
  method() {
    console.log('This is a method of Subsystem-A');
  }
}

class SubsystemB {
  method() {
    console.log('This is a method of Subsystem-B');
  }
}

class SubsystemC {
  method() {
    console.log('This is a method of Subsystem-C');
  }
}

class SubsystemD {
  method() {
    console.log('This is a method of Subsystem-D');
  }
}

class Facade {
  constructor() {
    this.subsystemA = new SubsystemA();
    this.subsystemB = new SubsystemB();
    this.subsystemC = new SubsystemC();
    this.subsystemD = new SubsystemD()
  }

  commonInterface() {
    this.subsystemA.method();
    this.subsystemB.method();
    this.subsystemC.method();
    this.subsystemD.method();
  }
}
const facade = new Facade();
facade.commonInterface();
