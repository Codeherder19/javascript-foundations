class Sphinx {
  constructor() {
  this.riddles = [];
  this.heroesEaten = 0;
  }
  collectRiddle(riddle) {
    if (this.riddles.length === 3) {
      this.riddles.shift();
    }
    this.riddles.push(riddle);
  }
  attemptAnswer(answer) {
    for (var i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === answer) {
        this.riddles.pop();
        return 'That wasn\'t that hard, I bet you don\'t get the next one';
        }
      }
      if (this.riddles.length === 3) {
        this.heroesEaten++;
      }
      if (this.riddles.length === 1) {
        return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS "${answer}"???`;
      }
    }
  }









module.exports = Sphinx;
