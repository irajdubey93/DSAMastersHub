const arrayOfNumbers = [-2,0,-1];

const maxProductSubArray = (arrayOfNumbers) => {
  // Check if the array is empty
  if (!arrayOfNumbers.length) {
    return 0;
  }
  // Initialize variables to track the maximum sum
  let maxSum = currentSum = arrayOfNumbers[0];
  // Iterate through the array starting from the second element
  for (let i = 1; i < arrayOfNumbers.length; i++) {
    // Update currentSum to be the maximum of the current element or the sum of currentSum and the current element
    currentSum = Math.max(arrayOfNumbers[i], currentSum * arrayOfNumbers[i]);
    // Update maxSum to be the maximum of maxSum and currentSum
    maxSum = Math.max(maxSum, currentSum);
  }
  // Return the final maximum subarray sum
  return maxSum;
};

const output = maxProductSubArray(arrayOfNumbers);
console.log(output);
