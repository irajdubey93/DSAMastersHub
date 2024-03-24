let arrayOfNumbers = [1, 4, 5, 2, 7, 3, 1, 4, 8, 9, 1, 0];
let lengthOfArray = arrayOfNumbers.length;

const insertionSort = (arrayOfNumbers) => {
  let lengthOfArray = arrayOfNumbers.length;
  for (let i = 1; i < lengthOfArray; i++) {
    let minElement = arrayOfNumbers[i];
    let j = i - 1;
    while (j >= 0 && arrayOfNumbers[j] > minElement) {
      arrayOfNumbers[j + 1] = arrayOfNumbers[j];
      j--;
    }
    arrayOfNumbers[j + 1] = minElement;
  }
  return arrayOfNumbers;
};

console.log(insertionSort(arrayOfNumbers));

//  Recursive Insertion Sort:
const insertionSortRecursive = (arrayOfNumbers, length, index) => {
  if (length <= 1 || index == length) return arrayOfNumbers;
  let minElement = arrayOfNumbers[index];
  let j = index - 1;
  while (j >= 0 && arrayOfNumbers[j] > minElement) {
    arrayOfNumbers[j + 1] = arrayOfNumbers[j];
    j--;
  }
  arrayOfNumbers[j + 1] = minElement;
  return insertionSortRecursive(arrayOfNumbers, lengthOfArray - 1, index + 1);
};

console.log(insertionSortRecursive(arrayOfNumbers, lengthOfArray, 1));
