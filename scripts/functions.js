/* function selectButton(button) {
  // First, remove the 'selected' class from all buttons in the same group
  deselectButtons(button.getAttribute('data-group'));
  // Then, add the 'selected' class to the clicked button
  button.classList.add('selected');
} */

/* 
function resetHamburger() {
  hamburger.reset();
  resetToppingCount();
} */

function deselectButtons(group) {
  // Query all buttons with the same data-group attribute and remove the 'selected' class
  document.querySelectorAll(`.btn[data-group="${group}"]`).forEach(btn => {
    btn.classList.remove('selected');
  });
}

function updateDisplay() {
  document.getElementById('price').textContent = `${hamburger.calculatePrice()} (T)coins`;
  document.getElementById('calories').textContent = `${hamburger.calculateCalories()} calories`;
}

function resetToppingCount() {
  topping_mayo_count = 0;
  topping_sauce_count = 0;
  document.getElementById('topping_mayo').textContent = 'Mayo (20T)';
  document.getElementById('topping_sauce').textContent = 'Salt&Paper (15T)';
}