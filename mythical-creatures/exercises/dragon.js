class Dragon {
  constructor(name, rider, color) {
    this.name = name
    this.rider = rider
    this.color = color
    this.hungry = true
    this.foodEaten = 0
  }
  eat() {
    this.foodEaten = this.foodEaten + 1;
    if (this.foodEaten === 3) {
      this.hungry = false;
    }
  }
}







module.exports = Dragon
