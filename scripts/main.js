Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };
Hamburger.TOPPING_SAUCE = { price: 15, calories: 0 };

let topping_mayo_count = 0;
let topping_sauce_count = 0;

const buttons = document.querySelectorAll('.btn');
let hamburger;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    let count;
    switch (button.id) {
      case 'size_small':
        resetHamburger();
        hamburger = new Hamburger(Hamburger.SIZE_SMALL);
        deselectButton('size_large');
        selectButton(button);
        break;
      case 'size_large':
        resetHamburger();
        hamburger = new Hamburger(Hamburger.SIZE_LARGE);
        deselectButton('size_small');
        selectButton(button);
        break;
      case 'stuffing_cheese':
        hamburger.stuffing = Hamburger.STUFFING_CHEESE;
        deselectButtons('stuffing');
        selectButton(button);
        break;
      case 'stuffing_salad':
        hamburger.stuffing = Hamburger.STUFFING_SALAD;
        deselectButtons('stuffing');
        selectButton(button);
        break;
      case 'stuffing_potato':
        hamburger.stuffing = Hamburger.STUFFING_POTATO;
        deselectButtons('stuffing');
        selectButton(button);
        break;
      case 'topping_mayo':
        hamburger.addTopping(Hamburger.TOPPING_MAYO);
        count = ++topping_mayo_count;
        button.textContent = button.textContent.split(' ')[0] + ' (' + count + ')';
        button.classList.add('selected');
        break;
      case 'topping_sauce':
        hamburger.addTopping(Hamburger.TOPPING_SAUCE);
        count = ++topping_sauce_count;
        button.textContent = button.textContent.split(' ')[0] + ' (' + count + ')';
        button.classList.add('selected');
        break;
    }
    document.getElementById('price').textContent = hamburger.calculatePrice() + " (T)coins";
    document.getElementById('calories').textContent = hamburger.calculateCalories() + " callories";
  });
});