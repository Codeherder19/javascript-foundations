class Stark {
  constructor(name, home) {
    this.name = name;
    this.location = home || 'Winterfell';
    this.safe = false;
  }
  houseWords() {
    if (this.safe === true) {
      return 'The North Remembers';
  } else {
    return 'Winter is Coming';
    }
  }
}







module.exports = Stark;
