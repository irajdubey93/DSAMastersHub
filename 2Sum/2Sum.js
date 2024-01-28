/*
Input: arrayOfNumbers = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because arrayOfNumbers[0] + arrayOfNumbers[1] == 9, we return [0, 1].

Input: arrayOfNumbers = [3,2,4], target = 6
Output: [1,2]

Input: arrayOfNumbers = [3,3], target = 6
Output: [0,1]
*/
const findTwoSumIndices = (arrayOfNumbers, target) => {
  const numIndicesMap = new Map();

  for (let currentIndex = 0; currentIndex < arrayOfNumbers.length; currentIndex++) {
    const currentNum = arrayOfNumbers[currentIndex];
    const complement = target - currentNum;

    if (numIndicesMap.has(complement)) {
      const complementIndex = numIndicesMap.get(complement);
      return [complementIndex, currentIndex];
    }

    numIndicesMap.set(currentNum, currentIndex);
  }

  return null;
};

const arrayOfNumbers = [3, 2, 4];
const twoSumIndices = findTwoSumIndices(arrayOfNumbers, 5);

console.log(twoSumIndices);
