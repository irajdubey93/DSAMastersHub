const arrayOfNumbers = [1, 2, 3, 4];

const productExceptSelf = (arrayOfNumbers) => {
  const lengthOfArray = arrayOfNumbers.length;
  const resultArray = Array(lengthOfArray).fill(1);

  let leftElementsProduct = 1;
  for (let i = 1; i < lengthOfArray; i++) {
    leftElementsProduct *= arrayOfNumbers[i - 1];
    resultArray[i] = leftElementsProduct;
  }

  let rightElementsProduct = 1;
  for (let i = lengthOfArray - 2; i >= 0; i--) {
    rightElementsProduct *= arrayOfNumbers[i + 1];
    resultArray[i] *= rightElementsProduct;
  }

  return resultArray;
};

let productsArray = productExceptSelf(arrayOfNumbers);
console.log(productsArray);
