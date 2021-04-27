class Werewolf {
  constructor(name) {
    this.name = name;
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  }
  transform() {
    if (this.human === true) {
      this.human = false;
      this.wolf = true;
      this.hungry = true;
    } else {
      this.human = true;
      this.wolf = false;
      this.hungry = false;
    }
  }
  eat(victim) {
    if (this.hungry === true) {
      this.hungry = false;
    }
  }
}







module.exports = Werewolf;
