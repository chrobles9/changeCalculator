// Parse and calculate for each coin value

function changeCalculate() {
  // Gets users cents input
  let cents = document.getElementById("centsInput").value;

  // Stores new number to be calculated
  let newNum = 0;

  // Loop through coin array object to calculate and display proper change amounts
  coins.forEach((coin) => {
    // Calculates cent amount after dividing corresponding coin value
    newNum = parseInt(cents / coin.value);
    // Displays coin amount to corresponding label
    document.getElementById(coin.name).value = newNum;

    cents = cents - coin.value * newNum;
  });
}

// Array of coin objects
const coins = [
  { name: "quarters", value: 25 },
  { name: "dimes", value: 10 },
  { name: "nickels", value: 5 },
  { name: "pennies", value: 1 },
];

// Get change element from doc and add button event listeners
document
  .getElementById("calculateBtn")
  .addEventListener("click", changeCalculate, false);
