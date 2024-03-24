let arrayOfNumbers = [2, 7, 3, 1, 4, -1,8, 9];
const selectionSort = (arrayOfNumbers) => {
  let lengthOfArray = arrayOfNumbers.length;
  for (let i = 0; i < lengthOfArray; i++) {
    let minIndex = i;
    for (let j = i + 1; j < lengthOfArray; j++) {
      if (arrayOfNumbers[minIndex] > arrayOfNumbers[j]) minIndex = j;
    }
    [arrayOfNumbers[i], arrayOfNumbers[minIndex]] = [arrayOfNumbers[minIndex], arrayOfNumbers[i]];
  }
  return arrayOfNumbers;
};

console.log(selectionSort(arrayOfNumbers));
