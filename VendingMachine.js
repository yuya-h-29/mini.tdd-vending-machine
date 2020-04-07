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
    }; //okkkkkkkkkkk

    const appleJuice = { name: `Apple Juice`, price: 350, count: 5 };
    const coffee = { name: "Tully's", price: 250, count: 7 };
    const greenTea = { name: "Green Tea", price: 150, count: 4 };
    const beer = { name: "Corona", price: 350, count: 7 };
    const calpis = { name: "Calpis", price: 150, count: 10 };
    const coke = { name: "Coke", price: 150, count: 10 };
    const kombucha = { name: "Kombucha", price: 150, count: 10 };
    const tea = { name: "Jasmine Tea", price: 150, count: 10 };
    const corona = { name: "Corona", price: 150, count: 10 };
    const fanta = { name: "Fanta", price: 150, count: 10 };
    const sapporo = { name: "Sapporo", price: 150, count: 10 };
    const water = { name: "Water", price: 150, count: 10 };

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

  pressButton(row, column) {
    console.log(row);
    return this.inventory[row][column];
  }
};
/*
  >>> Don't forget to use module.exports!
  What is that? Well, glad you asked.
  Read about it here: https://www.sitepoint.com/understanding-module-exports-exports-node-js/
*/
