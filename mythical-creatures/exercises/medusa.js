class Medusa {
  constructor(name) {
   this.name = name;
   this.statues = [];
 }
  stare(perseus) {
    perseus.stoned = true;
    if (this.statues.length < 3) {
      this.statues.push(perseus);
    } else {
      this.statues.shift().stoned = false;
      this.statues.push(perseus);
    }
  }
}


module.exports = Medusa;
