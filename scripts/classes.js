class Hamburger {
  constructor(size) {
    this.size = size;
    this.stuffing = null;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculateCalories() {
    let totalCalories = this.size.calories;
    if (this.stuffing) totalCalories += this.stuffing.calories;
    this.toppings.forEach(topping => totalCalories += topping.calories);
    return totalCalories;
  }

  calculatePrice() {
    let totalPrice = this.size.price;
    if (this.stuffing) totalPrice += this.stuffing.price;
    this.toppings.forEach(topping => totalPrice += topping.price);
    return totalPrice;
  }

  reset() {
    this.stuffing = null;
    this.toppings = [];
  }
}