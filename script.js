const numberButtons = document.querySelectorAll('.number-btn');
const generateButton = document.getElementById('generate-btn');
const resultDiv = document.getElementById('result');

let selectedNumber = null;

// Event listener for number buttons
numberButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    // Highlight selected number
    numberButtons.forEach((b) => b.classList.remove('selected'));
    btn.classList.add('selected');

    // Store selected number
    selectedNumber = parseInt(btn.getAttribute('data-number'));
    generateButton.disabled = false; // Enable generate button
  });
});

// Event listener for generate button
generateButton.addEventListener('click', () => {
  if (selectedNumber) {
    const combination = generateCombination(selectedNumber);
    resultDiv.textContent = `Combination: ${combination.join(', ')}`;
  }
});

// Function to generate three random numbers with a given sum
function generateCombination(sum) {
  const num1 = Math.floor(Math.random() * (sum - 2)) + 1;
  const num2 = Math.floor(Math.random() * (sum - num1 - 1)) + 1;
  const num3 = sum - num1 - num2;
  return [num1, num2, num3];
}
generateButton.addEventListener('click', () => {
  if (selectedNumber) {
    const combination = generateCombination(selectedNumber);
    resultDiv.innerHTML = `
      <p>Your selected number: ${selectedNumber}</p>
      <p>Generated Combination: <strong>${combination.join(', ')}</strong></p>
    `;
  }
});
