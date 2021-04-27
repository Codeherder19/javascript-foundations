class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {dresses: ['Iris']};
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust++;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(flowers) {
    var newFlowerDress = this.clothes.dresses.concat(flowers);
    this.clothes.dresses = newFlowerDress;
  }
  provoke() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(baby) {
    if (this.disposition === 'Vengeful') {
      baby.disposition = 'Malicious';
    } else {
      return baby;
    }
    this.humanWards.push(baby);
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    }
  }
}








module.exports = Fairy;
