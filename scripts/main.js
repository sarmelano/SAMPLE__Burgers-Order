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
    
    if (this.stuffing)
      totalCalories += this.stuffing.calories;
  
    this.toppings.forEach(topping => totalCalories += topping.calories);
    
    return totalCalories;
  }  

  calculatePrice() {
    let totalPrice = this.size.price;
    
    if (this.stuffing)
      totalPrice += this.stuffing.price;
  
    this.toppings.forEach(topping => totalPrice += topping.price);
    
    return totalPrice;
  }
}

Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };
Hamburger.TOPPING_SAUCE = { price: 15, calories: 0 };

let size_small_count = 0;
let size_large_count = 0;
let stuffing_cheese_count = 0;
let stuffing_salad_count = 0;
let stuffing_potato_count = 0;
let topping_mayo_count = 0;
let topping_sauce_count = 0;

const buttons = document.querySelectorAll('.btn');
let hamburger;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let count;
    switch(button.id) {
      case 'size_small':
        hamburger = new Hamburger(Hamburger.SIZE_SMALL);
        count = ++size_small_count;
        break;
      case 'size_large':
        hamburger = new Hamburger(Hamburger.SIZE_LARGE);
        count = ++size_large_count;
        break;
      case 'stuffing_cheese':
        hamburger.stuffing = Hamburger.STUFFING_CHEESE;
        count = ++stuffing_cheese_count;
        break;
      case 'stuffing_salad':
        hamburger.stuffing = Hamburger.STUFFING_SALAD;
        count = ++stuffing_salad_count;
        break;
      case 'stuffing_potato':
        hamburger.stuffing = Hamburger.STUFFING_POTATO;
        count = ++stuffing_potato_count;
        break;
      case 'topping_mayo':
        hamburger.addTopping(Hamburger.TOPPING_MAYO);
        count = ++topping_mayo_count;
        break;
      case 'topping_sauce':
        hamburger.addTopping(Hamburger.TOPPING_SAUCE);
        count = ++topping_sauce_count;
        break;
    }
    button.textContent = button.textContent.split(' ')[0] + ' (' + count + ')';
    button.classList.add('selected');
    document.getElementById('price').textContent = hamburger.calculatePrice() + " (T)монет";
    document.getElementById('calories').textContent = hamburger.calculateCalories() + " калл";
  });
});