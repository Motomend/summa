const numberButtons = document.querySelectorAll('.number-btn');
const generateButton = document.getElementById('generate-btn');
const selectedNumberDisplay = document.getElementById('selected-number');
const resultDiv = document.getElementById('result');

let selectedNumber = null;

// Event listener for number buttons
numberButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Reset previous selection
    numberButtons.forEach((b) => b.classList.remove('selected'));
    
    // Highlight the current selection
    btn.classList.add('selected');
    
    // Update selected number
    selectedNumber = parseInt(btn.getAttribute('data-number'));
    
    // Update UI
    selectedNumberDisplay.textContent = `Selected Number: ${selectedNumber}`;
    generateButton.disabled = false; // Enable generate button
  });
});

// Event listener for generate button
generateButton.addEventListener('click', () => {
  if (selectedNumber) {
    const combination = generateCombination(selectedNumber);
    resultDiv.innerHTML = `
      <p>Your selected number: ${selectedNumber}</p>
      <p>Generated Combination: <strong>${combination.join(', ')}</strong></p>
    `;
  }
});

// Function to generate three random numbers with a given sum
function generateCombination(sum) {
  const num1 = Math.floor(Math.random() * (sum - 2)) + 1;
  const num2 = Math.floor(Math.random() * (sum - num1 - 1)) + 1;
  const num3 = sum - num1 - num2;
  return [num1, num2, num3];
}
