//comportamental

class Sandwich {
  make() {
    this.cutBread();
    this.addFilling();
    this.addCondiments();
    this.wrap();
  }

  cutBread() {
    console.log('Cutting the bread.');
  }

  addCondiments() {
    console.log('Adding condiments (mayonnaise, mustard, etc.).');
  }

  wrap() {
    console.log('Wrapping the sandwich.');
  }

  addFilling() {
    throw new Error('Subclasses must implement the addFilling method.');
  }
}

class VeggieSandwich extends Sandwich {
  addFilling() {
    console.log('Adding veggies (lettuce, tomato, cucumber, etc.).');
  }
}

class TurkeySandwich extends Sandwich {
  addFilling() {
    console.log('Adding turkey slices.');
  }
}

class GrilledCheeseSandwich extends Sandwich {
  addFilling() {
    console.log('Adding cheese.');
  }
}

const veggieSandwich = new VeggieSandwich();
const turkeySandwich = new TurkeySandwich();
const grilledCheeseSandwich = new GrilledCheeseSandwich();

console.log('Making a Veggie Sandwich:');
veggieSandwich.make();

console.log('\nMaking a Turkey Sandwich:');
turkeySandwich.make();

console.log('\nMaking a Grilled Cheese Sandwich:');
grilledCheeseSandwich.make();
