// Static properties
Hamburger.SIZE_SMALL = { price: 50, calories: 20 };
Hamburger.SIZE_LARGE = { price: 100, calories: 40 };
Hamburger.STUFFING_CHEESE = { price: 10, calories: 20 };
Hamburger.STUFFING_SALAD = { price: 20, calories: 5 };
Hamburger.STUFFING_POTATO = { price: 15, calories: 10 };
Hamburger.TOPPING_MAYO = { price: 20, calories: 5 };
Hamburger.TOPPING_SAUCE = { price: 15, calories: 0 };

// Initial hamburger setup
let hamburger = new Hamburger(Hamburger.SIZE_SMALL);
let topping_mayo_count = 0;
let topping_sauce_count = 0;

// Event delegation for the container
const selectionContainer = document.querySelector('.container');

selectionContainer.addEventListener('click', event => {
  const button = event.target.closest('.btn');
  if (!button) return;

  // Determine the group of the button clicked
  const group = button.dataset.group;

  // Deselect other buttons in the same group
  deselectButtons(group);

  // Apply the selected class to the clicked button
  button.classList.add('selected');

  // Perform action based on the button id
  switch (button.id) {
    case 'size_small':
      hamburger = new Hamburger(Hamburger.SIZE_SMALL);
      resetToppingCount();
      break;
    case 'size_large':
      hamburger = new Hamburger(Hamburger.SIZE_LARGE);
      resetToppingCount();
      break;
    case 'stuffing_cheese':
      hamburger.stuffing = Hamburger.STUFFING_CHEESE;
      resetToppingCount();
      break;
    case 'stuffing_salad':
      hamburger.stuffing = Hamburger.STUFFING_SALAD;
      resetToppingCount();
      break;
    case 'stuffing_potato':
      hamburger.stuffing = Hamburger.STUFFING_POTATO;
      resetToppingCount();
      break;
    case 'topping_mayo':
      hamburger.addTopping(Hamburger.TOPPING_MAYO);
      topping_mayo_count++;
      button.textContent = `Mayo (${topping_mayo_count})`;
      break;
    case 'topping_sauce':
      hamburger.addTopping(Hamburger.TOPPING_SAUCE);
      topping_sauce_count++;
      button.textContent = `Salt&Paper (${topping_sauce_count})`;
      break;
  }

  // Update the display with the new price and calories
  updateDisplay();
});