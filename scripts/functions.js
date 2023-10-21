function selectButton(button) {
  button.classList.add('selected');
}

function deselectButton(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.classList.remove('selected');
  }
}

function deselectButtons(buttonPrefix) {
  document.querySelectorAll(`[id^=${buttonPrefix}]`).forEach(button => {
    button.classList.remove('selected');
  });
}

function resetHamburger() {
  if (hamburger) {
    hamburger.reset();
    deselectButtons('stuffing');
    deselectButtons('topping');
    resetToppingCount();
  }
}

function resetToppingCount() {
  topping_mayo_count = 0;
  topping_sauce_count = 0;
  document.getElementById('topping_mayo').textContent = 'Майонез (20T)';
  document.getElementById('topping_sauce').textContent = 'Приправа (15T)';
}