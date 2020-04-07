// your class here

module.exports = class VendingMachine {
  constructor() {
    this.till = {
      "10": 0,
      "50": 0,
      "100": 0,
      "500": 0,
    };
    this.balance = 0;

    this.data = {
      row: "",
      column: "",
      totalsoins: 0,
    };

    const appleJuice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const greenTea = { name: "Green Tea", price: 150, count: 4 };
    const beer = { name: "Corona", price: 350, count: 7 };
    const calpis = { name: "Calpis", price: 150, count: 10 };
    const coke = { name: "Coke", price: 150, count: 10 };
    const kombucha = { name: "Kombucha", price: 150, count: 10 };
    const tea = { name: "Jasmine Tea", price: 150, count: 10 };
    // const corona = { name: "Corona", price: 150, count: 10 };
    // const fanta = { name: "Fanta", price: 150, count: 10 };
    // const sapporo = { name: "Sapporo", price: 150, count: 10 };
    // const water = { name: "Water", price: 150, count: 10 };

    this.inventory = {
      A: [appleJuice, coffee, greenTea, beer],
      B: [calpis, coke, kombucha, tea],
      C: ["Corona", "Fanta", "Sapporo", "water"],
      D: ["Corn Soup", "RedBull", "Lemonade", "Ginger Ale"],
    };
  }

  getBalance() {
    const obj = this.till;
    let value = 0;
    for (let key in obj) {
      value += Number(key) * Number(obj[key]);
    }
    return (this.balance = value);
  }

  // getDrink (this.data){
  //   return drink;
  // }

  insertCoin(coin) {
    switch (coin) {
      case 10:
        this.till["10"] += 1;
        break;
      case 50:
        this.till["50"] += 1;
        break;
      case 100:
        this.till["100"] += 1;
        break;
      case 500:
        this.till["500"] += 1;
        break;
      default:
        console.error("Please insert a valid coin.");
    }
    this.getBalance();
  }

  // this.inventory = {
  //   A: [appleJuice, coffee, greenTea, beer],
  //   B: [calpis, coke, kombucha, tea],
  //   C: ["Corona", "Fanta", "Sapporo", "water"],
  //   D: ["Corn Soup", "RedBull", "Lemonade", "Ginger Ale"],
  // };

  // const appleJuice = { name: `Apple Juice`, price: 350, count: 5 };

  hasInventory(drink) {
    if (drink.count > 0) {
      return true;
    }
  }

  // changeReturn(change) {
  //   return this.returnChange(change);
  //   // let something = change % 500 ? this.till["500"] += 1:
  //   // change % 100 ? this.till["100"] += 1:
  //   // change % 50 ? this.till["50"] += 1:
  //   // change % 10 ? this.till["10"] += 1

  //   // return change;
  // }

  changeReturn(money, result = {}) {
    if (money - 500 >= 0) {
      money -= 500;
      result["500"] === undefined ? (result["500"] = 1) : result["500"]++;
      return this.changeReturn(money, result);
    } else if (money - 100 >= 0) {
      money -= 100;
      result["100"] === undefined ? (result["100"] = 1) : result["100"]++;
      return this.changeReturn(money, result);
    } else if (money - 50 >= 0) {
      money -= 50;
      result["50"] === undefined ? (result["50"] = 1) : result["50"]++;
      return this.changeReturn(money, result);
    } else if (money - 10 >= 0) {
      money -= 10;
      result["10"] === undefined ? (result["10"] = 1) : result["10"]++;
      return this.changeReturn(money, result);
    } else {
      return result;
    }
  }

  //   function example(…) {
  //     return condition1 ? value1
  //          : condition2 ? value2
  //          : condition3 ? value3
  //          : value4;
  // }

  // this.till = {
  //   "10": 0,
  //   "50": 0,
  //   "100": 0,
  //   "500": 0,
  // };

  pressButton(row, column) {
    const drink = this.inventory[row][column - 1];
    const change = this.balance - drink.price;
    if (this.hasInventory(drink) && this.balance > drink.price) {
      console.log(row, column);
      console.log(`Here is your ${drink.name}`);
      drink.count--;
      console.log(this.changeReturn(change));
      return drink.name;
    } else {
      console.log("error");
    }
  }
};
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
