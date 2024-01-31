const arrayOfNumbers = [1, 2, 0, 4];

const findMin = (arrayOfNumbers) => {
  let left = 0;
  let right = arrayOfNumbers.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arrayOfNumbers[mid] > arrayOfNumbers[right]) {
      // The minimum element is in the right half
      left = mid + 1;
    } else {
      // The minimum element is in the left half or at the mid index
      right = mid;
    }
  }

  // The minimum element is found at the 'left' index
  return arrayOfNumbers[left];
};

let output = findMin(arrayOfNumbers);
console.log(output);
