// Parse and calculate for each coin value
function changeCalculate(event) {
  // Prevents form submission 
  event.preventDefault();
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
    // Subtract current coin value from cents remaining for new total
    cents = cents - coin.value * newNum;
  });
}

// Array of coin objects for loop in function
const coins = [
  { name: "quarters", value: 25 },
  { name: "dimes", value: 10 },
  { name: "nickels", value: 5 },
  { name: "pennies", value: 1 },
];

// Get form and add event listener to submit button 
const form = document.getElementById("form");
form.addEventListener("submit", changeCalculate);