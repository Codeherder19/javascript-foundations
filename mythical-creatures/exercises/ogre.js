class Ogre {
  constructor(name, lair) {
    this.name = name;
    this.home = lair || 'Swamp';
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter++;
    if (human.encounterCounter % 3 === 0) {
      this.swingAt();
    if (this.swings === 2) {
      human.knockedOut = true;
      }
    }
  }
  swingAt(human) {
      this.swings++;
    }
    apologize(human) {
      human.knockedOut = false;
    }
  }












module.exports = Ogre;
