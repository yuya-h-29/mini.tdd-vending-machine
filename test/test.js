const VendingMachine = require("../VendingMachine");
const { expect } = require("chai");
// DONE => Given that the balance is zero, when a coin is inserted, then the balance should rise and types of coins should be stored
// Given that no row is selected, when a row is selected the letter should be saved and printed to the console
// Given that a row is selected, when there is sufficient balance and inventory and a column is selected
// then the row and column should be logged to the console
// and a message should be logged stating "Here is your [item name]"
// and the item inventory should decrease by 1
// and the correct change should be returned (log type and number of coins to console)
// Given that a row and column are selected, when there is no inventory at that column, then an error message should be logged.
// Given that a row and column are selected, when the balance is insufficient to purchase the selected item, then an error message should be printed
// Given that the program has just started, when the balance is read, then it should read zero

describe("vending machine", () => {
  it("should accept valid coins", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    machine.insertCoin(500);

    // Assert
    expect(machine.till).to.deep.equal({
      10: 0,
      50: 0,
      100: 0,
      500: 1,
    });

    expect(machine.balance).to.equal(500); // Use an ES6 getter
  });

  it("should print letter to console when row is selected", () => {
    // Setup
    const machine = new VendingMachine();

    // Exercise
    const drink = machine.pressButton("A", 2);

    // Assert
    expect(drink.name).to.equal("Green Tea");
  });
});

// Hint: do not try to test what is being logged to console, instead think about how to
// structure your methods and have them return objects for things such as returned change
// or dispensed item, this then allows you to test the return value
