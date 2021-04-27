class Hobbit {
  constructor(hobbitName) {
    this.name = hobbitName
    this.age = 0
    this.adult = false
    this.old = false
    this.hasRing = undefined
    if (this.name === 'Frodo') {
      this.hasRing = true
    } else {this.hasRing = false}
  }
  celebrateBirthday() {
    this.age = this.age + 1;
    if (this.age >= 101) {
      this.old = true;
    }
  }
  timeTravel(age) {
  this.age = age;
  if (this.age >= 33) {
    this.adult = true;
  }
}
}




module.exports = Hobbit;
