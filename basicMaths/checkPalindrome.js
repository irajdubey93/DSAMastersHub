const reverseNumber = (num) => {
  let reversedNumber = 0;
  while (num > 0) {
    reversedNumber = reversedNumber * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return reversedNumber;
};

console.log(reverseNumber(143));

const checkPalindrome = (num) => {
  if (num === reverseNumber(num)) return true;
  else return false;
};

console.log(checkPalindrome(141));
