class Magician {
  constructor(object, topHat, confident) {
    // object = object || {};
    this.name = object.name;
    this.topHat = object.topHat;
    this.confident = false;
    this.spellSlotsUsed = 0;
    if (this.topHat === undefined) {
      this.topHat = true;
      } else {this.topHat = object.topHat
      };
    }
    performShowStopper() {
      if (this.confident === false) {
        return 'Oh no! Practice more before attempting this trick!'
    } else {
      return 'WOW! The magician totally just sawed that person in half!'
    }
  }
    incantation(somatic) {
      return `${somatic.toUpperCase()}!`;
    }
    cast() {
        var rabbitTrick = 'PULL RABBIT FROM TOP HAT';
        var doveTrick = 'PULL DOVE FROM SLEEVE';
        this.spellSlotsUsed++;
        if (this.spellSlotsUsed >= 3) {
          this.confident = true;
        };
        if (this.topHat === true) {
          return rabbitTrick
      } else {
          return doveTrick;
      }
    };
  }







module.exports = Magician
