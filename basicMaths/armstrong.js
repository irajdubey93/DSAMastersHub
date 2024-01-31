const checkArmstrong = (num) => {
  if (num === cubeOfNumber(num)) return true;
  else return false;
};

const cubeOfNumber = (num) => {
  let newNum = 0;
  const numberOfDigits = countDigits(num);
  while (num > 0) {
    newNum += Math.pow(num % 10, numberOfDigits);
    num = Math.floor(num / 10);
  }
  return newNum;
};

const countDigits = (num) => {
  const numString = Math.abs(num).toString();
  return numString.length;
};

console.log(checkArmstrong(1634));
