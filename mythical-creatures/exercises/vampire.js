class Vampire {
  constructor(name, petType, thirstLevel) {
    this.name = name;
    if (petType === undefined) {
      this.pet = 'bat';
    } else {
    this.pet = petType
  }
  this.thirsty = true;
  }
  drink() {
    this.thirsty = false;
  }
  }




module.exports = Vampire
