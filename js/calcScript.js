// Parse and calculate for each coin value

function changeCalculate() {
  // Gets users cents input
  let cents = document.getElementById("centsInput").value;

  // Stores new number to be calculated
  let newNum = 0;

  // Calculate quarters
  newNum = parseInt(cents / 25);
  // Displays quarter amount to label
  document.getElementById("quarters").value = newNum;

  // Calculate amount of change left after subtracting quarter amount
  cents = cents - 25 * newNum;

  // Calculate dimes
  newNum = parseInt(cents / 10);
  // display dime amount to label
  document.getElementById("dimes").value = newNum;

  // Calculate amount of change left after subtracting dime amount
  cents = cents - 10 * newNum;
  // Calculate nickels
  newNum = parseInt(cents / 5);
  // display nickels amount to label
  document.getElementById("nickels").value = newNum;

  // Calculate amount of change left after subtracting nickel amount
  cents = cents - 5 * newNum;
  // Calculate pennies
  newNum = parseInt(cents / 1);
  // display nickel amount to label
  document.getElementById("pennies").value = newNum;

  // Calculate amount of change left over after subtracting penny amount
  cents = cents - newNum;
}

// Get change element from doc and add button event listeners
document
  .getElementById("calculateBtn")
  .addEventListener("click", changeCalculate, false);
