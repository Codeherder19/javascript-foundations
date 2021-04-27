class Pirate {
  constructor(name, job) {
    this.name = name
    this.job = job
    if (this.job === undefined) {
      this.job = 'scallywag'
    } else {this.job = job}
    this.cursed = false
    this.booty = 0
  }
  robShip() {
    this.booty = this.booty + 100;
    return 'YAARRR!';
  }
}













module.exports = Pirate
