class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = null;
  }
  noticesOgre() {
    if (this.encounterCounter / 3 === 1) {
      return true;
    } else if (this.encounterCounter / 3 === 2) {
      return true;
    } else {
      return false;
    }
  }
}









module.exports = Human;
