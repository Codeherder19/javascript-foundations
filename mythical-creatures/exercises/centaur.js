class Centaur {
  constructor(object) {
    this.name = object.name;
    this.breed = object.type;
    this.cranky = false;
    this.standing = true;
    this.arrowsFired = 0;
    this.layingDown = false;
  }
  shoot() {
    if (this.cranky === true || this.layingDown === true) {
      return 'NO!'
    };
    this.arrowsFired++;
    if (this.arrowsFired >= 3) {
      this.cranky = true
    };
    return 'Twang!!!'
  }
  run() {
    if (this.cranky === false) {
      this.cranky = true;
    } else if (this.cranky === true) {
      return 'NO!'
    };
    if (this.layingDown === true) {
      return 'NO!'
    } return 'Clop clop clop clop!!!'
  };
  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else if (this.standing === false) {
      this.cranky = false;
      return 'ZZZZ';
    }
  };
  layDown() {
    if (this.standing === true) {
      this.standing = false;
      this.layingDown = true;
    }
  }
  standUp() {
    if (this.standing === false) {
      this.standing = true;
      this.layingDown = false;
    }
  }
  drinkPotion() {
    if (this.layingDown === false && this.cranky === true) {
      this.cranky = false;
      } else if (this.layingDown === true) {
        return 'Not while I\'m laying down!';
      } else if (this.cranky === false) {
        this.cranky = true;
      }
    }
  }







module.exports = Centaur;
