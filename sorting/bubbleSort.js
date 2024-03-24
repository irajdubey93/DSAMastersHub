let arrayOfNumbers = [2, 7, 3, 1, 4, 8, 9, 1, 0];
let lengthOfArray = arrayOfNumbers.length;

const bubbleSort = (arrayOfNumbers) => {
  for (let i = 0; i < lengthOfArray; i++) {
    for (let j = 0; j < lengthOfArray; j++) {
      if (arrayOfNumbers[j] > arrayOfNumbers[j + 1])
        [arrayOfNumbers[j], arrayOfNumbers[j + 1]] = [arrayOfNumbers[j + 1], arrayOfNumbers[j]];
    }
  }
  return arrayOfNumbers;
};

console.log(bubbleSort(arrayOfNumbers));

// Recursive Bubble Sort:
const bubbleSortRecursive = (arrayOfNumbers, length) => {
  if (length <= 1) return arrayOfNumbers;
  for (let j = 0; j < lengthOfArray; j++) {
    if (arrayOfNumbers[j] > arrayOfNumbers[j + 1])
      [arrayOfNumbers[j], arrayOfNumbers[j + 1]] = [arrayOfNumbers[j + 1], arrayOfNumbers[j]];
  }
  return bubbleSortRecursive(arrayOfNumbers, length - 1);
};

console.log(bubbleSortRecursive(arrayOfNumbers, lengthOfArray));
